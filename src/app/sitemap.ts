import { MetadataRoute } from "next";
import { CAMPAIGNS_DATA } from "@/data/campaigns";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leads.devinsol.com";
  const currentDate = new Date();

  // Core static marketing and legal pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic campaign website pages
  const campaignPages: MetadataRoute.Sitemap = CAMPAIGNS_DATA.map((site) => ({
    url: `${baseUrl}/campaign/${site.campaignCode}/${site.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...campaignPages];
}
