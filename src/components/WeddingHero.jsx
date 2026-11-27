import React, { useState, useEffect } from 'react';

export default function WeddingHero({ onEnterInvitation }) {
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

  const handleStartMusic = (e) => {
    e.stopPropagation();
    if (typeof window.playWeddingMusic === 'function') {
      window.playWeddingMusic();
      setIsMusicPlaying(true);
    }
  };

  const handleButtonClick = () => {
    if (onEnterInvitation) {
      onEnterInvitation();
    } else {
      if (typeof window.playWeddingMusic === 'function') {
        window.playWeddingMusic();
      }
      const el = document.getElementById('couples-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="wedding-hero-section" id="hero-section">
      {/* Decorative Traditional Arch & Temple Top Frame */}
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
              width="48"
              height="48"
            />
          </div>
          <div className="hero-shloka-text">॥ श्री गणेशाय नमः ॥</div>
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
          <h1 className="hero-grand-title">॥ विवाह आमंत्रण ॥</h1>
          <p className="hero-divine-subtitle">
            भगवान शिव, माता पार्वती एवं हमारे पूज्य पूर्वजों के दिव्य आशीर्वाद से
          </p>
        </div>

        {/* Symmetrical Dual-Couples Composition with Large Mobile Typography */}
        <div className="hero-couples-showcase-card">
          
          {/* Couple 1: Akash & Reena */}
          <div className="hero-couple-unit">
            <span className="couple-sacred-label">— प्रथम पावन परिणय —</span>
            <h2 className="couple-names-headline">
              आयुष्मान आकाश
            </h2>
            <div className="couple-parents-line">
              सुपुत्र श्रीमती अनुराधा एवं श्री कैलाश गेहलोत
            </div>
            <div className="couple-subh-vivah-badge">
              ✦ शुभ विवाह ✦
            </div>
            <h2 className="couple-names-headline">
              आयुष्मती रीना
            </h2>
            <div className="couple-parents-line">
              सुपुत्री श्रीमती जसोधा देवी एवं श्री गोपालजी चौहान
            </div>
            <div className="couple-date-tag">
              विवाह दिनांक: गुरुवार, 10 दिसंबर 2026
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
            <div className="couple-parents-line">
              सुपुत्री श्रीमती अनुराधा एवं श्री कैलाश गेहलोत
            </div>
            <div className="couple-subh-vivah-badge">
              ✦ शुभ विवाह ✦
            </div>
            <h2 className="couple-names-headline">
              आयुष्मान धीरज जी
            </h2>
            <div className="couple-parents-line">
              सुपुत्र श्रीमती रेनू जी एवं श्री मुकेशजी परिहार
            </div>
            <div className="couple-date-tag">
              विवाह दिनांक: शनिवार, 12 दिसंबर 2026
            </div>
          </div>

        </div>

        {/* Auspicious Wedding Venue Section */}
        <div className="hero-venue-announcement-banner">
          <div className="venue-title-label">विवाह स्थल:</div>
          <div className="banner-venue-location">
            <span className="pin-icon">📍</span>
            <span className="venue-name-bold">कुमावत वाटिका</span>
          </div>
          <div className="banner-venue-address">
            पुनायता रोड, पाली, राजस्थान
          </div>
          <div className="banner-date-highlight">
            <span className="cal-icon">🗓️</span>
            <span className="date-str">भव्य विवाह समारोह: शनिवार, 12 दिसंबर 2026</span>
          </div>
        </div>

        {/* Background Music Prompt Banner */}
        <div className="hero-music-prompt-banner">
          <div className="hero-music-prompt-text">
            <span>🎺</span>
            <span>मधुर शहनाई की धुन सुनने के लिए यहाँ क्लिक करें</span>
          </div>
          <button
            type="button"
            className="btn-start-music-prompt"
            onClick={handleStartMusic}
            title="विवाह संगीत चालू करें (30 सेकंड से)"
            aria-label="संगीत शुरू करें"
          >
            <span>{isMusicPlaying ? '🎵 संगीत बज रहा है' : '▶ संगीत शुरू करें'}</span>
          </button>
        </div>

        {/* User-Requested Beautifully Animated CLICK HERE Invitation Button */}
        <div className="hero-animated-button-stage">
          {/* Golden Sparkling Stars Particle Glow Container */}
          <div className="sparkle-stars-cluster" aria-hidden="true">
            <span className="sparkle-star star-1">✦</span>
            <span className="sparkle-star star-2">✨</span>
            <span className="sparkle-star star-3">✦</span>
            <span className="sparkle-star star-4">✨</span>
            <span className="sparkle-star star-5">✦</span>
            <span className="sparkle-star star-6">✨</span>
          </div>

          <button
            onClick={handleButtonClick}
            className="btn-animated-invitation"
            aria-label="आमंत्रण देखने के लिए यहाँ क्लिक करें"
          >
            <span className="btn-sparkle-lead">✦</span>
            <span className="btn-main-label">आमंत्रण देखने के लिए यहाँ क्लिक करें</span>
            <span className="btn-sparkle-trail">✦</span>
            <span className="btn-shimmer-light-sweep" aria-hidden="true"></span>
          </button>
        </div>

        {/* Smooth Scroll Down Indicator */}
        <div
          className="hero-scroll-indicator"
          onClick={handleButtonClick}
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
