import React from 'react';

export default function WeddingHero({ onExplore }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnterInvitation = () => {
    if (onExplore) {
      onExplore();
    } else {
      scrollToSection('couples-section');
    }
  };

  return (
    <section className="wedding-hero-section" id="hero-section">
      {/* Decorative Traditional Arch & Floral Garlands */}
      <div className="hero-temple-arch-frame" aria-hidden="true">
        <svg viewBox="0 0 500 120" className="temple-arch-svg" preserveAspectRatio="none">
          <path
            d="M 0,0 L 500,0 L 500,25 Q 380,25 320,60 Q 250,95 180,60 Q 120,25 0,25 Z"
            fill="rgba(139, 48, 56, 0.08)"
          />
          <path
            d="M 0,0 L 500,0 L 500,18 Q 380,18 320,48 Q 250,80 180,48 Q 120,18 0,18 Z"
            fill="none"
            stroke="#C9A45C"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="hero-content-wrapper">
        
        {/* Lord Shiva & Mata Parvati Sacred Artwork Crown */}
        <div className="hero-divine-crown-frame">
          <div className="divine-artwork-jharokha">
            <img
              src="assets/shiva_parvati_top_artwork.png"
              alt="Lord Shiva and Mata Parvati"
              className="shiva-parvati-art-img"
              width="440"
              height="260"
            />
            <div className="jharokha-gold-border"></div>
          </div>
        </div>

        {/* Sacred Lord Ganesha Invocation */}
        <div className="hero-invocation-group">
          <div className="hero-ganesha-emblem">
            <img
              src="assets/champagne_ganesha_bright.png"
              alt="Lord Ganesha"
              className="hero-ganesha-img"
              width="44"
              height="44"
            />
          </div>
          <div className="hero-shloka-text">|| SHREE GANESHAY NAMAH ||</div>
          <p className="hero-divine-subtitle">
            With the Divine Blessings of Lord Ganesha &amp; Our Respected Ancestors
          </p>
        </div>

        {/* Main Royal Heading */}
        <div className="hero-main-title-block">
          <div className="hero-royal-flourish-line">
            <span className="flourish-leaf">🌿</span>
            <span className="flourish-dash"></span>
            <span className="flourish-star">✦</span>
            <span className="flourish-dash"></span>
            <span className="flourish-leaf">🌿</span>
          </div>
          <h1 className="hero-grand-title">THE WEDDING INVITATION</h1>
          <div className="hero-shubh-vivah">Auspicious Wedding Celebration</div>
        </div>

        {/* Symmetrical Dual-Couples Composition */}
        <div className="hero-couples-showcase-card">
          
          {/* Couple 1: Akash & Reena */}
          <div className="hero-couple-unit">
            <span className="couple-sacred-label">First Couple</span>
            <h2 className="couple-names-headline">
              AYUSHMAN AKASH
            </h2>
            <div className="couple-ampersand-sign">&amp;</div>
            <h2 className="couple-names-headline">
              AYUSHMATI REENA
            </h2>
            <div className="couple-date-tag">
              Thursday, 10 December 2026
            </div>
          </div>

          {/* Central Sacred Lotus & Royal Divider */}
          <div className="hero-central-divider-unit" aria-hidden="true">
            <div className="divider-gold-line"></div>
            <div className="divider-sacred-emblem">
              <span className="emblem-symbol">👑</span>
              <span className="emblem-flourish">❖</span>
            </div>
            <div className="divider-gold-line"></div>
          </div>

          {/* Couple 2: Shivani & Dheeraj */}
          <div className="hero-couple-unit">
            <span className="couple-sacred-label">Second Couple</span>
            <h2 className="couple-names-headline">
              AYUSHMATI SHIVANI (JEENU)
            </h2>
            <div className="couple-ampersand-sign">&amp;</div>
            <h2 className="couple-names-headline">
              AYUSHMAN DHEERAJ JI
            </h2>
            <div className="couple-date-tag">
              Saturday, 12 December 2026
            </div>
          </div>

        </div>

        {/* Celebration & Venue Announcement Banner */}
        <div className="hero-venue-announcement-banner">
          <div className="banner-date-highlight">
            <span className="cal-icon">🗓️</span>
            <span className="date-str">WEDDING CELEBRATION: 12 DECEMBER 2026</span>
          </div>
          <div className="banner-venue-location">
            <span className="pin-icon">📍</span>
            <span className="venue-str">KUMAWAT VATIKA, PALI, RAJASTHAN</span>
          </div>
        </div>

        {/* Romantic Heritage Quote */}
        <blockquote className="hero-heritage-quote">
          “Two Sacred Unions, Four Blessed Families, One Grand Joyous Celebration”
        </blockquote>

        {/* Elegant ENTER INVITATION Button with Subtle Golden Shimmer */}
        <div className="hero-enter-action-wrap">
          <button
            onClick={handleEnterInvitation}
            className="btn-enter-invitation"
            aria-label="Enter complete wedding invitation"
          >
            <span className="btn-sparkle">✦</span>
            <span className="btn-text">ENTER INVITATION</span>
            <span className="btn-sparkle">✦</span>
            <span className="btn-shimmer-sweep" aria-hidden="true"></span>
          </button>
        </div>

        {/* Smooth Scroll Down Indicator */}
        <div
          className="hero-scroll-indicator"
          onClick={handleEnterInvitation}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to wedding couples details"
        >
          <span className="scroll-label">Scroll to Explore</span>
          <div className="scroll-chevron-bounce">
            <svg viewBox="0 0 24 24" className="chevron-svg" aria-hidden="true">
              <path d="M7 10l5 5 5-5" fill="none" stroke="#8B3038" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
