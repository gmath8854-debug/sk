import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import corporateGiftsData from '../data/corporateGifts.json';
import { corporateProductImages, categoryBanners } from '../data/images';
import { ProductCard } from '../components/products/ProductCard';
import { Briefcase, Building2, MessageCircle } from 'lucide-react';
import { SmoothDropdown } from '../components/kokonutui/SmoothDropdown';
import { ProductSubcategoryGallery } from '../components/gallery/ProductSubcategoryGallery';
import { createWhatsAppLink } from '../utils/whatsapp';
import { initScrollReveal } from '../animations/scrollAnimations';

export const CorporateGifts = () => {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product');

  const [bulkQty, setBulkQty] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(productParam || 'all');

  useEffect(() => {
    if (productParam) {
      setSelectedProduct(productParam);
    }
  }, [productParam]);

  const products = corporateGiftsData.products;

  useEffect(() => {
    const cleanup = initScrollReveal('.reveal-on-scroll');
    return () => cleanup && cleanup();
  }, [selectedProduct]);

  const productDropdownOptions = [
    { id: 'all', name: '🏢 All 10 Corporate Offerings' },
    ...products.map((p) => ({ id: p.name, name: p.name }))
  ];

  const filteredProducts = products.filter((p) => {
    if (selectedProduct !== 'all' && p.name !== selectedProduct) return false;
    return true;
  });

  const activeCorp = products.find(p => p.name === selectedProduct);
  const corpGallery = activeCorp ? [
    { url: corporateProductImages[activeCorp.id], caption: `${activeCorp.name} — Executive Logo Mockup` },
    { url: 'https://images.unsplash.com/photo-1585336261026-77cc7c427329?q=80&w=800', caption: 'High Precision Laser Engraving Detail' },
    { url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800', caption: 'Corporate Gift Box Suite' }
  ] : null;

  const handleBulkEnquiry = (e) => {
    e.preventDefault();
    const link = createWhatsAppLink({
      category: 'Corporate Gifts Quotation',
      item: selectedProduct !== 'all' ? selectedProduct : 'Multiple Corporate Products',
      quantity: bulkQty,
      personalisation: companyName ? `Company: ${companyName}` : '',
      date: targetDate,
      customMessage: 'Requesting quotation for bulk order with custom logo branding.'
    });
    window.open(link, '_blank');
  };

  return (
    <div className="bg-[#DFCFB7] text-[#12281C] min-h-screen pb-20">
      
      {/* Category Hero Banner with Photographic Backdrop */}
      <div className="relative overflow-hidden bg-[#12281C] text-[#F1DDC0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#C8A96B]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{ backgroundImage: `url(${categoryBanners.corporateGifts.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12281C] via-[#0B241B]/95 to-[#1F513D]/70" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F1DDC0] text-[#12281C]">
              <Briefcase className="w-3.5 h-3.5" />
              Corporate &amp; Executive Merchandising
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-serif">
              Corporate Gifts &amp; Laser Engravings
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
              Enhance brand presence with custom engraved pens, insulated water bottles, premium leatherette diaries, crystal mementos, shields, and wooden photo planks.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center max-w-xs shrink-0 shadow-2xl">
            <p className="text-4xl font-black text-[#F1DDC0]">10+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-white mt-1">
              Corporate Offerings
            </p>
            <p className="text-[11px] text-gray-300 mt-1">
              Logo engraving &amp; name personalisation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Bulk Quotation Request Card */}
        <div className="mb-12 p-8 rounded-3xl bg-[#12281C] text-white shadow-xl relative overflow-hidden border border-[#C8A96B]/30 reveal-on-scroll" data-reveal="fadeUp">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1F513D] text-[#F1DDC0] mb-3">
              <Building2 className="w-3.5 h-3.5" /> Fast Quotation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 font-serif">
              Request a Corporate Bulk Order Quote
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              Tell us your company details, quantity, and product preferences. Our team will send a custom mock-up and wholesale pricing via WhatsApp.
            </p>

            <form onSubmit={handleBulkEnquiry} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#F1DDC0] uppercase mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  placeholder="e.g. Infosys, TCS, Startup"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#F1DDC0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#F1DDC0] uppercase mb-1">Product</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-[#0B241B] border border-white/20 text-white focus:outline-none focus:border-[#F1DDC0]"
                >
                  <option value="all">All Products</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#F1DDC0] uppercase mb-1">Estimated Quantity</label>
                <input
                  type="text"
                  placeholder="e.g. 50 pcs, 200 pcs"
                  value={bulkQty}
                  onChange={(e) => setBulkQty(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#F1DDC0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#F1DDC0] uppercase mb-1">Needed By Date</label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#F1DDC0]"
                />
              </div>

              <div className="sm:col-span-2 md:col-span-4 pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#1F513D] hover:bg-[#12281C] text-[#F1DDC0] border border-[#C8A96B]/50 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#F1DDC0]" />
                  Request Bulk Quotation on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Subcategory Dropdown Selector */}
        <div className="mb-8 p-6 rounded-3xl bg-[#12281C] border border-[#C8A96B]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <SmoothDropdown
              label="Select Corporate Subcategory"
              placeholder="Choose a Product..."
              options={productDropdownOptions}
              value={selectedProduct}
              onChange={setSelectedProduct}
              theme="darkForest"
            />
          </div>

          {selectedProduct !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedProduct('all')}
              className="text-xs text-[#FC3C1E] font-bold hover:underline"
            >
              Reset to All 10 Corporate Products
            </button>
          )}
        </div>

        {/* 10 Corporate Products Grid with Scroll View Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p, idx) => (
            <div
              key={p.id}
              className="reveal-on-scroll"
              data-reveal="fadeUp"
              data-delay={idx * 60}
            >
              <ProductCard
                id={p.id}
                name={p.name}
                category="Corporate Gift"
                image={corporateProductImages[p.id] || 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800'}
                personalisation={p.personalisation}
                detail="High quality finish with custom corporate logo and employee name engraving."
                badgeText={`Product 0${idx + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Selected Corporate Product Media Gallery (Positioned at bottom) */}
        {selectedProduct !== 'all' && corpGallery && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <ProductSubcategoryGallery
              title={selectedProduct}
              category="Corporate Gifts"
              description={`Review bulk branding applications, laser etching precision, and packaging options for ${selectedProduct}.`}
              images={corpGallery}
            />
          </div>
        )}

      </div>
    </div>
  );
};
