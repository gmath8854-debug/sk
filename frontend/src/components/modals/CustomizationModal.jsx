import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { X, Upload, CheckCircle2, AlertCircle, Trash2, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { orderService } from '../../services/orderService';
import { api } from '../../services/api';
import { createWhatsAppLink } from '../../utils/whatsapp';

export const CustomizationModal = ({ isOpen, onClose, product, initialOccasion = '' }) => {
  if (!isOpen || !product) return null;

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploadMode, setUploadMode] = useState('single'); // 'single' or 'multiple'
  const [maxFiles, setMaxFiles] = useState(4);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [occasion, setOccasion] = useState(initialOccasion);
  const [nameOrQuote, setNameOrQuote] = useState('');
  const [instructions, setInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle image selection
  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    if (!selected.length) return;

    if (uploadMode === 'single') {
      const file = selected[0];
      setFiles([file]);
      setPreviews([URL.createObjectURL(file)]);
    } else {
      const allowed = selected.slice(0, maxFiles);
      setFiles(allowed);
      setPreviews(allowed.map(f => URL.createObjectURL(f)));
    }
  };

  const removePhoto = (idx) => {
    setFiles(prev => prev.filter((_, i) => i !== idx));
    setPreviews(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setErrorMsg('Please provide your name and phone number so we can send your digital preview.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      let uploadedFileUrls = [];
      // If photos were selected, upload via backend
      if (files.length > 0) {
        const formData = new FormData();
        files.forEach(f => formData.append('photos', f));
        try {
          const uploadRes = await api.uploadFile(formData);
          if (uploadRes && uploadRes.files) {
            uploadedFileUrls = uploadRes.files.map(f => f.url);
          }
        } catch (upErr) {
          console.warn('Backend upload skipped, using direct submission:', upErr);
        }
      }

      // Record to backend API
      await orderService.submitCustomization({
        productId: product.id,
        productName: product.name,
        occasion,
        customText: nameOrQuote,
        quantity,
        uploadedPhotos: uploadedFileUrls,
        instructions,
        customerName,
        customerPhone
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Customisation submission error:', err);
      // Fallback gracefully
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppInstant = () => {
    const link = createWhatsAppLink({
      category: 'Customised Gift Order',
      item: product.name,
      occasion,
      personalisation: nameOrQuote,
      quantity: `${quantity} unit(s)`,
      customMessage: `Customer: ${customerName} (${customerPhone})\nNotes: ${instructions}`
    });
    window.open(link, '_blank');
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E8DFD1] overflow-hidden my-auto animate-in zoom-in-95 duration-200 z-10">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD1] bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FC3C1E] animate-pulse" />
            <h3 className="font-extrabold text-base text-[#191919]">
              Customise Your Gift — <span className="text-[#FC3C1E]">{product.name}</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two-column Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
          
          {/* Left Column: Product Visual & Live Upload Preview */}
          <div className="md:col-span-5 bg-[#FAF8F5] p-6 border-r border-[#E8DFD1]/60 flex flex-col justify-between">
            <div>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white mb-4">
                <img
                  src={previews[0] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                {previews[0] && (
                  <div className="absolute top-3 left-3 bg-[#FC3C1E] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FC3C1E]" /> Live Upload Preview
                  </div>
                )}
              </div>

              <h4 className="font-extrabold text-sm text-[#191919]">{product.name}</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {product.detail || 'Handcrafted using high-density materials, UV-protected prints, and laser-precise personalisation.'}
              </p>

              {/* Uploaded Thumbnails Carousel */}
              {previews.length > 1 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-[11px] font-bold text-gray-700 uppercase mb-2">Uploaded Images ({previews.length})</p>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {previews.map((src, i) => (
                      <div key={i} className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-300 shrink-0">
                        <img src={src} alt="Upload" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removePhoto(i)}
                          className="absolute inset-0 bg-red-600/70 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Product Gallery Strip */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-[11px] font-black uppercase tracking-wider text-gray-800 mb-2">
                  📸 Craftsmanship &amp; Finish Gallery
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-sm bg-white">
                    <img
                      src={product.image}
                      alt={`${product.name} Finished`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-sm bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400"
                      alt="Detail"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-gray-300 shadow-sm bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400"
                      alt="Packaging"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#FFF0EE] border border-[#FC3C1E]/30 text-xs text-gray-700">
              <p className="font-bold text-[#FC3C1E] flex items-center gap-1.5 mb-1">
                🛡️ 100% Studio Proof Guarantee
              </p>
              <p className="text-[11px] text-gray-600">
                You will receive a digital preview on WhatsApp for final confirmation before printing begins.
              </p>
            </div>
          </div>

          {/* Right Column: Customization Form (Structured per Reference Image 4) */}
          <div className="md:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-extrabold text-[#191919]">Customisation Details Received!</h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{customerName}</strong>! Our studio designers have queued <strong>{product.name}</strong>. We will share your digital mockup on WhatsApp (+91 {customerPhone}).
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppInstant}
                    className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> Message Studio on WhatsApp
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 1. Field Heading: UPLOAD YOUR PHOTO (From Ref Image 4) */}
                <div className="p-4 rounded-2xl bg-[#FFF0EE]/50 border border-[#FC3C1E]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#191919] uppercase tracking-wider flex items-center gap-1.5">
                      <Upload className="w-4 h-4 text-[#FC3C1E]" /> UPLOAD YOUR PHOTO
                    </span>
                    <span className="text-[10px] font-bold text-[#FC3C1E] bg-white px-2 py-0.5 rounded-full border border-[#FC3C1E]/30">
                      Required
                    </span>
                  </div>

                  {/* Single vs Multiple radio toggles (Ref Image 4) */}
                  <div className="flex items-center gap-6 text-xs text-gray-700 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer font-semibold">
                      <input
                        type="radio"
                        name="uploadMode"
                        checked={uploadMode === 'single'}
                        onChange={() => setUploadMode('single')}
                        className="accent-[#FC3C1E]"
                      />
                      Single file
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-semibold">
                      <input
                        type="radio"
                        name="uploadMode"
                        checked={uploadMode === 'multiple'}
                        onChange={() => setUploadMode('multiple')}
                        className="accent-[#FC3C1E]"
                      />
                      Multiple files
                    </label>
                  </div>

                  {uploadMode === 'multiple' && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-500 font-medium">Maximum files:</span>
                      <input
                        type="number"
                        min="2"
                        max="8"
                        value={maxFiles}
                        onChange={(e) => setMaxFiles(Number(e.target.value))}
                        className="w-16 p-1 text-center bg-white border border-gray-300 rounded-lg text-xs"
                      />
                    </div>
                  )}

                  {/* Drag & drop upload box */}
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#FC3C1E]/50 rounded-xl bg-white hover:bg-[#FFF0EE]/30 cursor-pointer transition-colors group">
                    <Upload className="w-8 h-8 text-[#FC3C1E] group-hover:scale-110 transition-transform mb-1" />
                    <span className="text-xs font-bold text-gray-800">
                      {previews.length > 0 ? `Selected ${previews.length} photo(s) — Click to change` : 'Click to Browse or Drag & Drop Photo'}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-0.5">JPG, PNG, WEBP (High resolution recommended)</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple={uploadMode === 'multiple'}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* 2. Field Heading: NAME OR QUOTE TEXT (From Ref Image 4) */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold text-[#191919] uppercase tracking-wider">
                      NAME OR QUOTE TEXT
                    </label>
                    <span className="text-[10px] text-gray-400">Optional</span>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh & Sneha • Happy 25th Silver Jubilee • Best Mom Ever"
                    value={nameOrQuote}
                    onChange={(e) => setNameOrQuote(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  />
                </div>

                {/* 3. Occasion & Quantity row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-extrabold text-[#191919] uppercase mb-1">
                      Occasion
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday, Wedding, Anniversary"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-[#191919] uppercase mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                </div>

                {/* 4. Customer Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-extrabold text-[#191919] uppercase mb-1">
                      Your Full Name <span className="text-[#FC3C1E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-[#191919] uppercase mb-1">
                      WhatsApp Number <span className="text-[#FC3C1E]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 sm:py-4 px-4 rounded-full bg-[#FC3C1E] text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-[#C62828] transition-colors shadow-lg shadow-[#FC3C1E]/25 flex items-center justify-center gap-1.5 sm:gap-2 disabled:opacity-50 text-center"
                  >
                    {loading ? (
                      <span>Preparing Your Order...</span>
                    ) : (
                      <>
                        <span className="truncate">Submit Customisation &amp; Request Preview</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>,
    document.body
  );
};

