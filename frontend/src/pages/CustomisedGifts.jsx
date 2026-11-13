import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import customisedGiftsData from '../data/customisedGifts.json';
import { customisedProductImages, categoryBanners } from '../data/images';
import { ProductCard } from '../components/products/ProductCard';
import { Sparkles, Star, Gift, ArrowRight } from 'lucide-react';
import { SmoothDropdown } from '../components/kokonutui/SmoothDropdown';
import { ProductSubcategoryGallery } from '../components/gallery/ProductSubcategoryGallery';
import { initScrollReveal } from '../animations/scrollAnimations';

export const CustomisedGifts = () => {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product');
  
  const [selectedProduct, setSelectedProduct] = useState(productParam || 'all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');

  useEffect(() => {
    if (productParam) {
      setSelectedProduct(productParam);
    }
  }, [productParam]);

  const products = customisedGiftsData.products;
  const occasions = customisedGiftsData.occasions;

  useEffect(() => {
    const cleanup = initScrollReveal('.reveal-on-scroll');
    return () => cleanup && cleanup();
  }, [selectedProduct, selectedOccasion]);

  // Dropdown options
  const productOptions = [
    { id: 'all', name: '✨ All 9 Product Categories' },
    ...products.map((p) => ({ id: p.name, name: p.name }))
  ];

  const occasionOptions = [
    { id: 'all', name: '🎉 All 29 Celebratory Occasions' },
    ...occasions.map((o) => ({ id: o.name, name: o.name }))
  ];

  // Filter logic
  const filteredProducts = products.filter((prod) => {
    if (selectedProduct !== 'all' && prod.name !== selectedProduct) return false;
    return true;
  });

  // Sample multi-angle gallery photos for active product
  const activeProductData = products.find(p => p.name === selectedProduct);
  const galleryImages = activeProductData ? [
    { url: customisedProductImages[activeProductData.id], caption: `${activeProductData.name} — Front Finished View` },
    { url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800', caption: 'Handcrafted Wood & Border Detail' },
    { url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800', caption: 'Luxury Gift Box Packaging' }
  ] : null;

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-20">
      
      {/* Category Hero Banner with Photographic Backdrop */}
      <div className="relative overflow-hidden bg-[#191919] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FC3C1E]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url(${categoryBanners.customisedGifts.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#C62828]/80 to-[#FC3C1E]/40" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFEBE8] text-[#C93420] shadow-md">
              <Star className="w-3.5 h-3.5 fill-current text-[#FC3C1E]" />
              Primary Studio Speciality
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif text-white">
              Personalised &amp; Customised Gifts
            </h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
              Every single product can be crafted for any of our 29 celebratory occasions. Handcrafted with precision printing, durable frames, and your cherished photos.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center max-w-xs shrink-0 shadow-2xl">
            <p className="text-4xl font-black text-[#FFEBE8]">29 × 9</p>
            <p className="text-xs font-bold uppercase tracking-wider text-white mt-1">
              Occasions &amp; Categories
            </p>
            <p className="text-[11px] text-white/80 mt-1">
              Unlimited personalised combinations!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Animated Subcategory Dropdown Selectors */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <SmoothDropdown
              label="1. Filter by Product Category (9 Types)"
              placeholder="Select a Product Type..."
              options={productOptions}
              value={selectedProduct}
              onChange={setSelectedProduct}
              theme="crimson"
            />
            {selectedProduct !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedProduct('all')}
                className="text-xs text-[#FC3C1E] font-bold hover:underline mt-2 inline-block"
              >
                Reset to All 9 Products
              </button>
            )}
          </div>

          <div>
            <SmoothDropdown
              label="2. Select Celebratory Occasion (29 Occasions)"
              placeholder="Select an Occasion..."
              options={occasionOptions}
              value={selectedOccasion}
              onChange={setSelectedOccasion}
              theme="crimson"
            />
            {selectedOccasion !== 'all' && (
              <p className="text-xs text-[#FC3C1E] font-bold mt-2">
                Active Occasion: <span className="underline">{selectedOccasion}</span>
              </p>
            )}
          </div>
        </div>

        {/* Product Grid with Scroll View Animation */}
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
                category="Customised Gift"
                image={customisedProductImages[p.id] || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800'}
                detail={`Compatible with all 29 occasions including ${selectedOccasion !== 'all' ? selectedOccasion : 'Birthdays, Anniversaries, Weddings'}. Custom photo print & design service included.`}
                isFeatured={true}
                badgeText={`Category 0${idx + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Selected Product Craftsmanship Showcase Gallery (Placed at bottom as requested) */}
        {selectedProduct !== 'all' && galleryImages && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <ProductSubcategoryGallery
              title={selectedProduct}
              category="Customised Gifts"
              description={`Explore the premium finish, edge beveling, and bespoke personalization options available for ${selectedProduct}.`}
              images={galleryImages}
            />
          </div>
        )}

      </div>
    </div>
  );
};
