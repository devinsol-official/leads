"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CAMPAIGNS_DATA, CampaignSite } from "@/data/campaigns";
import { validateEmail } from "@/utils/emailValidation";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Building2,
  User,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Zap,
  Gift,
  UserCheck,
  AlertCircle,
  Bot,
  RefreshCw,
  ExternalLink,
  FileText,
  Compass,
} from "lucide-react";

function ClaimContent() {
  const searchParams = useSearchParams();
  const siteParam = searchParams.get("id") || searchParams.get("slug") || "";

  const [selectedSite, setSelectedSite] = useState<CampaignSite | null>(null);

  useEffect(() => {
    if (siteParam && CAMPAIGNS_DATA.length > 0) {
      const matched = CAMPAIGNS_DATA.find(
        (s) =>
          s.id.toLowerCase() === siteParam.toLowerCase() ||
          s.slug.toLowerCase() === siteParam.toLowerCase()
      );
      setSelectedSite(matched || CAMPAIGNS_DATA[0] || null);
    } else if (CAMPAIGNS_DATA.length > 0) {
      setSelectedSite(CAMPAIGNS_DATA[0]);
    } else {
      setSelectedSite(null);
    }
  }, [siteParam]);

  const [startupName, setStartupName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Email Validation State
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);

  // Robot Math Verification State
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate random math problem
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaAnswer("");
    setCaptchaError(null);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError(null);
      setEmailSuggestion(null);
      return;
    }
    const result = validateEmail(email);
    if (!result.isValid) {
      setEmailError(result.error || "Invalid email address.");
      setEmailSuggestion(result.suggestion || null);
    } else {
      setEmailError(null);
      setEmailSuggestion(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Email check
    const emailResult = validateEmail(email);
    if (!emailResult.isValid) {
      setEmailError(emailResult.error || "Please enter a valid email address.");
      setEmailSuggestion(emailResult.suggestion || null);
      return;
    }

    // 2. Math Captcha check
    if (parseInt(captchaAnswer.trim(), 10) !== num1 + num2) {
      setCaptchaError(`Incorrect answer. What is ${num1} + ${num2}?`);
      generateCaptcha();
      return;
    }

    setEmailError(null);
    setEmailSuggestion(null);
    setCaptchaError(null);
    setIsSubmitting(true);

    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "claim",
        siteTitle: selectedSite?.title || "N/A",
        siteSlug: selectedSite?.slug || "N/A",
        startupName,
        founderName,
        phone,
        email,
        notes,
        submittedAt: new Date().toLocaleString(),
      }),
    })
      .catch((err) => console.error("Error submitting claim page form:", err))
      .finally(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStartupName("");
    setFounderName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setEmailError(null);
    setEmailSuggestion(null);
    generateCaptcha();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-sans">
      {/* Header Banner */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          <span>Devinsol Promotional Website Claim</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Claim Your Free Website
        </h1>
        <p className="mt-4 text-base text-zinc-400 leading-relaxed">
          Did we research your business on Google Maps and design a promotional webpage for you? Submit your details below to claim full ownership and launch your site live for <strong>100% free</strong>!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Selected Website Preview Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Selected Promotional Webpage
              </span>
              <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                100% Free Offer
              </span>
            </div>

            {/* Site selector if multiple sites */}
            {CAMPAIGNS_DATA.length > 0 ? (
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Choose Promotional Webpage to Claim:
                </label>
                <select
                  value={selectedSite?.slug || ""}
                  onChange={(e) => {
                    const found = CAMPAIGNS_DATA.find((s) => s.slug === e.target.value);
                    if (found) setSelectedSite(found);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                >
                  {CAMPAIGNS_DATA.map((site) => (
                    <option key={site.id} value={site.slug}>
                      {site.title} ({site.category})
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 text-xs text-zinc-400 leading-relaxed">
                <p className="font-semibold text-white mb-1">Custom Website Request</p>
                <p>Submit your business name and details to have our Devinsol design team create your free website in 3 days!</p>
              </div>
            )}

            {selectedSite && (
              <div className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden">
                <div className="relative h-44 w-full">
                  <img
                    src={selectedSite.thumbnailUrl}
                    alt={selectedSite.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">
                      {selectedSite.title}
                    </h3>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      {selectedSite.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {selectedSite.tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/campaign/${selectedSite.campaignCode}/${selectedSite.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      <span>Preview Full HTML Page</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Guarantees Box */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-4 text-xs text-zinc-400">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>What Happens After You Claim?</span>
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Zap className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Representative Outreach:</strong> A Devinsol agent reaches out to confirm business details within 24 hours.</span>
              </div>
              <div className="flex gap-3 items-start">
                <Gift className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Zero Cost:</strong> No design fees, no setup charges, and no hidden subscriptions.</span>
              </div>
              <div className="flex gap-3 items-start">
                <UserCheck className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>Full Customization:</strong> We update logos, contact info, and copy to match your exact preferences.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-400" />
                  <span>Business Verification & Claim Details</span>
                </h2>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Business / Company Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pulse AI / Your Business Name"
                    value={startupName}
                    onChange={(e) => setStartupName(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Owner Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-blue-400" />
                      <span>Your Name / Owner *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={founderName}
                      onChange={(e) => setFounderName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-blue-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Email with Email Validation */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-blue-400" />
                    <span>Work Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="owner@yourbusiness.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(null);
                    }}
                    onBlur={handleEmailBlur}
                    className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 ${
                      emailError
                        ? "border-rose-500/80 bg-rose-950/20 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-white/10 bg-zinc-950 focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />
                  {emailError && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{emailError}</span>
                    </div>
                  )}
                  {emailSuggestion && (
                    <button
                      type="button"
                      onClick={() => {
                        setEmail(emailSuggestion);
                        setEmailError(null);
                        setEmailSuggestion(null);
                      }}
                      className="mt-1 text-xs text-blue-400 hover:underline"
                    >
                      Click to use {emailSuggestion}
                    </button>
                  )}
                </div>

                {/* Special Notes */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-blue-400" />
                    <span>Customization Requests / Notes (Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Let us know any specific changes, logos, or contact details you want updated on your website..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                  />
                </div>

                {/* ROBOT MATH VERIFICATION CAPTCHA */}
                <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                      <Bot className="h-4 w-4 text-blue-400" />
                      <span>Robot Verification: What is {num1} + {num2}? *</span>
                    </label>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white"
                      title="Generate new problem"
                    >
                      <RefreshCw className="h-3 w-3" />
                      <span>New Math</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      required
                      placeholder="Enter sum result"
                      value={captchaAnswer}
                      onChange={(e) => {
                        setCaptchaAnswer(e.target.value);
                        if (captchaError) setCaptchaError(null);
                      }}
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 ${
                        captchaError
                          ? "border-rose-500/80 bg-rose-950/20 focus:border-rose-500"
                          : "border-white/10 bg-zinc-900 focus:border-blue-500"
                      }`}
                    />
                  </div>

                  {captchaError && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{captchaError}</span>
                    </div>
                  )}
                </div>

                {/* Callout */}
                <div className="flex items-center gap-2.5 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-xs text-blue-300">
                  <Clock className="h-4 w-4 text-blue-400 shrink-0" />
                  <span><strong>100% Free Guarantee:</strong> No credit card, trial period, or hidden fees. A Devinsol agent handles launch setup with you.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-400/40 bg-blue-500/25 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-blue-500/35 hover:border-blue-400/70 disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Verifying & Submitting...</span>
                  ) : (
                    <>
                      <span>Claim Webpage & Request Representative Call</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                {/* Small Legal Disclaimer */}
                <p className="mt-2 text-[10px] text-zinc-500 leading-relaxed text-center">
                  * <strong>Promotional Disclaimer:</strong> Submitting this claim does not create a binding contract. Our team will attempt to reach out as soon as possible. Devinsol retains full discretion to decline or ignore any request and is under no obligation to publish a website for any entity. See <Link href="/terms" className="text-zinc-400 underline">Terms of Service</Link>.
                </p>
              </form>
            ) : (
              /* Confirmation State */
              <div className="text-center py-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                </div>

                <h2 className="text-3xl font-extrabold text-white mb-2">
                  Website Claim Received!
                </h2>
                <p className="text-base text-zinc-300 mb-8 max-w-md mx-auto leading-relaxed">
                  Thank you <strong className="text-white">{founderName}</strong>! Our Devinsol representative will reach out to <strong className="text-blue-400">{phone || email}</strong> within 24 hours to customize <strong className="text-white">{selectedSite?.title}</strong> and publish it live for free.
                </p>

                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-left text-xs text-zinc-400 mb-8 space-y-3">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Claim Reference:</span>
                    <span className="font-mono text-zinc-200 font-bold">CLM-DEV-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Target Website:</span>
                    <span className="font-semibold text-zinc-200">{selectedSite?.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Business Name:</span>
                    <span className="font-semibold text-zinc-200">{startupName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Verified Email:</span>
                    <span className="font-semibold text-emerald-400">{email}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Human Verification:</span>
                    <span className="font-semibold text-emerald-400">Passed ({num1} + {num2} = {num1 + num2})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design & Launch Cost:</span>
                    <span className="font-extrabold text-emerald-400">$0.00 (100% Free)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/explore"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/20 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-blue-500/30"
                  >
                    <Compass className="h-4 w-4" />
                    <span>Browse More Sites</span>
                  </Link>

                  <button
                    onClick={handleReset}
                    className="flex-1 rounded-xl bg-zinc-800 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  >
                    Submit Another Claim
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClaimPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="flex-1">
        <Suspense fallback={
          <div className="flex min-h-[50vh] items-center justify-center text-sm text-zinc-400">
            Loading claim verification details...
          </div>
        }>
          <ClaimContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
