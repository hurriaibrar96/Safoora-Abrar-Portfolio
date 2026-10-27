import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Copy,
  Check,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Strict sanitization to prevent XSS and script injection attacks
  const sanitize = (text: string) => {
    return text.replace(/[<>]/g, '').trim();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanName = sanitize(formData.name);
    const cleanEmail = sanitize(formData.email);
    const cleanSubject = sanitize(formData.subject) || 'Portfolio Inquiry';
    const cleanMessage = sanitize(formData.message);

    // Strict validation
    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Prepare safe mailto link encoding
    const mailtoBody = encodeURIComponent(
      `Hello Safoora,\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`
    );
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${cleanSubject}`);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -z-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed text-justify">
            Available for full-time Software Developer roles, GBOB outreach partnerships, business collaborations with SuperiorXR Solutions, and technical development challenges. Reach out via email or direct form message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1735]/90 backdrop-blur-md border border-blue-800/70 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Verified Direct Channels</span>
              </h3>

              <div className="space-y-3 text-xs text-blue-100">
                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-[#091228] border border-blue-700/60 shadow-inner flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-mono text-cyan-300 block">Primary Email</span>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white hover:text-cyan-300 transition-colors truncate block text-xs"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-3.5 rounded-xl bg-[#091228] border border-blue-700/60 shadow-inner flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-mono text-cyan-300 block">Phone &amp; WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-bold text-white hover:text-cyan-300 transition-colors text-xs"
                    >
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="p-3.5 rounded-xl bg-[#091228] border border-blue-700/60 shadow-inner flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-mono text-cyan-300 block">Location</span>
                    <span className="font-semibold text-white text-xs">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* SuperiorXR Solutions Explore the Business Link */}
              <div className="pt-4 border-t border-blue-900/60">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                  SuperiorXR Solutions
                </span>
                <a
                  href={PERSONAL_INFO.businessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#070f24] border border-cyan-500/40 hover:border-cyan-400 text-xs text-white hover:text-cyan-300 transition-all group shadow-sm"
                  title="Explore SuperiorXR Solutions"
                >
                  <span className="font-bold">SuperiorXR Solutions — Explore the Business</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-blue-900/60 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-blue-950 border border-blue-700 hover:border-cyan-400 text-xs font-bold text-white text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-blue-950 border border-blue-700 hover:border-cyan-400 text-xs font-bold text-white text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1735]/90 backdrop-blur-md border border-blue-800/70 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-blue-200/90 mb-6 text-justify">
                Fill in the details below to open your native mail composer with a pre-formatted, secure message.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-rose-950/80 border border-rose-600 text-xs text-rose-200">
                  {errorMsg}
                </div>
              )}

              {submitted && (
                <div className="mb-4 p-3.5 rounded-lg bg-emerald-950/80 border border-emerald-500 text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Message composer opened! If it didn't trigger, please send directly to abrarsafoora161@gmail.com.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      maxLength={100}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#091228] border border-blue-700/70 text-white placeholder-blue-400/50 text-xs focus:outline-hidden focus:border-cyan-400 transition-colors shadow-inner"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      maxLength={120}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#091228] border border-blue-700/70 text-white placeholder-blue-400/50 text-xs focus:outline-hidden focus:border-cyan-400 transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Software Engineering Role / GBOB Partnership / SuperiorXR Solutions"
                    maxLength={150}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#091228] border border-blue-700/70 text-white placeholder-blue-400/50 text-xs focus:outline-hidden focus:border-cyan-400 transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1.5 font-bold">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Safoora, I would like to discuss..."
                    maxLength={2000}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#091228] border border-blue-700/70 text-white placeholder-blue-400/50 text-xs focus:outline-hidden focus:border-cyan-400 transition-colors shadow-inner resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Preparing...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
