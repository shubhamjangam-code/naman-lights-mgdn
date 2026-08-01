import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';
import { SlidersHorizontal, ArrowUpDown, Sparkles } from 'lucide-react';

export default function ProductCatalog({ 
  products, 
  activeCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange,
  onQuickView, 
  onAddToCart 
}) {
  const [sortBy, setSortBy] = useState('featured');

  // Filter products by Category & Search
  let filtered = products.filter(p => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.specs.material.toLowerCase().includes(query);
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    
    // When a search query is typed, search across the whole store catalog
    return query ? matchesSearch : (matchesCategory && matchesSearch);
  });

  // Sort products
  if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const handleResetFilters = () => {
    onSelectCategory('all');
    if (onSearchChange) {
      onSearchChange('');
    }
  };

  return (
    <section id="catalog" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-1)' }}>
          <div className="section-subtitle">CURATED ARCHITECTURAL COLLECTION</div>
          <h2 className="display-title" style={{ fontSize: '28px', color: 'var(--color-text-high-contrast)' }}>
            Precision Lighting Fixtures
          </h2>
        </div>

        {/* Filters & Sorting Toolbar */}
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-gold)',
          borderRadius: 'var(--radius-subtle)',
          padding: 'var(--spacing-3)',
          marginBottom: 'var(--spacing-6)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--spacing-3)',
          boxShadow: 'var(--shadow-low)'
        }}>
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-2)',
            overflowX: 'auto',
            paddingBottom: '2px',
            maxWidth: '100%'
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  if (onSearchChange) onSearchChange('');
                }}
                style={{
                  backgroundColor: activeCategory === cat.id ? 'var(--color-gold)' : 'var(--color-bg-subtle)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--color-text-high-contrast)',
                  border: '1px solid ' + (activeCategory === cat.id ? 'var(--color-gold)' : 'var(--color-border)'),
                  borderRadius: 'var(--radius-subtle)',
                  padding: '8px 18px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: activeCategory === cat.id ? 700 : 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpDown size={12} color="var(--color-gold)" /> SORT:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-high-contrast)',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 600
              }}
            >
              <option value="featured">Featured Collection</option>
              <option value="rating">Highest Rated Fixtures</option>
            </select>
          </div>
        </div>

        {/* Results Info Bar */}
        {searchQuery && (
          <div style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--font-size-small)',
            marginBottom: 'var(--spacing-4)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <span>Showing results for "<span style={{ color: 'var(--color-gold-hover)', fontWeight: 700 }}>{searchQuery}</span>" ({filtered.length} items found)</span>
            <button
              onClick={handleResetFilters}
              style={{
                background: 'var(--color-gold-light)',
                border: '1px solid var(--color-border-gold)',
                color: '#745618',
                borderRadius: '4px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Clear Search ✕
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid-responsive">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-8) 0',
            backgroundColor: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-subtle)',
            boxShadow: 'var(--shadow-low)'
          }}>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-h1)', marginBottom: 'var(--spacing-2)' }}>
              No lighting fixtures found matching "<strong>{searchQuery}</strong>".
            </div>
            <button 
              className="btn-gold"
              onClick={handleResetFilters}
              style={{ padding: '10px 22px', fontSize: '13px', marginTop: '8px' }}
            >
              Reset Search & View All Collection
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
