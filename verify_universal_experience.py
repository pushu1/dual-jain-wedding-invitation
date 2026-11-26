import os
import sys
import json
import base64
import time
import socket
import subprocess
import urllib.request
import re
import pypdf

PROJECT_DIR = r'C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation'
EDGE_PATHS = [
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
]
EDGE_PATH = next((p for p in EDGE_PATHS if os.path.exists(p)), None)

# -----------------------------------------------------------------------------
# 1. CHECK ENGLISH ONLY (0 DEVANAGARI CHARACTERS)
# -----------------------------------------------------------------------------
devanagari_pattern = re.compile(r'[\u0900-\u097F]')
files_to_check = [
    'index.html',
    'print_new_luxury_cover.html',
    'src/App.jsx',
    'src/main.jsx',
    'src/components/WeddingHero.jsx',
    'src/components/CouplesSection.jsx',
    'src/components/WeddingTimeline.jsx',
    'src/components/VenueSection.jsx',
    'src/components/CountdownSection.jsx',
    'src/components/FamilyBlessingsSection.jsx',
    'src/components/FinalBlessingsFooter.jsx',
    'src/components/InvitationViewerModal.jsx',
    'src/components/MusicPlayer.jsx'
]

print("=== 1. VERIFYING STRICT ENGLISH ONLY REQUIREMENT ===")
found_devanagari = False
for rel_path in files_to_check:
    full_path = os.path.join(PROJECT_DIR, rel_path)
    if not os.path.exists(full_path):
        continue
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = devanagari_pattern.findall(content)
    if matches:
        print(f"FAILED: Found {len(matches)} Devanagari characters in {rel_path}: {set(matches)}")
        found_devanagari = True
    else:
        print(f"PASSED: {rel_path} is 100% English.")

assert not found_devanagari, "Devanagari characters found! Fix immediately."

# -----------------------------------------------------------------------------
# 2. CHECK PDF PROPERTIES & ACTIVE HYPERLINK
# -----------------------------------------------------------------------------
print("\n=== 2. VERIFYING SINGLE-PAGE PDF & CLICKABLE HYPERLINK ===")
pdf_path = os.path.join(PROJECT_DIR, 'dual-jain-wedding-invitation.pdf')
assert os.path.exists(pdf_path), "PDF file not found!"
reader = pypdf.PdfReader(pdf_path)
page_count = len(reader.pages)
print(f"PDF Page Count: {page_count}")
assert page_count == 1, f"Expected strictly 1 page, found {page_count}"

page = reader.pages[0]
annots = page.get('/Annots')
assert annots and len(annots) > 0, "No annotations found in PDF!"
found_target_url = False
expected_url = "https://pushu1.github.io/dual-jain-wedding-invitation/"
for a in annots:
    obj = a.get_object()
    action = obj.get('/A')
    if action and action.get('/URI') == expected_url:
        found_target_url = True
        print(f"PASSED: Found active clickable URI: {action.get('/URI')} at Rect {obj.get('/Rect')}")

assert found_target_url, f"Expected URI {expected_url} not found in PDF annotations!"

pdf_text = page.extract_text() or ''
assert not re.search(r'\bjain\b', pdf_text, re.I), f"Word 'Jain' found in PDF text! Content: {pdf_text}"
print("PASSED: Single-page PDF text contains 0 occurrences of 'Jain'.")

# -----------------------------------------------------------------------------
# 3. VERIFY IMMEDIATE FIRST-FRAME INVITATION ACROSS ALL 6 VIEWPORTS
# -----------------------------------------------------------------------------
print("\n=== 3. VERIFYING OPENING SCREEN CONTENT & REMOVAL OF 3 BUTTONS ===")
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('', 0))
PORT = s.getsockname()[1]
s.close()

profile_dir = os.path.join(PROJECT_DIR, f'.browser_verify_{PORT}')
os.makedirs(profile_dir, exist_ok=True)

