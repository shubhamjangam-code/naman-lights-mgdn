import React, { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse position for subtle interactive spotlight tracking
    const mouse = { x: width / 2, y: height / 3, targetX: width / 2, targetY: height / 3 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle warm golden dust motes floating in lighting showroom
    const particleCount = Math.min(35, Math.floor(width / 40));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 800 + 200,
      radius: Math.random() * 2 + 1,
      baseRadius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(215, 140, 67, ' : 'rgba(245, 190, 110, ',
      alpha: Math.random() * 0.35 + 0.1,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.1, // Slow upward drift like dust motes in light beam
      pulseSpeed: Math.random() * 0.015 + 0.005,
      pulseAngle: Math.random() * Math.PI * 2
    }));

    // Ambient warm light spots
    const lightOrbs = [
      { x: width * 0.35, y: height * 0.25, radius: 360, color: 'rgba(215, 140, 67, 0.08)', vx: 0.1, vy: 0.08 },
      { x: width * 0.85, y: height * 0.55, radius: 420, color: 'rgba(240, 160, 60, 0.05)', vx: -0.08, vy: 0.1 },
      { x: width * 0.15, y: height * 0.85, radius: 320, color: 'rgba(190, 110, 40, 0.04)', vx: 0.07, vy: -0.09 }
    ];

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Large Warm Ambient Showroom Glows
      lightOrbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x - orb.radius < -100 || orb.x + orb.radius > width + 100) orb.vx *= -1;
        if (orb.y - orb.radius < -100 || orb.y + orb.radius > height + 100) orb.vy *= -1;

        const offsetX = (mouse.x - width / 2) * 0.015;
        const offsetY = (mouse.y - height / 2) * 0.015;

        const radGrad = ctx.createRadialGradient(
          orb.x + offsetX, orb.y + offsetY, 0,
          orb.x + offsetX, orb.y + offsetY, orb.radius
        );
        radGrad.addColorStop(0, orb.color);
        radGrad.addColorStop(1, 'rgba(13, 13, 17, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(orb.x + offsetX, orb.y + offsetY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Interactive Mouse Luminaire Spotlight
      const mouseGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 280
      );
      mouseGrad.addColorStop(0, 'rgba(215, 140, 67, 0.07)');
      mouseGrad.addColorStop(1, 'rgba(13, 13, 17, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 280, 0, Math.PI * 2);
      ctx.fill();

      // 3. Delicate Floating Dust Motes
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.1;
        const currentRadius = p.baseRadius + Math.sin(p.pulseAngle) * 0.5;

        const parallaxX = (mouse.x - width / 2) * (300 / p.z) * 0.05;
        const parallaxY = (mouse.y - height / 2) * (300 / p.z) * 0.05;

        ctx.fillStyle = `${p.color}${Math.max(0.04, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, Math.max(0.6, currentRadius), 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow halo around key particles
        if (p.baseRadius > 1.8) {
          const glowGrad = ctx.createRadialGradient(
            p.x + parallaxX, p.y + parallaxY, 0,
            p.x + parallaxX, p.y + parallaxY, currentRadius * 4
          );
          glowGrad.addColorStop(0, `rgba(215, 140, 67, ${currentAlpha * 0.4})`);
          glowGrad.addColorStop(1, 'rgba(215, 140, 67, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x + parallaxX, p.y + parallaxY, currentRadius * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

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
      {/* Deep Dark Atmospheric Studio Backdrop */}
      <div className="dark-studio-mesh" />
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      <style>{`
        .dark-studio-mesh {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 50% 0%, rgba(215, 140, 67, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 85% 40%, rgba(180, 100, 30, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 10% 70%, rgba(215, 140, 67, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, #0e0e12 0%, #0d0d10 50%, #0a0a0d 100%);
        }
      `}</style>
    </div>
  );
}
