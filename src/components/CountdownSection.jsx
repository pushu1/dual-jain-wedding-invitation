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
    <section className="wedding-section countdown-timer-section" id="countdown-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer"></div>
        <div className="card-border-gold-inner"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <span className="shloka-text">|| MANGAL GHADI KI PRATIKSHA ||</span>
          <h2 className="section-title-gold">WEDDING COUNTDOWN</h2>
          <p className="section-subtitle-script">
            Counting every sacred moment until the auspicious wedding celebration
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {timeLeft.isCompleted ? (
          <div className="countdown-completed-banner">
            <div className="completed-sparkles">🎉 🎊 ✨</div>
            <h3 className="completed-title">The Auspicious Wedding Day Is Here!</h3>
            <p className="completed-subtitle">
              Celebrating the royal weddings of Akash &amp; Reena and Shivani &amp; Dheeraj with eternal blessings.
            </p>
          </div>
        ) : (
          <div className="countdown-grid-container">
            {/* Days */}
            <div className="countdown-unit-box">
              <div className="countdown-circle-badge">
                <span className="unit-number">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">DAYS</span>
            </div>

            <div className="countdown-colon">:</div>

            {/* Hours */}
            <div className="countdown-unit-box">
              <div className="countdown-circle-badge">
                <span className="unit-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">HOURS</span>
            </div>

            <div className="countdown-colon">:</div>

            {/* Minutes */}
            <div className="countdown-unit-box">
              <div className="countdown-circle-badge">
                <span className="unit-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">MINUTES</span>
            </div>

            <div className="countdown-colon">:</div>

            {/* Seconds */}
            <div className="countdown-unit-box">
              <div className="countdown-circle-badge seconds-pulse">
                <span className="unit-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="unit-label">SECONDS</span>
            </div>
          </div>
        )}

        {/* Auspicious Muhurat Tag */}
        <div className="countdown-muhurat-strip">
          <span className="muhurat-star">✦</span>
          <span className="muhurat-text">
            Auspicious Wedding Muhurat • Saturday, 12 December 2026 • Kumawat Vatika, Pali, Rajasthan
          </span>
          <span className="muhurat-star">✦</span>
        </div>
      </div>
    </section>
  );
}
