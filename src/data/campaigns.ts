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
  }
];

