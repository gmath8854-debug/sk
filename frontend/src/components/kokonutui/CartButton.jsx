import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';

/**
 * Kokonut UI inspired CartButton with particle ripple & instant feedback
 * Customized with brand token #FC3C1E & #FC3C1E
 */
export const CartButton = ({
  onClick,
  isAdded = false,
  className = '',
  item
}) => {
  const [animating, setAnimating] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setAnimating(true);
    if (onClick) onClick();
    setTimeout(() => setAnimating(false), 900);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Add to cart"
      className={`relative inline-flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-2.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wide overflow-hidden transition-all duration-300 border shrink-0 ${
        isAdded || animating
          ? 'bg-[#12281C] text-[#F1DDC0] border-[#12281C] shadow-md scale-98'
          : 'bg-[#FAF8F5] text-gray-800 border-[#E8DFD1] hover:bg-[#FFEBE8] hover:text-[#C62828] hover:border-[#FC3C1E]/60 hover:shadow-sm'
      } ${className}`}
    >
      <span className="relative z-10 flex items-center gap-1.5 transition-transform duration-200 whitespace-nowrap">
        {isAdded || animating ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#FC3C1E] animate-bounce shrink-0" />
            <span>Added!</span>
          </>
        ) : (
          <>
            <ShoppingBag className="w-3.5 h-3.5 text-[#FC3C1E] shrink-0" />
            <span>Add to cart</span>
          </>
        )}
      </span>

      {/* Ripple background effect */}
      {animating && (
        <span className="absolute inset-0 bg-[#FC3C1E]/10 animate-ping rounded-full pointer-events-none" />
      )}
    </button>
  );
};

