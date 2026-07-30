import React from 'react';

export default function JhoomerLogo({ size = 52, iconSize = 36 }) {
  return (
    <div className="jhoomer-3d-emblem" style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      // Symmetrical 3D Gold Metallic Rim (100% Concentric)
      background: 'linear-gradient(135deg, #fef08a 0%, #f59e0b 40%, #d4af37 70%, #78350f 100%)',
      padding: '2.5px',
      boxShadow: '0 0 16px rgba(245, 158, 11, 0.45), 0 0 6px rgba(212, 175, 55, 0.6), inset 0 0 3px #ffffff',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      position: 'relative',
      flexShrink: 0,
      cursor: 'pointer'
    }}>
      {/* Clean Symmetrical Medallion Plate (Dead Center 50% 50%) */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fffdf2 55%, #fef08a 85%, #fcd34d 100%)',
        border: '1.5px solid #d4af37',
        boxShadow: 'inset 0 0 10px rgba(212, 175, 55, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Live Concentric Backlight Radial Glow (Centered) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '75%',
          height: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(254, 240, 138, 0.8) 45%, rgba(245, 158, 11, 0.35) 75%, rgba(255,255,255,0) 100%)',
          animation: 'bulbGlowPulse 2.2s infinite ease-in-out',
          pointerEvents: 'none'
        }} />

        {/* 100% Dead-Center Light Bulb SVG (Center = X:50, Y:50) */}
        <svg 
          width={iconSize} 
          height={iconSize} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="glowing-bulb-icon"
          style={{ display: 'block', position: 'relative', zIndex: 2 }}
        >
          <defs>
            {/* Rich Metallic Gold Base Gradient */}
            <linearGradient id="bulbBaseGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#fbbf24" />
              <stop offset="70%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            {/* Glowing Filament Core Gradient */}
            <radialGradient id="filamentCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fff59d" />
              <stop offset="75%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>

            {/* Glowing Light Ray Gradient */}
            <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>

          {/* 8 Radial Light Beams Symmetrically Centered around (50, 50) */}
          <g style={{ animation: 'lightBeamBlowing 1.8s infinite ease-in-out' }}>
            {/* Top Ray */}
            <line x1="50" y1="8" x2="50" y2="17" stroke="url(#rayGrad)" strokeWidth="3" strokeLinecap="round" />
            {/* Top Right Ray */}
            <line x1="73" y1="19" x2="65" y2="27" stroke="url(#rayGrad)" strokeWidth="2.8" strokeLinecap="round" />
            {/* Right Ray */}
            <line x1="84" y1="44" x2="75" y2="44" stroke="url(#rayGrad)" strokeWidth="3" strokeLinecap="round" />
            {/* Bottom Right Ray */}
            <line x1="73" y1="69" x2="65" y2="61" stroke="url(#rayGrad)" strokeWidth="2.8" strokeLinecap="round" />
            {/* Bottom Left Ray */}
            <line x1="27" y1="69" x2="35" y2="61" stroke="url(#rayGrad)" strokeWidth="2.8" strokeLinecap="round" />
            {/* Left Ray */}
            <line x1="16" y1="44" x2="25" y2="44" stroke="url(#rayGrad)" strokeWidth="3" strokeLinecap="round" />
            {/* Top Left Ray */}
            <line x1="27" y1="19" x2="35" y2="27" stroke="url(#rayGrad)" strokeWidth="2.8" strokeLinecap="round" />
          </g>

          {/* Outer Glass Dome Shell (Centered vertically from Y:18 to Y:68, Base: Y:68 to Y:82. Center Y = 50.0) */}
          <path 
            d="M 31 39 C 31 23, 69 23, 69 39 C 69 50, 58 58, 58 63 L 42 63 C 42 58, 31 50, 31 39 Z" 
            fill="url(#filamentCoreGlow)" 
            fillOpacity="0.35"
            stroke="url(#bulbBaseGold)" 
            strokeWidth="2.5" 
            filter="drop-shadow(0 0 6px #fbbf24)"
          />

          {/* Glass Specular Highlighting Curved Arc */}
          <path d="M 36 33 C 38 27, 46 25, 52 25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

          {/* Glowing Inner Filament Loop (Centered at Y:39) */}
          <g>
            <path 
              d="M 43 45 C 43 34, 57 34, 57 45 Q 57 54 50 59 Q 43 54 43 45 Z" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="2.8" 
              strokeLinecap="round"
              filter="drop-shadow(0 0 5px #ffffff)"
            />
            {/* Center Filament Heart Sparkle (Dead Center Y:39) */}
            <circle cx="50" cy="39" r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)" />
            <line x1="45" y1="53" x2="45" y2="63" stroke="url(#bulbBaseGold)" strokeWidth="1.8" />
            <line x1="55" y1="53" x2="55" y2="63" stroke="url(#bulbBaseGold)" strokeWidth="1.8" />
          </g>

          {/* Metallic Threaded Screw Base (Socket Y:63 to Y:82) */}
          <rect x="42" y="63" width="16" height="3.5" rx="1" fill="url(#bulbBaseGold)" stroke="#78350f" strokeWidth="0.8" />
          <rect x="43" y="66.5" width="14" height="3.5" rx="1" fill="url(#bulbBaseGold)" stroke="#78350f" strokeWidth="0.8" />
          <rect x="44" y="70" width="12" height="3.5" rx="1" fill="url(#bulbBaseGold)" stroke="#78350f" strokeWidth="0.8" />
          
          {/* Bottom Screw Tip (Bottom Point Y:78) */}
          <path d="M 46 73.5 L 54 73.5 L 52 78 L 48 78 Z" fill="#78350f" />
        </svg>

      </div>
    </div>
  );
}
