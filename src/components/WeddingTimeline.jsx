import React, { useState } from 'react';

export default function WeddingTimeline() {
  const [activeDay, setActiveDay] = useState('all');

  const eventsList = [
    {
      id: 'e1',
      dayId: 'day1',
      dayLabel: 'दिवस 1 — सोमवार',
      dateStr: '07 दिसंबर 2026',
      timeStr: 'दोपहर 3:15 बजे',
      title: 'घृतपान संस्कार',
      icon: '🪔',
      desc: 'मांगलिक कार्यक्रमों के शुभारंभ पर शुद्ध घी की पावन आहुति एवं प्रभु कृपा व पवित्रता की प्रार्थना।',
      calDate: '20261207T151500/20261207T170000',
      badge: 'मांगलिक शुभारंभ'
    },
    {
      id: 'e2',
      dayId: 'day1',
      dayLabel: 'दिवस 1 — सोमवार',
      dateStr: '07 दिसंबर 2026',
      timeStr: 'सायं 5:15 बजे',
      title: 'विनायक स्थापना पूजा',
      icon: '🕉️',
      desc: 'विघ्नहर्ता भगवान श्री गणेश जी की वैदिक विधि-विधान से स्थापना एवं निर्विघ्न कार्य सिद्धि की प्रार्थना।',
      calDate: '20261207T171500/20261207T193000',
      badge: 'वैदिक पूजन'
    },
    {
      id: 'e3',
      dayId: 'day2',
      dayLabel: 'दिवस 2 — मंगलवार',
      dateStr: '08 दिसंबर 2026',
      timeStr: 'दोपहर 1:15 बजे',
      title: 'हल्दी एवं मेहंदी रस्म',
      icon: '🌿',
      desc: 'पारंपरिक मांगलिक गीतों के साथ वर-वधू को हल्दी लेपन एवं सखियों द्वारा हाथों में सजी सुंदर मेहंदी।',
      calDate: '20261208T131500/20261208T170000',
      badge: 'रंग एवं सुगंध'
    },
    {
      id: 'e4',
      dayId: 'day3',
      dayLabel: 'दिवस 3 — बुधवार',
      dateStr: '09 दिसंबर 2026',
      timeStr: 'दोपहर 12:15 बजे',
      title: 'मायरा (भात) संस्कार',
      icon: '🎁',
      desc: 'ननिहाल पक्ष द्वारा स्नेहिल मायरा, मंगल चुनरी एवं परिजनों को प्रेम व आशीर्वाद की भेंट।',
      calDate: '20261209T121500/20261209T150000',
      badge: 'ननिहाल परम्परा'
    },
    {
      id: 'e5',
      dayId: 'day3',
      dayLabel: 'दिवस 3 — बुधवार',
      dateStr: '09 दिसंबर 2026',
      timeStr: 'रात्रि 8:15 बजे',
      title: 'बन्नोली (शोभा यात्रा)',
      icon: '🥁',
      desc: 'ढोल-नगाड़ों की थाप पर परिजनों एवं मित्रों के संग पारंपरिक शोभायात्रा व उल्लासमय नृत्य।',
      calDate: '20261209T201500/20261209T223000',
      badge: 'पारंपरिक शोभायात्रा'
    },
    {
      id: 'e6',
      dayId: 'day4',
      dayLabel: 'दिवस 4 — गुरुवार',
      dateStr: '10 दिसंबर 2026',
      timeStr: 'दोपहर 12:15 बजे',
      title: 'बारात प्रस्थान (समदड़ी हेतु)',
      icon: '🚌',
      desc: 'वर आयुष्मान आकाश की बारात का बस द्वारा समदड़ी में श्रीमान ब्याईजी धनराज जी चौहान के परिवार के निवास हेतु प्रस्थान।',
      calDate: '20261210T121500/20261210T150000',
      badge: 'बारात प्रस्थान'
    },
    {
      id: 'e7',
      dayId: 'day4',
      dayLabel: 'दिवस 4 — गुरुवार',
      dateStr: '10 दिसंबर 2026',
      timeStr: 'सायं 7:15 बजे',
      title: 'महिला संगीत एवं सांस्कृतिक संध्या',
      icon: '🪕',
      desc: 'राजस्थानी लोकगीतों, पारंपरिक घूमर एवं परिवारजनों की मनमोहक प्रस्तुतियों से सजी रंगारंग संध्या।',
      calDate: '20261210T191500/20261210T230000',
      badge: 'संगीत एवं नृत्य'
    },
    {
      id: 'e8',
      dayId: 'day5',
      dayLabel: 'दिवस 5 — शनिवार (मुख्य विवाह)',
      dateStr: '12 दिसंबर 2026',
      timeStr: 'सायं 5:15 बजे',
      title: 'बारात स्वागत (बालोतरा से आगमन)',
      icon: '🎺',
      desc: 'बालोतरा से पधारी वर आयुष्मान धीरज जी की बारात का कुमावत वाटिका, पाली में भव्य आत्मीय स्वागत।',
      calDate: '20261212T171500/20261212T181500',
      badge: 'बारात स्वागत'
    },
    {
      id: 'e9',
      dayId: 'day5',
      dayLabel: 'दिवस 5 — शनिवार (मुख्य विवाह)',
      dateStr: '12 दिसंबर 2026',
      timeStr: 'सायं 6:15 बजे से',
      title: 'पाणिग्रहण संस्कार एवं प्रीतिभोज',
      icon: '👑',
      desc: 'पवित्र वैदिक विवाह संस्कार, सप्तपदी फेरे, हस्तमिलाप एवं शाही राजस्थानी प्रीतिभोज।',
      calDate: '20261212T181500/20261212T233000',
      badge: 'मुख्य विवाह समारोह'
    }
  ];

  const filteredEvents = activeDay === 'all'
    ? eventsList
    : eventsList.filter(ev => ev.dayId === activeDay);

  const makeGoogleCalendarUrl = (ev) => {
    const text = encodeURIComponent(ev.title + ' — आकाश एवं रीना | शिवानी एवं धीरज विवाह');
    const dates = ev.calDate;
    const details = encodeURIComponent(ev.desc + ' स्थान: कुमावत वाटिका, पुनायता रोड, पाली (राजस्थान)।');
    const location = encodeURIComponent('Kumawat Vatika, Punayata Road, Pali, Rajasthan, India');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section className="wedding-section timeline-section" id="events-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">॥ मांगलिक कार्यक्रम ॥</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <h2 className="section-title-gold">मांगलिक कार्यक्रम विवरण</h2>
          <p className="section-subtitle-script">
            हर रस्म, हर मंगल आशीष, हर पावन पल
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 🌸 ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Day Filter Pills */}
        <nav className="timeline-filter-pills-row" aria-label="मांगलिक दिवस चयन">
          <button
            className={`timeline-filter-btn ${activeDay === 'all' ? 'active' : ''}`}
            onClick={() => setActiveDay('all')}
          >
            सभी मांगलिक कार्यक्रम (9)
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            सोम, 7 दिस
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            मंगल, 8 दिस
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day3' ? 'active' : ''}`}
            onClick={() => setActiveDay('day3')}
          >
            बुध, 9 दिस
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day4' ? 'active' : ''}`}
            onClick={() => setActiveDay('day4')}
          >
            गुरु, 10 दिस
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day5' ? 'active' : ''}`}
            onClick={() => setActiveDay('day5')}
          >
            शनि, 12 दिस (मुख्य)
          </button>
        </nav>

        {/* Vertical Alternating Timeline Container */}
        <div className="vertical-alternating-timeline">
          <div className="timeline-central-spine" aria-hidden="true"></div>

          {filteredEvents.map((ev, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={ev.id}
                className={`timeline-alternating-row ${isEven ? 'row-left' : 'row-right'}`}
              >
                {/* Center Node Marker */}
                <div className="timeline-center-node">
                  <div className="node-icon-circle" title={ev.title}>
                    <span className="node-emoji">{ev.icon}</span>
                  </div>
                </div>

                {/* Event Card Block */}
                <div className="timeline-event-card-wrap">
                  <article className="timeline-event-card">
                    <div className="event-card-header">
                      <span className="event-badge-tag">{ev.badge}</span>
                      <span className="event-date-chip">{ev.dateStr}</span>
                    </div>

                    <div className="event-time-row">
                      <span className="time-clock-icon">⏰</span>
                      <strong className="time-text">{ev.timeStr}</strong>
                      <span className="day-name">({ev.dayLabel.split('—')[1]?.trim() || ev.dayLabel})</span>
                    </div>

                    <h3 className="event-card-title">{ev.title}</h3>
                    <p className="event-card-desc">{ev.desc}</p>

                    <div className="event-card-footer">
                      <a
                        href={makeGoogleCalendarUrl(ev)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-add-calendar"
                        title={`${ev.title} को गूगल कैलेंडर में जोड़ें`}
                      >
                        <span className="cal-icon">📅</span>
                        <span>कैलेंडर में जोड़ें</span>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
