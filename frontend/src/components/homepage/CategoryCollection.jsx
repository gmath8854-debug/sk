import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from '../products/ProductCard';

export const CategoryCollection = ({
  title,
  subtitle,
  categoryName,
  tag,
  items,
  linkTo,
  theme = 'customised',
  getImage,
  isProminent = false
}) => {
  // Desktop rule: 2 rows of 4 cards = 8 items
  const displayItems = items.slice(0, 8);

  const themeClasses = {
    customised: 'bg-gradient-to-b from-[#FFEBE8]/30 via-white to-[#FAF8F5] border-t-2 border-[#FC3C1E]/20',
    corporate: 'bg-gradient-to-b from-[#12281C]/5 via-white to-[#FAF8F5] border-t-2 border-[#12281C]/20',
    photography: 'bg-gradient-to-b from-[#242424]/5 via-white to-[#FAF8F5] border-t-2 border-[#BA2410]/20',
    studio: 'bg-gradient-to-b from-[#8E986D]/10 via-white to-[#FAF8F5] border-t-2 border-[#8E986D]/20'
  };

  return (
    <section className={`py-16 md:py-20 ${themeClasses[theme] || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-gray-200 shadow-sm text-gray-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FC3C1E]" />
              {tag}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191919] tracking-tight font-serif">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 max-w-2xl font-medium">
              {subtitle}
            </p>
          </div>

          <Link
            to={linkTo}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-300 text-xs font-extrabold text-gray-800 hover:border-[#FC3C1E] hover:text-[#FC3C1E] transition-all"
          >
            <span>View All {categoryName}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Row Desktop Product Grid (4 columns × 2 rows = 8 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className="reveal-on-scroll"
              data-reveal="fadeUp"
              data-delay={idx * 60}
            >
              <ProductCard
                id={item.id}
                name={item.name}
                category={categoryName}
                image={getImage(item.id)}
                detail={item.detail}
                personalisation={item.personalisation}
                isFeatured={isProminent}
                badgeText={isProminent && idx === 0 ? 'Top Pick' : undefined}
              />
            </div>
          ))}
        </div>

        {/* Prominent View More Button below the rows (mandatory per PRD HOME-03 & User Request) */}
        <div className="mt-12 text-center">
          <Link
            to={linkTo}
            className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md ${
              theme === 'corporate'
                ? 'bg-[#12281C] text-[#F1DDC0] hover:bg-[#1F513D]'
                : theme === 'photography'
                ? 'bg-[#242424] text-[#BA2410] hover:bg-black'
                : theme === 'studio'
                ? 'bg-[#8E986D] text-white hover:bg-[#6F7A52] shadow-[#8E986D]/30'
                : 'bg-[#9b1908] text-white hover:bg-[#7a1306] shadow-lg shadow-[#9b1908]/25'
            }`}
          >
            <span>View More {categoryName} ({items.length} Total Items)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
