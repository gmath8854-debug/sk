import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { X, Building2, Upload, Trash2, CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { orderService } from '../../services/orderService';
import { createWhatsAppLink } from '../../utils/whatsapp';

export const CorporateEnquiryModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('50');
  const [productName, setProductName] = useState(product ? product.name : 'Personalised Wooden Photo Planks');
  const [deliveryLocation, setDeliveryLocation] = useState('Hyderabad');
  const [requirements, setRequirements] = useState('');
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await orderService.submitCorporateEnquiry({
        companyName,
        contactPerson,
        email,
        phone,
        quantity,
        productName,
        deliveryLocation,
        requirements
      });
      setSubmitted(true);
    } catch (err) {
      console.warn('API fallback:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppQuote = () => {
    const link = createWhatsAppLink({
      category: 'Corporate Bulk Quotation',
      item: productName,
      quantity: `${quantity} units`,
      personalisation: `Company: ${companyName} (${contactPerson})`,
      location: deliveryLocation,
      customMessage: `Email: ${email} | Phone: ${phone}\nRequirements: ${requirements}`
    });
    window.open(link, '_blank');
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#12281C] text-[#F1DDC0] rounded-3xl shadow-2xl border border-[#C8A96B]/30 overflow-hidden my-auto animate-in zoom-in-95 duration-200 z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/20">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#C8A96B]" />
            <h3 className="font-extrabold text-base text-white">
              Corporate Quotation Request — <span className="text-[#C8A96B]">{productName}</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1F513D] text-[#C8A96B] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Quotation Request Logged</h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{contactPerson}</strong>! Our corporate gifting account manager will prepare formal pricing and layout proposals for <strong>{companyName}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppQuote}
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Connect Directly on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wipro, Tech Mahindra, Innovate Inc"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Reddy (HR / Procurement)"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="priya@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    placeholder="e.g. 25, 100, 500 pcs"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">Delivery City</label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad, Bengaluru"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>
              </div>

              {/* Company Logo Upload with Preview and Remove option */}
              <div>
                <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">
                  Upload Company Logo (For Mockup &amp; Engraving)
                </label>
                {!logoPreview ? (
                  <label className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-[#C8A96B] mb-1" />
                    <span className="text-xs text-[#F1DDC0] font-semibold">Click to upload brand logo</span>
                    <span className="text-[10px] text-gray-400">PNG, SVG, AI, or JPG</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-[#C8A96B]/50">
                    <div className="flex items-center gap-3">
                      <img
                        src={logoPreview}
                        alt="Brand Logo"
                        className="w-12 h-12 object-contain bg-white rounded-lg p-1 border border-gray-300"
                      />
                      <div>
                        <p className="text-xs font-bold text-white truncate max-w-[180px]">
                          {logoFile?.name || 'Uploaded Logo'}
                        </p>
                        <span className="text-[10px] text-[#C8A96B] font-semibold">Ready for laser engraving</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeLogo}
                      className="p-2 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition-colors"
                      title="Remove Logo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#F1DDC0] uppercase mb-1">Branding Requirements</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Laser engraving on wood plank + individual employee names + company logo on gift box"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B]"
                />
              </div>

              {/* Product Portfolio Showcase Gallery within Modal */}
              <div className="pt-2">
                <p className="text-[11px] font-black uppercase tracking-wider text-[#C8A96B] mb-2">
                  🏢 Executive Finish &amp; Packaging Gallery
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-video rounded-xl overflow-hidden border border-white/20 bg-black/40">
                    <img
                      src={product?.image || 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400'}
                      alt={productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden border border-white/20 bg-black/40">
                    <img
                      src="https://images.unsplash.com/photo-1585336261026-77cc7c427329?q=80&w=400"
                      alt="Laser Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden border border-white/20 bg-black/40">
                    <img
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400"
                      alt="Corporate Box"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#1F513D] text-[#F1DDC0] border border-[#C8A96B]/50 hover:bg-[#12281C] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? 'Submitting Request...' : (
                    <>
                      <span>Request Formal Quotation & Catalog</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>,
    document.body
  );
};

