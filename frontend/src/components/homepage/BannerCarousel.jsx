import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ArrowRight } from 'lucide-react';
import { categoryBanners } from '../../data/images';
import { GiftingBackground } from '../reactbits/GiftingBackground';
import { Hero3DFlankingElements } from '../hero/Hero3DFlankingElements';

export const BannerCarousel = () => {
  const navigate = useNavigate();
  const banners = [
    { key: 'customisedGifts', ...categoryBanners.customisedGifts, badge: 'PRIMARY SPECIALITY' },
    { key: 'corporateGifts', ...categoryBanners.corporateGifts, badge: 'EXECUTIVE SOLUTIONS' },
    { key: 'photography', ...categoryBanners.photography, badge: '15 CELEBRATORY OCCASIONS' },
    { key: 'studioServices', ...categoryBanners.studioServices, badge: '14 FRAME SIZES & VHS CONVERSION' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-scroll every 6 seconds with pause on hover
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, banners.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

  const current = banners[currentIndex];

  return (
    <div className="relative w-full">
      <div
        className="relative w-full overflow-hidden rounded-3xl bg-[#191919] text-white shadow-2xl my-4 group"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* React Bits / Magic UI Luxury Gifting Background Motif */}
        <GiftingBackground />

      {/* Banner Slides Container */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[580px] w-full">
        {banners.map((banner, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={banner.key}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              onClick={() => navigate(banner.link)}
            >
              {/* Background Photo with Gradient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out scale-105"
                style={{ backgroundImage: `url(${banner.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />

              {/* Text Elements */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
                <div className="max-w-2xl space-y-4">
                  
                  {/* Category Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-[#FFEBE8] text-[#C93420] shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#FC3C1E]" />
                    {banner.badge}
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif">
                    {banner.title}
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium leading-relaxed">
                    {banner.subtitle}
                  </p>

                  <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-4" onClick={(e) => e.stopPropagation()}>
                    <Link
                      to={banner.link}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2 sm:py-3.5 rounded-full bg-[#9b1908] text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#5C0A00] transition-all shadow-lg shadow-[#9b1908]/30 shrink-0"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/916301340919?text=Hello%20Saikumar%20Studio,%20I%20am%20interested%20in%20${encodeURIComponent(banner.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-3.5 rounded-full text-[11px] sm:text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 shrink-0"
                    >
                      WhatsApp Studio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 left-6 right-6 z-30 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
        {/* Indicators */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {banners.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#9b1908]' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 pointer-events-auto bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="p-1.5 text-white/80 hover:text-white"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <div className="w-px h-4 bg-white/20 mx-1" />
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous"
            className="p-1.5 text-white/80 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next"
            className="p-1.5 text-white/80 hover:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
};
