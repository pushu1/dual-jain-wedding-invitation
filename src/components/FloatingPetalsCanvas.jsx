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

    // Subtle traditional items: marigold petals, rose petals, golden shimmer sparkles
    const petalColors = [
      'rgba(212, 175, 55, 0.45)', // Golden sparkle
      'rgba(255, 165, 0, 0.40)',  // Marigold orange
      'rgba(255, 215, 0, 0.50)',  // Marigold yellow
      'rgba(184, 138, 59, 0.35)', // Antique gold
      'rgba(214, 51, 108, 0.35)', // Soft Rose pink
      'rgba(139, 48, 56, 0.30)'   // Traditional burgundy
    ];

    const particleCount = width < 768 ? 22 : 36;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 3,
        speedY: Math.random() * 0.7 + 0.3,
        speedX: Math.sin(Math.random() * Math.PI) * 0.4,
        angle: Math.random() * 360,
        spinSpeed: (Math.random() - 0.5) * 1.5,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: Math.random() * 0.6 + 0.2,
        isSparkle: Math.random() > 0.65
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.008) * 0.5 + p.speedX;
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
          // 4-point golden sparkle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 235, 175, 0.7)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-p.size * 1.4, 0);
          ctx.lineTo(p.size * 1.4, 0);
          ctx.moveTo(0, -p.size * 1.4);
          ctx.lineTo(0, p.size * 1.4);
          ctx.stroke();
        } else {
          // Organic curved petal shape
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.9, p.size * 1.6, Math.PI / 4, 0, 2 * Math.PI);
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
    />
  );
}
