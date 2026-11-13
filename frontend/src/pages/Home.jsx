import React, { useEffect } from 'react';
import { BannerCarousel } from '../components/homepage/BannerCarousel';
import { Hero3DFlankingElements } from '../components/hero/Hero3DFlankingElements';
import { HeroFloating3DBackground } from '../components/hero/HeroFloating3DBackground';
import { HeroCraftDeskBackground } from '../components/hero/HeroCraftDeskBackground';
import { CategoryCollection } from '../components/homepage/CategoryCollection';
import { HowItWorks } from '../components/homepage/HowItWorks';
import { LuxuryCTA } from '../components/magicui/LuxuryCTA';
import { initScrollReveal } from '../animations/scrollAnimations';
import customisedGiftsData from '../data/customisedGifts.json';
import corporateGiftsData from '../data/corporateGifts.json';
import photographyData from '../data/photography.json';
import studioServicesData from '../data/studioServices.json';
import {
  customisedProductImages,
  corporateProductImages,
  photographyOccasionImages,
  studioServiceImages
} from '../data/images';
import { Star, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

export const Home = () => {
  useEffect(() => {
    const cleanup = initScrollReveal('.reveal-on-scroll');
    return () => cleanup && cleanup();
  }, []);

  return (
    <div className="space-y-4">
      {/* 4-Category Auto-Rotating Banner Carousel with Independent Floating 3D Gifts in Background */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 pt-4 overflow-visible">
        <HeroCraftDeskBackground />
        <BannerCarousel />
      </div>

      {/* Trust & Quality Bar with 3D-styled Icon Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 reveal-on-scroll" data-reveal="fadeUp">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#E8DFD1] shadow-sm">
          <div className="flex items-center gap-3 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#FFEBE8] to-[#FC3C1E]/30 text-[#FC3C1E] flex items-center justify-center font-bold shadow-sm border border-[#FC3C1E]/30 shrink-0 aspect-square">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-gray-900 leading-snug">Customised Speciality</p>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">9 categories &amp; 29 occasions</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#8E986D]/20 to-[#1F513D]/20 text-[#12281C] flex items-center justify-center font-bold shadow-sm border border-[#1F513D]/20 shrink-0 aspect-square">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-gray-900 leading-snug">12+ Years Experience</p>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">Serving Miyapur &amp; Hyderabad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#F5F0E8] to-[#BA2410]/20 text-[#BA2410] flex items-center justify-center font-bold shadow-sm border border-[#BA2410]/20 shrink-0 aspect-square">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-gray-900 leading-snug">Direct WhatsApp Help</p>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">Fast design approval &amp; quote</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 text-gray-800 flex items-center justify-center font-bold shadow-sm border border-gray-300 shrink-0 aspect-square">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-extrabold text-gray-900 leading-snug">Premium Printing</p>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">Ultra-HD colours &amp; frames</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. CUSTOMISED GIFTS COLLECTION - PROMINENT SECTION (Red & Yellow) */}
      <div className="reveal-on-scroll" data-reveal="fadeUp">
        <CategoryCollection
          title="Handcrafted Customised Gifts"
          subtitle="Our flagship offering: Wood photo planks, crystals, acrylics, clocks & custom cutouts personalized for all 29 occasions."
          categoryName="Customised Gifts"
          tag="Primary Category"
          items={customisedGiftsData.products}
          linkTo="/customised-gifts"
          theme="customised"
          getImage={(id) => customisedProductImages[id] || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800'}
          isProminent={true}
        />
      </div>

      {/* 2. CORPORATE GIFTS COLLECTION (Dark Green & Beige) */}
      <div className="reveal-on-scroll" data-reveal="fadeUp">
        <CategoryCollection
          title="Corporate & Executive Gifting"
          subtitle="Branded wooden plaques, laser-engraved pens, custom bottles, diaries, crystal mementos & shields for corporate teams."
          categoryName="Corporate Gifts"
          tag="Executive Solutions"
          items={corporateGiftsData.products}
          linkTo="/corporate-gifts"
          theme="corporate"
          getImage={(id) => corporateProductImages[id] || 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800'}
        />
      </div>

      {/* 3. PHOTOGRAPHY COLLECTION (Charcoal & Gold) */}
      <div className="reveal-on-scroll" data-reveal="fadeUp">
        <CategoryCollection
          title="Occasions & Event Photography"
          subtitle="Professional traditional, candid and cinematic coverage across 15 milestone celebrations."
          categoryName="Photography"
          tag="Cinematic Memories"
          items={photographyData.occasions}
          linkTo="/photography"
          theme="photography"
          getImage={(id) => photographyOccasionImages[id] || 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'}
        />
      </div>

      {/* 4. STUDIO SERVICES COLLECTION (Sage & Warm Cream) */}
      <div className="reveal-on-scroll" data-reveal="fadeUp">
        <CategoryCollection
          title="Studio Services, Framing & VHS Digitisation"
          subtitle="Instant passport & visa photos, document printing, 14 frame sizes, restoration & legacy VHS-to-USB conversion."
          categoryName="Studio Services"
          tag="Lab & Digitisation"
          items={studioServicesData.items}
          linkTo="/studio-services"
          theme="studio"
          getImage={(id) => studioServiceImages[id] || (id === 'std-32' || id === 'std-33' ? '/images/media-conversion/vhs-dvd-conversion.jpg' : 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800')}
        />
      </div>

      {/* 3-Step Process */}
      <div className="reveal-on-scroll" data-reveal="fadeUp">
        <HowItWorks />
      </div>

      {/* Full-width Luxury CTA Banner */}
      <div className="reveal-on-scroll" data-reveal="fadeUp">
        <LuxuryCTA />
      </div>
    </div>
  );
};

