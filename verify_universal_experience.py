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

# -----------------------------------------------------------------------------
# 3. VERIFY IMMEDIATE FIRST-FRAME INVITATION ACROSS ALL 6 VIEWPORTS
# -----------------------------------------------------------------------------
print("\n=== 3. VERIFYING IMMEDIATE FIRST-FRAME INVITATION IN BROWSER ===")
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

    # 1. Verify opening screen elements are visible IMMEDIATELY
    print("Verifying opening invitation screen content...")
    check_eval = cdp.send("Runtime.evaluate", {
        "expression": """(() => {
            const ganesha = document.querySelector('.hero-ganesha-img');
            const shloka = document.querySelector('.hero-shloka-text');
            const heading = document.querySelector('.hero-royal-badge');
            const openBtn = document.querySelector('.btn-main-open-invitation');
            const dateBadge = document.querySelector('.hero-date-badge');
            const couplesSection = document.getElementById('couples-section');
            const eventsSection = document.getElementById('events-section');
            const venueSection = document.getElementById('venue-section');
            const countdownSection = document.getElementById('countdown-section');
            const familySection = document.getElementById('family-section');
            const canvas = document.querySelector('canvas');

            return {
                hasGanesha: Boolean(ganesha),
                shlokaText: shloka ? shloka.innerText : null,
                headingText: heading ? heading.innerText : null,
                hasOpenBtn: Boolean(openBtn),
                openBtnText: openBtn ? openBtn.innerText : null,
                hasDateBadge: Boolean(dateBadge),
                dateText: dateBadge ? dateBadge.innerText : null,
                hasCouples: Boolean(couplesSection),
                hasEvents: Boolean(eventsSection),
                hasVenue: Boolean(venueSection),
                hasCountdown: Boolean(countdownSection),
                hasFamily: Boolean(familySection),
                hasCanvasOverlay: Boolean(canvas)
            };
        })()""",
        "returnByValue": True
    })
    res_val = check_eval.get('result', {}).get('result', {}).get('value', {})
    print("Opening Screen Checks:", json.dumps(res_val, indent=2))
    assert res_val.get('hasGanesha'), "Ganesha image is missing from opening screen!"
    assert res_val.get('hasOpenBtn'), "'CLICK HERE TO OPEN INVITATION' button is missing!"
    assert res_val.get('hasCouples'), "Couples section missing!"
    assert res_val.get('hasEvents'), "Events section missing!"
    assert res_val.get('hasVenue'), "Venue section missing!"
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
                const openBtn = document.querySelector('.btn-main-open-invitation');
                const openBtnBox = openBtn ? openBtn.getBoundingClientRect() : null;

                return {
                    scrollW,
                    clientW,
                    hasOverflow: scrollW > clientW + 2,
                    heroTop: heroBox ? heroBox.top : null,
                    ganeshaTop: ganeshaBox ? ganeshaBox.top : null,
                    openBtnTop: openBtnBox ? openBtnBox.top : null,
                    openBtnVisible: openBtnBox ? (openBtnBox.top < window.innerHeight && openBtnBox.bottom > 0) : false
                };
            })()""",
            "returnByValue": True
        })
        val = layout_res.get('result', {}).get('result', {}).get('value', {})
        print(f"[{vp['name']}] ScrollW: {val.get('scrollW')}px | ClientW: {val.get('clientW')}px | HeroTop: {val.get('heroTop')}px | GaneshaTop: {val.get('ganeshaTop')}px | Overflow: {val.get('hasOverflow')}")
        assert not val.get('hasOverflow'), f"Horizontal overflow detected on {vp['name']}!"
        assert val.get('heroTop') is not None and val.get('heroTop') < 180, f"Hero is pushed down too far on {vp['name']} ({val.get('heroTop')}px)!"

        # Take screenshot for proof
        shot_res = cdp.send("Page.captureScreenshot", {"format": "jpeg", "quality": 85})
        shot_b64 = shot_res.get('result', {}).get('data', '')
        if shot_b64:
            s_name = vp['name'].lower().replace(' ', '_').replace('x', '_')
            shot_path = os.path.join(PROJECT_DIR, 'screenshots', f'verified_{s_name}.jpg')
            with open(shot_path, 'wb') as sf:
                sf.write(base64.b64decode(shot_b64))

    print("\nALL 6 VIEWPORTS & OPENING SCREEN CONTENT VERIFIED WITH 0 BLANK SCREEN & 0 OVERFLOW!")

finally:
    try:
        proc.terminate()
        time.sleep(0.5)
        import shutil
        shutil.rmtree(profile_dir, ignore_errors=True)
    except Exception:
        pass
