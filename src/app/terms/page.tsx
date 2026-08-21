import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, Mail, Gavel } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Promotional Disclaimer - Devinsol",
  description: "Terms of Service, promotional campaign disclaimers, no-contract guarantees, and service discretion policies for Devinsol.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Header />

      <main className="flex-1 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 mb-4">
              <FileText className="h-3.5 w-3.5 text-blue-400" />
              <span>Legal Terms & Promotional Disclaimer</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Terms of Service & Service Discretion
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
            {/* Disclaimer Box */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 text-blue-200">
              <div className="flex items-center gap-2 font-bold text-blue-300 text-base mb-2">
                <AlertCircle className="h-5 w-5 text-blue-400" />
                <span>Important Campaign & Ownership Disclaimer</span>
              </div>
              <p className="text-xs leading-relaxed text-blue-200/90">
                Websites listed in Devinsol Explore are promotional design concepts created as part of a digital growth initiative. Devinsol is <strong>not the owner of, nor authorized by or affiliated with</strong>, the real-world third-party businesses displayed unless explicitly claimed and authorized by the business owner.
              </p>
            </div>

            {/* Section 1 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <span>1. Nature of the Promotional Campaign</span>
              </h2>
              <p className="mb-3">
                Devinsol offers custom web design services for free to help local businesses establish a digital presence. As part of this campaign, our team researches publicly available business listings and designs sample web pages for businesses that do not currently have an active website.
              </p>
              <p className="mb-3">
                <strong>No Prior Consent Required:</strong> Listings are created as non-commercial promotional demonstrations. Because these pages are created to provide positive value and digital awareness without defamatory, malicious, or harmful content, prior consent is not sought before creating sample layouts.
              </p>
              <p>
                All trademarks, trade names, logos, and business names referenced remain the exclusive intellectual property of their respective owners.
              </p>
            </section>

            {/* Section 2: CRITICAL SERVICE DISCRETION & NO BINDING CONTRACT CLAUSE */}
            <section className="rounded-2xl border border-amber-500/30 bg-amber-950/10 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Gavel className="h-5 w-5 text-amber-400" />
                <span>2. Service Discretion & No Binding Contract Disclaimer</span>
              </h2>
              <p className="mb-3 text-amber-200/90">
                Submitting a website request, claiming a listing, or communicating with Devinsol <strong>does not create any binding legal contract, agreement, or formal commitment</strong> between you and Devinsol.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>
                  <strong className="text-white">Best Effort Outreach:</strong> While our design team endeavors to review requests and reach out to business owners as quickly as possible, response times are not guaranteed.
                </li>
                <li>
                  <strong className="text-white">Full Right of Rejection:</strong> Devinsol maintains absolute right and sole discretion to reject, decline, delay, or ignore any request without obligation to provide justification or create a website.
                </li>
                <li>
                  <strong className="text-white">No Legally Binding Commitments:</strong> No submission, form response, or initial outreach shall be construed as a professional or contractual commitment. Users agree they cannot make any legal, financial, or professional claim against Devinsol alleging a breach of agreement or failure to deliver.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>3. Free Website Design & Hosting Setup</span>
              </h2>
              <p className="mb-3">
                The initial custom website design, code development, and consultation provided by Devinsol are <strong>100% free of charge</strong> with no hidden agency design fees.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>
                  <strong className="text-white">Hosting & Server Infrastructure:</strong> While design and setup are complimentary, live deployment on your custom domain requires standard web hosting. You can acquire hosting directly from <strong>Hostinger using our official referral link</strong>, or select an alternative hosting configuration based on mutual agreement during discussions with your assigned Devinsol representative.
                </li>
                <li>
                  <strong className="text-white">Account Ownership:</strong> You maintain 100% ownership and control of your hosting account, credentials, and domain name at all times.
                </li>
                <li>
                  <strong className="text-white">Representative Consultation:</strong> When claiming or requesting a site, a dedicated Devinsol representative will coordinate with you to customize your branding, menu/services, contact numbers, and assist with live deployment.
                </li>
              </ul>
            </section>

            {/* Section 4: Technology Partner Attribution & Copyright */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <span>4. Technology Partner Attribution & Intellectual Property</span>
              </h2>
              <p className="mb-3">
                To reflect our ongoing technical support, development backing, and design quality, deployed websites may include a discrete footer attribution:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>
                  <strong className="text-white">Footer Attribution:</strong> We will include a footer reference stating <em>"Designed and Managed by Devinsol"</em> (or designating Devinsol as your official technology partner).
                </li>
                <li>
                  <strong className="text-white">Full Copyright Retained by Owner:</strong> We explicitly declare <em>"Copyright &copy; All rights reserved by [Business / Startup Owner]"</em>. All company branding, trademarks, logos, content, and proprietary assets remain 100% owned exclusively by the startup or business owner.
                </li>
                <li>
                  <strong className="text-white">Mutual Value:</strong> Showcasing Devinsol as your technology partner provides credibility for your digital storefront, demonstrates active technical maintenance, and enables ongoing advisory support from our team.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>5. Business Owner Rights & Listing Removal</span>
              </h2>
              <p className="mb-3">
                Devinsol respects the privacy and brand identity of all business owners. If you are the authorized owner or representative of a business listed in Devinsol Explore, you have the following rights:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-zinc-400">
                <li>
                  <strong className="text-white">Claim & Customize:</strong> You may contact our team to claim your website for free. Our representative will update all content to your exact specifications.
                </li>
                <li>
                  <strong className="text-white">Immediate Removal:</strong> If you do not wish to have your business featured in our promotional directory, you may request immediate removal.
                </li>
              </ol>
              <p className="mt-4">
                To submit a removal or update request, please email <a href="mailto:support@devinsol.com" className="text-blue-400 font-semibold underline">support@devinsol.com</a> with your business name and listing details. Removal requests are honored promptly without questions or fees.
              </p>
            </section>

            {/* Section 6 */}
            <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                Devinsol provides promotional webpage previews "as is" for demonstration purposes. Devinsol shall not be liable for any indirect, incidental, or consequential damages resulting from public viewing of demonstration listings prior to official owner verification.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
