import React from 'react';

// Custom Fine Line-Art Icons matching Screenshot 5
const CeilingIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4v12" />
    <path d="M12 28h24l4 10H8l4-10z" />
    <path d="M18 16h12l2 4H16l2-4z" />
    <circle cx="24" cy="41" r="1.5" fill="#d78c43" />
  </svg>
);

const FloorLampIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 10h14l-2 12H19l-2-12z" />
    <path d="M24 22v6" />
    <path d="M24 28L15 44" />
    <path d="M24 28L33 44" />
    <path d="M24 28v16" />
    <line x1="19" y1="38" x2="29" y2="38" />
  </svg>
);

const WallSconceIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 8v16" />
    <path d="M15 24h18" />
    <path d="M17 24c0 5 3 9 7 11 4-2 7-6 7-11" />
    <path d="M20 12c0-3 4-5 4-5s4 2 4 5-4 3-4 3-4 0-4-3z" />
    <path d="M24 35v7" />
  </svg>
);

const WallMountedIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="20" y="6" width="8" height="34" rx="4" />
    <line x1="24" y1="12" x2="24" y2="34" strokeDasharray="2 2" />
    <line x1="16" y1="16" x2="20" y2="16" />
    <line x1="16" y1="30" x2="20" y2="30" />
  </svg>
);

const IslandLightIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4v8" />
    <path d="M18 16c0-4 12-4 12 0 0 5-3 7-3 10h-6c0-3-3-5-3-10z" />
    <path d="M20 30h8" />
    <path d="M22 34h4" />
    <path d="M22 20l4 4" />
  </svg>
);

const ModularIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="6" rx="2" />
    <circle cx="16" cy="26" r="6" />
    <circle cx="32" cy="26" r="6" />
    <line x1="16" y1="16" x2="16" y2="20" />
    <line x1="32" y1="16" x2="32" y2="20" />
    <path d="M13 38h6" />
    <path d="M29 38h6" />
  </svg>
);

const LedIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="13" />
    <circle cx="24" cy="24" r="7" />
    <path d="M24 4v4" />
    <path d="M24 40v4" />
    <path d="M4 24h4" />
    <path d="M40 24h4" />
  </svg>
);

const SmartLightIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="#d78c43" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6a10 10 0 0 0-7 17v5h14v-5a10 10 0 0 0-7-17z" />
    <path d="M19 32h10" />
    <path d="M21 36h6" />
    <path d="M10 12l-4-4" />
    <path d="M38 12l4-4" />
    <path d="M6 24H2" />
    <path d="M46 24h-4" />
  </svg>
);

export default function ServicesGrid({ onSelectCategory }) {
  // Concise categories and short items exactly as reference Screenshot 5
  const categories = [
    {
      id: 'chandeliers',
      title: 'Ceiling Fixtures',
      icon: <CeilingIcon />,
      items: ['Chandeliers', 'Flush Mount', 'Pendant Lights', 'Track Lighting']
    },
    {
      id: 'table',
      title: 'Floor Lamps',
      icon: <FloorLampIcon />,
      items: ['Arc Lamps', 'Tripod Lamps', 'Task Lamps', 'Torchiere Lamps']
    },
    {
      id: 'sconces',
      title: 'Wall Sconces',
      icon: <WallSconceIcon />,
      items: ['Swing Arm Sconces', 'Candle Sconces', 'Picture Lights', 'Uplight Sconces']
    },
    {
      id: 'sconces',
      title: 'Wall Mounted Lights',
      icon: <WallMountedIcon />,
      items: ['Wall Washers', 'Vanity Lights', 'Reading Lights', 'Outdoor Wall Lights']
    },
    {
      id: 'pendants',
      title: 'Kitchen Island Lights',
      icon: <IslandLightIcon />,
      items: ['Linear Pendant Lights', 'Globe Pendant Lights', 'Mini Pendant Lights', 'Recessed Lighting']
    },
    {
      id: 'track',
      title: 'Modular Lighting',
      icon: <ModularIcon />,
      items: ['Modular Track Systems', 'Magnetic LED Panels', 'Modular Wall Lights', 'Adjustable Clusters']
    },
    {
      id: 'track',
      title: 'LED Lighting',
      icon: <LedIcon />,
      items: ['Recessed Downlights', 'Strip Lights', 'Pendant Fixtures', 'Wall Washers']
    },
    {
      id: 'all',
      title: 'Smart Lighting',
      icon: <SmartLightIcon />,
      items: ['Smart Bulbs', 'Smart Light Strips', 'Smart Dimmer Switches', 'Smart Lighting Kits']
    }
  ];

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section services-section" style={{
      backgroundColor: 'transparent',
      border: 'none',
      position: 'relative',
      overflow: 'hidden',
      padding: '70px 0'
    }}>
      {/* Ghost Outline Watermark "SERVICES" on the right matching Screenshot 5 */}
      <div 
        className="watermark-ghost-text" 
        style={{
          top: '30px',
          right: '-40px',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          opacity: 0.55
        }}
      >
        SERVICES
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Clean Header with Split Headline & Concise Intro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '40px',
          marginBottom: '48px',
          alignItems: 'flex-start'
        }} className="services-header-grid">
          
          <div>
            <div className="eyebrow-tag">\ SERVICES \</div>
            <h2 className="display-title" style={{
              fontSize: 'clamp(30px, 3.6vw, 48px)',
              color: '#ffffff',
              lineHeight: 1.15
            }}>
              Discover Power of Perfect Lighting
            </h2>
          </div>

          <div style={{ paddingTop: '6px' }}>
            <h3 style={{
              fontSize: '17px',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '8px'
            }}>
              Welcome to our diverse world of lighting solutions.
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#94a3b8',
              lineHeight: 1.6
            }}>
              From ambient to task lighting, our expertise spans a wide range of styles and functionalities to suit every space and requirement.
            </p>
          </div>

        </div>

        {/* 8 Category Minimal Grid matching Reference Screenshot 5 (No heavy box borders, no repeated VIEW button) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: '32px',
          rowGap: '36px'
        }} className="categories-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(cat.id)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                padding: '6px 0',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Fine Line Icon */}
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                {cat.icon}
              </div>

              <div>
                {/* Category Title in warm amber */}
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#d78c43',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  {cat.title}
                </h4>

                {/* Sub-items list - short & clean */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  {cat.items.map((item, i) => (
                    <li key={i} style={{
                      fontSize: '13px',
                      color: '#cbd5e1',
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#d78c43'}
                    onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-header-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 24px !important;
            row-gap: 28px !important;
          }
        }

        @media (max-width: 768px) {
          .watermark-ghost-text {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .services-section {
            padding: 40px 0 !important;
          }
          .services-header-grid {
            gap: 14px !important;
            margin-bottom: 28px !important;
          }
        }

        @media (max-width: 540px) {
          .categories-grid {
            grid-template-columns: 1fr !important;
            row-gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
