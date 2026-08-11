"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, PlusCircle, Menu, X } from "lucide-react";

interface HeaderProps {
  onRequestClick?: () => void;
}

export function Header({ onRequestClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur-md transition-all font-sans">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 sm:gap-2.5 transition-transform hover:scale-[1.01]"
        >
          <Image
            src="/logo.png"
            alt="Devinsol Logo"
            width={34}
            height={34}
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-blue-400 leading-none mb-0.5">
              Leads by
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-brand font-extrabold tracking-tight text-white text-lg sm:text-xl leading-none">
                DEVINSOL
              </span>
              <span className="hidden xs:inline-block rounded-md bg-blue-500/10 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-blue-400 border border-blue-500/20">
                100% FREE
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation & Actions */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            href="/explore"
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            <Compass className="h-4 w-4 text-blue-400" />
            <span>Browse Directory</span>
          </Link>

          <Link
            href="/request"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-blue-400/40 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-blue-500/30 hover:border-blue-400/70 active:scale-95"
          >
            <PlusCircle className="h-4 w-4 text-blue-300 transition-transform group-hover:rotate-90" />
            <span>Request Free Website</span>
          </Link>
        </nav>

        {/* Mobile Hamburger Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/request"
            className="inline-flex items-center gap-1 rounded-full border border-blue-400/40 bg-blue-500/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
          >
            <PlusCircle className="h-3.5 w-3.5 text-blue-300" />
            <span>Free Site</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950 px-4 py-4 space-y-3">
          <Link
            href="/explore"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 rounded-xl bg-zinc-900/80 px-4 py-3 text-sm font-semibold text-white border border-white/5"
          >
            <Compass className="h-4 w-4 text-blue-400" />
            <span>Browse Directory Websites</span>
          </Link>

          <Link
            href="/request"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 rounded-xl border border-blue-400/40 bg-blue-500/20 px-4 py-3 text-sm font-bold text-white backdrop-blur-md"
          >
            <PlusCircle className="h-4 w-4 text-blue-300" />
            <span>Request a Free Custom Website</span>
          </Link>
        </div>
      )}
    </header>
  );
}
