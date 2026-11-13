import React, { useState, useEffect } from 'react';
import studioServicesData from '../data/studioServices.json';
import { studioServiceImages, categoryBanners } from '../data/images';
import {
  Printer,
  Camera,
  FileText,
  CreditCard,
  Frame,
  Disc,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { SlideButton, ShimmerBadge } from '../components/ui/KokonutComponents';
import { SmoothDropdown } from '../components/kokonutui/SmoothDropdown';
import { StudioServiceModal } from '../components/modals/StudioServiceModal';
import { initScrollReveal } from '../animations/scrollAnimations';
import { createWhatsAppLink } from '../utils/whatsapp';

export const StudioServices = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);

  const items = studioServicesData.items;

  useEffect(() => {
    const cleanup = initScrollReveal('.reveal-on-scroll');
    return () => cleanup && cleanup();
  }, [activeTab]);

  // 14 Frame sizes from Excel
  const frameSizes = [
    '4 × 6', '5 × 7', '6 × 8', '6 × 9', '8 × 10', '8 × 12',
    '10 × 12', '10 × 15', '12 × 15', '12 × 18', '16 × 20',
    '20 × 24', '20 × 30', '30 × 40 inches'
  ];

  const sectionOptions = [
    { id: 'all', name: '🏪 All Studio Services (33 Items)' },
    { id: 'Photo Sizes', name: '📸 Photo Sizes & Portraits' },
    { id: 'Document Printing', name: '📄 Document & Xerox Printouts' },
    { id: 'Photo Services', name: '🖼️ Restoration, Albums & Shields' },
    { id: 'Card Printing', name: '💳 PVC Smart Cards (Aadhaar, PAN, DL)' },
    { id: 'Printing & Framing', name: '🖼️ Printing & 14 Frame Sizes' },
    { id: 'Media Conversion', name: '📼 VHS & DVD to USB Conversion' }
  ];

  const filteredItems = items.filter((it) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'Photo Sizes') return it.section === 'Photo Sizes' || it.section === 'Portraits';
    return it.section === activeTab;
  });

  return (
    <div className="bg-[#DFCFB7] text-[#1c2720] min-h-screen pb-20">
      
      {/* Category Hero Banner with Photographic Backdrop */}
      <div className="relative overflow-hidden bg-[#4A5333] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#EFE8D8]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url(${categoryBanners.studioServices.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A5333] via-[#4A5333]/90 to-[#8E986D]/40" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFE8D8] text-[#4A5333] shadow-md">
              <Printer className="w-3.5 h-3.5" />
              Complete Digital Lab &amp; Studio Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-serif">
              Studio Portraits, Xerox, Framing &amp; Digitisation
            </h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
              Instant 5-minute passport photos, official visa dimensions, old photo restoration, large format photo frames (4×6 to 30×40"), PVC smart card printing, and VHS tape-to-USB transfer.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center max-w-xs shrink-0 shadow-2xl">
            <p className="text-4xl font-black text-[#EFE8D8]">31+ Services</p>
            <p className="text-xs font-bold uppercase tracking-wider text-white mt-1">
              14 Frame Sizes
            </p>
            <p className="text-[11px] text-gray-200 mt-1">
              No prices public • Instant enquiry
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* VHS / DVD TO USB CONVERSION SPECIAL FEATURE SECTION */}
        <div id="vhs" className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-[#0d2a4a] to-[#1a3d66] text-white shadow-2xl relative overflow-hidden border-2 border-[#C62828]/40 reveal-on-scroll" data-reveal="fadeUp">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <ShimmerBadge className="bg-[#C62828] text-black">
                <Disc className="w-3.5 h-3.5" /> LEGACY MEDIA DIGITISATION
              </ShimmerBadge>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-serif">
                DVC, VHS, CD &amp; DVD to Pendrive / USB Conversion
              </h2>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                Don't let your irreplaceable wedding, birthday, and family video cassettes degrade over time! We convert old VHS tapes, Handycam DVC tapes, MiniDV, and scratched CDs/DVDs into modern high-quality MP4 digital video on USB pen drives.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-200 py-2">
                <div className="flex items-center gap-2 font-semibold">📼 VHS &amp; DVC Video Tapes</div>
                <div className="flex items-center gap-2 font-semibold">💿 CD &amp; DVD Media</div>
                <div className="flex items-center gap-2 font-semibold">⚡ Direct MP4 to Pen Drive / Cloud</div>
                <div className="flex items-center gap-2 font-semibold">🔊 Audio &amp; Video Quality Restoration</div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveModalService({ name: 'DVC & VHS to USB Pendrive Conversion', detail: 'VHS tapes and MiniDV to digital MP4' })}
                  className="px-6 py-3.5 rounded-full bg-[#C62828] hover:bg-[#C9781B] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Tape-to-USB Conversion</span>
                </button>
                <a
                  href="tel:916301340919"
                  className="px-5 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                >
                  Call Studio: 63013 40919
                </a>
              </div>
            </div>

            {/* VHS Reference Card Visual Display (Pure Branded Custom Component) */}
            <div className="w-full lg:w-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FC3C1E]/30 bg-gradient-to-b from-[#1c2720] via-[#12281C] to-[#1c2720] p-5 shrink-0 flex flex-col items-center text-white">
              <div className="w-full bg-[#12281C] rounded-xl p-4 text-center text-white border-2 border-[#FC3C1E] mb-4 shadow-lg">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FC3C1E] block mb-1">
                  Official Digitisation Lab
                </span>
                <h4 className="text-lg font-serif font-black text-white">
                  Sai Kumar Digital Color Lab &amp; Studios
                </h4>
                <p className="text-xs text-[#EFE8D8] mt-1 font-semibold">
                  Miyapur, Hyderabad • Est. 12+ Years
                </p>
              </div>

              {/* Graphic Cassette & USB Transformation Visual */}
              <div className="w-full bg-black/40 rounded-xl p-5 border border-white/10 flex flex-col items-center justify-center space-y-3">
                <div className="flex items-center justify-center gap-3 w-full">
                  <div className="p-3 rounded-xl bg-[#242424] border border-white/20 flex flex-col items-center">
                    <Disc className="w-7 h-7 text-[#FC3C1E] animate-spin" style={{ animationDuration: '8s' }} />
                    <span className="text-[9px] font-black uppercase text-gray-300 mt-1">VHS / DVC</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#FC3C1E]" />
                  <div className="p-3 rounded-xl bg-[#1F513D] border border-[#FC3C1E]/40 flex flex-col items-center">
                    <Sparkles className="w-7 h-7 text-[#F1DDC0]" />
                    <span className="text-[9px] font-black uppercase text-[#F1DDC0] mt-1">MP4 / USB</span>
                  </div>
                </div>

                <div className="w-full text-center pt-2 border-t border-white/10 space-y-1">
                  <p className="text-xs font-black text-[#F1DDC0]">
                    Zero Quality Loss • Same-Day Service
                  </p>
                  <p className="text-[10px] text-gray-300">
                    VHS, MiniDV, Hi8, Cassette tapes to High-Speed USB Pen Drive
                  </p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs font-black text-[#EFE8D8]">
                  Sai Kumar Digital Lab &amp; Studio • Miyapur
                </p>
                <p className="text-[11px] text-[#FC3C1E] font-extrabold">
                  Direct WhatsApp: +91 63013 40919
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 14 FRAME SIZES VISUAL MATRIX SECTION */}
        <div id="frames" className="mb-14 p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-sm reveal-on-scroll" data-reveal="fadeUp">
          <div className="max-w-2xl mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8E986D]/20 text-[#023B20] mb-2">
              <Frame className="w-3.5 h-3.5" />
              14 Frame Dimensions
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight font-serif">
              Enlargement Prints &amp; Frames with Designing Service
            </h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              From desktop tabletop photo frames to grand living room wall portraits. High-clarity synthetic &amp; wooden frames with glass/acrylic protection.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {frameSizes.map((size, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModalService({ name: `Printing & Frame (${size})`, detail: `Frame size ${size} with photo enlargement and design` })}
                className="cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-[#FC3C1E] hover:shadow-md transition-all text-center group bg-[#FAF8F5] hover:bg-[#FFEBE8]/30"
              >
                <div className="w-10 h-12 border-2 border-dashed border-gray-400 group-hover:border-[#FC3C1E] rounded mx-auto mb-2 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-[#FC3C1E]">
                  {size.split(' ')[0]}
                </div>
                <p className="text-xs font-extrabold text-gray-900 group-hover:text-[#FC3C1E]">{size}</p>
                <span className="text-[10px] text-gray-500 block mt-1">Enquire Frame →</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subcategory Dropdown Selector for Studio Services */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <SmoothDropdown
              label="Select Studio Service Category (33 Services)"
              placeholder="Choose Service Category..."
              options={sectionOptions}
              value={activeTab}
              onChange={setActiveTab}
              theme="forest"
            />
          </div>

          {activeTab !== 'all' && (
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className="text-xs text-[#8E986D] font-bold hover:underline"
            >
              Reset to All 33 Services
            </button>
          )}
        </div>

        {/* Grid of Studio Services with Scroll View Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const whatsAppLink = createWhatsAppLink({
              category: 'Studio Service',
              item: item.name,
              customMessage: `Hello Saikumar Studios, I would like to enquire about ${item.name} (${item.section}): ${item.detail || 'Standard processing'}`
            });

            return (
              <div
                key={item.id}
                className="reveal-on-scroll p-6 rounded-2xl bg-[#3A4325] text-white border border-[#8E986D]/60 hover:border-[#EFE8D8] hover:shadow-xl transition-all flex flex-col justify-between"
                data-reveal="fadeUp"
                data-delay={idx * 40}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#8E986D] text-white">
                      {item.section}
                    </span>
                    <span className="text-[10px] text-[#EFE8D8] font-bold">
                      Miyapur Lab Spec
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mt-2 mb-1">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-200 leading-relaxed mb-4 font-medium">
                    {item.detail || 'Professional studio processing with exact specifications and fast turnaround.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#EFE8D8]">
                    Fast Turnaround
                  </span>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-black bg-[#EFE8D8] hover:bg-white text-[#3A4325] transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-[#3A4325]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Studio Category-Specific Modal */}
      <StudioServiceModal
        isOpen={Boolean(activeModalService)}
        onClose={() => setActiveModalService(null)}
        serviceName={activeModalService?.name || 'Studio Service'}
        initialDetail={activeModalService?.detail || ''}
      />
    </div>
  );
};

