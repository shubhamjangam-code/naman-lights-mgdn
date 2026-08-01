import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, MapPin, ArrowRight } from 'lucide-react';
import JhoomerLogo from './JhoomerLogo';
import { PRODUCTS } from '../data/products';

const InstagramIcon = ({ size = 12, color = "#e1306c" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Header({ 
  cartCount, 
  onOpenCart, 
  onOpenConsultation, 
  activeCategory, 
  onSelectCategory,
  searchQuery,
  onSearchChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--color-border-gold)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-low)'
    }}>
      {/* Micro Luxury Top Info Bar with Exact Address & Map Link */}
      <div className="top-info-bar">
        <div className="top-info-left">
          <a 
            href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="top-bar-link address-link"
          >
            <MapPin size={12} color="var(--color-gold)" style={{ flexShrink: 0 }} />
            <span>Main Road, Gandhi Nagar, near Tawde Hotel, Kolhapur</span>
          </a>
        </div>
        
        <div className="top-info-right">
          <a 
            href="tel:+919876543210" 
            className="top-bar-link phone-link"
          >
            <Phone size={12} color="var(--color-gold)" style={{ flexShrink: 0 }} />
            <span>+91 98765 43210</span>
          </a>
          
          <span className="top-bar-divider">|</span>
          
          <a 
            href="https://www.instagram.com/namanfancylight_gnr?igsh=MTk0amoxZ3ozNjVvbg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="top-bar-link instagram-link"
          >
            <InstagramIcon size={12} color="#e1306c" />
            <span>@namanfancylight_gnr</span>
          </a>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        height: '72px',
        gap: '8px'
      }}>
        {/* Brand Logo & Name Block */}
        <a href="#" style={{ 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          flexShrink: 1,
          minWidth: 0
        }}>
          
          {/* 3D Live Royal Jhoomer Medallion Logo */}
          <JhoomerLogo size={48} iconSize={32} />

          {/* Artistic Marcellus Typography for Brand Name */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <div 
              className="brand-title-text"
              style={{
                fontFamily: 'var(--font-logo)',
                fontSize: '19px',
                fontWeight: 400,
                letterSpacing: '0.08em',
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'baseline',
                gap: '5px',
                whiteSpace: 'nowrap'
              }}
            >
              <span className="brand-name-text" style={{ fontWeight: 600 }}>NAMAN</span>
              <span className="brand-gold-text">FANCY LIGHT</span>
            </div>
            <div 
              className="brand-subtitle-text"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '8.5px',
                letterSpacing: '0.15em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginTop: '2px',
                whiteSpace: 'nowrap'
              }}
            >
              Architectural Lighting Atelier
            </div>
          </div>

        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center'
        }} className="desktop-only">
          <a 
            href="#catalog" 
            style={{
              textDecoration: 'none',
              fontSize: '13px',
              fontFamily: 'var(--font-body)',
              color: activeCategory === 'all' ? 'var(--color-gold-hover)' : 'var(--color-text-high-contrast)',
              fontWeight: activeCategory === 'all' ? 700 : 600,
              transition: 'all 0.2s ease',
              letterSpacing: '0.06em',
              position: 'relative',
              padding: '6px 0'
            }}
            onClick={() => onSelectCategory('all')}
          >
            COLLECTION
            {activeCategory === 'all' && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: 'var(--color-gold)',
                borderRadius: '2px'
              }} />
            )}
          </a>

          <a 
            href="#ambiance" 
            style={{
              textDecoration: 'none',
              fontSize: '13px',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-high-contrast)',
              fontWeight: 600,
              transition: 'color 0.2s ease',
              letterSpacing: '0.06em',
              padding: '6px 0'
            }}
          >
            AMBIANCE SIMULATOR
          </a>

          <a 
            href="#specs" 
            style={{
              textDecoration: 'none',
              fontSize: '13px',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-high-contrast)',
              fontWeight: 600,
              transition: 'color 0.2s ease',
              letterSpacing: '0.06em',
              padding: '6px 0'
            }}
          >
            SPECIFICATIONS
          </a>

          <a 
            href="#showroom" 
            style={{
              textDecoration: 'none',
              fontSize: '13px',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-high-contrast)',
              fontWeight: 600,
              transition: 'color 0.2s ease',
              letterSpacing: '0.06em',
              padding: '6px 0'
            }}
          >
            SHOWROOM
          </a>
        </nav>

        {/* Action Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Search Toggle Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{
              background: searchOpen ? 'var(--color-gold-light)' : 'none',
              border: searchOpen ? '1px solid var(--color-gold)' : '1px solid var(--color-border)',
              borderRadius: 'var(--radius-subtle)',
              color: 'var(--color-text-high-contrast)',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            title="Search Products"
            aria-label="Toggle Search Bar"
          >
            {searchOpen ? <X size={18} color="var(--color-gold-hover)" /> : <Search size={18} color="var(--color-gold)" />}
          </button>

          {/* Visit Shop To Buy Button (Desktop Only) */}
          <a
            href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold desktop-only"
            style={{
              padding: '8px 16px',
              fontSize: '12px',
              textDecoration: 'none',
              gap: '6px'
            }}
          >
            <MapPin size={15} /> VISIT SHOP TO BUY
          </a>

          {/* Book Consultation Button */}
          <button 
            className="btn-gold desktop-only"
            onClick={onOpenConsultation}
            style={{ padding: '9px 18px', fontSize: '12px' }}
          >
            BOOK CONSULTATION
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-subtle)',
              color: 'var(--color-text-high-contrast)',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Full-Width Search Dropdown Bar with Instant Live Suggestions */}
      {searchOpen && (
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderTop: '1px solid var(--color-border-gold)',
          borderBottom: '1px solid var(--color-border-gold)',
          padding: '14px 0',
          boxShadow: 'var(--shadow-card)'
        }} className="animate-fade-in">
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(searchQuery); }} 
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Search size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search Jhoomers, Chandeliers, Pendants, Wall Lights..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  fontSize: '13.5px',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: 'var(--radius-subtle)',
                  outline: 'none',
                  width: '100%',
                  backgroundColor: 'var(--color-bg)'
                }}
              />
              <button
                type="submit"
                className="btn-gold"
                style={{ padding: '9px 18px', fontSize: '12px', flexShrink: 0, gap: '4px' }}
              >
                SEARCH <ArrowRight size={13} />
              </button>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-secondary)',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 8px'
                  }}
                >
                  Clear
                </button>
              )}
            </form>

            {/* Instant Live Suggestions Results Card */}
            {searchQuery.trim() !== '' && (
              <div style={{
                marginTop: '4px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-subtle)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-low)'
              }}>
                <div style={{
                  padding: '8px 14px',
                  backgroundColor: 'var(--color-gold-light)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#745618',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>Instant Product Suggestions</span>
                  <span>{suggestions.length} matching item(s)</span>
                </div>

                {suggestions.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {suggestions.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSearchSubmit(item.name)}
                        style={{
                          padding: '10px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          justify: 'space-between',
                          cursor: 'pointer',
                          borderBottom: '1px solid var(--color-border)',
                          transition: 'background-color 0.2s ease',
                          gap: '12px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gold-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            style={{ width: '38px', height: '38px', objectFit: 'cover', borderRadius: '4px', flexShrink: 0 }} 
                          />
                          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-high-contrast)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {item.name}
                            </span>
                            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {item.tagline}
                            </span>
                          </div>
                        </div>

                        <span style={{ 
                          fontSize: '10.5px', 
                          fontWeight: 700, 
                          color: 'var(--color-gold)', 
                          backgroundColor: 'rgba(212, 175, 55, 0.12)', 
                          padding: '3px 8px', 
                          borderRadius: '4px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}>
                          {item.specs?.cri || 'View Catalog'}
                        </span>
                      </div>
                    ))}

                    <div 
                      onClick={() => handleSearchSubmit(searchQuery)}
                      style={{
                        padding: '10px 14px',
                        textAlign: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--color-gold-hover)',
                        backgroundColor: 'var(--color-bg-subtle)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center',
                        gap: '6px'
                      }}
                    >
                      Press Enter to see all results in collection <ArrowRight size={13} />
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '16px', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '13px' }}>
                    No exact fixtures match "<strong>{searchQuery}</strong>".
                    <div style={{ fontSize: '11.5px', color: 'var(--color-gold-hover)', marginTop: '4px', fontWeight: 600 }}>
                      Try typing <strong>Jhoomer</strong>, <strong>Chandelier</strong>, <strong>Pendant</strong>, or <strong>Brass</strong>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'var(--spacing-4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: 'var(--shadow-card)'
        }} className="mobile-only animate-fade-in">

          {/* Mobile Action Buttons */}
          <a 
            href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ 
              width: '100%', 
              textDecoration: 'none', 
              padding: '12px 16px', 
              fontSize: '13px', 
              justify: 'center',
              fontWeight: 700
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <MapPin size={16} /> VISIT SHOP TO BUY (MAP)
          </a>

          <button 
            className="btn-secondary" 
            onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
            style={{ width: '100%', padding: '12px 16px', fontSize: '13px', justifyContent: 'center' }}
          >
            BOOK ARCHITECTURAL CONSULTATION
          </button>

          <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '4px 0' }} />

          {/* Nav items */}
          <a 
            href="#catalog" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: '15px', padding: '6px 0', fontWeight: 600 }}
            onClick={() => { setMobileMenuOpen(false); onSelectCategory('all'); }}
          >
            COLLECTION
          </a>
          <a 
            href="#ambiance" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: '15px', padding: '6px 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            AMBIANCE SIMULATOR
          </a>
          <a 
            href="#specs" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: '15px', padding: '6px 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            SPECIFICATIONS & CRI
          </a>
          <a 
            href="#showroom" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: '15px', padding: '6px 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            SHOWROOM
          </a>
        </div>
      )}

      <style>{`
        .top-info-bar {
          background-color: var(--color-gold-light);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          padding: 6px var(--spacing-5);
          font-size: 11px;
          color: #745618;
          display: flex;
          justify-content: space-between;
          align-items: center;
          letter-spacing: 0.03em;
          gap: 16px;
        }

        .top-info-left, .top-info-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .top-bar-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #745618;
          text-decoration: none;
          font-weight: 600;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .top-bar-link:hover {
          color: var(--color-gold-hover);
        }

        .top-bar-divider {
          opacity: 0.35;
        }

        @media (max-width: 980px) {
          .desktop-only { display: none !important; }

          .top-info-bar {
            flex-direction: row;
            flex-wrap: wrap;
            padding: 5px 10px;
            gap: 4px 10px;
            justify-content: center;
          }

          .top-info-left, .top-info-right {
            justify-content: center;
            width: auto;
            gap: 8px;
          }

          .address-link {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 260px;
            line-height: 1.2;
            font-size: 10px;
          }

          .phone-link, .instagram-link {
            font-size: 10px;
            font-weight: 700;
          }
        }

        @media (max-width: 640px) {
          .brand-title-text {
            font-size: 16px !important;
          }
          .brand-subtitle-text {
            font-size: 8px !important;
            letter-spacing: 0.12em !important;
          }
        }

        @media (min-width: 981px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </header>
  );
}
