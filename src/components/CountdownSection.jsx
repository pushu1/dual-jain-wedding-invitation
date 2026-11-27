import React, { useState, useEffect } from 'react';

export default function CountdownSection() {
  // Target: Saturday, 12 December 2026, 18:15:00 IST (UTC+5:30)
  const targetDate = new Date('2026-12-12T18:15:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="wedding-section countdown-section" id="countdown-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">॥ शुभ मुहूर्त ॥</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <h2 className="section-title-gold">
            मंगल घड़ियों की उल्टी गिनती
          </h2>
          <p className="section-subtitle-script">
            उस पावन दिन की प्रतीक्षा जब दो जोड़े पवित्र परिणय सूत्र में बंधेंगे
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ ⏳ ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Auspicious Target Date & Venue Banner */}
        <div className="countdown-event-meta-banner">
          <div className="meta-badge-date">
            <span className="meta-icon">🗓️</span>
            <span className="meta-text">12 दिसंबर 2026</span>
          </div>
          <div className="meta-separator">✦</div>
          <div className="meta-badge-venue">
            <span className="meta-icon">📍</span>
            <span className="meta-text">कुमावत वाटिका, पाली</span>
          </div>
        </div>

        {/* Live Countdown Clock Grid */}
        <div className="countdown-clock-container" aria-live="polite">
          {!timeLeft.isCompleted ? (
            <div className="countdown-units-grid">
              
              {/* Days */}
              <div className="countdown-unit-box">
                <div className="countdown-circle-badge">
                  <span className="unit-number">{String(timeLeft.days).padStart(2, '0')}</span>
                </div>
                <span className="unit-label">दिन</span>
              </div>

              <div className="countdown-colon-divider" aria-hidden="true">:</div>

              {/* Hours */}
              <div className="countdown-unit-box">
                <div className="countdown-circle-badge">
                  <span className="unit-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <span className="unit-label">घंटे</span>
              </div>

              <div className="countdown-colon-divider" aria-hidden="true">:</div>

              {/* Minutes */}
              <div className="countdown-unit-box">
                <div className="countdown-circle-badge">
                  <span className="unit-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <span className="unit-label">मिनट</span>
              </div>

              <div className="countdown-colon-divider" aria-hidden="true">:</div>

              {/* Seconds */}
              <div className="countdown-unit-box">
                <div className="countdown-circle-badge seconds-pulse">
                  <span className="unit-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                <span className="unit-label">सेकंड</span>
              </div>

            </div>
          ) : (
            <div className="countdown-completed-banner">
              <span className="completed-sparkles">🎊 👑 🎊</span>
              <h3 className="completed-title">शुभ विवाह महोत्सव प्रारंभ हो चुका है!</h3>
              <p className="completed-subtitle">
                भगवान शिव एवं माता पार्वती नवदंपतियों आकाश व रीना तथा शिवानी व धीरज को अखंड सौभाग्य एवं आनंद प्रदान करें!
              </p>
            </div>
          )}
        </div>

        {/* Auspicious Muhurat Strip */}
        <div className="countdown-muhurat-strip">
          <span className="muhurat-icon">🕉️</span>
          <span className="muhurat-text">
            पावन मार्गशीर्ष शुक्ल पक्ष • वैदिक विवाह संस्कार
          </span>
          <span className="muhurat-icon">🕉️</span>
        </div>

      </div>
    </section>
  );
}
