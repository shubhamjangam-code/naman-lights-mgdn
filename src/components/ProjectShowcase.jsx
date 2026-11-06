import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectShowcase({ onSelectCategory }) {
  const projects = [
    {
      id: 'commercial',
      title: 'Commercial Projects',
      description: 'We excel in creating captivating lighting designs that enhance the ambiance and elevate the customer experience.',
      image: '/images/chandelier_grand.png',
      category: 'chandeliers',
      tag: 'Hospitality & Dining'
    },
    {
      id: 'kitchen',
      title: 'Modern Kitchen & Island Lighting',
      description: 'Precision linear lighting and magnetic track systems tailored for contemporary architectural kitchens.',
      image: '/images/track_magnetic.png',
      category: 'track',
      tag: 'Architectural Systems'
    },
    {
      id: 'executive',
      title: 'Executive & Living Lounges',
      description: 'Sculptural cluster rings and statement chandeliers engineered for double-height architectural spaces.',
      image: '/images/aura_ring.jpg',
      category: 'chandeliers',
      tag: 'Grand Residences'
    },
    {
      id: 'residential',
      title: 'Warm Accent & Bedroom Lighting',
      description: 'Handcrafted brass and frosted opal luminaires casting a soothing, glare-free golden aura.',
      image: '/images/table_brass_real.jpg',
      category: 'table',
      tag: 'Intimate Ambiance'
    }
  ];

  const handleCardClick = (cat) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section projects-section" style={{
      backgroundColor: 'transparent',
      border: 'none',
      padding: '80px 0'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="eyebrow-tag">\ PROJECTS \</div>
          <h2 className="display-title" style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', color: '#ffffff' }}>
            Curated Architectural Work
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '8px', maxWidth: '600px' }}>
            Explore how our luminaires enhance commercial venues, high-end residences, and modern corporate interiors.
          </p>
        </div>

        {/* 4-Card Dark Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }} className="projects-grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => handleCardClick(proj.category)}
              className="project-card"
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                cursor: 'pointer',
                backgroundColor: '#131318',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.35s ease',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d78c43';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(215, 140, 67, 0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  filter: 'brightness(0.85) contrast(1.05)'
                }}
              />

              {/* Gradient Dark Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(13, 13, 17, 0.2) 0%, rgba(13, 13, 17, 0.6) 50%, rgba(10, 10, 14, 0.95) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Top Tag Pill */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(13, 13, 17, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '4px 10px',
                fontSize: '10px',
                fontWeight: 600,
                color: '#d78c43',
                letterSpacing: '0.04em'
              }}>
                {proj.tag}
              </div>

              {/* Top Right Corner Arrow */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <ArrowUpRight size={15} color="#ffffff" />
              </div>

              {/* Bottom Content */}
              <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                right: '18px'
              }}>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '8px',
                  lineHeight: 1.25
                }}>
                  {proj.title}
                </h3>
                <p style={{
                  fontSize: '12px',
                  color: '#cbd5e1',
                  lineHeight: 1.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {proj.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }

        @media (max-width: 640px) {
          .projects-section {
            padding: 40px 0 !important;
          }
        }

        @media (max-width: 580px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .project-card {
            aspect-ratio: 16/11 !important;
          }
        }
      `}</style>
    </section>
  );
}
