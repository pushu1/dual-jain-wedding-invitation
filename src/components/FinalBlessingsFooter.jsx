import React from 'react';

export default function FinalBlessingsFooter({ onOpenCardViewer, onDownloadPDF }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="wedding-final-blessings-footer 3d-closing-scene" id="footer-section">
      {/* Animated 3D Floating Flowers Band */}
      <div className="footer-golden-flowers-band 3d-flower-band" aria-hidden="true">
        <span className="floating-flower fl-1">🌸</span>
        <span className="floating-flower fl-2">✨</span>
        <span className="floating-flower fl-3">🌺</span>
        <span className="floating-flower fl-4">✨</span>
        <span className="floating-flower fl-5">🌸</span>
        <span className="floating-flower fl-6">✨</span>
      </div>

      <div className="footer-content-container 3d-footer-container">
        
        {/* Lord Ganesha Radiant 3D Emblem */}
        <div className="footer-ganesha-wrapper 3d-ganesha-wrapper">
          <img
            src="assets/champagne_ganesha_bright.png"
            alt="Lord Ganesha"
            className="footer-ganesha-img 3d-ganesha-img"
          />
        </div>

        {/* Sacred Shloka in Hindi */}
        <div className="footer-sacred-blessing 3d-sacred-blessing">
          ॥ ॐ श्री गणेशाय नमः • शुभं भवतु ॥
        </div>

        {/* Traditional Vedic Blessing Couplet */}
        <blockquote className="footer-treasured-quote 3d-treasured-quote">
          “आपकी गरिमामयी उपस्थिति हमारा सबसे बड़ा उपहार है,<br />
          आपका पावन आशीर्वाद हमारा अनमोल खजाना है।”
        </blockquote>

        {/* Couple Signoff with 3D Metallic Gradient */}
        <div className="footer-couple-signature 3d-couple-sign">
          <h2 className="footer-couple-names 3d-footer-names">
            आकाश एवं रीना • शिवानी एवं धीरज
          </h2>
          <p className="footer-regards-line">सस्नेह एवं सादर आभार</p>
          <p className="footer-family-signoff">
            गहलोत परिवार • रामदेव रोड़, पाली–मारवाड़ (राजस्थान)
          </p>
        </div>

        <div className="footer-bottom-divider 3d-bottom-divider"></div>

        {/* Bottom Year & Traditional Copyright */}
        <div className="footer-sub-bar">
          <p className="sub-bar-text">
            शुभ विवाह महोत्सव 2026 • दोहरा विवाह उत्सव • पाली, राजस्थान
          </p>
          <button
            onClick={scrollToTop}
            className="btn-scroll-to-top 3d-btn-top"
            title="शीर्ष पर जाएँ"
            aria-label="शीर्ष पर जाएँ"
          >
            ↑ ऊपर जाएँ
          </button>
        </div>

      </div>
    </footer>
  );
}
