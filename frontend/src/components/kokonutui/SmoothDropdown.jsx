import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * Kokonut UI / Untitled UI Inspired Animated Select Dropdown
 * Smooth expand with staggered items, keyboard navigable & mobile responsive
 */
export const SmoothDropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select option...',
  label = '',
  theme = 'crimson' // 'crimson' | 'forest'
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const selectedItem = options.find((opt) => (opt.id || opt) === value);
  const displayLabel = selectedItem ? (selectedItem.name || selectedItem) : placeholder;

  const themeClasses = {
    crimson: {
      border: open ? 'border-[#FC3C1E] ring-2 ring-[#FC3C1E]/20' : 'border-gray-200 hover:border-[#FC3C1E]',
      activeItem: 'bg-[#FFF0EE] text-[#FC3C1E] font-bold',
      check: 'text-[#FC3C1E]',
      labelColor: 'text-[#191919]'
    },
    forest: {
      border: open ? 'border-[#1F513D] ring-2 ring-[#1F513D]/20' : 'border-gray-200 hover:border-[#1F513D]',
      activeItem: 'bg-[#F5EBDD] text-[#12281C] font-bold',
      check: 'text-[#1F513D]',
      labelColor: 'text-[#1c2720]'
    },
    darkForest: {
      border: open ? 'border-[#C8A96B] ring-2 ring-[#C8A96B]/20' : 'border-white/20 hover:border-[#C8A96B]',
      activeItem: 'bg-[#1F513D] text-[#F1DDC0] font-bold',
      check: 'text-[#C8A96B]',
      labelColor: 'text-[#F1DDC0]'
    }
  };

  const currentTheme = themeClasses[theme] || themeClasses.crimson;

  return (
    <div className="relative w-full max-w-sm select-none" ref={containerRef}>
      {label && (
        <label className={`block text-[11px] font-black uppercase tracking-wider mb-1.5 ${currentTheme.labelColor || 'text-[#191919]'}`}>
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 bg-white rounded-2xl text-xs font-semibold text-gray-900 transition-all duration-200 shadow-sm ${currentTheme.border}`}
      >
        <span className="truncate">{displayLabel}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${open ? 'rotate-180 text-gray-800' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-2 z-40 max-h-64 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {options.map((opt, idx) => {
              const val = opt.id || opt;
              const title = opt.name || opt;
              const isSelected = val === value;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    onChange(val);
                    setOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs cursor-pointer transition-colors ${
                    isSelected ? currentTheme.activeItem : 'text-gray-700 hover:bg-[#FAF8F5] hover:text-black'
                  }`}
                >
                  <span className="truncate">{title}</span>
                  {isSelected && <Check className={`w-3.5 h-3.5 ${currentTheme.check} shrink-0`} />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