class CDP:
    def __init__(self, host, port, path):
        self.sock = socket.create_connection((host, port), timeout=25)
        key = base64.b64encode(os.urandom(16)).decode('utf-8')
        req = (
            f"GET {path} HTTP/1.1\r\n"
            f"Host: {host}:{port}\r\n"
            f"Upgrade: websocket\r\n"
            f"Connection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\n"
            f"Sec-WebSocket-Version: 13\r\n\r\n"
        )
        self.sock.sendall(req.encode('utf-8'))
        resp = self.sock.recv(4096).decode('utf-8')
        assert "101" in resp
        self.msg_id = 0

    def send(self, method, params=None):
        self.msg_id += 1
        cid = self.msg_id
        payload = json.dumps({"id": cid, "method": method, "params": params or {}}).encode('utf-8')
        length = len(payload)
        mask = os.urandom(4)
        h = bytearray([0x81, 0x80 | length]) if length < 126 else bytearray([0x81, 0x80 | 126]) + length.to_bytes(2, 'big')
        h += mask
        masked = bytearray(b ^ mask[i % 4] for i, b in enumerate(payload))
        self.sock.sendall(h + masked)
        return self.recv(cid)

    def recv(self, target_id=None):
        while True:
            head = self._recv_exact(2)
            b1, b2 = head[0], head[1]
            length = b2 & 0x7F
            if length == 126:
                length = int.from_bytes(self._recv_exact(2), 'big')
            elif length == 127:
                length = int.from_bytes(self._recv_exact(8), 'big')
            data = self._recv_exact(length)
            msg = json.loads(data.decode('utf-8', errors='ignore'))
            if target_id is None or msg.get('id') == target_id:
                return msg

    def _recv_exact(self, n):
        buf = bytearray()
        while len(buf) < n:
            chunk = self.sock.recv(n - len(buf))
            if not chunk:
                raise EOFError("Socket closed")
            buf.extend(chunk)
        return buf

URL = "http://localhost:3000/index.html"

