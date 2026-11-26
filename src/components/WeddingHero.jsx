import React from 'react';

export default function WeddingHero({ onOpenCardViewer, onDownloadPDF }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="wedding-hero-section" id="hero-section">
      {/* Royal Palace Background & Atmospheric Overlay */}
      <div className="hero-palace-backdrop" aria-hidden="true">
        <div className="hero-radial-vignette"></div>
        <div className="hero-palace-silhouette"></div>
      </div>

      {/* Floating Animated Floral Garland & Jharokha Arch */}
      <div className="hero-royal-arch-frame" aria-hidden="true">
        <svg viewBox="0 0 400 120" className="hero-arch-svg" preserveAspectRatio="none">
          <path
            d="M 0,0 L 400,0 L 400,30 Q 300,30 250,70 Q 200,110 150,70 Q 100,30 0,30 Z"
            fill="rgba(100, 27, 46, 0.45)"
          />
          <path
            d="M 0,0 L 400,0 L 400,20 Q 300,20 250,55 Q 200,95 150,55 Q 100,20 0,20 Z"
            fill="none"
            stroke="#D4AF65"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="hero-content-wrapper">
        {/* Sacred Top Shloka & Lord Ganesha Emblem */}
        <div className="hero-invocation-group">
          <div className="hero-ganesha-emblem">
            <img
              src="assets/champagne_ganesha_bright.png"
              alt="Lord Ganesha"
              className="hero-ganesha-img"
            />
          </div>
          <div className="hero-shloka-text">|| SHREE GANESHAY NAMAH ||</div>
          <div className="hero-shubh-vivah">Auspicious Jain Wedding Celebration</div>
        </div>

        {/* Grand Wedding Heading */}
        <div className="hero-royal-badge">
          <span className="badge-flourish">✦</span>
          <span className="badge-text">THE ROYAL WEDDING CELEBRATION</span>
          <span className="badge-flourish">✦</span>
        </div>

        {/* Both Couples Display Card */}
        <div className="hero-names-display" style={{ width: '100%', maxWidth: '780px' }}>
          
          {/* Couple 1: Akash & Reena */}
          <div className="hero-couple-unit" style={{ textAlign: 'center', marginBottom: '14px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              letterSpacing: '2.5px',
              color: 'var(--c-gold-light)',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>
              First Couple
            </span>
            <h1 className="hero-name-primary" style={{ fontSize: 'clamp(22px, 5.2vw, 36px)', lineHeight: 1.2 }}>
              AYUSHMAN AKASH <span style={{ color: 'var(--c-gold)', fontSize: '0.8em' }}>&amp;</span> AYUSHMATI REENA
            </h1>
            <p style={{
              fontSize: '13px',
              color: 'var(--c-gold-light)',
              margin: '3px 0 0',
              letterSpacing: '1px'
            }}>
              Thursday, 10 December 2026
            </p>
          </div>

          {/* Golden Center Flourish */}
          <div className="hero-ampersand-wrapper" style={{ width: '180px', margin: '4px auto 14px' }}>
            <span className="ampersand-line"></span>
            <span className="ampersand-symbol" style={{ fontSize: '20px' }}>✦ 👑 ✦</span>
            <span className="ampersand-line"></span>
          </div>

          {/* Couple 2: Shivani & Dheeraj */}
          <div className="hero-couple-unit" style={{ textAlign: 'center' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              letterSpacing: '2.5px',
              color: 'var(--c-gold-light)',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>
              Second Couple
            </span>
            <h1 className="hero-name-primary" style={{ fontSize: 'clamp(22px, 5.2vw, 36px)', lineHeight: 1.2 }}>
              AYUSHMATI SHIVANI (JEENU) <span style={{ color: 'var(--c-gold)', fontSize: '0.8em' }}>&amp;</span> AYUSHMAN DHEERAJ JI
            </h1>
            <p style={{
              fontSize: '13px',
              color: 'var(--c-gold-light)',
              margin: '3px 0 0',
              letterSpacing: '1px'
            }}>
              Saturday, 12 December 2026
            </p>
          </div>

        </div>

        {/* Date & Venue Announcement Badge */}
        <div className="hero-date-badge" style={{ marginTop: '16px', padding: '8px 20px', borderRadius: '30px' }}>
          <div className="date-icon">✦</div>
          <div className="date-main" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>
            SATURDAY, 12 DECEMBER 2026 • KUMAWAT VATIKA, PALI, RAJASTHAN
          </div>
          <div className="date-icon">✦</div>
        </div>

        {/* Romantic Heritage Tagline */}
        <p className="hero-journey-quote" style={{ marginTop: '16px' }}>
          “Two Sacred Unions, One Joyous Family Celebration”
        </p>

        {/* Dual Primary Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginTop: '20px',
          zIndex: 10
        }}>
          <button
            onClick={onOpenCardViewer}
            style={{
              background: 'linear-gradient(135deg, #D4AF65 0%, #ECC878 50%, #B88B38 100%)',
              color: '#3B101C',
              border: 'none',
              borderRadius: '26px',
              padding: '10px 24px',
              fontFamily: 'Roboto Slab, serif',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '1.5px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(212, 175, 101, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>📜</span>
            <span>VIEW INVITATION CARD</span>
          </button>

          <a
            href="dual-jain-wedding-invitation.pdf"
            download="dual-jain-wedding-invitation.pdf"
            style={{
              background: 'linear-gradient(135deg, #641B2E 0%, #4D1423 50%, #3B101C 100%)',
              color: '#E8D5A3',
              border: '1.5px solid #D4AF65',
              borderRadius: '26px',
              padding: '10px 24px',
              fontFamily: 'Roboto Slab, serif',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(59, 16, 28, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>📥</span>
            <span>DOWNLOAD PDF CARD</span>
          </a>
        </div>

        {/* Smooth Scroll Down Indicator */}
        <div
          className="hero-scroll-indicator"
          onClick={() => scrollToSection('couples-section')}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to wedding couples details"
          style={{ marginTop: '24px' }}
        >
          <span className="scroll-label">Scroll to Explore</span>
          <div className="scroll-chevron-bounce">
            <svg viewBox="0 0 24 24" className="chevron-svg">
              <path d="M7 10l5 5 5-5" fill="none" stroke="#D4AF65" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
