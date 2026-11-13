import React, { useState } from 'react';
import { Sparkles, Eye, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Subcategory Media Showcase Gallery Component
 * Sourced from React Bits / UI UX Showcase lightbox pattern.
 * Displays high-res photography angles and finish details for any selected subcategory.
 */
export const ProductSubcategoryGallery = ({ title, category, images = [], description }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#FFEBE8] text-[#FC3C1E] mb-1.5">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#FC3C1E]" />
            Showcase Gallery
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 font-serif">
            {title} — Craftsmanship &amp; Finish Gallery
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl font-medium">
              {description}
            </p>
          )}
        </div>

        <div className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
          Viewing Image {activeIdx + 1} of {images.length}
        </div>
      </div>

      {/* Main Preview with Ambient Shadow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Large Stage */}
        <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl aspect-[16/10] group">
          <img
            src={images[activeIdx]?.url || images[activeIdx]}
            alt={images[activeIdx]?.caption || title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                type="button"
                onClick={() => setActiveIdx((activeIdx - 1 + images.length) % images.length)}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center pointer-events-auto backdrop-blur-md transition-transform active:scale-95 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIdx((activeIdx + 1) % images.length)}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center pointer-events-auto backdrop-blur-md transition-transform active:scale-95 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Caption */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-extrabold font-serif">
              {images[activeIdx]?.caption || `${title} Angle 0${activeIdx + 1}`}
            </p>
            <p className="text-xs text-gray-300">
              High-definition photographic clarity crafted by Saikumar Digital Lab
            </p>
          </div>
        </div>

        {/* Thumbnails Column */}
        <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto max-h-[380px] p-1">
          {images.map((img, idx) => {
            const url = img?.url || img;
            const caption = img?.caption || `Angle 0${idx + 1}`;
            const isActive = idx === activeIdx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative flex items-center gap-3 p-2 rounded-2xl border-2 transition-all text-left shrink-0 lg:shrink w-40 lg:w-full ${
                  isActive
                    ? 'border-[#FC3C1E] bg-[#FFEBE8]/30 shadow-md scale-101'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                <img
                  src={url}
                  alt={caption}
                  className="w-16 h-14 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0 pr-2">
                  <p className="text-xs font-bold text-gray-900 truncate">{caption}</p>
                  <span className="text-[10px] text-gray-500 font-semibold block mt-0.5">
                    {isActive ? '● Active' : 'Click to preview'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

