import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExploreDirectory } from "@/components/ExploreDirectory";
import { Compass, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Search Businesses & Free Webpages - Devinsol Directory",
  description: "Search for your business, preview custom websites created by Devinsol for Google Maps businesses, and claim yours for free.",
};

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Shared Header */}
      <Header />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Intro Header */}
          <div className="mb-10 flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />
              <span>Google Maps Business Directory Initiative</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Search Free Webpages & Businesses
            </h1>
            <p className="max-w-2xl text-base text-zinc-400 leading-relaxed">
              We research Google Maps for businesses operating without an active website and design them a custom page for free. Search for your business below, reach out, and a Devinsol representative will customize and launch it live for free.
            </p>
          </div>

          {/* Directory Client Component */}
          <ExploreDirectory />
        </div>
      </main>

      {/* Shared Marketing Footer */}
      <Footer />
    </div>
  );
}
