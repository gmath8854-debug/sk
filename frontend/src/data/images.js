// Image registry mapping product/service/category IDs to curated high-resolution photography assets.
// When you place your real product images in public/images/..., simply update the paths below or run swap-images script.

export const categoryBanners = {
  customisedGifts: {
    title: "Personalised & Customised Gifts",
    subtitle: "Turn treasured moments into timeless handcrafted keepsakes",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1600&auto=format&fit=crop",
    link: "/customised-gifts",
    palette: { primary: "#FC3C1E", accent: "#C62828", surface: "#FFEBE8" }
  },
  photography: {
    title: "Events & Occasion Photography",
    subtitle: "Capturing authentic emotions, grand celebrations, and candid memories",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    link: "/photography",
    palette: { primary: "#242424", accent: "#BA2410", surface: "#F5F0E8" }
  },
  corporateGifts: {
    title: "Premium Corporate Gifting",
    subtitle: "Sophisticated executive gifts, branded merchandise & laser engravings",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1600&auto=format&fit=crop",
    link: "/corporate-gifts",
    palette: { primary: "#023B20", accent: "#D5C7AA", surface: "#8E986D" }
  },
  studioServices: {
    title: "Studio, Printing & Lab Services",
    subtitle: "High precision passport photos, large format frames, Xerox & VHS-to-USB digitisation",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop",
    link: "/studio-services",
    palette: { primary: "#8E986D", accent: "#EFE8D8", surface: "#F9F6F0" }
  }
};

export const customisedProductImages = {
  "cg-1": "/images/products/customised/wood-planks.png", // Wood Printing Planks
  "cg-2": "/images/products/customised/crystal-cubes.png", // Crystal Photo Cubes
  "cg-3": "/images/products/customised/acrylic-frames.png", // Acrylic Photo Frames
  "cg-4": "/images/products/customised/led-frames.png", // LED Photo Frames
  "cg-5": "/images/products/customised/personalised-frames.png", // Personalised Photo Frames
  "cg-6": "/images/products/customised/photo-wall-clocks.png", // Photo Wall Clocks
  "cg-7": "/images/products/customised/name-plates.png", // Name Plates
  "cg-8": "/images/products/customised/sublimation-products.png", // Sublimation Products
  "cg-9": "/images/products/customised/laser-wood.png", // Photo Cutouts & Caricature Cutouts
};

export const corporateProductImages = {
  "corp-1": "/images/products/customised/wood-planks.png", // Personalised Wooden Photo Planks
  "corp-2": "/images/products/corporate/exec-pen-gold.png", // Pen Engraving
  "corp-3": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop", // Water Bottle Engraving
  "corp-4": "https://images.unsplash.com/photo-1614036417651-efe5912149d8?q=80&w=800&auto=format&fit=crop", // Keychains
  "corp-5": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop", // Diaries
  "corp-6": "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop", // Diary Combos
  "corp-7": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop", // Tabletop Pen Stand Calendars
  "corp-8": "/images/products/customised/crystal-cubes.png", // Crystal Mementos
  "corp-9": "/images/products/customised/blood-art.png", // Shields & Artworks
  "corp-10": "/images/products/corporate/corporate-cup.png", // Executive Corporate Mugs
};

export const photographyOccasionImages = {
  "pocc-1": "/images/photography/occasions/birthday.png", // Birthday
  "pocc-2": "/images/photography/occasions/wedding.png", // Wedding
  "pocc-3": "/images/photography/occasions/sangeet.png", // 25th Anniversary
  "pocc-4": "/images/photography/occasions/sangeet.png", // 50th Anniversary
  "pocc-5": "/images/photography/occasions/preshoot.png", // Engagement
  "pocc-6": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", // Graduation
  "pocc-7": "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=800&auto=format&fit=crop", // Retirement
  "pocc-8": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop", // Farewell
  "pocc-9": "/images/photography/occasions/house-warming.png", // Housewarming
  "pocc-10": "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop", // Baby Shower
  "pocc-11": "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop", // Naming Ceremony
  "pocc-12": "/images/photography/occasions/saree-ceremony.png", // Half Saree Ceremony
  "pocc-13": "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", // Corporate Celebration
  "pocc-14": "/images/photography/occasions/haldi.png", // Haldi / Upanayanam
  "pocc-15": "/images/photography/occasions/wedding.png", // Any Other Occasion
};

export const studioServiceImages = {
  "std-1": "/images/products/studio/pass-visa-photos.png", // Passport Photos
  "std-2": "/images/products/studio/pass-visa-photos.png", // Visa Photos
  "std-3": "/images/products/studio/pass-visa-photos.png", // Pension Photos
  "std-4": "/images/products/studio/pass-visa-photos.png", // IT Size
  "std-5": "/images/products/studio/pass-visa-photos.png", // Stamp Size
  "std-6": "/images/products/studio/portraits.png", // Polaroid
  "std-7": "/images/products/studio/portraits.png", // Studio Portraits
  "std-8": "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop", // Xerox & Document Printouts
  "std-9": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop", // Colour Xerox
  "std-10": "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop", // Document Scan
  "std-11": "/images/products/studio/lamination.png", // Lamination
  "std-12": "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop", // Spiral Binding
  "std-13": "/images/products/studio/restoration.png", // Old Photo Restoration
  "std-14": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop", // Photo Album Designing
  "std-15": "/images/products/customised/blood-art.png", // Mementos & Shields
  "std-16": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop", // PVC Smart Card Printing
  "std-17": "/images/products/customised/wood-planks.png", // Enlargement Prints & Frames
  "std-32": "/images/logo/saikumar-wide-logo.png", // VHS to USB Conversion
  "std-33": "/images/logo/saikumar-wide-logo.png", // DVD to USB Conversion
  "vhs-conversion": "/images/logo/saikumar-wide-logo.png" // VHS / DVD Conversion
};

