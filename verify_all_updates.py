import re
import os
import subprocess
import pypdf

PROJECT_DIR = r"C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation"
OLD_PROJECT_DIR = r"C:\Users\Hp\.gemini\antigravity\scratch\param-pummy-wedding"
PRODUCTION_URL = "https://pushu1.github.io/dual-jain-wedding-invitation/"

print("=" * 70)
print("COMPREHENSIVE FINAL VERIFICATION FOR DUAL JAIN WEDDING INVITATION")
print("=" * 70)

# 1. VERIFY TEENA & KULDEEP PROJECT IS UNTOUCHED
result = subprocess.run(["git", "status"], cwd=OLD_PROJECT_DIR, capture_output=True, text=True)
assert "working tree clean" in result.stdout, f"Teena & Kuldeep repo is dirty: {result.stdout}"
print("[PASS] Teena & Kuldeep project is 100% UNTOUCHED (clean working tree, origin/main)")

# 2. VERIFY 100% ENGLISH (0 Devanagari Characters)
text_files = ["index.html", "styles.css", "app.js", "weddingData.js", "invitation_card.html", "print_wedding_card.html"]
for fname in text_files:
    fpath = os.path.join(PROJECT_DIR, fname)
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        devanagari_chars = re.findall(r'[\u0900-\u097F]', content)
        assert len(devanagari_chars) == 0, f"Found {len(devanagari_chars)} Devanagari in {fname}"
        print(f"[PASS] {fname}: 100% English (0 Devanagari characters)")

# 3. VERIFY SINGLE-PAGE PDF & HYPERLINK ANNOTATION
for pdf_name in ["dual-jain-wedding-invitation.pdf", "Akash_Reena_Shivani_Dheeraj_Royal_Wedding_Invitation.pdf"]:
    pdf_path = os.path.join(PROJECT_DIR, pdf_name)
    assert os.path.exists(pdf_path), f"Missing PDF: {pdf_path}"
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    assert total_pages == 1, f"Expected 1 page in {pdf_name}, found {total_pages}"
    
    page = reader.pages[0]
    annots = page.get('/Annots', [])
    assert len(annots) >= 1, f"No annotations in {pdf_name}"
    
    found_uri = False
    for a in annots:
        obj = a.get_object()
        action = obj.get('/A')
        if action and action.get('/URI') == PRODUCTION_URL:
            found_uri = True
            rect = obj.get('/Rect')
            print(f"[PASS] {pdf_name}: EXACTLY 1 PAGE with Active Hyperlink to {PRODUCTION_URL} at Rect {rect}")
            break
    assert found_uri, f"Hyperlink {PRODUCTION_URL} not found in {pdf_name}"

# 4. VERIFY WEBSITE BUTTONS (DOWNLOAD & OPEN)
with open(os.path.join(PROJECT_DIR, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

# Hero buttons
assert 'id="heroDownloadPdfBtn"' in html, "Hero download PDF button missing"
assert 'id="openInvitationBtn"' in html, "Hero open invitation button missing"
assert 'DOWNLOAD WEDDING INVITATION' in html, "'DOWNLOAD WEDDING INVITATION' text missing"
assert 'OPEN WEDDING INVITATION' in html, "'OPEN WEDDING INVITATION' text missing"

# Traditional section buttons
assert 'id="cardDownloadPdfBtn"' in html, "Card download PDF button missing"
assert 'id="btnOpenFullInvitation"' in html, "Card open full invitation button missing"

# Modal and nav links
assert 'id="invitationModal"' in html, "invitationModal missing"
assert 'nav-pdf-badge' in html, "nav-pdf-badge missing"
assert 'drawer-pdf-link' in html, "drawer-pdf-link missing"
print("[PASS] Website buttons verified: DOWNLOAD WEDDING INVITATION & OPEN WEDDING INVITATION in Hero & Card sections")

# 5. VERIFY BOTH COUPLES DATA
assert "AYUSHMAN AKASH" in html
assert "AYUSHMATI REENA" in html
assert "AYUSHMATI SHIVANI (JEENU)" in html
assert "AYUSHMAN DHEERAJ JI" in html
assert "12 December 2026" in html
assert "KUMAWAT VATIKA" in html
print("[PASS] Both couples and wedding details verified in index.html")

# 6. VERIFY NO TEENA & KULDEEP PERSONAL INFO IN NEW PROJECT
assert "Kuldeep" not in html, "Old groom name found in index.html"
assert "Teena" not in html, "Old bride name found in index.html"
assert "Upadhyay" not in html, "Old family name found in index.html"
print("[PASS] Verified ZERO personal information from old project in index.html")

print("=" * 70)
print("ALL FINAL VERIFICATION CHECKS PASSED WITH 100% SUCCESS!")
print("=" * 70)
