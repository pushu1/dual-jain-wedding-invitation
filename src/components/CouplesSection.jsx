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
            <span className="shloka-text">|| MANGAL PARINAYOTSAV ||</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <div className="family-origin-pill">THE ESTEEMED GEHLOT PARIVAR OF PALI</div>
          <h2 className="section-title-gold">THE WEDDING COUPLES</h2>
          <p className="section-subtitle-script">
            With the divine blessings of Lord Shiva, Mata Parvati, Lord Ganesha &amp; Our Respected Ancestors
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 👑 ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Sacred Ancestral Inscription Badge */}
        <div className="ancestral-heritage-banner">
          <span className="heritage-badge-tag">Sacred Ancestral Heritage &amp; Blessings</span>
          <p className="heritage-lineage-text">
            Great Grandchildren of <strong>Late Mrs. Lehri Bai &amp; Late Mr. Gyarsilalji</strong><br />
            Beloved Grandchildren of <strong>Mrs. Durga Bai &amp; Late Mr. Madanlalji Gehlot</strong>
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
              <span className="pill-label">FIRST SACRED UNION</span>
              <span className="pill-star">✦</span>
            </div>

            {/* Groom Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">🤵</div>
              <h3 className="individual-name">AYUSHMAN AKASH</h3>
              <p className="individual-parents">
                Son of <strong>Mrs. Anuradha &amp; Mr. Kailash Gehlot</strong>
              </p>
            </div>

            {/* Elegant Ornamental WEDS Separator */}
            <div className="weds-flourish-separator">
              <div className="weds-line"></div>
              <div className="weds-badge">
                <span className="weds-sub">✦</span>
                <span className="weds-text">WEDS</span>
                <span className="weds-sub">✦</span>
              </div>
              <div className="weds-line"></div>
            </div>

            {/* Bride Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">👰</div>
              <h3 className="individual-name">AYUSHMATI REENA</h3>
              <p className="individual-parents">
                Daughter of <strong>Mrs. Jashoda Devi &amp; Mr. Gopalji Chauhan</strong>
              </p>
              <span className="family-native-place">Residence: Samdari</span>
            </div>

            {/* Auspicious Ceremony Date Box */}
            <div className="couple-ceremony-date-badge">
              <div className="ceremony-date-icon">🗓️</div>
              <div className="ceremony-date-details">
                <span className="ceremony-label">WEDDING CEREMONY DATE</span>
                <span className="ceremony-exact-date">Thursday, 10 December 2026</span>
                <span className="ceremony-muhurat">Margashirsha Shukla Paksh</span>
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
              <span className="pill-label">SECOND SACRED UNION</span>
              <span className="pill-star">✦</span>
            </div>

            {/* Bride Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">👰</div>
              <h3 className="individual-name">AYUSHMATI SHIVANI (JEENU)</h3>
              <p className="individual-parents">
                Daughter of <strong>Mrs. Anuradha &amp; Mr. Kailash Gehlot</strong>
              </p>
            </div>

            {/* Elegant Ornamental WEDS Separator */}
            <div className="weds-flourish-separator">
              <div className="weds-line"></div>
              <div className="weds-badge">
                <span className="weds-sub">✦</span>
                <span className="weds-text">WEDS</span>
                <span className="weds-sub">✦</span>
              </div>
              <div className="weds-line"></div>
            </div>

            {/* Groom Profile */}
            <div className="couple-individual-block">
              <div className="profile-ornament-icon">🤵</div>
              <h3 className="individual-name">AYUSHMAN DHEERAJ JI</h3>
              <p className="individual-parents">
                Son of <strong>Mrs. Renu Ji &amp; Mr. Mukeshji Parihar</strong>
              </p>
              <span className="family-native-place">Residence: Balotra</span>
            </div>

            {/* Auspicious Ceremony Date Box */}
            <div className="couple-ceremony-date-badge">
              <div className="ceremony-date-icon">🗓️</div>
              <div className="ceremony-date-details">
                <span className="ceremony-label">WEDDING CEREMONY DATE</span>
                <span className="ceremony-exact-date">Saturday, 12 December 2026</span>
                <span className="ceremony-muhurat">Margashirsha Shukla Paksh 3</span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
