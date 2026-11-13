import React from 'react';

/**
 * React Bits / Magic UI inspired Luxury Gifting Particles & Floating Elements
 * Contains 3D gift box silhouettes, celebration ribbons, bows, and ambient warm bokeh
 */
export const GiftingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Warm Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FC3C1E]/10 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FC3C1E]/10 blur-3xl" />

      {/* Subtle Floating SVGs: Gift Boxes & Tied Ribbons */}
      <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        
        {/* Gift Box 1 (Top Left) */}
        <g className="animate-pulse" style={{ animationDuration: '4s' }} transform="translate(60, 80) rotate(-12) scale(1.1)">
          <rect x="0" y="15" width="45" height="35" rx="4" fill="#FC3C1E" />
          <rect x="-3" y="10" width="51" height="9" rx="3" fill="#FC3C1E" />
          <line x1="22.5" y1="10" x2="22.5" y2="50" stroke="#FFF0EE" strokeWidth="4" />
          <path d="M 12 10 C 12 2, 22 2, 22.5 10 C 23 2, 33 2, 33 10" fill="none" stroke="#FC3C1E" strokeWidth="3" />
        </g>

        {/* Celebration Star / Sparkle (Top Center) */}
        <g transform="translate(520, 45) scale(0.9)">
          <path d="M 15 0 L 19 11 L 30 15 L 19 19 L 15 30 L 11 19 L 0 15 L 11 11 Z" fill="#FC3C1E" opacity="0.6" />
        </g>

        {/* Gift Box 2 (Bottom Right) */}
        <g className="animate-pulse" style={{ animationDuration: '5s' }} transform="translate(1080, 360) rotate(15) scale(1.3)">
          <rect x="0" y="18" width="50" height="40" rx="5" fill="#12281C" />
          <rect x="-3" y="12" width="56" height="10" rx="3" fill="#F1DDC0" />
          <line x1="25" y1="12" x2="25" y2="58" stroke="#C8A96B" strokeWidth="5" />
          <path d="M 14 12 C 14 4, 25 4, 25 12 C 25 4, 36 4, 36 12" fill="none" stroke="#C8A96B" strokeWidth="3.5" />
        </g>

        {/* Floating Celebration Ribbon (Center Right) */}
        <path
          d="M 850 120 Q 920 180 870 240 T 960 320"
          fill="none"
          stroke="#FC3C1E"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.3"
        />

        {/* Floating Star (Bottom Left) */}
        <g transform="translate(140, 420) scale(0.7)">
          <path d="M 15 0 L 19 11 L 30 15 L 19 19 L 15 30 L 11 19 L 0 15 L 11 11 Z" fill="#FC3C1E" opacity="0.5" />
        </g>
      </svg>

    </div>
  );
};

