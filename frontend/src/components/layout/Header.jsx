import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ShoppingBag,
  Search,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { useGiftList } from '../../context/GiftListContext';
import customisedGiftsData from '../../data/customisedGifts.json';
import corporateGiftsData from '../../data/corporateGifts.json';
import photographyData from '../../data/photography.json';
import studioServicesData from '../../data/studioServices.json';
import {
  customisedProductImages,
  corporateProductImages,
  photographyOccasionImages,
  studioServiceImages
} from '../../data/images';
import { animate } from 'animejs';

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { totalCount, setIsOpen: openCartDrawer } = useGiftList();
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (catKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(catKey);
    setTimeout(() => {
      try {
        animate(`#dropdown-${catKey} .stagger-subitem`, {
          opacity: [0, 1],
          translateY: [-6, 0],
          delay: (el, i) => i * 20,
          duration: 220,
          ease: 'outCubic'
        });
      } catch (e) {}
    }, 10);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const searchResults = searchQuery.trim() === '' ? [
    // Pre-populate popular suggestions when search query is empty
    { name: 'Wood Photo Planks', category: 'Customised Gifts', path: '/customised-gifts' },
    { name: 'Crystal Photo Cubes', category: 'Customised Gifts', path: '/customised-gifts' },
    { name: 'Laser Engraved Pens', category: 'Corporate Gifts', path: '/corporate-gifts' },
    { name: 'Wedding Photography', category: 'Photography', path: '/photography' },
    { name: 'Passport & Visa Photos', category: 'Studio Services', path: '/studio-services' },
    { name: 'VHS to USB Conversion', category: 'Studio Services', path: '/studio-services' },
  ] : [
    ...customisedGiftsData.products.map(p => ({ ...p, category: 'Customised Gifts', path: '/customised-gifts' })),
    ...corporateGiftsData.products.map(p => ({ ...p, category: 'Corporate Gifts', path: '/corporate-gifts' })),
    ...photographyData.occasions.map(p => ({ ...p, category: 'Photography', path: '/photography' })),
    ...studioServicesData.items.map(p => ({ ...p, category: 'Studio Services', path: '/studio-services' }))
  ].filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())).slice(0, 10);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-[#FAF8F5] border-b border-[#E8DFD1] shadow-md transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo - cleanly scaled and fully responsive on all screens */}
          <Link to="/" className="flex items-center shrink-0 group py-1 mr-2 sm:mr-4 lg:-ml-6 xl:-ml-10">
            <img
              src="/images/logo/saikumar-wide-logo.png"
              alt="Saikumar Digital Lab & Studio - Customise Gift"
              className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto max-w-[170px] sm:max-w-[210px] md:max-w-[250px] lg:max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation: Direct 4 Categories with comfortable spacing & increased height */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            
            {/* 1. Home Link */}
            <Link
              to="/"
              className={`text-sm font-extrabold transition-colors px-3 py-2.5 rounded-full ${
                location.pathname === '/' ? 'text-[#9b1908] bg-black/5' : 'text-[#9b1908] hover:text-[#7a1306] hover:bg-black/5'
              }`}
            >
              Home
            </Link>

            {/* 2. Customised Gifts (Highlighted with 3D circle preview thumbnail) */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter('customised')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/customised-gifts"
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                  location.pathname === '/customised-gifts' || activeDropdown === 'customised'
                    ? 'bg-[#9b1908] text-white shadow-md shadow-[#9b1908]/25'
                    : 'bg-[#FFF0EE] text-[#9b1908] border border-[#9b1908]/30 hover:bg-[#FFEBE8]'
                }`}
              >
                {/* Rounded Category Image Thumbnail */}
                <span className="w-6 h-6 rounded-full overflow-hidden border border-white/60 shrink-0 bg-white">
                  <img
                    src={customisedProductImages['cg-1']}
                    alt="Customised Gifts"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className={location.pathname === '/customised-gifts' || activeDropdown === 'customised' ? 'text-white' : 'text-[#9b1908]'}>
                  Customised Gifts
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  location.pathname === '/customised-gifts' || activeDropdown === 'customised' ? 'text-white rotate-180' : 'text-[#9b1908]'
                }`} />
              </Link>

              {/* Subcategories Dropdown */}
              {activeDropdown === 'customised' && (
                <div
                  id="dropdown-customised"
                  className="absolute top-full -left-6 w-96 bg-white rounded-3xl shadow-2xl border border-[#E8DFD1] p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#FC3C1E]">
                      9 Product Categories
                    </p>
                    <Link to="/customised-gifts" className="text-xs font-bold text-[#FC3C1E] hover:underline flex items-center gap-1">
                      All 29 Occasions →
                    </Link>
                  </div>
                  <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
                    {customisedGiftsData.products.map((p, idx) => (
                      <Link
                        key={p.id}
                        to={`/customised-gifts?product=${encodeURIComponent(p.name)}`}
                        className="stagger-subitem flex items-center justify-between p-2 rounded-xl hover:bg-[#FFF0EE] transition-colors group"
                      >
                        <span className="text-xs font-bold text-gray-800 group-hover:text-[#FC3C1E]">
                          {p.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FC3C1E] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Corporate Gifts (3D circle preview thumbnail) */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter('corporate')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/corporate-gifts"
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                  location.pathname === '/corporate-gifts' || activeDropdown === 'corporate'
                    ? 'bg-[#12281C] text-[#F1DDC0] shadow-md'
                    : 'text-[#191919] hover:text-[#1F513D] hover:bg-black/5'
                }`}
              >
                <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 shrink-0 bg-white">
                  <img
                    src={corporateProductImages['corp-1']}
                    alt="Corporate Gifts"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>Corporate Gifts</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'corporate' ? 'rotate-180' : ''}`} />
              </Link>

              {activeDropdown === 'corporate' && (
                <div
                  id="dropdown-corporate"
                  className="absolute top-full -left-6 w-96 bg-white rounded-3xl shadow-2xl border border-[#E8DFD1] p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#1F513D]">
                      10 Corporate Offerings
                    </p>
                    <Link to="/corporate-gifts" className="text-xs font-bold text-[#1F513D] hover:underline">
                      Bulk Quote →
                    </Link>
                  </div>
                  <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
                    {corporateGiftsData.products.map((p) => (
                      <Link
                        key={p.id}
                        to={`/corporate-gifts?product=${encodeURIComponent(p.name)}`}
                        className="stagger-subitem flex items-center justify-between p-2 rounded-xl hover:bg-[#F5EBDD] transition-colors group"
                      >
                        <span className="text-xs font-semibold text-gray-800 group-hover:text-[#1F513D]">
                          {p.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1F513D] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Photography (3D circle preview thumbnail) */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter('photography')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/photography"
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                  location.pathname === '/photography' || activeDropdown === 'photography'
                    ? 'bg-[#1c2720] text-[#d8ddc9] border border-[#d8ddc9]/40 shadow-md'
                    : 'text-[#191919] hover:text-[#1c2720] hover:bg-black/5'
                }`}
              >
                <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 shrink-0 bg-white">
                  <img
                    src={photographyOccasionImages['pocc-2']}
                    alt="Photography"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>Photography</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'photography' ? 'rotate-180' : ''}`} />
              </Link>

              {activeDropdown === 'photography' && (
                <div
                  id="dropdown-photography"
                  className="absolute top-full -left-6 w-96 bg-white rounded-3xl shadow-2xl border border-[#E8DFD1] p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#BA2410]">
                      15 Event Occasions
                    </p>
                    <Link to="/photography" className="text-xs font-bold text-[#BA2410] hover:underline">
                      View Portfolios →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-72 overflow-y-auto pr-1">
                    {photographyData.occasions.map((occ) => (
                      <Link
                        key={occ.id}
                        to={`/photography?occasion=${encodeURIComponent(occ.name)}`}
                        className="stagger-subitem text-xs p-2 rounded-xl hover:bg-gray-50 text-gray-800 hover:text-[#BA2410] font-medium"
                      >
                        • {occ.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Studio Services (3D circle preview thumbnail) */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter('studio')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/studio-services"
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                  location.pathname === '/studio-services' || activeDropdown === 'studio'
                    ? 'bg-[#8E986D] text-white shadow-md'
                    : 'text-[#191919] hover:text-[#8E986D] hover:bg-black/5'
                }`}
              >
                <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 shrink-0 bg-white">
                  <img
                    src={studioServiceImages['std-1']}
                    alt="Studio Services"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span>Studio Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'studio' ? 'rotate-180' : ''}`} />
              </Link>

              {activeDropdown === 'studio' && (
                <div
                  id="dropdown-studio"
                  className="absolute top-full right-0 w-[420px] bg-white rounded-3xl shadow-2xl border border-[#E8DFD1] p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#8E986D]">
                      Studio, Xerox, Frames & VHS
                    </p>
                    <Link to="/studio-services" className="text-xs font-bold text-[#8E986D] hover:underline">
                      Full Specs →
                    </Link>
                  </div>
                  <div className="space-y-1 text-xs">
                    <Link to="/studio-services#passport" className="stagger-subitem block p-2 rounded-xl hover:bg-[#FFF0EE] font-bold text-[#FC3C1E]">
                      ⚡ Instant Passport & Visa Photos (All Sizes)
                    </Link>
                    <Link to="/studio-services#frames" className="stagger-subitem block p-2 rounded-xl hover:bg-gray-50 font-semibold text-gray-800">
                      🖼️ 14 Frame Sizes (4×6 to 30×40 Inches)
                    </Link>
                    <Link to="/studio-services#vhs" className="stagger-subitem block p-2 rounded-xl hover:bg-[#FFF0EE] font-bold text-[#FC3C1E]">
                      📼 DVC & VHS to USB Pendrive Conversion
                    </Link>
                    <Link to="/studio-services#vhs" className="stagger-subitem block p-2 rounded-xl hover:bg-gray-50 font-semibold text-gray-800">
                      💿 CD / DVD to Pendrive Conversion
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            
            {/* Search Button */}
            <div>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-[#9b1908] hover:bg-black/5 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => openCartDrawer(true)}
              aria-label="View cart"
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#191919] text-white hover:bg-[#9b1908] transition-all duration-300 font-semibold text-xs shadow-sm group"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="w-5 h-5 rounded-full bg-[#9b1908] text-white flex items-center justify-center text-[10px] font-extrabold group-hover:bg-white group-hover:text-[#9b1908]">
                {totalCount > 99 ? '99+' : totalCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile navigation"
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-800 hover:bg-black/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-24 bottom-0 bg-[#FAF8F5] z-[100] overflow-y-auto p-6 border-t border-gray-200 shadow-2xl">
          <div className="space-y-4 max-w-lg mx-auto">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3.5 rounded-2xl bg-gray-50 text-sm font-bold text-gray-800 hover:bg-[#FFF0EE]"
            >
              🏠 Home
            </Link>
            <Link
              to="/customised-gifts"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3.5 rounded-2xl bg-[#FFF0EE] border border-[#9b1908]/30 text-sm font-extrabold text-[#9b1908]"
            >
              ⭐ Customised Gifts (9 Categories)
            </Link>
            <Link
              to="/corporate-gifts"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3.5 rounded-2xl bg-[#12281C] text-[#F1DDC0] text-sm font-bold"
            >
              🏢 Corporate Executive Gifting
            </Link>
            <Link
              to="/photography"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3.5 rounded-2xl bg-[#eeeee7] border border-[#d8ddc9] text-sm font-bold text-[#1c2720]"
            >
              📷 Photography (15 Occasions)
            </Link>
            <Link
              to="/studio-services"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm font-bold text-[#191919]"
            >
              🏪 Studio Services & VHS Conversion
            </Link>
            <div className="pt-4 border-t border-gray-200 flex justify-around text-xs font-bold text-gray-600">
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Studio</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link to="/checkout" onClick={() => setMobileMenuOpen(false)} className="text-[#9b1908]">Checkout</Link>
            </div>
          </div>
        </div>
      )}

      {/* Screen-Centered Search Modal with Blurred Backdrop (Desktop, Tablet & Mobile Responsive) */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 px-4 sm:px-6 animate-in fade-in duration-200"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E8DFD1] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#9b1908] shrink-0" />
              <input
                type="text"
                placeholder="Search photo planks, crystals, corporate, wedding..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm sm:text-base font-semibold text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 text-xs"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Suggestions / Results List */}
            <div className="p-3 sm:p-4 max-h-[60vh] overflow-y-auto space-y-1">
              <div className="px-2 py-1 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-gray-400">
                <span>{searchQuery.trim() ? `Search Results (${searchResults.length})` : 'Popular Suggestions'}</span>
                <span>Press ESC or click outside to close</span>
              </div>

              {searchResults.map((res, i) => (
                <Link
                  key={i}
                  to={res.path}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FFF0EE] transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#9b1908] shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#9b1908] truncate">
                      {res.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full shrink-0 border ${
                    res.category === 'Customised Gifts'
                      ? 'bg-[#FFEBE8] text-[#9b1908] border-[#9b1908]/20'
                      : res.category === 'Corporate Gifts'
                      ? 'bg-[#12281C] text-[#F1DDC0] border-[#C8A96B]/30'
                      : res.category === 'Photography'
                      ? 'bg-[#1c2720] text-[#d8ddc9] border-[#d8ddc9]/30'
                      : 'bg-[#3A4325] text-[#EFE8D8] border-[#8E986D]/30'
                  }`}>
                    {res.category}
                  </span>
                </Link>
              ))}

              {searchResults.length === 0 && (
                <div className="p-8 text-center text-gray-500 text-xs font-semibold">
                  No matching products or services found for "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
