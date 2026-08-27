export interface CampaignSite {
  id: string;
  title: string;
  slug: string;
  campaignCode: string;
  country?: {
    code: string;
    name: string;
    flag: string;
    flagUrl?: string;
  };
  category: string;
  tagline: string;
  description: string;
  thumbnailUrl: string;
  claimed: boolean;
  featured: boolean;
  htmlPath: string;
  tags: string[];
  metrics: {
    views: number;
    previewCount: number;
  };
}

export const CAMPAIGN_CATEGORIES = [
  "All",
  "AI & SaaS",
  "Fintech",
  "Health & Wellness",
  "Logistics & Ops",
  "Design & Creative",
  "CleanTech",
  "Food & Restaurant",
] as const;

export const CAMPAIGNS_DATA: CampaignSite[] = [
  {
    id: "a1-mobile-auto",
    title: "A-1 Mobile Brake & Auto Service",
    slug: "a1-mobile-brake-and-auto-service",
    campaignCode: "2026",
    country: {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
      flagUrl: "https://flagcdn.com/w40/us.png",
    },
    category: "Logistics & Ops",
    tagline: "Mobile Brake Repair & Auto Mechanic Houston TX",
    description: "Need car repair in Houston, TX? A-1 Mobile Brake & Auto Service brings certified mechanics to your home or office. Get an instant quote today!",
    thumbnailUrl: "/thumbnails/a1-mobile-auto.png",
    claimed: false,
    featured: true,
    htmlPath: "src/campaign/2026/(us)/a1-mobile-brake-and-auto-service/index.html",
    tags: ["Auto Repair", "Mobile Mechanic", "Houston"],
    metrics: {
      views: 0,
      previewCount: 0,
    }
  },
  {
    id: "seven-guys",
    title: "Seven Guys",
    slug: "seven-guys-website",
    campaignCode: "2026",
    country: {
      code: "PK",
      name: "Pakistan",
      flag: "🇵🇰",
      flagUrl: "https://flagcdn.com/w40/pk.png",
    },
    category: "Food & Restaurant",
    tagline: "Burgers, Detroit Pizzas & Sides in Gujranwala",
    description: "OPEN DAILY 2:00 PM – 2:00 AM on Sialkot Road, Gujranwala. Order our Signature Detroit Pizzas and Burgers today!",
    thumbnailUrl: "/thumbnails/seven-guys.png",
    claimed: false,
    featured: true,
    htmlPath: "src/campaign/2026/(pk)/seven-guys-website/index.html",
    tags: ["Restaurant", "Pizza", "Burgers"],
    metrics: {
      views: 0,
      previewCount: 0,
    }
  },
  {
    id: "wingos",
    title: "Wingo's",
    slug: "wingos",
    campaignCode: "2026",
    country: {
      code: "PK",
      name: "Pakistan",
      flag: "🇵🇰",
      flagUrl: "https://flagcdn.com/w40/pk.png",
    },
    category: "Food & Restaurant",
    tagline: "Gujranwala's Craziest Crunch & Ultimate Flavor",
    description: "From our legendary House of Wings to the towering Jumbo Zap Burger — built loaded, fired hot, devoured fast in Gujranwala.",
    thumbnailUrl: "/thumbnails/wingos.png",
    claimed: false,
    featured: true,
    htmlPath: "src/campaign/2026/(pk)/wingos/index.html",
    tags: ["Fast Food", "Wings", "Burgers", "Gujranwala"],
    metrics: {
      views: 0,
      previewCount: 0,
    }
  },
  {
    id: "royal-furniture-interiors",
    title: "Royal Furniture & Interiors",
    slug: "royal-furniture-interiors",
    campaignCode: "2026",
    country: {
      code: "PK",
      name: "Pakistan",
      flag: "🇵🇰",
      flagUrl: "https://flagcdn.com/w40/pk.png",
    },
    category: "Design & Creative",
    tagline: "Designs Beyond Imagination! Luxury Handcrafted Furniture",
    description: "A well planned home always needs well designed furniture. Handcrafted luxury solid teak and walnut beds, bespoke fluted sofas, and turnkey interior design in Gujranwala.",
    thumbnailUrl: "/thumbnails/royal-furniture-interiors.png",
    claimed: false,
    featured: true,
    htmlPath: "src/campaign/2026/(pk)/royal-furniture-interiors/index.html",
    tags: ["Luxury Furniture", "Interior Design", "Bespoke Beds", "Gujranwala"],
    metrics: {
      views: 0,
      previewCount: 0,
    }
  }
];

