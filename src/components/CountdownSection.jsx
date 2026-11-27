import React, { useState, useEffect } from 'react';

export default function CountdownSection() {
  const [selectedMilestone, setSelectedMilestone] = useState('dec12'); // 'dec12' or 'dec10'

  // Milestone 1: 10 Dec 2026, 12:15 IST (Akash & Reena - Baraat Prasthan)
  // Milestone 2: 12 Dec 2026, 18:15 IST (Shivani & Dheeraj - Grand Wedding & Reception)
  const targetDate10 = new Date('2026-12-10T12:15:00+05:30').getTime();
  const targetDate12 = new Date('2026-12-12T18:15:00+05:30').getTime();

  const activeTarget = selectedMilestone === 'dec10' ? targetDate10 : targetDate12;

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
      const difference = activeTarget - now;

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
  }, [activeTarget]);

  const makeCalendarUrl = () => {
    if (selectedMilestone === 'dec10') {
      const text = encodeURIComponent('आकाश संग रीना शुभ विवाह — समदड़ी');
      const dates = '20261210T121500/20261210T220000';
      const details = encodeURIComponent('आयुष्मान आकाश संग आयुष्मती रीना पावन परिणय संस्कार। बारात प्रस्थान दोपहर 12:15 बजे।');
      const loc = encodeURIComponent('Samdari, Rajasthan');
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${loc}`;
    } else {
      const text = encodeURIComponent('शिवानी संग धीरज शुभ विवाह एवं भव्य प्रीतिभोज — पाली');
      const dates = '20261212T181500/20261212T235900';
      const details = encodeURIComponent('आयुष्मती शिवानी संग आयुष्मान धीरज जी पावन परिणय संस्कार एवं भव्य प्रीतिभोज। स्थल: कुमावत वाटिका, पुनायता रोड़, पाली।');
      const loc = encodeURIComponent('Kumawat Vatika, Punayata Road, Pali, Rajasthan 306401');
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${loc}`;
    }
  };

  return (
    <section className="wedding-section countdown-section 3d-countdown-section" id="countdown-section">
      <div className="section-royal-card palace-sundial-pavilion 3d-sundial-card">
        <div className="card-border-gold-outer 3d-bevel-gold" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">॥ शुभ मुहूर्त उल्टी गिनती ॥</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <h2 className="section-title-gold 3d-gold-title">मंगल घड़ियों की पावन प्रतीक्षा</h2>
          <p className="section-subtitle-script">
            उस शुभ वेला की ओर अग्रसर जब दो पवित्र युगलों का पावन परिणय सम्पन्न होगा
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ ⏳ ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Milestone Selector Tabs */}
        <div className="countdown-milestone-tabs 3d-milestone-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={selectedMilestone === 'dec12'}
            className={`milestone-tab-btn 3d-tab-btn ${selectedMilestone === 'dec12' ? 'active' : ''}`}
            onClick={() => setSelectedMilestone('dec12')}
          >
            <span className="tab-date">१२ दिसंबर २०२६</span>
            <span className="tab-couple">शिवानी संग धीरज (मुख्य विवाह व प्रीतिभोज)</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={selectedMilestone === 'dec10'}
            className={`milestone-tab-btn 3d-tab-btn ${selectedMilestone === 'dec10' ? 'active' : ''}`}
            onClick={() => setSelectedMilestone('dec10')}
          >
            <span className="tab-date">१० दिसंबर २०२६</span>
            <span className="tab-couple">आकाश संग रीना (प्रथम विवाह)</span>
          </button>
        </div>

        {/* Active Target Banner */}
        <div className="countdown-event-meta-banner 3d-meta-banner">
          <div className="meta-badge-date">
            <span className="meta-icon">🗓️</span>
            <span className="meta-text">
              {selectedMilestone === 'dec12'
                ? 'शनिवार, 12 दिसम्बर 2026 (सायं 6:15 बजे से)'
                : 'गुरूवार, 10 दिसम्बर 2026 (दोपहर 12:15 बजे)'}
            </span>
          </div>
          <div className="meta-separator">✦</div>
          <div className="meta-badge-venue">
            <span className="meta-icon">📍</span>
            <span className="meta-text">
              {selectedMilestone === 'dec12' ? 'कुमावत वाटिका, पुनायता रोड़, पाली' : 'समदड़ी (श्रीमान ब्याईजी धनराज जी चौहान निवास)'}
            </span>
          </div>
        </div>

        {/* Live Countdown Clock Grid with 3D Dimensional Metallic Gold Numbers */}
        <div className="countdown-clock-container" aria-live="polite">
          {!timeLeft.isCompleted ? (
            <div className="countdown-units-grid sundial-units-grid 3d-units-grid">
              
              {/* Days */}
              <div className="countdown-unit-box 3d-unit-box">
                <div className="countdown-circle-badge 3d-gold-circle">
                  <span className="unit-number 3d-metallic-number">{String(timeLeft.days).padStart(2, '0')}</span>
                </div>
                <span className="unit-label 3d-unit-label">दिन</span>
              </div>

              <div className="countdown-colon-divider 3d-colon-divider" aria-hidden="true">:</div>

              {/* Hours */}
              <div className="countdown-unit-box 3d-unit-box">
                <div className="countdown-circle-badge 3d-gold-circle">
                  <span className="unit-number 3d-metallic-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <span className="unit-label 3d-unit-label">घंटे</span>
              </div>

              <div className="countdown-colon-divider 3d-colon-divider" aria-hidden="true">:</div>

              {/* Minutes */}
              <div className="countdown-unit-box 3d-unit-box">
                <div className="countdown-circle-badge 3d-gold-circle">
                  <span className="unit-number 3d-metallic-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <span className="unit-label 3d-unit-label">मिनट</span>
              </div>

              <div className="countdown-colon-divider 3d-colon-divider" aria-hidden="true">:</div>

              {/* Seconds */}
              <div className="countdown-unit-box 3d-unit-box">
                <div className="countdown-circle-badge 3d-gold-circle seconds-pulse">
                  <span className="unit-number 3d-metallic-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                <span className="unit-label 3d-unit-label">सेकंड</span>
              </div>

            </div>
          ) : (
            <div className="countdown-completed-banner 3d-completed-banner">
              <span className="completed-sparkles">🎊 👑 🎊</span>
              <h3 className="completed-title">शुभ विवाह महोत्सव प्रारंभ हो चुका है!</h3>
              <p className="completed-subtitle">
                भगवान शिव एवं माता पार्वती नवदंपतियों आकाश व रीना तथा शिवानी व धीरज को अखंड सौभाग्य एवं अनंत आनंद प्रदान करें!
              </p>
            </div>
          )}
        </div>

        {/* Action Button: Add to Google Calendar */}
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <a
            href={makeCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-add-countdown-cal 3d-cal-button"
            title="इस मांगलिक उत्सव को अपने गूगल कैलेंडर में सेव करें"
          >
            <span className="btn-cal-icon">📅</span>
            <span>
              {selectedMilestone === 'dec12'
                ? '१२ दिसंबर मुख्य उत्सव को कैलेंडर में जोड़ें'
                : '१० दिसंबर विवाह को कैलेंडर में जोड़ें'}
            </span>
          </a>
        </div>

        {/* Auspicious Muhurat Strip */}
        <div className="countdown-muhurat-strip 3d-muhurat-strip">
          <span className="muhurat-icon">🕉️</span>
          <span className="muhurat-text">
            वि.सं. 2083 मार्गशीर्ष शुक्ल पक्ष • वैदिक पाणिग्रहण संस्कार
          </span>
          <span className="muhurat-icon">🕉️</span>
        </div>
      </div>
    </section>
  );
}
