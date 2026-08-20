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
  // 1. Check site.htmlPath if defined
  // 2. Check src/campaign/<campaignCode>/<website-slug>/index.html or .html
  // 3. Scan country folders like (pk), (us) under src/campaign/<campaignCode>/
  const htmlDirPath = path.join(
    process.cwd(),
    "src",
    "campaign",
    campaignCode,
    slug,
    "index.html"
  );
  const htmlFilePath = path.join(
    process.cwd(),
    "src",
    "campaign",
    campaignCode,
    `${slug}.html`
  );

  let htmlContent = "";
  try {
    if (site.htmlPath) {
      const explicitPath = path.join(/*turbopackIgnore: true*/ process.cwd(), site.htmlPath);
      if (fs.existsSync(explicitPath)) {
        htmlContent = fs.readFileSync(explicitPath, "utf-8");
      }
    }

    if (!htmlContent && fs.existsSync(htmlDirPath)) {
      htmlContent = fs.readFileSync(htmlDirPath, "utf-8");
    } else if (!htmlContent && fs.existsSync(htmlFilePath)) {
      htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
    } else if (!htmlContent) {
      // Check country subdirectories like (pk), (us)
      const baseCampaignDir = path.join(process.cwd(), "src", "campaign", campaignCode);
      if (fs.existsSync(baseCampaignDir)) {
        const entries = fs.readdirSync(baseCampaignDir, { withFileTypes: true });
        for (const entry of entries) {
          if (entry.isDirectory()) {
            const subSlugDir = path.join(baseCampaignDir, entry.name, slug);
            if (fs.existsSync(subSlugDir) && fs.statSync(subSlugDir).isDirectory()) {
              const htmlFile = fs.readdirSync(subSlugDir).find((f) => f.endsWith(".html"));
              if (htmlFile) {
                htmlContent = fs.readFileSync(path.join(subSlugDir, htmlFile), "utf-8");
                break;
              }
            }
            const subSlugFile = path.join(baseCampaignDir, entry.name, `${slug}.html`);
            if (fs.existsSync(subSlugFile)) {
              htmlContent = fs.readFileSync(subSlugFile, "utf-8");
              break;
            }
          }
        }
      }
    }

    if (htmlContent) {
      // Inject base tag so relative paths (images, stylesheets, icons) resolve to /campaign/<campaignCode>/<slug>/
      const baseTag = `<base href="/campaign/${campaignCode}/${slug}/">`;
      if (htmlContent.includes("<head>")) {
        htmlContent = htmlContent.replace("<head>", `<head>\n  ${baseTag}`);
      } else if (htmlContent.includes("<head ")) {
        htmlContent = htmlContent.replace(/<head[^>]*>/, `$& \n  ${baseTag}`);
      } else {
        htmlContent = `${baseTag}\n${htmlContent}`;
      }
    }

    if (!htmlContent) {
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
