import React, { useState, useEffect, useRef } from 'react';

export default function WeddingHero({ onEnterInvitation }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const jharokhaRef = useRef(null);
  const cardRef = useRef(null);

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

  // Interactive 3D tilt handlers for realistic depth
  const handleCardMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleCardMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
  };

  return (
    <section className="wedding-hero-section 3d-hero-experience" id="hero-section">
      {/* 3D Decorative Traditional Palace Arch Header with Toran */}
      <div className="hero-temple-arch-frame 3d-arch-layer" aria-hidden="true">
        <svg viewBox="0 0 500 130" className="temple-arch-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGoldGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A45C" />
              <stop offset="35%" stopColor="#FFF2D6" />
              <stop offset="70%" stopColor="#B88A3B" />
              <stop offset="100%" stopColor="#8C6A28" />
            </linearGradient>
            <filter id="archShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(118, 45, 50, 0.25)" />
            </filter>
          </defs>
          <path
            d="M 0,0 L 500,0 L 500,30 Q 380,30 320,68 Q 250,105 180,68 Q 120,30 0,30 Z"
            fill="rgba(139, 48, 56, 0.08)"
            filter="url(#archShadow)"
          />
          <path
            d="M 0,0 L 500,0 L 500,22 Q 380,22 320,55 Q 250,90 180,55 Q 120,22 0,22 Z"
            fill="none"
            stroke="url(#heroGoldGradient3D)"
            strokeWidth="2.5"
          />
          <circle cx="250" cy="100" r="5" fill="#C9A45C" />
        </svg>

        {/* Traditional Hanging Toran Garland */}
        <div className="hanging-toran-banner">
          <img
            src="assets/toran.png"
            alt="मंगल तोरण"
            className="toran-garland-img"
          />
        </div>
      </div>

      <div className="hero-content-wrapper 3d-layered-content">
        
        {/* Lord Shiva & Mata Parvati Sacred Artwork Crown in 3D Scalloped Jharokha */}
        <div className="hero-divine-crown-frame 3d-jharokha-container">
          <div
            className="divine-artwork-jharokha 3d-scalloped-pavilion"
            ref={jharokhaRef}
          >
            <img
              src="assets/shiva_parvati_top_artwork.png"
              alt="भगवान शिव एवं माता पार्वती"
              className="shiva-parvati-art-img"
              width="440"
              height="260"
            />
            <div className="jharokha-gold-border 3d-bevel-gold"></div>
            <div className="jharokha-depth-shadow"></div>
          </div>
        </div>

        {/* Sacred Lord Ganesha Invocation with Radiant 3D Ring */}
        <div className="hero-ganesha-radiant-wrapper">
          <div className="ganesha-radiant-halo">
            <img
              src="assets/champagne_ganesha_bright.png"
              alt="भगवान श्री गणेश"
              className="hero-ganesha-emblem-img"
            />
          </div>
          <div className="ganesha-blessing-shloka">
            ॥ श्री गणेशाय नमः ॥
          </div>
        </div>

        {/* Traditional Pantheon Invocations Audited from Original Reference Cards */}
        <div className="hero-pantheon-invocations">
          <span>॥ श्री बाण माता नमः ॥</span>
          <span className="dot-sep">•</span>
          <span>॥ श्री माजीसा नमः ॥</span>
          <span className="dot-sep">•</span>
          <span>॥ श्री भोमियाजी नमः ॥</span>
          <span className="dot-sep">•</span>
          <span>॥ श्री पितरदेवाय नमः ॥</span>
        </div>

        {/* Traditional Marwari Couplet from Original Card */}
        <div className="hero-traditional-marwari-verse">
          <span className="verse-flourish">“</span>
          <span>लिख्यों निमंत्रण प्रेमसू, आवारी फर्सी राखजो । मौको बडो अनमोल है, थोडी सी फुर्सत राखजो ॥</span>
          <span className="verse-flourish">”</span>
        </div>

        {/* Main Royal Heading with 3D Embossed Gold Text */}
        <div className="hero-main-title-block">
          <div className="hero-royal-flourish-line">
            <span className="flourish-leaf">🌿</span>
            <span className="flourish-dash"></span>
            <span className="flourish-star">✦</span>
            <span className="flourish-dash"></span>
            <span className="flourish-leaf">🌿</span>
          </div>
          <h1 className="hero-grand-title 3d-embossed-title">॥ विवाह आमंत्रण ॥</h1>
          <p className="hero-divine-subtitle">
            भगवान शिव, माता पार्वती, श्री विनायक जी महाराज एवं पूज्य पितरों के पावन आशीर्वाद से
          </p>
        </div>

        {/* Symmetrical Dual-Couples Composition with 3D Depth Card & Large Typography */}
        <div
          className="hero-couples-showcase-card 3d-tilt-showcase"
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        >
          {/* Couple 1: Akash & Reena */}
          <div className="hero-couple-unit 3d-couple-unit">
            <span className="couple-sacred-label">— प्रथम पावन परिणय —</span>
            <h2 className="couple-names-headline 3d-name-headline">
              आयुष्मान आकाश
            </h2>
            <div className="couple-parents-line">
              सुपुत्र : <strong>श्रीमती अनुराधा – श्री कैलाश गहलोत</strong>
            </div>
            <div className="couple-subh-vivah-badge 3d-shubh-badge">
              ✦ शुभ विवाह ✦
            </div>
            <h2 className="couple-names-headline 3d-name-headline">
              आयुष्मती रीना
            </h2>
            <div className="couple-parents-line">
              सुपुत्री : <strong>श्रीमती जशोदा देवी – श्री गोपालजी चौहान</strong>
            </div>
            <div className="couple-date-tag 3d-date-pill">
              <span className="pill-cal-icon">🗓️</span>
              <span>गुरुवार, 10 दिसंबर 2026</span>
            </div>
          </div>

          {/* Central Sacred Lotus & Royal 3D Kalash Divider */}
          <div className="hero-central-divider-unit 3d-divider-unit" aria-hidden="true">
            <div className="divider-gold-line"></div>
            <div className="divider-sacred-emblem 3d-rotating-kalash">
              <span className="emblem-symbol">👑</span>
              <span className="emblem-flourish">❖</span>
            </div>
            <div className="divider-gold-line"></div>
          </div>

          {/* Couple 2: Shivani & Dheeraj */}
          <div className="hero-couple-unit 3d-couple-unit">
            <span className="couple-sacred-label">— द्वितीय पावन परिणय —</span>
            <h2 className="couple-names-headline 3d-name-headline">
              आयुष्मती शिवानी (जीनू)
            </h2>
            <div className="couple-parents-line">
              सुपुत्री : <strong>श्रीमती अनुराधा – श्री कैलाश गहलोत</strong>
            </div>
            <div className="couple-subh-vivah-badge 3d-shubh-badge">
              ✦ शुभ विवाह ✦
            </div>
            <h2 className="couple-names-headline 3d-name-headline">
              आयुष्मान धीरज जी
            </h2>
            <div className="couple-parents-line">
              सुपुत्र : <strong>श्रीमती रेणु जी – श्री मुकेशजी परिहार</strong>
            </div>
            <div className="couple-date-tag 3d-date-pill">
              <span className="pill-cal-icon">🗓️</span>
              <span>शनिवार, 12 दिसंबर 2026</span>
            </div>
          </div>
        </div>

        {/* Auspicious Wedding Venue Section */}
        <div className="hero-venue-announcement-banner 3d-venue-banner">
          <div className="venue-title-label">विवाह स्थल एवं प्रीतिभोज :</div>
          <div className="banner-venue-location">
            <span className="pin-icon">📍</span>
            <span className="venue-name-bold">कुमावत वाटिका</span>
          </div>
          <div className="banner-venue-address">
            पुनायता रोड़, पाली (राजस्थान)
          </div>
          <div className="banner-date-highlight">
            <span className="cal-icon">🗓️</span>
            <span className="date-str">मुख्य विवाह समारोह : शनिवार, 12 दिसंबर 2026 (सायं 6:15 बजे से)</span>
          </div>
        </div>

        {/* Background Music Prompt Banner */}
        <div className="hero-music-prompt-banner">
          <div className="hero-music-prompt-text">
            <span>🎺</span>
            <span>मधुर शहनाई की धुन सुनने के लिए यहाँ स्पर्श करें</span>
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

        {/* User-Requested Beautifully Animated CLICK HERE Invitation Button with 3D Depth */}
        <div className="hero-animated-button-stage 3d-button-stage">
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
            className="btn-animated-invitation 3d-cta-button"
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
