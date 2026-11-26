import React, { useEffect, useRef, useState } from 'react';

export default function CinematicFireworksIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const animFrameIdRef = useRef(null);

  // Fireworks Color Palette: Golden, Burgundy, Maroon, Festive Coral, Emerald & Shimmer
  const colorPalette = [
    '#B88A3B', // Antique Gold
    '#D4AF37', // Bright Shimmer Gold
    '#FFD700', // Pure Gold
    '#FFF5E6', // Warm Ivory White
    '#8B3038', // Traditional Burgundy
    '#762D32', // Deep Maroon
    '#FF6B4A', // Festive Coral
    '#647744', // Leaf Green
    '#FFA500', // Saffron Amber
    '#E83E8C'  // Royal Rose
  ];

  const handleFinish = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);

    // Attempt to start wedding background music from 00:14 on user exit or automatic transition
    if (typeof window.playWeddingMusic === 'function') {
      window.playWeddingMusic();
    }

    // Allow 800ms for smooth cinematic CSS fade-out before unmounting
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 850);
  };

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
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
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
        const speed = Math.random() * 5.5 + 1.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.016 + 0.012;
        this.gravity = 0.07;
        this.friction = 0.96;
        this.size = Math.random() * 2.8 + 1.2;
        this.sparkle = Math.random() > 0.4;
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
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#FFF5E6';
        }
        ctx.fill();
        ctx.restore();
      }
    }

    function createBurst(x, y, baseColor) {
      // Scale count for mobile vs desktop
      const isMobile = width < 768;
      const count = isMobile ? 38 : 55;
      for (let i = 0; i < count; i++) {
        const color = Math.random() > 0.3 ? baseColor : colorPalette[Math.floor(Math.random() * colorPalette.length)];
        particles.push(new Particle(x, y, color));
      }
    }

    // Staggered launch schedule over 3.5 seconds
    let lastLaunch = 0;
    const startTime = Date.now();
    const duration = 3800; // 3.8 seconds total

    // Initial immediate bursts at greeting start
    createBurst(width * 0.25, height * 0.3, '#D4AF37');
    createBurst(width * 0.75, height * 0.28, '#8B3038');
    createBurst(width * 0.5, height * 0.2, '#B88A3B');

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const elapsed = Date.now() - startTime;

      // Spawn rockets periodically during the 3.8 seconds
      if (elapsed < duration - 800) {
        if (Date.now() - lastLaunch > 280) {
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

    // Auto-transition to complete wedding invitation at 3.6 seconds
    const autoFinishTimer = setTimeout(() => {
      handleFinish();
    }, 3600);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(autoFinishTimer);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Allow clicking anywhere to create extra bursts and smoothly enter
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Spawn extra fireworks at click location
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      for (let i = 0; i < 45; i++) {
        // Will be drawn in next animation frame
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
            || SHUBH VIVAH ||
          </div>

          {/* Primary Celebration Headings Requested by User */}
          <h1 className="fireworks-grand-title">
            LET THE CELEBRATIONS BEGIN!
          </h1>

          <div className="fireworks-ornament-line">
            <span className="line-arm"></span>
            <span className="line-gem">❖</span>
            <span className="line-arm"></span>
          </div>

          <h2 className="fireworks-subtitle">
            DOUBLE THE JOY, DOUBLE THE CELEBRATION
          </h2>

          <p className="fireworks-couples">
            AKASH &amp; REENA <span className="ampersand">&amp;</span> SHIVANI &amp; DHEERAJ
          </p>

          <div className="fireworks-date-pill">
            <span>DECEMBER 2026 • PALI, RAJASTHAN</span>
          </div>

          {/* Enter & Skip Action */}
          <div className="fireworks-action-row">
            <button
              type="button"
              className="btn-enter-celebration"
              onClick={handleFinish}
              aria-label="Enter Wedding Invitation"
            >
              <span>ENTER INVITATION</span>
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
        title="Skip Fireworks &amp; Open Invitation"
        aria-label="Skip introduction animation"
      >
        <span>Skip ✕</span>
      </button>

    </div>
  );
}
