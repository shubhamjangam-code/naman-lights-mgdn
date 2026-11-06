import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import JhoomerLogo from './JhoomerLogo';

const InstagramIcon = ({ size = 18, color = "#ea9a4e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer({ onSelectCategory }) {
  return (
    <footer style={{
      backgroundColor: '#07070a',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '80px',
      color: '#94a3b8',
      position: 'relative'
    }}>
      
      {/* Showroom Section with Exact Google Maps Address */}
      <div id="showroom" className="container showroom-container" style={{ marginBottom: '80px' }}>
        <div style={{
          backgroundColor: '#111116',
          border: '1px solid rgba(215, 140, 67, 0.3)',
          borderRadius: '16px',
          padding: '36px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)'
        }} className="showroom-grid showroom-card">

          <div>
            <div className="eyebrow-tag">\ SHOWROOM LOCATION \</div>
            <h2 className="display-title" style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: '#ffffff', marginBottom: '12px' }}>
              Visit Our Lighting Studio in Kolhapur
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              Step into our flagship studio in Kolhapur to experience live optical displays of grand crystal Jhoomers, magnetic track installations, and warm ambient dimming systems.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#d78c43" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Naman Fancy Light Atelier</strong>
                  <div style={{ marginTop: '2px', lineHeight: 1.5, color: '#94a3b8' }}>
                    Main Road, Gandhi Nagar, near Tawde Hotel, Kolhapur, Maharashtra - 416119
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: '#d78c43',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '12.5px',
                      marginTop: '6px'
                    }}
                  >
                    Open Google Maps Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={16} color="#d78c43" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1' }}>Monday – Sunday: 10:00 AM – 9:00 PM (Open All 7 Days)</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={16} color="#d78c43" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: '#ffffff' }}>Store Call: +91 98765 43210 / +91 98250 12345</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <InstagramIcon size={16} color="#d78c43" />
                <a 
                  href="https://www.instagram.com/namanfancylight_gnr?igsh=MTk0amoxZ3ozNjVvbg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#d78c43', textDecoration: 'none', fontWeight: 600 }}
                >
                  Follow Us: @namanfancylight_gnr
                </a>
              </div>
            </div>

            <div className="showroom-cta-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-amber showroom-btn"
                style={{ padding: '12px 22px', fontSize: '13px' }}
              >
                <MapPin size={15} /> GET DIRECTIONS
              </a>

              <a 
                href="tel:+919876543210"
                className="btn-secondary showroom-btn"
                style={{ padding: '12px 20px', fontSize: '13px' }}
              >
                <Phone size={15} color="#d78c43" /> CALL STUDIO
              </a>
            </div>
          </div>

          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            aspectRatio: '16/10',
            backgroundColor: '#0a0a0e',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)'
          }}>
            <img 
              src="/images/chandelier_cascade.png" 
              alt="Naman Fancy Light Showroom Display" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div 
              className="showroom-img-badge"
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                backgroundColor: 'rgba(10, 10, 14, 0.9)',
                backdropFilter: 'blur(8px)',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(215, 140, 67, 0.3)',
                color: '#ffffff',
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>📍 Main Road, Gandhi Nagar, Kolhapur</span>
              <a 
                href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#d78c43', textDecoration: 'none', fontWeight: 700 }}
              >
                View Map ➔
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '56px', paddingBottom: '56px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '40px'
        }} className="footer-links-grid">

          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <JhoomerLogo size={36} iconSize={22} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#ffffff', fontSize: '17px', letterSpacing: '0.04em' }}>
                NAMAN LIGHTS
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.7, maxWidth: '340px', marginBottom: '20px' }}>
              Kolhapur's premier atelier for high-CRI architectural lighting, bespoke chandeliers, custom Jhoomers, and modern designer luminaires.
            </p>

            <a 
              href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '11.5px' }}
            >
              <MapPin size={13} color="#d78c43" /> Find Us on Google Maps
            </a>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#ffffff', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase' }}>
              COLLECTIONS
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#catalog" onClick={() => onSelectCategory('chandeliers')} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#d78c43'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Grand Chandeliers (Jhoomer)</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('pendants')} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#d78c43'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Pendant Lights</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('sconces')} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#d78c43'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Wall Sconces</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('track')} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#d78c43'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Magnetic Track Systems</a></li>
              <li><a href="#catalog" onClick={() => onSelectCategory('table')} style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#d78c43'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Table & Sculptures</a></li>
            </ul>
          </div>

          {/* Col 3: Technical Specs */}
          <div id="specs">
            <h3 style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#ffffff', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase' }}>
              SPECIFICATIONS
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#94a3b8' }}>
              <li>&gt; 97 CRI Natural Color Optics</li>
              <li>DALI-2 / TRIAC / 0-10V Dimming</li>
              <li>48V DC Magnetic Low-Voltage</li>
              <li>Precision Photometric Files</li>
              <li>5-Year Store Warranty Cover</li>
            </ul>
          </div>

          {/* Col 4: Contact Store */}
          <div>
            <h3 style={{ fontSize: '12px', letterSpacing: '0.14em', color: '#ffffff', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase' }}>
              STUDIO LOCATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#94a3b8' }}>
              <a href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', lineHeight: 1.4 }}>
                📍 Main Road, Gandhi Nagar, near Tawde Hotel, Kolhapur
              </a>
              <div>📞 +91 98765 43210</div>
              <div>📞 +91 98250 12345</div>
              <div>✉️ namanfancylight.gnr@gmail.com</div>
              <a href="https://www.instagram.com/namanfancylight_gnr?igsh=MTk0amoxZ3ozNjVvbg==" target="_blank" rel="noopener noreferrer" style={{ color: '#d78c43', textDecoration: 'none', fontWeight: 600 }}>
                📸 @namanfancylight_gnr
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{
        backgroundColor: '#050507',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '20px 0',
        fontSize: '12px',
        color: '#64748b'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} Naman Fancy Light (Kolhapur, Maharashtra). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', fontWeight: 500 }}>
            <a href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA" target="_blank" rel="noopener noreferrer" style={{ color: '#d78c43', textDecoration: 'none', fontWeight: 600 }}>
              Google Maps Location
            </a>
            <span>Privacy Policy</span>
            <span>Terms & Warranty</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .showroom-grid, .footer-links-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }

        @media (max-width: 640px) {
          .showroom-container {
            margin-bottom: 40px !important;
          }
          .showroom-card {
            padding: 20px 16px !important;
          }
        }

        @media (max-width: 480px) {
          .showroom-cta-buttons {
            flex-direction: column !important;
          }
          .showroom-btn {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .showroom-img-badge {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
            padding: 8px 10px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </footer>
  );
}
