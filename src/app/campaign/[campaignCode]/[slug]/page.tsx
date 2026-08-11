import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { CAMPAIGNS_DATA } from "@/data/campaigns";
import { CampaignPreviewClient } from "./CampaignPreviewClient";

interface CampaignPageProps {
  params: Promise<{
    campaignCode: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CampaignPageProps) {
  const { campaignCode, slug } = await params;
  const site = CAMPAIGNS_DATA.find(
    (s) => s.campaignCode === campaignCode && s.slug === slug
  );

  if (!site) {
    return {
      title: "Campaign Site Not Found - Devinsol",
    };
  }

  return {
    title: `${site.title} - Promotional Preview | Devinsol`,
    description: site.description,
  };
}

export default async function CampaignPage({ params }: CampaignPageProps) {
  const { campaignCode, slug } = await params;

  // Find site metadata
  const site = CAMPAIGNS_DATA.find(
    (s) => s.campaignCode === campaignCode && s.slug === slug
  );

  if (!site) {
    notFound();
  }

  // Read campaign HTML source of truth from filesystem:
  // src/campaign/<campaignCode>/<website-slug>.html
  const htmlFilePath = path.join(
    process.cwd(),
    "src",
    "campaign",
    campaignCode,
    `${slug}.html`
  );

  let htmlContent = "";
  try {
    if (fs.existsSync(htmlFilePath)) {
      htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
    } else {
      // Fallback content if specific HTML file doesn't exist on disk yet
      htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${site.title}</title>
          <style>
            body { background: #090a0f; color: #fff; font-family: system-ui, sans-serif; text-align: center; padding: 5rem 1rem; }
            h1 { font-size: 2.5rem; margin-bottom: 1rem; }
            p { color: #888; max-width: 600px; margin: 0 auto 2rem; }
          </style>
        </head>
        <body>
          <h1>${site.title}</h1>
          <p>${site.description}</p>
        </body>
        </html>
      `;
    }
  } catch (err) {
    console.error("Error reading campaign HTML file:", err);
    notFound();
  }

  return <CampaignPreviewClient site={site} htmlContent={htmlContent} />;
}
