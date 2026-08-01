import React from 'react';

export default function JhoomerLogo({ size = 48, className = "" }) {
  const id = React.useId();
  const goldGradientId = `gold-grad-${id.replace(/:/g, '')}`;
  const goldBezelId = `gold-bezel-${id.replace(/:/g, '')}`;
  const darkBgId = `dark-bg-${id.replace(/:/g, '')}`;
  const glowId = `glow-${id.replace(/:/g, '')}`;

  return (
    <div 
      className={`luxury-brand-logo-emblem ${className}`} 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justify: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35), 0 2px 6px rgba(10, 15, 26, 0.4)',
        cursor: 'pointer',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: '#0c1322',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <defs>
          {/* Metallic Gold Gradient for Outer Bezel */}
          <linearGradient id={goldBezelId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9F1D8" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#AA7C11" />
            <stop offset="75%" stopColor="#F3E5AB" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>

          {/* Core Gold Accent Gradient */}
          <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2BF" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>

          {/* Deep Royal Midnight Blue Inner Background */}
          <radialGradient id={darkBgId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#141f36" />
            <stop offset="65%" stopColor="#0a101d" />
            <stop offset="100%" stopColor="#05080e" />
          </radialGradient>

          {/* Soft Bulb Glow Filter */}
          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Metallic Bezel Ring */}
        <circle cx="50" cy="50" r="48" fill={`url(#${goldBezelId})`} />
        <circle cx="50" cy="50" r="44.5" fill="#0c1322" />
        <circle cx="50" cy="50" r="43" fill={`url(#${darkBgId})`} />

        {/* Inner Gold Thin Border Accent */}
        <circle cx="50" cy="50" r="42.5" stroke={`url(#${goldGradientId})`} strokeWidth="0.8" strokeOpacity="0.8" fill="none" />

        {/* Delicate Golden Inner Ring Aura */}
        <circle cx="50" cy="50" r="32" stroke={`url(#${goldGradientId})`} strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="3 2" fill="none" />

        {/* --- ROYAL JHOOMER / CHANDELIER CREST --- */}
        <g transform="translate(0, 1)">
          {/* Top Hanging Ring */}
          <circle cx="50" cy="24" r="3" stroke={`url(#${goldGradientId})`} strokeWidth="1.5" fill="none" />
          
          {/* Main Vertical Center Support Rod */}
          <line x1="50" y1="27" x2="50" y2="57" stroke={`url(#${goldGradientId})`} strokeWidth="1.4" strokeLinecap="round" />

          {/* Upper Arc Tier */}
          <path d="M 40 37 Q 50 33 60 37" stroke={`url(#${goldGradientId})`} strokeWidth="1.4" fill="none" strokeLinecap="round" />
          
          {/* Middle Main Crown Arch */}
          <path d="M 33 46 C 36 38, 64 38, 67 46" stroke={`url(#${goldGradientId})`} strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Lower Decorative Graceful Swoop */}
          <path d="M 33 46 Q 50 56 67 46" stroke={`url(#${goldGradientId})`} strokeWidth="1.4" fill="none" strokeLinecap="round" />

          {/* Candle / Bulb Stems */}
          <line x1="33" y1="46" x2="33" y2="41" stroke={`url(#${goldGradientId})`} strokeWidth="1.2" />
          <line x1="41.5" y1="40" x2="41.5" y2="35" stroke={`url(#${goldGradientId})`} strokeWidth="1.2" />
          <line x1="50" y1="36" x2="50" y2="31" stroke={`url(#${goldGradientId})`} strokeWidth="1.2" />
          <line x1="58.5" y1="40" x2="58.5" y2="35" stroke={`url(#${goldGradientId})`} strokeWidth="1.2" />
          <line x1="67" y1="46" x2="67" y2="41" stroke={`url(#${goldGradientId})`} strokeWidth="1.2" />

          {/* Glowing Light Spheres (Bulbs) */}
          <g filter={`url(#${glowId})`}>
            {/* Center Top Bulb */}
            <circle cx="50" cy="30" r="2.2" fill="#FFFFFF" />
            <circle cx="50" cy="30" r="3.4" fill="#FFE599" fillOpacity="0.75" />

            {/* Mid Left Bulb */}
            <circle cx="41.5" cy="34" r="2.0" fill="#FFFFFF" />
            <circle cx="41.5" cy="34" r="3.2" fill="#FFE599" fillOpacity="0.75" />

            {/* Mid Right Bulb */}
            <circle cx="58.5" cy="34" r="2.0" fill="#FFFFFF" />
            <circle cx="58.5" cy="34" r="3.2" fill="#FFE599" fillOpacity="0.75" />

            {/* Far Left Bulb */}
            <circle cx="33" cy="40" r="1.8" fill="#FFFFFF" />
            <circle cx="33" cy="40" r="2.9" fill="#FFE599" fillOpacity="0.75" />

            {/* Far Right Bulb */}
            <circle cx="67" cy="40" r="1.8" fill="#FFFFFF" />
            <circle cx="67" cy="40" r="2.9" fill="#FFE599" fillOpacity="0.75" />
          </g>

          {/* Hanging Crystal Teardrops (Pendants) */}
          {/* Left Crystal */}
          <path d="M 35 52 C 33 55, 33 59, 35 61 C 37 59, 37 55, 35 52 Z" fill={`url(#${goldGradientId})`} />
          {/* Center Main Crystal */}
          <path d="M 50 58 C 47.5 62, 47.5 67, 50 69 C 52.5 67, 52.5 62, 50 58 Z" fill={`url(#${goldGradientId})`} />
          {/* Right Crystal */}
          <path d="M 65 52 C 63 55, 63 59, 65 61 C 67 59, 67 55, 65 52 Z" fill={`url(#${goldGradientId})`} />

          {/* Tiny Connectors to Crystals */}
          <line x1="35" y1="49.5" x2="35" y2="52" stroke={`url(#${goldGradientId})`} strokeWidth="0.8" />
          <line x1="50" y1="55" x2="50" y2="58" stroke={`url(#${goldGradientId})`} strokeWidth="1" />
          <line x1="65" y1="49.5" x2="65" y2="52" stroke={`url(#${goldGradientId})`} strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

