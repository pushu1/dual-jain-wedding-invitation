import React, { useState, useEffect, useRef } from 'react';

export default function InvitationViewerModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef(null);

  const coverPage = {
    src: 'assets/dual-jain-wedding-invitation-cover.png',
    title: 'Single-Page Digital Wedding Invitation Cover',
    sub: 'Akash & Reena • Shivani & Dheeraj • Saturday, 12 December 2026 • Pali'
  };

  const pdfUrl = 'dual-jain-wedding-invitation.pdf';

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.0));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const toggleFullscreen = () => {
    const elem = modalRef.current || document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  return (
    <div className="royal-invitation-modal-backdrop" onClick={onClose} ref={modalRef}>
      <div
        className="royal-invitation-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Royal Wedding Invitation Card Viewer"
      >
        {/* Top Control Bar */}
        <header className="viewer-top-toolbar">
          <div className="viewer-info-strip">
            <span className="viewer-brand-title">👑 डिजिटल विवाह आमंत्रण पत्रिका</span>
            <span className="viewer-page-counter">एक-पृष्ठीय आधिकारिक पत्रिका</span>
          </div>

          <div className="viewer-action-controls">
            {/* Zoom Controls */}
            <div className="zoom-ctrl-group">
              <button
                className="viewer-ctrl-btn"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                title="छोटा करें"
                aria-label="ज़ूम आउट"
              >
                🔍-
              </button>
              <button
                className="viewer-ctrl-btn zoom-level-display"
                onClick={handleResetZoom}
                title="100% आकार पर लाएं"
                aria-label="रीसेट ज़ूम"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                className="viewer-ctrl-btn"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.0}
                title="बड़ा करें"
                aria-label="ज़ूम इन"
              >
                🔍+
              </button>
            </div>

            {/* Fullscreen Toggle */}
            <button
              className="viewer-ctrl-btn"
              onClick={toggleFullscreen}
              title={isFullscreen ? 'सामान्य स्क्रीन' : 'पूर्ण स्क्रीन'}
              aria-label="पूर्ण स्क्रीन"
            >
              {isFullscreen ? '⤓ सामान्य' : '⤢ पूर्ण स्क्रीन'}
            </button>

            {/* Open in New Tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="viewer-ctrl-btn btn-new-tab"
              title="पीडीएफ को नई टैब में खोलें"
            >
              ↗ नई टैब
            </a>

            {/* Download PDF Button */}
            <a
              href={pdfUrl}
              download="dual-jain-wedding-invitation.pdf"
              className="viewer-ctrl-btn btn-download-gold"
              title="आधिकारिक एक-पृष्ठीय पीडीएफ डाउनलोड करें"
            >
              📥 पीडीएफ
            </a>

            {/* Close Button */}
            <button
              className="viewer-ctrl-btn btn-close-modal"
              onClick={onClose}
              title="बंद करें (Esc)"
              aria-label="आमंत्रण पत्रिका बंद करें"
            >
              ✕ बंद करें
            </button>
          </div>
        </header>

        {/* Center Stage: Card Display Area */}
        <div className="viewer-card-display-stage">
          <div className="viewer-card-viewport">
            <div
              className="viewer-card-wrapper"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease',
                display: 'flex',
                justifyContent: 'center',
                padding: '16px 0'
              }}
            >
              <img
                src="assets/shiva_parvati_wedding_card.png"
                alt="विवाह आमंत्रण पत्रिका"
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.7)',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
