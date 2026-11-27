import React, { useState } from 'react';

export default function WeddingTimeline() {
  const [activeDay, setActiveDay] = useState('all');

  const eventsList = [
    {
      id: 'e1',
      num: '१',
      dayId: 'day1',
      dayLabel: 'सोमवार, 7 दिसंबर 2026',
      dateStr: '07 दिसंबर 2026',
      timeStr: 'दोपहर 3:15 बजे',
      title: 'घृतपान',
      icon: '🪔',
      desc: 'मांगलिक कार्यों के निर्विघ्न शुभारंभ हेतु पवित्र वैदिक रीति-रिवाजों से शुद्ध घृतपान संस्कार।',
      calDate: '20261207T151500/20261207T170000',
      badge: 'मांगलिक शुभारंभ',
      note: null
    },
    {
      id: 'e2',
      num: '२',
      dayId: 'day1',
      dayLabel: 'सोमवार, 7 दिसंबर 2026',
      dateStr: '07 दिसंबर 2026',
      timeStr: 'सायं 5:15 बजे',
      title: 'विनायक स्थापना',
      icon: '🕉️',
      desc: 'प्रथम पूज्य विघ्नहर्ता भगवान श्री गणेश जी की सविधि स्थापना एवं रिद्धि-सिद्धि सहित पधारने की मंगल प्रार्थना।',
      calDate: '20261207T171500/20261207T193000',
      badge: 'वैदिक गणेश पूजन',
      note: null
    },
    {
      id: 'e3',
      num: '३',
      dayId: 'day2',
      dayLabel: 'मंगलवार, 8 दिसंबर 2026',
      dateStr: '08 दिसंबर 2026',
      timeStr: 'दोपहर 1:15 बजे',
      title: 'हल्दी / मेहंदी रस्म',
      icon: '🌿',
      desc: 'मांगलिक गीतों की मधुर गूंज के संग वर-वधू को शुभ हल्दी लेपन एवं सखियों के हाथों में सजी मेहंदी।',
      calDate: '20261208T131500/20261208T170000',
      badge: 'सतरंगी शगुन',
      note: null
    },
    {
      id: 'e4',
      num: '४',
      dayId: 'day3',
      dayLabel: 'बुधवार, 9 दिसंबर 2026',
      dateStr: '09 दिसंबर 2026',
      timeStr: 'दोपहर 12:15 बजे',
      title: 'मायरा (भात)',
      icon: '🎁',
      desc: 'ननिहाल पक्ष द्वारा भावभीना मायरा, मंगल चुनरी एवं परिजनों को स्नेहिल आशीष व पारंपरिक भेंट।',
      calDate: '20261209T121500/20261209T150000',
      badge: 'ननिहाल परम्परा',
      note: null
    },
    {
      id: 'e5',
      num: '५',
      dayId: 'day3',
      dayLabel: 'बुधवार, 9 दिसंबर 2026',
      dateStr: '09 दिसंबर 2026',
      timeStr: 'सायं 5:15 बजे',
      title: 'बन्दोली (शोभा यात्रा)',
      icon: '🥁',
      desc: 'ढोल-नगाड़ों की मंगल थाप एवं उल्लास के साथ परिजनों व सगे-संबंधियों संग भव्य पारंपरिक बन्दोली।',
      calDate: '20261209T171500/20261209T193000',
      badge: 'राजस्थानी बन्दोली',
      note: null
    },
    {
      id: 'e6',
      num: '६',
      dayId: 'day3',
      dayLabel: 'बुधवार, 9 दिसंबर 2026',
      dateStr: '09 दिसंबर 2026',
      timeStr: 'रात्रि 8:00 बजे',
      title: 'महिला संगीत',
      icon: '🪕',
      desc: 'राजस्थानी लोकगीतों, घूमर नृत्य एवं परिवारजनों की मनमोहक सांस्कृतिक प्रस्तुतियों से सजी सुरमयी संध्या।',
      calDate: '20261209T200000/20261209T230000',
      badge: 'सांस्कृतिक संध्या',
      note: null
    },
    {
      id: 'e7',
      num: '७',
      dayId: 'day4',
      dayLabel: 'गुरुवार, 10 दिसंबर 2026',
      dateStr: '10 दिसंबर 2026',
      timeStr: 'दोपहर 12:15 बजे',
      title: 'बारात प्रस्थान (समदड़ी हेतु)',
      icon: '🚌',
      desc: 'वर आयुष्मान आकाश की बारात का समदड़ी में श्रीमान ब्याईजी धनराज जी चौहान के निवास स्थान पर प्रस्थान।',
      calDate: '20261210T121500/20261210T160000',
      badge: 'बारात प्रस्थान',
      note: 'नोट : बारात समदड़ी श्रीमान ब्याईजी धनराज जी चौहान के निवास स्थान पर प्रस्थान करेगी। बस दोपहर 12:15 बजे प्रस्थान करेगी।'
    },
    {
      id: 'e8',
      num: '८',
      dayId: 'day5',
      dayLabel: 'शनिवार, 12 दिसंबर 2026',
      dateStr: '12 दिसंबर 2026',
      timeStr: 'सायं 5:15 बजे',
      title: 'बारात स्वागत (बालोतरा से आगमन)',
      icon: '🎺',
      desc: 'बालोतरा से पधारी वर आयुष्मान धीरज जी की बारात का कुमावत वाटिका, पाली में मंगल वाद्य-यंत्रों के साथ भव्य स्वागत।',
      calDate: '20261212T171500/20261212T181500',
      badge: 'बारात स्वागत',
      note: 'नोट : बारात कुमावत वाटिका पुनायता रोड़ पाली में आगमन होगी।'
    },
    {
      id: 'e9',
      num: '९',
      dayId: 'day5',
      dayLabel: 'शनिवार, 12 दिसंबर 2026',
      dateStr: '12 दिसंबर 2026',
      timeStr: 'रात्रि 10:15 बजे',
      title: 'पाणिग्रहण संस्कार',
      icon: '👑',
      desc: 'पवित्र अग्नि को साक्षी मानकर वैदिक मंत्रोच्चार, सप्तपदी, कन्यादान एवं मंगल फेरे।',
      calDate: '20261212T221500/20261213T020000',
      badge: 'वैदिक फेरे',
      note: null
    }
  ];

  const filteredEvents = activeDay === 'all'
    ? eventsList
    : eventsList.filter(ev => ev.dayId === activeDay);

  const makeGoogleCalendarUrl = (ev) => {
    const text = encodeURIComponent(ev.title + ' — आकाश एवं रीना | शिवानी एवं धीरज विवाह');
    const dates = ev.calDate;
    const details = encodeURIComponent(ev.desc + (ev.note ? `\n${ev.note}` : '') + ' \nस्थान: कुमावत वाटिका, पुनायता रोड़, पाली (राजस्थान)।');
    const location = encodeURIComponent('Kumawat Vatika, Punayata Road, Pali, Rajasthan, India');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section className="wedding-section timeline-section 3d-timeline-section" id="events-section">
      <div className="section-royal-card heritage-timeline-card 3d-heritage-timeline">
        <div className="card-border-gold-outer 3d-bevel-gold" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header with Invocations from Card Image 2 */}
        <div className="section-header-flourish">
          <div className="card-invocations-trio" style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '8px' }}>
            <span className="shloka-text" style={{ fontSize: '13px' }}>॥ श्री बाण माता नमः ॥</span>
            <span className="shloka-text" style={{ fontSize: '13px' }}>॥ श्री गणेशाय नमः ॥</span>
            <span className="shloka-text" style={{ fontSize: '13px' }}>॥ श्री माजीसा नमः ॥</span>
          </div>

          <p className="timeline-intro-shloka" style={{ fontStyle: 'italic', color: 'var(--c-headings)', fontSize: '15px', maxWidth: '640px', margin: '0 auto 12px' }}>
            “विघ्न हरण मंगल करण गणनायक गणराज ।<br />
            रिद्धी सिद्धी सहित पधारजो पुरण करजो काज ॥”
          </p>

          <h2 className="section-title-gold 3d-gold-title">मांगलिक कार्यक्रम विवरण</h2>
          <p className="section-subtitle-script">
            समस्त वैदिक रस्में, मांगलिक मुहूर्त एवं पावन संस्कारों की समय-सारणी
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 🌸 ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Day Filter Pills */}
        <nav className="timeline-filter-pills-row 3d-filter-pills" aria-label="मांगलिक दिवस चयन">
          <button
            type="button"
            className={`timeline-filter-btn 3d-filter-btn ${activeDay === 'all' ? 'active' : ''}`}
            onClick={() => setActiveDay('all')}
          >
            सभी ९ कार्यक्रम
          </button>
          <button
            type="button"
            className={`timeline-filter-btn 3d-filter-btn ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            सोम, 7 दिस
          </button>
          <button
            type="button"
            className={`timeline-filter-btn 3d-filter-btn ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            मंगल, 8 दिस
          </button>
          <button
            type="button"
            className={`timeline-filter-btn 3d-filter-btn ${activeDay === 'day3' ? 'active' : ''}`}
            onClick={() => setActiveDay('day3')}
          >
            बुध, 9 दिस
          </button>
          <button
            type="button"
            className={`timeline-filter-btn 3d-filter-btn ${activeDay === 'day4' ? 'active' : ''}`}
            onClick={() => setActiveDay('day4')}
          >
            गुरु, 10 दिस
          </button>
          <button
            type="button"
            className={`timeline-filter-btn 3d-filter-btn ${activeDay === 'day5' ? 'active' : ''}`}
            onClick={() => setActiveDay('day5')}
          >
            शनि, 12 दिस (मुख्य)
          </button>
        </nav>

        {/* 3D Illuminated Curved Pathway Timeline */}
        <div className="vertical-alternating-timeline illuminated-pathway 3d-pathway">
          <div className="timeline-central-spine 3d-golden-spine" aria-hidden="true"></div>

          {filteredEvents.map((ev, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={ev.id}
                className={`timeline-alternating-row ${isEven ? 'row-left' : 'row-right'} 3d-timeline-row`}
              >
                {/* Center Diya/Kalash 3D Node Marker */}
                <div className="timeline-center-node 3d-node-marker">
                  <div className="node-icon-circle glowing-diya-node 3d-diya-globe" title={ev.title}>
                    <span className="node-emoji">{ev.icon}</span>
                  </div>
                  <span className="node-number-tag 3d-node-num">{ev.num}</span>
                </div>

                {/* Event Card Block with 3D Depth */}
                <div className="timeline-event-card-wrap">
                  <article className="timeline-event-card architectural-event-card 3d-event-card">
                    <div className="event-card-header">
                      <span className="event-badge-tag 3d-event-badge">{ev.badge}</span>
                      <span className="event-date-chip">{ev.dateStr}</span>
                    </div>

                    <div className="event-time-row">
                      <span className="time-clock-icon">⏰</span>
                      <strong className="time-text 3d-time-text">{ev.timeStr}</strong>
                      <span className="day-name">({ev.dayLabel.split(',')[0]?.trim()})</span>
                    </div>

                    <h3 className="event-card-title 3d-event-title">{ev.title}</h3>
                    <p className="event-card-desc">{ev.desc}</p>

                    {/* Official Bus / Travel Note from Card */}
                    {ev.note && (
                      <div className="event-bus-note-box 3d-note-box">
                        <span className="note-icon">ℹ️</span>
                        <span className="note-text">{ev.note}</span>
                      </div>
                    )}

                    <div className="event-card-footer">
                      <a
                        href={makeGoogleCalendarUrl(ev)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-add-calendar 3d-cal-btn"
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

        {/* Reception Highlight Strip Directly in Timeline */}
        <div className="timeline-reception-highlight-banner 3d-reception-highlight">
          <div className="highlight-icon 3d-crown-icon">👑</div>
          <div className="highlight-content">
            <h4 className="highlight-title">आशीर्वाद समारोह व प्रीतिभोज</h4>
            <p className="highlight-time">12 दिसंबर 2026, शनिवार — सायं 6:15 बजे से आगमन तक</p>
            <p className="highlight-venue">स्थल: कुमावत वाटिका, पुनायता रोड़, पाली (राजस्थान)</p>
          </div>
        </div>

      </div>
    </section>
  );
}
