import React from 'react';
import { Gift, Sparkles, Camera, Award, Clock } from 'lucide-react';

/**
 * Independent 3D Floating Background Gift Elements
 * Positioned in the outer background canvas (left, right, bottom) around the Hero section.
 * Does NOT touch or attach inside the slides. Moves gently up and down with CSS keyframes.
 */
export const HeroFloating3DBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* 3D Floating Item 1: Top-Left Wooden Plaque Motif */}
      <div
        className="hidden lg:block absolute -left-8 top-12 transition-transform"
        style={{
          animation: 'floatTopBottom 6s ease-in-out infinite',
        }}
      >
        <div className="p-3.5 rounded-3xl bg-white/85 backdrop-blur-md shadow-2xl border-2 border-[#FC3C1E]/40 flex items-center gap-3 transform -rotate-12 hover:rotate-0 transition-transform">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FC3C1E] to-[#FC3C1E] text-white flex items-center justify-center shadow-lg">
            <Gift className="w-6 h-6 fill-current" />
          </div>
          <div>
            <p className="text-[11px] font-black text-[#191919] uppercase leading-tight">3D Photo Planks</p>
            <p className="text-[10px] text-[#FC3C1E] font-bold">Handcrafted Keepsake</p>
          </div>
        </div>
      </div>

      {/* 3D Floating Item 2: Mid-Left Crystal Cube Motif */}
      <div
        className="hidden xl:block absolute -left-10 top-72 transition-transform"
        style={{
          animation: 'floatTopBottom 7.5s ease-in-out infinite reverse',
        }}
      >
        <div className="p-3 rounded-2xl bg-[#12281C]/90 text-[#F1DDC0] backdrop-blur-md shadow-2xl border border-[#FC3C1E]/40 flex items-center gap-2.5 transform rotate-6">
          <div className="w-10 h-10 rounded-xl bg-[#1F513D] text-[#FC3C1E] flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 fill-current" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider">Crystal Cube</p>
            <p className="text-[9px] text-[#F1DDC0]/80">Laser 3D Engraving</p>
          </div>
        </div>
      </div>

      {/* 3D Floating Item 3: Top-Right 4K Camera Lens Motif */}
      <div
        className="hidden lg:block absolute -right-8 top-16 transition-transform"
        style={{
          animation: 'floatTopBottom 5.5s ease-in-out infinite 1s',
        }}
      >
        <div className="p-3.5 rounded-3xl bg-white/85 backdrop-blur-md shadow-2xl border-2 border-[#BA2410]/40 flex items-center gap-3 transform rotate-12 hover:rotate-0 transition-transform">
          <div className="w-12 h-12 rounded-2xl bg-[#242424] text-[#BA2410] flex items-center justify-center shadow-lg">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[11px] font-black text-[#191919] uppercase leading-tight">4K Studio Shoots</p>
            <p className="text-[10px] text-[#BA2410] font-bold">15 Event Occasions</p>
          </div>
        </div>
      </div>

      {/* 3D Floating Item 4: Mid-Right Photo Clock Motif */}
      <div
        className="hidden xl:block absolute -right-10 top-72 transition-transform"
        style={{
          animation: 'floatTopBottom 8s ease-in-out infinite 0.5s',
        }}
      >
        <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#FFEBE8] to-white backdrop-blur-md shadow-2xl border border-[#FC3C1E]/40 flex items-center gap-2.5 transform -rotate-6">
          <div className="w-10 h-10 rounded-xl bg-[#FC3C1E] text-white flex items-center justify-center shadow-md">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-black text-[#191919] uppercase tracking-wider">Custom Clocks</p>
            <p className="text-[9px] text-[#FC3C1E] font-bold">Silent Sweep Quartz</p>
          </div>
        </div>
      </div>

    </div>
  );
};

