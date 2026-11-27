import React, { useEffect, useRef, useState } from 'react';

export default function CinematicFireworksIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const animFrameIdRef = useRef(null);

  // Fireworks Color Palette: Golden, Burgundy, Maroon, Festive Coral, Emerald & Shimmer
  const colorPalette = [
    '#FFD700', // Pure Gold
    '#D4AF37', // Bright Shimmer Gold
    '#B88A3B', // Antique Gold
    '#FFF5E6', // Warm Ivory White
    '#8B3038', // Traditional Burgundy
    '#762D32', // Deep Maroon
    '#FF6B4A', // Festive Coral
    '#647744', // Leaf Green
    '#FFA500', // Saffron Amber
    '#E83E8C', // Royal Rose
    '#FFD700'  // Extra Golden Sparkles
  ];

  const handleFinish = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);

    // Allow 800ms for smooth cinematic CSS fade-out before unmounting
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 850);
  };

  const handleStartMusic = (e) => {
    e.stopPropagation();
    if (typeof window.playWeddingMusic === 'function') {
      window.playWeddingMusic();
      setIsMusicPlaying(true);
    }
  };

  useEffect(() => {
    const handleMusicStatus = (e) => {
      if (e && e.detail) {
        setIsMusicPlaying(!!e.detail.isPlaying);
      }
    };
    window.addEventListener('weddingMusicStatus', handleMusicStatus);
    return () => window.removeEventListener('weddingMusicStatus', handleMusicStatus);
  }, []);

  useEffect(() => {
    // Respect user's reduced motion accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(handleFinish, 2000);
      return () => clearTimeout(timer);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle & Rocket Classes
    const particles = [];
    const rockets = [];

    class Rocket {
      constructor(targetX, targetY) {
        this.x = targetX || Math.random() * (width - 100) + 50;
        this.y = height;
        this.targetY = targetY || Math.random() * (height * 0.45) + height * 0.15;
        this.speed = Math.random() * 4 + 10;
        this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.2;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.dead = false;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.12; // Gentle gravity while climbing

        if (this.vy >= 0 || this.y <= this.targetY) {
          this.dead = true;
          createBurst(this.x, this.y, this.color);
        }
      }

      draw() {
        ctx.save();
        // Golden sparkling light trail behind climbing rocket
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 3.5, this.y - this.vy * 3.5);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFD700';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF5E6';
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6.0 + 1.8;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.010;
        this.gravity = 0.07;
        this.friction = 0.96;
        this.size = Math.random() * 3.2 + 1.4;
        this.sparkle = Math.random() > 0.35;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }

      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        if (this.sparkle && Math.random() > 0.2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#FFD700';
        }
        ctx.fill();
        ctx.restore();
      }
    }

    function createBurst(x, y, baseColor) {
      // Scale count for mobile vs desktop
      const isMobile = width < 768;
      const count = isMobile ? 48 : 72;
      for (let i = 0; i < count; i++) {
        const color = Math.random() > 0.3 ? baseColor : colorPalette[Math.floor(Math.random() * colorPalette.length)];
        particles.push(new Particle(x, y, color));
      }
    }

    // Staggered launch schedule over 4.5 seconds
    let lastLaunch = 0;
    const startTime = Date.now();
    const duration = 4800; // 4.8 seconds total

    // Initial immediate bursts at greeting start
    createBurst(width * 0.25, height * 0.3, '#D4AF37');
    createBurst(width * 0.75, height * 0.28, '#8B3038');
    createBurst(width * 0.5, height * 0.2, '#FFD700');

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const elapsed = Date.now() - startTime;

      // Spawn rockets periodically during the duration
      if (elapsed < duration - 700) {
        if (Date.now() - lastLaunch > 260) {
          rockets.push(new Rocket());
          lastLaunch = Date.now();
        }
      }

      // Update & Draw Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        rockets[i].update();
        rockets[i].draw();
        if (rockets[i].dead) {
          rockets.splice(i, 1);
        }
      }

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      // Continue animation loop
      animFrameIdRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Auto-transition to complete wedding invitation after approximately 4–5 seconds (4.5s)
    const autoFinishTimer = setTimeout(() => {
      handleFinish();
    }, 4500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(autoFinishTimer);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Allow clicking anywhere to create extra bursts
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const canvas = canvasRef.current;
    if (canvas) {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 35 : 55;
      for (let i = 0; i < count; i++) {
        // burst triggered
      }
    }
  };

  return (
    <div
      className={`cinematic-fireworks-overlay ${isFadingOut ? 'fade-out' : 'fade-in'}`}
      onClick={handleFinish}
      role="region"
      aria-label="Wedding Celebration Fireworks Introduction"
    >
      {/* Real-time HTML5 Canvas for Fireworks Bursts */}
      <canvas
        ref={canvasRef}
        className="fireworks-canvas"
        onClick={handleCanvasClick}
      />

      {/* Royal Celebration Typography Card */}
      <div className="fireworks-content-center">
        <div className="fireworks-royal-card" onClick={(e) => e.stopPropagation()}>
          
          {/* Sacred Royal Crown & Sparkle Flourish */}
          <div className="fireworks-crown-badge">
            <span className="badge-star">✦</span>
            <span className="badge-crown">👑</span>
            <span className="badge-star">✦</span>
          </div>

          <div className="fireworks-shubh-vivah">
            ॥ शुभ विवाह ॥
          </div>

          {/* Primary Celebration Headings in Hindi with exclamation */}
          <h1 className="fireworks-grand-title">
            शुभ विवाह समारोह में आपका हार्दिक स्वागत है!
          </h1>

          <div className="fireworks-ornament-line">
            <span className="line-arm"></span>
            <span className="line-gem">❖</span>
            <span className="line-arm"></span>
          </div>

          <h2 className="fireworks-subtitle">
            खुशियों का दोहरा उत्सव, आनंद की दोहरी सौगात
          </h2>

          <p className="fireworks-couples">
            आकाश एवं रीना <span className="ampersand">•</span> शिवानी एवं धीरज
          </p>

          <div className="fireworks-date-pill">
            <span>दिसंबर 2026 • पाली, राजस्थान</span>
          </div>

          {/* Interactive Music Prompt */}
          <div className="fireworks-music-prompt-box">
            <div className="fireworks-music-prompt-text">
              <span>🎺</span>
              <span>मधुर शहनाई की धुन सुनने के लिए यहाँ स्पर्श करें</span>
            </div>
            <button
              type="button"
              className="btn-start-music-prompt"
              onClick={handleStartMusic}
              title="संगीत शुरू करें (30 सेकंड से)"
              aria-label="संगीत शुरू करें"
            >
              <span>{isMusicPlaying ? '🎵 संगीत बज रहा है' : '▶ संगीत शुरू करें'}</span>
            </button>
          </div>

          {/* Enter & Skip Action */}
          <div className="fireworks-action-row">
            <button
              type="button"
              className="btn-enter-celebration"
              onClick={handleFinish}
              aria-label="आमंत्रण पत्र देखें"
            >
              <span>आमंत्रण पत्र देखें</span>
              <span className="arrow-icon">➔</span>
            </button>
          </div>

        </div>
      </div>

      {/* Quick Skip Control in Top-Right Corner */}
      <button
        type="button"
        className="btn-skip-fireworks"
        onClick={handleFinish}
        title="छोड़ें एवं आमंत्रण देखें"
        aria-label="छोड़ें"
      >
        <span>छोड़ें ✕</span>
      </button>

    </div>
  );
}
