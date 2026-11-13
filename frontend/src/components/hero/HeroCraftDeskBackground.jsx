import React from 'react';
import { Gift, Sparkles, Scissors, Camera, Bookmark, Disc } from 'lucide-react';

/**
 * Realistic Studio Desk & Gifting Craft Items (Gifymo Reference Style)
 * Positioned on the left and right outer margins of the Hero section.
 * Features stationery, studio cutting scissors, paper clips, open jewelry boxes,
 * and camera tools scattered naturally on the desktop canvas.
 */
export const HeroCraftDeskBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-visible">
      
      {/* ------------------------------------------------------------- */}
      {/* LEFT MARGIN CRAFT ITEMS (Realistic Studio Craft Desk)         */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden lg:flex flex-col absolute -left-6 xl:-left-12 2xl:-left-16 top-10 space-y-6">
        
        {/* 1. Open Jewelry / Watch Gift Box with Ring Motif */}
        <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">
          <div className="w-28 xl:w-32 p-2.5 xl:p-3 rounded-2xl bg-gradient-to-tr from-[#FFEBE8] to-white border-2 border-[#FC3C1E]/30 shadow-2xl flex flex-col items-center">
            <div className="w-16 xl:w-20 h-12 xl:h-14 rounded-xl bg-[#FC3C1E]/10 border-2 border-dashed border-[#FC3C1E]/40 flex items-center justify-center relative mb-1.5">
              <div className="w-7 h-7 rounded-full border-2 border-[#FC3C1E] shadow-sm flex items-center justify-center bg-white">
                <Sparkles className="w-3.5 h-3.5 text-[#FC3C1E]" />
              </div>
            </div>
            <p className="text-[10px] font-black text-gray-900 uppercase">Jewellery Box</p>
            <span className="text-[8px] text-[#FC3C1E] font-bold">Custom Keepsake</span>
          </div>
        </div>

        {/* 2. Realistic Studio Craft Scissors & Paper Clip */}
        <div className="transform rotate-12 ml-3 drop-shadow-xl flex items-center gap-2">
          <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white border-2 border-gray-300 shadow-xl flex items-center justify-center text-gray-700">
            <Scissors className="w-5 h-5 xl:w-6 xl:h-6 text-[#FC3C1E]" />
          </div>
          <div className="w-4 h-8 xl:w-5 xl:h-10 border-2 border-[#FC3C1E] rounded-full transform -rotate-12 bg-white shadow-sm" />
        </div>

        {/* 3. Wooden Photo Plank Sample */}
        <div className="transform -rotate-3 drop-shadow-2xl">
          <div className="w-28 xl:w-32 p-2.5 rounded-2xl bg-[#F5EBDD] border-2 border-[#D8C7B5] shadow-xl flex items-center gap-2">
            <div className="w-8 h-10 xl:w-9 xl:h-11 rounded-lg bg-white border border-gray-300 overflow-hidden shadow-sm flex items-center justify-center text-[10px] font-bold text-gray-500">
              4×6
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-900 leading-tight">Wood Plank</p>
              <p className="text-[8px] text-gray-500">Natural Pine</p>
            </div>
          </div>
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* RIGHT MARGIN CRAFT ITEMS (Studio & Photography Elements)     */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden lg:flex flex-col absolute -right-6 xl:-right-12 2xl:-right-16 top-10 space-y-6 items-end">
        
        {/* 1. Camera Lens & Trimming Shears */}
        <div className="transform rotate-6 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl flex flex-col items-end">
          <div className="w-28 xl:w-32 p-2.5 rounded-2xl bg-[#191919] text-white border-2 border-white/20 shadow-2xl flex items-center gap-2.5">
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-[#242424] border border-[#BA2410] text-[#BA2410] flex items-center justify-center shadow-inner">
              <Camera className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-white">4K Lens Cap</p>
              <p className="text-[8px] text-[#FC3C1E] font-bold">50mm Studio</p>
            </div>
          </div>
        </div>

        {/* 2. Crystal Photo Cube with Holographic Reflection */}
        <div className="transform -rotate-6 mr-3 drop-shadow-2xl">
          <div className="w-28 xl:w-32 p-2.5 rounded-2xl bg-gradient-to-tr from-white via-[#FAF8F5] to-[#FFEBE8] border-2 border-[#FC3C1E]/30 shadow-2xl flex items-center gap-2">
            <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-xl bg-[#FC3C1E] text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-900 uppercase">Crystal Cube</p>
              <p className="text-[8px] text-[#FC3C1E] font-bold">3D Laser Etched</p>
            </div>
          </div>
        </div>

        {/* 3. Studio Craft Ribbon Roll & Binder Clips */}
        <div className="transform rotate-6 drop-shadow-xl flex items-center gap-2 justify-end">
          <div className="w-7 h-7 rounded-full border-2 border-[#FC3C1E] bg-[#FC3C1E] shadow-md flex items-center justify-center text-white text-[8px] font-black">
            🎀
          </div>
          <div className="px-2.5 py-1 rounded-full bg-white border border-gray-300 shadow-md text-[9px] font-extrabold text-gray-800">
            Saikumar Satin
          </div>
        </div>

      </div>

    </div>
  );
};

