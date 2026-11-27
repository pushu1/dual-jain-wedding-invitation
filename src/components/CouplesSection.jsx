import React from 'react';

export default function CouplesSection() {
  return (
    <section className="wedding-section couples-family-section" id="couples-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">॥ मंगल परिणयोत्सव ॥</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <div className="family-origin-pill">पाली का प्रतिष्ठित गेहलोत परिवार</div>
          <h2 className="section-title-gold">वर-वधू परिचय</h2>
          <p className="section-subtitle-script">
            भगवान शिव, माता पार्वती, भगवान श्री गणेश एवं पूज्य पूर्वजों के पावन आशीर्वाद से
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 👑 ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Sacred Ancestral Inscription Badge */}
        <div className="ancestral-heritage-banner">
          <span className="heritage-badge-tag">पूज्य पूर्वजों का पावन आशीर्वाद एवं कुल परम्परा</span>
          <p className="heritage-lineage-text">
            स्वर्गीय श्रीमती लहरी बाई एवं स्वर्गीय श्री ग्यारसीलाल जी के प्रपौत्र / प्रपौत्री<br />
            श्रीमती दुर्गा बाई एवं स्वर्गीय श्री मदनलाल जी गेहलोत के लाडले पौत्र / पौत्री
          </p>
        </div>

        {/* Two Couples Cards Grid: Side-by-Side on Desktop, Stacked on Mobile */}
        <div className="couples-editorial-grid">
          
          {/* ==============================================================
              COUPLE 1: AYUSHMAN AKASH & AYUSHMATI REENA
              ============================================================== */}
          <article className="couple-editorial-card">
            <div className="card-ornament-corner tl"></div>
            <div className="card-ornament-corner tr"></div>
            <div className="card-ornament-corner bl"></div>
            <div className="card-ornament-corner br"></div>

            <div className="couple-sacred-pill">
              <span className="pill-star">✦</span>
              <span className="pill-label">प्रथम पावन परिणय</span>
              <span className="pill-star">✦</span>
            </div>

            {/* Groom Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">🤵</div>
              <h3 className="individual-name">आयुष्मान आकाश</h3>
              <p className="individual-parents">
                सुपुत्र: <strong>श्रीमती अनुराधा एवं श्री कैलाश गेहलोत</strong>
              </p>
            </div>

            {/* Elegant Ornamental WEDS Separator */}
            <div className="weds-flourish-separator">
              <div className="weds-line"></div>
              <div className="weds-badge">
                <span className="weds-sub">✦</span>
                <span className="weds-text">शुभ विवाह</span>
                <span className="weds-sub">✦</span>
              </div>
              <div className="weds-line"></div>
            </div>

            {/* Bride Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">👰</div>
              <h3 className="individual-name">आयुष्मती रीना</h3>
              <p className="individual-parents">
                सुपुत्री: <strong>श्रीमती जसोधा देवी एवं श्री गोपालजी चौहान</strong>
              </p>
              <span className="family-native-place">निवास: समदड़ी</span>
            </div>

            {/* Auspicious Ceremony Date Box */}
            <div className="couple-ceremony-date-badge">
              <div className="ceremony-date-icon">🗓️</div>
              <div className="ceremony-date-details">
                <span className="ceremony-label">शुभ विवाह तिथि</span>
                <span className="ceremony-exact-date">गुरुवार, 10 दिसंबर 2026</span>
                <span className="ceremony-muhurat">मार्गशीर्ष शुक्ल पक्ष</span>
              </div>
            </div>
          </article>

          {/* ==============================================================
              COUPLE 2: AYUSHMATI SHIVANI (JEENU) & AYUSHMAN DHEERAJ JI
              ============================================================== */}
          <article className="couple-editorial-card">
            <div className="card-ornament-corner tl"></div>
            <div className="card-ornament-corner tr"></div>
            <div className="card-ornament-corner bl"></div>
            <div className="card-ornament-corner br"></div>

            <div className="couple-sacred-pill">
              <span className="pill-star">✦</span>
              <span className="pill-label">द्वितीय पावन परिणय</span>
              <span className="pill-star">✦</span>
            </div>

            {/* Bride Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">👰</div>
              <h3 className="individual-name">आयुष्मती शिवानी (जीनू)</h3>
              <p className="individual-parents">
                सुपुत्री: <strong>श्रीमती अनुराधा एवं श्री कैलाश गेहलोत</strong>
              </p>
            </div>

            {/* Elegant Ornamental WEDS Separator */}
            <div className="weds-flourish-separator">
              <div className="weds-line"></div>
              <div className="weds-badge">
                <span className="weds-sub">✦</span>
                <span className="weds-text">शुभ विवाह</span>
                <span className="weds-sub">✦</span>
              </div>
              <div className="weds-line"></div>
            </div>

            {/* Groom Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">🤵</div>
              <h3 className="individual-name">आयुष्मान धीरज जी</h3>
              <p className="individual-parents">
                सुपुत्र: <strong>श्रीमती रेनू जी एवं श्री मुकेशजी परिहार</strong>
              </p>
              <span className="family-native-place">निवास: बालोतरा</span>
            </div>

            {/* Auspicious Ceremony Date Box */}
            <div className="couple-ceremony-date-badge">
              <div className="ceremony-date-icon">🗓️</div>
              <div className="ceremony-date-details">
                <span className="ceremony-label">शुभ विवाह तिथि</span>
                <span className="ceremony-exact-date">शनिवार, 12 दिसंबर 2026</span>
                <span className="ceremony-muhurat">मार्गशीर्ष शुक्ल पक्ष तृतीया</span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
