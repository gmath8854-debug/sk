import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

/**
 * LuxuryCTA — Inspired by Magic UI & CTA Gallery
 * High-conversion full-width luxury banner with animated gradient border and luminous background
 */
export const LuxuryCTA = ({
  badge = "BESPOKE SERVICE",
  title = "Ready to Create Something Unforgettable?",
  subtitle = "Whether it's an intimate personalized wood plaque, an executive bulk corporate order, or event photography coverage, our master craftsmen in Miyapur are ready.",
  primaryAction = {
    label: "Explore Customised Gifts",
    link: "/customised-gifts"
  },
  secondaryAction = {
    label: "WhatsApp Studio (+91 63013 40919)",
    href: "https://wa.me/916301340919?text=Hello%20Saikumar%20Studio,%20I%20want%20to%20discuss%20a%20custom%20gift%20order"
  }
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#191919] via-[#242424] to-[#12281C] text-white p-8 sm:p-12 md:p-16 border border-[#FC3C1E]/30 shadow-2xl">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#FC3C1E]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FC3C1E]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          
          {/* Shimmer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FC3C1E]/30 to-[#FC3C1E]/30 border border-[#FC3C1E]/40 text-[#FC3C1E] shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>{badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryAction.link}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FC3C1E] hover:bg-[#C62828] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#FC3C1E]/30 group"
            >
              <span>{primaryAction.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={secondaryAction.href}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FC3C1E] border border-white/20 text-xs font-bold transition-all duration-300 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{secondaryAction.label}</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-gray-400 font-semibold">
            <span>✨ 100% Custom Made</span>
            <span>•</span>
            <span>⏱️ Fast Miyapur Studio Turnaround</span>
            <span>•</span>
            <span>💬 Live Design Approval on WhatsApp</span>
          </div>

        </div>
      </div>
    </section>
  );
};

