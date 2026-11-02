import React from 'react';

export default function ProductCard({ product, onQuickView }) {
  // Collection label mapping to match reference format (e.g. CLASSIC COLLECTION, CEILING FIXTURES)
  const getCollectionLabel = (cat) => {
    switch (cat) {
      case 'chandeliers':
        return 'GRAND JHOOMER COLLECTION';
      case 'pendants':
        return 'MODERN PENDANT COLLECTION';
      case 'sconces':
        return 'ARCHITECTURAL WALL FIXTURES';
      case 'track':
        return 'MAGNETIC TRACK SYSTEMS';
      case 'table':
        return 'SCULPTURAL ACCENT COLLECTION';
      default:
        return 'LUXURY LIGHTING ATELIER';
    }
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s ease'
      }}
      className="prizma-product-item"
    >
      {/* 1. Square Image Container matching Reference Screenshot 2 */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1/1',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#0a0a0e',
          marginBottom: '16px'
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
            transition: 'transform 0.4s ease, filter 0.4s ease',
            filter: 'brightness(0.92) contrast(1.05)'
          }}
          className="product-showcase-img"
        />

        {/* Subtle hover vignette glow */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 60%, rgba(10, 10, 14, 0.6) 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* 2. Clean Typography Exactly Matching Reference Screenshot 1 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
        {/* Product Title on its own line in Clean Crisp Sans-Serif */}
        <h3 
          style={{
            fontSize: '21px',
            fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
            color: '#ffffff',
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: '-0.015em',
            margin: 0,
            transition: 'color 0.25s ease'
          }}
          className="product-title-text"
        >
          {product.name}
        </h3>

        {/* Line 2: Sub-label Category in Warm Sand/Tan Gold matching Screenshot 1 */}
        <div style={{
          marginTop: '2px'
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
            color: '#caa374',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            fontWeight: 700
          }}>
            {getCollectionLabel(product.category)}
          </span>
        </div>
      </div>

      <style>{`
        .prizma-product-item:hover .product-showcase-img {
          transform: scale(1.04);
          filter: brightness(1.05) contrast(1.08) !important;
        }
        .prizma-product-item:hover .product-title-text {
          color: #caa374;
        }
      `}</style>
    </div>
  );
}
