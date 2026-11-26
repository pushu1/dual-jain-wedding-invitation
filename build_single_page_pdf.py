import os
import pypdf
import pypdfium2 as pdfium
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors

PROJECT_DIR = r"C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation"
ASSETS_DIR = os.path.join(PROJECT_DIR, "assets")

OUT_PDF = os.path.join(PROJECT_DIR, "dual-jain-wedding-invitation.pdf")
OUT_PDF_COPY = os.path.join(PROJECT_DIR, "Akash_Reena_Shivani_Dheeraj_Royal_Wedding_Invitation.pdf")
PRODUCTION_URL = "https://pushu1.github.io/dual-jain-wedding-invitation/"

def build_pdf(output_path):
    page_w, page_h = A4
    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("The Royal Wedding Celebration — Akash & Reena | Shivani & Dheeraj")
    c.setAuthor("Gehlot Parivar, Pali-Marwar")
    c.setSubject("Official Royal Wedding Invitation of Ayushman Akash & Ayushmati Reena and Ayushmati Shivani & Ayushman Dheeraj Ji")

    # =========================================================================
    # COLOR PALETTE (Dark Royal Rajasthani & Jain Palace Aesthetic)
    # =========================================================================
    c_bg_dark = colors.HexColor('#161210')        # Deep royal charcoal
    c_card_bg = colors.HexColor('#211A16')        # Card panel backdrop
    c_gold_bright = colors.HexColor('#F8E2A7')    # Shimmering gold highlight
    c_gold = colors.HexColor('#C6A15B')           # Antique royal gold
    c_gold_dark = colors.HexColor('#9E7B35')      # Deep antique gold
    c_gold_dim = colors.HexColor('#6B5527')       # Muted border gold
    c_ivory = colors.HexColor('#FAF7F0')          # Off-white / Ivory text
    c_ivory_muted = colors.HexColor('#D9D2C9')    # Soft muted text
    c_maroon = colors.HexColor('#751E2B')         # Accent maroon

    # 1. Base Dark Royal Background
    c.setFillColor(c_bg_dark)
    c.rect(0, 0, page_w, page_h, fill=1, stroke=0)

    # 2. Subtle Golden Particle Glows
    for i in range(45):
        px = (i * 73 + 47) % int(page_w)
        py = (i * 97 + 83) % int(page_h)
        pr = 1.0 + (i % 3) * 0.6
        p_alpha = 0.15 + (i % 5) * 0.08
        c.setFillColor(c_gold_bright, alpha=p_alpha)
        c.circle(px, py, pr, fill=1, stroke=0)

    c.setFillColor(c_bg_dark, alpha=1.0)

    # 3. Double Royal Gold Border
    # Outer Border
    c.setStrokeColor(c_gold)
    c.setLineWidth(1.8)
    c.roundRect(20, 20, page_w - 40, page_h - 40, 14, fill=0, stroke=1)

    # Inner Border
    c.setStrokeColor(c_gold_dim)
    c.setLineWidth(0.7)
    c.roundRect(25, 25, page_w - 50, page_h - 50, 10, fill=0, stroke=1)

    # 4. Ornate Corner Accents
    def draw_corner(cx, cy, fx, fy):
        c.saveState()
        c.setStrokeColor(c_gold)
        c.setLineWidth(1.2)
        s = 18
        c.line(cx, cy, cx + fx * s, cy)
        c.line(cx, cy, cx, cy + fy * s)
        c.setFillColor(c_gold)
        c.circle(cx + fx * 6, cy + fy * 6, 2.0, fill=1, stroke=0)
        c.circle(cx + fx * 12, cy + fy * 3, 1.2, fill=1, stroke=0)
        c.circle(cx + fx * 3, cy + fy * 12, 1.2, fill=1, stroke=0)
        c.restoreState()

    draw_corner(29, page_h - 29, 1, -1)
    draw_corner(page_w - 29, page_h - 29, -1, -1)
    draw_corner(29, 29, 1, 1)
    draw_corner(page_w - 29, 29, -1, 1)

    mid_x = page_w / 2

    # =========================================================================
    # TOP HEADER: SACRED INVOCATION & GANESHA EMBLEM
    # =========================================================================
    y = page_h - 46
    c.setFillColor(c_gold)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(mid_x, y, "||  SHREE BAAN MATA NAMAH  •  SHREE GANESHAY NAMAH  •  SHREE MAJISA NAMAH  ||")

    # Sacred Ganesha Emblem
    y -= 52
    ganesha_png = os.path.join(ASSETS_DIR, "ganesha.png")
    if os.path.exists(ganesha_png):
        gw, gh = 48, 48
        c.drawImage(ganesha_png, mid_x - gw/2, y, width=gw, height=gh, mask='auto')

    y -= 14
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(mid_x, y, "WITH THE DIVINE BLESSINGS OF LORD GANESHA & HOLY ANCESTORS")

    # =========================================================================
    # MAIN CELEBRATION TITLE
    # =========================================================================
    y -= 34
    c.setFillColor(c_gold_bright)
    c.setFont("Times-Bold", 24)
    c.drawCentredString(mid_x, y, "THE ROYAL WEDDING")

    y -= 16
    c.setFillColor(c_gold)
    c.setFont("Times-Roman", 12.5)
    c.drawCentredString(mid_x, y, "C  E  L  E  B  R  A  T  I  O  N")

    # Ornamental Divider with Stars
    y -= 10
    c.setStrokeColor(c_gold_dim)
    c.setLineWidth(0.8)
    line_w = 90
    c.line(mid_x - line_w - 22, y, mid_x - 22, y)
    c.line(mid_x + 22, y, mid_x + line_w + 22, y)
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica", 9)
    c.drawCentredString(mid_x, y - 3, "✦  ✦  ✦")

    # Family Invitation Subheading
    y -= 20
    c.setFillColor(c_ivory_muted)
    c.setFont("Times-Italic", 9.5)
    c.drawCentredString(mid_x, y, "The Gehlot Parivar cordially invites you to bless the auspicious matrimonial union of")

    # =========================================================================
    # BOTH COUPLES DEDICATED SHOWCASE CARD CONTAINER
    # =========================================================================
    card_w = page_w - 76
    card_h = 240
    y -= (card_h + 8)
    card_y = y
    card_x = (page_w - card_w) / 2

    # Card Panel Background
    c.setFillColor(c_card_bg, alpha=0.92)
    c.roundRect(card_x, card_y, card_w, card_h, 12, fill=1, stroke=0)

    # Card Gold Border
    c.setStrokeColor(c_gold)
    c.setLineWidth(1.2)
    c.roundRect(card_x, card_y, card_w, card_h, 12, fill=0, stroke=1)

    c.setStrokeColor(c_gold_dim)
    c.setLineWidth(0.5)
    c.roundRect(card_x + 3, card_y + 3, card_w - 6, card_h - 6, 9, fill=0, stroke=1)

    # Internal layout: 2 equal columns with central Hastamelap separator
    col_w = (card_w - 50) / 2
    col1_center = card_x + col_w / 2 + 10
    col2_center = card_x + card_w - col_w / 2 - 10

    # Vertical divider line in card center
    sep_x = card_x + card_w / 2
    c.setStrokeColor(c_gold_dim)
    c.setLineWidth(0.8)
    c.line(sep_x, card_y + 24, sep_x, card_y + card_h - 24)

    # Hastamelap icon in center
    hastamelap_png = os.path.join(ASSETS_DIR, "hastamelap.png")
    if os.path.exists(hastamelap_png):
        hw, hh = 38, 24
        c.drawImage(hastamelap_png, sep_x - hw/2, card_y + card_h/2 - hh/2 + 8, width=hw, height=hh, mask='auto')
    c.setFillColor(c_gold_bright)
    c.setFont("Times-Bold", 8)
    c.drawCentredString(sep_x, card_y + card_h/2 - 14, "WEDS")

    # --- COUPLE 1 (LEFT COLUMN) ---
    c_y = card_y + card_h - 26

    # Role Badge
    c.setFillColor(c_gold_dim)
    c.roundRect(col1_center - 45, c_y - 2, 90, 14, 7, fill=1, stroke=0)
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(col1_center, c_y + 2, "FIRST COUPLE")

    c_y -= 26
    c.setFillColor(c_gold_bright)
    c.setFont("Times-Bold", 14)
    c.drawCentredString(col1_center, c_y, "AYUSHMAN AKASH")

    c_y -= 13
    c.setFillColor(c_ivory_muted)
    c.setFont("Times-Italic", 9)
    c.drawCentredString(col1_center, c_y, "Son of Mrs. Anuradha & Mr. Kailash Gehlot")

    c_y -= 18
    c.setFillColor(c_gold)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(col1_center, c_y, "— WEDS —")

    c_y -= 20
    c.setFillColor(c_gold_bright)
    c.setFont("Times-Bold", 14)
    c.drawCentredString(col1_center, c_y, "AYUSHMATI REENA")

    c_y -= 13
    c.setFillColor(c_ivory_muted)
    c.setFont("Times-Italic", 9)
    c.drawCentredString(col1_center, c_y, "Daughter of Mrs. Jashoda Devi & Mr. Gopalji Chauhan")

    # Wedding Date Box 1
    c_y -= 28
    c.setFillColor(c_bg_dark)
    c.roundRect(col1_center - 85, c_y - 4, 170, 20, 10, fill=1, stroke=0)
    c.setStrokeColor(c_gold)
    c.setLineWidth(0.8)
    c.roundRect(col1_center - 85, c_y - 4, 170, 20, 10, fill=0, stroke=1)
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(col1_center, c_y + 2, "Wedding: Thursday, 10 Dec 2026")

    # --- COUPLE 2 (RIGHT COLUMN) ---
    c_y = card_y + card_h - 26

    # Role Badge
    c.setFillColor(c_gold_dim)
    c.roundRect(col2_center - 45, c_y - 2, 90, 14, 7, fill=1, stroke=0)
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(col2_center, c_y + 2, "SECOND COUPLE")

    c_y -= 26
    c.setFillColor(c_gold_bright)
    c.setFont("Times-Bold", 14)
    c.drawCentredString(col2_center, c_y, "AYUSHMATI SHIVANI (JEENU)")

    c_y -= 13
    c.setFillColor(c_ivory_muted)
    c.setFont("Times-Italic", 9)
    c.drawCentredString(col2_center, c_y, "Daughter of Mrs. Anuradha & Mr. Kailash Gehlot")

    c_y -= 18
    c.setFillColor(c_gold)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(col2_center, c_y, "— WEDS —")

    c_y -= 20
    c.setFillColor(c_gold_bright)
    c.setFont("Times-Bold", 14)
    c.drawCentredString(col2_center, c_y, "AYUSHMAN DHEERAJ JI")

    c_y -= 13
    c.setFillColor(c_ivory_muted)
    c.setFont("Times-Italic", 9)
    c.drawCentredString(col2_center, c_y, "Son of Mrs. Renu Ji & Mr. Mukeshji Parihar")

    # Wedding Date Box 2
    c_y -= 28
    c.setFillColor(c_bg_dark)
    c.roundRect(col2_center - 85, c_y - 4, 170, 20, 10, fill=1, stroke=0)
    c.setStrokeColor(c_gold)
    c.setLineWidth(0.8)
    c.roundRect(col2_center - 85, c_y - 4, 170, 20, 10, fill=0, stroke=1)
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(col2_center, c_y + 2, "Wedding: Saturday, 12 Dec 2026")

    # =========================================================================
    # DATE & VENUE PILLS (Clean vector icons & elegant serif styling)
    # =========================================================================
    y = card_y - 32
    pill_w = 215
    pill_h = 24

    # Date Pill
    c.setFillColor(c_card_bg)
    c.roundRect(mid_x - pill_w - 8, y - 4, pill_w, pill_h, 12, fill=1, stroke=0)
    c.setStrokeColor(c_gold)
    c.setLineWidth(0.9)
    c.roundRect(mid_x - pill_w - 8, y - 4, pill_w, pill_h, 12, fill=0, stroke=1)
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(mid_x - pill_w/2 - 8, y + 3, "✦  SATURDAY, 12 DECEMBER 2026  ✦")

    # Venue Pill
    c.setFillColor(c_card_bg)
    c.roundRect(mid_x + 8, y - 4, pill_w, pill_h, 12, fill=1, stroke=0)
    c.setStrokeColor(c_gold)
    c.setLineWidth(0.9)
    c.roundRect(mid_x + 8, y - 4, pill_w, pill_h, 12, fill=0, stroke=1)
    c.setFillColor(c_gold_bright)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(mid_x + pill_w/2 + 8, y + 3, "✦  KUMAWAT VATIKA, PALI, RAJASTHAN  ✦")

    # Grand Reception & Host Info
    y -= 30
    c.setFillColor(c_ivory)
    c.setFont("Times-Bold", 10.5)
    c.drawCentredString(mid_x, y, "BLESSING CEREMONY & GRAND WEDDING RECEPTION (PRITIBHOJ)")

    y -= 13
    c.setFillColor(c_ivory_muted)
    c.setFont("Times-Roman", 9)
    c.drawCentredString(mid_x, y, "Saturday, 12 December 2026 • 6:15 PM onwards till your gracious arrival")

    y -= 13
    c.setFillColor(c_gold)
    c.setFont("Times-Italic", 8.5)
    c.drawCentredString(mid_x, y, "Kumawat Vatika, Punayata Road, Pali-Marwar, Rajasthan – 306401")

    # =========================================================================
    # THE PROMINENT INTERACTIVE CLICK HERE BUTTON (EMBEDDED PDF HYPERLINK)
    # =========================================================================
    btn_w = 410
    btn_h = 56
    btn_x = (page_w - btn_w) / 2
    btn_y = 65

    # Button outer glow shadow
    c.setFillColor(c_gold_bright, alpha=0.25)
    c.roundRect(btn_x - 3, btn_y - 3, btn_w + 6, btn_h + 6, 28, fill=1, stroke=0)

    # Button Main Golden Gradient Face
    c.setFillColor(c_gold, alpha=1.0)
    c.roundRect(btn_x, btn_y, btn_w, btn_h, 28, fill=1, stroke=0)

    # Shimmering Champagne Gold Top Inner Face
    c.setFillColor(c_gold_bright)
    c.roundRect(btn_x + 2, btn_y + 2, btn_w - 4, btn_h - 4, 26, fill=1, stroke=0)

    # Button Double Gold Border
    c.setStrokeColor(colors.white)
    c.setLineWidth(1.5)
    c.roundRect(btn_x + 2, btn_y + 2, btn_w - 4, btn_h - 4, 26, fill=0, stroke=1)

    # Button Typography
    c.setFillColor(c_bg_dark)
    c.setFont("Helvetica-Bold", 12.5)
    c.drawCentredString(mid_x, btn_y + 30, "✦  CLICK HERE TO OPEN WEDDING INVITATION  ✦")

    c.setFillColor(colors.HexColor('#3B2B1B'))
    c.setFont("Helvetica-Bold", 8.5)
    c.drawCentredString(mid_x, btn_y + 14, "Tap here to view the complete interactive wedding website, events & family directory")

    # Real Embedded PDF Hyperlink Annotation Covering the Full Button Area
    c.linkURL(PRODUCTION_URL, (btn_x - 4, btn_y - 4, btn_x + btn_w + 4, btn_y + btn_h + 4), relative=0)

    # Bottom Footer Verification Line
    y = 38
    c.setFillColor(c_gold)
    c.setFont("Helvetica", 7.5)
    c.drawCentredString(mid_x, y, "GEHLOT PARIVAR  •  PALI-MARWAR, RAJASTHAN  •  OFFICIAL DIGITAL INVITATION")

    # FINALIZE EXACTLY ONE PAGE
    c.showPage()
    c.save()
    print(f"✓ Successfully generated single-page PDF at: {output_path}")

