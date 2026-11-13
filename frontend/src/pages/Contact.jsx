import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { SlideButton } from '../components/ui/KokonutComponents';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Customised Gifts');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = createWhatsAppLink({
      category: service,
      item: 'General Studio Enquiry',
      personalisation: name ? `Name: ${name}` : '',
      customMessage: `Contact phone: ${phone}\nNotes: ${notes}`
    });
    window.open(link, '_blank');
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-20">
      
      {/* Hero */}
      <div className="bg-[#1C1C1C] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#C62828]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Saikumar Studio
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Have questions about custom gifts, event photography packages, or framing? Reach us directly on WhatsApp or visit our studio in Miyapur.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Info + Form */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-sm">
              <h3 className="text-xl font-extrabold text-gray-900 mb-6">Send an Instant Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Service Required</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  >
                    <option value="Customised Gifts">Customised Gifts (Planks, Crystals, Acrylics)</option>
                    <option value="Photography">Event Photography (15 Occasions)</option>
                    <option value="Corporate Gifts">Corporate Bulk Gifting</option>
                    <option value="Studio Services">Studio Passport Photos / Frames</option>
                    <option value="Media Conversion">VHS / DVD to Pendrive Conversion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message or Requirement Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the occasion, needed date, quantities, or specific photo sizes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-[#FAF8F5] focus:outline-none focus:border-[#FC3C1E]"
                  />
                </div>

                <SlideButton type="submit" variant="primary" className="w-full" icon={Send}>
                  Connect on WhatsApp with Details
                </SlideButton>
              </form>
            </div>

            {/* Direct Studio Details */}
            <div className="p-6 rounded-2xl bg-[#FFEBE8]/40 border border-[#C62828]/40 space-y-3 text-xs text-gray-800">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FC3C1E]" />
                <span><strong>WhatsApp:</strong> +91 63013 40919 (Instant replies)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#023B20]" />
                <span><strong>Email:</strong> saikumardls@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#BA2410]" />
                <span><strong>Studio Hours:</strong> Monday – Saturday: 9:30 AM – 9:30 PM | Sunday: 10:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right: Map & Directions */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-sm">
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Our Studio Address</h3>
              <p className="text-xs text-gray-600 mb-4 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FC3C1E] shrink-0 mt-0.5" />
                <span>
                  Shop No. 9, Martins High School Building, Mallareddy Complex, beside KS Bakers, Miyapur, Hyderabad — 500049.
                </span>
              </p>

              {/* Map embed */}
              <div className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-100 shadow-inner">
                <iframe
                  title="Saikumar Digital Lab Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.210453775086!2d78.354148!3d17.497426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9215037d04cf%3A0xc3c545366914ee67!2sMiyapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 flex justify-between items-center text-xs">
                <span className="text-gray-500">Landmark: Beside KS Bakers, Miyapur</span>
                <a
                  href="https://maps.google.com/?q=Saikumar+Digital+Lab+Miyapur+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#FC3C1E] hover:underline"
                >
                  Get Directions in Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

