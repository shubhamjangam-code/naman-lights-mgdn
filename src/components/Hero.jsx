import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExploreCatalog }) {
  return (
    <section style={{
      backgroundColor: 'transparent',
      padding: '96px 0 60px 0',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Immersive Warm Golden Ambient Backlight behind Chandelier */}
      <div style={{
        position: 'absolute',
        top: '12%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(860px, 98vw)',
        height: 'min(800px, 92vw)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(215, 140, 67, 0.2) 0%, rgba(215, 140, 67, 0.05) 50%, transparent 72%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.25fr 0.8fr',
          gap: '32px',
          alignItems: 'center'
        }} className="hero-prizma-grid">
          
          {/* Left Column: Short, Spacious & Attractive Headline with Collections CTA */}
          <div style={{ zIndex: 2 }} className="hero-left-col">
            {/* Eyebrow / Welcome Tag */}
            <div style={{
              fontSize: '11px',
              fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
              fontWeight: 600,
              color: '#caa374',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              \ WELCOME TO \
            </div>

            {/* Short, Clean 2-Line Headline */}
            <h1 style={{
              fontSize: 'clamp(34px, 3.8vw, 50px)',
              fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
              lineHeight: 1.18,
              fontWeight: 500,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '26px'
            }}>
              Naman Lighting <br />
              <span style={{ color: '#d78c43', fontWeight: 600 }}>Studio, Kolhapur</span>
            </h1>

            {/* Prizma-Style Collections CTA Button */}
            <button
              onClick={onExploreCatalog}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '13px 32px',
                backgroundColor: '#d78c43',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
                fontSize: '12.5px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 8px 24px rgba(215, 140, 67, 0.35)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e59b52';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(215, 140, 67, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d78c43';
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(215, 140, 67, 0.35)';
              }}
              title="Explore Collections"
            >
              Collections
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Centerpiece Column: Dramatic Hanging Royal Crystal Chandelier (Transparent Cutout, No Box/Card) */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }} className="hero-centerpiece-col">
            
            {/* Fine Golden Suspension Wire extending from the top of the viewport */}
            <div 
              style={{
                width: '2px',
                height: '140px',
                background: 'linear-gradient(180deg, rgba(215, 140, 67, 0.2) 0%, rgba(215, 140, 67, 0.95) 100%)',
                boxShadow: '0 0 10px rgba(215, 140, 67, 0.5)',
                marginTop: '-50px',
                marginBottom: '-2px',
                position: 'relative',
                zIndex: 3
              }} 
              className="chandelier-suspension-wire" 
            />

            {/* Chandelier Cutout Container: Completely Borderless & Transparent */}
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
              {/* Ethereal Warm Core Glow behind Chandelier */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                height: '85%',
                background: 'radial-gradient(circle, rgba(215, 140, 67, 0.25) 0%, rgba(215, 140, 67, 0.06) 55%, transparent 75%)',
                pointerEvents: 'none',
                filter: 'blur(35px)',
                zIndex: 0
              }} />

              {/* 100% Transparent PNG Chandelier Cutout with Natural Shadows */}
              <img 
                src="/images/hero_chandelier_transparent.png" 
                alt="Naman Luxury Grand Crystal Chandelier & Royal Jhoomer"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 0 45px rgba(215, 140, 67, 0.42)) drop-shadow(0 25px 60px rgba(0, 0, 0, 0.95))'
                }}
                className="hero-chandelier-img"
              />

              {/* Warm Ground Light Spill directly beneath the Jhoomer */}
              <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '85%',
                height: '38%',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(215, 140, 67, 0.32) 0%, rgba(215, 140, 67, 0.08) 55%, transparent 80%)',
                pointerEvents: 'none',
                filter: 'blur(28px)',
                zIndex: 1
              }} />
            </div>
          </div>

          {/* Right Column: Featured Product Area (Name & Arrow Button matching Prizma) */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: '20px',
            zIndex: 2
          }} className="hero-right-col">

            {/* Product Title */}
            <div style={{
              fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
              fontSize: 'clamp(20px, 2.2vw, 26px)',
              fontWeight: 500,
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '4px',
              letterSpacing: '-0.015em'
            }}>
              "Solstice Cascade"
            </div>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '26px'
            }}>
              Grand Crystal Jhoomer
            </div>

            {/* Interactive Circular Arrow Button */}
            <button
              onClick={onExploreCatalog}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '1.5px solid rgba(215, 140, 67, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d78c43';
                e.currentTarget.style.borderColor = '#d78c43';
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) arrow.setAttribute('stroke', '#ffffff');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(215, 140, 67, 0.5)';
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) arrow.setAttribute('stroke', '#d78c43');
              }}
              title="Explore Grand Jhoomer Collection"
              aria-label="Explore Grand Jhoomer Collection"
            >
              <ArrowRight size={20} color="#d78c43" />
            </button>

          </div>

        </div>
      </div>

      <style>{`
        .hero-chandelier-img {
          animation: chandelierSubtleFloat 6s ease-in-out infinite alternate;
        }

        @keyframes chandelierSubtleFloat {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 1080px) {
          .hero-prizma-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .hero-right-col {
            grid-column: span 2;
            padding-left: 0 !important;
            margin-top: 10px;
          }
        }

        @media (max-width: 800px) {
          .hero-prizma-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .hero-centerpiece-col {
            order: -1;
            margin-bottom: 4px;
          }
          .chandelier-suspension-wire {
            height: 55px !important;
            margin-top: -15px !important;
          }
          .chandelier-visual-wrapper {
            max-width: 360px !important;
          }
          .hero-right-col {
            grid-column: span 1;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
