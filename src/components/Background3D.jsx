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

    // Mouse position for subtle 3D parallax tracking
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D ambient light particles floating in space
    const particleCount = Math.min(45, Math.floor(width / 30));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 800 + 200, // 3D Depth z
      radius: Math.random() * 3 + 1.5,
      baseRadius: Math.random() * 3 + 1.5,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(255, 215, 125, ',
      alpha: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.3 - 0.2, // Slow upward drift
      pulseSpeed: Math.random() * 0.02 + 0.008,
      pulseAngle: Math.random() * Math.PI * 2
    }));

    // Large floating ambient warm light orbs
    const lightOrbs = [
      { x: width * 0.2, y: height * 0.25, radius: 280, color: 'rgba(212, 175, 55, 0.07)', vx: 0.15, vy: 0.1 },
      { x: width * 0.8, y: height * 0.6, radius: 340, color: 'rgba(255, 200, 100, 0.06)', vx: -0.12, vy: 0.15 },
      { x: width * 0.5, y: height * 0.85, radius: 250, color: 'rgba(180, 140, 40, 0.05)', vx: 0.1, vy: -0.12 }
    ];

    const render = () => {
      // Smooth lerp mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Large Floating Ambient Light Orbs with radial gradients
      lightOrbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x - orb.radius < 0 || orb.x + orb.radius > width) orb.vx *= -1;
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > height) orb.vy *= -1;

        // Apply slight mouse parallax offset
        const offsetX = (mouse.x - width / 2) * 0.02;
        const offsetY = (mouse.y - height / 2) * 0.02;

        const radGrad = ctx.createRadialGradient(
          orb.x + offsetX, orb.y + offsetY, 0,
          orb.x + offsetX, orb.y + offsetY, orb.radius
        );
        radGrad.addColorStop(0, orb.color);
        radGrad.addColorStop(1, 'rgba(250, 249, 245, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(orb.x + offsetX, orb.y + offsetY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Interactive Mouse Spotlight Glow
      const mouseGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 200
      );
      mouseGrad.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
      mouseGrad.addColorStop(1, 'rgba(250, 249, 245, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw 3D Floating Particles
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around bounds
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulse size & opacity
        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.12;
        const currentRadius = p.baseRadius + Math.sin(p.pulseAngle) * 0.8;

        // 3D Perspective calculation
        const parallaxX = (mouse.x - width / 2) * (300 / p.z) * 0.08;
        const parallaxY = (mouse.y - height / 2) * (300 / p.z) * 0.08;

        ctx.fillStyle = `${p.color}${Math.max(0.05, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fill();

        // Subtle glowing halo around larger particles
        if (p.baseRadius > 2.2) {
          const glowGrad = ctx.createRadialGradient(
            p.x + parallaxX, p.y + parallaxY, 0,
            p.x + parallaxX, p.y + parallaxY, currentRadius * 4
          );
          glowGrad.addColorStop(0, `rgba(212, 175, 55, ${currentAlpha * 0.4})`);
          glowGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
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
      overflow: 'hidden'
    }}>
      {/* Dynamic Animated Mesh Gradient Background Layer */}
      <div className="mesh-gradient-3d-bg" />
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

      <style>{`
        .mesh-gradient-3d-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 15% 15%, rgba(249, 245, 232, 0.85) 0%, transparent 60%),
                      radial-gradient(circle at 85% 30%, rgba(243, 235, 215, 0.7) 0%, transparent 55%),
                      radial-gradient(circle at 50% 75%, rgba(248, 242, 226, 0.9) 0%, transparent 70%),
                      linear-gradient(135deg, #faf9f5 0%, #f4f0e6 50%, #faf8f2 100%);
          background-size: 200% 200%;
          animation: meshGradientShift 18s ease-in-out infinite alternate;
        }

        @keyframes meshGradientShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 100%; }
        }
      `}</style>
    </div>
  );
}
