import React from 'react';

export default function CouplesSection() {
  return (
    <section className="wedding-section couples-family-section" id="couples-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer"></div>
        <div className="card-border-gold-inner"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <span className="shloka-text">|| MANGAL PARINAYOTSAV ||</span>
          <div className="family-origin-pill">THE ESTEEMED GEHLOT PARIVAR OF PALI</div>
          <h2 className="section-title-gold">THE WEDDING COUPLES &amp; FAMILY LINEAGE</h2>
          <p className="section-subtitle-script">
            With the divine blessings of Lord Ganesha, revered ancestral elders &amp; parents
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Ancestral Inscription Card */}
        <div style={{
          background: 'rgba(100, 27, 46, 0.25)',
          border: '1px solid rgba(212, 175, 101, 0.4)',
          borderRadius: '10px',
          padding: '14px 20px',
          maxWidth: '680px',
          margin: '0 auto 28px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--c-gold-light)', textTransform: 'uppercase' }}>
            Sacred Ancestral Blessings
          </span>
          <p style={{
            fontSize: '14px',
            color: 'var(--c-ivory)',
            margin: '6px 0 0',
            lineHeight: 1.6,
            fontFamily: 'Roboto Slab, serif'
          }}>
            Great Grandchildren of <strong>Late Mrs. Lehri Bai &amp; Late Mr. Gyarsilalji</strong><br />
            Beloved Grandchildren of <strong>Mrs. Durga Bai &amp; Late Mr. Madanlalji Gehlot</strong>
          </p>
        </div>

        {/* Two Couples Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '20px',
          width: '100%',
          maxWidth: '1050px',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}>

          {/* ==============================================================
              COUPLE 1: AYUSHMAN AKASH & AYUSHMATI REENA
              ============================================================== */}
          <div className="couple-profile-card prominent-family-card" style={{ padding: '24px 18px' }}>
            <div className="profile-frame-jharokha">
              <div className="avatar-art-container">
                <svg viewBox="0 0 140 140" className="avatar-silhouette-svg">
                  <circle cx="70" cy="70" r="65" fill="#3B101C" stroke="#D4AF65" strokeWidth="2" />
                  <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(212, 175, 101, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
                  {/* Groom Safa & Face */}
                  <path d="M70 38 C60 38 52 46 52 56 C52 66 60 72 70 72 C80 72 88 66 88 56 C88 46 80 38 70 38 Z" fill="#E8D5A3" />
                  <path d="M46 44 C46 30 60 22 70 22 C80 22 94 30 94 44 C92 48 85 52 70 52 C55 52 48 48 46 44 Z" fill="#D4AF65" stroke="#8C6A28" strokeWidth="1" />
                  <path d="M70 12 Q75 18 70 24 Q65 18 70 12 Z" fill="#FFF9ED" stroke="#D4AF65" strokeWidth="1" />
                  <circle cx="70" cy="24" r="3" fill="#8C1D40" />
                  <path d="M42 80 L70 90 L98 80 L102 118 L38 118 Z" fill="#641B2E" stroke="#D4AF65" strokeWidth="1.2" />
                  <line x1="70" y1="90" x2="70" y2="118" stroke="#D4AF65" strokeWidth="1.5" />
                  <circle cx="70" cy="95" r="1.5" fill="#FFF9ED" />
                  <circle cx="70" cy="103" r="1.5" fill="#FFF9ED" />
                  <circle cx="70" cy="111" r="1.5" fill="#FFF9ED" />
                </svg>
              </div>

              <div className="profile-role-badge">
                <span className="role-tag">FIRST WEDDING COUPLE</span>
              </div>
            </div>

            <div className="profile-details-content">
              <h3 className="profile-name" style={{ fontSize: 'clamp(20px, 4.2vw, 25px)' }}>
                AYUSHMAN AKASH
              </h3>
              <p style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: 'var(--c-gold-light)',
                textTransform: 'uppercase',
                margin: '2px 0 8px'
              }}>
                Son of Mrs. Anuradha &amp; Mr. Kailash Gehlot
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                margin: '8px 0'
              }}>
                <span style={{ height: '1px', width: '30px', background: 'var(--c-gold)' }}></span>
                <span style={{ fontSize: '15px', color: 'var(--c-gold)', fontStyle: 'italic', fontWeight: 700 }}>Sang (Weds)</span>
                <span style={{ height: '1px', width: '30px', background: 'var(--c-gold)' }}></span>
              </div>

              <h3 className="profile-name" style={{ fontSize: 'clamp(20px, 4.2vw, 25px)' }}>
                AYUSHMATI REENA
              </h3>
              <p style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: 'var(--c-gold-light)',
                textTransform: 'uppercase',
                margin: '2px 0 12px'
              }}>
                Daughter of Mrs. Jashoda Devi &amp; Mr. Gopalji Chauhan (Samdari)
              </p>

              <div style={{
                background: 'rgba(21, 19, 19, 0.6)',
                border: '1px solid rgba(212, 175, 101, 0.3)',
                borderRadius: '8px',
                padding: '12px 14px',
                marginTop: '14px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '11px', color: 'var(--c-gold-light)', fontWeight: 700, letterSpacing: '1px' }}>
                  🗓️ WEDDING CEREMONY DATE:
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--c-ivory)', fontWeight: 600, marginTop: '4px' }}>
                  Thursday, 10 December 2026 (Margashirsha Shukla Paksh)
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================================
              COUPLE 2: AYUSHMATI SHIVANI (JEENU) & AYUSHMAN DHEERAJ JI
              ============================================================== */}
          <div className="couple-profile-card prominent-family-card" style={{ padding: '24px 18px' }}>
            <div className="profile-frame-jharokha">
              <div className="avatar-art-container">
                <svg viewBox="0 0 140 140" className="avatar-silhouette-svg">
                  <circle cx="70" cy="70" r="65" fill="#641B2E" stroke="#D4AF65" strokeWidth="2" />
                  <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(212, 175, 101, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
                  {/* Bride Face & Maang Tikka */}
                  <path d="M70 30 C58 30 50 38 50 50 C50 62 58 68 70 68 C82 68 90 62 90 50 C90 38 82 30 70 30 Z" fill="#E8D5A3" />
                  <circle cx="70" cy="38" r="3" fill="#D4AF65" />
                  <path d="M70 30 L70 38" stroke="#D4AF65" strokeWidth="1.5" />
                  {/* Ornate Dupatta Veil */}
                  <path d="M44 48 C40 65 32 90 28 115 C52 118 88 118 112 115 C108 90 100 65 96 48 C92 42 85 36 70 36 C55 36 48 42 44 48 Z" fill="#3B101C" stroke="#D4AF65" strokeWidth="1.2" opacity="0.9" />
                  <circle cx="63" cy="54" r="3" fill="none" stroke="#D4AF65" strokeWidth="1" />
                  <path d="M63 54 Q56 50 52 46" fill="none" stroke="#D4AF65" strokeWidth="0.8" />
                  <path d="M48 85 L70 95 L92 85 L96 115 L44 115 Z" fill="#8C1D40" />
                </svg>
              </div>

              <div className="profile-role-badge">
                <span className="role-tag">SECOND WEDDING COUPLE</span>
              </div>
            </div>

            <div className="profile-details-content">
              <h3 className="profile-name" style={{ fontSize: 'clamp(20px, 4.2vw, 25px)' }}>
                AYUSHMATI SHIVANI (JEENU)
              </h3>
              <p style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: 'var(--c-gold-light)',
                textTransform: 'uppercase',
                margin: '2px 0 8px'
              }}>
                Daughter of Mrs. Anuradha &amp; Mr. Kailash Gehlot
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                margin: '8px 0'
              }}>
                <span style={{ height: '1px', width: '30px', background: 'var(--c-gold)' }}></span>
                <span style={{ fontSize: '15px', color: 'var(--c-gold)', fontStyle: 'italic', fontWeight: 700 }}>Sang (Weds)</span>
                <span style={{ height: '1px', width: '30px', background: 'var(--c-gold)' }}></span>
              </div>

              <h3 className="profile-name" style={{ fontSize: 'clamp(20px, 4.2vw, 25px)' }}>
                AYUSHMAN DHEERAJ JI
              </h3>
              <p style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: 'var(--c-gold-light)',
                textTransform: 'uppercase',
                margin: '2px 0 12px'
              }}>
                Son of Mrs. Renu Ji &amp; Mr. Mukeshji Parihar (Balotra)
              </p>

              <div style={{
                background: 'rgba(21, 19, 19, 0.6)',
                border: '1px solid rgba(212, 175, 101, 0.3)',
                borderRadius: '8px',
                padding: '12px 14px',
                marginTop: '14px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '11px', color: 'var(--c-gold-light)', fontWeight: 700, letterSpacing: '1px' }}>
                  🗓️ WEDDING CEREMONY DATE:
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--c-ivory)', fontWeight: 600, marginTop: '4px' }}>
                  Saturday, 12 December 2026 (Margashirsha Shukla Paksh 3)
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
