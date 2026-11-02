import React from 'react';
import { Check, ArrowRight, MapPin } from 'lucide-react';

export default function SeamlessOffering({ onExploreCatalog }) {
  const checklist = [
    "We listen to our clients;",
    "We factor in the architect's intent;",
    "High CRI 97+ optical fidelity;",
    "Comprehensive showroom support & warranty."
  ];

  return (
    <section id="features" className="section" style={{
      backgroundColor: '#0e0e12',
      position: 'relative',
      padding: '90px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'center'
        }} className="features-grid">
          
          {/* Left Column: Atmospheric Architectural Lighting Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 45px rgba(215, 140, 67, 0.18)',
              border: '1px solid rgba(215, 140, 67, 0.25)',
              position: 'relative',
              aspectRatio: '4/3',
              backgroundColor: '#0a0a0e'
            }}>
              <img 
                src="/images/feature_lighting_interior.jpg" 
                alt="Architectural Ambient Lighting Installation"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Subtle ambient light gradient badge */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                backgroundColor: 'rgba(13, 13, 17, 0.88)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '10px',
                padding: '12px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                    Halo Ring Ambient Sculpture
                  </div>
                  <div style={{ fontSize: '11px', color: '#d78c43', marginTop: '2px' }}>
                    Double-Height Villa Living Room
                  </div>
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '20px'
                }}>
                  Live In-Store
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div>
            <div className="eyebrow-tag">\ FEATURES \</div>
            
            <h2 className="display-title" style={{
              fontSize: 'clamp(30px, 3.6vw, 46px)',
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              What Makes Our Offering Seamless
            </h2>

            <p style={{
              fontSize: '15px',
              color: '#ffffff',
              fontWeight: 600,
              marginBottom: '14px',
              lineHeight: 1.4
            }}>
              Looking for a tailored lighting solution for your home or commercial space?
            </p>

            <p style={{
              fontSize: '14px',
              color: '#94a3b8',
              lineHeight: 1.7,
              marginBottom: '26px'
            }}>
              At Naman Fancy Light, we are dedicated to illuminating your spaces with creativity and optical precision. With our comprehensive expertise in lighting design for residential and luxury commercial environments, we are your premier partner for bringing your vision to life with bespoke fixtures.
            </p>

            {/* Checklist */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              marginBottom: '32px'
            }}>
              {checklist.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(215, 140, 67, 0.18)',
                    border: '1px solid #d78c43',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Check size={13} color="#d78c43" strokeWidth={3} />
                  </div>
                  <span style={{
                    fontSize: '14px',
                    color: '#e2e8f0',
                    lineHeight: 1.5,
                    fontWeight: 500
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                className="btn-amber"
                onClick={onExploreCatalog}
                style={{ padding: '12px 24px', fontSize: '13px' }}
              >
                Browse All Collections <ArrowRight size={14} />
              </button>

              <a
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '12px 20px', fontSize: '13px' }}
              >
                <MapPin size={14} color="#d78c43" /> Visit Kolhapur Studio
              </a>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
