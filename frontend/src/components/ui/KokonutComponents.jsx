import React from 'react';

// Kokonut UI inspired Slide-Text Button
export const SlideButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  icon: Icon,
  type = 'button'
}) => {
  const baseClasses = `relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 group cursor-pointer shadow-sm`;

  const variantClasses = {
    primary: 'bg-customised-btn text-white hover:bg-[#A82512] shadow-customised-red/20 hover:shadow-lg hover:shadow-customised-red/30',
    secondary: 'bg-corporate-green text-white hover:bg-[#012614] shadow-corporate-green/20 hover:shadow-lg',
    gold: 'bg-photography-gold text-white hover:bg-[#C9781B] shadow-photography-gold/20 hover:shadow-lg',
    outline: 'border-2 border-customised-btn text-customised-btn hover:bg-customised-btn hover:text-white',
    dark: 'bg-[#242424] text-white hover:bg-[#111111]'
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-px">
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />}
        {children}
      </span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/15 transition-transform duration-300 ease-out pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {content}
    </button>
  );
};

// Kokonut UI inspired Shimmer Pill badge
export const ShimmerBadge = ({ children, className = '' }) => (
  <div className={`relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold overflow-hidden ${className}`}>
    <span className="relative z-10 flex items-center gap-1">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
  </div>
);

// Kokonut UI inspired Category Card
export const KokonutCard = ({ children, className = '', highlight = false }) => {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm border ${
        highlight
          ? 'border-customised-red/40 shadow-lg shadow-customised-red/10 hover:shadow-xl hover:shadow-customised-red/20'
          : 'border-[#E8DFD1] hover:border-[#D5C7AA] hover:shadow-xl hover:shadow-black/5'
      } ${className}`}
    >
      {children}
    </div>
  );
};

