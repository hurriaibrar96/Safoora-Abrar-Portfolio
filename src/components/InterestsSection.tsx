import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Terminal, Compass, ArrowRight } from 'lucide-react';
import { CAREER_INTERESTS } from '../data/portfolioData';

export const InterestsSection: React.FC = () => {
  const getInterestIcon = (title: string) => {
    if (title.toLowerCase().includes('gbob')) {
      return <Globe className="w-5 h-5 text-cyan-400" />;
    }
    if (title.toLowerCase().includes('software')) {
      return <Terminal className="w-5 h-5 text-blue-400" />;
    }
    return <Compass className="w-5 h-5 text-violet-400" />;
  };

  return (
    <section id="interests" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -z-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Strategic Direction &amp; Core Interests</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Key Areas of Specialization &amp; Focus
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed text-justify">
            Core domains driving my academic research, technical development, and digital outreach services.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAREER_INTERESTS.map((interest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#0c1735]/90 backdrop-blur-md border border-blue-800/70 hover:border-cyan-400/80 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-[#091228] border border-blue-700/60 shadow-xs">
                    {getInterestIcon(interest.title)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${interest.badge}`}>
                    {interest.tagline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {interest.title}
                </h3>

                <p className="text-sm text-blue-100/90 leading-relaxed font-normal text-justify">
                  {interest.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-blue-900/60 text-xs font-mono text-cyan-300 flex items-center justify-between">
                <span className="truncate pr-2 text-blue-200 text-[11px] font-semibold">{interest.caption}</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
