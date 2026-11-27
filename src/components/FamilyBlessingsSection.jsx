import React, { useState } from 'react';

export default function FamilyBlessingsSection() {
  const [guestName, setGuestName] = useState('');
  const [guestCity, setGuestCity] = useState('');
  const [blessingMsg, setBlessingMsg] = useState('आकाश एवं रीना तथा शिवानी एवं धीरज को पावन परिणय सूत्र में बंधने पर हार्दिक बधाई एवं अनंत शुभकामनाएँ! दोनों युगलों का वैवाहिक जीवन सदैव सुख, समृद्धि और आनंद से परिपूर्ण रहे।');
  const [sentSuccess, setSentSuccess] = useState(false);

  const phone1 = '+919214537106'; // Kailashchandra Gehlot
  const phone2 = '+918824338255'; // Akash Gehlot

  const handleSendWhatsApp = (phoneTarget) => {
    const formattedText = `सादर प्रणाम! 🙏\n\n*आकाश एवं रीना तथा शिवानी एवं धीरज के पावन विवाह हेतु मंगल शुभकामनाएँ*\nप्रेषक: ${guestName || 'शुभचिंतक'}${guestCity ? ` (${guestCity})` : ''}\n\n"${blessingMsg}"\n\nकुमावत वाटिका, पाली में आयोजित इस भव्य विवाह समारोह में सम्मिलित होने की मंगल अभिलाषा!`;
    const cleanPhone = phoneTarget.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section className="wedding-section family-compliments-section" id="family-section">
      <div className="section-royal-card family-darbar-card">
        <div className="card-border-gold-outer" aria-hidden="true"></div>
        <div className="card-border-gold-inner" aria-hidden="true"></div>

        {/* Section Header */}
        <div className="section-header-flourish">
          <span className="shloka-text">॥ सस्नेह निमंत्रण ॥</span>
          <h2 className="section-title-gold">दर्शनाभिलाषी एवं विनीत</h2>
          <p className="section-subtitle-script">
            गहलोत परिवार एवं समस्त स्नेही स्वजन, पाली–मारवाड़ (राजस्थान)
          </p>
          <div className="section-title-divider">
            <span className="divider-line"></span>
            <span className="divider-star">✦</span>
            <span className="divider-line"></span>
          </div>
        </div>

        {/* Traditional Welcome Quote Inscription */}
        <div className="family-invitation-quote-box" style={{ maxWidth: '780px', margin: '0 auto 28px' }}>
          <p className="quote-text" style={{ fontStyle: 'italic', color: 'var(--c-headings)', fontSize: '15.5px' }}>
            “लिख्यों निमंत्रण प्रेमसू, आवारी फर्सी राखजो ।<br />
            मौको बडो अनमोल है, थोडी सी फुर्सत राखजो ॥”
          </p>
          <p className="quote-text" style={{ marginTop: '12px', fontSize: '14.5px' }}>
            भगवान शिव एवं माता पार्वती तथा पूज्य पितरों के पावन आशीर्वाद से, <strong>गहलोत परिवार</strong> आप सभी आत्मीय स्नेहीजनों को <strong>आकाश एवं रीना</strong> तथा <strong>शिवानी एवं धीरज</strong> के पावन परिणयोत्सव में सपरिवार सादर आमंत्रित करता है।
          </p>
        </div>

        {/* Sweet Child Inviter & Awaiting Eyes Showcase */}
        <div className="bal-manuhar-card-wrapper" style={{ maxWidth: '780px', margin: '0 auto 30px' }}>
          <div className="bal-manuhar-box">
            <div className="manuhar-badge">👶 मिठी मनुहार</div>
            <blockquote className="manuhar-quote">
              “म्‍हारे मामा व मासी की शादी में जलूल–जलूल पधारजों सा”
            </blockquote>
            <p className="manuhar-child-name">कुंवर राज सोलंकी (लाडु)</p>
          </div>

          <div className="awaiting-children-strip">
            <span className="awaiting-label">✨ निहारती पलके :</span>
            <span className="awaiting-names">
              जानवी, पिहु, अधिश्री, स्वरूपा, यक्षिता, परी, यशवी, तनुश्री, कोमल, वीरा
            </span>
          </div>
        </div>

        {/* Special Blessings & Guests Row */}
        <div className="special-mentions-grid" style={{ maxWidth: '780px', margin: '0 auto 30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          <div className="mention-item-card">
            <h4 className="mention-title">विशेष आशीर्वाद</h4>
            <p className="mention-text">दुर्गा देवी, कमला देवी, अन्नू देवी</p>
          </div>
          <div className="mention-item-card">
            <h4 className="mention-title">विशेष अतिथि</h4>
            <p className="mention-text">दिनेशजी (भोपाजी), संजय जी राठौड़</p>
          </div>
          <div className="mention-item-card">
            <h4 className="mention-title">विशेष अनुरोध</h4>
            <p className="mention-text">राकेशजी, राजेशजी, विनोदजी</p>
          </div>
        </div>

        {/* Host Contacts Cards */}
        <div className="compliments-hosts-grid" style={{ marginBottom: '32px' }}>
          
          {/* Host 1: Mr. Kailashchandra Gehlot */}
          <div className="host-contact-card">
            <div className="host-ornament-header">
              <span className="host-namaste-icon">🙏</span>
              <span className="host-honorific">परिवार के वरिष्ठ एवं निमंत्रक</span>
            </div>

            <h3 className="host-name">श्री कैलाशचंद्र गहलोत</h3>
            <p className="host-relation">सुपुत्र स्व. श्री मदनलालजी गहलोत</p>

            <div className="host-contact-action-row">
              <a href={`tel:${phone1}`} className="contact-action-btn btn-call" title="कॉल करें">
                <span className="action-icon">📞</span>
                <span className="action-text">+91 9214537106</span>
              </a>

              <a
                href={`https://wa.me/919214537106`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn btn-whatsapp"
                title="व्हाट्सएप पर संदेश भेजें"
              >
                <span className="action-icon">💬</span>
                <span className="action-text">व्हाट्सएप</span>
              </a>
            </div>
          </div>

          {/* Host 2: Ayushman Akash Gehlot */}
          <div className="host-contact-card">
            <div className="host-ornament-header">
              <span className="host-namaste-icon">🙏</span>
              <span className="host-honorific">वर एवं संयोजक</span>
            </div>

            <h3 className="host-name">आयुष्मान आकाश गहलोत</h3>
            <p className="host-relation">विवाह संयोजक</p>

            <div className="host-contact-action-row">
              <a href={`tel:${phone2}`} className="contact-action-btn btn-call" title="कॉल करें">
                <span className="action-icon">📞</span>
                <span className="action-text">+91 8824338255</span>
              </a>

              <a
                href={`https://wa.me/918824338255`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn btn-whatsapp"
                title="व्हाट्सएप पर संदेश भेजें"
              >
                <span className="action-icon">💬</span>
                <span className="action-text">व्हाट्सएप</span>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive RSVP & Blessing Sender */}
        <div className="direct-blessings-card" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="blessings-card-header">
            <h4 className="blessings-title">💌 नवदंपतियों को अपनी शुभकामनाएँ व मंगल आशीर्वाद भेजें</h4>
            <p className="blessings-subtitle">
              अपनी व्यक्तिगत शुभकामनाएँ एवं आगमन की सूचना सीधे परिवार को व्हाट्सएप पर प्रेषित करें।
            </p>
          </div>

          <div className="blessings-inputs-form">
            <div className="form-row-dual">
              <div className="form-input-group">
                <label className="input-label">आपका शुभ नाम / परिवार का नाम</label>
                <input
                  type="text"
                  className="royal-text-input"
                  placeholder="उदा. परिहार परिवार / राजेश शर्मा"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div className="form-input-group">
                <label className="input-label">आपका शहर</label>
                <input
                  type="text"
                  className="royal-text-input"
                  placeholder="उदा. पाली, जोधपुर, बालोतरा, समदड़ी"
                  value={guestCity}
                  onChange={(e) => setGuestCity(e.target.value)}
                />
              </div>
            </div>

            <div className="form-input-group">
              <label className="input-label">आपका मंगल संदेश व आशीर्वाद</label>
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
                <span>कैलाशचंद्र जी को भेजें</span>
              </button>

              <button
                type="button"
                className="btn-submit-blessing-whatsapp"
                style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                onClick={() => handleSendWhatsApp(phone2)}
              >
                <span>💬</span>
                <span>आकाश जी को भेजें</span>
              </button>
            </div>

            {sentSuccess && (
              <div className="blessing-sent-confirmation">
                <span>✓</span>
                <span>व्हाट्सएप खुल गया है! आपके मंगल आशीर्वाद हेतु सहृदय धन्यवाद!</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
