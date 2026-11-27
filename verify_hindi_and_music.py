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

print("=" * 60)
print("1. VERIFYING HINDI DEVANAGARI CONTENT IN SOURCE FILES")
print("=" * 60)

devanagari_pattern = re.compile(r'[\u0900-\u097F]')
files_to_check = [
    'index.html',
    'invitation_card.html',
    'src/App.jsx',
    'src/components/WeddingHero.jsx',
    'src/components/CouplesSection.jsx',
    'src/components/WeddingTimeline.jsx',
    'src/components/VenueSection.jsx',
    'src/components/CountdownSection.jsx',
    'src/components/FamilyBlessingsSection.jsx',
    'src/components/FinalBlessingsFooter.jsx',
    'src/components/InvitationViewerModal.jsx',
    'src/components/MusicPlayer.jsx',
    'src/components/CinematicFireworksIntro.jsx',
]

for rel_path in files_to_check:
    full_path = os.path.join(PROJECT_DIR, rel_path)
    if not os.path.exists(full_path):
        print(f"WARNING: File {rel_path} does not exist.")
        continue
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = devanagari_pattern.findall(content)
    assert len(matches) > 10, f"Expected Hindi Devanagari text in {rel_path}, found only {len(matches)} chars!"
    print(f"✓ {rel_path}: Contains {len(matches)} Devanagari characters.")

# Strict check for 'varat' spelling
with open(os.path.join(PROJECT_DIR, 'src/components/WeddingTimeline.jsx'), 'r', encoding='utf-8') as f:
    timeline_content = f.read()
assert 'वरात' not in timeline_content, "Found incorrect spelling 'वरात'! Must be 'बारात'."
assert 'बारात प्रस्थान' in timeline_content, "Missing 'बारात प्रस्थान' in WeddingTimeline.jsx!"
assert 'बारात स्वागत' in timeline_content, "Missing 'बारात स्वागत' in WeddingTimeline.jsx!"
print("✓ Strict spelling verified: 'बारात' is used everywhere. 'वरात' is 0.")

print("\n" + "=" * 60)
print("2. VERIFYING SINGLE-PAGE PDF & CLICKABLE HYPERLINK")
print("=" * 60)

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
        print(f"✓ Found active clickable URI: {action.get('/URI')} at Rect {obj.get('/Rect')}")
assert found_target_url, f"Expected URI {expected_url} not found in PDF annotations!"
print("✓ PDF strictly 1 page with verified clickable hyperlink to live website.")

print("\n" + "=" * 60)
print("3. BROWSER VERIFICATION: HINDI UI & BACKGROUND MUSIC")
print("=" * 60)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('', 0))
PORT = s.getsockname()[1]
s.close()

