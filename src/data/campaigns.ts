export interface CampaignSite {
  id: string;
  title: string;
  slug: string;
  campaignCode: string;
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
    category: "Logistics & Ops",
    tagline: "Mobile Brake Repair & Auto Mechanic Houston TX",
    description: "Need car repair in Houston, TX? A-1 Mobile Brake & Auto Service brings certified mechanics to your home or office. Get an instant quote today!",
    thumbnailUrl: "/thumbnails/a1-mobile-auto.png",
    claimed: false,
    featured: true,
    htmlPath: "src/campaign/2026/a1-mobile-brake-and-auto-service/index.html",
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
    category: "Food & Restaurant",
    tagline: "Burgers, Detroit Pizzas & Sides in Gujranwala",
    description: "OPEN DAILY 2:00 PM – 2:00 AM on Sialkot Road, Gujranwala. Order our Signature Detroit Pizzas and Burgers today!",
    thumbnailUrl: "/thumbnails/seven-guys.png",
    claimed: false,
    featured: true,
    htmlPath: "src/campaign/2026/seven-guys-website/seven-guys.html",
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
    category: "Food & Restaurant",
    tagline: "Gujranwala's Craziest Crunch & Ultimate Flavor",
    description: "From our legendary House of Wings to the towering Jumbo Zap Burger — built loaded, fired hot, devoured fast in Gujranwala.",
    thumbnailUrl: "/thumbnails/wingos.png",
    claimed: false,
    featured: true,
    htmlPath: "src/campaign/2026/wingos/index.html",
    tags: ["Fast Food", "Wings", "Burgers", "Gujranwala"],
    metrics: {
      views: 0,
      previewCount: 0,
    }
  }
];

