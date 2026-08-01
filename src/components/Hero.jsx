import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Sun, Star, Award } from 'lucide-react';

export default function Hero({ onExploreCatalog, onOpenSimulator }) {
  return (
    <section style={{
      backgroundColor: 'transparent',
      borderBottom: '1px solid var(--color-border)',
      padding: 'var(--spacing-10) 0 var(--spacing-8) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Luxury Ambient Radial Light Accents */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '10%',
        width: 'min(600px, 90vw)',
        height: 'min(600px, 90vw)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(250, 249, 245, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: 'min(450px, 80vw)',
        height: 'min(450px, 80vw)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108, 158, 46, 0.1) 0%, rgba(250, 249, 245, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 'var(--spacing-8)',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Text Column */}
          <div>
            {/* Luxury Subtitle Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              backgroundColor: 'var(--color-gold-light)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '30px',
              padding: '4px 14px',
              marginBottom: 'var(--spacing-3)',
              boxShadow: '0 2px 8px rgba(212, 175, 55, 0.14)'
            }}>
              <Award size={13} color="var(--color-gold)" />
              <span style={{
                fontSize: '10.5px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#745618',
                textTransform: 'uppercase'
              }}>
                Luxury Lighting Store · Kolhapur
              </span>
            </div>

            {/* Main Luxury Title */}
            <h1 className="display-title" style={{
              fontSize: '38px',
              lineHeight: 1.2,
              marginBottom: 'var(--spacing-4)',
              color: 'var(--color-text-high-contrast)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600
            }}>
              Luxury Architectural & Decorative <em style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600, color: 'var(--color-gold-hover)' }}>Lighting</em>
            </h1>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-3)',
              flexWrap: 'wrap',
              marginBottom: 'var(--spacing-6)'
            }}>
              <button className="btn-gold" onClick={onExploreCatalog} style={{ padding: '12px 24px', fontSize: '13px' }}>
                EXPLORE COLLECTION <ArrowRight size={14} />
              </button>

              <button className="btn-secondary" onClick={onOpenSimulator} style={{ padding: '12px 20px', fontSize: '13px' }}>
                <Sparkles size={14} color="var(--color-gold)" /> LIGHT SIMULATOR
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--spacing-3)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: 'var(--spacing-4)'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--color-text-high-contrast)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700
                }}>
                  <Sun size={14} color="var(--color-gold)" /> 97+ High CRI
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                  Natural Optics
                </div>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--color-text-high-contrast)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700
                }}>
                  <Sparkles size={14} color="var(--color-gold)" /> 2700K – 4000K
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                  Tunable Warmth
                </div>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--color-text-high-contrast)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700
                }}>
                  <ShieldCheck size={14} color="var(--color-gold)" /> 5-Year
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                  Store Warranty
                </div>
              </div>
            </div>

          </div>

          {/* Right Showcase Card Column */}
          <div>
            <div style={{
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '12px',
              padding: '10px',
              boxShadow: 'var(--shadow-card)',
              position: 'relative'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundColor: '#0a0d12'
              }}>
                <img 
                  src="/images/chandelier.png" 
                  alt="Aura Ring Crystal Chandelier Showcase"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Floating Spec Tag with Gold Glassmorphism */}
                <div style={{
                  position: 'absolute',
                  bottom: 'var(--spacing-2)',
                  left: 'var(--spacing-2)',
                  right: 'var(--spacing-2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: 'var(--radius-subtle)',
                  padding: '10px var(--spacing-3)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                }}>
                  <div>
                    <div style={{ color: 'var(--color-text-high-contrast)', fontSize: '14.5px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                      Aura Ring Crystal Chandelier
                    </div>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '11px', marginTop: '1px' }}>
                      4,200 lm · Dimmable · K9 Crystal
                    </div>
                  </div>
                  <span style={{
                    color: '#745618',
                    backgroundColor: 'var(--color-gold-light)',
                    border: '1px solid var(--color-border-gold)',
                    borderRadius: '20px',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    whiteSpace: 'nowrap'
                  }}>
                    IN-STORE EXCLUSIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-4) !important;
          }
          .display-title {
            font-size: 24px !important;
            line-height: 1.25 !important;
            margin-bottom: var(--spacing-2) !important;
          }
        }
      `}</style>
    </section>
  );
}