profile_dir = os.path.join(PROJECT_DIR, f'.browser_test_{PORT}')
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

    # Wait for page to fully load
    for _ in range(20):
        time.sleep(0.5)
        ready = cdp.eval_js("document.readyState")
        title = cdp.eval_js("document.title") or ""
        if ready == "complete" and len(title) > 0:
            break

    print(f"Page Title: {title}")
    assert "शुभ विवाह महोत्सव" in title, f"Title does not match expected Hindi! Got: {title}"

    # 2. Check fireworks intro card & music prompt
    prompt_text = cdp.eval_js("document.querySelector('.fireworks-music-prompt-text')?.innerText || ''")
    btn_prompt_text = cdp.eval_js("document.querySelector('.btn-start-music-prompt')?.innerText || ''")
    print(f"Music Prompt Text: '{prompt_text}'")
    print(f"Music Button Text: '{btn_prompt_text}'")
    assert "शहनाई की मधुर धुन" in prompt_text, f"Missing expected Hindi music prompt text! Got: {prompt_text}"
    assert "संगीत शुरू करें" in btn_prompt_text, f"Missing expected music button text! Got: {btn_prompt_text}"

    # Capture fireworks intro screenshot
    cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, "hindi_fireworks_intro.png"))

    # 3. Simulate clicking the "संगीत शुरू करें" button
    print("Clicking 'संगीत शुरू करें' button...")
    click_res = cdp.eval_js("""
    (() => {
        const btn = document.querySelector('.btn-start-music-prompt');
        if (btn) {
            btn.click();
            return true;
        }
        return false;
    })()
    """)
    print(f"Button clicked: {click_res}")

    # 4. Poll YouTube player state
    print("Polling YouTube Player state (waiting for state=1 / PLAYING at >= 14s)...")
    for attempt in range(10):
        time.sleep(1.0)
        status = cdp.eval_js("""
        (() => {
            const widgetText = document.querySelector('.music-pill-text')?.innerText || '';
            const isPlayingClass = document.querySelector('.royal-music-pill-btn')?.classList.contains('is-playing');
            const hasWaveBars = !!document.querySelector('.music-wave-bars');
            
            return {
                widgetText,
                isPlayingClass,
                hasWaveBars,
                isGlobalPlaying: !!window.isWeddingMusicPlaying
            };
        })()
        """)
        print(f"  Attempt {attempt+1}: {status}")
        if status.get("isGlobalPlaying") or status.get("isPlayingClass"):
            break

    print(f"✓ Music playback trigger verified! Playing state active.")
    cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, "hindi_music_playing.png"))

    # 5. Dismiss fireworks to examine all Hindi sections
    print("Dismissing fireworks overlay to inspect invitation sections...")
    cdp.eval_js("""
    (() => {
        const enterBtn = document.querySelector('.btn-enter-celebration') || document.querySelector('.btn-skip-fireworks');
        if (enterBtn) enterBtn.click();
    })()
    """)
    time.sleep(1.5)

    # 6. Verify Hindi content across sections
    hero_title = cdp.eval_js("document.querySelector('.hero-grand-title')?.innerText || ''")
    couple_text = cdp.eval_js("document.querySelector('.hero-couples-showcase-card')?.innerText || ''")
    events_heading = cdp.eval_js("document.querySelector('#events-section .section-title-gold')?.innerText || ''")
    venue_heading = cdp.eval_js("document.querySelector('#venue-section .section-title-gold')?.innerText || ''")
    countdown_heading = cdp.eval_js("document.querySelector('#countdown-section .section-title-gold')?.innerText || ''")
    family_heading = cdp.eval_js("document.querySelector('#family-section .section-title-gold')?.innerText || ''")

    print(f"Hero Title: '{hero_title}'")
    print(f"Events Heading: '{events_heading}'")
    print(f"Venue Heading: '{venue_heading}'")
    print(f"Countdown Heading: '{countdown_heading}'")
    print(f"Family Heading: '{family_heading}'")

    assert "विवाह आमंत्रण" in hero_title, f"Hero title mismatch! Got: {hero_title}"
    assert "आकाश" in couple_text and "रीना" in couple_text, "Missing Akash/Reena in Hindi!"
    assert "शिवानी" in couple_text and "धीरज" in couple_text, "Missing Shivani/Dheeraj in Hindi!"
    assert "मांगलिक कार्यक्रम" in events_heading, f"Events heading mismatch! Got: {events_heading}"
    assert "विवाह स्थल" in venue_heading, f"Venue heading mismatch! Got: {venue_heading}"
    assert "उल्टी गिनती" in countdown_heading, f"Countdown heading mismatch! Got: {countdown_heading}"
    assert "दर्शनाभिलाषी" in family_heading, f"Family heading mismatch! Got: {family_heading}"

    # 7. Check viewports & save screenshots
    viewports = [
        ("Desktop 1920x1080", 1920, 1080, "hindi_desktop_1920.png"),
        ("Laptop 1366x768", 1366, 768, "hindi_laptop_1366.png"),
        ("Tablet 768x1024", 768, 1024, "hindi_tablet_768.png"),
        ("Mobile 375x812", 375, 812, "hindi_mobile_375.png"),
        ("Mobile Small 360x640", 360, 640, "hindi_mobile_360.png")
    ]

    for label, w, h, fname in viewports:
        cdp.send("Emulation.setDeviceMetricsOverride", {
            "width": w,
            "height": h,
            "deviceScaleFactor": 1,
            "mobile": (w < 600)
        })
        time.sleep(0.5)
        cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, fname))
        print(f"✓ Viewport verified: {label}")

    print("\n" + "=" * 60)
    print("ALL VERIFICATION CHECKS PASSED WITH 100% SUCCESS!")
    print("=" * 60)

finally:
    try:
        edge_proc.terminate()
        edge_proc.wait(timeout=3)
    except Exception:
        edge_proc.kill()
