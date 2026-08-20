"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Building2, User, Mail, Phone, FileText, AlertCircle, Bot, RefreshCw } from "lucide-react";
import { CampaignSite } from "@/data/campaigns";
import { CountryFlag } from "./CountryFlag";
import { validateEmail } from "@/utils/emailValidation";

interface ClaimModalProps {
  site: CampaignSite | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ClaimModal({ site, isOpen, onClose }: ClaimModalProps) {
  const [startupName, setStartupName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Email Validation State
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);

  // Math Captcha State
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaAnswer("");
    setCaptchaError(null);
  };

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen]);

  if (!isOpen || !site) return null;

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
        siteTitle: site.title,
        siteSlug: site.slug,
        startupName,
        founderName,
        phone,
        email,
        notes,
        submittedAt: new Date().toLocaleString(),
      }),
    })
      .catch((err) => console.error("Error submitting claim form:", err))
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8 text-white shadow-2xl shadow-blue-500/10 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30">
                <Sparkles className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Devinsol Free Website Offer
                </span>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                  <span>Claim "{site.title}" For Free</span>
                  {site.country && (
                    <CountryFlag
                      country={site.country}
                      className="inline-flex items-center gap-1.5 shrink-0 rounded-md bg-white/10 px-2 py-0.5 text-xs font-medium text-zinc-200 border border-white/10"
                      flagClassName="h-3.5 w-5 rounded-xs object-cover shadow-xs border border-white/10 shrink-0"
                    />
                  )}
                </h3>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              We identified your business on Google Maps without an active website and designed this custom page for you. Submit your details below and a <strong className="text-zinc-200">Devinsol representative will get in touch</strong> to answer your questions, customize your text & logo, and launch it live - completely free!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-blue-400" />
                  <span>Business / Company Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pulse AI Systems / Local Business Name"
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

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
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-blue-400" />
                  <span>Email Address *</span>
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
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 ${
                    emailError
                      ? "border-rose-500/80 bg-rose-950/20 focus:border-rose-500"
                      : "border-white/10 bg-zinc-900 focus:border-blue-500"
                  }`}
                />
                {emailError && (
                  <div className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                    <AlertCircle className="h-3 w-3 shrink-0" />
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
                  <FileText className="h-3.5 w-3.5 text-blue-400" />
                  <span>Questions or Customization Requests (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Let us know any custom hours, services, or details you want added..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* ROBOT MATH VERIFICATION CAPTCHA */}
              <div className="rounded-xl border border-white/10 bg-zinc-900/90 p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                    <Bot className="h-3.5 w-3.5 text-blue-400" />
                    <span>Robot Verification: What is {num1} + {num2}? *</span>
                  </label>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white"
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span>Refresh</span>
                  </button>
                </div>

                <input
                  type="number"
                  required
                  placeholder="Enter sum"
                  value={captchaAnswer}
                  onChange={(e) => {
                    setCaptchaAnswer(e.target.value);
                    if (captchaError) setCaptchaError(null);
                  }}
                  className={`w-full rounded-xl border px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 ${
                    captchaError
                      ? "border-rose-500/80 bg-rose-950/20 focus:border-rose-500"
                      : "border-white/10 bg-zinc-950 focus:border-blue-500"
                  }`}
                />
                {captchaError && (
                  <div className="mt-1 flex items-center gap-1 text-xs text-rose-400">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{captchaError}</span>
                  </div>
                )}
              </div>

              {/* Informational Callout */}
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 text-xs text-blue-300/90 leading-snug">
                <span className="font-bold text-blue-300">100% Free Guarantee:</span> There are no upfront fees, hidden subscriptions, or trial periods. Our Devinsol representative handles everything with you.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/25 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-blue-500/35 hover:border-blue-400/70 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Verifying & Submitting...</span>
                ) : (
                  <>
                    <span>Request Representative Call & Launch Free</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Small Legal Disclaimer */}
              <p className="mt-1 text-[10px] text-zinc-500 leading-relaxed text-center">
                * <strong>Disclaimer:</strong> Submitting this request does not create a binding contract. Devinsol retains full right & discretion to decline or ignore any request and is under no obligation to build or publish a website for any entity. See <Link href="/terms" className="text-zinc-400 underline">Terms of Service</Link>.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Request Received!
            </h3>
            <p className="text-sm text-zinc-300 mb-6 max-w-sm mx-auto leading-relaxed">
              Thank you <strong className="text-white">{founderName}</strong>! Our Devinsol representative will reach out to <strong className="text-blue-400">{phone || email}</strong> within 24 hours to customize your site and publish it live for free.
            </p>

            <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-left text-xs text-zinc-400 mb-6 space-y-2">
              <div className="flex justify-between">
                <span>Request ID:</span>
                <span className="font-mono text-zinc-200">DEV-GMAP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Business Name:</span>
                <span className="font-semibold text-zinc-200">{startupName}</span>
              </div>
              <div className="flex justify-between">
                <span>Verified Email:</span>
                <span className="font-semibold text-emerald-400">{email}</span>
              </div>
              <div className="flex justify-between">
                <span>Robot Verification:</span>
                <span className="font-semibold text-emerald-400">Passed ({num1} + {num2} = {num1 + num2})</span>
              </div>
              <div className="flex justify-between">
                <span>Total Cost:</span>
                <span className="font-bold text-emerald-400">$0.00 (100% Free)</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full rounded-xl bg-zinc-800 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
