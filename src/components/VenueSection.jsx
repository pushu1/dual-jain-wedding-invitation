import React, { useState } from 'react';

export default function VenueSection() {
  const [copied, setCopied] = useState(false);

  const venueName = 'कुमावत वाटिका';
  const venueAddress = 'पुनायता रोड़, पाली (राजस्थान) 306401';
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Kumawat+Vatika+Punayata+Road+Pali+Rajasthan';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venueName}, ${venueAddress}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    }).catch(() => {});
  };

  return (
    <section className="wedding-section reception-venue-section" id="venue-section">
      <div className="section-royal-card mandap-architectural-card">
        <div className="card-border-gold-outer" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">॥ विवाह स्थल एवं प्रीतिभोज ॥</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <h2 className="section-title-gold">
            शुभ विवाह स्थल एवं आशीर्वाद समारोह
          </h2>
          <p className="section-subtitle-script">
            जहाँ चार परिवारों का पावन संगम, आत्मीय मिलन एवं वैदिक विवाह संस्कार संपन्न होंगे
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 🏛️ ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Grand Reception Showcase Card with Mandap Arch */}
        <article className="reception-grand-card royal-mandap-pavilion">
          
          {/* Traditional Wedding Mandap Decorative Arch */}
          <div className="reception-mandap-illustration" aria-hidden="true">
            <svg viewBox="0 0 540 130" className="mandap-arch-svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="goldArchGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A45C" />
                  <stop offset="50%" stopColor="#B88A3B" />
                  <stop offset="100%" stopColor="#8C6A28" />
                </linearGradient>
              </defs>
              {/* Outer Pavilion Arch */}
              <rect x="40" y="24" width="460" height="96" rx="12" fill="rgba(139, 48, 56, 0.04)" stroke="rgba(184, 138, 59, 0.25)" strokeWidth="1" />
              <path d="M 40,38 Q 270,-4 500,38" fill="none" stroke="url(#goldArchGrad2)" strokeWidth="3" />
              <path d="M 80,44 Q 270,12 460,44" fill="none" stroke="#C9A45C" strokeWidth="1.2" strokeDasharray="4 3" />
              {/* Left & Right Floral Pillars with Diya Pots */}
              <line x1="75" y1="38" x2="75" y2="120" stroke="#B88A3B" strokeWidth="3.5" />
              <line x1="465" y1="38" x2="465" y2="120" stroke="#B88A3B" strokeWidth="3.5" />
              {/* Central Mandap Kalash & Flame */}
              <circle cx="270" cy="14" r="8" fill="#B88A3B" />
              <path d="M 264,14 L 270,3 L 276,14 Z" fill="#8B3038" />
              <circle cx="270" cy="2" r="3" fill="#E65100" />
            </svg>
          </div>

          {/* Timing & Reception Details Highlight */}
          <div className="reception-timing-box">
            <span className="reception-date-tag">शनिवार, 12 दिसंबर 2026</span>
            <span className="reception-time-tag">सायं 6:15 बजे से आगमन तक</span>
          </div>

          {/* Venue Title & Sacred Address */}
          <div className="reception-location-details">
            <div className="venue-location-pin" aria-hidden="true">📍</div>
            <h3 className="venue-name-title">{venueName}</h3>
            
            <div className="venue-address-badge">
              <p className="address-line">{venueAddress}</p>
            </div>

            <p className="venue-welcome-note">
              आप सपरिवार पधारकर नवदंपतियों को अपना स्नेह व मंगल आशीर्वाद प्रदान करें तथा राजस्थानी प्रीतिभोज का आनंद लें।
            </p>
          </div>

          {/* Transportation & Procession Bus Notes Grid */}
          <div className="reception-transport-grid">
            <div className="transport-note-card">
              <div className="note-badge">बारात प्रस्थान (समदड़ी)</div>
              <p className="note-desc">
                <strong>१० दिसंबर २०२६ (दोपहर १२:१५ बजे)</strong>: समदड़ी में श्रीमान ब्याईजी धनराज जी चौहान के निवास स्थान पर बारात प्रस्थान।
              </p>
            </div>
            <div className="transport-note-card">
              <div className="note-badge">बारात स्वागत (बालोतरा)</div>
              <p className="note-desc">
                <strong>१२ दिसंबर २०२६ (सायं ५:१५ बजे)</strong>: बालोतरा से बारात आगमन पर कुमावत वाटिका, पुनायता रोड़, पाली में भव्य स्वागत।
              </p>
            </div>
          </div>

          {/* Action Buttons: Google Maps & Copy Address */}
          <div className="venue-buttons-row">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-btn btn-google-maps"
              title="गूगल मैप्स पर स्थल का स्थान देखें"
            >
              <span className="btn-icon">🗺️</span>
              <span>गूगल मैप्स पर देखें</span>
            </a>

            <button
              type="button"
              onClick={handleCopyAddress}
              className={`venue-btn btn-copy-address ${copied ? 'copied' : ''}`}
              title="पूरा पता कॉपी करें"
            >
              <span className="btn-icon">{copied ? '✓' : '📋'}</span>
              <span>{copied ? 'पता कॉपी हो गया!' : 'पता कॉपी करें'}</span>
            </button>
          </div>

        </article>

      </div>
    </section>
  );
}
