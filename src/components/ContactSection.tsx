import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Copy,
  Check,
  Send,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageSquare,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | '';
    text: string;
    gmailUrl?: string;
    mailtoUrl?: string;
  }>({ type: '', text: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  // Generate web Gmail compose link (works in ANY browser/iframe without requiring desktop mail app)
  const getGmailUrl = (subject: string, body: string) => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getMailtoUrl = (subject: string, body: string) => {
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleCopyAll = async () => {
    const fullText = `To: ${PERSONAL_INFO.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nFrom: ${formData.name} (${formData.email})\nMessage:\n${formData.message}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    } catch {
      setCopiedAll(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill out all required fields before sending.'
      });
      return;
    }

    setIsSubmitting(true);

    const subject = `[Portfolio Inquiry] ${formData.subject}`;
    const body = `Hi Safoora,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`;

    const gmailUrl = getGmailUrl(subject, body);
    const mailtoUrl = getMailtoUrl(subject, body);

    setStatusMessage({
      type: 'success',
      text: `Your message is ready for Safoora Abrar (${PERSONAL_INFO.email}). Choose your preferred option below to send:`,
      gmailUrl,
      mailtoUrl
    });

    setIsSubmitting(false);

    try {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled via the explicit buttons below
    }
  };

  const directGmailLink = getGmailUrl(
    formData.subject || 'Portfolio Inquiry / Job Opportunity',
    formData.message || 'Hello Safoora,\n\nI came across your portfolio and would love to connect regarding...'
  );

  const directMailtoLink = getMailtoUrl(
    formData.subject || 'Portfolio Inquiry',
    formData.message || 'Hello Safoora,\n\n'
  );

  return (
    <section id="contact" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Soft background ambient gradient lights in blue */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Initiate a Conversation
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed">
            Whether inquiring about software development opportunities, Python &amp; AI projects, full-stack systems, or technical collaborations.
          </p>
        </div>

        {/* 2-Column Layout with Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0c1735]/90 backdrop-blur-md rounded-2xl border border-blue-800/70 p-6 sm:p-7 shadow-xl">
              <h3 className="text-base font-extrabold text-white">
                Direct Contact Channels
              </h3>
              <p className="mt-1 text-xs text-blue-200/80">
                Guaranteed fast response within 24 business hours.
              </p>

              <div className="mt-6 space-y-3.5 text-xs">
                {/* Email Box in Deep Blue with Working Gmail launcher */}
                <div className="p-4 rounded-xl bg-[#081026] border border-blue-600/50 flex flex-col gap-2.5 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-cyan-400 uppercase tracking-wider text-[11px] font-bold">
                      Primary Contact Email
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-cyan-300 hover:text-white bg-blue-900/60 px-2.5 py-1 rounded-md border border-blue-700 transition-colors"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={directGmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-extrabold text-sm sm:text-base hover:text-cyan-300 break-all transition-colors underline decoration-cyan-400/50 underline-offset-4"
                    title="Click to open in Gmail"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  {/* Direct Launchers */}
                  <div className="flex items-center gap-2 pt-1 border-t border-blue-900/60">
                    <a
                      href={directGmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:brightness-110 text-white font-bold text-[11px] shadow-sm transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Open in Gmail</span>
                    </a>

                    <a
                      href={directMailtoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-[#0e1d44] hover:bg-blue-800 text-cyan-200 hover:text-white font-bold text-[11px] border border-blue-700 transition-all"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Mail App</span>
                    </a>
                  </div>
                </div>

                {/* Phone Box */}
                <div className="p-3.5 rounded-xl bg-[#081026] border border-blue-700/50 flex flex-col gap-1 shadow-inner">
                  <span className="font-mono text-cyan-400 uppercase tracking-wider text-[11px] font-bold">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-white font-bold text-sm hover:text-cyan-300 transition-colors"
                  >
                    {PERSONAL_INFO.phoneDisplay}
                  </a>
                </div>

                {/* Location Box */}
                <div className="p-3.5 rounded-xl bg-[#081026] border border-blue-700/50 flex flex-col gap-1 shadow-inner">
                  <span className="font-mono text-cyan-400 uppercase tracking-wider text-[11px] font-bold">
                    Location
                  </span>
                  <span className="text-white font-semibold text-sm">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Verified Professional Profiles in Blue */}
              <div className="mt-6 pt-5 border-t border-blue-900/60 flex flex-col sm:flex-row gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-[#0e1d44] hover:bg-blue-600/40 rounded-lg transition-colors border border-blue-700"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-sky-300 bg-[#0e1d44] hover:bg-blue-600/40 rounded-lg transition-colors border border-blue-700"
                >
                  <Linkedin className="w-4 h-4 text-[#38bdf8]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-sky-400" />
                </a>
              </div>
            </div>

            {/* Quick Status Note in Blue */}
            <div className="p-5 rounded-2xl border border-blue-800/60 bg-gradient-to-br from-[#0c1735] via-[#091228] to-[#0c1735] text-xs text-blue-200 leading-relaxed shadow-lg">
              <span className="font-extrabold text-white block mb-1">
                Looking for a Software Developer or AI Specialist?
              </span>
              I am open to full-time software engineering roles, remote AI development contracts, and full-stack web consulting engagements.
            </div>
          </motion.div>

          {/* Contact Message Form (7 cols) in Blue */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0c1735]/90 backdrop-blur-md rounded-2xl border border-blue-800/70 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-900/80 border border-blue-600/50 text-cyan-300 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-blue-200/80">
                    Dispatched directly to <span className="text-cyan-300 font-bold">{PERSONAL_INFO.email}</span>
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-blue-200 mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#081024] border border-blue-700 rounded-lg text-white placeholder-blue-300/40 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors outline-hidden"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-blue-200 mb-1.5"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#081024] border border-blue-700 rounded-lg text-white placeholder-blue-300/40 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold text-blue-200 mb-1.5"
                  >
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Web Development"
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-[#081024] border border-blue-700 rounded-lg text-white placeholder-blue-300/40 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors outline-hidden"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-blue-200 mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project, timeline, or open role..."
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-[#081024] border border-blue-700 rounded-lg text-white placeholder-blue-300/40 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-y outline-hidden"
                  ></textarea>
                </div>

                {/* Instant Working Feedback */}
                {statusMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-bold leading-relaxed border ${
                      statusMessage.type === 'success'
                        ? 'bg-[#081a3d] text-white border-cyan-400 shadow-lg'
                        : 'bg-rose-950/80 text-rose-300 border-rose-500/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 font-bold text-cyan-300 text-sm">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>{statusMessage.type === 'success' ? 'Ready to Send!' : 'Notice'}</span>
                    </div>

                    <p className="text-blue-100 mb-3">{statusMessage.text}</p>

                    {statusMessage.gmailUrl && (
                      <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-blue-800">
                        {/* 1. Open in Gmail */}
                        <a
                          href={statusMessage.gmailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:brightness-110 text-white font-bold rounded-lg shadow-md transition-all text-xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open in Gmail ↗</span>
                        </a>

                        {/* 2. Open Desktop Mail App */}
                        <a
                          href={statusMessage.mailtoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg shadow-sm transition-all text-xs border border-blue-500"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open Mail Client ↗</span>
                        </a>

                        {/* 3. Copy All Button */}
                        <button
                          type="button"
                          onClick={handleCopyAll}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#081026] hover:bg-blue-900 text-cyan-300 font-bold rounded-lg border border-blue-700 text-xs transition-colors"
                        >
                          {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedAll ? 'Message Copied!' : 'Copy Full Message'}</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white text-xs font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending Message…' : 'Send Message'}</span>
                  </button>

                  <div className="flex items-center justify-center sm:justify-end gap-3 text-xs">
                    <a
                      href={directGmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-cyan-400 hover:text-white inline-flex items-center gap-1 transition-colors underline decoration-cyan-400/60 underline-offset-2"
                    >
                      <span>Compose in Gmail</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </a>

                    <span className="text-blue-700" aria-hidden="true">|</span>

                    <a
                      href={directMailtoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-200 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Mail App</span>
                      <ArrowUpRight className="w-3 h-3 text-blue-300" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
