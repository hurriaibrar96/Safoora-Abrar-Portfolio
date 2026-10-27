import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Copy,
  Check,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  Code2,
  Server,
  FileCheck,
  Terminal,
  FileText,
  Globe2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DeveloperConsole } from './DeveloperConsole';

interface HeroProps {
  onOpenCertificates?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCertificates }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'profile' | 'code'>('profile');

  const roles = [
    'Software Developer',
    'GBOB Specialist',
    'Full-Stack Web Developer',
    'Information Engineering Student'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-blue-900/40 overflow-hidden tech-grid-pattern">
      {/* Background ambient lighting in blended shades of blue */}
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 left-1/12 -z-10 w-[450px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Portrait & Identity in Blue (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left bg-[#0c1630]/80 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-blue-800/60 shadow-xl"
          >
            {/* Avatar with colorful gradient ring & hover float */}
            <div className="relative mb-5 group">
              <div className="p-1 rounded-2xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden bg-stone-900">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Glowing available badge */}
              <div className="absolute -bottom-2.5 -right-2 bg-[#061026] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-cyan-400/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40 animate-pulse"></span>
                <span className="text-cyan-300">Available for Work</span>
              </div>
            </div>

            {/* Name strictly on a single line */}
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight whitespace-nowrap">
              {PERSONAL_INFO.name}
            </h1>

            {/* Software Developer in upper line, and GBOB Specialist under it in the exact same font */}
            <div className="mt-1.5 flex flex-col items-center lg:items-start leading-tight">
              <p className="text-base sm:text-lg font-bold text-cyan-300 tracking-wide">
                Software Developer
              </p>
              <p className="text-base sm:text-lg font-bold text-cyan-300 tracking-wide">
                GBOB Specialist
              </p>
            </div>

            {/* Contact link inserted (SuperiorXR Solutions) to explore the business */}
            <a
              href={PERSONAL_INFO.businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#0f1f44] text-cyan-200 border border-cyan-500/50 hover:border-cyan-300 hover:text-white transition-all shadow-md group"
              title="SuperiorXR Solutions — Explore the Business"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>SuperiorXR Solutions — Explore the Business</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Quick Contact & Details List in Blue */}
            <div className="mt-6 w-full space-y-2.5 text-xs text-blue-100 pt-5 border-t border-blue-900/60 text-left">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="font-medium text-blue-200">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-semibold text-blue-200 hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#091228] border border-blue-700/60 shadow-inner">
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-cyan-300 truncate transition-colors text-white text-xs"
                    title="Click to compose directly in Gmail"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 text-blue-300 hover:text-white hover:bg-blue-800/60 rounded transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links in Blue with secure rel attributes */}
            <div className="mt-5 pt-5 border-t border-blue-900/60 w-full flex items-center justify-center lg:justify-start gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-blue-400" />
              </a>

              <span className="text-blue-700" aria-hidden="true">·</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-sky-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Showcase + Interactive Terminal (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-between"
          >
            <div>
              {/* Header bar with toggle */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#0c1836] border border-blue-600/50 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  <span className="text-cyan-300 font-bold">IT Student · Software Developer · GBOB Specialist</span>
                </div>

                <div className="flex items-center gap-1 bg-[#091228] p-1 rounded-lg border border-blue-800">
                  <button
                    type="button"
                    onClick={() => setViewMode('profile')}
                    className={`px-3 py-1 text-xs font-bold rounded transition-colors flex items-center gap-1 ${
                      viewMode === 'profile'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-blue-300 hover:text-white'
                    }`}
                  >
                    <FileText className="w-3 h-3 text-cyan-300" />
                    <span>Summary</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode('code')}
                    className={`px-3 py-1 text-xs font-bold rounded transition-colors flex items-center gap-1 ${
                      viewMode === 'code'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xs'
                        : 'text-blue-300 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3 h-3 text-emerald-400" />
                    <span>Live Console</span>
                  </button>
                </div>
              </div>

              {/* Elevated Headline with Blue/Cyan gradient */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight text-balance">
                Architecting{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  modern software solutions
                </span>{' '}
                with clean code architecture, full-stack systems, and strategic GBOB outreach.
              </h2>

              {/* Toggle Content: Profile Story vs Interactive Console */}
              <div className="mt-6">
                {viewMode === 'profile' ? (
                  <motion.div
                    key="profile-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4 text-blue-100 text-sm sm:text-base leading-relaxed"
                  >
                    <p className="text-justify leading-relaxed">{PERSONAL_INFO.summary}</p>
                    <p className="text-blue-200/90 text-sm text-justify leading-relaxed">
                      Whether developing the official web presence for SuperiorXR Solutions to explore the business, building full-stack e-commerce systems, creating interactive 3D visualizations, or executing targeted outreach and high-authority guest blogging partnerships, I emphasize disciplined code quality, reliable security, and measurable digital growth.
                    </p>

                    {/* 3 Core Focus Pillars */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div className="p-4 rounded-xl border border-blue-700/60 bg-gradient-to-b from-[#0f1f44] to-[#0c1630] shadow-lg hover:border-cyan-400 hover:-translate-y-1 transition-all duration-200">
                        <div className="w-8 h-8 rounded-lg bg-blue-900/80 text-cyan-300 flex items-center justify-center mb-2.5 border border-blue-600/40">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <span className="block text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                          Core Focus
                        </span>
                        <span className="block text-sm font-extrabold text-white mt-0.5">
                          Software Development
                        </span>
                        <span className="block text-xs text-blue-200 mt-1 leading-snug">
                          Full-Stack Web, TypeScript, REST APIs &amp; OOP
                        </span>
                      </div>

                      <div className="p-4 rounded-xl border border-blue-700/60 bg-gradient-to-b from-[#0f1f44] to-[#0c1630] shadow-lg hover:border-cyan-400 hover:-translate-y-1 transition-all duration-200">
                        <div className="w-8 h-8 rounded-lg bg-cyan-950/80 text-cyan-400 flex items-center justify-center mb-2.5 border border-cyan-600/40">
                          <Globe2 className="w-4 h-4" />
                        </div>
                        <span className="block text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                          Outreach Strategy
                        </span>
                        <span className="block text-sm font-extrabold text-white mt-0.5">
                          GBOB Specialist
                        </span>
                        <span className="block text-xs text-blue-200 mt-1 leading-snug">
                          Guest Blogging, Outreach Business &amp; Authority Growth
                        </span>
                      </div>

                      <div className="p-4 rounded-xl border border-blue-700/60 bg-gradient-to-b from-[#0f1f44] to-[#0c1630] shadow-lg hover:border-cyan-400 hover:-translate-y-1 transition-all duration-200">
                        <div className="w-8 h-8 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center mb-2.5 border border-emerald-600/40">
                          <Server className="w-4 h-4" />
                        </div>
                        <span className="block text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                          Business &amp; Systems
                        </span>
                        <span className="block text-sm font-extrabold text-white mt-0.5">
                          SuperiorXR Solutions
                        </span>
                        <span className="block text-xs text-blue-200 mt-1 leading-snug">
                          Explore the Business, Interactive Tech &amp; Security
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="code-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="pt-2"
                  >
                    <DeveloperConsole />
                  </motion.div>
                )}
              </div>

              {/* Action Buttons in Blue */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/25 transition-all inline-flex items-center gap-2"
                >
                  <span>Explore 5 Projects</span>
                  <span aria-hidden="true">&darr;</span>
                </a>

                {onOpenCertificates && (
                  <button
                    type="button"
                    onClick={onOpenCertificates}
                    className="px-4 py-2.5 bg-[#0e1a38] border border-blue-700 hover:border-cyan-400 text-cyan-300 text-sm font-bold rounded-lg shadow-md transition-all inline-flex items-center gap-2 group"
                  >
                    <FileCheck className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
                    <span>View 6 Verified Credentials</span>
                  </button>
                )}

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-blue-200 hover:text-white text-sm font-bold rounded-lg hover:bg-blue-900/50 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
