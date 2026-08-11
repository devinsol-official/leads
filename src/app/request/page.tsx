"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { validateEmail } from "@/utils/emailValidation";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
  Gift,
  UserCheck,
  AlertCircle,
  Bot,
  RefreshCw,
} from "lucide-react";

export default function RequestPage() {
  const [businessName, setBusinessName] = useState("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
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

    // 1. Validate email
    const emailResult = validateEmail(email);
    if (!emailResult.isValid) {
      setEmailError(emailResult.error || "Please enter a valid email address.");
      setEmailSuggestion(emailResult.suggestion || null);
      return;
    }

    // 2. Validate Robot Math Captcha
    const expectedSum = num1 + num2;
    if (parseInt(captchaAnswer.trim(), 10) !== expectedSum) {
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
        formType: "request",
        businessName,
        googleMapsUrl,
        contactName,
        industry,
        email,
        phone,
        notes,
        submittedAt: new Date().toLocaleString(),
      }),
    })
      .catch((err) => console.error("Error submitting request page form:", err))
      .finally(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setBusinessName("");
    setGoogleMapsUrl("");
    setContactName("");
    setEmail("");
    setPhone("");
    setIndustry("");
    setNotes("");
    setEmailError(null);
    setEmailSuggestion(null);
    generateCaptcha();
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Header />

      <main className="flex-1 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Devinsol Free Web Design Initiative</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Request Your Free Custom Website
            </h1>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Don't have a website for your business yet? Submit your Google Maps business link and details below. Our Devinsol design team will build your custom website <strong>100% free within 3 days</strong>!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Request Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-400" />
                      <span>Business & Contact Details</span>
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
                        placeholder="e.g. Metro Dental Clinic / Apex Logistics"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>

                    {/* REQUIRED GOOGLE MAPS LINK */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-blue-400" />
                        <span>Google Maps Business Link *</span>
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://maps.google.com/?cid=... or your Google Maps listing URL"
                        value={googleMapsUrl}
                        onChange={(e) => setGoogleMapsUrl(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                      <p className="mt-1 text-[11px] text-zinc-500">
                        Paste your Google Maps share link so our designers can pull your address, opening hours, and location.
                      </p>
                    </div>

                    {/* Owner & Industry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5 text-blue-400" />
                          <span>Owner / Contact Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-blue-400" />
                          <span>Industry / Category *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Healthcare, Restaurant, SaaS"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    {/* Email & Phone with Email Validation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-blue-400" />
                          <span>Work Email *</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@yourbusiness.com"
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

                    {/* Special Notes */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        <span>Special Features or Notes (Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us key services, color preferences, or details you want featured on your website..."
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
                      <span><strong>3-Day Turnaround Guarantee:</strong> Our Devinsol design team will create your custom page for free and notify you when it's added to the directory.</span>
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
                          <span>Submit Free Website Request</span>
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>

                    {/* Small Legal Disclaimer */}
                    <p className="mt-2 text-[10px] text-zinc-500 leading-relaxed text-center">
                      * <strong>Promotional Disclaimer:</strong> Submitting this request does not create a binding contract. Our team will attempt to reach out as soon as possible. Devinsol retains full discretion to decline or ignore any request and is under no obligation to build or publish a website for any entity. See <Link href="/terms" className="text-zinc-400 underline">Terms of Service</Link>.
                    </p>
                  </form>
                ) : (
                  /* Confirmation State */
                  <div className="text-center py-6">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
                      <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                    </div>

                    <h2 className="text-3xl font-extrabold text-white mb-2">
                      Website Request Submitted!
                    </h2>
                    <p className="text-base text-zinc-300 mb-8 max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-white">{contactName}</strong>! Our Devinsol design team has received your request for <strong className="text-blue-400">{businessName}</strong>. We will design your website for free within 3 days and notify <strong className="text-white">{email}</strong>.
                    </p>

                    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-left text-xs text-zinc-400 mb-8 space-y-3">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Request Reference:</span>
                        <span className="font-mono text-zinc-200 font-bold">REQ-PAGE-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Business Name:</span>
                        <span className="font-semibold text-zinc-200">{businessName}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Verified Email:</span>
                        <span className="font-semibold text-emerald-400">{email}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Human Verification:</span>
                        <span className="font-semibold text-emerald-400">Passed ({num1} + {num2} = {num1 + num2})</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Google Maps Link:</span>
                        <span className="font-mono text-xs text-blue-400 truncate max-w-[220px]">{googleMapsUrl}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Est. Completion:</span>
                        <span className="font-semibold text-blue-400">Within 3 Days</span>
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
                        <span>Browse Existing Directory</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <button
                        onClick={handleReset}
                        className="flex-1 rounded-xl bg-zinc-800 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-700 hover:text-white"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar / Guarantees & FAQs */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-md space-y-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                  <span>Why Devinsol Offers Free Webpages</span>
                </h3>

                <div className="flex gap-4 items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">3-Day Turnaround</h4>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      Our experienced web design team crafts your site quickly and adds it to our directory for you to check.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Gift className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Free - Zero Hidden Fees</h4>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      No credit card, deposit, or trial periods. We build the initial site for free as part of our startup growth initiative.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <UserCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Representative Consultation</h4>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      Once your page is ready, a Devinsol agent works directly with you to answer questions and launch your site live.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick FAQ Box */}
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 space-y-3 text-xs text-zinc-400">
                <h4 className="font-bold text-white text-sm mb-2">Frequently Asked Questions</h4>
                <p>
                  <strong className="text-zinc-200">Q: Do I need technical skills?</strong><br />
                  A: Not at all! Our representative handles all customization, hosting, and launch setup for you.
                </p>
                <p>
                  <strong className="text-zinc-200">Q: Where will my website be listed?</strong><br />
                  A: It will be published to the <Link href="/explore" className="text-blue-400 underline">Devinsol Explore Directory</Link> where you can preview it anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
