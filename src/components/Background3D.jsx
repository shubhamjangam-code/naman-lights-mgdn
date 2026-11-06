import React, { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Smooth mouse coordinates
    const mouse = { x: width / 2, y: height / 3, targetX: width / 2, targetY: height / 3 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Subtle warm golden dust motes floating in lighting showroom
    const particleCount = Math.min(28, Math.max(12, Math.floor(width / 50)));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 600 + 200,
      baseRadius: Math.random() * 1.8 + 0.8,
      isGolden: Math.random() > 0.4,
      alpha: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: -Math.random() * 0.3 - 0.08,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseAngle: Math.random() * Math.PI * 2
    }));

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Lightweight Mouse Light Spill
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);
      mouseGrad.addColorStop(0, 'rgba(215, 140, 67, 0.05)');
      mouseGrad.addColorStop(1, 'rgba(13, 13, 17, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // Delicate Floating Dust Motes (Single-Pass Fast Drawing)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = Math.max(0.05, p.alpha + Math.sin(p.pulseAngle) * 0.08);
        const parallaxX = (mouse.x - width / 2) * (200 / p.z) * 0.04;
        const parallaxY = (mouse.y - height / 2) * (200 / p.z) * 0.04;

        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, p.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.isGolden
          ? `rgba(215, 140, 67, ${currentAlpha})`
          : `rgba(250, 205, 130, ${currentAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden',
      backgroundColor: '#0d0d11'
    }}>
      {/* Deep Dark Atmospheric Studio Backdrop (100% Hardware-Accelerated CSS) */}
      <div className="dark-studio-mesh" />
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      <style>{`
        .dark-studio-mesh {
          position: absolute;
          inset: 0;
          will-change: transform;
          background: 
            radial-gradient(circle at 50% 0%, rgba(215, 140, 67, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 85% 35%, rgba(215, 140, 67, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 15% 65%, rgba(180, 100, 30, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, #0e0e12 0%, #0d0d10 50%, #0a0a0d 100%);
        }
      `}</style>
    </div>
  );
}
