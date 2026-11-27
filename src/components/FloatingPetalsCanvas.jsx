import React, { useEffect, useRef } from 'react';

export default function FloatingPetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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

    // Traditional festive particles: marigold orange & yellow, gold sparkles, rose pink, royal maroon
    const petalColors = [
      'rgba(212, 175, 55, 0.55)', // Shimmer Gold
      'rgba(255, 170, 0, 0.45)',  // Warm Marigold
      'rgba(255, 215, 0, 0.50)',  // Bright Haldi Gold
      'rgba(201, 164, 92, 0.45)', // Antique Gold
      'rgba(230, 81, 0, 0.40)',   // Festive Saffron
      'rgba(214, 51, 108, 0.35)', // Rose Petal
      'rgba(139, 48, 56, 0.30)'   // Traditional Maroon
    ];

    const particleCount = width < 768 ? 20 : 35;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 3,
        speedY: Math.random() * 0.6 + 0.3,
        speedX: (Math.random() - 0.5) * 0.5,
        angle: Math.random() * 360,
        spinSpeed: (Math.random() - 0.5) * 1.5,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: Math.random() * 0.5 + 0.3,
        isSparkle: Math.random() > 0.65
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.007) * 0.4 + p.speedX;
        p.angle += p.spinSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.isSparkle) {
          // 4-point golden star sparkle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 240, 190, 0.75)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-p.size * 1.4, 0);
          ctx.lineTo(p.size * 1.4, 0);
          ctx.moveTo(0, -p.size * 1.4);
          ctx.lineTo(0, p.size * 1.4);
          ctx.stroke();
        } else {
          // Organic curved 3D petal shape
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.85, p.size * 1.5, Math.PI / 4, 0, 2 * Math.PI);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="floating-petals-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}
