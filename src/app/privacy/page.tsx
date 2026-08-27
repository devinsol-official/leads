import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Devinsol Leads & Explore",
  description: "Privacy Policy and data practices for Devinsol free webpage campaign and directory.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Devinsol Leads & Explore",
    description: "Privacy Policy and data practices for Devinsol free webpage campaign and directory.",
    url: "https://leads.devinsol.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Header />

      <main className="flex-1 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 mb-4">
              <Lock className="h-3.5 w-3.5 text-blue-400" />
              <span>Legal & Transparency</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
            {/* Section 1 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <span>1. Promotional Campaign & Public Business Data</span>
              </h2>
              <p className="mb-3">
                Devinsol operates a digital growth initiative providing free promotional custom websites for businesses. As part of this promotional campaign, our research team identifies businesses operating without an active website using publicly available business directory data (such as Google Maps).
              </p>
              <p>
                <strong>Non-Affiliation Notice:</strong> Inclusion of a business in Devinsol Explore does not imply that Devinsol owns, represents, or holds proprietary rights to that business. All business names, logos, and trademarks remain the property of their respective owners.
              </p>
            </section>

            {/* Section 2 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>2. Information Collected During Site Requests & Claims</span>
              </h2>
              <p className="mb-3">
                When you interact with our platform to request a new free website or claim an existing promotional site, we collect contact details voluntarily submitted by you, including:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
                <li>Business / Company Name</li>
                <li>Contact / Founder Name</li>
                <li>Work Email Address</li>
                <li>Phone Number</li>
                <li>Customization Notes & Preferred Services</li>
              </ul>
              <p className="mt-3">
                We use this information exclusively to communicate with you, verify business ownership, customize your web page, and assist with live deployment. We never sell or share your personal data with third-party advertisers.
              </p>
            </section>

            {/* Section 3 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>3. Business Opt-Out & Listing Removal</span>
              </h2>
              <p className="mb-3">
                We design and list promotional websites in good faith to support business digital presence without any defamatory or harmful intent. If you are a business owner and prefer not to have a promotional page listed in our directory, you have the absolute right to request immediate removal.
              </p>
              <p>
                To request a listing removal or update, please contact our support team at <a href="mailto:support@devinsol.com" className="text-blue-400 font-semibold underline">support@devinsol.com</a>. Removal requests are processed within 24–48 hours.
              </p>
            </section>

            {/* Section 4 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>4. Third-Party Hosting Providers & Referral Links</span>
              </h2>
              <p className="mb-3">
                When you deploy your website with third-party web hosting providers (such as Hostinger via our official referral links or an alternative provider selected with your representative), transactions and hosting accounts are managed directly between you and the respective provider.
              </p>
              <p>
                Devinsol does not store your external hosting payment details. Any interaction with third-party hosting platforms is governed by their respective privacy policies and terms of service.
              </p>
            </section>

            {/* Section 5 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3">
                5. Data Security & Cookies
              </h2>
              <p>
                We implement industry-standard technical measures to protect submitted contact information. Devinsol Explore uses minimal functional cookies strictly necessary to maintain platform routing, search state, and user sessions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
