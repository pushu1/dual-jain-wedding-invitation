import React, { useState, useEffect } from 'react';
import WeddingHero from './components/WeddingHero';
import CouplesSection from './components/CouplesSection';
import WeddingTimeline from './components/WeddingTimeline';
import VenueSection from './components/VenueSection';
import CountdownSection from './components/CountdownSection';
import FamilyBlessingsSection from './components/FamilyBlessingsSection';
import FinalBlessingsFooter from './components/FinalBlessingsFooter';
import InvitationViewerModal from './components/InvitationViewerModal';
import MusicPlayer from './components/MusicPlayer';
import CinematicFireworksIntro from './components/CinematicFireworksIntro';
import FloatingPetalsCanvas from './components/FloatingPetalsCanvas';

export default function App() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Requirement: Instant fireworks on website load when opened via PDF link (?celebrate=1)
  const [showFireworks, setShowFireworks] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        if (window.__START_CELEBRATE_IMMEDIATELY) return true;
        const search = window.location.search || '';
        const hash = window.location.hash || '';
        const params = new URLSearchParams(search);
        return params.get('celebrate') === '1' || params.has('celebrate') || hash.includes('celebrate');
      }
    } catch (e) {
      console.warn('URL param error:', e);
    }
    return false;
  });

  useEffect(() => {
    try {
      const search = window.location.search || '';
      const hash = window.location.hash || '';
      const params = new URLSearchParams(search);
      if (params.get('celebrate') === '1' || params.has('celebrate') || hash.includes('celebrate')) {
        setShowFireworks(true);
      }
    } catch (e) {}

    const handleLocationChange = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('celebrate') === '1' || params.has('celebrate') || window.location.hash.includes('celebrate')) {
          setShowFireworks(true);
        }
      } catch (e) {}
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Expose global trigger for replaying celebration fireworks
    window.triggerFireworksIntro = () => {
      setShowFireworks(true);
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnterInvitation = () => {
    // 1. Attempt wedding music playback if not already playing
    if (typeof window.playWeddingMusic === 'function') {
      window.playWeddingMusic();
    }
    // 2. Trigger celebration fireworks greeting
    setShowFireworks(true);
    // 3. Smoothly scroll down to complete wedding invitation
    setTimeout(() => {
      scrollTo('couples-section');
    }, 350);
  };

  const handleFireworksComplete = () => {
    setShowFireworks(false);
  };

  return (
    <div className="royal-wedding-app">
      {/* Cinematic Golden Sparkles & Floating Marigold/Rose Petals Canvas */}
      <FloatingPetalsCanvas />

      {/* Background Royal Wedding Music Player (YouTube Video ID: qJFPtcK8qBg from 00:30, independent of fireworks) */}
      <MusicPlayer />

      {/* CINEMATIC CELEBRATION FIREWORKS OVERLAY - Automatically triggered on ?celebrate=1 or button tap */}
      {showFireworks && (
        <CinematicFireworksIntro onComplete={handleFireworksComplete} />
      )}

      {/* Sticky Royal Navigation Bar */}
      <header className="sticky-royal-nav" role="banner">
        <div className="nav-container">
          <div className="nav-brand" onClick={() => scrollTo('hero-section')}>
            <span className="brand-crest">👑</span>
            <span className="brand-title">आकाश एवं रीना • शिवानी एवं धीरज</span>
          </div>

          <nav className="nav-links-row" aria-label="विवाह अनुभाग नेविगेशन">
            <button className="nav-link-btn" onClick={() => scrollTo('hero-section')}>
              स्वागत
            </button>
            <button className="nav-link-btn" onClick={() => scrollTo('couples-section')}>
              वर-वधू
            </button>
            <button className="nav-link-btn" onClick={() => scrollTo('events-section')}>
              मांगलिक कार्यक्रम
            </button>
            <button className="nav-link-btn" onClick={() => scrollTo('venue-section')}>
              विवाह स्थल
            </button>
            <button className="nav-link-btn" onClick={() => scrollTo('countdown-section')}>
              शुभ मुहूर्त
            </button>
            <button className="nav-link-btn" onClick={() => scrollTo('family-section')}>
              परिवार एवं आशीर्वाद
            </button>
          </nav>

          <div className="nav-actions-group">
            <button
              className="nav-btn-view-card"
              onClick={() => setIsViewerOpen(true)}
              title="डिजिटल विवाह आमंत्रण पत्रिका खोलें"
            >
              <span className="btn-icon">📜</span>
              <span className="btn-text">पत्रिका देखें</span>
            </button>

            <a
              href="dual-jain-wedding-invitation.pdf"
              download="dual-jain-wedding-invitation.pdf"
              className="nav-btn-download-pdf"
              title="आधिकारिक एक-पृष्ठीय पीडीएफ आमंत्रण डाउनलोड करें"
            >
              <span className="btn-icon">📥</span>
              <span className="btn-text">पीडीएफ</span>
            </a>
          </div>
        </div>
      </header>

      {/* Central Content Column - Visible Immediately Upon Website Open */}
      <main className="invitation-content-column">
        {/* SECTION 1: ROYAL SHIVA-PARVATI WEDDING COVER HERO */}
        <WeddingHero onEnterInvitation={handleEnterInvitation} />

        {/* SECTION 2: THE WEDDING COUPLES & FAMILY LINEAGE */}
        <CouplesSection />

        {/* SECTION 3: WEDDING CELEBRATIONS & TIMELINE */}
        <WeddingTimeline />

        {/* SECTION 4: WEDDING VENUE & MANDAP */}
        <VenueSection />

        {/* SECTION 5: LIVE WEDDING COUNTDOWN & SUNDIAL */}
        <CountdownSection />

        {/* SECTION 6: FAMILY BLESSINGS & COMPLIMENTS */}
        <FamilyBlessingsSection />

        {/* SECTION 7: FINAL BLESSINGS & ROYAL FOOTER */}
        <FinalBlessingsFooter
          onOpenCardViewer={() => setIsViewerOpen(true)}
        />
      </main>

      {/* FULL-SCREEN DIGITAL INVITATION VIEWER MODAL */}
      <InvitationViewerModal
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </div>
  );
}
