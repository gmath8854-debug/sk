import React from 'react';
import { Gift, MessageSquare, Truck, Sparkles } from 'lucide-react';
import { KokonutCard } from '../ui/KokonutComponents';

export const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Select Item or Service',
      description: 'Choose from 9 Customised Gift types, 15 Photography occasions, corporate items or studio services.',
      icon: Gift,
      color: '#FC3C1E',
      bg: '#FFEBE8'
    },
    {
      step: '02',
      title: 'Share Photos & Details',
      description: 'Send high-res photos, custom names, or event details directly to our studio team on WhatsApp.',
      icon: MessageSquare,
      color: '#023B20',
      bg: '#D5C7AA'
    },
    {
      step: '03',
      title: 'Quick Studio Confirmation',
      description: 'Receive digital design previews for approval, quotation, and fast store pickup or courier delivery.',
      icon: Truck,
      color: '#BA2410',
      bg: '#F5F0E8'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-gray-200 shadow-sm text-gray-800 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FC3C1E]" />
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            How to Order with Saikumar Studio
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Seamless WhatsApp enquiry handoff — no complicated cart or forced logins needed.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <KokonutCard key={idx} className="p-8 relative overflow-hidden group">
                <span className="text-6xl font-black text-gray-100 absolute -top-2 right-4 group-hover:text-gray-200 transition-colors">
                  {st.step}
                </span>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: st.bg, color: st.color }}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {st.description}
                </p>
              </KokonutCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

