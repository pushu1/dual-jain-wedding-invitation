import React, { useState } from 'react';

export default function WeddingTimeline() {
  const [activeDay, setActiveDay] = useState('all');

  const eventsList = [
    {
      id: 'e1',
      dayId: 'day1',
      dayLabel: 'Day 1 — Monday',
      dateStr: '07 DECEMBER 2026',
      timeStr: '3:15 PM',
      title: 'Ghritpaan Ceremony',
      icon: '🪔',
      desc: 'Traditional sacred offering of purified ghee, invoking supreme divine benevolence and purity for the upcoming ceremonies.',
      calDate: '20261207T151500/20261207T170000',
      badge: 'SACRED COMMENCEMENT'
    },
    {
      id: 'e2',
      dayId: 'day1',
      dayLabel: 'Day 1 — Monday',
      dateStr: '07 DECEMBER 2026',
      timeStr: '5:15 PM',
      title: 'Vinayak Sthapana Puja',
      icon: '🕉️',
      desc: 'Holy installation and Vedic worship of Lord Vinayaka, sanctifying the wedding festivities for peaceful and obstacle-free completion.',
      calDate: '20261207T171500/20261207T193000',
      badge: 'VEDIC RITUAL'
    },
    {
      id: 'e3',
      dayId: 'day2',
      dayLabel: 'Day 2 — Tuesday',
      dateStr: '08 DECEMBER 2026',
      timeStr: '1:15 PM',
      title: 'Haldi & Mehendi Ceremony',
      icon: '🌿',
      desc: 'A joyous celebration adorned with radiant turmeric pastes and intricate bridal henna designs applied by loved ones with traditional songs.',
      calDate: '20261208T131500/20261208T170000',
      badge: 'COLOR & FRAGRANCE'
    },
    {
      id: 'e4',
      dayId: 'day3',
      dayLabel: 'Day 3 — Wednesday',
      dateStr: '09 DECEMBER 2026',
      timeStr: '12:15 PM',
      title: 'Mayra Ceremony',
      icon: '🎁',
      desc: 'Cherished maternal uncle (Nanihal) tradition presenting wedding gifts, fine fabrics, and auspicious blessings to the family.',
      calDate: '20261209T121500/20261209T150000',
      badge: 'MATERNAL TRADITION'
    },
    {
      id: 'e5',
      dayId: 'day3',
      dayLabel: 'Day 3 — Wednesday',
      dateStr: '09 DECEMBER 2026',
      timeStr: '8:15 PM',
      title: 'Bandoli Ceremony',
      icon: '🥁',
      desc: 'Joyful musical celebration and traditional village procession celebrating the sacred wedding couples with festive dhol and dhum-dham.',
      calDate: '20261209T201500/20261209T223000',
      badge: 'ROYAL PROCESSION'
    },
    {
      id: 'e6',
      dayId: 'day4',
      dayLabel: 'Day 4 — Thursday',
      dateStr: '10 DECEMBER 2026',
      timeStr: '12:15 PM',
      title: 'Baraat Prasthan (Departure of Baraat to Samdari)',
      icon: '🚌',
      desc: 'Festive departure of Groom Ayushman Akash\'s wedding procession to Samdari to the residence of Shriman Byaiji Dhanraj Ji Chauhan\'s family.',
      calDate: '20261210T121500/20261210T150000',
      badge: 'BARAAT DEPARTURE'
    },
    {
      id: 'e7',
      dayId: 'day4',
      dayLabel: 'Day 4 — Thursday',
      dateStr: '10 DECEMBER 2026',
      timeStr: '7:15 PM',
      title: 'Ladies Sangeet & Cultural Evening',
      icon: '🪕',
      desc: 'An enchanting evening of vibrant Rajasthani folk dances, melodious geet, and celebratory performances by dear family & friends.',
      calDate: '20261210T191500/20261210T230000',
      badge: 'MUSIC & DANCE'
    },
    {
      id: 'e8',
      dayId: 'day5',
      dayLabel: 'Day 5 — Saturday (Grand Wedding)',
      dateStr: '12 DECEMBER 2026',
      timeStr: '5:15 PM',
      title: 'Baraat Swagat (Welcome of Baraat from Balotra)',
      icon: '🎺',
      desc: 'Ceremonial welcome of Groom Ayushman Dheeraj Ji\'s Baraat arriving from Balotra from the residence of Shriman Byaiji Madanlalji Parihar\'s family to Kumawat Vatika, Pali.',
      calDate: '20261212T171500/20261212T181500',
      badge: 'BARAAT WELCOME'
    },
    {
      id: 'e9',
      dayId: 'day5',
      dayLabel: 'Day 5 — Saturday (Grand Wedding)',
      dateStr: '12 DECEMBER 2026',
      timeStr: '6:15 PM',
      title: 'Grand Wedding Ceremony (Hastamelap & Reception)',
      icon: '👑',
      desc: 'The divine Vedic marriage rituals, sacred pheras, and auspicious blessings under the royal mandap, followed by the grand wedding dinner.',
      calDate: '20261212T181500/20261212T233000',
      badge: 'ROYAL WEDDING'
    }
  ];

  const filteredEvents = activeDay === 'all'
    ? eventsList
    : eventsList.filter(ev => ev.dayId === activeDay);

  const makeGoogleCalendarUrl = (ev) => {
    const text = encodeURIComponent(ev.title + ' — Akash & Reena | Shivani & Dheeraj Wedding');
    const dates = ev.calDate;
    const details = encodeURIComponent(ev.desc + ' Venue: Kumawat Vatika, Punayata Road, Pali, Rajasthan.');
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
            <span className="shloka-text">|| MANGALIK KARYAKRAM ||</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <h2 className="section-title-gold">THE WEDDING CELEBRATIONS</h2>
          <p className="section-subtitle-script">
            Every Ritual, Every Blessing, Every Beautiful Moment.
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 🌸 ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Day Filter Pills */}
        <nav className="timeline-filter-pills-row" aria-label="Event days filter">
          <button
            className={`timeline-filter-btn ${activeDay === 'all' ? 'active' : ''}`}
            onClick={() => setActiveDay('all')}
          >
            All Celebrations (9)
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            Mon, 7 Dec
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            Tue, 8 Dec
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day3' ? 'active' : ''}`}
            onClick={() => setActiveDay('day3')}
          >
            Wed, 9 Dec
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day4' ? 'active' : ''}`}
            onClick={() => setActiveDay('day4')}
          >
            Thu, 10 Dec
          </button>
          <button
            className={`timeline-filter-btn ${activeDay === 'day5' ? 'active' : ''}`}
            onClick={() => setActiveDay('day5')}
          >
            Sat, 12 Dec (Main)
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
                        title={`Add ${ev.title} to Google Calendar`}
                      >
                        <span className="cal-icon">📅</span>
                        <span>Add to Calendar</span>
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
