import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Free Custom Website - Devinsol",
  description: "Submit your Google Maps business listing to receive a custom-built website within days, 100% free.",
  alternates: {
    canonical: "/request",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
