import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-blue-900/60 bg-gradient-to-b from-[#070c1a] via-[#091226] to-[#050914] text-blue-200 text-xs py-14 overflow-hidden">
      {/* Top radiant multi-stop blue gradient accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 shadow-sm shadow-cyan-400/50" />

      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 -z-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Identity & Subtitle in High-Contrast Blue */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-stone-950 font-extrabold flex items-center justify-center text-xs shadow-md shadow-cyan-500/20">
                SA
              </span>
              <span className="font-extrabold text-white text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-0.5">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold text-[11px] shadow-xs">
                {PERSONAL_INFO.title}
              </span>
              <span className="text-blue-400" aria-hidden="true">·</span>
              <span className="text-xs font-semibold text-blue-200">
                {PERSONAL_INFO.specialization}
              </span>
            </div>

            <p className="text-[11px] text-blue-300/80 pt-1 font-mono">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with clean, accessible engineering standards.
            </p>
          </div>

          {/* Social Links & Back to Top in Blue */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0e1a38] border border-blue-800 text-blue-200 hover:text-white hover:border-cyan-400 hover:bg-blue-900/60 transition-all shadow-xs"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span className="font-bold">GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0e1a38] border border-blue-800 text-blue-200 hover:text-white hover:border-cyan-400 hover:bg-blue-900/60 transition-all shadow-xs"
            >
              <Linkedin className="w-4 h-4 text-[#38bdf8]" />
              <span className="font-bold">LinkedIn</span>
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md shadow-blue-500/25"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#0e1a38] border border-blue-800 text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-blue-900 transition-all shadow-xs ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
