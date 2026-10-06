import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Brain, Code2, TrendingUp, Mail } from 'lucide-react';
import { CAREER_INTERESTS, PERSONAL_INFO } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  return (
    <section id="interests" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient color accents in blue */}
      <div className="absolute top-1/2 -left-20 -z-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Focus &amp; Specialization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Areas of Interest &amp; Target Roles
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed">
            Core professional specializations where I apply technical problem-solving, architectural rigor, and robust software engineering.
          </p>
        </div>

        {/* 3 High-Impact Colorful Cards in Blue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAREER_INTERESTS.map((item, idx) => {
            const isAI = idx === 0;
            const isFullStack = idx === 1;
            const isMarketing = idx === 2;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-cyan-500/15 ${
                  isAI
                    ? 'bg-gradient-to-b from-[#0f1f48] via-[#0c1735] to-[#081024] border-blue-600/60 hover:border-cyan-400'
                    : isFullStack
                    ? 'bg-gradient-to-b from-[#0e2746] via-[#0b1c35] to-[#081024] border-cyan-600/60 hover:border-sky-400'
                    : 'bg-gradient-to-b from-[#132352] via-[#0d1a3a] to-[#081024] border-indigo-600/60 hover:border-cyan-400'
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                        isAI
                          ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white'
                          : isFullStack
                          ? 'bg-gradient-to-tr from-cyan-600 to-blue-600 text-white'
                          : 'bg-gradient-to-tr from-blue-700 to-sky-500 text-white'
                      }`}
                    >
                      {isAI && <Brain className="w-5 h-5 text-cyan-200" />}
                      {isFullStack && <Code2 className="w-5 h-5 text-sky-200" />}
                      {isMarketing && <TrendingUp className="w-5 h-5 text-cyan-200" />}
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isAI
                          ? 'bg-blue-950 text-cyan-300 border-blue-600/60'
                          : isFullStack
                          ? 'bg-cyan-950 text-sky-300 border-cyan-600/60'
                          : 'bg-indigo-950 text-cyan-300 border-indigo-600/60'
                      }`}
                    >
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-blue-100 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Explicit Caption Highlight */}
                  <div className="mt-4 pt-3 border-t border-blue-900/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1 font-bold">
                      Key Capabilities &amp; Topics
                    </span>
                    <p className="text-xs font-bold leading-normal text-cyan-200">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs">
                  <span className="text-blue-300/80 font-medium">Ready to collaborate</span>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent(
                      `Inquiry regarding ${item.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Send inquiry regarding ${item.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900/70 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-blue-700/60 font-bold transition-all shadow-xs"
                    title={`Send inquiry regarding ${item.title}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

