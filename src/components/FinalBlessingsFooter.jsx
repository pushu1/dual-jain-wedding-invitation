import React from 'react';

export default function FinalBlessingsFooter({ onOpenCardViewer, onDownloadPDF }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="wedding-final-blessings-footer" id="footer-section">
      {/* Animated Golden Flowers Floating Band */}
      <div className="footer-golden-flowers-band" aria-hidden="true">
        <span className="floating-flower fl-1">🌸</span>
        <span className="floating-flower fl-2">✨</span>
        <span className="floating-flower fl-3">🌺</span>
        <span className="floating-flower fl-4">✨</span>
        <span className="floating-flower fl-5">🌸</span>
      </div>

      <div className="footer-content-container">
        
        {/* Lord Ganesha Small Emblem */}
        <div className="footer-ganesha-wrapper">
          <img
            src="assets/champagne_ganesha_bright.png"
            alt="Lord Ganesha"
            className="footer-ganesha-img"
          />
        </div>

        {/* Sacred Shloka in Hindi */}
        <div className="footer-sacred-blessing">
          ॥ ॐ श्री गणेशाय नमः • शुभं भवतु ॥
        </div>

        {/* Golden Quote */}
        <blockquote className="footer-treasured-quote">
          “आपकी गरिमामयी उपस्थिति हमारा सबसे बड़ा उपहार है,<br />
          आपका पावन आशीर्वाद हमारा अनमोल खजाना है।”
        </blockquote>

        {/* Couple Signoff */}
        <div className="footer-couple-signature">
          <h2 className="footer-couple-names" style={{ fontSize: 'clamp(20px, 4.2vw, 30px)' }}>
            आकाश एवं रीना • शिवानी एवं धीरज
          </h2>
          <p className="footer-regards-line">सस्नेह एवं सादर आभार</p>
          <p className="footer-family-signoff">
            गहलोत परिवार • रामदेव रोड, पाली (राजस्थान)
          </p>
        </div>

        <div className="footer-bottom-divider"></div>

        {/* Bottom Year & Traditional Copyright */}
        <div className="footer-sub-bar">
          <p className="sub-bar-text">
            शुभ विवाह महोत्सव 2026 • दोहरा विवाह उत्सव • पाली, राजस्थान
          </p>
          <button
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              border: '1px solid var(--c-border-gold)',
              borderRadius: '20px',
              color: 'var(--c-headings)',
              fontFamily: 'Noto Sans Devanagari, sans-serif',
              fontSize: '11px',
              padding: '4px 16px',
              marginTop: '10px',
              cursor: 'pointer'
            }}
          >
            ↑ ऊपर जाएँ
          </button>
        </div>

      </div>
    </footer>
  );
}
