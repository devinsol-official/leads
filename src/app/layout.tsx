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
  metadataBase: new URL("https://leads.devinsol.com"),
  title: {
    default: "Devinsol Leads & Explore - 100% Free Websites for Businesses",
    template: "%s | Devinsol",
  },
  description: "Devinsol builds high-performance custom websites for businesses completely free. Explore our verified Google Maps business directory or claim your free website today.",
  keywords: [
    "free business website",
    "custom web design",
    "google maps businesses",
    "promotional websites",
    "Devinsol explore",
    "startup website design",
    "claim free website",
  ],
  authors: [{ name: "Devinsol", url: "https://devinsol.com" }],
  creator: "Devinsol",
  publisher: "Devinsol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leads.devinsol.com",
    siteName: "Devinsol Leads & Explore",
    title: "Devinsol Leads & Explore - 100% Free Websites for Businesses",
    description: "Search and preview custom websites created by Devinsol for Google Maps businesses, and claim yours for free.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Devinsol Leads & Explore - Free Websites for Businesses",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devinsol Leads & Explore - 100% Free Websites for Businesses",
    description: "100% Free promotional custom websites for businesses on Google Maps. Preview and claim yours now.",
    images: ["/og-image.svg"],
    creator: "@devinsol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Devinsol",
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roobert.variable} ${roobertMono.variable} ${brandFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
