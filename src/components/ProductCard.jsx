import React, { useState } from 'react';
import { Eye, MapPin, Star, Zap, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div 
      className={isPressed ? 'lamp-switched-on' : ''}
      style={{
        backgroundColor: isPressed ? 'rgba(255, 253, 245, 0.98)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(14px)',
        border: isPressed ? '1.5px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '10px',
        padding: 'var(--spacing-3)',
        boxShadow: isPressed 
          ? '0 0 25px rgba(212, 175, 55, 0.35), 0 10px 30px rgba(15, 23, 42, 0.1)' 
          : '0 8px 30px rgba(15, 23, 42, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        transition: 'all 0.25s ease',
        height: '100%',
        position: 'relative',
        zIndex: 1
      }}
      onMouseEnter={(e) => {
        if (!isPressed) {
          e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.8)';
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 18px 45px rgba(212, 175, 55, 0.22)';
        }
      }}
      onMouseLeave={(e) => {
        setIsPressed(false);
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(15, 23, 42, 0.05)';
      }}
    >
      <div>
        {/* Product Image Container */}
        <div 
          onClick={() => onQuickView(product)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
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
              filter: isPressed 
                ? 'brightness(1.15) contrast(1.08) saturate(1.12)' 
                : 'brightness(1) contrast(1) saturate(1)',
              transition: 'filter 0.3s ease, transform 0.3s ease',
              transform: isPressed ? 'scale(1.02)' : 'scale(1)'
            }}
          />

          {/* Natural Touch Glow Rim */}
          <div style={{
            position: 'absolute',
            inset: 0,
            boxShadow: isPressed ? 'inset 0 0 30px rgba(212, 175, 55, 0.4)' : 'none',
            borderRadius: '6px',
            pointerEvents: 'none',
            transition: 'box-shadow 0.3s ease'
          }} />

          {/* Premium Ambient Indicator Badge */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--spacing-2)',
            left: 'var(--spacing-2)',
            background: isPressed 
              ? 'linear-gradient(135deg, #d4af37 0%, #aa8214 100%)' 
              : 'rgba(15, 23, 42, 0.75)',
            color: '#ffffff',
            border: '1px solid ' + (isPressed ? '#ffe89e' : 'rgba(255,255,255,0.3)'),
            borderRadius: '14px',
            padding: '3px 9px',
            fontSize: '10px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            boxShadow: isPressed ? '0 0 12px rgba(212,175,55,0.5)' : 'none',
            transition: 'all 0.3s ease'
          }}>
            {isPressed ? (
              <>
                <Sparkles size={11} color="#ffffff" /> LIGHTING SWITCHED ON
              </>
            ) : (
              <>
                <Sparkles size={11} color="#ffd700" /> PRESS & HOLD TO LIGHT ON
              </>
            )}
          </div>

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
