import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { X, Calendar, MapPin, Users, Camera, MessageCircle, Send } from 'lucide-react';
import { createWhatsAppLink } from '../../utils/whatsapp';

/**
 * Category-Specific Photography Enquiry Modal
 * Features inputs tailored exclusively for photo/cinematography bookings:
 * - Occasion type
 * - Event date & time
 * - Venue / location
 * - Photography style (Candid, Traditional, Drone, Cinematic teaser)
 * - Estimated guest count
 */
export const PhotographyEnquiryModal = ({ isOpen, onClose, occasionName = 'Wedding' }) => {
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [styles, setStyles] = useState({
    candid: true,
    traditional: true,
    drone: false,
    cinematic: false,
  });
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleStyleToggle = (key) => {
    setStyles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedStyles = Object.keys(styles).filter(k => styles[k]).join(', ');
    
    const message = `Photography Enquiry for: ${occasionName}\nDate: ${eventDate || 'Not specified'}\nVenue: ${venue || 'Miyapur/Hyderabad'}\nGuest Count: ${guestCount || 'N/A'}\nCoverage Styles: ${selectedStyles}\nClient Name: ${customerName}\nPhone: ${phone}\nNotes: ${notes || 'None'}`;

    const link = createWhatsAppLink({
      category: 'Event Photography Enquiry',
      item: `${occasionName} Coverage`,
      occasion: occasionName,
      date: eventDate,
      customMessage: message
    });

    window.open(link, '_blank');
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#FC3C1E]/40 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#242424] via-[#1a1a1a] to-[#3a352f] text-white p-6 border-b-2 border-[#BA2410] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#BA2410] text-white flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base font-serif">{occasionName} Photography</h3>
              <p className="text-[11px] text-[#BA2410] font-bold uppercase tracking-wider">Book Consultation &amp; Availability</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 text-white/80">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#BA2410]" /> Event Date
              </label>
              <input
                type="date"
                required
                value={eventDate}
                onChange={e => setEventDate(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#BA2410]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                <Users className="w-3.5 h-3.5 inline mr-1 text-[#BA2410]" /> Est. Guests
              </label>
              <input
                type="text"
                placeholder="e.g. 100 - 300 guests"
                value={guestCount}
                onChange={e => setGuestCount(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#BA2410]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#BA2410]" /> Venue Location
            </label>
            <input
              type="text"
              placeholder="e.g. Miyapur, Kondapur, Madhapur or Banquet Hall"
              value={venue}
              onChange={e => setVenue(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#BA2410]"
            />
          </div>

          {/* Coverage Options */}
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase mb-2">Coverage Preferences</label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={styles.candid}
                  onChange={() => handleStyleToggle('candid')}
                  className="rounded text-[#BA2410]"
                />
                <span className="font-semibold text-gray-800">Candid Photography</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={styles.traditional}
                  onChange={() => handleStyleToggle('traditional')}
                  className="rounded text-[#BA2410]"
                />
                <span className="font-semibold text-gray-800">Traditional Photo &amp; HD Video</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={styles.drone}
                  onChange={() => handleStyleToggle('drone')}
                  className="rounded text-[#BA2410]"
                />
                <span className="font-semibold text-gray-800">4K Drone Aerial Shoot</span>
              </label>
              <label className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={styles.cinematic}
                  onChange={() => handleStyleToggle('cinematic')}
                  className="rounded text-[#BA2410]"
                />
                <span className="font-semibold text-gray-800">Cinematic Video Teaser</span>
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
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#BA2410]"
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
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#BA2410]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#242424] hover:bg-[#BA2410] text-white font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#BA2410] group-hover:text-white" />
              <span>Send Enquiry via WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </div>,
    document.body
  );
};

