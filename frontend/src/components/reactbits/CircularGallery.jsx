import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * CircularGallery Component (React Bits compliant)
 * Renders a cylindrical 3D curved gallery displaying items in a curved perspective.
 * Configured with bend, wave, gap, and smooth interactions.
 */
export const CircularGallery = ({
  items = [],
  bend = 3,
  textColor = '#71717a',
  borderRadius = 0.05,
  scrollEase = 0.05,
  onItemClick,
  itemSize = 1,
  itemAspect = 0.78,
  gap = 0.26,
  wave = 1,
  fadeEdges = 0.12,
  shadow = 0.25,
  scrollSpeed = 2,
  autoScroll = 0,
  snap = true,
  grayscale = false,
  showTitles = true,
  openOnClick = true,
  intro = true
}) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // If items are strings, convert to objects
  const normalizedItems = (items || []).map((it, idx) => {
    if (typeof it === 'string') {
      return { image: it, text: `Item 0${idx + 1}` };
    }
    return {
      image: it.image || it.url,
      text: it.text || it.caption || `Item 0${idx + 1}`
    };
  });

  const total = normalizedItems.length;

  const nextItem = () => {
    if (total > 0) setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevItem = () => {
    if (total > 0) setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-10 select-none bg-gradient-to-b from-transparent via-black/5 to-transparent rounded-3xl"
      style={{ minHeight: '520px', perspective: '1100px' }}
    >
      {/* Curved Carousel Container */}
      <div
        className="relative w-full h-[460px] flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {normalizedItems.map((item, idx) => {
          const offset = idx - currentIndex;
          // Calculate 3D circular cylinder angle
          const angle = offset * (28 * (gap || 1));
          const zDistance = -Math.abs(offset) * 80;
          const xOffset = offset * 210;
          const isCenter = idx === currentIndex;
          const isNear = Math.abs(offset) <= 2;

          if (!isNear && Math.abs(offset) > 3) return null;

          return (
            <div
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                if (onItemClick) onItemClick(item, idx);
              }}
              style={{
                position: 'absolute',
                width: '260px',
                height: `${260 / (itemAspect || 0.78)}px`,
                transform: `translateX(${xOffset}px) translateZ(${zDistance}px) rotateY(${angle * (bend / 3)}deg)`,
                transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: Math.abs(offset) > 2 ? 0.3 : 1 - Math.abs(offset) * (fadeEdges || 0.2),
                filter: grayscale && !isCenter ? 'grayscale(80%)' : 'none',
                zIndex: 30 - Math.abs(offset),
                cursor: 'pointer'
              }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 bg-white group hover:border-[#FC3C1E] transition-all"
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              {showTitles && (
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-black tracking-wider uppercase font-serif drop-shadow-md">
                    {item.text}
                  </p>
                  <p className="text-[10px] text-gray-300 mt-0.5">Click to focus</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Control Buttons */}
      <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-4 z-40">
        <button
          type="button"
          onClick={prevItem}
          className="w-11 h-11 rounded-full bg-white/95 text-gray-900 border border-gray-200 shadow-xl flex items-center justify-center hover:bg-[#FC3C1E] hover:text-white transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold text-gray-500 bg-white/90 px-4 py-1.5 rounded-full shadow-sm border border-gray-200">
          {currentIndex + 1} of {total}
        </span>
        <button
          type="button"
          onClick={nextItem}
          className="w-11 h-11 rounded-full bg-white/95 text-gray-900 border border-gray-200 shadow-xl flex items-center justify-center hover:bg-[#FC3C1E] hover:text-white transition-all active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
export default CircularGallery;

