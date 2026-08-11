"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Compass, Sparkles, ExternalLink, ShieldCheck, Tag, Filter, PlusCircle } from "lucide-react";
import { CAMPAIGN_CATEGORIES, CAMPAIGNS_DATA } from "@/data/campaigns";

function DirectoryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    if (categoryParam) {
      const matchedCat = CAMPAIGN_CATEGORIES.find(
        (cat) => cat.toLowerCase() === categoryParam.toLowerCase()
      );
      if (matchedCat) {
        setSelectedCategory(matchedCat);
      }
    }
  }, [categoryParam]);

  const filteredSites = useMemo(() => {
    return CAMPAIGNS_DATA.filter((site) => {
      const matchesSearch =
        site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || site.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 font-sans">
      {/* Top Request Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/60 via-zinc-900 to-zinc-950 p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400">
            <PlusCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base">Don't see your business listed?</h3>
            <p className="text-xs text-zinc-300">
              Submit your business details & Google Maps link to get a custom website built for free in 3 days!
            </p>
          </div>
        </div>
        <Link
          href="/request"
          className="shrink-0 text-center rounded-xl border border-blue-400/40 bg-blue-500/20 px-4 py-3 sm:py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-blue-500/30 hover:border-blue-400/70 active:scale-95"
        >
          Request Free Website
        </Link>
      </div>

      {/* Search Bar & Category Controls Header */}
      <div className="flex flex-col gap-4 sm:gap-6 rounded-2xl border border-white/10 bg-zinc-900/60 p-4 sm:p-6 backdrop-blur-md">
        {/* Large Prominent Search Bar */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-blue-400" />
          </div>
          <input
            type="text"
            placeholder="Search by business name, category, or industry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-zinc-950/80 py-3.5 sm:py-4 pl-12 pr-12 text-base text-white placeholder-zinc-500 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-semibold text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filters (Touch-scrollable on mobile) */}
        <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
            <Filter className="h-3.5 w-3.5 text-blue-400" />
            <span>Category Filter:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {CAMPAIGN_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-xl px-3.5 py-2 sm:py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? "border border-blue-400/50 bg-blue-500/30 text-white backdrop-blur-md"
                      : "bg-white/5 text-zinc-400 border border-transparent hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="h-5 w-5 text-blue-400" />
          <h2 className="text-base sm:text-lg font-bold text-white">
            Available Promotional Websites
          </h2>
          <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400 border border-blue-500/20">
            {filteredSites.length} Ready
          </span>
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredSites.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSites.map((site) => (
            <div
              key={site.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Card Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                <img
                  src={site.thumbnailUrl}
                  alt={site.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-md bg-zinc-950/80 px-2.5 py-1 text-[10px] font-semibold text-blue-300 backdrop-blur-md border border-white/10">
                    {site.category}
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-emerald-950/80 px-2 py-1 text-[10px] font-semibold text-emerald-400 backdrop-blur-md border border-emerald-500/30">
                    <ShieldCheck className="h-3 w-3" />
                    <span>100% Free Offer</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {site.title}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {site.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {site.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[10px] text-zinc-500"
                    >
                      <Tag className="h-2.5 w-2.5 text-zinc-600" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/5">
                  <Link
                    href={`/campaign/${site.campaignCode}/${site.slug}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <span>Preview Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href={`/claim?id=${site.slug}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-blue-400/40 bg-blue-500/20 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-blue-500/30 hover:border-blue-400/60"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Claim Free</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-zinc-900/30 py-12 sm:py-16 px-4 text-center">
          <Search className="h-10 w-10 text-blue-400/80 mb-3" />
          <h3 className="text-lg font-bold text-white">No pre-built web pages listed yet</h3>
          <p className="text-sm text-zinc-400 max-w-md mt-1 mb-5 leading-relaxed">
            Don't see your business here? Submit your Google Maps business link and details to get a custom website built by Devinsol 100% free within 3 days!
          </p>
          <Link
            href="/request"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/25 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-blue-500/35 hover:border-blue-400/70 active:scale-95"
          >
            <PlusCircle className="h-4 w-4 text-blue-300" />
            <span>Request Your Free Custom Website</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export function ExploreDirectory() {
  return (
    <Suspense fallback={
      <div className="flex min-h-[300px] items-center justify-center text-sm text-zinc-400">
        Loading directory categories...
      </div>
    }>
      <DirectoryContent />
    </Suspense>
  );
}
