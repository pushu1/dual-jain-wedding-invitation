import os
import re

project_dir = r"C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation"
devanagari_regex = re.compile(r'[\u0900-\u097F]')

errors = []
print(f"Scanning project directory for Devanagari characters: {project_dir}")

for root, dirs, files in os.walk(project_dir):
    if ".git" in root:
        continue
    for f in files:
        if f.endswith(('.html', '.js', '.css', '.svg', '.json', '.md')):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as fh:
                    content = fh.read()
                    matches = devanagari_regex.findall(content)
                    if matches:
                        errors.append(f"Found {len(matches)} Devanagari characters in {f}: {set(matches)}")
                    else:
                        print(f"✓ {f}: Zero Devanagari characters.")
            except Exception as e:
                errors.append(f"Error reading {f}: {e}")

# Check required assets
required_assets = [
    "assets/ganesha.svg",
    "assets/hastamelap.svg",
    "assets/shehnai_musician.svg",
    "assets/dhol.svg",
    "assets/crest.svg",
    "assets/kalash.svg",
    "assets/toran.svg",
    "assets/audio/wedding_bgm.mp3"
]

for asset in required_assets:
    asset_path = os.path.join(project_dir, asset)
    if os.path.exists(asset_path):
        print(f"✓ Asset exists: {asset} ({os.path.getsize(asset_path)} bytes)")
    else:
        errors.append(f"Missing asset: {asset}")

if errors:
    print("\nFAILED VALIDATIONS:")
    for err in errors:
        print("  - " + err)
else:
    print("\nSUCCESS: All files verified! 100% English, zero Devanagari, all assets present!")
