import React from 'react';
import { ArrowRight, MapPin, Maximize2, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

export default function SeamlessOffering({ onExploreCatalog }) {
  const features = [
    {
      icon: <Maximize2 size={16} color="#d78c43" />,
      title: 'Bespoke Sizing & Scale',
      desc: 'Engineered for double-height ceilings, grand stairwells, and custom room plans.'
    },
    {
      icon: <Sparkles size={16} color="#d78c43" />,
      title: 'High CRI 97+ Fidelity',
      desc: 'Authentic color rendering that flatters natural marble, fine wood, and luxury fabrics.'
    },
    {
      icon: <Sliders size={16} color="#d78c43" />,
      title: 'Smart Dimming & Automation',
      desc: 'Direct integration with Lutron, DALI, Casambi, and smart home lighting ecosystems.'
    },
    {
      icon: <ShieldCheck size={16} color="#d78c43" />,
      title: 'Showroom Support & Warranty',
      desc: 'Full architectural consultation in Kolhapur, precision mounting, and lifetime warranty.'
    }
  ];

  return (
    <section id="features" className="section" style={{
      backgroundColor: 'transparent',
      border: 'none',
      position: 'relative',
      padding: '90px 0',
      overflow: 'hidden'
    }}>
      {/* Subtle Warm Amber Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(215, 140, 67, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.08fr',
          gap: '56px',
          alignItems: 'center'
        }} className="features-grid">
          
          {/* Left Column: Atmospheric Architectural Lighting Image */}
          <div style={{ position: 'relative' }}>
            <div 
              className="feature-image-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(215, 140, 67, 0.15)',
                border: '1px solid rgba(215, 140, 67, 0.25)',
                position: 'relative',
                aspectRatio: '4/3',
                backgroundColor: '#0a0a0e'
              }}
            >
              <img 
                src="/images/feature_lighting_interior.jpg" 
                alt="Architectural Ambient Lighting Installation"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                className="feature-image"
              />

              {/* Top Tag */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(15, 15, 20, 0.82)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#f5b775',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>✦ VILLA LIVING ROOM</span>
              </div>

              {/* Bottom Ambient Tag */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                backgroundColor: 'rgba(15, 15, 20, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(215, 140, 67, 0.3)',
                borderRadius: '12px',
                padding: '12px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#ffffff' }}>
                    Halo Ring Ambient Sculpture
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#d78c43', marginTop: '2px' }}>
                    Double-Height Architectural Ceiling
                  </div>
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#ffffff',
                  backgroundColor: 'rgba(215, 140, 67, 0.2)',
                  border: '1px solid rgba(215, 140, 67, 0.4)',
                  padding: '5px 12px',
                  borderRadius: '20px'
                }}>
                  Live In Kolhapur Studio
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Attractive & User-Friendly Features */}
          <div>
            <div className="eyebrow-tag" style={{ color: '#d78c43', letterSpacing: '0.2em' }}>
              \ ARCHITECTURAL ADVANTAGE \
            </div>
            
            <h2 className="display-title" style={{
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '14px',
              fontWeight: 600
            }}>
              Precision Lighting for Luxury Spaces
            </h2>

            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              lineHeight: 1.65,
              marginBottom: '26px',
              maxWidth: '520px'
            }}>
              Bespoke luminaires engineered to harmonize with your interior architecture, ceiling heights, and distinct aesthetic vision.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
              marginBottom: '28px'
            }} className="feature-cards-grid">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(21, 21, 28, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '16px',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(215, 140, 67, 0.45)';
                    e.currentTarget.style.backgroundColor = 'rgba(26, 26, 35, 0.85)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.backgroundColor = 'rgba(21, 21, 28, 0.75)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(215, 140, 67, 0.15)',
                    border: '1px solid rgba(215, 140, 67, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px'
                  }}>
                    {item.icon}
                  </div>
                  <div style={{
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '4px'
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    lineHeight: 1.45
                  }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Clean & Attractive CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={onExploreCatalog}
                style={{
                  padding: '12px 28px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  backgroundColor: '#d78c43',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(215, 140, 67, 0.35)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e59b52';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d78c43';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore Collections <ArrowRight size={14} />
              </button>

              <a
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: '#94a3b8',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease',
                  padding: '8px 10px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#d78c43'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                <MapPin size={14} color="#d78c43" />
                Kolhapur Showroom
              </a>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .feature-image-card:hover .feature-image {
          transform: scale(1.03);
        }

        @media (max-width: 960px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }

        @media (max-width: 540px) {
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
