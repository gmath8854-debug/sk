# Component Sources & Integration Guide

**Project:** Saikumar Digital Lab & Studio (Miyapur, Hyderabad)  
**Standard:** Clean Separation, Zero Generic AI Aesthetics, Custom Theme Tokens

This document records the exact component libraries, design sources, and animations integrated into the frontend application.

---

## 1. Kokonut UI (`https://kokonutui.com/`)

### A. `CartButton.jsx`
- **Source:** Kokonut UI Cart & Action button pattern
- **File:** `frontend/src/components/kokonutui/CartButton.jsx`
- **Customization:**
  - Tokenized with brand colors (`#FC3C1E` crimson and `#FD9B00` golden amber).
  - Micro-interaction particle ripple on click.
  - State transitions between idle (`Add to cart`) and added (`Added to Cart!`).
  - Accessibility ARIA attributes included.

### B. `SmoothDropdown.jsx`
- **Source:** Kokonut UI Animated Dropdown Selector
- **File:** `frontend/src/components/kokonutui/SmoothDropdown.jsx`
- **Customization:**
  - Replaces all flat filter buttons with smooth animated dropdown menus across all category pages (`CustomisedGifts`, `CorporateGifts`, `Photography`, `StudioServices`).
  - Supports both `crimson` (`#FC3C1E`) and `forest` (`#1F513D`) theme variants.
  - Keyboard accessible, click-outside listener, and smooth spring-like entrance animation.

### C. `MagnetButton.jsx`
- **Source:** Kokonut UI Magnetic Cursor Action
- **File:** `frontend/src/components/kokonutui/MagnetButton.jsx`
- **Customization:**
  - Calculates cursor offset relative to button bounding rect.
  - Pulls button smoothly toward cursor with configurable pull strength and cubic-bezier release.

---

## 2. Magic UI & CTA Gallery (`https://magicui.design/` & `https://www.cta.gallery/`)

### A. `LuxuryCTA.jsx`
- **Source:** Magic UI Shimmer Border / CTA Gallery Full-Width Conversion Pattern
- **File:** `frontend/src/components/magicui/LuxuryCTA.jsx`
- **Customization:**
  - Luminous gradient orbs with Gaussian blur.
  - Shimmer pill badge with pulsing sparkle.
  - Dual action buttons: Primary category link + Direct WhatsApp studio inquiry.
  - Studio trust badges at the base.

---

## 3. React Bits (`https://reactbits.dev/`)

### A. `GiftingBackground.jsx`
- **Source:** React Bits Ambient Canvas / SVG Animated Particles
- **File:** `frontend/src/components/reactbits/GiftingBackground.jsx`
- **Customization:**
  - Floating 3D gift boxes with ribbon crosses.
  - Rotating decorative sparkles and soft bokeh lights.
  - CSS keyframe floating loops (`float-slow`, `float-medium`, `spin-slow`).
  - Positioned as subtle background motif in `BannerCarousel` and hero sections.

---

## 4. Anime.js (`https://animejs.com/`)

### A. `OpeningSplashLoader.jsx`
- **Source:** Anime.js v4 Animation Engine
- **File:** `frontend/src/components/ui/OpeningSplashLoader.jsx`
- **Customization:**
  - 3D-styled unboxing opening sequence displaying the official Saikumar brand logo.
  - Staggered emblem scale, rotating sparkle accents, and smooth curtain pull-up exit.
  - Configurable completion callback triggering unmount.

### B. `scrollAnimations.js`
- **Source:** Anime.js v4 + IntersectionObserver API
- **File:** `frontend/src/animations/scrollAnimations.js`
- **Customization:**
  - Observes elements with `.reveal-on-scroll`.
  - Staggers children entrances with cubic-bezier easing (`outCubic`).
  - Supports configurable delay and threshold.

### C. Header Navigation Stagger (`Header.jsx`)
- **Source:** Anime.js dropdown menu item sequence
- **File:** `frontend/src/components/layout/Header.jsx`
- **Customization:**
  - Staggers subcategory list items on hover using `delay: (el, i) => i * 20` for fluid presentation.

---

## 5. Untitled UI (`https://www.untitledui.com/`)

### A. Form & Input Design System
- **Files:**
  - `frontend/src/components/modals/CustomizationModal.jsx`
  - `frontend/src/components/modals/CorporateEnquiryModal.jsx`
  - `frontend/src/pages/Checkout.jsx`
- **Customization:**
  - Clean two-column split modal architectures (image left, form right).
  - Clean floating labels, radio toggles for single vs multiple file uploads, and crisp focus rings.
  - Real-time client-side file preview with remove button and file size validation.

---

## 6. Official Brand Assets
- **Logo:** `frontend/public/images/logo/saikumar-logo.jpg` (official user-supplied high-resolution identity)
- **VHS/DVD Conversion Graphic:** `frontend/public/images/media-conversion/vhs-dvd-conversion.jpg`

