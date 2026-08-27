import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claim Your Free Custom Website - Devinsol",
  description: "Verify and claim your business's custom promotional website created by Devinsol. 100% free with no contracts or hidden fees.",
  alternates: {
    canonical: "/claim",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ClaimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
