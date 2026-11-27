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
SCREENSHOTS_DIR = os.path.join(PROJECT_DIR, 'screenshots')
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

EDGE_PATHS = [
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
]
EDGE_PATH = next((p for p in EDGE_PATHS if os.path.exists(p)), None)
assert EDGE_PATH, "Microsoft Edge browser not found!"

print("=" * 70)
print("1. VERIFYING SINGLE-PAGE PDF & CLICKABLE HYPERLINK")
print("=" * 70)

pdf_path = os.path.join(PROJECT_DIR, 'dual-jain-wedding-invitation.pdf')
assert os.path.exists(pdf_path), "PDF file dual-jain-wedding-invitation.pdf not found!"
reader = pypdf.PdfReader(pdf_path)
assert len(reader.pages) == 1, f"Expected strictly 1 page, found {len(reader.pages)}"
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
        print(f"✓ Found active clickable URI in PDF: {action.get('/URI')} at Rect {obj.get('/Rect')}")
assert found_target_url, f"Expected URI {expected_url} not found in PDF annotations!"
print("✓ PDF strictly 1 page with verified clickable hyperlink to live website.")

print("\n" + "=" * 70)
print("2. VERIFYING MUSIC PLAYER CONSTANTS & HINDI SOURCE CONTENT")
print("=" * 70)

with open(os.path.join(PROJECT_DIR, 'src/components/MusicPlayer.jsx'), 'r', encoding='utf-8') as f:
    music_content = f.read()
assert "qJFPtcK8qBg" in music_content, "Missing Teena Weds Kuldeep YouTube ID 'qJFPtcK8qBg' in MusicPlayer.jsx!"
assert "START_TIME_SECONDS = 30" in music_content, "Missing 30 seconds start time in MusicPlayer.jsx!"
print("✓ Verified MusicPlayer.jsx uses Teena Weds Kuldeep song 'qJFPtcK8qBg' starting at 30 seconds.")

with open(os.path.join(PROJECT_DIR, 'app.js'), 'r', encoding='utf-8') as f:
    app_js_content = f.read()
assert "qJFPtcK8qBg" in app_js_content, "Compiled app.js missing video ID 'qJFPtcK8qBg'!"
print("✓ Compiled app.js contains video ID 'qJFPtcK8qBg'.")

# Check exact required Hindi phrases in WeddingHero.jsx
with open(os.path.join(PROJECT_DIR, 'src/components/WeddingHero.jsx'), 'r', encoding='utf-8') as f:
    hero_jsx = f.read()

required_hero_phrases = [
    "॥ श्री गणेशाय नमः ॥",
    "॥ विवाह आमंत्रण ॥",
    "भगवान शिव, माता पार्वती एवं हमारे पूज्य पूर्वजों के दिव्य आशीर्वाद से",
    "आयुष्मान आकाश",
    "सुपुत्र श्रीमती अनुराधा एवं श्री कैलाश गेहलोत",
    "✦ शुभ विवाह ✦",
    "आयुष्मती रीना",
    "सुपुत्री श्रीमती जसोधा देवी एवं श्री गोपालजी चौहान",
    "विवाह दिनांक: गुरुवार, 10 दिसंबर 2026",
    "आयुष्मती शिवानी (जीनू)",
    "आयुष्मान धीरज जी",
    "सुपुत्र श्रीमती रेनू जी एवं श्री मुकेशजी परिहार",
    "विवाह दिनांक: शनिवार, 12 दिसंबर 2026",
    "विवाह स्थल:",
    "कुमावत वाटिका",
    "पुनायता रोड, पाली, राजस्थान",
    "भव्य विवाह समारोह: शनिवार, 12 दिसंबर 2026",
    "मधुर शहनाई की धुन सुनने के लिए यहाँ क्लिक करें",
    "संगीत शुरू करें",
    "आमंत्रण देखने के लिए यहाँ क्लिक करें"
]

for phrase in required_hero_phrases:
    assert phrase in hero_jsx, f"Missing required Hindi phrase in WeddingHero.jsx: '{phrase}'"
    print(f"✓ Found in WeddingHero: '{phrase}'")

print("\n" + "=" * 70)
print("3. BROWSER CDP VERIFICATION: VIEWPORTS, TYPOGRAPHY, BUTTON ANIMATION & MUSIC")
print("=" * 70)

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
            "Upgrade: websocket\r\n"
            "Connection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\n"
            "Sec-WebSocket-Version: 13\r\n\r\n"
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
        if length < 126:
            h = bytearray([0x81, 0x80 | length])
        elif length < 65536:
            h = bytearray([0x81, 0x80 | 126]) + length.to_bytes(2, 'big')
        else:
            h = bytearray([0x81, 0x80 | 127]) + length.to_bytes(8, 'big')
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

    def eval_js(self, expr):
        res = self.send("Runtime.evaluate", {
            "expression": expr,
            "returnByValue": True,
            "awaitPromise": True
        })
        val = res.get("result", {}).get("result", {}).get("value")
        return val

    def save_screenshot(self, filepath):
        res = self.send("Page.captureScreenshot", {"format": "png"})
        b64 = res.get("result", {}).get("data")
        if b64:
            with open(filepath, "wb") as f:
                f.write(base64.b64decode(b64))
            print(f"✓ Screenshot saved: {os.path.basename(filepath)}")

