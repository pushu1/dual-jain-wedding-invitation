import React from 'react';

export default function CouplesSection() {
  return (
    <section className="wedding-section couples-family-section" id="couples-section">
      <div className="section-royal-card couples-royal-pavilion">
        <div className="card-border-gold-outer" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header with Royal Toran */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">॥ मंगल परिणयोत्सव ॥</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <div className="family-origin-pill">पाली का प्रतिष्ठित गहलोत परिवार</div>
          <h2 className="section-title-gold">वर-वधू परिचय</h2>
          <p className="section-subtitle-script">
            श्री विनायक जी महाराज की असीम अनुकम्पा एवं पूज्य पितरों के पावन आशीर्वाद से
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 👑 ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Sacred Ancestral Inscription directly audited from Original Invitation Image 1 */}
        <div className="ancestral-heritage-banner">
          <div className="heritage-badge-tag">पूज्य पूर्वजों का पावन आशीर्वाद एवं कुल परम्परा</div>
          <p className="heritage-lineage-text">
            <strong>स्व. श्रीमती लेहरी बाई – स्व. श्री ग्यारसीलालजी</strong> के पड़पौत्र व पड़पौत्री<br />
            एवं <strong>श्रीमती दुर्गा बाई – स्व. श्री मदनलालजी गहलोत</strong> के लाडले पौत्र व पौत्री
          </p>
        </div>

        {/* Two Couples Cards Grid: Palace Arched Jharokhas with Equal Prominence */}
        <div className="couples-editorial-grid">
          
          {/* ==============================================================
              COUPLE 1: AYUSHMAN AKASH & AYUSHMATI REENA
              ============================================================== */}
          <article className="couple-editorial-card couple-palace-jharokha">
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
            <div className="couple-individual-block groom-block">
              <div className="profile-ornament-icon">🤵</div>
              <h3 className="individual-name">आयुष्मान आकाश</h3>
              <p className="individual-parents">
                सुपुत्र : <strong>श्रीमती अनुराधा – श्री कैलाश गहलोत</strong>
              </p>
            </div>

            {/* Elegant Ornamental Sang / Weds Separator */}
            <div className="weds-flourish-separator">
              <div className="weds-line"></div>
              <div className="weds-badge">
                <span className="weds-sub">✦</span>
                <span className="weds-text">संग</span>
                <span className="weds-sub">✦</span>
              </div>
              <div className="weds-line"></div>
            </div>

            {/* Bride Profile */}
            <div className="couple-individual-block bride-block">
              <div className="profile-ornament-icon">👰</div>
              <h3 className="individual-name">आयुष्मती रीना</h3>
              <p className="individual-parents">
                सुपुत्री : <strong>श्रीमती जशोदा देवी – श्री गोपालजी चौहान</strong>
              </p>
              <div className="family-native-place">
                <span>📍 निवास : समदड़ी</span>
              </div>
            </div>

            {/* Auspicious Ceremony Date Box */}
            <div className="couple-ceremony-date-badge">
              <div className="ceremony-date-icon">🗓️</div>
              <div className="ceremony-date-details">
                <span className="ceremony-label">शुभ विवाह तिथि</span>
                <span className="ceremony-exact-date">गुरुवार, 10 दिसंबर 2026</span>
                <span className="ceremony-muhurat">वि.सं. 2083 मार्गशीर्ष शुक्ल पक्ष</span>
              </div>
            </div>
          </article>

          {/* Central Sacred Gathbandhan & Lotus Emblem */}
          <div className="couples-central-holy-connector" aria-hidden="true">
            <div className="connector-vertical-line"></div>
            <div className="connector-holy-seal">
              <span className="seal-kalash">🏺</span>
              <span className="seal-flourish">❖</span>
            </div>
            <div className="connector-vertical-line"></div>
          </div>

          {/* ==============================================================
              COUPLE 2: AYUSHMATI SHIVANI (JEENU) & AYUSHMAN DHEERAJ JI
              ============================================================== */}
          <article className="couple-editorial-card couple-palace-jharokha">
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
            <div className="couple-individual-block bride-block">
              <div className="profile-ornament-icon">👰</div>
              <h3 className="individual-name">आयुष्मती शिवानी (जीनू)</h3>
              <p className="individual-parents">
                सुपुत्री : <strong>श्रीमती अनुराधा – श्री कैलाश गहलोत</strong>
              </p>
            </div>

            {/* Elegant Ornamental Sang / Weds Separator */}
            <div className="weds-flourish-separator">
              <div className="weds-line"></div>
              <div className="weds-badge">
                <span className="weds-sub">✦</span>
                <span className="weds-text">संग</span>
                <span className="weds-sub">✦</span>
              </div>
              <div className="weds-line"></div>
            </div>

            {/* Groom Profile */}
            <div className="couple-individual-block groom-block">
              <div className="profile-ornament-icon">🤵</div>
              <h3 className="individual-name">आयुष्मान धीरज जी</h3>
              <p className="individual-parents">
                सुपुत्र : <strong>श्रीमती रेणु जी – श्री मुकेशजी परिहार</strong>
              </p>
              <div className="family-native-place">
                <span>📍 निवास : बालोतरा</span>
              </div>
            </div>

            {/* Auspicious Ceremony Date Box */}
            <div className="couple-ceremony-date-badge">
              <div className="ceremony-date-icon">🗓️</div>
              <div className="ceremony-date-details">
                <span className="ceremony-label">शुभ विवाह तिथि</span>
                <span className="ceremony-exact-date">शनिवार, 12 दिसंबर 2026</span>
                <span className="ceremony-muhurat">वि.सं. 2083 मार्गशीर्ष शुक्ल पक्ष 3</span>
              </div>
            </div>
          </article>

        </div>

        {/* Sacred Sanskrit Blessing from Card */}
        <div className="couples-sacred-benediction">
          <p className="benediction-text">
            “के मंगल परिणयोत्सव की मधुर वेला में आप सभी पधारकर वर–वधु को अपना शुभ आशीर्वाद प्रदान कर हमें अनुग्रहित करे।”
          </p>
        </div>

      </div>
    </section>
  );
}
