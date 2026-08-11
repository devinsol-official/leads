"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { CampaignSite } from "@/data/campaigns";
import { FloatingClaimWidget } from "@/components/FloatingClaimWidget";
import { ClaimModal } from "@/components/ClaimModal";

interface CampaignPreviewClientProps {
  site: CampaignSite;
  htmlContent: string;
}

export function CampaignPreviewClient({
  site,
  htmlContent,
}: CampaignPreviewClientProps) {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Floating Return Navigation Bar */}
      <div className="fixed top-3 left-3 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3.5 py-1.5 text-xs text-white backdrop-blur-md shadow-lg">
        <Link
          href="/explore"
          className="flex items-center gap-1.5 font-semibold text-zinc-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 text-blue-400" />
          <span>Exit Preview</span>
        </Link>
        <span className="text-zinc-600">|</span>
        <div className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
          <ShieldCheck className="h-3 w-3 text-blue-400" />
          <span>Devinsol Promo Site</span>
        </div>
      </div>

      {/* Main Campaign Site Surface (HTML preview iframe) */}
      <div className="h-screen w-full overflow-hidden pt-0">
        <iframe
          srcDoc={htmlContent}
          title={site.title}
          className="h-full w-full border-0 bg-white"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>

      {/* MANDATORY FLOATING CLAIM WIDGET */}
      <FloatingClaimWidget
        site={site}
        onClaimClick={() => setIsClaimModalOpen(true)}
      />

      {/* CLAIM LEAD MODAL */}
      <ClaimModal
        site={site}
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
      />
    </div>
  );
}
