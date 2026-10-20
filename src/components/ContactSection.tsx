import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Info,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const github = socials.find((s) => s.platform === 'GitHub');
  const linkedin = socials.find((s) => s.platform === 'LinkedIn');
  const emailSocial = socials.find((s) => s.platform === 'Email');

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate validation and client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 800);
  };

  const handleOpenMailClient = () => {
    const recipient = emailSocial ? emailSocial.handle : 'kavin.developer.contact@example.com';
    const sub = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi Kavin,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${recipient}?subject=${sub}&body=${body}`;
  };

  const handleCopyEmail = () => {
    const target = emailSocial ? emailSocial.handle : 'kavin.developer.contact@example.com';
    navigator.clipboard.writeText(target);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Interested in software engineering internships, team hackathons, or project discussions? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I am an IT student based in <strong>Chennai</strong>, open to internships, full-stack projects, and research collaborations.
              </p>

              <div className="space-y-4">
                {/* Email card */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">EMAIL ADDRESS</div>
                      <div className="text-xs font-semibold text-slate-200">
                        {emailSocial ? emailSocial.handle : 'kavin.developer.contact@example.com'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location card */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">LOCATION & CAMPUS</div>
                    <div className="text-xs font-semibold text-slate-200">
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-2 flex flex-col gap-2">
                  <span className="text-[11px] font-mono text-slate-400">Professional Profiles:</span>
                  <div className="flex flex-wrap gap-2.5">
                    {github && (
                      <a
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-300" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {linkedin && (
                      <a
                        href={linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4 text-blue-400" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Note regarding configurable placeholders */}
            <div className="glass-panel p-4 rounded-xl border border-white/10 text-xs text-slate-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                Social links and contact details can be configured directly in <code className="text-blue-300 font-mono">src/data/portfolioData.ts</code>.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below. This interface includes frontend validation and direct email client dispatch.
            </p>

            {submissionSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Message Form Validated!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                    Thank you, <strong>{formData.name}</strong>! Since this is a static frontend deployment without a live mail server, click below to open this draft directly in your preferred email client:
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleOpenMailClient}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open in Email Client (mailto)</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmissionSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300">
                    Subject <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Internship Opportunity / Hackathon Collaboration"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Hello Kavin, I reviewed your SmartBinX and AmbuClear projects and would love to discuss..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-xs text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button & Disclaimer */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Validating...' : 'Submit Message'}</span>
                  </button>

                  <p className="text-[11px] font-mono text-slate-500 text-center">
                    * Frontend demonstration: Input fields are validated locally without pretending a remote backend server received private data.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
