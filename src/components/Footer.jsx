import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sun, Sparkles, ExternalLink } from 'lucide-react';
import JhoomerLogo from './JhoomerLogo';

const InstagramIcon = ({ size = 18, color = "#e1306c" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer({ onSelectCategory }) {
  return (
    <footer style={{
      backgroundColor: 'transparent',
      borderTop: '1px solid var(--color-border)',
      paddingTop: 'var(--spacing-10)',
      color: 'var(--color-text)'
    }}>
      
      {/* Showroom Section with Exact Google Maps Address */}
      <div id="showroom" className="container" style={{ marginBottom: 'var(--spacing-10)' }}>
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-gold)',
          borderRadius: '12px',
          padding: 'var(--spacing-6)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-8)',
          alignItems: 'center',
          boxShadow: 'var(--shadow-card)'
        }} className="showroom-grid">

          <div>
            <div className="section-subtitle">FLAGSHIP EXPERIENCE CENTER</div>
            <h2 className="display-title" style={{ fontSize: '28px', color: 'var(--color-text-high-contrast)', marginBottom: 'var(--spacing-3)' }}>
              Visit Our Flagship Store in Kolhapur
            </h2>
            <p style={{ color: 'var(--color-text)', fontSize: '14px', lineHeight: 1.7, marginBottom: 'var(--spacing-5)' }}>
              Step into our experience studio featuring real-scale installations of custom Jhoomers, magnetic track systems, architectural profiles, and high-CRI optical diffusers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', fontSize: '14px', color: 'var(--color-text)', marginBottom: 'var(--spacing-6)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-3)' }}>
                <MapPin size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--color-text-high-contrast)' }}>Naman Fancy Light</strong>
                  <div style={{ marginTop: '2px', lineHeight: 1.5 }}>
                    Main Road, Gandhi Nagar, near Tawde Hotel, Kolhapur, Maharashtra - 416119
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--color-gold-hover)',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '13px',
                      marginTop: '4px'
                    }}
                  >
                    Open in Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                <Clock size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span>Monday – Sunday: 10:00 AM – 9:00 PM (Open All 7 Days)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                <Phone size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 700, color: 'var(--color-text-high-contrast)' }}>Store Call: +91 98765 43210 / +91 98250 12345</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                <InstagramIcon size={18} color="#e1306c" />
                <a 
                  href="https://www.instagram.com/namanfancylight_gnr?igsh=MTk0amoxZ3ozNjVvbg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-gold-hover)', textDecoration: 'none', fontWeight: 700 }}
                >
                  Follow Us: @namanfancylight_gnr
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-gold-light)',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: 'var(--radius-subtle)',
                  padding: '10px 18px',
                  color: '#574116',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 700
                }}
              >
                <MapPin size={15} color="var(--color-gold)" /> GET DIRECTIONS
              </a>
            </div>
          </div>

          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            aspectRatio: '16/9',
            backgroundColor: '#0a0d12',
            border: '1px solid var(--color-border-gold)',
            position: 'relative'
          }}>
            <img 
              src="/images/chandelier_cascade.png" 
              alt="Naman Fancy Light Showroom Display" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              right: '12px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid var(--color-border-gold)',
              color: '#ffffff',
              fontSize: '11px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>📍 Main Road, Gandhi Nagar, Kolhapur</span>
              <a 
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#d4af37', textDecoration: 'none', fontWeight: 700 }}
              >
                View Map ➔
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-8)', paddingBottom: 'var(--spacing-8)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'var(--spacing-6)'
        }} className="footer-links-grid">

          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
              <JhoomerLogo size={36} iconSize={22} />
              <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 600, color: 'var(--color-text-high-contrast)', fontSize: '16px', letterSpacing: '0.1em' }}>
                NAMAN FANCY LIGHT
              </span>
            </div>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', lineHeight: 1.7, maxWidth: '340px', marginBottom: 'var(--spacing-3)' }}>
              Kolhapur's premier destination for high-CRI architectural lighting, bespoke chandeliers (Jhoomers), LED profile tracks, and luxury indoor/outdoor luminaires.
            </p>

            {/* Google Maps Direct Button */}
            <a 
              href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--color-gold-light)',
                border: '1px solid var(--color-border-gold)',
                borderRadius: 'var(--radius-subtle)',
                padding: '6px 14px',
                color: '#574116',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 700
              }}
            >
              <MapPin size={14} color="var(--color-gold)" /> Find Us on Google Maps
            </a>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-body)', letterSpacing: '0.1em', color: 'var(--color-text-high-contrast)', fontWeight: 700, marginBottom: 'var(--spacing-4)', textTransform: 'uppercase' }}>
              COLLECTION
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', fontSize: '13px' }}>
              <li><a href="#catalog" onClick={() => onSelectCategory('chandeliers')} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Grand Chandeliers (Jhoomer)</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('pendants')} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Pendant Lights</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('sconces')} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Wall Sconces</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('track')} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Track Systems</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('table')} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Table & Sculptures</a></li>
            </ul>
          </div>

          {/* Col 3: Technical Specs */}
          <div id="specs">
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-body)', letterSpacing: '0.1em', color: 'var(--color-text-high-contrast)', fontWeight: 700, marginBottom: 'var(--spacing-4)', textTransform: 'uppercase' }}>
              SPECIFICATIONS
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              <li>&gt;97 CRI Optical Standard</li>
              <li>DALI-2 / TRIAC Dimming</li>
              <li>48V DC Magnetic Busbar</li>
              <li>Photometric IES Files</li>
              <li>5-Year Warranty Cover</li>
            </ul>
          </div>

          {/* Col 4: Contact Store */}
          <div>
            <h3 style={{ fontSize: '13px', fontFamily: 'var(--font-body)', letterSpacing: '0.1em', color: 'var(--color-text-high-contrast)', fontWeight: 700, marginBottom: 'var(--spacing-4)', textTransform: 'uppercase' }}>
              STORE LOCATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              <a href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                📍 Main Road, Gandhi Nagar, near Tawde Hotel, Kolhapur
              </a>
              <div>📞 +91 98765 43210</div>
              <div>📞 +91 98250 12345</div>
              <div>✉️ namanfancylight.gnr@gmail.com</div>
              <a href="https://www.instagram.com/namanfancylight_gnr?igsh=MTk0amoxZ3ozNjVvbg==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold-hover)', textDecoration: 'none', fontWeight: 600 }}>
                📸 @namanfancylight_gnr
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{
        backgroundColor: 'var(--color-gold-light)',
        borderTop: '1px solid var(--color-border-gold)',
        padding: 'var(--spacing-4) 0',
        fontSize: '12px',
        color: '#6e5424'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            © {new Date().getFullYear()} Naman Fancy Light (Kolhapur, Maharashtra). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', fontWeight: 500 }}>
            <a href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" target="_blank" rel="noopener noreferrer" style={{ color: '#6e5424', textDecoration: 'none', fontWeight: 700 }}>
              Google Maps Location
            </a>
            <span>Privacy Policy</span>
            <span>Terms & Warranty</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .showroom-grid, .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
