"use client";

import Image from "next/image";
import { Lock, Sparkles, CheckCircle2, Globe2 } from "lucide-react";

export function OrbitVisual() {
  return (
    <div className="relative flex h-[310px] w-[310px] sm:h-[400px] sm:w-[400px] lg:h-[440px] lg:w-[440px] items-center justify-center mx-auto my-4 sm:my-0">
      {/* Outer Glowing Radial Aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-500/20 blur-2xl sm:blur-3xl" />

      {/* Orbit Track 3 (Outer) */}
      <div className="absolute h-full w-full rounded-full border border-blue-500/15 animate-orbit-cw-slow">
        {/* Orbit Node 1 */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/20">
          <Globe2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-cyan-400" />
          <span>Global Reach</span>
        </div>

        {/* Orbit Node 2 */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
          <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
          <span>100% Free Promo</span>
        </div>
      </div>

      {/* Orbit Track 2 (Middle) */}
      <div className="absolute h-[76%] w-[76%] rounded-full border border-dashed border-cyan-400/25 animate-orbit-ccw">
        {/* Orbit Node 3 */}
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 flex items-center gap-1 rounded-full bg-zinc-900/90 p-1.5 sm:p-2 text-xs text-amber-300 border border-amber-500/30 shadow-md">
          <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" />
        </div>

        {/* Orbit Node 4 */}
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 flex items-center gap-1 rounded-full bg-zinc-900/90 p-1.5 sm:p-2 text-xs text-indigo-300 border border-indigo-500/30 shadow-md">
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-indigo-400" />
        </div>
      </div>

      {/* Orbit Track 1 (Inner) */}
      <div className="absolute h-[52%] w-[52%] rounded-full border border-blue-500/30 animate-orbit-cw">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />
      </div>

      {/* Core Protective Hub with Direct Logo */}
      <div className="relative z-10 flex flex-col items-center justify-center p-2 text-center">
        <Image
          src="/logo.png"
          alt="Devinsol Logo"
          width={88}
          height={88}
          className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
        />
        <span className="mt-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-blue-400 leading-none">
          Leads by
        </span>
        <span className="mt-0.5 font-brand font-extrabold tracking-tight text-xs sm:text-sm text-white">
          DEVINSOL
        </span>
        <span className="text-[8px] sm:text-[9px] font-medium text-blue-400/80 uppercase tracking-widest mt-0.5">
          Protected
        </span>
      </div>
    </div>
  );
}
