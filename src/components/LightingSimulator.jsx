import React, { useState, useRef } from 'react';
import { MapPin, Sparkles } from 'lucide-react';

export default function LightingSimulator() {
  const [kelvin, setKelvin] = useState(2700);
  const [brightness, setBrightness] = useState(80);
  const [selectedRoom, setSelectedRoom] = useState('living');
  const [flashKey, setFlashKey] = useState(0);
  const pillContainerRef = useRef(null);

  const triggerLightSwitchOn = (roomId) => {
    setSelectedRoom(roomId);
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
    if (k <= 2700) return '🌙 2700K Deep Warm Sunset — Cozy & intimate architectural ambiance.';
    if (k <= 3000) return '🍸 3000K Soft Golden Warmth — Ideal for dining, living, and hotel lounges.';
    if (k <= 3500) return '🌤️ 3500K Neutral Natural Warmth — Balanced, glare-free family lighting.';
    return '☀️ 4000K Crisp Architectural Daylight — High optical clarity for reading & kitchens.';
  };

  const setPreset = (k, b) => {
    setKelvin(k);
    setBrightness(b);
  };

  const ROOM_SETTINGS = [
    { id: 'living', label: '✨ Grand Jhoomer', image: '/images/chandelier.png' },
    { id: 'dining', label: '💡 Dining Pendant', image: '/images/hero_pendant_dome.jpg' },
    { id: 'wall', label: '🏛️ Wall Sconce', image: '/images/sconce.png' },
    { id: 'table', label: '🛋️ Table Lamp', image: '/images/table_brass_real.jpg' },
    { id: 'track', label: '⚡ LED Track Light', image: '/images/track_magnetic.png' }
  ];

  const currentRoom = ROOM_SETTINGS.find(r => r.id === selectedRoom) || ROOM_SETTINGS[0];
  const currentColorBase = getKelvinColor(kelvin);
  const alphaVal = (brightness / 100) * 0.45;

  return (
    <section id="ambiance" className="section" style={{ backgroundColor: '#0d0d11', padding: '80px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="eyebrow-tag">\ LIGHT SIMULATOR \</div>
          <h2 className="display-title" style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', color: '#ffffff' }}>
            Light Color & Ambiance Simulator
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '6px', maxWidth: '650px' }}>
            Adjust color temperature (Kelvin) and dimming levels in real time to preview how luminaires illuminate your space.
          </p>
        </div>


        {/* Main Simulator Grid */}
        <div style={{
          backgroundColor: '#14141a',
          border: '1px solid rgba(255, 255, 255, 0.09)',
          borderRadius: '16px',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          width: '100%',
          boxSizing: 'border-box'
        }} className="simulator-grid">

          {/* Visual Room Canvas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0, width: '100%' }}>
            <div 
              className="simulator-canvas"
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                minHeight: '280px',
                backgroundColor: '#08080a',
                border: '1px solid rgba(255, 255, 255, 0.08)'
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
                  display: 'block',
                  filter: `brightness(${0.45 + (brightness / 100) * 0.55}) contrast(1.06)`,
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
                top: '14px',
                left: '14px',
                backgroundColor: 'rgba(13, 13, 17, 0.9)',
                border: '1px solid #d78c43',
                borderRadius: '8px',
                padding: '6px 12px',
                backdropFilter: 'blur(10px)',
                fontSize: '12px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#d78c43',
                  boxShadow: '0 0 10px #d78c43'
                }} />
                <span style={{ fontWeight: 700 }}>
                  {currentRoom.label} · {kelvin}K · {brightness}%
                </span>
              </div>
            </div>

            {/* Live Atmosphere Explanation Strip */}
            <div style={{
              backgroundColor: '#1b1b24',
              border: '1px solid rgba(215, 140, 67, 0.25)',
              borderRadius: '8px',
              padding: '10px 16px',
              fontSize: '12.5px',
              color: '#ffffff',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              {getKelvinDescription(kelvin)}
            </div>
          </div>

          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0, width: '100%' }}>
            
            {/* 1. Fixture & Room Selector Pills */}
            <div style={{ minWidth: 0, width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{
                  fontSize: '11px',
                  color: '#ffffff',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Sparkles size={12} color="#d78c43" /> 1. FIXTURE TYPE
                </label>

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
                    background: 'rgba(215, 140, 67, 0.15)',
                    color: '#d78c43',
                    border: '1px solid rgba(215, 140, 67, 0.4)',
                    borderRadius: '14px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  NEXT ➔
                </button>
              </div>

              <div 
                ref={pillContainerRef}
                style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  overflowX: 'auto', 
                  maxWidth: '100%',
                  paddingBottom: '4px',
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
                        ? 'var(--color-amber-gradient)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      border: '1px solid ' + (selectedRoom === r.id ? '#d78c43' : 'rgba(255, 255, 255, 0.1)'),
                      borderRadius: '16px',
                      padding: '8px 14px',
                      fontSize: '11.5px',
                      fontWeight: selectedRoom === r.id ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      boxShadow: selectedRoom === r.id ? '0 4px 12px rgba(215, 140, 67, 0.35)' : 'none'
                    }}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Color Temperature (Kelvin) Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: 800 }}>
                  2. LIGHT COLOR (WARMTH)
                </span>
                <span style={{ fontSize: '13px', color: '#d78c43', fontWeight: 800 }}>
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
                style={{ width: '100%', accentColor: '#d78c43', cursor: 'pointer', height: '8px', margin: '6px 0' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8', fontWeight: 600 }}>
                <span>🟡 2200K Sunset</span>
                <span>⚪ 3000K Warm</span>
                <span>🔵 4000K Daylight</span>
              </div>
            </div>

            {/* 3. Brightness Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: 800 }}>
                  3. BRIGHTNESS (DIMMING)
                </span>
                <span style={{ fontSize: '13px', color: '#d78c43', fontWeight: 800 }}>
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
                style={{ width: '100%', accentColor: '#d78c43', cursor: 'pointer', height: '8px', margin: '6px 0' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8', fontWeight: 600 }}>
                <span>10% Dim</span>
                <span>50% Ambient</span>
                <span>100% Full Brilliance</span>
              </div>
            </div>

            {/* 4. Quick Presets */}
            <div>
              <div style={{ fontSize: '10.5px', color: '#d78c43', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                Atmosphere Presets:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                <button
                  onClick={() => setPreset(2200, 45)}
                  style={{
                    padding: '8px 4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: kelvin === 2200 ? '1.5px solid #d78c43' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: kelvin === 2200 ? 'rgba(215, 140, 67, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  🌙 Sunset
                </button>
                <button
                  onClick={() => setPreset(3000, 75)}
                  style={{
                    padding: '8px 4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: kelvin === 3000 ? '1.5px solid #d78c43' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: kelvin === 3000 ? 'rgba(215, 140, 67, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  🍸 Warm
                </button>
                <button
                  onClick={() => setPreset(4000, 100)}
                  style={{
                    padding: '8px 4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: kelvin === 4000 ? '1.5px solid #d78c43' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: kelvin === 4000 ? 'rgba(215, 140, 67, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: '#ffffff',
                    cursor: 'pointer'
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
              className="btn-amber"
              style={{
                width: '100%',
                padding: '12px 14px',
                fontSize: '12px',
                justifyContent: 'center',
                fontWeight: 700,
                marginTop: '4px'
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
            padding: 16px !important;
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
