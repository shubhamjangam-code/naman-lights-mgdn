import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, MapPin, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Header({ 
  cartCount, 
  onOpenCart, 
  onSelectCategory,
  searchQuery,
  onSearchChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (queryToUse = searchQuery) => {
    if (!queryToUse.trim()) return;
    onSearchChange(queryToUse);
    onSelectCategory('all');
    setSearchOpen(false);
    setTimeout(() => {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchSubmit(searchQuery);
    }
  };

  const suggestions = searchQuery.trim() === '' ? [] : PRODUCTS.filter(p => {
    const q = searchQuery.toLowerCase().trim();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      (p.specs?.material && p.specs.material.toLowerCase().includes(q))
    );
  }).slice(0, 5);

  return (
    <header style={{
      backgroundColor: isScrolled ? 'rgba(13, 13, 17, 0.88)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 100,
      boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
      transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease'
    }}>

      {/* Main Header Container */}
      <div className="container header-main-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
        gap: '24px'
      }}>
        {/* Brand Name on the Left */}
        <a href="#" style={{ 
          textDecoration: 'none', 
          display: 'inline-flex', 
          alignItems: 'center',
          flexShrink: 0
        }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
            fontSize: 'clamp(22px, 2.5vw, 29px)',
            fontWeight: 500,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            whiteSpace: 'nowrap'
          }}>
            Naman<span style={{ color: '#d78c43' }}> Lights</span>
          </span>
        </a>

        {/* Opposite (Right) Side: Navigation Links & Action Tools matching Reference Screenshot 1 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '34px',
          marginLeft: 'auto'
        }}>
          {/* Clean Spacious Nav Links */}
          <nav style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }} className="desktop-only">
            <a 
              href="#services" 
              style={{
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
                color: '#d1d5db',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                letterSpacing: '0.01em',
                padding: '4px 0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d78c43'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              Design
            </a>

            <a 
              href="#projects" 
              style={{
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
                color: '#d1d5db',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                letterSpacing: '0.01em',
                padding: '4px 0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d78c43'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              Projects
            </a>

            <a 
              href="#catalog" 
              style={{
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
                color: '#d1d5db',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                letterSpacing: '0.01em',
                padding: '4px 0'
              }}
              onClick={() => onSelectCategory('all')}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d78c43'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              Collections
            </a>

            <a 
              href="#showroom" 
              style={{
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', var(--font-body), sans-serif",
                color: '#d1d5db',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                letterSpacing: '0.01em',
                padding: '4px 0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d78c43'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
            >
              Contacts
            </a>
          </nav>

          {/* Action Tools: Minimal Search & Bag (No bulky orange button) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* Search Toggle Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{
              background: searchOpen ? 'rgba(215, 140, 67, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              border: searchOpen ? '1px solid #d78c43' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-subtle)',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '9px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            title="Search Products"
            aria-label="Toggle Search Bar"
          >
            {searchOpen ? <X size={18} color="#d78c43" /> : <Search size={18} color="#d78c43" />}
          </button>

          {/* Cart Bag Icon with Count Badge */}
          <button
            onClick={onOpenCart}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-subtle)',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '9px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all 0.2s ease'
            }}
            title="View Cart / Inquiry"
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag size={18} color="#d78c43" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#d78c43',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 700,
                borderRadius: '10px',
                minWidth: '17px',
                height: '17px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 3px',
                border: '1.5px solid #0d0d11'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-subtle)',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '9px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} color="#d78c43" /> : <Menu size={20} color="#ffffff" />}
          </button>
        </div>
      </div>
    </div>

      {/* Search Overlay Drawer */}
      {searchOpen && (
        <div style={{
          backgroundColor: '#131318',
          borderBottom: '1px solid #d78c43',
          padding: '16px var(--spacing-5)',
          animation: 'fadeIn 0.2s ease-out forwards',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)'
        }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#1b1b22',
              border: '1px solid rgba(215, 140, 67, 0.4)',
              borderRadius: 'var(--radius-subtle)',
              padding: '6px 14px'
            }}>
              <Search size={18} color="#d78c43" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search chandeliers, pendants, sconces, K9 crystal..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                style={{
                  border: 'none',
                  background: 'transparent',
                  padding: '8px 0',
                  fontSize: '14px',
                  width: '100%',
                  color: '#ffffff',
                  outline: 'none'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={() => handleSearchSubmit()}
                className="btn-amber"
                style={{ padding: '6px 16px', fontSize: '12px' }}
              >
                Search
              </button>
            </div>

            {/* Quick Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div style={{
                marginTop: '10px',
                backgroundColor: '#1b1b24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-subtle)',
                overflow: 'hidden'
              }}>
                <div style={{ padding: '8px 14px', fontSize: '11px', color: '#d78c43', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  Suggested Luminaires
                </div>
                {suggestions.map(p => (
                  <div
                    key={p.id}
                    onClick={() => handleSearchSubmit(p.name)}
                    style={{
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(215, 140, 67, 0.12)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={p.image} alt={p.name} style={{ width: '32px', height: '32px', borderRadius: '4px', objectFit: 'cover' }} />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>{p.name}</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>{p.tagline}</div>
                      </div>
                    </div>
                    <ArrowRight size={14} color="#d78c43" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#0f0f14',
          borderBottom: '1px solid rgba(215, 140, 67, 0.3)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          animation: 'fadeIn 0.2s ease-out forwards'
        }} className="mobile-only">
          <a
            href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber"
            style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
          >
            <MapPin size={16} /> VISIT SHOWROOM (MAP)
          </a>

          <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', margin: '4px 0' }} />

          <a 
            href="#catalog" 
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14.5px', padding: '8px 0', fontWeight: 600 }}
            onClick={() => { setMobileMenuOpen(false); onSelectCategory('all'); }}
          >
            Collections
          </a>
          <a 
            href="#services" 
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14.5px', padding: '8px 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services & Fixtures
          </a>
          <a 
            href="#projects" 
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14.5px', padding: '8px 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects Showcase
          </a>
          <a 
            href="#showroom" 
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14.5px', padding: '8px 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Showroom Location
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .desktop-only { display: none !important; }

          .header-main-container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }

        @media (max-width: 640px) {
          .header-main-container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }

        @media (min-width: 981px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </header>
  );
}
