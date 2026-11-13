import React, { useEffect, useState } from 'react';
import { animate } from 'animejs';
import { Sparkles, Gift } from 'lucide-react';

/**
 * 3D Gift Wrapper Unwrapping Splash Screen
 * Featuring 3D ribbon untying, wrapper opening, light burst,
 * official brand logo reveal, and animated typography:
 * "Welcome to"
 * "Sai Kumar Digital Color Lab & Studios..."
 */
export const GiftWrapperSplash = ({ onComplete }) => {
  const [stage, setStage] = useState('wrapping'); // 'wrapping' -> 'unwrapped' -> 'done'

  useEffect(() => {
    try {
      // 1. Initial 3D gentle pulse of gift box
      animate('#gift-box-3d', {
        scale: [0.85, 1],
        rotateZ: [-3, 0],
        duration: 400,
        ease: 'outCubic'
      });

      // 2. Ribbon untying and parting sideways
      setTimeout(() => {
        animate('#ribbon-horizontal', {
          scaleX: [1, 0],
          opacity: [1, 0],
          duration: 350,
          ease: 'inOutQuad'
        });

        animate('#ribbon-vertical', {
          scaleY: [1, 0],
          opacity: [1, 0],
          duration: 350,
          ease: 'inOutQuad'
        });

        animate('#ribbon-bow', {
          translateY: [0, -40],
          scale: [1, 1.4, 0],
          opacity: [1, 1, 0],
          duration: 400,
          ease: 'outBack'
        });
      }, 350);

      // 3. Gift Lid lifts up & 3D Flaps unfold
      setTimeout(() => {
        animate('#gift-box-lid', {
          translateY: [0, -60],
          rotateX: [0, -25],
          opacity: [1, 0.4, 0],
          duration: 450,
          ease: 'outCubic'
        });

        animate('#wrapper-flap-left', {
          rotateZ: [0, -65],
          translateX: [0, -25],
          opacity: [1, 0],
          duration: 450,
          ease: 'outQuad'
        });

        animate('#wrapper-flap-right', {
          rotateZ: [0, 65],
          translateX: [0, 25],
          opacity: [1, 0],
          duration: 450,
          ease: 'outQuad'
        });

        animate('#box-glow', {
          scale: [0.5, 2.2],
          opacity: [0, 0.9, 0.4],
          duration: 600,
          ease: 'outQuad'
        });
      }, 600);

      // 4. Logo Rises Out of Box with Glow
      setTimeout(() => {
        setStage('unwrapped');

        animate('#revealed-logo-wrapper', {
          translateY: [40, 0],
          scale: [0.75, 1],
          opacity: [0, 1],
          duration: 600,
          ease: 'outBack'
        });

        // 5. Welcome Text Typographic Stagger
        animate('#welcome-line-1', {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 400,
          ease: 'outCubic'
        });

        animate('#welcome-line-2', {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 500,
          delay: 100,
          ease: 'outCubic'
        });

        animate('#welcome-sub', {
          opacity: [0, 1],
          duration: 400,
          delay: 250,
          ease: 'outQuad'
        });
      }, 950);

      // 6. Smooth Curtain Exit Reveal
      setTimeout(() => {
        animate('#splash-curtain-root', {
          opacity: [1, 0],
          translateY: [0, -20],
          duration: 450,
          ease: 'inOutCubic',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }, 2300);

    } catch (e) {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
    }
  }, [onComplete]);

  return (
    <div
      id="splash-curtain-root"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF8F5] text-[#191919] select-none overflow-hidden"
      style={{ backgroundColor: '#FAF8F5' }}
    >
      {/* Background Soft Gold Ambient Light */}
      <div
        id="box-glow"
        className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#FC3C1E] via-[#FC3C1E] to-[#FFEBE8] opacity-0 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        
        {/* 3D Gift Box Unwrapping Container */}
        <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
          
          {/* Box Base (The 3D wrapped box) */}
          <div
            id="gift-box-3d"
            className="relative w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#FC3C1E] via-[#E52E10] to-[#FC3C1E] shadow-2xl p-2 flex items-center justify-center border-2 border-[#FC3C1E]/40 overflow-hidden"
          >
            {/* Wrapper Flap Left */}
            <div
              id="wrapper-flap-left"
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#C62828] origin-left border-r border-[#FC3C1E]/30"
            />
            {/* Wrapper Flap Right */}
            <div
              id="wrapper-flap-right"
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#FC3C1E] origin-right border-l border-[#FC3C1E]/30"
            />

            {/* Horizontal Gold Ribbon */}
            <div
              id="ribbon-horizontal"
              className="absolute left-0 right-0 h-4 bg-gradient-to-r from-[#F8D978] via-[#FC3C1E] to-[#F8D978] shadow-md z-10"
            />

            {/* Vertical Gold Ribbon */}
            <div
              id="ribbon-vertical"
              className="absolute top-0 bottom-0 w-4 bg-gradient-to-b from-[#F8D978] via-[#FC3C1E] to-[#F8D978] shadow-md z-10"
            />

            {/* Inner White Plate holding Logo */}
            <div
              id="revealed-logo-wrapper"
              className="absolute inset-2 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2 z-20 opacity-0 border border-[#FC3C1E]/30"
            >
              <img
                src="/images/logo/saikumar-logo-new.png"
                alt="Saikumar Digital Lab & Studio - Customise Gift"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 3D Gift Box Lid */}
          <div
            id="gift-box-lid"
            className="absolute -top-3 w-36 h-8 rounded-xl bg-gradient-to-r from-[#C62828] via-[#FC3C1E] to-[#FC3C1E] shadow-lg border-b-2 border-black/20 z-30"
          >
            {/* Lid Ribbon Accent */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 bg-[#FC3C1E]" />
          </div>

          {/* 3D Ribbon Bow at the top */}
          <div
            id="ribbon-bow"
            className="absolute -top-7 z-40 flex items-center justify-center text-[#FC3C1E] drop-shadow-lg"
          >
            <div className="relative">
              <Gift className="w-8 h-8 fill-current text-[#FC3C1E]" />
              <Sparkles className="w-4 h-4 text-white absolute -top-1 -right-1 animate-ping" />
            </div>
          </div>
        </div>

        {/* Animated Typography as specified by User */}
        <div className="space-y-1.5 min-h-[90px] flex flex-col justify-center">
          <p
            id="welcome-line-1"
            className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FC3C1E] opacity-0"
          >
            Welcome to
          </p>

          <h1
            id="welcome-line-2"
            className="text-lg sm:text-xl md:text-2xl font-black text-[#191919] tracking-tight font-serif leading-tight opacity-0"
          >
            Sai Kumar Digital Color Lab &amp; Studios...
          </h1>

          <p
            id="welcome-sub"
            className="text-[11px] sm:text-xs font-semibold text-[#FC3C1E] tracking-wider uppercase opacity-0 pt-0.5"
          >
            Customise Gift — Create • Personalise • Cherish
          </p>
        </div>

        {/* Minimal Luxury Progress Bar */}
        <div className="w-40 h-1 bg-gray-200/80 rounded-full mt-6 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#FC3C1E] via-[#FC3C1E] to-[#8E986D] animate-pulse rounded-full" />
        </div>

      </div>
    </div>
  );
};

