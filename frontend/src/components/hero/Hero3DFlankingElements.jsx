import React from 'react';
import { Gift, Clock, Sparkles, Camera, Award, Shield, Disc, Frame, Heart } from 'lucide-react';

/**
 * 3D Flanking Gift Elements for Hero Section
 * Populates left, right, and bottom margins surrounding the hero banner carousel
 * with animated 3D badges, miniature gift boxes, crystals, clocks, and cameras
 */
export const Hero3DFlankingElements = () => {
  return (
    <>
      {/* LEFT FLANKING 3D ELEMENTS (Visible on 2xl / xl screens outside the carousel) */}
      <div className="hidden xl:flex flex-col gap-6 absolute -left-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        
        {/* Item 1: 3D Wood Planks Badge */}
        <div className="animate-bounce" style={{ animationDuration: '4s' }}>
          <div className="w-24 p-3 rounded-2xl bg-white shadow-2xl border-2 border-[#FC3C1E]/40 flex flex-col items-center text-center transform -rotate-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FC3C1E] to-[#FC3C1E] flex items-center justify-center text-white shadow-md mb-1.5">
              <Gift className="w-5 h-5 fill-current" />
            </div>
            <span className="text-[10px] font-black text-[#191919] uppercase leading-tight">Wood Planks</span>
            <span className="text-[9px] text-[#FC3C1E] font-bold">3D Photo</span>
          </div>
        </div>

        {/* Item 2: 3D Crystal Cube */}
        <div className="animate-pulse" style={{ animationDuration: '3.2s' }}>
          <div className="w-24 p-2.5 rounded-2xl bg-[#12281C] text-[#F1DDC0] shadow-2xl border-2 border-[#FC3C1E]/40 flex flex-col items-center text-center transform rotate-3">
            <div className="w-8 h-8 rounded-lg bg-[#1F513D] flex items-center justify-center text-[#FC3C1E] shadow-sm mb-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold uppercase">Crystal</span>
            <span className="text-[8px] text-gray-300">Engraved</span>
          </div>
        </div>

      </div>

      {/* RIGHT FLANKING 3D ELEMENTS (Visible on 2xl / xl screens outside the carousel) */}
      <div className="hidden xl:flex flex-col gap-6 absolute -right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        
        {/* Item 3: 3D Camera / 12+ Yrs */}
        <div className="animate-bounce" style={{ animationDuration: '4.8s' }}>
          <div className="w-24 p-3 rounded-2xl bg-white shadow-2xl border-2 border-gray-300 flex flex-col items-center text-center transform rotate-6">
            <div className="w-10 h-10 rounded-xl bg-[#242424] flex items-center justify-center text-[#BA2410] shadow-md mb-1.5">
              <Camera className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-[#191919] uppercase leading-tight">15 Occasions</span>
            <span className="text-[9px] text-[#BA2410] font-bold">4K Studio</span>
          </div>
        </div>

        {/* Item 4: 3D Photo Wall Clock */}
        <div className="animate-pulse" style={{ animationDuration: '3.6s' }}>
          <div className="w-24 p-2.5 rounded-2xl bg-gradient-to-tr from-[#FFEBE8] to-white text-[#191919] shadow-2xl border-2 border-[#FC3C1E]/40 flex flex-col items-center text-center transform -rotate-3">
            <div className="w-8 h-8 rounded-lg bg-[#FC3C1E] flex items-center justify-center text-white shadow-sm mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-extrabold uppercase">Custom Clocks</span>
            <span className="text-[8px] text-[#FC3C1E] font-bold">Handcrafted</span>
          </div>
        </div>

      </div>

      {/* BOTTOM MARGIN 3D INTERACTIVE PILL STRIP */}
      <div className="mt-4 pt-1 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white border border-[#E8DFD1] shadow-sm hover:border-[#FC3C1E] transition-all group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FC3C1E] to-[#FC3C1E] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Gift className="w-4 h-4 fill-current" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-black text-[#191919] truncate group-hover:text-[#FC3C1E]">Customised Gifts</p>
              <p className="text-[10px] text-gray-500 truncate">9 Types • 29 Occasions</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white border border-[#E8DFD1] shadow-sm hover:border-[#1F513D] transition-all group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#12281C] to-[#1F513D] text-[#F1DDC0] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Award className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-black text-[#191919] truncate group-hover:text-[#1F513D]">Corporate Gifting</p>
              <p className="text-[10px] text-gray-500 truncate">Executive Plaques &amp; Pens</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white border border-[#E8DFD1] shadow-sm hover:border-[#BA2410] transition-all group">
            <div className="w-9 h-9 rounded-xl bg-[#242424] text-[#BA2410] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Camera className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-black text-[#191919] truncate group-hover:text-[#BA2410]">Event Photography</p>
              <p className="text-[10px] text-gray-500 truncate">Weddings &amp; Milestones</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white border border-[#E8DFD1] shadow-sm hover:border-[#8E986D] transition-all group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8E986D] to-[#6F7A52] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Disc className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-black text-[#191919] truncate group-hover:text-[#8E986D]">Studio &amp; VHS Transfer</p>
              <p className="text-[10px] text-gray-500 truncate">14 Frames &amp; Cassette USB</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

