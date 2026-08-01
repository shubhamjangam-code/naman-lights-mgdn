export const PRODUCTS = [
  // ==========================================================================
  // 1. GRAND CHANDELIERS & JHOOMERS (PLACED FIRST)
  // ==========================================================================
  {
    id: "nfl-007",
    name: "Solstice Cascade Multi-Tier Jhoomer",
    category: "chandeliers",
    price: 48500,
    priceFormatted: "₹48,500",
    tagline: "Grand 3-tier crystal spiral cascade Jhoomer.",
    description: "An awe-inspiring statement luminaire engineered for luxury villa stairwells and high-ceiling foyers. Features 3-tier optical crystal droplets that reflect warm ambient light rays.",
    image: "/images/chandelier_grand.png",
    secondaryImage: "/images/chandelier.png",
    badge: "GRAND BESTSELLER",
    rating: 5.0,
    reviewsCount: 31,
    isFeatured: true,
    specs: {
      lumens: "6,500 lm",
      cri: "> 97 CRI",
      kelvin: "2700K",
      material: "Hand-Cut K9 Prisms & Electroplated Gold Steel",
      dimming: "Smart DALI-2 & Wireless Remote",
      power: "72W",
      dimensions: "Ø 800mm × H 1400mm"
    }
  },
  {
    id: "nfl-012",
    name: "Imperial Royal Cut Crystal Jhoomer",
    category: "chandeliers",
    price: 62000,
    priceFormatted: "₹62,000",
    tagline: "Palace royal Jhoomer with 24K gold & cut crystals.",
    description: "The pinnacle of traditional Indian luxury lighting. Hand-assembled with gold-gilded metallic arms and 48 candle-style warm LED filament bulbs.",
    image: "/images/chandelier_cascade.png",
    secondaryImage: "/images/chandelier_grand.png",
    badge: "24K GOLD EDITION",
    rating: 5.0,
    reviewsCount: 45,
    isFeatured: true,
    specs: {
      lumens: "8,200 lm",
      cri: "> 96 CRI",
      kelvin: "2700K",
      material: "24K Gold Plated Brass & K9 Imperial Crystal",
      dimming: "TRIAC / Remote Wireless Dimmable",
      power: "96W",
      dimensions: "Ø 1100mm × H 1200mm"
    }
  },
  {
    id: "nfl-001",
    name: "Aura Ring Crystal Chandelier",
    category: "chandeliers",
    price: 34500,
    priceFormatted: "₹34,500",
    tagline: "Hand-cut crystal ring with dimmable warm LED.",
    description: "Designed for grand living rooms and double-height foyers. Features dual synchronized concentric rings with precision-machined brass detailing and 360-degree glare-free dispersion.",
    image: "/images/aura_ring.jpg",
    secondaryImage: "/images/chandelier.png",
    badge: "WARM LED 2700K",
    rating: 4.9,
    reviewsCount: 28,
    isFeatured: true,
    specs: {
      lumens: "4,200 lm",
      cri: "> 95 CRI",
      kelvin: "2700K",
      material: "Satin Brass & Hand-Cut K9 Crystal",
      dimming: "DALI-2 / TRIAC / 0-10V",
      power: "48W",
      dimensions: "Ø 900mm × H 280mm"
    }
  },
  {
    id: "dk-006",
    name: "Palais Versailles Grand Crystal Chandelier",
    category: "chandeliers",
    price: 68500,
    priceFormatted: "₹68,500",
    tagline: "Classic 3-tier Versailles crystal chandelier with candle-style warm LED.",
    description: "An opulent statement piece modeled after French palace heritage. Crafted with 24K gold-gilded scrollwork, multi-tier crystal bails, and high-CRI candlelight ambiance.",
    image: "/images/dk_palais_versailles.png",
    secondaryImage: "/images/chandelier_cascade.png",
    badge: "VERSAILLES HERITAGE",
    rating: 5.0,
    reviewsCount: 48,
    isFeatured: true,
    specs: {
      lumens: "8,900 lm",
      cri: "> 98 CRI",
      kelvin: "2700K",
      material: "24K Gold Plated Steel & Hand-Cut Imperial Crystal",
      dimming: "DALI-2 / Phase-Cut Dimming",
      power: "90W",
      dimensions: "Ø 1050mm × H 1150mm"
    }
  },
  {
    id: "dk-003",
    name: "Lumiere Cascade Gold Chandelier",
    category: "chandeliers",
    price: 54000,
    priceFormatted: "₹54,000",
    tagline: "Cascading hand-blown amber glass droplets on satin gold frame.",
    description: "A dramatic multi-drop luxury chandelier featuring staggered hand-blown amber glass teardrops. Designed to anchor double-height staircases and high-ceiling villas.",
    image: "/images/dk_lumiere_cascade.png",
    secondaryImage: "/images/chandelier_grand.png",
    badge: "AMBER GLASS",
    rating: 5.0,
    reviewsCount: 41,
    isFeatured: true,
    specs: {
      lumens: "6,800 lm",
      cri: "> 97 CRI",
      kelvin: "2500K - 2700K",
      material: "Hand-Blown Amber Glass & Electroplated Gold Canopy",
      dimming: "TRIAC / Smart Remote Dimmable",
      power: "75W",
      dimensions: "Ø 700mm × H 1200mm"
    }
  },
  {
    id: "dk-001",
    name: "Celestia Bloom 2-Tier Chandelier",
    category: "chandeliers",
    price: 42500,
    priceFormatted: "₹42,500",
    tagline: "Flower-inspired asymmetrical brass tier with organic glass petals.",
    description: "Sculptural double-tier chandelier featuring handcrafted satin brass arms and delicate frosted glass petals. Emits a soft, warm ambient glow ideal for luxury dining rooms and foyers.",
    image: "/images/dk_celestia_bloom.png",
    secondaryImage: "/images/chandelier.png",
    badge: "HANDCRAFTED",
    rating: 4.9,
    reviewsCount: 36,
    isFeatured: true,
    specs: {
      lumens: "5,400 lm",
      cri: "> 96 CRI",
      kelvin: "2700K",
      material: "Satin Brass & Frosted Opal Glass Petals",
      dimming: "DALI-2 / TRIAC / 0-10V",
      power: "56W",
      dimensions: "Ø 850mm × H 650mm"
    }
  },
  {
    id: "dk-004",
    name: "French Floral Brass & Crystal Chandelier",
    category: "chandeliers",
    price: 46800,
    priceFormatted: "₹46,800",
    tagline: "Vintage French brass floral arms with hand-cut K9 crystal droplets.",
    description: "Classic Parisian elegance recreated with sculpted brass leaf vines and hand-faceted K9 crystal prisms. Holds candle-style warm LED filament bulbs.",
    image: "/images/dk_french_floral.png",
    secondaryImage: "/images/chandelier_cascade.png",
    badge: "PARISIAN VINTAGE",
    rating: 4.9,
    reviewsCount: 27,
    isFeatured: false,
    specs: {
      lumens: "5,100 lm",
      cri: "> 94 CRI",
      kelvin: "2700K",
      material: "Antique Gilded Brass & K9 Crystal Prisms",
      dimming: "Wall Phase Dimmer Compatible",
      power: "52W (6 × E14 Filament)",
      dimensions: "Ø 780mm × H 580mm"
    }
  },
  {
    id: "dk-005",
    name: "Elysian Wave Amber Glass Chandelier",
    category: "chandeliers",
    price: 39500,
    priceFormatted: "₹39,500",
    tagline: "Curved golden wave structure with ribbed amber glass globes.",
    description: "Fluid organic ribbon frame crafted in warm brushed gold, carrying ribbed amber glass spheres. Provides balanced, anti-glare illumination across long dining setups.",
    image: "/images/dk_elysian_wave.png",
    secondaryImage: "/images/pendant.png",
    badge: "ORGANIC WAVE",
    rating: 4.8,
    reviewsCount: 22,
    isFeatured: false,
    specs: {
      lumens: "4,200 lm",
      cri: "> 93 CRI",
      kelvin: "2700K",
      material: "Brushed Gold Alloy & Ribbed Amber Glass",
      dimming: "TRIAC Dimmable",
      power: "42W",
      dimensions: "L 1100mm × W 450mm × H 380mm"
    }
  },
  {
    id: "dk-002",
    name: "Stellar Spoke Sculptural LED Chandelier",
    category: "chandeliers",
    price: 38900,
    priceFormatted: "₹38,900",
    tagline: "Radial matte-black metal rods with glowing LED spoke diffusers.",
    description: "An architectural starburst luminaire. Engineered with industrial matte-black steel spokes and high-CRI linear diffusers that illuminate large living areas without glare.",
    image: "/images/dk_stellar_spoke.png",
    secondaryImage: "/images/chandelier.png",
    badge: "STARBURST LED",
    rating: 4.8,
    reviewsCount: 29,
    isFeatured: true,
    specs: {
      lumens: "4,600 lm",
      cri: "> 95 CRI",
      kelvin: "3000K",
      material: "Matte Black Steel & Optical Acrylic Diffusers",
      dimming: "Phase-Cut Dimmable",
      power: "48W",
      dimensions: "Ø 950mm × H 420mm"
    }
  },

  // ==========================================================================
  // 2. PENDANT LIGHTS
  // ==========================================================================
  {
    id: "nfl-002",
    name: "Monolith Cylinder Pendant",
    category: "pendants",
    price: 12800,
    priceFormatted: "₹12,800",
    tagline: "Anti-glare aluminum pendant for dining & bar.",
    description: "Minimalist suspended luminaire engineered with anti-glare honeycomb baffle technology. Provides focused, high-CRI downward lighting without visual fatigue.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "/images/pendant.png",
    badge: "ANTI-GLARE",
    rating: 4.8,
    reviewsCount: 34,
    isFeatured: true,
    specs: {
      lumens: "1,450 lm",
      cri: "> 97 CRI",
      kelvin: "3000K",
      material: "Matte Black Anodized Aluminum",
      dimming: "Phase-Cut Dimmable",
      power: "15W",
      dimensions: "Ø 60mm × H 450mm"
    }
  },
  {
    id: "nfl-006",
    name: "Lumina Linear Suspension Bar",
    category: "pendants",
    price: 29800,
    priceFormatted: "₹29,800",
    tagline: "Slim linear aluminum pendant for dining tables.",
    description: "Continuous flicker-free linear optical diffuse strip with aircraft wire suspension. Features ultra-slim 25mm profile.",
    image: "/images/pendant.png",
    secondaryImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    badge: "LINEAR SUSPENSION",
    rating: 4.9,
    reviewsCount: 21,
    isFeatured: false,
    specs: {
      lumens: "3,600 lm",
      cri: "> 95 CRI",
      kelvin: "3000K",
      material: "Anodized Dark Gray Aluminum",
      dimming: "0-10V / Push Dimming",
      power: "36W",
      dimensions: "L 1500mm × W 25mm × H 60mm"
    }
  },
  {
    id: "nfl-008",
    name: "Eclipse Halo Amber Ring Pendant",
    category: "pendants",
    price: 18900,
    priceFormatted: "₹18,900",
    tagline: "Floating amber halo ring with warm COB LED.",
    description: "Creates a weightless floating halo effect over living room coffee tables and master bedrooms. Uses seamless COB LED strip wrapped in champagne tinted acrylic.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "/images/real_globe_orb.jpg",
    badge: "FLOATING HALO",
    rating: 4.8,
    reviewsCount: 17,
    isFeatured: false,
    specs: {
      lumens: "2,400 lm",
      cri: "> 95 CRI",
      kelvin: "2700K",
      material: "Acrylic Diffuser & Brushed Aluminum Frame",
      dimming: "TRIAC Phase Dimming",
      power: "28W",
      dimensions: "Ø 600mm × Ring Depth 35mm"
    }
  },
  {
    id: "nfl-013",
    name: "Celestial Sphere Glass Globe Pendant",
    category: "pendants",
    price: 14500,
    priceFormatted: "₹14,500",
    tagline: "Hand-blown smoked glass orb with warm filament.",
    description: "Suspends a glowing stellar orb in dining rooms and luxury bedrooms. Diffuses light through tinted smoky glass with ZERO direct glare.",
    image: "/images/real_globe_orb.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
    badge: "SMOKED ORB",
    rating: 4.7,
    reviewsCount: 19,
    isFeatured: false,
    specs: {
      lumens: "1,200 lm",
      cri: "> 93 CRI",
      kelvin: "2500K",
      material: "Hand-Blown Smoked Glass & Satin Brass Accent",
      dimming: "Phase Dimmable",
      power: "12W LED G125 Filament",
      dimensions: "Ø 350mm Glass Sphere × H 380mm"
    }
  },

  // ==========================================================================
  // 3. WALL SCONCES
  // ==========================================================================
  {
    id: "nfl-003",
    name: "Vortex Geometric Wall Sconce",
    category: "sconces",
    price: 9600,
    priceFormatted: "₹9,600",
    tagline: "Indirect dual-emission brushed brass wall sconce.",
    description: "Casts delicate geometric light washes upward and downward along vertical wall textures. Perfect for accent walls, corridors, and bedside luxury suites.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "/images/sconce_brass.png",
    badge: "SOLID BRASS",
    rating: 4.9,
    reviewsCount: 19,
    isFeatured: true,
    specs: {
      lumens: "1,100 lm",
      cri: "> 92 CRI",
      kelvin: "2700K",
      material: "Hand-Brushed Solid Brass",
      dimming: "Standard Phase Dimmer Compatible",
      power: "12W Dual Emission",
      dimensions: "W 140mm × H 320mm × D 90mm"
    }
  },
  {
    id: "nfl-009",
    name: "Vertical Fluted Brass Wall Luminaire",
    category: "sconces",
    price: 11200,
    priceFormatted: "₹11,200",
    tagline: "Fluted borosilicate glass with solid brass mount.",
    description: "Casts delicate vertical fluted ray patterns across interior walls. Ideal for home theaters, vanity mirrors, and luxury hallway galleries.",
    image: "/images/sconce_brass.png",
    secondaryImage: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=80",
    badge: "FLUTED GLASS",
    rating: 4.9,
    reviewsCount: 25,
    isFeatured: false,
    specs: {
      lumens: "1,350 lm",
      cri: "> 94 CRI",
      kelvin: "3000K",
      material: "Fluted Borosilicate Glass & Solid Brass",
      dimming: "Standard Wall Dimmer",
      power: "14W",
      dimensions: "W 100mm × H 480mm × D 110mm"
    }
  },
  {
    id: "nfl-014",
    name: "Zenith Dual-Beam Facade Wall Light",
    category: "sconces",
    price: 8900,
    priceFormatted: "₹8,900",
    tagline: "IP65 weatherproof outdoor wall wash luminaire.",
    description: "Casts precise 30-degree sharp light cones up and down exterior stone walls. Die-cast aluminum housing coated in rust-proof charcoal powder coat.",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "/images/sconce_brass.png",
    badge: "IP65 OUTDOOR",
    rating: 4.9,
    reviewsCount: 22,
    isFeatured: false,
    specs: {
      lumens: "1,600 lm",
      cri: "> 90 CRI",
      kelvin: "3000K",
      material: "Die-Cast Aluminum IP65 Sealed Enclosure",
      dimming: "Non-Dimmable / Dusk-to-Dawn Sensor Ready",
      power: "16W Dual Beam",
      dimensions: "W 120mm × H 260mm × D 90mm"
    }
  },

  // ==========================================================================
  // 4. TRACK ARCHITECTURE
  // ==========================================================================
  {
    id: "nfl-004",
    name: "Magna Magnetic Track Lighting System",
    category: "track",
    price: 24900,
    priceFormatted: "₹24,900",
    tagline: "Modular 48V magnetic track with adjustable spots.",
    description: "The ultimate flexible lighting system for gallery-grade residential and commercial interiors. Features click-and-lock magnetic positioning with 48V DC safe busbar.",
    image: "/images/track_magnetic.png",
    secondaryImage: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1000&q=80",
    badge: "48V MAGNETIC",
    rating: 5.0,
    reviewsCount: 42,
    isFeatured: true,
    specs: {
      lumens: "3,800 lm",
      cri: "> 95 CRI",
      kelvin: "2700K - 4000K",
      material: "Extruded Black Aluminum Track Rail",
      dimming: "Smart Zigbee / DALI / App Controlled",
      power: "48V Low Voltage DC",
      dimensions: "2000mm Track Rail + Spot Modules"
    }
  },
  {
    id: "nfl-011",
    name: "Smart COB Magnetic Spot & Profile Track",
    category: "track",
    price: 31500,
    priceFormatted: "₹31,500",
    tagline: "Flush magnetic ceiling track with COB spotlights.",
    description: "Engineered for flush drywall ceiling integration. Allows snap-in placement of floodlights, wall washers, and narrow beam accent projectors.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1000&q=80",
    secondaryImage: "/images/track_magnetic.png",
    badge: "SMART COB",
    rating: 5.0,
    reviewsCount: 39,
    isFeatured: false,
    specs: {
      lumens: "4,800 lm",
      cri: "> 98 CRI",
      kelvin: "2700K - 5000K",
      material: "Matte Black Recessed Aluminum Track",
      dimming: "Tuya Smart / Casambi / DALI",
      power: "48V Safe DC Busbar",
      dimensions: "3000mm Track Rail + 5 Spot Modules"
    }
  },

  // ==========================================================================
  // 5. TABLE & SCULPTURES
  // ==========================================================================
  {
    id: "nfl-015",
    name: "Aethelgard Sculptural Brass Desk Lamp",
    category: "table",
    price: 18500,
    priceFormatted: "₹18,500",
    tagline: "Hand-brushed solid brass lamp with touch dimmer.",
    description: "An architectural icon for executive writing desks and luxury bedside suites. Features a weighted solid brass base with silent 3-stage touch sensor and glare-free warm beam.",
    image: "/images/table_brass_real.jpg",
    secondaryImage: "/images/nordic_tripod_lamp.png",
    badge: "TOUCH DIMMER",
    rating: 4.9,
    reviewsCount: 31,
    isFeatured: true,
    specs: {
      lumens: "950 lm",
      cri: "> 96 CRI",
      kelvin: "2700K",
      material: "Hand-Brushed Solid Brass & Anodized Bronze",
      dimming: "Integrated 3-Step Touch Dimmer",
      power: "10W LED Module",
      dimensions: "Base Ø 180mm × H 420mm"
    }
  },
  {
    id: "nfl-017",
    name: "Nordic Timber Tripod Table Lamp",
    category: "table",
    price: 13800,
    priceFormatted: "₹13,800",
    tagline: "Solid ash wood tripod with natural linen shade.",
    description: "A timeless Scandinavian table luminaire bringing warm, relaxing ambient lighting to bedside tables, reading nooks, and cozy living room sideboards.",
    image: "/images/nordic_tripod_lamp.png",
    secondaryImage: "/images/table_brass_real.jpg",
    badge: "ASH WOOD",
    rating: 4.8,
    reviewsCount: 19,
    isFeatured: true,
    specs: {
      lumens: "850 lm",
      cri: "> 93 CRI",
      kelvin: "2700K",
      material: "Solid Ash Wood & Natural Linen Fabric",
      dimming: "In-line Cord Dimmer",
      power: "8W E27 LED",
      dimensions: "Ø 280mm Shade × H 480mm"
    }
  },
  {
    id: "nfl-005",
    name: "Obsidian Marble Sculptural Table Lamp",
    category: "table",
    price: 16400,
    priceFormatted: "₹16,400",
    tagline: "Nero Marquina marble base with smoked opal globe.",
    description: "A tactile architectural sculpture that transforms evening atmosphere. Integrates touch-capacitive 4-stage dimming on the brass base stem.",
    image: "/images/table_marble.png",
    secondaryImage: "/images/globe_table_lamp_real.jpg",
    badge: "NERO MARBLE",
    rating: 4.7,
    reviewsCount: 16,
    isFeatured: false,
    specs: {
      lumens: "850 lm",
      cri: "> 90 CRI",
      kelvin: "2200K - 2700K",
      material: "Natural Spanish Black Marble & Opal Glass",
      dimming: "Integrated Touch Capacitive Dimmer",
      power: "8W LED G9 Capsule",
      dimensions: "Ø 220mm Base × H 380mm"
    }
  },
  {
    id: "nfl-016",
    name: "Kinetic Terrazzo & Opal Globe Table Lamp",
    category: "table",
    price: 15200,
    priceFormatted: "₹15,200",
    tagline: "Italian terrazzo base with frosted opal sphere.",
    description: "Casts a warm, inviting 360-degree ambient halo. Perfect for side tables, hotel lounge credenzas, and contemporary living space accent lighting.",
    image: "/images/globe_table_lamp_real.jpg",
    secondaryImage: "/images/table_marble.png",
    badge: "ITALIAN TERRAZZO",
    rating: 4.8,
    reviewsCount: 24,
    isFeatured: false,
    specs: {
      lumens: "880 lm",
      cri: "> 94 CRI",
      kelvin: "2400K",
      material: "White Terrazzo & Triplex Opal Glass",
      dimming: "In-line Cord Rotary Dimmer",
      power: "9W G9 LED Capsule",
      dimensions: "Ø 200mm Base × H 310mm"
    }
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Collection" },
  { id: "chandeliers", label: "Grand Chandeliers (Jhoomer)" },
  { id: "pendants", label: "Pendant Lights" },
  { id: "sconces", label: "Wall Sconces" },
  { id: "track", label: "Track Architecture" },
  { id: "table", label: "Table & Sculptures" }
];
