import React from 'react';
import { X, Check, Shield, Download, MapPin, Phone, Sun, Sliders, Layers } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(8px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-4)'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-subtle)',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-card)',
          position: 'relative',
          padding: 'var(--spacing-5)'
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 'var(--spacing-3)',
            right: 'var(--spacing-3)',
            background: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-high-contrast)',
            borderRadius: 'var(--radius-subtle)',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-5)',
          alignItems: 'start'
        }} className="modal-grid">

          {/* Product Media Column */}
          <div>
            <div style={{
              borderRadius: 'var(--radius-subtle)',
              overflow: 'hidden',
              backgroundColor: '#0f172a',
              aspectRatio: '4/3',
              border: '1px solid var(--color-border)',
              marginBottom: 'var(--spacing-3)'
            }}>
              <img 
                src={product.image} 
                alt={product.name} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/chandelier_cascade.png';
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Quick Feature Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-2)' }}>
              <div style={{
                backgroundColor: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-subtle)',
                padding: 'var(--spacing-2)',
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)'
              }}>
                <Sun size={14} color="var(--color-primary)" />
                <div>
                  <div style={{ color: 'var(--color-text-high-contrast)', fontWeight: 700 }}>{product.specs.lumens}</div>
                  <div>Luminous Flux</div>
                </div>
              </div>

              <div style={{
                backgroundColor: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-subtle)',
                padding: 'var(--spacing-2)',
                fontSize: 'var(--font-size-small)',
                color: 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)'
              }}>
                <Sliders size={14} color="var(--color-primary)" />
                <div>
                  <div style={{ color: 'var(--color-text-high-contrast)', fontWeight: 700 }}>{product.specs.cri}</div>
                  <div>Color Rendering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specification Data Column */}
          <div>
            <div className="section-subtitle">{product.category.toUpperCase()} FIXTURE</div>
            <h2 className="h1" style={{ color: 'var(--color-text-high-contrast)', marginBottom: 'var(--spacing-1)' }}>
              {product.name}
            </h2>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--color-gold-light)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-subtle)',
              padding: '8px 14px',
              color: '#745618',
              fontSize: '12px',
              fontWeight: 700,
              marginBottom: 'var(--spacing-3)'
            }}>
              <MapPin size={15} color="var(--color-gold)" /> IN-STORE EXCLUSIVE — Visit Showroom in Kolhapur to Purchase
            </div>

            <p style={{ color: 'var(--color-text)', fontSize: 'var(--font-size-body)', lineHeight: 1.5, marginBottom: 'var(--spacing-4)' }}>
              {product.description}
            </p>

            {/* Technical Specifications Table */}
            <div style={{
              backgroundColor: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-subtle)',
              padding: 'var(--spacing-3)',
              marginBottom: 'var(--spacing-4)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-h2)',
                color: 'var(--color-text-high-contrast)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                marginBottom: 'var(--spacing-2)',
                letterSpacing: '0.04em'
              }}>
                ARCHITECTURAL SPECIFICATIONS
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)', fontSize: 'var(--font-size-small)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Color Temp (CCT):</span>
                  <span style={{ color: 'var(--color-text-high-contrast)', fontWeight: 600 }}>{product.specs.kelvin}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Material & Finish:</span>
                  <span style={{ color: 'var(--color-text-high-contrast)', fontWeight: 600 }}>{product.specs.material}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Dimming Protocols:</span>
                  <span style={{ color: 'var(--color-text-high-contrast)', fontWeight: 600 }}>{product.specs.dimming}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Power Consumption:</span>
                  <span style={{ color: 'var(--color-text-high-contrast)', fontWeight: 600 }}>{product.specs.power}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Fixture Dimensions:</span>
                  <span style={{ color: 'var(--color-text-high-contrast)', fontWeight: 600 }}>{product.specs.dimensions}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold" 
                style={{ flex: 1, textDecoration: 'none', textAlign: 'center', justifyContent: 'center' }}
              >
                <MapPin size={15} /> VISIT SHOP TO BUY
              </a>

              <a 
                href="tel:+919876543210"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                <Phone size={15} /> CALL STORE
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
