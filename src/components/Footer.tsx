import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050b18] border-t border-blue-900/60 py-12 text-blue-200 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-950">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-base font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-xs font-semibold text-cyan-400">
                Software Developer
              </span>
              <span className="text-blue-600 hidden sm:inline" aria-hidden="true">&bull;</span>
              <span className="text-xs font-semibold text-cyan-400">
                GBOB Specialist
              </span>
            </div>
            <span className="text-[11px] text-blue-300/80 mt-1">
              BS Information Engineering &amp; Technology · Superior University
            </span>
          </div>

          {/* Quick External Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={PERSONAL_INFO.businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-white transition-colors inline-flex items-center gap-1 font-bold"
            >
              <span>SuperiorXR Solutions — Explore the Business</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>

            <span className="text-blue-800" aria-hidden="true">&bull;</span>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <span className="text-blue-800" aria-hidden="true">&bull;</span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <span className="text-blue-800" aria-hidden="true">&bull;</span>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Email</span>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0c1836] border border-blue-700/60 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors shadow-sm flex items-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-bold">Top</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-blue-300/70 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Audited &amp; Hardened for Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
