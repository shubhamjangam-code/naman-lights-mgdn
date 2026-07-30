import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, Sparkles, MapPin } from 'lucide-react';
import JhoomerLogo from './JhoomerLogo';

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
      <div style={{
        backgroundColor: 'var(--color-gold-light)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        padding: '6px var(--spacing-5)',
        fontSize: '11px',
        color: '#745618',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        letterSpacing: '0.04em',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <a 
            href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              color: '#745618',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#745618'}
          >
            <MapPin size={11} color="var(--color-gold)" /> Main Road, Gandhi Nagar, near Tawde Hotel, Kolhapur
          </a>
          <span style={{ opacity: 0.35 }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#574116', fontWeight: 600, paddingRight: '8px' }}>
            <Phone size={11} color="var(--color-gold)" /> +91 98765 43210
          </span>
        </div>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <span style={{ opacity: 0.35, marginRight: '4px' }}>|</span>
          <a 
            href="https://www.instagram.com/namanfancylight_gnr?igsh=MTk0amoxZ3ozNjVvbg==" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#745618', 
              textDecoration: 'none', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              marginLeft: '4px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#745618'}
          >
            <InstagramIcon size={12} color="#e1306c" /> @namanfancylight_gnr
          </a>
          <span style={{ opacity: 0.35 }}>|</span>
          <span style={{ color: 'var(--color-gold-hover)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={11} /> Bespoke Jhoomer Studio
          </span>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        height: '76px',
        gap: 'var(--spacing-4)'
      }}>
        {/* Brand Logo & Name Block */}
        <a href="#" style={{ 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 'var(--spacing-3)',
          flexShrink: 0,
          marginRight: 'var(--spacing-4)'
        }}>
          
          {/* 3D Live Royal Jhoomer Medallion Logo */}
          <JhoomerLogo size={52} iconSize={36} />

          {/* Artistic Marcellus Typography for Brand Name */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontFamily: 'var(--font-logo)',
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '0.1em',
              lineHeight: 1.1,
              display: 'flex',
              alignItems: 'baseline',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}>
              <span className="brand-name-text" style={{ fontWeight: 600 }}>NAMAN</span>
              <span className="brand-gold-text">FANCY LIGHT</span>
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '9px',
              letterSpacing: '0.18em',
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginTop: '2px',
              whiteSpace: 'nowrap'
            }}>
              Architectural Lighting Atelier
            </div>
          </div>

        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'flex',
          gap: '28px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', flexShrink: 0 }}>
          {/* Search Toggle */}
          <div style={{ position: 'relative' }}>
            {searchOpen ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)' }}>
                <input
                  type="text"
                  placeholder="Search fixtures..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  style={{
                    width: '180px',
                    padding: '6px 12px',
                    fontSize: 'var(--font-size-small)'
                  }}
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                style={{
                  background: 'none',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-subtle)',
                  color: 'var(--color-text-high-contrast)',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="Search Products"
              >
                <Search size={16} color="var(--color-gold)" />
              </button>
            )}
          </div>

          {/* Visit Shop To Buy Button */}
          <a
            href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
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
              border: 'none',
              color: 'var(--color-text-high-contrast)',
              cursor: 'pointer',
              padding: 'var(--spacing-1)'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'var(--spacing-4)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-3)',
          boxShadow: 'var(--shadow-card)'
        }} className="mobile-only animate-fade-in">
          <a 
            href="#catalog" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: 'var(--font-size-h1)', padding: 'var(--spacing-2) 0', fontWeight: 600 }}
            onClick={() => { setMobileMenuOpen(false); onSelectCategory('all'); }}
          >
            COLLECTION
          </a>
          <a 
            href="#ambiance" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: 'var(--font-size-h1)', padding: 'var(--spacing-2) 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            AMBIANCE SIMULATOR
          </a>
          <a 
            href="#specs" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: 'var(--font-size-h1)', padding: 'var(--spacing-2) 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            SPECIFICATIONS & CRI
          </a>
          <a 
            href="#showroom" 
            style={{ color: 'var(--color-text-high-contrast)', textDecoration: 'none', fontSize: 'var(--font-size-h1)', padding: 'var(--spacing-2) 0', fontWeight: 600 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            SHOWROOM
          </a>
          <a 
            href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-gold-hover)', textDecoration: 'none', fontSize: 'var(--font-size-h2)', padding: 'var(--spacing-1) 0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <MapPin size={18} color="var(--color-gold)" /> Location: Main Road, Gandhi Nagar, Kolhapur
          </a>
          <button 
            className="btn-gold" 
            onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
            style={{ marginTop: 'var(--spacing-2)', width: '100%' }}
          >
            BOOK ARCHITECTURAL CONSULTATION
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 981px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </header>
  );
}
