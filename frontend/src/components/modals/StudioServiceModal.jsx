import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { X, Printer, Frame, Disc, Clock, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../../utils/whatsapp';

/**
 * Category-Specific Studio Services & VHS Modal
 * Features inputs tailored for passport photos, document printing, 14 frame dimensions, and legacy VHS/DVD digitisation
 */
export const StudioServiceModal = ({ isOpen, onClose, serviceName = 'Studio Service', initialDetail = '' }) => {
  const frameSizes = [
    '4 × 6', '5 × 7', '6 × 8', '6 × 9', '8 × 10', '8 × 12',
    '10 × 12', '10 × 15', '12 × 15', '12 × 18', '16 × 20',
    '20 × 24', '20 × 30', '30 × 40 inches'
  ];

  const [selectedSize, setSelectedSize] = useState('8 × 12');
  const [quantity, setQuantity] = useState(1);
  const [mediaType, setMediaType] = useState('VHS Video Tape');
  const [isUrgent, setIsUrgent] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const isFraming = serviceName.toLowerCase().includes('frame') || serviceName.toLowerCase().includes('printing & frame');
  const isVHS = serviceName.toLowerCase().includes('vhs') || serviceName.toLowerCase().includes('dvc') || serviceName.toLowerCase().includes('pendrive') || serviceName.toLowerCase().includes('dvd');

  const handleSubmit = (e) => {
    e.preventDefault();
    const specs = isFraming
      ? `Frame Size: ${selectedSize}, Qty: ${quantity}`
      : isVHS
      ? `Media Type: ${mediaType}, Qty: ${quantity} Tapes/Discs, Fast Urgency: ${isUrgent ? 'Yes' : 'Normal'}`
      : `Specifications: ${initialDetail || 'Standard'}, Qty: ${quantity}`;

    const link = createWhatsAppLink({
      category: 'Studio Lab Service Enquiry',
      item: serviceName,
      quantity: quantity,
      customMessage: `Service: ${serviceName}\n${specs}\nClient Name: ${customerName}\nPhone: ${phone}\nNotes: ${notes || 'None'}`
    });

    window.open(link, '_blank');
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#8E986D]/40 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8E986D] via-[#6F7A52] to-[#4A5333] text-white p-6 border-b-2 border-[#EFE8D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFE8D8] text-[#4A5333] flex items-center justify-center font-bold">
              {isFraming ? <Frame className="w-5 h-5" /> : isVHS ? <Disc className="w-5 h-5" /> : <Printer className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-extrabold text-base">{serviceName}</h3>
              <p className="text-[11px] text-[#EFE8D8] font-bold uppercase tracking-wider">Fast Turnaround at Miyapur Lab</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 text-white/80">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* If Framing, show 14 Frame Sizes selector */}
          {isFraming && (
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                Select from 14 Frame Sizes
              </label>
              <select
                value={selectedSize}
                onChange={e => setSelectedSize(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8E986D]"
              >
                {frameSizes.map((sz, i) => (
                  <option key={i} value={sz}>{sz} (with photo print &amp; frame)</option>
                ))}
              </select>
            </div>
          )}

          {/* If VHS / Legacy Media, show media selector */}
          {isVHS && (
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                Original Media Type
              </label>
              <select
                value={mediaType}
                onChange={e => setMediaType(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8E986D]"
              >
                <option value="VHS Video Cassette">VHS Video Cassette (Full Size)</option>
                <option value="Sony Handycam DVC / MiniDV Tape">Sony Handycam DVC / MiniDV Tape</option>
                <option value="CD / DVD Disc">CD / DVD Disc</option>
                <option value="Multiple Mixed Media">Multiple Mixed Media</option>
              </select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value) || 1)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8E986D]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Urgency</label>
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={isUrgent}
                  onChange={e => setIsUrgent(e.target.checked)}
                  className="rounded text-[#8E986D]"
                />
                <span className="font-bold text-gray-800">⚡ Same Day / Urgent</span>
              </label>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-100">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8E986D]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">WhatsApp / Phone</label>
              <input
                type="tel"
                required
                placeholder="Phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#8E986D]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#8E986D] hover:bg-[#6F7A52] text-white font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire Pricing &amp; Turnaround on WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </div>,
    document.body
  );
};

