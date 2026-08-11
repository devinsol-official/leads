"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Info, PhoneCall } from "lucide-react";
import { CampaignSite } from "@/data/campaigns";

interface FloatingClaimWidgetProps {
  site: CampaignSite;
  onClaimClick?: () => void;
}

export function FloatingClaimWidget({ site, onClaimClick }: FloatingClaimWidgetProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showInfoPopover, setShowInfoPopover] = useState(false);

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-none sm:max-w-sm font-sans">
      {/* Container */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-zinc-950/95 p-3.5 sm:p-4 text-white shadow-2xl shadow-blue-950/80 backdrop-blur-xl transition-all">
        {/* Top Bar / Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Image
              src="/logo.png"
              alt="Devinsol Logo"
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-blue-400 leading-none mb-0.5">
                Leads by
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-brand font-extrabold text-xs tracking-tight text-white leading-none uppercase">
                  DEVINSOL
                </span>
                <span className="rounded bg-blue-500/20 px-1 py-0.5 text-[8px] sm:text-[9px] font-bold text-blue-300">
                  100% FREE
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowInfoPopover(!showInfoPopover)}
              title="How This Free Offer Works"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
            >
              <Info className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              title={isMinimized ? "Expand Widget" : "Minimize Widget"}
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
            >
              {isMinimized ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Info Popover / How It Works Overlay */}
        {showInfoPopover && (
          <div className="mt-3 rounded-xl border border-white/10 bg-zinc-900 p-3 text-[11px] leading-relaxed text-zinc-300">
            <p className="font-semibold text-blue-300 mb-1">
              How Our Free Webpage Offer Works:
            </p>
            <p className="mb-1.5">
              1. Devinsol researches Google Maps to find businesses that lack an active website.
            </p>
            <p className="mb-1.5">
              2. We design a complete, modern webpage for your business completely free.
            </p>
            <p>
              3. When you reach out, our <strong>Devinsol representative will contact you</strong> to adjust your details and publish it live at zero cost.
            </p>
          </div>
        )}

        {/* Expanded Content */}
        {!isMinimized && (
          <div className="mt-3 flex flex-col gap-2.5 pt-2.5 border-t border-white/10">
            <div className="flex items-start justify-between text-xs">
              <div>
                <span className="text-zinc-400">Is this your business?</span>
                <p className="font-bold text-white text-xs sm:text-sm truncate max-w-[180px] sm:max-w-[220px]">
                  {site.title}
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                100% Free
              </span>
            </div>

            {/* Direct Link to /claim?id=slug */}
            <Link
              href={`/claim?id=${site.slug}`}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-blue-400/40 bg-blue-500/25 py-2.5 px-3 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-blue-500/35 hover:border-blue-400/70 active:scale-95 text-center"
            >
              <PhoneCall className="h-4 w-4 text-blue-200" />
              <span>Contact Us & Claim Free Site</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
