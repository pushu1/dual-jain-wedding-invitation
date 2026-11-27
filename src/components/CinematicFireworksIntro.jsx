import React, { useEffect, useRef, useState } from 'react';

export default function CinematicFireworksIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const animFrameIdRef = useRef(null);

  // Fireworks Color Palette: Golden, Burgundy, Maroon, Festive Coral, Emerald & Shimmer
  const colorPalette = [
    '#FFD700', // Pure Gold
    '#FFA500', // Saffron Gold
    '#D4AF37', // Bright Shimmer Gold
    '#B88A3B', // Antique Gold
    '#FF4500', // Vermilion
    '#E91E63', // Festive Rani Pink
    '#00E676', // Emerald Green
    '#FFF5E6'  // Champagne White
  ];

  const handleFinish = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    // Allow smooth fade out before unmounting
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(handleFinish, 1500);
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
        this.x = targetX || Math.random() * (width - 120) + 60;
        this.y = height;
        this.targetY = targetY || Math.random() * (height * 0.4) + height * 0.12;
        this.speed = Math.random() * 4 + 11;
        this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.18;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.dead = false;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.14; // gentle gravity

        if (this.vy >= 0 || this.y <= this.targetY) {
          this.dead = true;
          createBurst(this.x, this.y, this.color);
        }
      }

      draw() {
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 1.5, this.y - this.vy * 1.5);
        ctx.stroke();
        ctx.restore();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 1.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.015;
        this.size = Math.random() * 3 + 1.8;
      }

      update() {
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.vy += 0.08; // Gravity
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function createBurst(x, y, color) {
      const isMobile = width < 768;
      const count = isMobile ? 32 : 55;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, color));
      }
    }

    // Launch initial celebratory salvo
    rockets.push(new Rocket(width * 0.3, height * 0.25));
    rockets.push(new Rocket(width * 0.7, height * 0.22));

    let frameCount = 0;
    const launchInterval = setInterval(() => {
      if (rockets.length < 5) {
        rockets.push(new Rocket());
      }
    }, 450);

    function animate() {
      // Clear transparently so the invitation is fully visible underneath
      ctx.clearRect(0, 0, width, height);

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

      frameCount++;
      animFrameIdRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Auto-transition after exactly 3.6 seconds (user requested ~3-4 seconds)
    const autoFinishTimer = setTimeout(() => {
      handleFinish();
    }, 3600);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(launchInterval);
      clearTimeout(autoFinishTimer);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`cinematic-fireworks-overlay ${isFadingOut ? 'fade-out' : 'fade-in'}`}
      role="region"
      aria-label="Wedding Celebration Fireworks"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '20px',
        transition: 'opacity 0.6s ease'
      }}
    >
      {/* Real-time HTML5 Canvas for Fireworks Bursts - Transparent */}
      <canvas
        ref={canvasRef}
        className="fireworks-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />

      {/* Floating 3D Celebration Banner - Does not block the invitation */}
      <div
        className="celebration-floating-badge"
        style={{
          position: 'relative',
          zIndex: 10,
          pointerEvents: 'auto',
          background: 'linear-gradient(135deg, rgba(139, 48, 56, 0.95) 0%, rgba(118, 45, 50, 0.95) 100%)',
          color: '#FFF5E6',
          border: '1.5px solid #C9A45C',
          borderRadius: '30px',
          padding: '10px 24px',
          boxShadow: '0 10px 30px rgba(118, 45, 50, 0.35), 0 0 20px rgba(201, 164, 92, 0.4)',
          textAlign: 'center',
          maxWidth: '90vw',
          animation: 'badgeFloatIn 0.5s ease-out',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <span style={{ fontSize: '18px' }}>✨</span>
        <div>
          <div style={{
            fontFamily: 'Noto Sans Devanagari, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: '#FFF2D6',
            letterSpacing: '0.3px'
          }}>
            शुभ विवाह समारोह में आपका हार्दिक स्वागत है!
          </div>
          <div style={{
            fontFamily: 'Noto Sans Devanagari, sans-serif',
            fontSize: '12px',
            color: '#E5C378',
            marginTop: '2px'
          }}>
            आकाश संग रीना • शिवानी संग धीरज
          </div>
        </div>
        <button
          type="button"
          onClick={handleFinish}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#E5C378',
            cursor: 'pointer',
            fontSize: '14px',
            padding: '2px 6px',
            marginLeft: '4px'
          }}
          title="बंद करें"
          aria-label="बंद करें"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
