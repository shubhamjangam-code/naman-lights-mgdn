import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCatalog({ 
  products, 
  activeCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange,
  onQuickView
}) {
  const scrollContainerRef = useRef(null);

  // Filter products by Category & Search
  let filtered = products.filter(p => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      (p.specs?.material && p.specs.material.toLowerCase().includes(query));
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    
    return query ? matchesSearch : (matchesCategory && matchesSearch);
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    onSelectCategory('all');
    if (onSearchChange) onSearchChange('');
  };

  const scrollToStore = () => {
    const showroomEl = document.getElementById('showroom');
    if (showroomEl) showroomEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catalog" className="section" style={{
      backgroundColor: 'transparent',
      border: 'none',
      padding: '80px 0 100px 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Clean Minimal Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div>
            <h2 className="display-title" style={{
              fontSize: 'clamp(32px, 3.8vw, 50px)',
              lineHeight: 1.15,
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              marginBottom: '12px'
            }}>
              Shaping Lights, Shaping Spaces
            </h2>

            <p style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#94a3b8',
              margin: 0,
              maxWidth: '560px'
            }}>
              Take a look at our selection of top picks you’ve been searching for. We’ve got everything for your lighting needs.
            </p>
          </div>

          <button 
            className="btn-amber"
            onClick={scrollToStore}
            style={{
              padding: '13px 32px',
              fontSize: '14px',
              borderRadius: '8px'
            }}
          >
            Our Store
          </button>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '32px',
          scrollbarWidth: 'none'
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                if (onSearchChange) onSearchChange('');
              }}
              style={{
                backgroundColor: activeCategory === cat.id ? 'rgba(215, 140, 67, 0.2)' : 'transparent',
                color: activeCategory === cat.id ? '#d78c43' : '#94a3b8',
                border: activeCategory === cat.id ? '1px solid #d78c43' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '6px 16px',
                fontSize: '12px',
                fontFamily: 'var(--font-body)',
                fontWeight: activeCategory === cat.id ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Notice if Active */}
        {searchQuery && (
          <div style={{
            color: '#94a3b8',
            fontSize: '13px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span>Showing results for "<span style={{ color: '#d78c43', fontWeight: 700 }}>{searchQuery}</span>" ({filtered.length} items)</span>
            <button
              onClick={handleResetFilters}
              style={{
                background: 'rgba(215, 140, 67, 0.2)',
                border: '1px solid #d78c43',
                color: '#d78c43',
                borderRadius: '6px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Clear ✕
            </button>
          </div>
        )}

        {/* Product Carousel Grid with Left & Right Arrows matching Screenshot 2 */}
        {filtered.length > 0 ? (
          <div style={{ position: 'relative', width: '100%' }}>
            
            {/* Left Carousel Arrow Button */}
            <button
              onClick={scrollLeft}
              className="prizma-carousel-arrow"
              style={{
                position: 'absolute',
                left: '-24px',
                top: '40%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(18, 18, 24, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d78c43';
                e.currentTarget.style.color = '#d78c43';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#ffffff';
              }}
              aria-label="Previous Products"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Scrollable / Grid Products Container */}
            <div
              ref={scrollContainerRef}
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: 'calc(25% - 18px)',
                gap: '24px',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                padding: '8px 4px 20px 4px'
              }}
              className="prizma-carousel-track"
            >
              {filtered.map(product => (
                <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
                  <ProductCard
                    product={product}
                    onQuickView={onQuickView}
                  />
                </div>
              ))}
            </div>

            {/* Right Carousel Arrow Button */}
            <button
              onClick={scrollRight}
              className="prizma-carousel-arrow"
              style={{
                position: 'absolute',
                right: '-24px',
                top: '40%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(18, 18, 24, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d78c43';
                e.currentTarget.style.color = '#d78c43';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#ffffff';
              }}
              aria-label="Next Products"
            >
              <ChevronRight size={22} />
            </button>

          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#94a3b8'
          }}>
            No lighting fixtures found matching "<strong>{searchQuery}</strong>".
            <div style={{ marginTop: '16px' }}>
              <button 
                className="btn-amber"
                onClick={handleResetFilters}
                style={{ padding: '10px 20px', fontSize: '12.5px' }}
              >
                Reset Filter & View All
              </button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .prizma-carousel-track::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 1100px) {
          .prizma-carousel-track {
            grid-auto-columns: calc(33.333% - 16px) !important;
          }
        }

        @media (max-width: 768px) {
          .prizma-carousel-track {
            grid-auto-columns: calc(50% - 12px) !important;
          }
        }

        @media (max-width: 640px) {
          .prizma-carousel-arrow {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .prizma-carousel-track {
            grid-auto-columns: 85% !important;
          }
        }
      `}</style>
    </section>
  );
}
