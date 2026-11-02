import React from 'react';

export default function StudioAbout() {
  const stats = [
    { number: '15K', suffix: '+', label: 'Lamps Installed in 2024' },
    { number: '298', suffix: '+', label: 'Custom Architectural Solutions' },
    { number: '2K', suffix: '+', label: 'Luxury Homes & Villas' },
    { number: '599', suffix: '+', label: 'Commercial & Venue Projects' }
  ];

  return (
    <section id="about" className="section" style={{
      backgroundColor: '#0c0c0f',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      {/* Ghost Outline Watermark Typography "ABOUT" */}
      <div 
        className="watermark-ghost-text" 
        style={{
          top: '20px',
          left: '-20px',
          opacity: 0.8
        }}
      >
        ABOUT
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Two-Column Intro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '56px',
          alignItems: 'flex-start'
        }} className="about-grid">
          
          {/* Left Column */}
          <div>
            <div className="eyebrow-tag">\ ABOUT US \</div>
            <h2 className="display-title" style={{
              fontSize: 'clamp(32px, 3.8vw, 48px)',
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              Illuminate Your Space, Illuminate Your Life With Us
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#d78c43',
              fontWeight: 600,
              letterSpacing: '0.02em'
            }}>
              Get an architectural lighting solution that suits your design vision.
            </p>
          </div>

          {/* Right Column */}
          <div style={{ paddingTop: '8px' }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '16px',
              lineHeight: 1.3
            }}>
              Place the Right Accents with Modern Lights by Naman Studio
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#94a3b8',
              marginBottom: '16px'
            }}>
              We closely cooperate with our clients and architects to fully understand their needs and aesthetic goals during the early stages of each project. We provide accurate lighting analysis, detailed specifications, schedules for smart home integration, and bespoke luminaire finishes.
            </p>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#94a3b8'
            }}>
              Our true passion is the art of integrating light within architecture. From our flagship showroom in Kolhapur, we have completed over 2,000 residential projects and engineered lighting systems for villas, hotels, and luxury retail across the region.
            </p>
          </div>

        </div>

        {/* 4 Stat Cards Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }} className="stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(21, 21, 27, 0.75)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '30px 24px',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(215, 140, 67, 0.5)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px'
              }}>
                <span>{stat.number}</span>
                <span style={{ color: '#d78c43', fontSize: '32px' }}>{stat.suffix}</span>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#94a3b8',
                fontWeight: 500,
                lineHeight: 1.4
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            margin-bottom: 36px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }

        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
