import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import photographyData from '../data/photography.json';
import { photographyOccasionImages, categoryBanners } from '../data/images';
import { Camera, MessageCircle, Sparkles } from 'lucide-react';
import { SmoothDropdown } from '../components/kokonutui/SmoothDropdown';
import { PhotographyEnquiryModal } from '../components/modals/PhotographyEnquiryModal';
import { ProductSubcategoryGallery } from '../components/gallery/ProductSubcategoryGallery';
import { initScrollReveal } from '../animations/scrollAnimations';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Photography = () => {
  const [searchParams] = useSearchParams();
  const occasionParam = searchParams.get('occasion');

  const [selectedOccasion, setSelectedOccasion] = useState(occasionParam || 'all');
  const [activeModalOccasion, setActiveModalOccasion] = useState(null);

  useEffect(() => {
    if (occasionParam) {
      setSelectedOccasion(occasionParam);
    }
  }, [occasionParam]);

  const occasions = photographyData.occasions;

  useEffect(() => {
    const cleanup = initScrollReveal('.reveal-on-scroll');
    return () => cleanup && cleanup();
  }, [selectedOccasion]);

  const occasionDropdownOptions = [
    { id: 'all', name: '📸 All 15 Event Occasions' },
    ...occasions.map((o) => ({ id: o.name, name: o.name }))
  ];

  const filteredOccasions = occasions.filter((occ) => {
    if (selectedOccasion !== 'all' && occ.name !== selectedOccasion) return false;
    return true;
  });

  const activeOccData = occasions.find(o => o.name === selectedOccasion);
  const photoGallery = activeOccData ? [
    { url: photographyOccasionImages[activeOccData.id], caption: `${activeOccData.name} — Candid Milestone Portrait` },
    { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800', caption: 'Ceremony Atmosphere & Lighting' },
    { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', caption: 'Traditional Portrait Suite & Album Spread' }
  ] : null;

  return (
    <div className="bg-[#DFCFB7] text-[#1c2720] min-h-screen pb-20">
      
      {/* Category Hero Banner with Photographic Backdrop */}
      <div className="relative overflow-hidden bg-[#1c2720] text-[#eeeee7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#d8ddc9]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url(${categoryBanners.photography.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2720] via-[#1c2720]/90 to-[#d8ddc9]/30" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d8ddc9] text-[#1c2720] shadow-md">
              <Camera className="w-3.5 h-3.5" />
              15 Event Occasions Covered
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif text-[#eeeee7]">
              Event Photography &amp; Cinematography
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              From intimate birthdays, cradle ceremonies, and upanayanam rituals to grand weddings and corporate galas. Preserving every emotion in timeless 4K frames.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center max-w-xs shrink-0 shadow-2xl">
            <p className="text-4xl font-black text-[#d8ddc9]">15 Occasions</p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#eeeee7] mt-1">
              Celebration Portfolios
            </p>
            <p className="text-[11px] text-gray-300 mt-1">
              Drone, candid &amp; traditional shoots
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Animated Subcategory Dropdown Selector for Occasions */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#d8ddc9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <SmoothDropdown
              label="Filter by Event Occasion (15 Categories)"
              placeholder="Select an Occasion..."
              options={occasionDropdownOptions}
              value={selectedOccasion}
              onChange={setSelectedOccasion}
              theme="forest"
            />
          </div>

          {selectedOccasion !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedOccasion('all')}
              className="text-xs text-[#1c2720] font-extrabold hover:underline"
            >
              Reset to All 15 Occasions
            </button>
          )}
        </div>

        {/* 15 Occasions Visual Portfolio Showcase Grid with Scroll View Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredOccasions.map((occ, idx) => {
            const whatsAppConsultLink = createWhatsAppLink({
              category: 'Photography Consultation',
              item: `${occ.name} Photography & Cinematography`,
              occasion: occ.name,
              customMessage: `Hello Saikumar Studios, I would like to book/enquire about ${occ.name} photography and cinematography coverage.`
            });

            return (
              <div
                key={occ.id}
                className="reveal-on-scroll rounded-3xl overflow-hidden bg-white border border-[#E8DFD1] hover:border-[#1c2720] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                data-reveal="fadeUp"
                data-delay={idx * 50}
              >
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => setActiveModalOccasion(occ.name)}
                >
                  <img
                    src={photographyOccasionImages[occ.id] || 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'}
                    alt={occ.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-[#d8ddc9] text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-sm">
                    Occasion 0{idx + 1}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-extrabold font-serif leading-tight">{occ.name}</h3>
                    <p className="text-xs text-gray-300 mt-1">Candid, Traditional &amp; Cinematic Storytelling</p>
                  </div>
                </div>

                {/* Inline Service Specs Dropdown Details */}
                <div className="px-5 py-3 bg-[#FAF8F5] border-t border-gray-100 text-[11px] text-gray-700 space-y-1">
                  <p><strong>Package includes:</strong> 4K Video, Candid Stills, Drone Teaser, Traditional Album</p>
                  <p className="text-gray-500">Fast 7-day draft delivery • Miyapur studio consultations available</p>
                </div>

                <div className="p-4 bg-white flex items-center justify-between border-t border-gray-200 gap-2">
                  <span className="text-xs font-bold text-[#1c2720]">Direct Consultation</span>
                  <a
                    href={whatsAppConsultLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#1c2720] hover:bg-[#2F3D33] text-[#d8ddc9] border border-[#d8ddc9]/40 text-xs font-black transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-[#d8ddc9]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Occasion Portfolio Showcase Gallery (Placed at bottom) */}
        {selectedOccasion !== 'all' && photoGallery && (
          <div className="mt-16 pt-8 border-t border-[#d8ddc9]">
            <ProductSubcategoryGallery
              title={selectedOccasion}
              category="Event Photography"
              description={`Moments captured during recent ${selectedOccasion} celebrations by our candid, traditional, and drone cinematography teams.`}
              images={photoGallery}
            />
          </div>
        )}

      </div>

      {/* Photography Category-Specific Modal */}
      <PhotographyEnquiryModal
        isOpen={Boolean(activeModalOccasion)}
        onClose={() => setActiveModalOccasion(null)}
        occasionName={activeModalOccasion || ''}
      />
    </div>
  );
};
