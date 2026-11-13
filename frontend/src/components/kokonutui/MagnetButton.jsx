import React, { useRef, useState } from 'react';

/**
 * MagnetButton — Inspired by Kokonut UI / UI UX Showcase
 * Smooth cursor-following magnetic pull effect for primary buttons and CTAs
 */
export const MagnetButton = ({
  children,
  onClick,
  className = '',
  pullStrength = 0.35,
  ...props
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * pullStrength;
    const deltaY = (e.clientY - centerY) * pullStrength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out'
      }}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

