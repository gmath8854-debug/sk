import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGiftList } from '../../context/GiftListContext';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { SlideButton } from '../ui/KokonutComponents';
import { createWhatsAppLink } from '../../utils/whatsapp';

export const GiftListDrawer = () => {
  const { items, removeItem, updateQuantity, clearList, totalCount, isOpen, setIsOpen } = useGiftList();
  const [occasion, setOccasion] = useState('');
  const [neededByDate, setNeededByDate] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    const listSummary = items
      .map((it, idx) => `${idx + 1}. ${it.name} (Qty: ${it.quantity || 1}) - Category: ${it.category || 'Gift'}`)
      .join('\n');

    const link = createWhatsAppLink({
      category: 'Cart Order Enquiry',
      item: `${items.length} items in cart`,
      occasion: occasion,
      date: neededByDate,
      customMessage: `Cart Items:\n${listSummary}`
    });

    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[999999] overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex w-full sm:w-auto">
        <div className="w-full sm:w-screen sm:max-w-md bg-white shadow-2xl flex flex-col border-l border-gray-200 z-10">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FC3C1E]" />
              <h3 className="font-extrabold text-lg text-gray-900">Your Cart</h3>
              <span className="bg-[#FFEBE8] text-[#C93420] text-xs font-bold px-2 py-0.5 rounded-full">
                {totalCount} {totalCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="font-bold text-gray-700 text-base">Your cart is empty</p>
                <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                  Browse Customised Gifts, Corporate Gifts or Frames and click "Add to cart" to start your order.
                </p>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-[#FAF8F5] relative group"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200 shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-gray-900 truncate">{item.name}</h4>
                    <span className="text-[11px] font-semibold text-[#FC3C1E] block">
                      {item.category || 'Customised Gift'}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="p-1 hover:bg-gray-100 text-gray-600 rounded-l-lg"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-800">{item.quantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="p-1 hover:bg-gray-100 text-gray-600 rounded-r-lg"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(index)}
                        className="text-gray-400 hover:text-red-600 text-xs flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout & WhatsApp buttons (Cleaned: No Occasion or Needed-by Date inputs here per user requirement) */}
          {items.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-[#FAF8F5] space-y-4">
              {/* Direct Link to Checkout Page */}
              <Link
                to="/checkout"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 px-6 rounded-full bg-[#FC3C1E] hover:bg-[#C62828] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FC3C1E]/20 transition-all duration-300"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <SlideButton
                onClick={handleSendWhatsApp}
                variant="outline"
                className="w-full text-xs"
                icon={MessageCircle}
              >
                Order via WhatsApp Directly
              </SlideButton>

              <button
                onClick={clearList}
                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 underline"
              >
                Clear all items
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

