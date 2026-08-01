import React, { useState, useRef } from 'react';
import { Sliders, Info, MapPin, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function LightingSimulator() {
  const [kelvin, setKelvin] = useState(2700);
  const [brightness, setBrightness] = useState(80);
  const [selectedRoom, setSelectedRoom] = useState('living');
  const [isIgnited, setIsIgnited] = useState(true);
  const [flashKey, setFlashKey] = useState(0);
  const pillContainerRef = useRef(null);

  const triggerLightSwitchOn = (roomId) => {
    setSelectedRoom(roomId);
    setIsIgnited(true);
    setFlashKey(prev => prev + 1);
  };

  // Calculate dynamic light color gradient based on Kelvin
  const getKelvinColor = (k) => {
    if (k <= 2700) return 'rgba(255, 175, 90, ';
    if (k <= 3000) return 'rgba(255, 205, 140, ';
    if (k <= 3500) return 'rgba(255, 230, 190, ';
    return 'rgba(235, 245, 255, ';
  };

  const getKelvinDescription = (k) => {
    if (k <= 2700) return '🌙 Deep Warm Sunset — Cozy & relaxing mood.';
    if (k <= 3000) return '🍸 Soft Golden Warmth — Perfect for dining & lounge.';
    if (k <= 3500) return '🌤️ Neutral Natural Light — Balanced family lighting.';
    return '☀️ Crisp Daylight — High clarity for reading & work.';
  };

  const setPreset = (k, b) => {
    setKelvin(k);
    setBrightness(b);
  };

  const ROOM_SETTINGS = [
    { id: 'living', label: '✨ Grand Jhoomer', image: '/images/chandelier.png' },
    { id: 'dining', label: '💡 Dining Pendant', image: '/images/pendant.png' },
    { id: 'wall', label: '🏛️ Wall Sconce', image: '/images/sconce.png' },
    { id: 'table', label: '🛋️ Table Lamp', image: '/images/table_brass_real.jpg' },
    { id: 'track', label: '⚡ LED Track Light', image: '/images/track_magnetic.png' }
  ];

  const currentRoom = ROOM_SETTINGS.find(r => r.id === selectedRoom) || ROOM_SETTINGS[0];
  const currentColorBase = getKelvinColor(kelvin);
  const alphaVal = (brightness / 100) * 0.45;

  return (
    <section id="ambiance" className="section" style={{ backgroundColor: 'transparent', padding: 'var(--spacing-6) 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--spacing-4)' }}>
          <div className="section-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sliders size={14} color="var(--color-gold)" /> INTERACTIVE LIGHTING STUDIO
          </div>
          <h2 className="display-title" style={{ fontSize: '26px', color: 'var(--color-text-high-contrast)', marginTop: '2px' }}>
            Room Ambiance & Mood Simulator
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px', marginTop: '4px', maxWidth: '750px' }}>
            Test how different light color warmth (Kelvin) and brightness levels change your home atmosphere before buying!
          </p>
        </div>

        {/* User Guide Box */}
        <div style={{
          backgroundColor: 'rgba(212, 175, 55, 0.08)',
          border: '1px solid var(--color-border-gold)',
          borderRadius: '8px',
          padding: '10px 14px',
          marginBottom: 'var(--spacing-4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Info size={18} color="var(--color-gold-hover)" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '12px', color: '#523a0d', lineHeight: 1.4 }}>
            <strong>How it works:</strong> Tap a fixture setting below, then move the <strong>Light Color</strong> & <strong>Brightness</strong> sliders to see how live room lighting transforms!
          </div>
        </div>

        {/* Main Simulator Grid */}
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-gold)',
          borderRadius: '12px',
          padding: 'var(--spacing-4)',
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: 'var(--spacing-4)',
          boxShadow: 'var(--shadow-card)',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }} className="simulator-grid">

          {/* Visual Room Canvas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0, width: '100%' }}>
            <div 
              className="simulator-canvas"
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                minHeight: '240px',
                backgroundColor: '#0a0d12',
                border: '1px solid var(--color-border)'
              }}
            >
              {/* Room Photo */}
              <img 
                key={flashKey}
                src={currentRoom.image} 
                alt={currentRoom.label}
                className="animate-fade-in"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: `brightness(${0.45 + (brightness / 100) * 0.5}) contrast(1.05)`,
                  transition: 'all 0.3s ease'
                }}
              />

              {/* Dynamic Light Glow */}
              <div 
                key={'glow-' + flashKey}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(ellipse at 50% 30%, ${currentColorBase}${alphaVal}) 0%, ${currentColorBase}0) 75%)`,
                  mixBlendMode: 'screen',
                  pointerEvents: 'none',
                  transition: 'all 0.3s ease'
                }} 
              />

              {/* Floating Live Badge */}
              <div style={{
                position: 'absolute',
                top: 'var(--spacing-2)',
                left: 'var(--spacing-2)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--color-border-gold)',
                borderRadius: 'var(--radius-subtle)',
                padding: '4px 10px',
                backdropFilter: 'blur(8px)',
                fontSize: '11px',
                color: 'var(--color-text-high-contrast)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold)',
                  boxShadow: '0 0 8px var(--color-gold)'
                }} />
                <span style={{ fontWeight: 700 }}>
                  {currentRoom.label} · {kelvin}K · {brightness}%
                </span>
              </div>
            </div>

            {/* Live Atmosphere Explanation Strip */}
            <div style={{
              backgroundColor: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '12px',
              color: 'var(--color-text-high-contrast)',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              {getKelvinDescription(kelvin)}
            </div>
          </div>

          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0, width: '100%' }}>
            
            {/* 1. Fixture & Room Selector Pills */}
            <div style={{ minWidth: 0, width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '4px' }}>
                <label style={{
                  fontSize: '11px',
                  color: 'var(--color-text-high-contrast)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={12} color="var(--color-gold)" /> 1. FIXTURE TYPE
                </label>

                {/* Clear Named Slide Button */}
                <button
                  onClick={() => {
                    const el = pillContainerRef.current;
                    if (el) {
                      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 15) {
                        el.scrollTo({ left: 0, behavior: 'smooth' });
                      } else {
                        el.scrollBy({ left: 160, behavior: 'smooth' });
                      }
                    }
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #d4af37 0%, #a67c13 100%)',
                    color: '#ffffff',
                    border: '1px solid #ffe596',
                    borderRadius: '16px',
                    padding: '4px 12px',
                    fontSize: '10.5px',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 2px 8px rgba(212, 175, 55, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  SLIDE MORE FIXTURES ➔
                </button>
              </div>

              <div 
                ref={pillContainerRef}
                style={{ 
                  display: 'flex', 
                  gap: '6px', 
                  overflowX: 'auto', 
                  maxWidth: '100%',
                  paddingBottom: '6px',
                  scrollbarWidth: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {ROOM_SETTINGS.map(r => (
                  <button
                    key={r.id}
                    onClick={() => triggerLightSwitchOn(r.id)}
                    style={{
                      background: selectedRoom === r.id 
                        ? 'linear-gradient(135deg, #d4af37 0%, #9e750e 100%)' 
                        : 'var(--color-bg-subtle)',
                      color: selectedRoom === r.id ? '#ffffff' : 'var(--color-text-high-contrast)',
                      border: '1px solid ' + (selectedRoom === r.id ? '#ffe89e' : 'var(--color-border)'),
                      borderRadius: '20px',
                      padding: '7px 14px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-body)',
                      fontWeight: selectedRoom === r.id ? 700 : 600,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      boxShadow: selectedRoom === r.id ? '0 3px 10px rgba(212, 175, 55, 0.35)' : 'none'
                    }}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Color Temperature (Kelvin) Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', color: 'var(--color-text-high-contrast)', fontWeight: 800 }}>
                  2. LIGHT COLOR (WARMTH)
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-gold-hover)', fontWeight: 800 }}>
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
                style={{ width: '100%', accentColor: 'var(--color-gold)', cursor: 'pointer', height: '10px', margin: '4px 0', borderRadius: '5px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: 'var(--color-text-secondary)', marginTop: '2px', fontWeight: 600 }}>
                <span>🟡 2200K Sunset</span>
                <span>⚪ 3000K Warm</span>
                <span>🔵 4000K Daylight</span>
              </div>
            </div>

            {/* 3. Brightness Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', color: 'var(--color-text-high-contrast)', fontWeight: 800 }}>
                  3. BRIGHTNESS (DIMMING)
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-gold-hover)', fontWeight: 800 }}>
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
                style={{ width: '100%', accentColor: 'var(--color-gold)', cursor: 'pointer', height: '10px', margin: '4px 0', borderRadius: '5px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', color: 'var(--color-text-secondary)', marginTop: '2px', fontWeight: 600 }}>
                <span>10% Dim</span>
                <span>50% Medium</span>
                <span>100% Bright</span>
              </div>
            </div>

            {/* 4. Quick Presets (Inline Row) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0, width: '100%' }}>
              <span style={{ fontSize: '10px', color: 'var(--color-gold)', fontWeight: 800, textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>
                PRESETS:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', flex: 1, minWidth: 0 }}>
                <button
                  onClick={() => setPreset(2200, 45)}
                  style={{
                    padding: '5px 2px',
                    fontSize: '10px',
                    fontWeight: 700,
                    borderRadius: '4px',
                    border: kelvin === 2200 ? '1.5px solid var(--color-gold)' : '1px solid var(--color-border)',
                    backgroundColor: kelvin === 2200 ? 'var(--color-gold-light)' : 'var(--color-bg-subtle)',
                    color: 'var(--color-text-high-contrast)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  🌙 Sunset
                </button>
                <button
                  onClick={() => setPreset(3000, 75)}
                  style={{
                    padding: '5px 2px',
                    fontSize: '10px',
                    fontWeight: 700,
                    borderRadius: '4px',
                    border: kelvin === 3000 ? '1.5px solid var(--color-gold)' : '1px solid var(--color-border)',
                    backgroundColor: kelvin === 3000 ? 'var(--color-gold-light)' : 'var(--color-bg-subtle)',
                    color: 'var(--color-text-high-contrast)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  🍸 Warm
                </button>
                <button
                  onClick={() => setPreset(4000, 100)}
                  style={{
                    padding: '5px 2px',
                    fontSize: '10px',
                    fontWeight: 700,
                    borderRadius: '4px',
                    border: kelvin === 4000 ? '1.5px solid var(--color-gold)' : '1px solid var(--color-border)',
                    backgroundColor: kelvin === 4000 ? 'var(--color-gold-light)' : 'var(--color-bg-subtle)',
                    color: 'var(--color-text-high-contrast)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  ☀️ Daylight
                </button>
              </div>
            </div>

            {/* Store Visit CTA */}
            <a
              href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                width: '100%',
                textDecoration: 'none',
                padding: '10px 12px',
                fontSize: '11.5px',
                justifyContent: 'center',
                fontWeight: 700,
                marginTop: '2px',
                boxSizing: 'border-box'
              }}
            >
              <MapPin size={14} /> VISIT SHOP TO TEST LIVE LIGHTING
            </a>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .simulator-grid {
            grid-template-columns: 1fr !important;
            padding: 12px !important;
            gap: 12px !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .simulator-canvas {
            min-height: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
