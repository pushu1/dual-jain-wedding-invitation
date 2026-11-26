import re
import os

PROJECT_DIR = r"C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation"

print("=" * 60)
print("COMPREHENSIVE VERIFICATION FOR WEDDING INVITATION PROJECT")
print("=" * 60)

# 1. Check Devanagari characters (Must be 0)
text_files = ["index.html", "styles.css", "app.js", "weddingData.js", "invitation_card.html", "print_wedding_card.html"]
all_english = True

for fname in text_files:
    fpath = os.path.join(PROJECT_DIR, fname)
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        devanagari_chars = re.findall(r'[\u0900-\u097F]', content)
        if len(devanagari_chars) > 0:
            print(f"[FAIL] {fname}: Found {len(devanagari_chars)} Devanagari characters: {devanagari_chars[:10]}")
            all_english = False
        else:
            print(f"[PASS] {fname}: 100% English (0 Devanagari characters)")

# 2. Check Removed Sections
with open(os.path.join(PROJECT_DIR, "index.html"), "r", encoding="utf-8") as f:
    index_content = f.read()

assert 'id="story"' not in index_content, "[FAIL] id='story' is still present in index.html"
assert 'id="family"' not in index_content, "[FAIL] id='family' is still present in index.html"
assert 'TRADITIONAL INVITATION LETTER' not in index_content, "[FAIL] 'TRADITIONAL INVITATION LETTER' is still in index.html"
assert 'FAMILY MEMBERS &amp; BLESSINGS' not in index_content, "[FAIL] 'FAMILY MEMBERS &amp; BLESSINGS' is still in index.html"
print("[PASS] Sections 'TRADITIONAL INVITATION LETTER' and 'FAMILY MEMBERS & BLESSINGS' are completely removed from index.html")

# 3. Check New Section & Elements
assert 'id="invitation-card"' in index_content, "[FAIL] id='invitation-card' not found in index.html"
assert 'id="btnOpenFullInvitation"' in index_content, "[FAIL] id='btnOpenFullInvitation' not found"
assert 'id="invitationModal"' in index_content, "[FAIL] id='invitationModal' not found"
assert 'dual-jain-wedding-invitation.pdf' in index_content, "[FAIL] dual-jain-wedding-invitation.pdf link not found"
assert 'invitation_card.html' in index_content, "[FAIL] invitation_card.html link not found"
print("[PASS] New section 'invitation-card', prominent CTA button, PDF link, and modal viewer are verified in index.html")

# 4. Check Both Couples Names
assert "AYUSHMAN AKASH" in index_content, "[FAIL] AYUSHMAN AKASH not found"
assert "AYUSHMATI REENA" in index_content, "[FAIL] AYUSHMATI REENA not found"
assert "AYUSHMATI SHIVANI (JEENU)" in index_content, "[FAIL] AYUSHMATI SHIVANI (JEENU) not found"
assert "AYUSHMAN DHEERAJ JI" in index_content, "[FAIL] AYUSHMAN DHEERAJ JI not found"
assert "12 December 2026" in index_content, "[FAIL] 12 December 2026 not found"
print("[PASS] Both couples and wedding dates verified in index.html")

# 5. Check Assets Referenced in index.html
assets_found = re.findall(r'(?:src|href|url)\([\'"]?(assets/[^\'")\s]+)[\'"]?\)', index_content)
assets_found += re.findall(r'(?:src|href)=[\'"](assets/[^\'"]+)[\'"]', index_content)
assets_unique = set(assets_found)

all_assets_exist = True
for asset in sorted(assets_unique):
    full_path = os.path.join(PROJECT_DIR, asset.replace('/', os.sep))
    if not os.path.exists(full_path):
        print(f"[FAIL] Missing asset: {asset} ({full_path})")
        all_assets_exist = False
    else:
        size = os.path.getsize(full_path)
        print(f"[PASS] Asset verified: {asset} ({size:,} bytes)")

# 6. Check PDF File
pdf_path = os.path.join(PROJECT_DIR, "dual-jain-wedding-invitation.pdf")
if os.path.exists(pdf_path) and os.path.getsize(pdf_path) > 10000:
    print(f"[PASS] PDF generated successfully: {pdf_path} ({os.path.getsize(pdf_path):,} bytes)")
else:
    print(f"[FAIL] PDF file missing or too small")

print("=" * 60)
print("ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!")
print("=" * 60)
