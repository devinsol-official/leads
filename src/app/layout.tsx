import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const roobert = localFont({
  src: [
    {
      path: "../../public/fonts/roobert/Roobert-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/Roobert-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/roobert/Roobert-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/Roobert-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/roobert/Roobert-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/Roobert-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/roobert/Roobert-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/Roobert-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/roobert/Roobert-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/Roobert-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/roobert/Roobert-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert/Roobert-HeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-roobert",
  display: "swap",
});

const roobertMono = localFont({
  src: [
    {
      path: "../../public/fonts/roobert-mono/RoobertMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert-mono/RoobertMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert-mono/RoobertMono-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/roobert-mono/RoobertMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roobert-mono",
  display: "swap",
});

const brandFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devinsol Leads & Explore",
  description: "100% Free promotional websites for businesses on Google Maps.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roobert.variable} ${roobertMono.variable} ${brandFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
