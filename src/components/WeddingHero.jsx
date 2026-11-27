import React, { useState, useEffect } from 'react';

export default function WeddingHero({ onExplore }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const handleStatus = (e) => {
      if (e && e.detail) {
        setIsMusicPlaying(!!e.detail.isPlaying);
      }
    };
    window.addEventListener('weddingMusicStatus', handleStatus);
    return () => window.removeEventListener('weddingMusicStatus', handleStatus);
  }, []);

  const handleStartMusic = () => {
    if (typeof window.playWeddingMusic === 'function') {
      window.playWeddingMusic();
      setIsMusicPlaying(true);
    }
  };

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
              alt="भगवान शिव एवं माता पार्वती"
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
              alt="भगवान श्री गणेश"
              className="hero-ganesha-img"
              width="44"
              height="44"
            />
          </div>
          <div className="hero-shloka-text">॥ श्री गणेशाय नमः ॥</div>
          <p className="hero-divine-subtitle">
            भगवान श्री गणेश एवं पूज्य पितरों के पावन आशीर्वाद से
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
          <h1 className="hero-grand-title">विवाह आमंत्रण</h1>
          <div className="hero-shubh-vivah">मांगलिक विवाह महोत्सव</div>
        </div>

        {/* Symmetrical Dual-Couples Composition */}
        <div className="hero-couples-showcase-card">
          
          {/* Couple 1: Akash & Reena */}
          <div className="hero-couple-unit">
            <span className="couple-sacred-label">— प्रथम पावन परिणय —</span>
            <h2 className="couple-names-headline">
              आयुष्मान आकाश
            </h2>
            <div className="couple-ampersand-sign">एवं</div>
            <h2 className="couple-names-headline">
              आयुष्मती रीना
            </h2>
            <div className="couple-date-tag">
              गुरुवार, 10 दिसंबर 2026
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
            <span className="couple-sacred-label">— द्वितीय पावन परिणय —</span>
            <h2 className="couple-names-headline">
              आयुष्मती शिवानी (जीनू)
            </h2>
            <div className="couple-ampersand-sign">एवं</div>
            <h2 className="couple-names-headline">
              आयुष्मान धीरज जी
            </h2>
            <div className="couple-date-tag">
              शनिवार, 12 दिसंबर 2026
            </div>
          </div>

        </div>

        {/* Celebration & Venue Announcement Banner */}
        <div className="hero-venue-announcement-banner">
          <div className="banner-date-highlight">
            <span className="cal-icon">🗓️</span>
            <span className="date-str">मुख्य विवाह समारोह: 12 दिसंबर 2026</span>
          </div>
          <div className="banner-venue-location">
            <span className="pin-icon">📍</span>
            <span className="venue-str">कुमावत वाटिका, पाली (राजस्थान)</span>
          </div>
        </div>

        {/* Romantic Heritage Quote */}
        <blockquote className="hero-heritage-quote">
          “दो पावन परिणय सूत्र, चार परिवारों का संगम, एक भव्य मंगल उत्सव”
        </blockquote>

        {/* User-Requested Interactive Music Prompt Banner */}
        <div className="hero-music-prompt-banner">
          <div className="hero-music-prompt-text">
            <span>🎺</span>
            <span>शहनाई की मधुर धुन सुनने के लिए यहाँ क्लिक करें</span>
          </div>
          <button
            type="button"
            className="btn-start-music-prompt"
            onClick={handleStartMusic}
            title="विवाह संगीत चालू करें (14 सेकंड से)"
            aria-label="संगीत शुरू करें"
          >
            <span>{isMusicPlaying ? '🎵 संगीत बज रहा है' : '▶ संगीत शुरू करें'}</span>
          </button>
        </div>

        {/* Elegant ENTER INVITATION Button with Subtle Golden Shimmer */}
        <div className="hero-enter-action-wrap" style={{ marginTop: '20px' }}>
          <button
            onClick={handleEnterInvitation}
            className="btn-enter-invitation"
            aria-label="आमंत्रण में प्रवेश करें"
          >
            <span className="btn-sparkle">✦</span>
            <span className="btn-text">आमंत्रण में प्रवेश करें</span>
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
          aria-label="वर-वधू विवरण देखने हेतु नीचे स्क्रॉल करें"
        >
          <span className="scroll-label">नीचे देखें</span>
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
