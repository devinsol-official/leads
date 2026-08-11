"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrbitVisual } from "@/components/OrbitVisual";
import { CAMPAIGNS_DATA } from "@/data/campaigns";
import {
  Compass,
  Sparkles,
  Play,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Gift,
  UserCheck,
  Clock,
  Layout,
  PlusCircle,
} from "lucide-react";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const featuredSites = CAMPAIGNS_DATA.filter((s) => s.featured);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Shared Header */}
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
          {/* Background Ambient Glows */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[350px] sm:h-[500px] w-[95%] sm:w-[800px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Hero Copy */}
              <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Offer Pill */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[9px] xs:text-[10.5px] sm:text-xs font-semibold text-blue-300 backdrop-blur-md shadow-sm mb-5 max-w-full overflow-hidden">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-400 shrink-0" />
                  <span className="whitespace-nowrap tracking-tight sm:tracking-normal">Custom Web Design Offer - 100% Free for Businesses</span>
                </div>

                {/* Primary Headline */}
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1]">
                  Get a Custom Website <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                    For Your Business. 100% Free.
                  </span>
                </h1>

                {/* Supporting Copy */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                  Devinsol builds high-performance custom websites for businesses completely free. Search our directory to see if your site is ready, or submit your business to get a free website built within days.
                </p>

                {/* Hero CTAs (Stack on mobile, row on tablet+) */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                  <Link
                    href="/explore"
                    className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl border border-blue-400/40 bg-blue-500/20 px-6 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:bg-blue-500/30 hover:border-blue-400/70 active:scale-95 text-center"
                  >
                    <Compass className="h-5 w-5 text-blue-200 transition-transform group-hover:rotate-45" />
                    <span>Browse Directory Sites</span>
                    <ArrowRight className="h-4 w-4 text-blue-200 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/request"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95 text-center"
                  >
                    <PlusCircle className="h-5 w-5 text-blue-400" />
                    <span>Request Free Website</span>
                  </Link>
                </div>

                {/* Trust Points */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-6 text-xs text-zinc-400 pt-5 sm:pt-6 border-t border-white/10 w-full">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>100% Free Design & Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Built in 3 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Dedicated Representative</span>
                  </div>
                </div>
              </div>

              {/* Hero Orbit Protection Animation */}
              <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
                <OrbitVisual />
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / THREE STEP PROCESS */}
        <section id="how-it-works" className="py-16 sm:py-20 border-t border-white/10 bg-zinc-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Simple & Transparent Process
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                How To Get Your Free Website
              </h2>
              <p className="mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether your site is already in our directory or you are submitting a new request, getting your free custom webpage is quick and effortless:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-extrabold text-xl mb-6">
                  1
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                  <Compass className="h-3.5 w-3.5" />
                  <span>Discover or Request</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Find or Submit Business</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Search our directory to see if your site is already pre-designed, or submit your business details to request a free custom website.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-extrabold text-xl mb-6">
                  2
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Fast Turnaround</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free 3-Day Build</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Our Devinsol design team crafts your custom website for free and adds it to the public directory for you to review anytime.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-xl mb-6">
                  3
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Agent Setup</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Representative Launch</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Reach out to claim your site! A Devinsol representative will assist with custom text, logo updates, and live launch - 100% free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY DEVINSOL / USER BENEFITS SECTION */}
        <section id="benefits" className="relative py-16 sm:py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Video Player */}
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-2 shadow-2xl shadow-blue-500/10">
                  <div className="relative h-[280px] sm:h-[380px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950 flex items-center justify-center">
                    {!isVideoPlaying ? (
                      <div className="relative flex flex-col items-center text-center p-6 z-10">
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/25 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-blue-500/40 mb-4"
                        >
                          <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-white ml-1" />
                          <span className="absolute -inset-2 rounded-full border border-blue-400/40 animate-ping" />
                        </button>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                          Watch How Free Websites Work
                        </h3>
                        <p className="text-xs text-zinc-400 max-w-xs">
                          See how business owners request, review, and launch their free websites with Devinsol.
                        </p>
                      </div>
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center p-6 sm:p-8 bg-zinc-900 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/40 mb-3">
                          <Play className="h-6 w-6 text-blue-400" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                          Playing Offer Walkthrough
                        </h4>
                        <p className="text-xs text-zinc-400 max-w-sm mb-4">
                          [Video Walkthrough - Demonstrating Website Requests, Directory Previews, & Representative Consultation]
                        </p>
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/20"
                        >
                          Close Preview
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* User Benefit Pillars */}
              <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    Why Choose Devinsol
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                    What You Get With Your Free Website
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 sm:p-5 backdrop-blur-md flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <Layout className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Modern & Responsive Design</h3>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      Custom, high-speed website built for desktop and mobile screens to attract customers and build digital authority.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 sm:p-5 backdrop-blur-md flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Gift className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">100% Free - No Credit Card Needed</h3>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      Zero design fees, zero trial periods, and no hidden subscriptions. Devinsol provides the initial design & setup completely free.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 sm:p-5 backdrop-blur-md flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Personal Agent Support</h3>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      A dedicated Devinsol representative works with you to answer questions, adjust logos and content, and handle deployment seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROMO SITES SHOWCASE */}
        <section className="py-16 sm:py-20 border-t border-white/10 bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  Directory Previews
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Featured Web Pages
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/request"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white"
                >
                  <PlusCircle className="h-4 w-4 text-blue-400" />
                  <span>Request Custom Site</span>
                </Link>
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Browse All Directory Sites</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Featured Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredSites.map((site) => (
                <div
                  key={site.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition-all hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={site.thumbnailUrl}
                      alt={site.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-md bg-zinc-950/80 px-2.5 py-1 text-[10px] font-semibold text-blue-300 backdrop-blur-md border border-white/10">
                      {site.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {site.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {site.tagline}
                    </p>

                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5 text-xs">
                      <Link
                        href={`/campaign/${site.campaignCode}/${site.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-zinc-300 hover:text-white"
                      >
                        <span>Full Preview</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>

                      <Link
                        href={`/claim?id=${site.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-blue-400/40 bg-blue-500/20 px-3.5 py-2 font-semibold text-white backdrop-blur-md transition-all hover:bg-blue-500/30 hover:border-blue-400/60"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Claim Free</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
