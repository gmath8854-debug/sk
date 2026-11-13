import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Camera, Heart, ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';
import { SlideButton } from '../components/ui/KokonutComponents';

export const About = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-20">
      
      {/* Hero */}
      <div className="bg-[#1C1C1C] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FC3C1E]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFEBE8] text-[#C93420]">
            Craftsmanship • Creativity • Legacy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            About Saikumar Digital Lab & Studio
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Located in the heart of Miyapur, Hyderabad, we bring over 12 years of photographic craftsmanship, personalized gifting innovation, and precision digital lab services.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Story */}
        <div className="p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-sm space-y-4">
          <h2 className="text-2xl font-extrabold text-gray-900">Our Studio Story</h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Founded with a passion for preserving life's most heartfelt milestones, Saikumar Digital Lab & Studio has grown from a local photo studio into a full-scale creative lab. We combine cutting-edge thermal sublimation, laser wood engraving, and high-definition photo printing with traditional photography artistry.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Whether it's a couple celebrating their 50th Golden Jubilee, a company recognizing its outstanding employees, or a family seeking to safeguard grandfather's wedding cassette to USB, our team handles every project with utmost personal care.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#FFEBE8]/40 border border-[#C62828]/40">
            <h3 className="font-extrabold text-[#FC3C1E] text-base mb-2">🎁 Customised Keepsakes</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              We specialize in 9 distinct product categories adaptable for all 29 milestone occasions — wood printing planks, crystals, acrylics, cutouts, and clocks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#8E986D]/15 border border-[#023B20]/30">
            <h3 className="font-extrabold text-[#023B20] text-base mb-2">🏢 Corporate Excellence</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              From laser-engraved executive pens to custom water bottles and crystal trophies, we supply organizations with premium branded merchandise.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F0E8] border border-[#BA2410]/30">
            <h3 className="font-extrabold text-[#242424] text-base mb-2">📷 Cinematic Photography</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Full-scale coverage across 15 celebratory occasions with 4K drone cinematography, candid storytelling, on-site LED screens and live streaming.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8DFD1]">
            <h3 className="font-extrabold text-[#8E986D] text-base mb-2">🏪 Lab & Digitisation</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Instant 5-minute visa/passport photos, 14 sizes of framing, PVC smart cards, and vintage VHS/CD-to-USB digitisation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <SlideButton
            href="https://wa.me/916301340919?text=Hello%20Saikumar%20Studio,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            variant="primary"
            icon={MessageCircle}
          >
            Chat with Our Studio Manager on WhatsApp
          </SlideButton>
        </div>

      </div>
    </div>
  );
};

