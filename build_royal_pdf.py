import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors

PROJECT_DIR = r"C:\Users\Hp\.gemini\antigravity\scratch\dual-jain-wedding-invitation"
ASSETS_DIR = os.path.join(PROJECT_DIR, "assets")
OUT_PDF = os.path.join(PROJECT_DIR, "dual-jain-wedding-invitation.pdf")
OUT_PDF_COPY = os.path.join(PROJECT_DIR, "Akash_Reena_Shivani_Dheeraj_Royal_Wedding_Invitation.pdf")

def create_royal_pdf():
    page_w, page_h = A4 # 595.27 x 841.89 points
    c = canvas.Canvas(OUT_PDF, pagesize=A4)
    c.setTitle("The Royal Wedding Celebration — Akash & Reena | Shivani & Dheeraj")
    c.setAuthor("Gehlot Family, Pali-Marwar")
    c.setSubject("Official Royal Wedding Invitation of Ayushman Akash & Ayushmati Reena and Ayushmati Shivani & Ayushman Dheeraj Ji")

    # Color Palette
    c_maroon = colors.HexColor('#651E2B')
    c_maroon_dark = colors.HexColor('#43121B')
    c_gold = colors.HexColor('#C6A15B')
    c_gold_light = colors.HexColor('#EBD49B')
    c_gold_dark = colors.HexColor('#916F2E')
    c_ivory_bg = colors.HexColor('#FAF7F0')
    c_card_bg = colors.HexColor('#FFFFFF')
    c_charcoal = colors.HexColor('#211D1B')
    c_muted = colors.HexColor('#5E554E')
    c_line = colors.HexColor('#E5D7C5')

    def draw_page_borders():
        # 1. Base ivory fill
        c.setFillColor(c_ivory_bg)
        c.rect(0, 0, page_w, page_h, fill=1, stroke=0)

        # 2. Outer antique gold border
        c.setStrokeColor(c_gold)
        c.setLineWidth(1.8)
        c.roundRect(18, 18, page_w - 36, page_h - 36, 10, fill=0, stroke=1)

        # 3. Inner dashed gold border
        c.setStrokeColor(c_gold_light)
        c.setLineWidth(0.8)
        c.roundRect(22, 22, page_w - 44, page_h - 44, 8, fill=0, stroke=1)

        # 4. Corner accents
        def draw_corner(cx, cy, fx, fy):
            c.saveState()
            c.setStrokeColor(c_maroon)
            c.setLineWidth(1.5)
            s = 15
            c.line(cx, cy, cx + fx * s, cy)
            c.line(cx, cy, cx, cy + fy * s)
            c.setFillColor(c_gold)
            c.circle(cx + fx * 5, cy + fy * 5, 2, fill=1, stroke=0)
            c.restoreState()

        draw_corner(26, page_h - 26, 1, -1)
        draw_corner(page_w - 26, page_h - 26, -1, -1)
        draw_corner(26, 26, 1, 1)
        draw_corner(page_w - 26, 26, -1, 1)

    mid_x = page_w / 2

    # =========================================================================
    # PAGE 1: TRADITIONAL ROYAL INVITATION CARD COVER
    # =========================================================================
    draw_page_borders()

    y = page_h - 42
    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 8.5)
    c.drawCentredString(mid_x, y, "|| SHRI BAAN MATAJI NAMAH ||   •   || SHRI GANESHAY NAMAH ||   •   || SHRI MAJISA NAMAH ||")

    y -= 44
    ganesha_png = os.path.join(ASSETS_DIR, "ganesha.png")
    if os.path.exists(ganesha_png):
        c.drawImage(ganesha_png, mid_x - 22, y, width=44, height=48, mask='auto')

    y -= 14
    c.setFillColor(c_muted)
    c.setFont("Times-Italic", 8.5)
    c.drawCentredString(mid_x, y, '"O Lord Ganesha, Remover of All Obstacles and Harbinger of Auspicious Fortune;')
    y -= 11
    c.drawCentredString(mid_x, y, 'Graced by Divine Riddhi and Siddhi, kindly arrive and fulfill our sacred celebration."')

    y -= 18
    # Main Title
    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 19)
    c.drawCentredString(mid_x, y, "THE WEDDING INVITATION")
    c.setStrokeColor(c_gold)
    c.setLineWidth(1)
    c.line(mid_x - 140, y + 20, mid_x + 140, y + 20)
    c.line(mid_x - 140, y - 6, mid_x + 140, y - 6)

    y -= 18
    c.setFillColor(c_gold_dark)
    c.setFont("Times-Bold", 10.5)
    c.drawCentredString(mid_x, y, "SATURDAY, 12 DECEMBER 2026")

    # Both Couples Boxes
    y -= 14
    box_w = 215
    box_h = 240
    box_y = y - box_h

    # Couple 1 Box (Left)
    c1_x = mid_x - box_w - 25
    c.setFillColor(c_card_bg)
    c.setStrokeColor(c_gold)
    c.setLineWidth(1.2)
    c.roundRect(c1_x, box_y, box_w, box_h, 8, fill=1, stroke=1)

    # Couple 1 Content
    cy = box_y + box_h - 18
    c.setFillColor(c_charcoal)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(c1_x + box_w/2, cy, "FIRST COUPLE")

    cy -= 20
    c.setFillColor(c_gold_dark)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(c1_x + box_w/2, cy, "THE GROOM")

    cy -= 15
    c.setFillColor(c_charcoal)
    c.setFont("Times-Bold", 12.5)
    c.drawCentredString(c1_x + box_w/2, cy, "AYUSHMAN AKASH")

    cy -= 14
    c.setFillColor(c_muted)
    c.setFont("Times-Roman", 8.5)
    c.drawCentredString(c1_x + box_w/2, cy, "Son of Mrs. Anuradha & Mr. Kailash Gehlot")

    cy -= 18
    c.setFillColor(c_maroon)
    c.setFont("Times-Italic", 13)
    c.drawCentredString(c1_x + box_w/2, cy, "&")

    cy -= 16
    c.setFillColor(c_gold_dark)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(c1_x + box_w/2, cy, "THE BRIDE")

    cy -= 15
    c.setFillColor(c_charcoal)
    c.setFont("Times-Bold", 12.5)
    c.drawCentredString(c1_x + box_w/2, cy, "AYUSHMATI REENA")

    cy -= 14
    c.setFillColor(c_muted)
    c.setFont("Times-Roman", 8.5)
    c.drawCentredString(c1_x + box_w/2, cy, "Daughter of Mrs. Jashoda Devi & Mr. Gopalji Chauhan")

    cy -= 28
    c.setFillColor(c_ivory_bg)
    c.setStrokeColor(c_gold_light)
    c.roundRect(c1_x + 15, cy - 8, box_w - 30, 24, 4, fill=1, stroke=1)
    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 8)
    c.drawCentredString(c1_x + box_w/2, cy + 4, "Wedding Date: Thursday, 10 Dec 2026")
    c.setFillColor(c_muted)
    c.setFont("Helvetica", 6.5)
    c.drawCentredString(c1_x + box_w/2, cy - 4, "Vikram Samvat 2083 Margashirsha Shukla Paksha")

    # Center Hastamelap
    hastamelap_png = os.path.join(ASSETS_DIR, "hastamelap.png")
    if os.path.exists(hastamelap_png):
        c.drawImage(hastamelap_png, mid_x - 22, box_y + box_h/2 - 12, width=44, height=26, mask='auto')
    c.setFillColor(c_gold_dark)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawCentredString(mid_x, box_y + box_h/2 - 24, "HASTAMELAP")

    # Couple 2 Box (Right)
    c2_x = mid_x + 25
    c.setFillColor(c_card_bg)
    c.setStrokeColor(c_gold)
    c.setLineWidth(1.2)
    c.roundRect(c2_x, box_y, box_w, box_h, 8, fill=1, stroke=1)

    # Couple 2 Content
    cy = box_y + box_h - 18
    c.setFillColor(c_charcoal)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(c2_x + box_w/2, cy, "SECOND COUPLE")

    cy -= 20
    c.setFillColor(c_gold_dark)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(c2_x + box_w/2, cy, "THE BRIDE")

    cy -= 15
    c.setFillColor(c_charcoal)
    c.setFont("Times-Bold", 12.5)
    c.drawCentredString(c2_x + box_w/2, cy, "AYUSHMATI SHIVANI (JEENU)")

    cy -= 14
    c.setFillColor(c_muted)
    c.setFont("Times-Roman", 8.5)
    c.drawCentredString(c2_x + box_w/2, cy, "Daughter of Mrs. Anuradha & Mr. Kailash Gehlot")

    cy -= 18
    c.setFillColor(c_maroon)
    c.setFont("Times-Italic", 13)
    c.drawCentredString(c2_x + box_w/2, cy, "&")

    cy -= 16
    c.setFillColor(c_gold_dark)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(c2_x + box_w/2, cy, "THE GROOM")

    cy -= 15
    c.setFillColor(c_charcoal)
    c.setFont("Times-Bold", 12.5)
    c.drawCentredString(c2_x + box_w/2, cy, "AYUSHMAN DHEERAJ JI")

    cy -= 14
    c.setFillColor(c_muted)
    c.setFont("Times-Roman", 8.5)
    c.drawCentredString(c2_x + box_w/2, cy, "Son of Mrs. Renu Ji & Mr. Mukeshji Parihar")

    cy -= 28
    c.setFillColor(c_ivory_bg)
    c.setStrokeColor(c_gold_light)
    c.roundRect(c2_x + 15, cy - 8, box_w - 30, 24, 4, fill=1, stroke=1)
    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 8)
    c.drawCentredString(c2_x + box_w/2, cy + 4, "Wedding Date: Saturday, 12 Dec 2026")
    c.setFillColor(c_muted)
    c.setFont("Helvetica", 6.5)
    c.drawCentredString(c2_x + box_w/2, cy - 4, "Vikram Samvat 2083 Margashirsha Shukla Paksha 3")

    # Ancestral Lineage Box
    y = box_y - 20
    lineage_h = 42
    c.setFillColor(c_card_bg)
    c.setStrokeColor(c_gold_light)
    c.setLineWidth(1)
    c.roundRect(32, y - lineage_h, page_w - 64, lineage_h, 6, fill=1, stroke=1)

    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 8)
    c.drawCentredString(mid_x, y - 12, "✦ REVERED ANCESTRAL LINEAGE & BLESSINGS ✦")

    c.setFillColor(c_charcoal)
    c.setFont("Times-Roman", 8.5)
    c.drawString(45, y - 28, "Paternal Great-Grandparents: Late Mrs. Lehari Bai & Late Mr. Gyarsilalji")
    c.drawString(mid_x + 10, y - 28, "Beloved Grandparents: Mrs. Durga Bai & Late Mr. Madanlalji Gehlot")

    # Gehlot Parivar Crest & Residence Footer
    y = y - lineage_h - 16
    res_h = 75
    c.setFillColor(c_charcoal)
    c.setStrokeColor(c_gold)
    c.setLineWidth(1.5)
    c.roundRect(32, y - res_h, page_w - 64, res_h, 8, fill=1, stroke=1)

    crest_png = os.path.join(ASSETS_DIR, "crest.png")
    if os.path.exists(crest_png):
        c.drawImage(crest_png, 44, y - res_h + 10, width=54, height=54, mask='auto')

    rx = 110
    c.setFillColor(c_gold_light)
    c.setFont("Times-Bold", 10.5)
    c.drawString(rx, y - 20, "GEHLOT PARIVAR  •  CORDIALLY WELCOMES YOU")

    c.setFillColor(colors.white)
    c.setFont("Helvetica", 7.5)
    c.drawString(rx, y - 34, "Residence: Mr. Kailashchand, Son of Late Shri Madanlalji Gehlot (Lohar)")
    c.drawString(rx, y - 46, "162, Pancham Nagar, Near Khetaramji Pyau Wali Gali, Ramdev Road, Pali-Marwar, Rajasthan – 306401")

    c.setFillColor(c_gold_light)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(rx, y - 60, "Helpline: +91 9214537106   •   +91 8824338255   •   +91 7014922660")

    c.showPage()

    # =========================================================================
    # PAGE 2: WEDDING EVENTS SCHEDULE (ALL 9 CEREMONIES)
    # =========================================================================
    draw_page_borders()

    y = page_h - 45
    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 8.5)
    c.drawCentredString(mid_x, y, "✦ TRADITIONAL CEREMONIAL TIMELINE ✦")

    y -= 22
    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 18)
    c.drawCentredString(mid_x, y, "WEDDING EVENTS SCHEDULE")
    c.setStrokeColor(c_gold)
    c.setLineWidth(1)
    c.line(mid_x - 130, y + 18, mid_x + 130, y + 18)
    c.line(mid_x - 130, y - 6, mid_x + 130, y - 6)

    y -= 14
    c.setFillColor(c_muted)
    c.setFont("Times-Italic", 8.5)
    c.drawCentredString(mid_x, y, '"Written with heartfelt love, please honor our call; this priceless moment beckons, bestow your blessings on all."')

    # 9 Event Cards Grid (3 columns x 3 rows)
    y -= 20
    grid_w = page_w - 64
    card_w = (grid_w - 20) / 3
    card_h = 135

    events_list = [
        ("Event 01", "Bhootpaan (Ghritpaan)", "Monday, 7 Dec 2026", "3:15 PM", "Sacred opening ritual signifying divine purity, ancestral blessings, and auspicious beginnings."),
        ("Event 02", "Vinayak Ceremony", "Monday, 7 Dec 2026", "5:15 PM", "Ceremonial invocation of Lord Ganesha to bless the home and remove all obstacles."),
        ("Event 03", "Haldi & Mehendi", "Tuesday, 8 Dec 2026", "1:15 PM", "Turmeric blessings, intricate bridal henna artistry, traditional folk songs, and joyful laughter."),
        ("Event 04", "Mayra Ceremony (Bhat)", "Wednesday, 9 Dec 2026", "12:15 PM", "Traditional offerings where maternal uncles arrive with ceremonial gifts, garments, and blessings."),
        ("Event 05", "Bannoli Ceremony", "Wednesday, 9 Dec 2026", "5:15 PM", "Royal celebratory procession honoring the couple with traditional folk pomp and sweets."),
        ("Event 06", "Ladies Sangeet", "Wednesday, 9 Dec 2026", "8:00 PM", "Vibrant musical night featuring Rajasthani folk dances, family performances, and festive harmony."),
        ("Event 07", "Baraat Departure", "Thursday, 10 Dec 2026", "12:15 PM", "Grand ceremonial departure of the groom's procession accompanied by joyous dhol beats and brass band."),
        ("Event 08", "Baraat Welcome", "Saturday, 12 Dec 2026", "5:15 PM", "Warm traditional reception with flower showers, rosewater essence, and ceremonial aarti."),
        ("Event 09", "Panigrahan Sanskar", "Saturday, 12 Dec 2026", "10:15 PM", "Sacred Vedic nuptials and the holy seven pheras around the consecrated fire uniting both couples.")
    ]

    for idx, (ev_num, ev_title, ev_date, ev_time, ev_desc) in enumerate(events_list):
        row = idx // 3
        col = idx % 3
        cx = 32 + col * (card_w + 10)
        cy = y - (row + 1) * card_h - row * 10

        c.setFillColor(c_card_bg)
        c.setStrokeColor(c_gold if idx != 8 else c_maroon)
        c.setLineWidth(1.2 if idx != 8 else 1.8)
        c.roundRect(cx, cy, card_w, card_h, 6, fill=1, stroke=1)

        # Content
        c.setFillColor(c_gold_dark if idx != 8 else c_maroon)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawString(cx + 10, cy + card_h - 16, ev_num)

        c.setFillColor(c_maroon)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawRightString(cx + card_w - 10, cy + card_h - 16, ev_time)

        c.setFillColor(c_charcoal)
        c.setFont("Times-Bold", 9.5)
        c.drawString(cx + 10, cy + card_h - 32, ev_title)

        c.setFillColor(c_maroon_dark)
        c.setFont("Helvetica", 7)
        c.drawString(cx + 10, cy + card_h - 44, ev_date)

        c.setStrokeColor(c_line)
        c.setLineWidth(0.6)
        c.line(cx + 10, cy + card_h - 50, cx + card_w - 10, cy + card_h - 50)

        c.setFillColor(c_muted)
        c.setFont("Times-Roman", 7.5)
        # Wrap description
        words = ev_desc.split()
        lines = []
        cur_line = []
        for w in words:
            if len(" ".join(cur_line + [w])) < 28:
                cur_line.append(w)
            else:
                lines.append(" ".join(cur_line))
                cur_line = [w]
        if cur_line:
            lines.append(" ".join(cur_line))

        dy = cy + card_h - 64
        for l in lines[:5]:
            c.drawString(cx + 10, dy, l)
            dy -= 10

    # Transportation notice at bottom
    by = y - 3 * card_h - 2 * 10 - 24
    c.setFillColor(c_card_bg)
    c.setStrokeColor(c_gold)
    c.setLineWidth(1)
    c.roundRect(32, by - 55, page_w - 64, 55, 6, fill=1, stroke=1)

    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 8)
    c.drawString(45, by - 14, "✦ SPECIAL BARAAT TRANSPORTATION ARRANGEMENTS ✦")

    c.setFillColor(c_charcoal)
    c.setFont("Helvetica", 7.5)
    c.drawString(45, by - 28, "• Samdari Route: Baraat of respected Samdhi Shri Chhagan ji, Kishan ji, Nandkishor ji, Gopal ji s/o Dhanraj ji will go by Bus.")
    c.drawString(45, by - 42, "• Balotra Route: Baraat of respected Samdhi Shri Bhanwarlal ji, Gopal ji, Murli ji, Manohar ji, Mukesh ji s/o Madanlal ji will arrive by Bus.")

    c.setFillColor(c_gold_dark)
    c.setFont("Times-Bold", 7.5)
    c.drawCentredString(mid_x, by - 70, "Gehlot Dhaar Center  •  Jasol Maa Hastkala Udyog  •  Pali-Marwar, Rajasthan")

    c.showPage()

    # =========================================================================
    # PAGE 3: BLESSING CEREMONY, RECEPTION & FAMILY DETAILS
    # =========================================================================
    draw_page_borders()

    y = page_h - 40
    # Toran
    toran_png = os.path.join(ASSETS_DIR, "toran.png")
    if os.path.exists(toran_png):
        c.drawImage(toran_png, mid_x - 120, y - 28, width=240, height=30, mask='auto')

    y -= 45
    # Reception Banner
    rec_h = 100
    c.setFillColor(c_card_bg)
    c.setStrokeColor(c_maroon)
    c.setLineWidth(1.8)
    c.roundRect(32, y - rec_h, page_w - 64, rec_h, 8, fill=1, stroke=1)

    # Shehnai Musician Left & Right
    shehnai_png = os.path.join(ASSETS_DIR, "shehnai_musician.png")
    if os.path.exists(shehnai_png):
        c.drawImage(shehnai_png, 42, y - rec_h + 10, width=44, height=58, mask='auto')
        c.drawImage(shehnai_png, page_w - 86, y - rec_h + 10, width=44, height=58, mask='auto')

    c.setFillColor(c_gold_dark)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(mid_x, y - 16, "GRAND FELICITATION & WEDDING FEAST (PRITIBHOJ)")

    c.setFillColor(c_maroon)
    c.setFont("Times-Bold", 15)
    c.drawCentredString(mid_x, y - 34, "BLESSING CEREMONY & WEDDING RECEPTION")

    c.setFillColor(c_charcoal)
    c.setFont("Times-Bold", 10.5)
    c.drawCentredString(mid_x, y - 52, "Saturday, 12 December 2026  •  From 6:15 PM Onwards")

    c.setFillColor(c_gold_dark)
    c.setFont("Times-Bold", 9)
    c.drawCentredString(mid_x, y - 68, "Venue: KUMAWAT VATIKA, Punayata Road, Pali, Rajasthan – 306401")

    c.setFillColor(c_muted)
    c.setFont("Times-Italic", 8)
    c.drawCentredString(mid_x, y - 84, "We humbly request the pleasure of your company to shower heartfelt blessings and join us for dinner.")

    # Family Directory Grid (2 cols x 3 rows)
    y = y - rec_h - 18
    fam_grid_w = page_w - 64
    fam_col_w = (fam_grid_w - 14) / 2
    fam_row_h = 80

    fam_blocks = [
        ("Special Blessings & Dignitaries",
         "Special Blessings: Mrs. Durga Devi, Mrs. Kamla Devi, Mrs. Annu Devi\nSpecial Guests: Mr. Dineshji (Bhopaji), Mr. Sanjay ji Rathore\nSpecial Request: Mr. Rakeshji, Mr. Rajeshji, Mr. Vinodji"),

        ("Welcoming You With Warmth & Hosts",
         "Swagatatur: Mrs. Kamla Devi - Late Banshilalji, Mrs. Bhaga Bai - Ishwarlalji\nHosts (Swagatkarta): Mrs. Santosh - Adv. Kishorji Gehlot, Sunita - Umesh ji, Taroona - Shekhar, Kaushalya - Ramesh, Poonam - Late Ashok ji, Kashak - Mahadev, Deepika - Tarun ji, Rajeshwari - Dev ji"),

        ("Humble Solicitations (Vineet)",
         "Mr. Banshilalji, Mr. Punamchandji, Mr. Kanhaiyalalji, Mr. Lalchandji, Mr. Ranchhodji, Mr. Kailashji, Mr. Mukeshji, Mr. Kishorji, Mr. Ratanji, Mr. Shekharji, Mr. Jitendraji, Mr. Gresik, Mr. Krishna, Mr. Jay, Mr. Siddharth & Entire Gehlot Family"),

        ("Daughters & Sons-in-law (Javai Paksh)",
         "Kamla Devi - Late Devkishanji Parihar, Gayatri - Chandraprakash ji, Premlata - Ashok ji, Rekha - Susheel ji, Bhagwanti - Dilip ji, Deepika - Mahendra ji, Rekha - Manish ji, Pooja - Laxman ji, Taroona - Tarun ji, Pramila - Ashok ji, Manju - Gajendra ji, Khushboo - Prateek ji"),

        ("Maternal Family (Nanihal Paksh)",
         "Ashok ji Bhomiya, Late Banshilalji, Kailashji, Rameshwarji, Chandraprakashji, Nathulalji, Dineshji, Rajendraji, Rakeshji, Rameshji, Pintu ji, Vikramji, Manohar ji, Himmat, Mahadev, Bhavesh, Naresh, Dhiraj, Rajendra & Samast Parihar Family (Jodhpur)"),

        ("Nephews & Sister's Family (Bhanej Paksh)",
         "Arun, Gaurav, Bhavya, Jayesh, Raunak, Vaibhav (Kanha), Bhavya, Raghuvir, Kunwar Raj Solanki")
    ]

    for idx, (title, content) in enumerate(fam_blocks):
        row = idx // 2
        col = idx % 2
        fx = 32 + col * (fam_col_w + 14)
        fy = y - (row + 1) * fam_row_h - row * 8

        c.setFillColor(c_card_bg)
        c.setStrokeColor(c_gold_light)
        c.setLineWidth(1)
        c.roundRect(fx, fy, fam_col_w, fam_row_h, 5, fill=1, stroke=1)

        c.setFillColor(c_maroon)
        c.setFont("Times-Bold", 8)
        c.drawString(fx + 8, fy + fam_row_h - 14, title)
        c.setStrokeColor(c_gold)
        c.setLineWidth(0.6)
        c.line(fx + 8, fy + fam_row_h - 17, fx + fam_col_w - 8, fy + fam_row_h - 17)

        c.setFillColor(c_charcoal)
        c.setFont("Times-Roman", 6.8)
        lines = content.split('\n')
        cur_y = fy + fam_row_h - 28
        for l in lines:
            c.drawString(fx + 8, cur_y, l[:75])
            if len(l) > 75:
                cur_y -= 9
                c.drawString(fx + 8, cur_y, l[75:150])
            cur_y -= 10

    # Child's plea card
    py = y - 3 * fam_row_h - 2 * 8 - 14
    c.setFillColor(c_ivory_bg)
    c.setStrokeColor(c_gold)
    c.setLineWidth(1)
    c.roundRect(32, py - 38, page_w - 64, 38, 5, fill=1, stroke=1)

    c.setFillColor(c_maroon)
    c.setFont("Times-Italic", 8.5)
    c.drawCentredString(mid_x, py - 13, '"Please do come and celebrate my dearest Uncle and Aunt\'s wedding with lots of fun and joy!"')

    c.setFillColor(c_charcoal)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(mid_x, py - 24, "— Affectionate Request by Kunwar Raj Solanki (Ladu)")

    c.setFillColor(c_muted)
    c.setFont("Helvetica", 6.5)
    c.drawCentredString(mid_x, py - 33, "Awaiting Eyes: Jaanvi, Pihu, Adhishree, Swaroopa, Yakshita, Pari, Yashvi, Tanushree, Komal, Veera")

    c.setFillColor(c_gold_dark)
    c.setFont("Times-Bold", 7.5)
    c.drawCentredString(mid_x, py - 52, "© 2026 Gehlot Parivar  •  Royal Wedding Invitation  •  Pali-Marwar, Rajasthan")

    c.save()

    # Also save copy
    import shutil
    shutil.copyfile(OUT_PDF, OUT_PDF_COPY)
    print(f"✓ Created 3-Page Vector PDF successfully: {OUT_PDF} ({os.path.getsize(OUT_PDF)} bytes)")

if __name__ == '__main__':
    create_royal_pdf()
