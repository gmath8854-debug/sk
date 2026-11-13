import React from 'react';
import { Link } from 'react-router-dom';

export const Terms = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DFD1] shadow-sm space-y-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">How to Order & Terms</h1>
        <p className="text-xs text-gray-500">Last updated: November 2026</p>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-bold text-gray-900">1. Enquiry-Led Process</h2>
          <p>
            Saikumar Digital Lab & Studio operates an enquiry-first model. Adding items to your Gift List or clicking "Enquire" connects you directly with our studio representatives on WhatsApp. No online transactions are completed through this demo.
          </p>

          <h2 className="text-base font-bold text-gray-900">2. Custom Photo Submissions</h2>
          <p>
            High-resolution photographs for personalised wood planks, acrylic frames, crystal cubes, and photo albums should be shared via WhatsApp document mode or email to ensure maximum print clarity.
          </p>

          <h2 className="text-base font-bold text-gray-900">3. Digital Design Approvals</h2>
          <p>
            Before printing commences, a digital mock-up preview will be sent for your confirmation. Once approved by you, changes cannot be made to custom printed pieces.
          </p>

          <h2 className="text-base font-bold text-gray-900">4. Photography Bookings</h2>
          <p>
            Photography dates and package bookings are subject to studio schedule confirmation. Enquiring through the website does not constitute a guaranteed date reservation until acknowledged by studio staff.
          </p>

          <h2 className="text-base font-bold text-gray-900">5. Studio Visits & Collections</h2>
          <p>
            Completed custom gifts and prints can be picked up directly at our studio in Miyapur, Hyderabad. Courier delivery across Hyderabad is also available upon request.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-between">
          <Link to="/" className="text-xs font-bold text-[#FC3C1E] hover:underline">← Back to Homepage</Link>
          <Link to="/contact" className="text-xs font-bold text-gray-600 hover:underline">Contact Studio →</Link>
        </div>
      </div>
    </div>
  );
};

export const Privacy = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DFD1] shadow-sm space-y-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Privacy Notice</h1>
        <p className="text-xs text-gray-500">Saikumar Digital Lab & Studio Client Preview</p>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-bold text-gray-900">Customer Photo Confidentiality</h2>
          <p>
            We treat your family, personal, and corporate photos with strict privacy. Photos submitted for printing or framing are used solely for the fulfillment of your order and are never shared publicly or used for marketing without explicit client consent.
          </p>

          <h2 className="text-base font-bold text-gray-900">Local Browser Storage</h2>
          <p>
            This website utilizes standard browser localStorage only to preserve your shortlisted Gift List items during your browsing session. No tracking cookies or invasive third-party telemetry are installed.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-between">
          <Link to="/" className="text-xs font-bold text-[#FC3C1E] hover:underline">← Back to Homepage</Link>
          <Link to="/contact" className="text-xs font-bold text-gray-600 hover:underline">Contact Studio →</Link>
        </div>
      </div>
    </div>
  );
};

export const NotFound = () => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white p-8 rounded-3xl border border-[#E8DFD1] shadow-sm space-y-4">
        <p className="text-6xl font-black text-[#FC3C1E]">404</p>
        <h2 className="text-xl font-extrabold text-gray-900">Page Not Found</h2>
        <p className="text-xs text-gray-500">
          The requested category or service page does not exist. Please return to our main catalog.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2.5 rounded-full bg-[#FC3C1E] text-white text-xs font-bold hover:bg-[#C93420] transition-colors"
        >
          Return to Studio Homepage
        </Link>
      </div>
    </div>
  );
};

