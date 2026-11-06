import React from 'react';

export default function Hero() {
  return (
    <section style={{
      backgroundColor: 'transparent',
      padding: '76px 0 40px 0',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Dynamic Ambient Warm Golden Glow behind Right Side (Jhoomer Area) */}
      <div style={{
        position: 'absolute',
        top: '6%',
        right: '4%',
        width: 'min(720px, 80vw)',
        height: 'min(720px, 80vw)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(215, 140, 67, 0.22) 0%, rgba(215, 140, 67, 0.06) 50%, transparent 72%)',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(30px)'
      }} />

      {/* Subtle Top Ambient Fill */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '20%',
        width: '500px',
        height: '350px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(215, 140, 67, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1.15fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid-layout">
          
          {/* Left Column: Brand & Title */}
          <div style={{ zIndex: 2 }} className="hero-content-col">
            {/* Eyebrow / Welcome Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
              fontWeight: 700,
              color: '#d78c43',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              <span>\ WELCOME TO \</span>
            </div>

            {/* Display Headline */}
            <h1 style={{
              fontSize: 'clamp(38px, 4.6vw, 62px)',
              fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
              lineHeight: 1.14,
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '-0.025em'
            }}>
              Naman Lighting <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #f5b775 0%, #d78c43 50%, #b86b24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700 
              }}>
                Studio, Kolhapur
              </span>
            </h1>
          </div>

          {/* Right Column: Stunning Royal Chandelier */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            marginTop: '-45px'
          }} className="hero-chandelier-col">
            
            {/* Fine Golden Suspension Wire extending from the top */}
            <div 
              style={{
                width: '2px',
                height: '65px',
                background: 'linear-gradient(180deg, rgba(215, 140, 67, 0.15) 0%, rgba(215, 140, 67, 0.95) 100%)',
                boxShadow: '0 0 12px rgba(215, 140, 67, 0.6)',
                marginTop: '-30px',
                marginBottom: '-2px',
                position: 'relative',
                zIndex: 3
              }} 
              className="chandelier-suspension-wire" 
            />

            {/* Chandelier Visual Stage */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="chandelier-visual-wrapper"
            >
              {/* Warm Golden Halo directly behind the Chandelier */}
              <div style={{
                position: 'absolute',
                top: '46%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '92%',
                height: '92%',
                background: 'radial-gradient(circle, rgba(215, 140, 67, 0.3) 0%, rgba(215, 140, 67, 0.08) 52%, transparent 74%)',
                pointerEvents: 'none',
                filter: 'blur(36px)',
                zIndex: 0
              }} />

              {/* Crystal Twinkle Sparkles */}
              <div className="sparkle-point sparkle-1" style={{
                position: 'absolute',
                top: '32%',
                left: '26%',
                color: '#ffe5b4',
                fontSize: '18px',
                zIndex: 4,
                pointerEvents: 'none'
              }}>✦</div>

              <div className="sparkle-point sparkle-2" style={{
                position: 'absolute',
                top: '48%',
                right: '22%',
                color: '#fff1d6',
                fontSize: '15px',
                zIndex: 4,
                pointerEvents: 'none'
              }}>✦</div>

              <div className="sparkle-point sparkle-3" style={{
                position: 'absolute',
                top: '68%',
                left: '42%',
                color: '#ffd29d',
                fontSize: '20px',
                zIndex: 4,
                pointerEvents: 'none'
              }}>✦</div>

              {/* Grand Crystal Chandelier Image */}
              <img 
                src="/images/hero_chandelier_transparent.png" 
                alt="Naman Luxury Grand Crystal Chandelier & Royal Jhoomer"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '530px',
                  objectFit: 'contain',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 0 50px rgba(215, 140, 67, 0.45)) drop-shadow(0 30px 65px rgba(0, 0, 0, 0.95))'
                }}
                className="hero-chandelier-img"
              />

              {/* Ground Light Glow beneath Jhoomer */}
              <div style={{
                position: 'absolute',
                bottom: '-6%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '85%',
                height: '35%',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(215, 140, 67, 0.35) 0%, rgba(215, 140, 67, 0.08) 55%, transparent 80%)',
                pointerEvents: 'none',
                filter: 'blur(30px)',
                zIndex: 1
              }} />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-chandelier-img {
          animation: chandelierSubtleFloat 6s ease-in-out infinite alternate;
        }

        @keyframes chandelierSubtleFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.4deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .sparkle-point {
          text-shadow: 0 0 10px rgba(255, 230, 180, 0.9), 0 0 20px rgba(215, 140, 67, 0.7);
        }

        .sparkle-1 {
          animation: sparkleGlitter 3.5s ease-in-out infinite;
        }

        .sparkle-2 {
          animation: sparkleGlitter 4s ease-in-out infinite 1.2s;
        }

        .sparkle-3 {
          animation: sparkleGlitter 3.8s ease-in-out infinite 2.1s;
        }

        @keyframes sparkleGlitter {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @media (max-width: 1024px) {
          .hero-grid-layout {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
          .chandelier-visual-wrapper {
            max-width: 440px !important;
          }
        }

        @media (max-width: 860px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            text-align: center;
          }
          .hero-content-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content-col h1 {
            text-align: center;
          }
          .hero-chandelier-col {
            order: -1;
            margin-top: 0 !important;
            margin-bottom: 8px;
          }
          .chandelier-suspension-wire {
            height: 45px !important;
            margin-top: -15px !important;
          }
          .chandelier-visual-wrapper {
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
