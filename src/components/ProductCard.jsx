import React from 'react';
import { Eye, MapPin, Star } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(14px)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '10px',
      padding: 'var(--spacing-3)',
      boxShadow: '0 8px 30px rgba(15, 23, 42, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      height: '100%',
      position: 'relative',
      zIndex: 1
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.8)';
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = '0 18px 45px rgba(212, 175, 55, 0.22)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(15, 23, 42, 0.05)';
    }}
    >
      <div>
        {/* Product Image Container */}
        <div 
          onClick={() => onQuickView(product)}
          style={{
            position: 'relative',
            aspectRatio: '4/3',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: '#0a0d12',
            marginBottom: 'var(--spacing-3)',
            cursor: 'pointer'
          }}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/chandelier_cascade.png';
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.4s ease'
            }}
          />

          {/* Quick View Hover Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            opacity: 0,
            transition: 'opacity 0.25s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
          >
            <span className="btn-secondary" style={{ padding: '8px 16px', fontSize: '12px' }}>
              <Eye size={13} color="var(--color-gold)" /> QUICK SPEC VIEW
            </span>
          </div>

          {/* Rating Badge */}
          <div style={{
            position: 'absolute',
            top: 'var(--spacing-2)',
            right: 'var(--spacing-2)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: 'var(--radius-subtle)',
            padding: '3px 8px',
            fontSize: '11px',
            color: 'var(--color-text-high-contrast)',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
          }}>
            <Star size={11} color="#c5a059" fill="#c5a059" /> {product.rating} ({product.reviewsCount})
          </div>
        </div>

        {/* Title and Tagline */}
        <div style={{ marginBottom: 'var(--spacing-2)' }}>
          <h3 style={{
            fontSize: '16.5px',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text-high-contrast)',
            fontWeight: 600,
            lineHeight: 1.3
          }}>
            {product.name}
          </h3>

          <div style={{
            color: 'var(--color-text-secondary)',
            fontSize: '12px',
            marginTop: '4px',
            lineHeight: 1.35,
            fontWeight: 400,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {product.tagline}
          </div>
        </div>
      </div>

      {/* Footer Location CTA & Visit Shop Action */}
      <div style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: 'var(--spacing-2)',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        gap: '8px'
      }}>
        <div>
          <div style={{ fontSize: '9px', color: '#745618', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            PURCHASE LOCATION
          </div>
          <div style={{
            fontSize: '12px',
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-high-contrast)',
            fontWeight: 700
          }}>
            In-Store Exclusive
          </div>
        </div>

        <a 
          href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold" 
          style={{ padding: '6px 12px', fontSize: '11px', gap: '4px', textDecoration: 'none', whiteSpace: 'nowrap' }}
        >
          <MapPin size={12} /> VISIT SHOP TO BUY
        </a>
      </div>
    </div>
  );
}
