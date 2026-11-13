import React, { useState, useRef } from 'react';
import { useGiftList } from '../../context/GiftListContext';
import { Eye, ArrowRight } from 'lucide-react';
import { CustomizationModal } from '../modals/CustomizationModal';
import { CorporateEnquiryModal } from '../modals/CorporateEnquiryModal';
import { PhotographyEnquiryModal } from '../modals/PhotographyEnquiryModal';
import { StudioServiceModal } from '../modals/StudioServiceModal';
import { CartButton } from '../kokonutui/CartButton';
import { triggerFlyingCartAnimation } from '../animations/FlyingCartItem';

export const ProductCard = ({
  id,
  name,
  category,
  image,
  detail,
  personalisation,
  isFeatured = false,
  badgeText
}) => {
  const { addItem, items } = useGiftList();
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [corpModalOpen, setCorpModalOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [studioModalOpen, setStudioModalOpen] = useState(false);

  const imgRef = useRef(null);

  const catLower = category?.toLowerCase() || '';
  const isCorporate = catLower.includes('corporate');
  const isPhotography = catLower.includes('photography');
  const isStudio = catLower.includes('studio');
  const isAlreadyInCart = items?.some((i) => i.id === id);

  const handleActionClick = () => {
    if (isCorporate) {
      setCorpModalOpen(true);
    } else if (isPhotography) {
      setPhotoModalOpen(true);
    } else if (isStudio) {
      setStudioModalOpen(true);
    } else {
      setCustomModalOpen(true);
    }
  };

  const handleAddToCart = () => {
    // Trigger floating flying particle animation to header cart!
    if (imgRef.current) {
      triggerFlyingCartAnimation(imgRef.current);
    }
    addItem({ id, name, category, image });
  };

  return (
    <>
      <div
        className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
          isCorporate
            ? 'bg-[#12281C] border-[#C8A96B] text-[#F1DDC0] hover:border-[#F1DDC0] hover:shadow-2xl hover:-translate-y-1'
            : isFeatured
            ? 'bg-white border-[#FC3C1E]/30 hover:border-[#FC3C1E] hover:shadow-luxury-hover hover:-translate-y-1'
            : 'bg-white border-[#E8DFD1] hover:border-[#FC3C1E] hover:shadow-luxury hover:-translate-y-1'
        }`}
      >
        {/* Card Image Container */}
        <div
          onClick={handleActionClick}
          className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] cursor-pointer"
        >
          <img
            ref={imgRef}
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge */}
          {badgeText && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 text-[#FC3C1E] shadow-sm border border-gray-100">
                ✨ {badgeText}
              </span>
            </div>
          )}

          {/* Quick Action Overlay */}
          <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-white/95 text-gray-900 text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#FC3C1E]" /> {isCorporate ? 'Enquire' : isPhotography || isStudio ? 'Book Enquiry' : 'Customise'}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span
              className={`text-[11px] font-extrabold tracking-wider uppercase block mb-1 ${
                isCorporate ? 'text-[#C8A96B]' : isPhotography ? 'text-[#BA2410]' : isStudio ? 'text-[#8E986D]' : 'text-[#FC3C1E]'
              }`}
            >
              {category}
            </span>
            <h3 className={`font-extrabold text-base leading-snug transition-colors ${
              isCorporate ? 'text-white group-hover:text-[#F1DDC0]' : 'text-[#191919] group-hover:text-[#FC3C1E]'
            }`}>
              {name}
            </h3>
            {detail && (
              <p className={`text-xs mt-1.5 line-clamp-2 leading-relaxed ${
                isCorporate ? 'text-gray-300' : 'text-[#5F5F5F]'
              }`}>
                {detail}
              </p>
            )}
            {personalisation && (
              <p className={`text-[11px] font-semibold mt-2 px-2.5 py-1 rounded-lg inline-block ${
                isCorporate ? 'bg-[#1F513D] text-[#F1DDC0]' : 'bg-[#F5EBDD] text-[#1F513D]'
              }`}>
                ✍️ {personalisation}
              </p>
            )}
          </div>

          {/* Action Row */}
          <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
            {!isPhotography && !isStudio ? (
              <>
                <CartButton
                  item={{ id, name, category, image }}
                  isAdded={isAlreadyInCart}
                  onClick={handleAddToCart}
                  className="flex-1"
                />

                <button
                  type="button"
                  onClick={handleActionClick}
                  className={`py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md text-white shrink-0 whitespace-nowrap ${
                    isCorporate
                      ? 'bg-[#12281C] hover:bg-[#1F513D]'
                      : 'bg-[#C62828] hover:bg-[#9b1908] shadow-[#C62828]/25'
                  }`}
                >
                  <span>{isCorporate ? 'Enquire' : 'Buy Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleActionClick}
                className={`w-full py-2.5 px-4 rounded-full text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm text-white ${
                  isPhotography
                    ? 'bg-[#242424] hover:bg-[#BA2410]'
                    : 'bg-[#8E986D] hover:bg-[#6F7A52]'
                }`}
              >
                <span>Book Service &amp; Enquire</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category-Specific Modals */}
      <CustomizationModal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
        product={{ id, name, category, image, detail }}
      />

      <CorporateEnquiryModal
        isOpen={corpModalOpen}
        onClose={() => setCorpModalOpen(false)}
        product={{ id, name, category, image }}
      />

      <PhotographyEnquiryModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        occasionName={name}
      />

      <StudioServiceModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
        serviceName={name}
        initialDetail={detail}
      />
    </>
  );
};