proc = subprocess.Popen([
    EDGE_PATH,
    f'--remote-debugging-port={PORT}',
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    f'--user-data-dir={profile_dir}',
    URL
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

viewports = [
    {"name": "Desktop 1440x900", "width": 1440, "height": 900, "isMobile": False},
    {"name": "Laptop 1366x768", "width": 1366, "height": 768, "isMobile": False},
    {"name": "Tablet 768x1024", "width": 768, "height": 1024, "isMobile": True},
    {"name": "iPhone 390x844", "width": 390, "height": 844, "isMobile": True},
    {"name": "Android 360x800", "width": 360, "height": 800, "isMobile": True},
    {"name": "Android Large 412x915", "width": 412, "height": 915, "isMobile": True},
]

try:
    time.sleep(2.5)
    targets_url = f"http://127.0.0.1:{PORT}/json"
    with urllib.request.urlopen(targets_url) as resp:
        targets = json.loads(resp.read().decode())

    page_target = next(t for t in targets if t.get('type') == 'page')
    ws_url = page_target['webSocketDebuggerUrl']
    host_port, path = ws_url.replace("ws://", "").split('/', 1)
    host, port_str = host_port.split(':')
    cdp = CDP(host, int(port_str), '/' + path)

    cdp.send("Page.enable")
    cdp.send("Runtime.enable")
    time.sleep(1.0)

    # 1. Verify opening screen elements and ensure the 3 buttons are removed from hero
    print("Verifying opening invitation screen content & button removal...")
    check_eval = cdp.send("Runtime.evaluate", {
        "expression": """(() => {
            const hero = document.querySelector('.wedding-hero-section');
            const ganesha = hero ? hero.querySelector('.hero-ganesha-img') : null;
            const shloka = hero ? hero.querySelector('.hero-shloka-text') : null;
            const heading = hero ? hero.querySelector('.hero-royal-badge') : null;
            const dateBadge = hero ? hero.querySelector('.hero-date-badge') : null;
            const scrollIndicator = hero ? hero.querySelector('.hero-scroll-indicator') : null;
            
            // Check that the 3 buttons are completely absent from the first page hero
            const openBtn = hero ? hero.querySelector('.btn-main-open-invitation') : null;
            const heroButtons = hero ? Array.from(hero.querySelectorAll('button, a')).map(b => b.innerText.trim()) : [];
            const hasHeroOpenBtn = heroButtons.some(t => t.includes('CLICK HERE') || t.includes('OPEN INVITATION'));
            const hasHeroViewCard = heroButtons.some(t => t.includes('VIEW DIGITAL CARD') || t.includes('VIEW CARD'));
            const hasHeroDownloadPdf = heroButtons.some(t => t.includes('DOWNLOAD PDF'));

            // Check that digital card and PDF functionality are preserved in navigation
            const navViewCard = document.querySelector('.nav-btn-view-card');
            const navDownloadPdf = document.querySelector('.nav-btn-download-pdf');

            const couplesSection = document.getElementById('couples-section');
            const couplesText = couplesSection ? couplesSection.innerText : '';
            const hasVaratPrasthanInCouples = couplesText.includes('VARAT PRASTHAN');
            const hasVaratSwagatInCouples = couplesText.includes('VARAT SWAGAT');
            const hasSamdariNoteInCouples = couplesText.includes('Departure to Samdari by bus');
            const hasBalotraNoteInCouples = couplesText.includes('Welcome of Baraat arriving from Balotra');

            const eventsSection = document.getElementById('events-section');
            const eventsText = eventsSection ? eventsSection.innerText : '';
            const hasBaraatPrasthan = eventsText.includes('Baraat Prasthan');
            const hasBaraatSwagat = eventsText.includes('Baraat Swagat');
            const hasVaratInEvents = eventsText.includes('Varat');

            const venueSection = document.getElementById('venue-section');
            const countdownSection = document.getElementById('countdown-section');
            const familySection = document.getElementById('family-section');
            const familyText = familySection ? familySection.innerText : '';
            const hasVisheshAshirwad = familyText.includes('VISHESH ASHIRWAD');
            const hasSwagatatur = familyText.includes('SWAGATATUR');
            const hasJavaiPaksh = familyText.includes('JAVAI PAKSH');
            const hasNanihalPaksh = familyText.includes('NANIHAL PAKSH');
            const hasBhanejPaksh = familyText.includes('BHANEJ PAKSH');
            const hasVineet = familyText.includes('VINEET');
            const hasBalManuhar = familyText.includes('BAL MANUHAR');
            const hasFirmResidence = familyText.includes('FIRM & RESIDENCE DETAILS');
            const canvas = document.querySelector('canvas');

            // Check for any occurrence of the word "Jain" across the entire document
            const entireBodyText = document.body.innerText;
            const hasJainInBody = /\bjain\b/i.test(entireBodyText);
            const shubhVivahEl = document.querySelector('.hero-shubh-vivah');
            const shubhVivahText = shubhVivahEl ? shubhVivahEl.innerText.trim() : '';

            return {
                hasGanesha: Boolean(ganesha),
                shlokaText: shloka ? shloka.innerText : null,
                headingText: heading ? heading.innerText : null,
                shubhVivahText,
                hasJainInBody,
                hasDateBadge: Boolean(dateBadge),
                dateText: dateBadge ? dateBadge.innerText : null,
                hasScrollIndicator: Boolean(scrollIndicator),
                hasHeroOpenBtn,
                hasHeroViewCard,
                hasHeroDownloadPdf,
                hasNavViewCard: Boolean(navViewCard),
                hasNavDownloadPdf: Boolean(navDownloadPdf),
                hasCouples: Boolean(couplesSection),
                hasVaratPrasthanInCouples,
                hasVaratSwagatInCouples,
                hasSamdariNoteInCouples,
                hasBalotraNoteInCouples,
                hasEvents: Boolean(eventsSection),
                hasBaraatPrasthan,
                hasBaraatSwagat,
                hasVaratInEvents,
                hasVenue: Boolean(venueSection),
                hasCountdown: Boolean(countdownSection),
                hasFamily: Boolean(familySection),
                hasVisheshAshirwad,
                hasSwagatatur,
                hasJavaiPaksh,
                hasNanihalPaksh,
                hasBhanejPaksh,
                hasVineet,
                hasBalManuhar,
                hasFirmResidence,
                hasCanvasOverlay: Boolean(canvas)
            };
        })()""",
        "returnByValue": True
    })
    res_val = check_eval.get('result', {}).get('result', {}).get('value', {})
    print("Opening Screen, Couples, Events & Family Section Checks:", json.dumps(res_val, indent=2))
    assert res_val.get('hasGanesha'), "Ganesha image is missing from opening screen!"
    assert not res_val.get('hasJainInBody'), f"Found unwanted 'Jain' in rendered body text! Body check failed."
    assert res_val.get('shubhVivahText') == "Auspicious Wedding Celebration", f"Unexpected shubh vivah text: {res_val.get('shubhVivahText')}"
    assert not res_val.get('hasHeroOpenBtn'), "CLICK HERE TO OPEN INVITATION button is still present on first page!"
    assert not res_val.get('hasHeroViewCard'), "VIEW DIGITAL CARD button is still present on first page!"
    assert not res_val.get('hasHeroDownloadPdf'), "DOWNLOAD PDF button is still present on first page!"
    assert res_val.get('hasScrollIndicator'), "Scroll to Explore indicator missing!"
    assert res_val.get('hasNavViewCard'), "Nav View Card functionality missing!"
    assert res_val.get('hasNavDownloadPdf'), "Nav Download PDF functionality missing!"
    assert res_val.get('hasCouples'), "Couples section missing!"
    assert not res_val.get('hasVaratPrasthanInCouples'), "VARAT PRASTHAN is still present in couples section!"
    assert not res_val.get('hasVaratSwagatInCouples'), "VARAT SWAGAT is still present in couples section!"
    assert not res_val.get('hasSamdariNoteInCouples'), "Samdari bus note is still present in couples section!"
    assert not res_val.get('hasBalotraNoteInCouples'), "Balotra bus note is still present in couples section!"
    assert res_val.get('hasEvents'), "Events section missing!"
    assert res_val.get('hasBaraatPrasthan'), "Baraat Prasthan not found in events!"
    assert res_val.get('hasBaraatSwagat'), "Baraat Swagat not found in events!"
    assert not res_val.get('hasVaratInEvents'), "Varat still found in events section!"
    assert res_val.get('hasVenue'), "Venue section missing!"
    assert res_val.get('hasCountdown'), "Countdown section missing!"
    assert res_val.get('hasFamily'), "Family section missing!"
    # Assert all 8 cards are removed
    assert not res_val.get('hasVisheshAshirwad'), "VISHESH ASHIRWAD is still present!"
    assert not res_val.get('hasSwagatatur'), "SWAGATATUR is still present!"
    assert not res_val.get('hasJavaiPaksh'), "JAVAI PAKSH is still present!"
    assert not res_val.get('hasNanihalPaksh'), "NANIHAL PAKSH is still present!"
    assert not res_val.get('hasBhanejPaksh'), "BHANEJ PAKSH is still present!"
    assert not res_val.get('hasVineet'), "VINEET is still present!"
    assert not res_val.get('hasBalManuhar'), "BAL MANUHAR is still present!"
    assert not res_val.get('hasFirmResidence'), "FIRM & RESIDENCE DETAILS is still present!"
    assert not res_val.get('hasCanvasOverlay'), "Unexpected canvas overlay detected!"

    # Test all viewports
    for vp in viewports:
        cdp.send("Emulation.setDeviceMetricsOverride", {
            "width": vp["width"],
            "height": vp["height"],
            "deviceScaleFactor": 2,
            "mobile": vp["isMobile"]
        })
        time.sleep(0.5)

        layout_res = cdp.send("Runtime.evaluate", {
            "expression": """(() => {
                const docEl = document.documentElement;
                const body = document.body;
                const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
                const clientW = window.innerWidth;
                const hero = document.querySelector('.wedding-hero-section');
                const heroBox = hero ? hero.getBoundingClientRect() : null;
                const ganesha = document.querySelector('.hero-ganesha-img');
                const ganeshaBox = ganesha ? ganesha.getBoundingClientRect() : null;
                const scrollInd = document.querySelector('.hero-scroll-indicator');
                const scrollIndBox = scrollInd ? scrollInd.getBoundingClientRect() : null;

                return {
                    scrollW,
                    clientW,
                    hasOverflow: scrollW > clientW + 2,
                    heroTop: heroBox ? heroBox.top : null,
                    heroHeight: heroBox ? heroBox.height : null,
                    ganeshaTop: ganeshaBox ? ganeshaBox.top : null,
                    scrollIndTop: scrollIndBox ? scrollIndBox.top : null
                };
            })()""",
            "returnByValue": True
        })
        val = layout_res.get('result', {}).get('result', {}).get('value', {})
        print(f"[{vp['name']}] ScrollW: {val.get('scrollW')}px | ClientW: {val.get('clientW')}px | HeroTop: {val.get('heroTop')}px | HeroHeight: {val.get('heroHeight')}px | Overflow: {val.get('hasOverflow')}")
        assert not val.get('hasOverflow'), f"Horizontal overflow detected on {vp['name']}!"
        assert val.get('heroTop') is not None and val.get('heroTop') < 180, f"Hero is pushed down too far on {vp['name']} ({val.get('heroTop')}px)!"

        # Take screenshot for proof
        shot_res = cdp.send("Page.captureScreenshot", {"format": "jpeg", "quality": 85})
        shot_b64 = shot_res.get('result', {}).get('data', '')
        if shot_b64:
            s_name = vp['name'].lower().replace(' ', '_').replace('x', '_')
            shot_path = os.path.join(PROJECT_DIR, 'screenshots', f'verified_no_buttons_{s_name}.jpg')
            with open(shot_path, 'wb') as sf:
                sf.write(base64.b64decode(shot_b64))

    print("\nALL 6 VIEWPORTS VERIFIED: 3 BUTTONS REMOVED FROM HERO, SCROLL INDICATOR PRESENT, 0 OVERFLOW!")

finally:
    try:
        proc.terminate()
        time.sleep(0.5)
        import shutil
        shutil.rmtree(profile_dir, ignore_errors=True)
    except Exception:
        pass