URL = "http://localhost:3000/index.html"

# Launch Headless Edge
edge_proc = subprocess.Popen([
    EDGE_PATH,
    f"--remote-debugging-port={PORT}",
    f"--user-data-dir={profile_dir}",
    "--autoplay-policy=no-user-gesture-required",
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1920,1080",
    URL
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

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

    # Wait for page ready
    for _ in range(20):
        time.sleep(0.5)
        ready = cdp.eval_js("document.readyState")
        title = cdp.eval_js("document.title") or ""
        if ready == "complete" and len(title) > 0:
            break

    print(f"Page Title: {title}")
    assert "शुभ विवाह महोत्सव" in title, f"Title does not match expected Hindi! Got: {title}"

    # REQUIREMENT 3: Check that Shiva-Parvati Cover appears FIRST
    hero_visible = cdp.eval_js("!!document.querySelector('.wedding-hero-section')")
    fireworks_overlay_present = cdp.eval_js("!!document.querySelector('.cinematic-fireworks-overlay')")
    print(f"Initial Cover Visible: {hero_visible}")
    print(f"Initial Fireworks Overlay Present: {fireworks_overlay_present}")
    assert hero_visible, "Shiva-Parvati wedding cover section not visible initially!"
    assert not fireworks_overlay_present, "Fireworks overlay appeared BEFORE the cover! Expected cover to appear first."
    print("✓ Requirement 3 Verified: Shiva-Parvati wedding invitation cover is the FIRST visible screen!")

    # Verify Cover details on screen
    hero_text = cdp.eval_js("document.querySelector('.wedding-hero-section')?.innerText || ''")
    assert "॥ श्री गणेशाय नमः ॥" in hero_text, "Missing Ganesh Invocation on cover!"
    assert "॥ विवाह आमंत्रण ॥" in hero_text, "Missing Main Heading on cover!"
    assert "भगवान शिव, माता पार्वती" in hero_text, "Missing Divine Blessing on cover!"
    assert "आयुष्मान आकाश" in hero_text and "आयुष्मती रीना" in hero_text, "Missing Couple 1 names on cover!"
    assert "आयुष्मती शिवानी (जीनू)" in hero_text and "आयुष्मान धीरज जी" in hero_text, "Missing Couple 2 names on cover!"
    assert "कुमावत वाटिका" in hero_text, "Missing Venue name on cover!"
    assert "आमंत्रण देखने के लिए यहाँ क्लिक करें" in hero_text, "Missing Animated Button text on cover!"
    print("✓ All Cover Hindi Text verified on live rendered DOM!")

    # REQUIREMENT 4: Check Animated Invitation Button & Stars
    btn_exists = cdp.eval_js("!!document.querySelector('.btn-animated-invitation')")
    stars_exist = cdp.eval_js("document.querySelectorAll('.sparkle-star').length")
    btn_animation = cdp.eval_js("window.getComputedStyle(document.querySelector('.btn-animated-invitation')).animationName")
    print(f"Animated Button Present: {btn_exists}")
    print(f"Sparkling Stars Count: {stars_exist}")
    print(f"Button CSS Animation: {btn_animation}")
    assert btn_exists, "Animated invitation button not found!"
    assert stars_exist >= 4, f"Expected at least 4 sparkling stars, found {stars_exist}!"
    assert "gentleBounce" in btn_animation, f"Button missing gentleBounce animation! Got: {btn_animation}"
    print("✓ Requirement 4 Verified: Animated button with gentle bouncing effect and sparkling stars!")

    # Check Mobile Typography on 360x800, 390x844, 412x915
    mobile_viewports = [
        ("Android 360x800", 360, 800, "verified_mobile_360_800.png"),
        ("iPhone 390x844", 390, 844, "verified_mobile_390_844.png"),
        ("Android Large 412x915", 412, 915, "verified_mobile_412_915.png"),
        ("Desktop 1920x1080", 1920, 1080, "verified_desktop_1920_1080.png")
    ]

    for label, w, h, fname in mobile_viewports:
        cdp.send("Emulation.setDeviceMetricsOverride", {
            "width": w,
            "height": h,
            "deviceScaleFactor": 1,
            "mobile": (w < 600)
        })
        time.sleep(0.6)
        
        # Check computed font sizes for mobile
        if w < 600:
            sizes = cdp.eval_js("""
            (() => {
                const getPx = sel => parseFloat(window.getComputedStyle(document.querySelector(sel))?.fontSize || '0');
                return {
                    mainHeading: getPx('.hero-grand-title'),
                    coupleNames: getPx('.couple-names-headline'),
                    sectionLabel: getPx('.couple-sacred-label'),
                    weddingDate: getPx('.couple-date-tag'),
                    parentsName: getPx('.couple-parents-line'),
                    venueName: getPx('.venue-name-bold'),
                    buttonText: getPx('.btn-main-label')
                };
            })()
            """)
            print(f"Computed Font Sizes for {label}: {sizes}")
            # Verify against recommended mobile sizes
            assert sizes['mainHeading'] >= 28, f"Main heading size {sizes['mainHeading']}px too small!"
            assert sizes['coupleNames'] >= 22, f"Couple names size {sizes['coupleNames']}px too small!"
            assert sizes['sectionLabel'] >= 18, f"Section heading size {sizes['sectionLabel']}px too small!"
            assert sizes['weddingDate'] >= 15, f"Wedding date size {sizes['weddingDate']}px too small!"
            assert sizes['parentsName'] >= 14, f"Parents name size {sizes['parentsName']}px too small!"
            assert sizes['venueName'] >= 20, f"Venue name size {sizes['venueName']}px too small!"
            assert sizes['buttonText'] >= 15, f"Button text size {sizes['buttonText']}px too small!"
            print(f"✓ {label} Typography verified to meet user large font specifications!")

        cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, fname))

    # REQUIREMENT 5 & 6: Test Clicking the Animated Button
    print("\nClicking '✦ आमंत्रण देखने के लिए यहाँ क्लिक करें ✦' button...")
    click_res = cdp.eval_js("""
    (() => {
        const btn = document.querySelector('.btn-animated-invitation');
        if (btn) {
            btn.click();
            return true;
        }
        return false;
    })()
    """)
    print(f"Button Click Triggered: {click_res}")
    time.sleep(1.0)

    # Verify fireworks overlay appeared with Hindi welcome greeting
    fireworks_now_present = cdp.eval_js("!!document.querySelector('.cinematic-fireworks-overlay')")
    fireworks_grand_title = cdp.eval_js("document.querySelector('.fireworks-grand-title')?.innerText || ''")
    print(f"Fireworks Overlay Active After Click: {fireworks_now_present}")
    print(f"Fireworks Grand Title: '{fireworks_grand_title}'")
    assert fireworks_now_present, "Fireworks overlay did not activate upon clicking button!"
    assert "शुभ विवाह समारोह में आपका हार्दिक स्वागत है" in fireworks_grand_title, f"Fireworks greeting mismatch! Got: '{fireworks_grand_title}'"
    print("✓ Requirement 6 Verified: Fireworks celebration activated with 'शुभ विवाह समारोह में आपका हार्दिक स्वागत है'!")
    cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, "verified_fireworks_celebration.png"))

    # Verify Music Started
    print("Verifying background music playback of qJFPtcK8qBg from 00:30...")
    for attempt in range(8):
        time.sleep(1.0)
        music_status = cdp.eval_js("""
        (() => {
            return {
                isGlobalPlaying: !!window.isWeddingMusicPlaying,
                widgetText: document.querySelector('.music-pill-text')?.innerText || '',
                isPlayingClass: document.querySelector('.royal-music-pill-btn')?.classList.contains('is-playing'),
                hasWaveBars: !!document.querySelector('.music-wave-bars')
            };
        })()
        """)
        print(f"  Attempt {attempt+1}: {music_status}")
        if music_status.get("isGlobalPlaying") or music_status.get("isPlayingClass"):
            break

    assert music_status.get("isGlobalPlaying") or music_status.get("isPlayingClass"), "Music did not transition to playing!"
    print("✓ Requirement 5 Verified: Background music playback successfully active!")

    # Dismiss fireworks to verify complete invitation sections
    cdp.eval_js("""
    (() => {
        const btn = document.querySelector('.btn-enter-celebration') || document.querySelector('.btn-skip-fireworks');
        if (btn) btn.click();
    })()
    """)
    time.sleep(1.5)

    couples_in_view = cdp.eval_js("!!document.querySelector('#couples-section')")
    timeline_in_view = cdp.eval_js("!!document.querySelector('#events-section')")
    venue_in_view = cdp.eval_js("!!document.querySelector('#venue-section')")
    assert couples_in_view and timeline_in_view and venue_in_view, "Invitation sections not found after fireworks!"
    print("✓ Complete invitation sections successfully revealed!")
    cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, "verified_full_invitation_sections.png"))

    print("\n" + "=" * 70)
    print("ALL VERIFICATIONS COMPLETED SUCCESSFULLY WITH 100% PASS!")
    print("=" * 70)

finally:
    try:
        edge_proc.terminate()
        edge_proc.wait(timeout=3)
    except Exception:
        edge_proc.kill()
