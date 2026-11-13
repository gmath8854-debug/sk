# 🏆 Saikumar Digital Lab & Studio — Production Architecture

This project is organized into an enterprise-grade, clean separation of **Frontend** and **Backend** tiers with dedicated design token foundations.

---

## 📁 Project Architecture Directory

```text
/d:/downloads/sai kumar digital prjt/
│
├── design-system/                  ← Master design specifications & documentation
│   ├── DESIGN_SYSTEM.md            ← Comprehensive typography, palette & UX rules
│   └── design.md                   ← Token mapping & motion specifications
│
├── frontend/                       ← React 19 + Vite + Tailwind CSS + Anime.js Tier
│   ├── index.html                  ← HTML5 entry with Playfair Display & Plus Jakarta Sans
│   ├── package.json
│   ├── vite.config.js              ← Configured for port 8000 & API proxy
│   ├── tailwind.config.js          ← Custom brand & corporate semantic color tokens
│   │
│   ├── public/
│   │   ├── images/
│   │   │   ├── logo/
│   │   │   │   └── saikumar-logo.jpg ← Official Saikumar Studio logo
│   │   │   ├── media-conversion/   ← VHS to USB conversion reference imagery
│   │   │   ├── customised-gifts/   ← Local real product assets drop-in folder
│   │   │   └── corporate-gifts/
│   │
│   └── src/
│       ├── services/               ← Centralized API & Service Communication Layer
│       │   ├── api.js              ← HTTP client with automated error handling & file uploads
│       │   └── orderService.js     ← Customisation, corporate enquiry & checkout endpoints
│       │
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.jsx      ← Sticky ecommerce header, Categories mega-menu
│       │   │   └── Footer.jsx      ← Studio hours, map integration, quick links
│       │   ├── modals/
│       │   │   ├── CustomizationModal.jsx ← Multi-file upload, live preview (Ref Image 4)
│       │   │   └── CorporateEnquiryModal.jsx ← Bulk B2B quotation form
│       │   ├── products/
│       │   │   └── ProductCard.jsx ← Contextual CTA buttons ("Buy Now", "Enquire Now")
│       │   └── gift-list/
│       │       └── GiftListDrawer.jsx ← Shortlist bag drawer with instant WhatsApp export
│       │
│       ├── pages/
│       │   ├── Home.jsx            ← High-conversion gifting homepage with 2-row previews
│       │   ├── CustomisedGifts.jsx ← 9 categories × 29 occasions interactive filters
│       │   ├── CorporateGifts.jsx  ← Executive green theme (#12281C & #F1DDC0)
│       │   ├── Photography.jsx     ← 15 occasions + 4 coverage packages
│       │   ├── StudioServices.jsx  ← 33 services, 14 frame sizes & VHS-to-USB digitisation
│       │   ├── Checkout.jsx        ← Complete multi-step checkout with order ID generation
│       │   └── LegalPages.jsx      ← Terms, Privacy & 404 pages
│       │
│       └── utils/
│           └── whatsapp.js         ← Direct click-to-chat generator
│
└── backend/                        ← Node.js + Express API Tier
    ├── package.json
    ├── orders.json                 ← Mock database file for persistent orders
    │
    └── src/
        ├── server.js               ← Express server with CORS & file streaming
        ├── routes/
        │   ├── orderRoutes.js      ← Orders, customisation, corporate enquiries
        │   └── uploadRoutes.js     ← Multi-part file upload with Multer
        ├── database/               ← Local order storage
        └── uploads/                ← Persistent customer uploaded photos
```

---

## 🎨 Color Palette Specifications
- **Customised Gifts:**
  - Primary Red: `#FC3C1E`
  - Deep Red: `#C62828`
  - Gifting Gold / Yellow: `#FD9B00`
  - Warm Surface: `#FFF8ED` / `#FFEFCB`
- **Corporate Gifts:**
  - Deep Forest Green: `#12281C`
  - Primary Executive Green: `#1F513D`
  - Refined Cream Beige: `#F1DDC0`
  - Muted Gold: `#C8A96B`

---

## 🚀 Running the Services

### 1. Start Backend API Server
```powershell
Set-Location "d:\downloads\sai kumar digital prjt\backend"
node src/server.js
# API runs on http://localhost:5000
```

### 2. Start Frontend Server (Port 8000)
```powershell
Set-Location "d:\downloads\sai kumar digital prjt\frontend"
npx vite --port 8000 --host
# Accessible at http://localhost:8000/
```

