import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/explore",
          "/campaign/",
          "/terms",
          "/privacy",
        ],
        disallow: [
          "/api/",
          "/api/*",
          "/claim",
          "/claim/*",
          "/request",
          "/request/*",
        ],
      },
    ],
    sitemap: "https://leads.devinsol.com/sitemap.xml",
    host: "https://leads.devinsol.com",
  };
}
