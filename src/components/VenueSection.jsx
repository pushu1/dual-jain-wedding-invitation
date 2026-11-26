import React, { useState } from 'react';

export default function VenueSection() {
  const [copied, setCopied] = useState(false);

  const venueName = 'KUMAWAT VATIKA';
  const venueAddress = 'Punayata Road, Pali, Rajasthan 306401, India.';
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Kumawat+Vatika+Punayata+Road+Pali+Rajasthan';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venueName}, ${venueAddress}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    }).catch(() => {});
  };

  return (
    <section className="wedding-section reception-venue-section" id="venue-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <div className="shloka-header-group">
            <span className="shloka-ornament">❖</span>
            <span className="shloka-text">|| VIVAH STHAL &amp; PREETIBHOJ ||</span>
            <span className="shloka-ornament">❖</span>
          </div>
          <h2 className="section-title-gold">
            BLESSING CEREMONY &amp; GRAND WEDDING RECEPTION
          </h2>
          <p className="section-subtitle-script">
            The sacred royal destination where beloved families, relatives &amp; cherished guests unite
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦ 🏛️ ✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Grand Reception Showcase Card */}
        <article className="reception-grand-card">
          
          {/* Traditional Wedding Mandap Decorative Arch */}
          <div className="reception-mandap-illustration" aria-hidden="true">
            <svg viewBox="0 0 500 140" className="mandap-arch-svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A45C" />
                  <stop offset="50%" stopColor="#B88A3B" />
                  <stop offset="100%" stopColor="#8C6A28" />
                </linearGradient>
              </defs>
              {/* Outer Temple Dome & Columns */}
              <rect x="50" y="30" width="400" height="95" rx="10" fill="rgba(139, 48, 56, 0.05)" />
              <path d="M 50,45 Q 250,5 450,45" fill="none" stroke="url(#goldArchGrad)" strokeWidth="2.5" />
              <path d="M 90,45 Q 250,20 410,45" fill="none" stroke="#C9A45C" strokeWidth="1" strokeDasharray="3 3" />
              {/* Left & Right Floral Pillars */}
              <line x1="80" y1="45" x2="80" y2="125" stroke="#C9A45C" strokeWidth="3" />
              <line x1="420" y1="45" x2="420" y2="125" stroke="#C9A45C" strokeWidth="3" />
              {/* Mandap Kalash Finial */}
              <circle cx="250" cy="18" r="6" fill="#B88A3B" />
              <path d="M 245,18 L 250,8 L 255,18 Z" fill="#8B3038" />
            </svg>
          </div>

          {/* Timing & Reception Details Highlight */}
          <div className="reception-timing-box">
            <span className="reception-date-tag">Saturday, 12 December 2026</span>
            <span className="reception-time-tag">From 6:15 PM Onwards</span>
          </div>

          {/* Venue Title & Sacred Address */}
          <div className="reception-location-details">
            <div className="venue-location-pin" aria-hidden="true">📍</div>
            <h3 className="venue-name-title">{venueName}</h3>
            
            <div className="venue-address-badge">
              <p className="address-line">{venueAddress}</p>
            </div>

            <p className="venue-welcome-note">
              We warmly invite you and your esteemed family to join us in blessing the auspicious marriages
              of Akash &amp; Reena and Shivani &amp; Dheeraj, followed by royal Rajasthani hospitality and dinner.
            </p>
          </div>

          {/* Action Buttons: Google Maps & Copy Address */}
          <div className="venue-buttons-row">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-btn btn-google-maps"
              title="Open venue location in Google Maps"
            >
              <span className="btn-icon">🗺️</span>
              <span>Open in Google Maps</span>
            </a>

            <button
              onClick={handleCopyAddress}
              className={`venue-btn btn-copy-address ${copied ? 'copied' : ''}`}
              title="Copy complete venue address to clipboard"
            >
              <span className="btn-icon">{copied ? '✓' : '📋'}</span>
              <span>{copied ? 'Address Copied!' : 'Copy Venue Address'}</span>
            </button>
          </div>

        </article>

      </div>
    </section>
  );
}
