import React, { useState } from 'react';

export default function FamilyBlessingsSection() {
  const [guestName, setGuestName] = useState('');
  const [guestCity, setGuestCity] = useState('');
  const [blessingMsg, setBlessingMsg] = useState('Heartiest congratulations to Akash & Reena and Shivani & Dheeraj on your royal weddings! Wishing both couples a lifetime of divine happiness, love, and prosperity.');
  const [sentSuccess, setSentSuccess] = useState(false);

  const phone1 = '+919214537106'; // Kailashchandra Gehlot
  const phone2 = '+918824338255'; // Akash Gehlot
  const phone3 = '+917014922660';

  const handleSendWhatsApp = (phoneTarget) => {
    const formattedText = `Namaste! 🙏\n\n*Wedding Blessings for Akash & Reena and Shivani & Dheeraj*\nFrom: ${guestName || 'Well-Wisher'}${guestCity ? ` (${guestCity})` : ''}\n\n"${blessingMsg}"\n\nLooking forward to celebrating this grand royal wedding at Kumawat Vatika, Pali!`;
    const cleanPhone = phoneTarget.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section className="wedding-section family-compliments-section" id="family-section">
      <div className="section-royal-card">
        <div className="card-border-gold-outer"></div>
        <div className="card-border-gold-inner"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <span className="shloka-text">|| SASNEH NIMANTRAN ||</span>
          <h2 className="section-title-gold">WITH BEST COMPLIMENTS FROM</h2>
          <p className="section-subtitle-script">
            Warmest hospitality from the Gehlot Parivar &amp; beloved extended kinfolk
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Traditional Welcome Quote Inscription */}
        <div className="family-invitation-quote-box" style={{ maxWidth: '780px', margin: '0 auto 28px' }}>
          <p className="quote-text" style={{ fontStyle: 'italic', color: 'var(--c-headings)', fontSize: '15px' }}>
            “We have penned this invitation with boundless affection, please accept our humble respect;<br />
            This sacred occasion is truly priceless, please bestow upon us your cherished moments.”
          </p>
          <p className="quote-text" style={{ marginTop: '12px', fontSize: '14px' }}>
            With the divine blessings of Lord Vinayaka and our revered ancestors, the <strong>Gehlot Family</strong> cordially invites you and your family to grace the auspicious dual wedding celebrations of <strong>Akash &amp; Reena</strong> and <strong>Shivani &amp; Dheeraj</strong>.
          </p>
        </div>

        {/* Host Contacts Cards */}
        <div className="compliments-hosts-grid" style={{ marginBottom: '32px' }}>
          
          {/* Host 1: Mr. Kailashchandra Gehlot */}
          <div className="host-contact-card">
            <div className="host-ornament-header">
              <span className="host-namaste-icon">🙏</span>
              <span className="host-honorific">FAMILY ELDER &amp; HOST</span>
            </div>

            <h3 className="host-name">Mr. Kailashchandra Gehlot</h3>
            <p className="host-relation">Father of Akash &amp; Shivani</p>

            <div className="host-contact-action-row">
              <a href={`tel:${phone1}`} className="contact-action-btn btn-call" title="Call Kailashchandra Gehlot">
                <span className="action-icon">📞</span>
                <span className="action-text">+91 9214537106</span>
              </a>

              <a
                href={`https://wa.me/919214537106`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn btn-whatsapp"
                title="Message on WhatsApp"
              >
                <span className="action-icon">💬</span>
                <span className="action-text">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Host 2: Ayushman Akash Gehlot */}
          <div className="host-contact-card">
            <div className="host-ornament-header">
              <span className="host-namaste-icon">🙏</span>
              <span className="host-honorific">GROOM &amp; HOST</span>
            </div>

            <h3 className="host-name">Ayushman Akash Gehlot</h3>
            <p className="host-relation">Wedding Host &amp; Coordinator</p>

            <div className="host-contact-action-row">
              <a href={`tel:${phone2}`} className="contact-action-btn btn-call" title="Call Akash Gehlot">
                <span className="action-icon">📞</span>
                <span className="action-text">+91 8824338255</span>
              </a>

              <a
                href={`https://wa.me/918824338255`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn btn-whatsapp"
                title="Message on WhatsApp"
              >
                <span className="action-icon">💬</span>
                <span className="action-text">WhatsApp</span>
              </a>
            </div>
          </div>

        </div>



        {/* Interactive RSVP & Blessing Sender */}
        <div className="direct-blessings-card" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="blessings-card-header">
            <h4 className="blessings-title">💌 Send Your RSVP &amp; Blessings to the Family</h4>
            <p className="blessings-subtitle">
              Send your personal congratulations and arrival confirmation directly to the hosts on WhatsApp.
            </p>
          </div>

          <div className="blessings-inputs-form">
            <div className="form-row-dual">
              <div className="form-input-group">
                <label className="input-label">Your Name / Family Name</label>
                <input
                  type="text"
                  className="royal-text-input"
                  placeholder="e.g. Parihar Family / Rajesh Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div className="form-input-group">
                <label className="input-label">Your City</label>
                <input
                  type="text"
                  className="royal-text-input"
                  placeholder="e.g. Pali, Jodhpur, Balotra, Jaipur"
                  value={guestCity}
                  onChange={(e) => setGuestCity(e.target.value)}
                />
              </div>
            </div>

            <div className="form-input-group">
              <label className="input-label">Your Heartfelt Blessings</label>
              <textarea
                className="royal-text-area"
                rows={3}
                value={blessingMsg}
                onChange={(e) => setBlessingMsg(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '14px' }}>
              <button
                type="button"
                className="btn-submit-blessing-whatsapp"
                onClick={() => handleSendWhatsApp(phone1)}
              >
                <span>💬</span>
                <span>Send to Host (Kailashchandra Ji)</span>
              </button>

              <button
                type="button"
                className="btn-submit-blessing-whatsapp"
                style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                onClick={() => handleSendWhatsApp(phone2)}
              >
                <span>💬</span>
                <span>Send to Host (Akash Ji)</span>
              </button>
            </div>

            {sentSuccess && (
              <div className="blessing-sent-confirmation">
                <span>✓</span>
                <span>WhatsApp opened! Thank you for sharing your auspicious blessings!</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
