import React, { useEffect, useState } from 'react';
import { animate } from 'animejs';
import { Sparkles } from 'lucide-react';

export const OpeningSplashLoader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 3D Emblem & Gift Unboxing Sequence with Anime.js
    try {
      animate('#splash-emblem', {
        scale: [0.85, 1],
        opacity: [0, 1],
        duration: 500,
        ease: 'outCubic'
      });

      animate('#splash-sparkles', {
        rotate: [0, 180],
        scale: [0.7, 1.1, 1],
        opacity: [0.4, 1],
        duration: 900,
        ease: 'outQuad'
      });

      // Curtain fade-out after ~1.1s
      setTimeout(() => {
        animate('#splash-curtain', {
          opacity: [1, 0],
          translateY: [0, -15],
          duration: 350,
          ease: 'inOutQuad',
          onComplete: () => {
            setVisible(false);
            if (onComplete) onComplete();
          }
        });
      }, 1000);
    } catch (e) {
      setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 800);
    }
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      id="splash-curtain"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F5] text-[#191919] select-none"
    >
      <div id="splash-emblem" className="text-center space-y-4 max-w-sm px-6">
        
        {/* 3D-styled Gift Box / Camera Emblem */}
        <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FC3C1E] via-[#FC3C1E] to-[#FFEBE8] opacity-25 blur-xl animate-pulse" />
          
          <div className="relative w-24 h-24 rounded-2xl bg-white shadow-2xl border border-[#FC3C1E]/40 flex items-center justify-center p-3">
            <img
              src="/images/logo/saikumar-logo-new.png"
              alt="Saikumar Digital Lab & Studio - Customise Gift"
              className="w-full h-full object-contain"
            />
          </div>

          <div id="splash-sparkles" className="absolute -top-2 -right-2 text-[#FC3C1E]">
            <Sparkles className="w-6 h-6 fill-current" />
          </div>
        </div>

        <div>
          <h2 className="font-extrabold text-xl tracking-tight text-[#191919]">
            Saikumar Digital Lab & Studio
          </h2>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#FC3C1E] mt-1">
            Personalised • Corporate • Moments
          </p>
        </div>

        {/* Minimal luxury loading indicator */}
        <div className="w-36 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#FC3C1E] to-[#FC3C1E] animate-pulse rounded-full" />
        </div>

      </div>
    </div>
  );
};

