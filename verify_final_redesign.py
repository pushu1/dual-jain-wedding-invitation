import os
import re
import urllib.request
import pypdf

def check_file(path, required_terms=None, forbidden_terms=None):
    if not os.path.exists(path):
        print(f"FAIL: File not found {path}")
        return False
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    passed = True
    if required_terms:
        for t in required_terms:
            if t not in content:
                print(f"FAIL: '{t}' not found in {path}")
                passed = False
            else:
                print(f"✓ Found '{t}' in {path}")
    if forbidden_terms:
        for t in forbidden_terms:
            if t in content:
                print(f"FAIL: Forbidden term '{t}' found in {path}")
                passed = False
            else:
                print(f"✓ Verified absence of '{t}' in {path}")
    return passed

def verify_pdf():
    pdf_path = "dual-jain-wedding-invitation.pdf"
    if not os.path.exists(pdf_path):
        print("FAIL: PDF not found!")
        return False
    reader = pypdf.PdfReader(pdf_path)
    page_count = len(reader.pages)
    print(f"PDF Page Count: {page_count} (Must be exactly 1)")
    if page_count != 1:
        print("FAIL: PDF is not exactly 1 page!")
        return False
    
    # Check link annotation
    page = reader.pages[0]
    has_link = False
    if "/Annots" in page:
        for annot in page["/Annots"]:
            obj = annot.get_object()
            if "/A" in obj and "/URI" in obj["/A"]:
                uri = obj["/A"]["/URI"]
                print(f"PDF Link URI found: {uri}")
                if "https://pushu1.github.io/dual-jain-wedding-invitation/?celebrate=1" in uri:
                    has_link = True
    if not has_link:
        print("FAIL: Verified celebrate=1 link not found in PDF annotations!")
        return False
    print("✓ PDF strictly 1 page with verified ?celebrate=1 link!")
    return True

def verify_local_server():
    try:
        url = "http://localhost:3000/"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            html = response.read().decode('utf-8')
            print(f"✓ Local server returned 200 OK ({len(html)} bytes)")
            if "app.js" in html and "royal_invitation_2026.css" in html:
                print("✓ app.js and CSS linked properly in index.html")
            else:
                print("FAIL: app.js or CSS missing in index.html")
                return False
            # Check title
            if "शुभ विवाह महोत्सव 2026" in html and "आकाश एवं रीना | शिवानी एवं धीरज" in html:
                print("✓ Page title and headings in index.html properly set in Hindi")
            else:
                print("FAIL: index.html missing Hindi title elements")
                return False
            # Check for forbidden names in index.html
            for fb in ["गेहलोत", "यशोदा", "रेनू", "Varat Prasthan", "Varat Swagat"]:
                if fb in html:
                    print(f"FAIL: Found forbidden term '{fb}' in index.html")
                    return False
            print("✓ index.html has no forbidden spellings!")
    except Exception as e:
        print(f"FAIL: Local server check failed: {e}")
        return False
    return True

def main():
    print("=== STARTING COMPREHENSIVE VERIFICATION ===")
    
    # 1. Verify PDF
    pdf_ok = verify_pdf()
    
    # 2. Verify JSX Components
    jsx_files = [
        "src/components/WeddingHero.jsx",
        "src/components/CouplesSection.jsx",
        "src/components/WeddingTimeline.jsx",
        "src/components/VenueSection.jsx",
        "src/components/CountdownSection.jsx",
        "src/components/FamilyBlessingsSection.jsx",
        "src/components/MusicPlayer.jsx",
        "src/components/CinematicFireworksIntro.jsx",
        "src/components/FloatingPetalsCanvas.jsx",
        "src/App.jsx"
    ]
    
    all_ok = pdf_ok
    for jf in jsx_files:
        print(f"\n--- Checking {jf} ---")
        ok = check_file(jf, forbidden_terms=["गेहलोत", "Jain Wedding", "Varat Prasthan", "Varat Swagat"])
        if not ok:
            all_ok = False
            
    # Check specific spellings
    print("\n--- Checking Specific Verified Spellings in Key Components ---")
    couples_ok = check_file("src/components/CouplesSection.jsx", required_terms=[
        "गहलोत", "श्रीमती जशोदा देवी", "श्री गोपालजी चौहान", "श्रीमती रेणु जी", "श्री मुकेशजी परिहार",
        "लेहरी बाई", "ग्यारसीलालजी", "दुर्गा बाई", "मदनलालजी गहलोत", "श्रीमती अनुराधा", "श्री कैलाश गहलोत"
    ], forbidden_terms=["गेहलोत", "यशोदा", "रेनू"])
    
    timeline_ok = check_file("src/components/WeddingTimeline.jsx", required_terms=[
        "घृतपान", "विनायक स्थापना", "हल्दी / मेहंदी", "मायरा (भात)", "बन्दोली", "महिला संगीत",
        "बारात प्रस्थान", "बारात स्वागत", "पाणिग्रहण संस्कार", "समदड़ी", "बालोतरा"
    ], forbidden_terms=["Varat", "गेहलोत"])
    
    music_ok = check_file("src/components/MusicPlayer.jsx", required_terms=[
        "qJFPtcK8qBg", "START_TIME_SECONDS = 30", "start: START_TIME_SECONDS"
    ])
    
    app_ok = check_file("src/App.jsx", required_terms=[
        "FloatingPetalsCanvas", "celebrate=1"
    ])
    
    # 3. Local server check
    print("\n--- Checking Local Server ---")
    server_ok = verify_local_server()
    
    if all_ok and couples_ok and timeline_ok and music_ok and app_ok and server_ok:
        print("\n==========================================")
        print("🎉 ALL VERIFICATION CHECKS PASSED PERFECTLY!")
        print("==========================================")
    else:
        print("\n❌ SOME VERIFICATION CHECKS FAILED!")

if __name__ == '__main__':
    main()
