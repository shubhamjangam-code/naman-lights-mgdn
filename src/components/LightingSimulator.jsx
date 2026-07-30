import React, { useState } from 'react';
import { Sun, Flame, Zap, Eye, Check, Sparkles } from 'lucide-react';

export default function LightingSimulator() {
  const [kelvin, setKelvin] = useState(2700);
  const [brightness, setBrightness] = useState(80);
  const [selectedRoom, setSelectedRoom] = useState('living');

  // Calculate dynamic light color gradient based on Kelvin
  const getKelvinColor = (k) => {
    if (k <= 2700) return 'rgba(255, 175, 90, ';
    if (k <= 3000) return 'rgba(255, 205, 140, ';
    if (k <= 3500) return 'rgba(255, 230, 190, ';
    return 'rgba(235, 245, 255, ';
  };

  const getKelvinLabel = (k) => {
    if (k <= 2700) return '2700K · Ultra Warm Sunset Glow';
    if (k <= 3000) return '3000K · Soft Architectural Warm';
    if (k <= 3500) return '3500K · Neutral Daylight Balance';
    return '4000K · Pure Architectural White';
  };

  const currentColorBase = getKelvinColor(kelvin);
  const alphaVal = (brightness / 100) * 0.45;

  return (
    <section id="ambiance" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--spacing-5)' }}>
          <div className="section-subtitle">INTERACTIVE STUDIO TOOL</div>
          <h2 className="display-title" style={{ fontSize: '28px', color: 'var(--color-text-high-contrast)' }}>
            Architectural Ambiance Simulator
          </h2>
          <p style={{ color: 'var(--color-text)', fontSize: '14px', marginTop: 'var(--spacing-1)' }}>
            Experience how color temperature (Kelvin) and brightness intensity transform luxury interior spaces.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-gold)',
          borderRadius: '10px',
          padding: 'var(--spacing-5)',
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: 'var(--spacing-6)',
          boxShadow: 'var(--shadow-card)'
        }} className="simulator-grid">

          {/* Visual Room Canvas */}
          <div style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            minHeight: '360px',
            backgroundColor: '#0a0d12',
            border: '1px solid var(--color-border)'
          }}>
            {/* Background Room Graphic */}
            <img 
              src={selectedRoom === 'living' ? "/images/chandelier.png" : selectedRoom === 'dining' ? "/images/pendant.png" : "/images/sconce.png"} 
              alt="Room preview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: `brightness(${0.45 + (brightness / 100) * 0.5}) contrast(1.05)`,
                transition: 'all 0.3s ease'
              }}
            />

            {/* Dynamic Light Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(ellipse at 50% 30%, ${currentColorBase}${alphaVal}) 0%, ${currentColorBase}0) 70%)`,
              mixBlendMode: 'screen',
              pointerEvents: 'none',
              transition: 'all 0.3s ease'
            }} />

            {/* Floating Live Data Badge */}
            <div style={{
              position: 'absolute',
              top: 'var(--spacing-3)',
              left: 'var(--spacing-3)',
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-subtle)',
              padding: '6px 14px',
              backdropFilter: 'blur(8px)',
              fontSize: '12px',
              color: 'var(--color-text-high-contrast)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-gold)',
                boxShadow: '0 0 8px var(--color-gold)'
              }} />
              <span style={{ fontWeight: 700 }}>{getKelvinLabel(kelvin)} · {brightness}% Dimmed</span>
            </div>
          </div>

          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            
            {/* Room Selector */}
            <div>
              <label style={{
                fontSize: '12px',
                color: 'var(--color-text-high-contrast)',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 'var(--spacing-2)'
              }}>
                SELECT INTERIOR SPACE
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-1)' }}>
                {[
                  { id: 'living', label: 'Grand Living' },
                  { id: 'dining', label: 'Dining Bar' },
                  { id: 'wall', label: 'Accent Wall' }
                ].map(r => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRoom(r.id)}
                    style={{
                      backgroundColor: selectedRoom === r.id ? 'var(--color-gold)' : 'var(--color-bg-subtle)',
                      color: selectedRoom === r.id ? '#ffffff' : 'var(--color-text-high-contrast)',
                      border: '1px solid ' + (selectedRoom === r.id ? 'var(--color-gold)' : 'var(--color-border)'),
                      borderRadius: 'var(--radius-subtle)',
                      padding: '8px 4px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Temperature (Kelvin) Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-1)' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-high-contrast)', fontWeight: 700 }}>
                  COLOR TEMP (KELVIN)
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-gold)', fontWeight: 800 }}>
                  {kelvin}K
                </span>
              </div>
              <input 
                type="range" 
                min="2200" 
                max="4000" 
                step="100" 
                value={kelvin} 
                onChange={(e) => setKelvin(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                <span>2200K (Sunset)</span>
                <span>3000K (Warm)</span>
                <span>4000K (Daylight)</span>
              </div>
            </div>

            {/* Brightness Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-1)' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-high-contrast)', fontWeight: 700 }}>
                  DIMMING LEVEL
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-gold)', fontWeight: 800 }}>
                  {brightness}%
                </span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5" 
                value={brightness} 
                onChange={(e) => setBrightness(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold)', cursor: 'pointer' }}
              />
            </div>

            {/* Specs Summary Info */}
            <div style={{
              backgroundColor: 'var(--color-gold-light)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-subtle)',
              padding: 'var(--spacing-3)',
              fontSize: '12px',
              color: '#574116'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-gold-hover)', fontWeight: 700, marginBottom: '4px' }}>
                <Sparkles size={13} /> OPTICAL ACCURACY GUARANTEE
              </div>
              All Naman Fancy Light fixtures maintain &gt;97 CRI optical precision across 100% - 1% smooth dimming curves.
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .simulator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
