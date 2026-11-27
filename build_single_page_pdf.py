import os
import shutil
import pypdf
import pypdfium2 as pdfium
from PIL import Image, ImageDraw, ImageFont
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors

PROJECT_DIR = r"C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation"
ASSETS_DIR = os.path.join(PROJECT_DIR, "assets")
FONTS_DIR = os.path.join(ASSETS_DIR, "fonts")
BASE_IMG = os.path.join(ASSETS_DIR, "shiva_parvati_wedding_invitation_base.jpg")
CARD_IMG = os.path.join(ASSETS_DIR, "shiva_parvati_wedding_card.png")
OUT_PDF = os.path.join(PROJECT_DIR, "dual-jain-wedding-invitation.pdf")
OUT_PDF_COPY = os.path.join(PROJECT_DIR, "Akash_Reena_Shivani_Dheeraj_Royal_Wedding_Invitation.pdf")
PRODUCTION_URL = "https://pushu1.github.io/dual-jain-wedding-invitation/"

def create_shiva_parvati_card():
    base = Image.open(BASE_IMG).convert("RGBA")
    orig_w, orig_h = base.size
    
    scale = 2
    w, h = orig_w * scale, orig_h * scale  # 1152 x 2048
    card = base.resize((w, h), Image.Resampling.LANCZOS)
    draw = ImageDraw.Draw(card)
    mid_x = w // 2
    
    f_nirmala_b = os.path.join(FONTS_DIR, "NirmalaB.ttf")
    f_nirmala = os.path.join(FONTS_DIR, "Nirmala.ttf")
    
    # Traditional Royal Color Palette
    c_burgundy = (139, 48, 56, 255)       # Traditional Burgundy #8B3038
    c_dark_maroon = (84, 26, 32, 255)     # Dark Royal Maroon #541A20
    c_gold = (184, 138, 59, 255)          # Antique Gold #B88A3B
    c_gold_border = (201, 164, 92, 255)   # Muted Gold #C9A45C
    c_warm_brown = (96, 72, 58, 255)      # Warm Brown #60483A
    c_leaf_green = (100, 119, 68, 255)    # Leaf Green #647744
    c_gold_bright = (255, 235, 175, 255)  # Bright Gold
    
    font_ganesh = ImageFont.truetype(f_nirmala_b, 23)
    font_blessing = ImageFont.truetype(f_nirmala, 19)
    font_section = ImageFont.truetype(f_nirmala_b, 20)
    font_name = ImageFont.truetype(f_nirmala_b, 31)
    font_parents = ImageFont.truetype(f_nirmala, 20)
    font_sang = ImageFont.truetype(f_nirmala_b, 21)
    font_date = ImageFont.truetype(f_nirmala_b, 20)
    font_venue_lbl = ImageFont.truetype(f_nirmala_b, 20)
    font_venue_name = ImageFont.truetype(f_nirmala_b, 28)
    font_venue_sub = ImageFont.truetype(f_nirmala, 20)
    font_btn = ImageFont.truetype(f_nirmala_b, 21)
    
    curr_y = 730
    
    def draw_sep(y_pos):
        w_sep = 200
        draw.line([(mid_x - w_sep, y_pos), (mid_x - 26, y_pos)], fill=c_gold_border, width=1)
        draw.line([(mid_x + 26, y_pos), (mid_x + w_sep, y_pos)], fill=c_gold_border, width=1)
        draw.text((mid_x, y_pos), "❖", fill=c_gold, font=font_section, anchor="mm")
    
    # 0. Ganesh Invocation & Divine Blessing
    draw.text((mid_x, curr_y), "॥ श्री गणेशाय नमः ॥", fill=c_burgundy, font=font_ganesh, anchor="mt")
    curr_y += 34
    draw.text((mid_x, curr_y), "भगवान शिव, माता पार्वती एवं हमारे पूज्य पूर्वजों के दिव्य आशीर्वाद से", fill=c_warm_brown, font=font_blessing, anchor="mt")
    curr_y += 36
    
    draw_sep(curr_y)
    curr_y += 20
    
    # 1. First Couple: Akash & Reena
    draw.text((mid_x, curr_y), "— प्रथम पावन परिणय —", fill=c_leaf_green, font=font_section, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "आयुष्मान आकाश", fill=c_dark_maroon, font=font_name, anchor="mt")
    curr_y += 38
    draw.text((mid_x, curr_y), "सुपुत्र श्रीमती अनुराधा एवं श्री कैलाश गेहलोत", fill=c_warm_brown, font=font_parents, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "✦ शुभ विवाह ✦", fill=c_gold, font=font_sang, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "आयुष्मती रीना", fill=c_dark_maroon, font=font_name, anchor="mt")
    curr_y += 38
    draw.text((mid_x, curr_y), "सुपुत्री श्रीमती जसोधा देवी एवं श्री गोपालजी चौहान", fill=c_warm_brown, font=font_parents, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "विवाह दिनांक: गुरुवार, 10 दिसंबर 2026", fill=c_burgundy, font=font_date, anchor="mt")
    curr_y += 38
    
    draw_sep(curr_y)
    curr_y += 20
    
    # 2. Second Couple: Shivani & Dheeraj
    draw.text((mid_x, curr_y), "— द्वितीय पावन परिणय —", fill=c_leaf_green, font=font_section, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "आयुष्मती शिवानी (जीनू)", fill=c_dark_maroon, font=font_name, anchor="mt")
    curr_y += 38
    draw.text((mid_x, curr_y), "सुपुत्री श्रीमती अनुराधा एवं श्री कैलाश गेहलोत", fill=c_warm_brown, font=font_parents, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "✦ शुभ विवाह ✦", fill=c_gold, font=font_sang, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "आयुष्मान धीरज जी", fill=c_dark_maroon, font=font_name, anchor="mt")
    curr_y += 38
    draw.text((mid_x, curr_y), "सुपुत्र श्रीमती रेनू जी एवं श्री मुकेशजी परिहार", fill=c_warm_brown, font=font_parents, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "विवाह दिनांक: शनिवार, 12 दिसंबर 2026", fill=c_burgundy, font=font_date, anchor="mt")
    curr_y += 38
    
    draw_sep(curr_y)
    curr_y += 20
    
    # 3. Auspicious Venue Details
    draw.text((mid_x, curr_y), "विवाह स्थल:", fill=c_leaf_green, font=font_venue_lbl, anchor="mt")
    curr_y += 26
    draw.text((mid_x, curr_y), "कुमावत वाटिका", fill=c_dark_maroon, font=font_venue_name, anchor="mt")
    curr_y += 34
    draw.text((mid_x, curr_y), "पुनायता रोड, पाली, राजस्थान", fill=c_warm_brown, font=font_venue_sub, anchor="mt")
    curr_y += 28
    draw.text((mid_x, curr_y), "भव्य विवाह समारोह: शनिवार, 12 दिसंबर 2026", fill=c_burgundy, font=font_date, anchor="mt")
    curr_y += 42
    
    # 4. Animated-styled Clickable Invitation Button
    btn_w = 510
    btn_h = 52
    btn_x0 = mid_x - btn_w // 2
    btn_y0 = curr_y
    btn_x1 = mid_x + btn_w // 2
    btn_y1 = curr_y + btn_h
    
    # Draw button with shadow and rich golden border
    draw.rounded_rectangle([btn_x0 - 2, btn_y0 - 2, btn_x1 + 2, btn_y1 + 2], radius=28, fill=(184, 138, 59, 120))
    draw.rounded_rectangle([btn_x0, btn_y0, btn_x1, btn_y1], radius=26, fill=c_burgundy, outline=c_gold_border, width=2)
    draw.text((mid_x, btn_y0 + btn_h // 2), "✦ आमंत्रण देखने के लिए यहाँ क्लिक करें ✦", fill=c_gold_bright, font=font_btn, anchor="mm")
    
    card.save(CARD_IMG, "PNG", quality=95)
    
    # Update cover image paths for web preview
    cover_png = os.path.join(ASSETS_DIR, "dual-jain-wedding-invitation-cover.png")
    pdf_cover_png = os.path.join(ASSETS_DIR, "pdf_card_cover.png")
    card.save(cover_png, "PNG")
    card.save(pdf_cover_png, "PNG")
    print(f"Generated card image and updated cover assets: {CARD_IMG}")
    return btn_x0, btn_y0, btn_x1, btn_y1

def build_pdf(output_path, btn_coords):
    btn_x0, btn_y0, btn_x1, btn_y1 = btn_coords
    page_w, page_h = A4
    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("शुभ विवाह महोत्सव 2026 — आकाश एवं रीना | शिवानी एवं धीरज")
    c.setAuthor("गेहलोत परिवार, पाली-मारवाड़")
    c.setSubject("पावन विवाह आमंत्रण — आयुष्मान आकाश एवं आयुष्मती रीना तथा आयुष्मती शिवानी एवं आयुष्मान धीरज जी")

    c_ivory = colors.HexColor('#FFF5E6')
    c_gold_border = colors.HexColor('#C9A45C')
    c_burgundy = colors.HexColor('#8B3038')

    c.setFillColor(c_ivory)
    c.rect(0, 0, page_w, page_h, fill=1, stroke=0)

    img_h = page_h
    img_w = page_h * (1152.0 / 2048.0)
    x_offset = (page_w - img_w) / 2.0

    c.drawImage(CARD_IMG, x_offset, 0, width=img_w, height=img_h)

    # Decorative frame borders
    c.saveState()
    c.setStrokeColor(c_gold_border)
    c.setLineWidth(1.5)
    c.roundRect(14, 14, page_w - 28, page_h - 28, 8, fill=0, stroke=1)
    
    c.setStrokeColor(c_burgundy)
    c.setLineWidth(0.6)
    c.roundRect(18, 18, page_w - 36, page_h - 36, 6, fill=0, stroke=1)
    c.restoreState()

    # Clickable link annotation precisely matching the button coordinates
    scale_y = page_h / 2048.0
    scale_x = img_w / 1152.0

    pdf_btn_x0 = x_offset + (btn_x0 * scale_x)
    pdf_btn_x1 = x_offset + (btn_x1 * scale_x)
    pdf_btn_y0 = (2048.0 - btn_y1) * scale_y
    pdf_btn_y1 = (2048.0 - btn_y0) * scale_y

    c.linkURL(
        PRODUCTION_URL,
        (pdf_btn_x0, pdf_btn_y0, pdf_btn_x1, pdf_btn_y1),
        relative=0
    )

    c.showPage()
    c.save()

def verify_single_page_pdf(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    assert len(reader.pages) == 1, f"Must be exactly 1 page, found {len(reader.pages)}!"
    page = reader.pages[0]
    annots = page.get('/Annots')
    assert annots and len(annots) > 0, "Missing annotations!"
    found_url = False
    for a in annots:
        obj = a.get_object()
        action = obj.get('/A')
        if action and action.get('/URI') == PRODUCTION_URL:
            found_url = True
    assert found_url, "Production URL not found in PDF annotations!"

if __name__ == "__main__":
    btn_coords = create_shiva_parvati_card()
    build_pdf(OUT_PDF, btn_coords)
    build_pdf(OUT_PDF_COPY, btn_coords)
    verify_single_page_pdf(OUT_PDF)
    print("✓ Successfully built and verified Shiva-Parvati Single-Page PDF with Clickable Link!")
