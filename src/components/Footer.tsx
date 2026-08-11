"use client";

import Link from "next/link";
import Image from "next/image";
import { Compass, Lock, FileText } from "lucide-react";
import { CAMPAIGN_CATEGORIES } from "@/data/campaigns";

export function Footer() {
  const footerCategories = CAMPAIGN_CATEGORIES.filter((c) => c !== "All").slice(0, 3);

  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a
              href="https://www.devinsol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 group w-fit"
            >
              <Image
                src="/logo.png"
                alt="Devinsol Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400 leading-none mb-0.5">
                  Leads by
                </span>
                <span className="font-brand font-extrabold tracking-tight text-white text-xl leading-none group-hover:text-blue-400 transition-colors">
                  DEVINSOL
                </span>
              </div>
            </a>
            <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
              Empowering growing businesses with custom websites - crafted 100% for free by{" "}
              <a
                href="https://www.devinsol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 underline font-semibold transition-colors"
              >
                Devinsol
              </a>{" "}
              to build digital presence and accelerate growth.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>Crafted for business owners & founders worldwide.</span>
            </div>
          </div>

          {/* Directory Category Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Directory Categories
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/explore"
                  className="flex items-center gap-1.5 font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Compass className="h-3.5 w-3.5" />
                  <span>Browse All Websites</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/request"
                  className="transition-colors hover:text-white"
                >
                  Request Free Custom Site
                </Link>
              </li>
              {footerCategories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/explore?category=${encodeURIComponent(category)}`}
                    className="transition-colors hover:text-white"
                  >
                    {category} Webpages
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Terms Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Legal & Service Disclaimers
            </h4>
            <p className="text-xs leading-relaxed text-zinc-500">
              Websites listed in Devinsol Explore are promotional concepts created as part of a free web design initiative. Devinsol is not affiliated with listed third-party businesses unless claimed. Submitting a request creates no binding contract. Devinsol reserves full right to decline or ignore any request.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium pt-1">
              <Link
                href="/terms"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Terms of Service & Disclaimer</span>
              </Link>
              <Link
                href="/privacy"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Lock className="h-3.5 w-3.5" />
                <span>Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.devinsol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline font-semibold transition-colors"
            >
              Devinsol
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.devinsol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              www.devinsol.com
            </a>
            <span>•</span>
            <Link href="/terms" className="hover:text-zinc-400">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-zinc-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
