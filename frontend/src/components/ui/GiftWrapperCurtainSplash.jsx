import React, { useEffect, useState } from 'react';
import { animate } from 'animejs';
import { Sparkles, Gift } from 'lucide-react';

/**
 * Splash Screen (Exact Chronological Order):
 * Step 1: Velvet curtains start fully closed across the screen, then open/part from center to both sides.
 * Step 2: The curtains reveal the 3D gift box on stage, which unties ribbons & wrapper flaps unfold outward with amber glow.
 * Step 3: Official brand logo rises out of the gift box, displaying the animated typography:
 *         "Welcome to"
 *         "Sai Kumar Digital Color Lab & Studios..."
 *         "Customise Gift — Create • Personalise • Cherish"
 * Step 4: Smooth transition into the main website.
 */
export const GiftWrapperCurtainSplash = ({ onComplete }) => {
  const [curtainsOpened, setCurtainsOpened] = useState(false);
  const [boxUnwrapped, setBoxUnwrapped] = useState(false);
  const [logoRevealed, setLogoRevealed] = useState(false);

  useEffect(() => {
    try {
      // -------------------------------------------------------------
      // STEP 1: Curtains Start Closed, Then Open from Center to Sides
      // -------------------------------------------------------------
      setTimeout(() => {
        animate('#curtain-panel-left', {
          translateX: [0, '-100%'],
          duration: 900,
          ease: 'inOutCubic'
        });

        animate('#curtain-panel-right', {
          translateX: [0, '100%'],
          duration: 900,
          ease: 'inOutCubic',
          onComplete: () => {
            setCurtainsOpened(true);
          }
        });
      }, 400);

      // -------------------------------------------------------------
      // STEP 2: 3D Gift Box Appears & Unwraps on Stage
      // -------------------------------------------------------------
      setTimeout(() => {
        animate('#stage-gift-box', {
          scale: [0.75, 1],
          opacity: [0, 1],
          duration: 500,
          ease: 'outBack'
        });

        // Ribbons untie
        setTimeout(() => {
          animate('#curtain-ribbon-h', {
            scaleX: [1, 0],
            opacity: [1, 0],
            duration: 350,
            ease: 'inOutQuad'
          });

          animate('#curtain-ribbon-v', {
            scaleY: [1, 0],
            opacity: [1, 0],
            duration: 350,
            ease: 'inOutQuad'
          });

          animate('#curtain-bow', {
            translateY: [0, -50],
            scale: [1, 1.3, 0],
            opacity: [1, 0],
            duration: 400,
            ease: 'outBack'
          });
        }, 300);

        // Flaps unfold 3D outward & Lid lifts
        setTimeout(() => {
          animate('#box-flap-left', {
            rotateZ: [0, -75],
            translateX: [0, -35],
            opacity: [1, 0],
            duration: 450,
            ease: 'outQuad'
          });

          animate('#box-flap-right', {
            rotateZ: [0, 75],
            translateX: [0, 35],
            opacity: [1, 0],
            duration: 450,
            ease: 'outQuad'
          });

          animate('#box-lid-lift', {
            translateY: [0, -70],
            rotateX: [0, -25],
            opacity: [1, 0],
            duration: 450,
            ease: 'outCubic'
          });

          animate('#stage-amber-glow', {
            scale: [0.5, 2.2],
            opacity: [0, 0.9, 0.3],
            duration: 600,
            ease: 'outQuad'
          });

          setBoxUnwrapped(true);
        }, 650);

      }, 1000);

      // -------------------------------------------------------------
      // STEP 3: Logo Rises from Box & Animated Welcome Typography
      // -------------------------------------------------------------
      setTimeout(() => {
        setLogoRevealed(true);

        animate('#logo-rising-plate', {
          translateY: [50, 0],
          scale: [0.7, 1],
          opacity: [0, 1],
          duration: 650,
          ease: 'outBack'
        });

        animate('#text-line-welcome', {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 400,
          ease: 'outCubic'
        });

        animate('#text-line-title', {
          opacity: [0, 1],
          translateY: [15, 0],
          duration: 500,
          delay: 100,
          ease: 'outCubic'
        });

        animate('#text-line-tagline', {
          opacity: [0, 1],
          duration: 400,
          delay: 250,
          ease: 'outQuad'
        });
      }, 2100);

      // -------------------------------------------------------------
      // STEP 4: Smooth Fade Exit into Website
      // -------------------------------------------------------------
      setTimeout(() => {
        animate('#curtain-splash-root', {
          opacity: [1, 0],
          duration: 450,
          ease: 'inOutQuad',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }, 3700);

    } catch (e) {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 2500);
    }
  }, [onComplete]);

  return (
    <div
      id="curtain-splash-root"
      className="fixed inset-0 z-[999999] flex items-center justify-center select-none overflow-hidden bg-[#FAF8F5]"
      style={{ backgroundColor: '#FAF8F5' }}
    >
      {/* ------------------------------------------------------------- */}
      {/* STEP 1: Theatrical Curtains (Initially Closed Over Full Screen) */}
      {/* ------------------------------------------------------------- */}
      <div
        id="curtain-panel-left"
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#991707] via-[#C62828] to-[#FC3C1E] z-30 shadow-2xl border-r-2 border-[#FC3C1E]/40 flex items-center justify-end pr-8"
        style={{ willChange: 'transform' }}
      >
        <div className="w-1.5 h-full bg-[#FC3C1E]/30 shadow-lg" />
      </div>

      <div
        id="curtain-panel-right"
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#991707] via-[#C62828] to-[#FC3C1E] z-30 shadow-2xl border-l-2 border-[#FC3C1E]/40 flex items-center justify-start pl-8"
        style={{ willChange: 'transform' }}
      >
        <div className="w-1.5 h-full bg-[#FC3C1E]/30 shadow-lg" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STEP 2 & 3: Stage Behind Curtains (Gift Box & Logo Rise)       */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-md w-full">
        
        {/* Amber & Crimson Ambient Glow Burst */}
        <div
          id="stage-amber-glow"
          className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#FC3C1E] via-[#BA2410] to-[#FFEBE8] opacity-0 blur-3xl pointer-events-none"
        />

        {/* 3D Gift Box Stage */}
        <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
          
          <div
            id="stage-gift-box"
            className="relative w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#991707] via-[#C62828] to-[#FC3C1E] shadow-2xl p-2.5 flex items-center justify-center border-2 border-[#FC3C1E] overflow-hidden opacity-0"
          >
            {/* Box Flaps */}
            <div
              id="box-flap-left"
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#7A0D00] origin-left border-r border-[#FC3C1E]/40"
            />
            <div
              id="box-flap-right"
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#C62828] origin-right border-l border-[#FC3C1E]/40"
            />

            {/* Red & Gold Ribbons */}
            <div
              id="curtain-ribbon-h"
              className="absolute left-0 right-0 h-4 bg-gradient-to-r from-[#BA2410] via-[#FC3C1E] to-[#BA2410] shadow-md z-10"
            />
            <div
              id="curtain-ribbon-v"
              className="absolute top-0 bottom-0 w-4 bg-gradient-to-b from-[#BA2410] via-[#FC3C1E] to-[#BA2410] shadow-md z-10"
            />

            {/* Rising Logo Inside Box */}
            <div
              id="logo-rising-plate"
              className="absolute inset-2 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 z-20 opacity-0 border border-[#FC3C1E]/30"
            >
              <img
                src="/images/logo/saikumar-logo-new.png"
                alt="Saikumar Digital Lab & Studio - Customise Gift"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 3D Box Lid */}
          <div
            id="box-lid-lift"
            className="absolute -top-3 w-40 h-9 rounded-xl bg-gradient-to-r from-[#7A0D00] via-[#BA2410] to-[#FC3C1E] shadow-lg border-b-2 border-black/20 z-25"
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 bg-[#FC3C1E]" />
          </div>

          {/* 3D Ribbon Bow with Sparkle */}
          <div
            id="curtain-bow"
            className="absolute -top-8 z-30 flex items-center justify-center text-[#FC3C1E] drop-shadow-xl"
          >
            <div className="relative">
              <Gift className="w-9 h-9 fill-current text-[#FC3C1E]" />
              <Sparkles className="w-4 h-4 text-white absolute -top-1 -right-1 animate-ping" />
            </div>
          </div>

        </div>

        {/* STEP 3 Typography */}
        <div className="space-y-2 min-h-[95px] flex flex-col justify-center">
          <p
            id="text-line-welcome"
            className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FC3C1E] opacity-0"
          >
            Welcome to
          </p>

          <h1
            id="text-line-title"
            className="text-xl sm:text-2xl md:text-3xl font-black text-[#191919] tracking-tight font-serif leading-tight opacity-0"
          >
            Sai Kumar Digital Color Lab &amp; Studios...
          </h1>

          <p
            id="text-line-tagline"
            className="text-xs sm:text-sm font-semibold text-[#C62828] tracking-wider uppercase opacity-0 pt-0.5"
          >
            Customise Gift — Create • Personalise • Cherish
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full mt-7 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#991707] via-[#FC3C1E] to-[#991707] animate-pulse rounded-full" />
        </div>

      </div>

    </div>
  );
};
