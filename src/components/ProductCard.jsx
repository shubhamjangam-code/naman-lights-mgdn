import React, { useState } from 'react';
import { Eye, MapPin, Star, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const primaryImg = product.image || '/images/chandelier_cascade.png';
  const secondaryImg = product.secondaryImage || primaryImg;
  const badgeText = product.badge || (product.isFeatured ? "FEATURED LUXURY" : "WARM OPTICS");

  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(14px)',
        border: '1px solid ' + (isHovered || isPressed ? 'rgba(212, 175, 55, 0.85)' : 'rgba(212, 175, 55, 0.3)'),
        borderRadius: '12px',
        padding: 'var(--spacing-3)',
        boxShadow: isHovered || isPressed
          ? '0 18px 45px rgba(212, 175, 55, 0.22), 0 8px 25px rgba(15, 23, 42, 0.08)' 
          : '0 6px 24px rgba(15, 23, 42, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        height: '100%',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div>
        {/* Product Image Container with Primary-to-Secondary Toggle & Slide-up CTA */}
        <div 
          onClick={() => onQuickView(product)}
          style={{
            position: 'relative',
            aspectRatio: '4/3',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#0a0d12',
            marginBottom: 'var(--spacing-3)',
            cursor: 'pointer'
          }}
        >
          {/* Primary Product Image */}
          <img 
            src={primaryImg} 
            alt={product.name} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/chandelier_cascade.png';
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: isHovered && secondaryImg !== primaryImg ? 0 : 1,
              transform: isHovered ? 'scale(1.06)' : 'scale(1)',
              filter: isPressed ? 'brightness(1.15) contrast(1.08)' : 'brightness(1)',
              transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease',
              willChange: 'transform, opacity'
            }}
          />

          {/* Secondary Lifestyle / Light Switched-ON Image */}
          {secondaryImg && (
            <img 
              src={secondaryImg} 
              alt={`${product.name} lifestyle ambience`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = primaryImg;
              }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: isHovered && secondaryImg !== primaryImg ? 1 : 0,
                transform: isHovered ? 'scale(1.06)' : 'scale(1.02)',
                transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, opacity'
              }}
            />
          )}

          {/* 4. Subtle Luxury Badge Overlay (Shifts upward on hover) */}
          <div style={{
            position: 'absolute',
            top: 'var(--spacing-2)',
            left: 'var(--spacing-2)',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.95) 0%, rgba(166, 124, 19, 0.95) 100%)',
            color: '#ffffff',
            border: '1px solid rgba(255, 232, 158, 0.7)',
            borderRadius: '20px',
            padding: '3px 9px',
            fontSize: '9.5px',
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
            transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
            opacity: isHovered ? 0.95 : 1,
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
            zIndex: 3
          }}>
            <Sparkles size={10} color="#ffffff" /> {badgeText}
          </div>

          {/* Rating Badge Overlay */}
          <div style={{
            position: 'absolute',
            top: 'var(--spacing-2)',
            right: 'var(--spacing-2)',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(6px)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: 'var(--radius-subtle)',
            padding: '3px 8px',
            fontSize: '11px',
            color: 'var(--color-text-high-contrast)',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            zIndex: 3
          }}>
            <Star size={11} color="#c5a059" fill="#c5a059" /> {product.rating}
          </div>

          {/* 3. Slide-up "Quick View Spec" Button Bar (Slides up from bottom on hover) */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px',
            background: 'linear-gradient(to top, rgba(10, 13, 18, 0.88) 0%, rgba(10, 13, 18, 0) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: isHovered ? 1 : 0,
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
            zIndex: 4,
            pointerEvents: isHovered ? 'auto' : 'none'
          }}>
            <span 
              className="btn-gold" 
              style={{
                width: '100%',
                padding: '8px 14px',
                fontSize: '11px',
                justifyContent: 'center',
                fontWeight: 700,
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
              }}
            >
              <Eye size={13} /> QUICK SPEC VIEW
            </span>
          </div>
        </div>

        {/* Title and Tagline */}
        <div style={{ marginBottom: 'var(--spacing-2)' }}>
          <h3 style={{
            fontSize: '16px',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text-high-contrast)',
            fontWeight: 600,
            lineHeight: 1.3,
            transition: 'color 0.25s ease'
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

      {/* Footer CTA Action */}
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
            STORE STATUS
          </div>
          <div style={{
            fontSize: '11.5px',
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
          <MapPin size={12} /> VISIT SHOP
        </a>
      </div>
    </div>
  );
}
