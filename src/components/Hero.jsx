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
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(250, 249, 245, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
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
            <div className="hero-subtitle-entrance" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              backgroundColor: 'var(--color-gold-light)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '30px',
              padding: '6px 16px',
              marginBottom: 'var(--spacing-4)',
              boxShadow: '0 2px 8px rgba(212, 175, 55, 0.14)'
            }}>
              <Award size={14} color="var(--color-gold)" />
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#745618',
                textTransform: 'uppercase'
              }}>
                Architectural & Luxury Lighting Atelier
              </span>
            </div>

            {/* Main Luxury Title in Cormorant Garamond */}
            <h1 className="display-title hero-title-entrance" style={{
              fontSize: '46px',
              lineHeight: 1.15,
              marginBottom: 'var(--spacing-4)',
              color: 'var(--color-text-high-contrast)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600
            }}>
              Engineered Luminaires for <em style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600, color: 'var(--color-gold-hover)' }}>Discerning</em> Architectural Spaces
            </h1>

            <p className="hero-subtitle-entrance" style={{
              color: 'var(--color-text)',
              fontSize: '15px',
              lineHeight: 1.7,
              marginBottom: 'var(--spacing-6)',
              maxWidth: '540px',
              fontWeight: 400
            }}>
              Naman Fancy Light crafts museum-grade fixtures, bespoke Jhoomers, and modular magnetic track systems designed to elevate interior ambiance with precision 97+ CRI optical illumination.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-entrance" style={{
              display: 'flex',
              gap: 'var(--spacing-3)',
              flexWrap: 'wrap',
              marginBottom: 'var(--spacing-8)'
            }}>
              <button className="btn-gold" onClick={onExploreCatalog} style={{ padding: '14px 28px' }}>
                EXPLORE COLLECTION <ArrowRight size={15} />
              </button>

              <button className="btn-secondary" onClick={onOpenSimulator} style={{ padding: '14px 24px' }}>
                <Sparkles size={15} color="var(--color-gold)" /> AMBIANCE SIMULATOR
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--spacing-4)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: 'var(--spacing-5)'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-text-high-contrast)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700
                }}>
                  <Sun size={15} color="var(--color-gold)" /> 97+ CRI
                </div>
                <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                  Museum Natural Optics
                </div>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-text-high-contrast)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700
                }}>
                  <Sparkles size={15} color="var(--color-gold)" /> 2700K – 4000K
                </div>
                <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                  Tunable CCT Dimming
                </div>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-text-high-contrast)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700
                }}>
                  <ShieldCheck size={15} color="var(--color-gold)" /> 5-YEAR
                </div>
                <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', marginTop: '3px' }}>
                  Comprehensive Warranty
                </div>
              </div>
            </div>

          </div>

          {/* Right Showcase Column (Full Scale Hero Image) */}
          <div className="hero-image-entrance" style={{ width: '100%', minWidth: 0 }}>
            <div style={{
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1.5px solid var(--color-border-gold)',
              borderRadius: '16px',
              padding: '10px',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)',
              position: 'relative',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                width: '100%',
                minHeight: '520px',
                maxHeight: '680px',
                backgroundColor: '#0a0d12'
              }}>
                <img 
                  src="/images/chandelier.png" 
                  alt="Aura Ring Crystal Chandelier Full Scale Showcase"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '520px',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    display: 'block',
                    transition: 'transform 0.8s ease'
                  }}
                />

                {/* Subtle Luxury Gradient Vignette */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 13, 18, 0.85) 0%, rgba(10, 13, 18, 0.1) 50%, rgba(10, 13, 18, 0.25) 100%)',
                  pointerEvents: 'none'
                }} />
                
                {/* Floating Spec Tag with Gold Glassmorphism */}
                <div style={{
                  position: 'absolute',
                  bottom: 'var(--spacing-4)',
                  left: 'var(--spacing-4)',
                  right: 'var(--spacing-4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.25)',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div>
                    <div style={{ 
                      color: '#745618', 
                      fontSize: '10.5px', 
                      letterSpacing: '0.14em', 
                      textTransform: 'uppercase', 
                      fontWeight: 800,
                      marginBottom: '2px' 
                    }}>
                      GRAND STATEMENT JHOOMER
                    </div>
                    <div style={{ color: 'var(--color-text-high-contrast)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                      Solstice Cascade Multi-Tier Jhoomer
                    </div>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginTop: '2px' }}>
                      6,500 lm · DALI-2 Dimmable · Hand-Cut K9 Prisms
                    </div>
                  </div>
                  <span style={{
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #d4af37 0%, #aa8214 100%)',
                    border: '1px solid #ffe596',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.35)'
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
            gap: var(--spacing-6) !important;
          }
          .display-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  );
}
