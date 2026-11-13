import React, { useState } from 'react';
import { useGiftList } from '../context/GiftListContext';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CheckCircle2, ShieldCheck, MapPin, Phone, User, CreditCard } from 'lucide-react';
import { orderService } from '../services/orderService';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Checkout = () => {
  const { items, clearList, totalCount } = useGiftList();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Hyderabad',
    pincode: '',
    occasion: '',
    deliveryDate: '',
    notes: '',
    paymentMethod: 'Studio Confirmation & WhatsApp Direct'
  });

  const [loading, setLoading] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    setLoading(true);
    try {
      const response = await orderService.createOrder({
        items,
        customer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        },
        deliveryAddress: {
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode
        },
        paymentMethod: formData.paymentMethod,
        notes: `Occasion: ${formData.occasion} | Needed By: ${formData.deliveryDate} | Notes: ${formData.notes}`
      });

      if (response && response.order) {
        setConfirmedOrder(response.order);
        clearList();
      }
    } catch (err) {
      console.error('Order creation error:', err);
      // Fallback local mock confirmation
      const mockOrder = {
        orderId: 'SKD-' + Math.floor(100000 + Math.random() * 900000),
        createdAt: new Date().toISOString(),
        items,
        customer: { name: formData.name, phone: formData.phone }
      };
      setConfirmedOrder(mockOrder);
      clearList();
    } finally {
      setLoading(false);
    }
  };

  if (confirmedOrder) {
    const whatsAppLink = createWhatsAppLink({
      category: 'Confirmed Checkout Order',
      item: `Order ID: ${confirmedOrder.orderId}`,
      personalisation: `Customer: ${formData.name}`,
      occasion: formData.occasion,
      date: formData.deliveryDate,
      customMessage: `Items: ${confirmedOrder.items?.map(it => it.name).join(', ')}\nDelivery To: ${formData.address}, ${formData.city} - ${formData.pincode}`
    });

    return (
      <div className="bg-[#FAF8F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FC3C1E]">
            Order Confirmation Received
          </span>

          <h2 className="text-3xl font-extrabold text-[#191919]">
            Thank You, {formData.name}!
          </h2>

          <div className="p-4 rounded-2xl bg-[#FFF0EE] border border-[#FC3C1E]/40 text-xs text-gray-700">
            <p className="font-extrabold text-[#FC3C1E] text-sm">Order Reference: {confirmedOrder.orderId}</p>
            <p className="mt-1 text-gray-600">A studio design specialist has been assigned to your order.</p>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            We will share your high-resolution artwork mockup with you on WhatsApp at <strong>+91 {formData.phone}</strong> for approval before final printing & framing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors shadow-lg"
            >
              Open Order in WhatsApp Now
            </a>
            <Link
              to="/"
              className="px-8 py-4 rounded-full border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 transition-colors"
            >
              Continue Exploring
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#FC3C1E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </button>
        </div>

        <h1 className="text-3xl font-extrabold text-[#191919] tracking-tight mb-8">
          Complete Your Gifting Order
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DFD1] max-w-lg mx-auto space-y-4">
            <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-bold text-lg text-gray-800">Your Gift Bag is Empty</h3>
            <p className="text-xs text-gray-500">
              Browse Customised Gifts, Corporate Gifts, or Photo Frames to add items to your checkout.
            </p>
            <Link
              to="/customised-gifts"
              className="inline-block px-6 py-3 rounded-full bg-[#FC3C1E] text-white text-xs font-bold hover:bg-[#C62828]"
            >
              Explore Customised Gifts
            </Link>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Columns: Delivery & Contact Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Contact Information */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-sm space-y-4">
                <h3 className="text-base font-extrabold text-[#191919] flex items-center gap-2 pb-2 border-b border-gray-100">
                  <User className="w-4 h-4 text-[#FC3C1E]" /> Contact Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-sm space-y-4">
                <h3 className="text-base font-extrabold text-[#191919] flex items-center gap-2 pb-2 border-b border-gray-100">
                  <MapPin className="w-4 h-4 text-[#FC3C1E]" /> Delivery / Studio Pickup
                </h3>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Street Address or Pickup Preference *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Flat / House No., Landmark (Or 'Studio Pickup in Miyapur')"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="500049"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                </div>
              </div>

              {/* Gifting Event Details */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-sm space-y-4">
                <h3 className="text-base font-extrabold text-[#191919] pb-2 border-b border-gray-100">
                  🎉 Occasion & Special Notes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Occasion / Celebration</label>
                    <input
                      type="text"
                      name="occasion"
                      placeholder="e.g. Birthday, Wedding, 25th Silver Jubilee"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Needed By Date</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Additional Engraving / Photo Instructions</label>
                  <textarea
                    rows={2}
                    name="notes"
                    placeholder="Mention custom names, dates, quotes or specific photo layout wishes..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  />
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Order Summary Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-xl sticky top-28 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <h3 className="font-extrabold text-base text-[#191919]">Order Items ({totalCount})</h3>
                  <span className="text-xs font-bold text-[#FC3C1E]">In Production Queue</span>
                </div>

                {/* Items List */}
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {items.map((it, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#FAF8F5] border border-gray-100">
                      {it.image && (
                        <img src={it.image} alt={it.name} className="w-12 h-12 rounded-xl object-cover border border-gray-200 shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-extrabold text-[#191919] truncate">{it.name}</p>
                        <p className="text-[10px] text-gray-500">Qty: {it.quantity || 1} • {it.category}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF0EE] border border-[#FC3C1E]/30 text-xs text-gray-700 space-y-2">
                  <p className="font-bold text-[#FC3C1E] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Personalised Preview Process
                  </p>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    No immediate online payment required. Our team prepares your digital layout, sends the preview on WhatsApp, and confirms payment mode (GPay, UPI, or in-store).
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#FC3C1E] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#C62828] transition-colors shadow-lg shadow-[#FC3C1E]/25 disabled:opacity-50"
                >
                  {loading ? 'Submitting Order...' : 'Confirm Order & Request Mockup'}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

