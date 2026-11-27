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
    <section className="wedding-section reception-venue-section 3d-mandap-section" id="venue-section">
      <div className="section-royal-card mandap-architectural-card 3d-mandap-card">
        <div className="card-border-gold-outer 3d-bevel-gold" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">॥ विवाह स्थल एवं भव्य मंडप ॥</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <h2 className="section-title-gold 3d-gold-title">
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

        {/* Grand Reception Showcase Card with 3D Mandap Arch & Ambient Glow */}
        <article className="reception-grand-card royal-mandap-pavilion 3d-mandap-pavilion">
          
          {/* Traditional Wedding 3D Mandap Decorative Arch with Layered Toran & Floral Pillars */}
          <div className="reception-mandap-illustration 3d-arch-illustration" aria-hidden="true">
            <svg viewBox="0 0 540 140" className="mandap-arch-svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="goldArchGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A45C" />
                  <stop offset="30%" stopColor="#FFF2D6" />
                  <stop offset="70%" stopColor="#B88A3B" />
                  <stop offset="100%" stopColor="#8C6A28" />
                </linearGradient>
                <filter id="mandapGlow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="rgba(212, 175, 55, 0.4)" />
                </filter>
              </defs>
              {/* Outer Pavilion Arch with 3D Bevel */}
              <rect x="35" y="24" width="470" height="106" rx="14" fill="rgba(139, 48, 56, 0.04)" stroke="rgba(184, 138, 59, 0.35)" strokeWidth="1.5" />
              <path d="M 35,40 Q 270,-8 505,40" fill="none" stroke="url(#goldArchGrad3D)" strokeWidth="3.5" filter="url(#mandapGlow)" />
              <path d="M 75,46 Q 270,10 465,46" fill="none" stroke="#C9A45C" strokeWidth="1.2" strokeDasharray="5 3" />
              
              {/* Left & Right Floral Pillars with Diya Pots */}
              <line x1="70" y1="40" x2="70" y2="130" stroke="#B88A3B" strokeWidth="4" />
              <line x1="470" y1="40" x2="470" y2="130" stroke="#B88A3B" strokeWidth="4" />
              <circle cx="70" cy="40" r="5" fill="#E65100" />
              <circle cx="470" cy="40" r="5" fill="#E65100" />

              {/* Central Mandap Kalash & Sacred Flame */}
              <circle cx="270" cy="14" r="9" fill="#B88A3B" />
              <path d="M 263,14 L 270,2 L 277,14 Z" fill="#8B3038" />
              <circle cx="270" cy="2" r="3.5" fill="#FF9800" />
            </svg>
          </div>

          {/* Timing & Reception Details Highlight with 3D Glow */}
          <div className="reception-timing-box 3d-timing-box">
            <span className="reception-date-tag">शनिवार, 12 दिसंबर 2026</span>
            <span className="reception-time-tag">सायं 6:15 बजे से आगमन तक</span>
          </div>

          {/* Venue Title & Sacred Address */}
          <div className="reception-location-details 3d-location-details">
            <div className="venue-location-pin 3d-pulsing-pin" aria-hidden="true">📍</div>
            <h3 className="venue-name-title 3d-venue-title">{venueName}</h3>
            
            <div className="venue-address-badge 3d-address-badge">
              <p className="address-line">{venueAddress}</p>
            </div>

            <p className="venue-welcome-note">
              आप सपरिवार पधारकर नवदंपतियों को अपना स्नेह व मंगल आशीर्वाद प्रदान करें तथा पारंपरिक राजस्थानी प्रीतिभोज का आनंद लें।
            </p>
          </div>

          {/* Transportation & Procession Bus Notes Grid */}
          <div className="reception-transport-grid 3d-transport-grid">
            <div className="transport-note-card 3d-transport-card">
              <div className="note-badge">🚌 बारात प्रस्थान (समदड़ी)</div>
              <p className="note-desc">
                <strong>१० दिसंबर २०२६ (दोपहर १२:१५ बजे)</strong>: समदड़ी में श्रीमान ब्याईजी धनराज जी चौहान के निवास स्थान पर बारात प्रस्थान।
              </p>
            </div>
            <div className="transport-note-card 3d-transport-card">
              <div className="note-badge">🎺 बारात स्वागत (बालोतरा)</div>
              <p className="note-desc">
                <strong>१२ दिसंबर २०२६ (सायं ५:१५ बजे)</strong>: बालोतरा से बारात आगमन पर कुमावत वाटिका, पुनायता रोड़, पाली में भव्य स्वागत।
              </p>
            </div>
          </div>

          {/* Action Buttons: Google Maps & Copy Address */}
          <div className="venue-buttons-row 3d-venue-actions">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-btn btn-google-maps 3d-btn-maps"
              title="गूगल मैप्स पर स्थल का स्थान देखें"
            >
              <span className="btn-icon">🗺️</span>
              <span>गूगल मैप्स पर देखें</span>
            </a>

            <button
              type="button"
              onClick={handleCopyAddress}
              className={`venue-btn btn-copy-address 3d-btn-copy ${copied ? 'copied' : ''}`}
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
