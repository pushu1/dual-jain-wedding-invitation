import React, { useState } from 'react';

export default function WeddingTimeline() {
  const [activeDay, setActiveDay] = useState('all'); // 'all' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5'

  const scheduleData = [
    {
      dayId: 'day1',
      dayLabel: 'Day 1 — Monday',
      dateStr: '07 DECEMBER 2026',
      badge: 'AUSPICIOUS COMMENCEMENT',
      calDate: '20261207T151500/20261207T190000',
      events: [
        {
          num: '01',
          title: 'Ghritpaan Ceremony',
          time: '3:15 PM',
          icon: '🪔',
          desc: 'Traditional sacred offering of purified ghee, invoking supreme divine benevolence and purity for the upcoming ceremonies.'
        },
        {
          num: '02',
          title: 'Vinayak Sthapana Puja',
          time: '5:15 PM',
          icon: '🕉️',
          desc: 'Holy installation and Vedic worship of Lord Vinayaka, sanctifying the wedding festivities for peaceful and obstacle-free completion.'
        }
      ]
    },
    {
      dayId: 'day2',
      dayLabel: 'Day 2 — Tuesday',
      dateStr: '08 DECEMBER 2026',
      badge: 'COLOR & FRAGRANCE',
      calDate: '20261208T131500/20261208T170000',
      events: [
        {
          num: '03',
          title: 'Haldi & Mehndi Ceremony',
          time: '1:15 PM',
          icon: '🌿',
          desc: 'A joyous celebration adorned with radiant turmeric pastes and intricate bridal henna designs applied by loved ones.'
        }
      ]
    },
    {
      dayId: 'day3',
      dayLabel: 'Day 3 — Wednesday',
      dateStr: '09 DECEMBER 2026',
      badge: 'TRADITION & MUSIC',
      calDate: '20261209T121500/20261209T230000',
      events: [
        {
          num: '04',
          title: 'Mayra / Mameru Ceremony',
          time: '12:15 PM',
          icon: '🎁',
          desc: 'Heartwarming welcoming of maternal uncles (Nanihal Paksh) presenting royal gifts and loving blessings to the families.'
        },
        {
          num: '05',
          title: 'Bandoli (Royal Procession)',
          time: '5:15 PM',
          icon: '🐴',
          desc: 'Grand festive procession through celebratory beats of dhol and traditional Rajasthani music.'
        },
        {
          num: '06',
          title: 'Mahila Sangeet (Musical Evening)',
          time: '8:00 PM',
          icon: '💃',
          desc: 'An exuberant evening filled with cultural folk dance, melodic wedding songs, and memorable performances by family members.'
        }
      ]
    },
    {
      dayId: 'day4',
      dayLabel: 'Day 4 — Thursday',
      dateStr: '10 DECEMBER 2026',
      badge: 'FIRST WEDDING (AKASH & REENA)',
      calDate: '20261210T121500/20261210T220000',
      events: [
        {
          num: '07',
          title: 'Varat Prasthan (Departure of Baraat to Samdari)',
          time: '12:15 PM',
          icon: '🚌',
          desc: 'Festive departure of Groom Ayushman Akash’s wedding procession to Samdari by bus to the residence of Shriman Byaiji Dhanraj Ji Chauhan’s family.'
        }
      ]
    },
    {
      dayId: 'day5',
      dayLabel: 'Day 5 — Saturday (Grand Wedding)',
      dateStr: '12 DECEMBER 2026',
      badge: 'GRAND WEDDING & ROYAL RECEPTION',
      calDate: '20261212T171500/20261213T020000',
      events: [
        {
          num: '08',
          title: 'Varat Swagat (Welcome of Baraat from Balotra)',
          time: '5:15 PM',
          icon: '🎺',
          desc: 'Ceremonial welcome of Groom Ayushman Dheeraj Ji’s Baraat arriving from Balotra by bus to Kumawat Vatika, Pali.'
        },
        {
          num: '09',
          title: 'Ashirwad Samaroh & Pritibhoj (Blessing & Feast)',
          time: '6:15 PM onwards until guest arrival',
          icon: '🍽️',
          desc: 'Grand royal wedding reception and traditional multi-cuisine feast honoring all esteemed relatives, elders, and cherished guests at Kumawat Vatika.'
        },
        {
          num: '10',
          title: 'Panigrahan Sanskar (Sacred Wedding Ceremony)',
          time: '10:15 PM (Auspicious Muhurat)',
          icon: '🔥',
          desc: 'Sacred Vedic wedding rites, Kanyadaan, and the holy seven circumambulations (Saptapadi) around the sacred fire uniting the couple for eternity.'
        }
      ]
    }
  ];

  const handleAddToCalendar = (dayObj) => {
    const title = `Wedding Celebrations - Gehlot Parivar (${dayObj.dayLabel})`;
    const details = dayObj.events.map(e => `${e.title} (${e.time})`).join(', ');
    const location = 'Kumawat Vatika, Punayata Road, Pali, Rajasthan, India';
    const dates = dayObj.calDate;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(url, '_blank');
  };

  const filteredDays = activeDay === 'all'
    ? scheduleData
    : scheduleData.filter(d => d.dayId === activeDay);

  return (
    <section className="wedding-section timeline-events-section" id="events-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer"></div>
        <div className="card-border-gold-inner"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <span className="shloka-text">|| MANGALIK KARYAKRAM ||</span>
          <h2 className="section-title-gold">WEDDING EVENTS &amp; ITINERARY</h2>
          <p className="section-subtitle-script">
            Complete schedule of sacred rituals, joy-filled ceremonies, and royal receptions
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Day Filter Pills */}
        <div className="timeline-day-filter" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            className={`filter-pill ${activeDay === 'all' ? 'active' : ''}`}
            onClick={() => setActiveDay('all')}
          >
            All Ceremonies
          </button>
          <button
            className={`filter-pill ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            Mon, 07 Dec
          </button>
          <button
            className={`filter-pill ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            Tue, 08 Dec
          </button>
          <button
            className={`filter-pill ${activeDay === 'day3' ? 'active' : ''}`}
            onClick={() => setActiveDay('day3')}
          >
            Wed, 09 Dec
          </button>
          <button
            className={`filter-pill ${activeDay === 'day4' ? 'active' : ''}`}
            onClick={() => setActiveDay('day4')}
          >
            Thu, 10 Dec
          </button>
          <button
            className={`filter-pill ${activeDay === 'day5' ? 'active' : ''}`}
            onClick={() => setActiveDay('day5')}
          >
            Sat, 12 Dec (Grand Wedding)
          </button>
        </div>

        {/* Timeline Itinerary Cards Grid */}
        <div className="itinerary-cards-container" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {filteredDays.map((day) => (
            <div className={`day-itinerary-card card-${day.dayId}`} key={day.dayId}>
              <div className="day-card-header">
                <div className="day-badge-chip">{day.badge}</div>
                <h3 className="day-main-heading">{day.dayLabel}</h3>
                <div className="day-calendar-date">{day.dateStr}</div>

                <button
                  className="btn-add-cal"
                  onClick={() => handleAddToCalendar(day)}
                  title="Add ceremonies to Google Calendar"
                >
                  <span className="cal-icon">📅</span>
                  <span>Add to Calendar</span>
                </button>
              </div>

              <div className="day-events-vertical-list">
                {day.events.map((evt, idx) => (
                  <div className="timeline-event-item" key={idx}>
                    <div className="event-marker-node">
                      <span className="marker-icon">{evt.icon}</span>
                      {idx < day.events.length - 1 && <span className="vertical-timeline-spine"></span>}
                    </div>

                    <div className="event-content-box">
                      <div className="event-top-row">
                        <span className="event-index-badge">{evt.num}</span>
                        <h4 className="event-title">{evt.title}</h4>
                      </div>
                      <div className="event-time-badge">
                        <span className="clock-icon">⏰</span>
                        <span className="time-text">{evt.time}</span>
                      </div>
                      <p className="event-desc-text">{evt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
