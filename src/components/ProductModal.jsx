import React from 'react';
import { X, MapPin, Phone, Sun, Sliders } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(12px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#15151c',
          border: '1px solid rgba(215, 140, 67, 0.3)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(215, 140, 67, 0.15)',
          position: 'relative',
          padding: '28px'
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            borderRadius: '8px',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(215, 140, 67, 0.2)';
            e.currentTarget.style.color = '#d78c43';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          <X size={18} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '28px',
          alignItems: 'start'
        }} className="modal-grid">

          {/* Product Media Column */}
          <div>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#0a0a0e',
              aspectRatio: '4/3',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '16px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
            }}>
              <img 
                src={product.image} 
                alt={product.name} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/chandelier_cascade.png';
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Quick Feature Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '10px 12px',
                fontSize: '12px',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Sun size={16} color="#d78c43" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 700 }}>{product.specs?.lumens || 'High Flux'}</div>
                  <div style={{ fontSize: '10.5px' }}>Luminous Output</div>
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '10px 12px',
                fontSize: '12px',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Sliders size={16} color="#d78c43" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 700 }}>{product.specs?.cri || '> 95 CRI'}</div>
                  <div style={{ fontSize: '10.5px' }}>Color Rendering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specification Data Column */}
          <div>
            <div style={{
              fontSize: '11px',
              fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
              color: '#caa374',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              fontWeight: 700,
              marginBottom: '8px'
            }}>
              \ {product.category.toUpperCase()} COLLECTION \
            </div>
            <h2 style={{
              color: '#ffffff',
              fontSize: '26px',
              fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
              marginBottom: '10px'
            }}>
              {product.name}
            </h2>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(215, 140, 67, 0.15)',
              border: '1px solid rgba(215, 140, 67, 0.35)',
              borderRadius: '8px',
              padding: '8px 14px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '18px'
            }}>
              <MapPin size={14} color="#d78c43" />
              <span>In-Store Exclusive — Visit Kolhapur Showroom to Experience</span>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '20px' }}>
              {product.description}
            </p>

            {/* Technical Specifications Table */}
            <div style={{
              backgroundColor: '#1b1b24',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '16px',
              marginBottom: '22px'
            }}>
              <div style={{
                fontSize: '12px',
                color: '#d78c43',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                Architectural Specifications
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '6px' }}>
                  <span style={{ color: '#94a3b8' }}>Color Temp (CCT):</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{product.specs?.kelvin || '2700K Warm'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '6px' }}>
                  <span style={{ color: '#94a3b8' }}>Material & Finish:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{product.specs?.material || 'Electroplated Gold'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '6px' }}>
                  <span style={{ color: '#94a3b8' }}>Dimming Protocols:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{product.specs?.dimming || 'Phase-Cut / DALI'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '6px' }}>
                  <span style={{ color: '#94a3b8' }}>Power Consumption:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{product.specs?.power || '48W'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Fixture Dimensions:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{product.specs?.dimensions || 'Standard'}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber" 
                style={{ flex: 1, textDecoration: 'none', textAlign: 'center', justifyContent: 'center', padding: '12px' }}
              >
                <MapPin size={15} /> VISIT SHOP TO BUY
              </a>

              <a 
                href="tel:+919876543210"
                className="btn-secondary"
                style={{ textDecoration: 'none', padding: '12px 18px' }}
              >
                <Phone size={15} color="#d78c43" /> CALL STORE
              </a>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