def verify_single_page_pdf(pdf_path):
    assert os.path.exists(pdf_path), f"PDF not found: {pdf_path}"
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"\n[VERIFICATION] Total pages in {os.path.basename(pdf_path)}: {total_pages}")
    assert total_pages == 1, f"ERROR: Expected strictly 1 page, but found {total_pages}!"

    page = reader.pages[0]
    annots = page.get('/Annots', [])
    print(f"[VERIFICATION] Found {len(annots)} annotations on page 1")
    assert len(annots) > 0, "ERROR: No PDF hyperlink annotations found!"

    found_link = False
    for a in annots:
        obj = a.get_object()
        action = obj.get('/A')
        if action and action.get('/URI') == PRODUCTION_URL:
            found_link = True
            print(f"[VERIFICATION] ✓ Active URL Verified: {action.get('/URI')}")
            print(f"[VERIFICATION] ✓ Button Hyperlink Rect: {obj.get('/Rect')}")

    assert found_link, f"ERROR: Production URL {PRODUCTION_URL} not found in PDF annotations!"
    print(f"[VERIFICATION] ✓ EXACTLY 1 PAGE & REAL CLICKABLE HYPERLINK VERIFIED SUCCESSFULLY!")

    # Render to high-res PNG for visual inspection
    doc = pdfium.PdfDocument(pdf_path)
    render_page = doc[0]
    image = render_page.render(scale=2.0).to_pil()
    png_out = os.path.join(PROJECT_DIR, "screenshots", "single_page_pdf_cover_rendered.png")
    os.makedirs(os.path.dirname(png_out), exist_ok=True)
    image.save(png_out)
    print(f"[VERIFICATION] ✓ Rendered preview image saved to: {png_out}")

if __name__ == "__main__":
    build_pdf(OUT_PDF)
    build_pdf(OUT_PDF_COPY)
    verify_single_page_pdf(OUT_PDF)
