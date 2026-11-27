import os
import sys
import json
import base64
import time
import socket
import subprocess
import urllib.request

PROJECT_DIR = r'C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation'
SCREENSHOTS_DIR = os.path.join(PROJECT_DIR, 'screenshots')
LIVE_URL = 'https://pushu1.github.io/dual-jain-wedding-invitation/'

EDGE_PATHS = [
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
]
EDGE_PATH = next((p for p in EDGE_PATHS if os.path.exists(p)), None)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('', 0))
PORT = s.getsockname()[1]
s.close()

profile_dir = os.path.join(PROJECT_DIR, f'.browser_live_{PORT}')
os.makedirs(profile_dir, exist_ok=True)

class CDP:
    def __init__(self, host, port, path):
        self.sock = socket.create_connection((host, port), timeout=25)
        key = base64.b64encode(os.urandom(16)).decode('utf-8')
        req = (
            f'GET {path} HTTP/1.1\r\n'
            f'Host: {host}:{port}\r\n'
            'Upgrade: websocket\r\n'
            'Connection: Upgrade\r\n'
            f'Sec-WebSocket-Key: {key}\r\n'
            'Sec-WebSocket-Version: 13\r\n\r\n'
        )
        self.sock.sendall(req.encode('utf-8'))
        resp = self.sock.recv(4096).decode('utf-8')
        assert '101' in resp
        self.msg_id = 0

    def send(self, method, params=None):
        self.msg_id += 1
        cid = self.msg_id
        payload = json.dumps({'id': cid, 'method': method, 'params': params or {}}).encode('utf-8')
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
                raise EOFError('Socket closed')
            buf.extend(chunk)
        return buf

    def eval_js(self, expr):
        res = self.send('Runtime.evaluate', {
            'expression': expr,
            'returnByValue': True,
            'awaitPromise': True
        })
        return res.get('result', {}).get('result', {}).get('value')

    def save_screenshot(self, filepath):
        res = self.send('Page.captureScreenshot', {'format': 'png'})
        b64 = res.get('result', {}).get('data')
        if b64:
            with open(filepath, 'wb') as f:
                f.write(base64.b64decode(b64))
            print(f'✓ Live Screenshot saved: {os.path.basename(filepath)}')

proc = subprocess.Popen([
    EDGE_PATH,
    f'--remote-debugging-port={PORT}',
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--autoplay-policy=no-user-gesture-required',
    f'--user-data-dir={profile_dir}',
    LIVE_URL
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

try:
    time.sleep(3.0)
    with urllib.request.urlopen(f'http://127.0.0.1:{PORT}/json') as resp:
        targets = json.loads(resp.read().decode())
    page_target = next(t for t in targets if t.get('type') == 'page')
    ws_url = page_target['webSocketDebuggerUrl']
    host_port, path = ws_url.replace('ws://', '').split('/', 1)
    host, port_str = host_port.split(':')
    cdp = CDP(host, int(port_str), '/' + path)
    cdp.send('Page.enable')
    cdp.send('Runtime.enable')

    for _ in range(25):
        time.sleep(0.5)
        ready = cdp.eval_js('document.readyState')
        title = cdp.eval_js('document.title') or ''
        if ready == 'complete' and len(title) > 0:
            break

    print(f'LIVE PAGE TITLE: {title}')
    assert 'शुभ विवाह महोत्सव' in title, f'Live title mismatch: {title}'

    cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, 'live_hindi_fireworks.png'))

    # Click start music
    cdp.eval_js("""
    (() => {
        const btn = document.querySelector('.btn-start-music-prompt');
        if (btn) btn.click();
    })()
    """)
    time.sleep(1.0)
    cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, 'live_hindi_music_playing.png'))

    # Dismiss fireworks to view full site
    cdp.eval_js("""
    (() => {
        const enterBtn = document.querySelector('.btn-enter-celebration') || document.querySelector('.btn-skip-fireworks');
        if (enterBtn) enterBtn.click();
    })()
    """)
    time.sleep(1.5)

    hero_title = cdp.eval_js("document.querySelector('.hero-grand-title') ? document.querySelector('.hero-grand-title').innerText : ''")
    print(f'LIVE HERO TITLE: {hero_title}')
    assert 'विवाह आमंत्रण' in hero_title, f'Live hero title mismatch: {hero_title}'

    cdp.save_screenshot(os.path.join(SCREENSHOTS_DIR, 'live_hindi_homepage.png'))
    print('✓ Live verification passed perfectly!')
finally:
    try:
        proc.terminate()
        proc.wait(timeout=3)
    except Exception:
        proc.kill()
