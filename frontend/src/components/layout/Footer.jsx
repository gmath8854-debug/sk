import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Heart, Star, ArrowUpRight } from 'lucide-react';
import { SlideButton } from '../ui/KokonutComponents';

export const Footer = () => {
  const location = useLocation();
  const path = location.pathname;

  // Tailor footer background to match each page's specific colour aesthetic
  let footerGradient = 'from-[#7A0D00] via-[#BA2410] to-[#991707] border-[#FC3C1E]'; // default Crimson/Gold
  if (path === '/corporate-gifts') {
    footerGradient = 'from-[#0B1A12] via-[#12281C] to-[#1F513D] border-[#C8A96B]'; // Deep Forest Green & Rich Gold
  } else if (path === '/photography') {
    footerGradient = 'from-[#141A16] via-[#1c2720] to-[#2F3D33] border-[#d8ddc9]'; // Studio Slate & Sage White
  } else if (path === '/studio-services') {
    footerGradient = 'from-[#3A4325] via-[#5F6B3F] to-[#8E986D] border-[#EFE8D8]'; // Lab Green & Cream
  }

  return (
    <footer className={`bg-gradient-to-r ${footerGradient} text-white border-t-4 pt-16 pb-12 shadow-2xl transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/20">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="mb-4">
              <Link to="/" className="inline-block group">
                <div className="p-2.5 rounded-2xl bg-white shadow-xl inline-block border border-white/30 transition-transform duration-300 group-hover:scale-102">
                  <img
                    src="/images/logo/saikumar-wide-logo.png"
                    alt="Saikumar Digital Lab & Studio - Customise Gift"
                    className="h-12 sm:h-14 w-auto max-w-[260px] object-contain"
                  />
                </div>
              </Link>
            </div>
            
            <p className="text-xs text-white/90 leading-relaxed mb-6 font-medium">
              Miyapur's trusted digital lab &amp; creative studio since 2012. Specialising in handcrafted custom photo gifts, executive corporate gifting, event photography, precision framing, and VHS-to-USB digitisation.
            </p>

            <SlideButton
              href="https://wa.me/916301340919?text=Hello%20Saikumar%20Studio,%20I%20have%20an%20enquiry"
              variant="gold"
              className="w-full text-xs !bg-white !text-[#991707] hover:!bg-[#FFEBE8] !opacity-100 shadow-xl font-black block text-center py-3.5 rounded-full"
              icon={MessageCircle}
            >
              <span className="font-black text-[#991707] !opacity-100">Enquire on WhatsApp</span>
            </SlideButton>
          </div>

          {/* Col 2: The 4 Service Offerings */}
          <div>
            <h4 className="text-white font-black text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#FFEBE8] fill-current" /> 4 Core Service Areas
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/customised-gifts" className="hover:text-white flex items-center justify-between text-white/90 font-bold group bg-black/15 p-2 rounded-xl">
                  <span>⭐ Customised Gifts (9 Types)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFEBE8]" />
                </Link>
              </li>
              <li>
                <Link to="/corporate-gifts" className="hover:text-white flex items-center justify-between text-white/90 font-bold group bg-black/15 p-2 rounded-xl">
                  <span>🏢 Corporate Gifts (10 Products)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFEBE8]" />
                </Link>
              </li>
              <li>
                <Link to="/photography" className="hover:text-white flex items-center justify-between text-white/90 font-bold group bg-black/15 p-2 rounded-xl">
                  <span>📷 Event Photography (15 Occasions)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFEBE8]" />
                </Link>
              </li>
              <li>
                <Link to="/studio-services" className="hover:text-white flex items-center justify-between text-white/90 font-bold group bg-black/15 p-2 rounded-xl">
                  <span>🏪 Studio, Xerox &amp; Frames (14 Sizes)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFEBE8]" />
                </Link>
              </li>
              <li>
                <Link to="/studio-services#vhs" className="hover:text-white flex items-center justify-between text-[#FFEBE8] font-extrabold group p-2 rounded-xl bg-white/10">
                  <span>📼 VHS &amp; DVD to Pendrive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Visiting Address */}
          <div>
            <h4 className="text-white font-black text-sm tracking-wide uppercase mb-4">
              Studio Location
            </h4>
            <div className="space-y-3 text-xs text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFEBE8] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Shop No. 9, Martins High School Building,<br />
                  Mallareddy Complex, beside KS Bakers,<br />
                  Miyapur, Hyderabad — 500049
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFEBE8] shrink-0" />
                <a href="https://wa.me/916301340919" target="_blank" rel="noreferrer" className="hover:text-[#FFEBE8] font-extrabold">
                  +91 63013 40919 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFEBE8] shrink-0" />
                <a href="mailto:saikumardls@gmail.com" className="hover:text-[#FFEBE8] font-semibold">
                  saikumardls@gmail.com
                </a>
              </div>

              <div className="pt-2 text-[11px] text-white/80 font-medium">
                <p>⏰ Mon - Sat: 9:30 AM - 9:30 PM</p>
                <p>⏰ Sunday: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Col 4: Responsive Google Map Embed */}
          <div>
            <h4 className="text-white font-black text-sm tracking-wide uppercase mb-4">
              Find Us on Map
            </h4>
            <div className="w-full h-44 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl relative bg-black/30">
              <iframe
                title="Saikumar Digital Lab Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.210453775086!2d78.354148!3d17.497426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9215037d04cf%3A0xc3c545366914ee67!2sMiyapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Saikumar+Digital+Lab+Miyapur+Hyderabad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-[#FFEBE8] font-bold hover:underline mt-2"
            >
              Open in Google Maps →
            </a>
          </div>

        </div>

        {/* Bottom copyright & quick policy links */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/80 gap-4 font-medium">
          <p>© {new Date().getFullYear()} Saikumar Digital Lab &amp; Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white">About Studio</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/terms" className="hover:text-white">Ordering Guide</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

