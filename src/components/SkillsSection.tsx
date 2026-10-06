import React from 'react';
import { motion } from 'motion/react';
import { Brain, Code, Server, Database, Cpu, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ai':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'architecture':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'frontend':
        return <Code className="w-5 h-5 text-sky-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 -z-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed">
            A comprehensive matrix of programming languages, machine learning frameworks, full-stack systems, and software engineering tools.
          </p>
        </div>

        {/* Detailed Skills Grid in Blue */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#0c1735]/90 backdrop-blur-md rounded-2xl border border-blue-800/70 p-6 flex flex-col justify-between shadow-xl hover:border-cyan-400/80 hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />

              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="p-2 rounded-xl bg-[#091228] shadow-inner border border-blue-700/60">
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-md border border-blue-600/50 bg-blue-950 text-cyan-300">
                    Stack 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-xs text-blue-200/80 leading-relaxed font-normal">
                  {cat.description}
                </p>
              </div>

              {/* Skills List with tags in Blue */}
              <div className="mt-5 pt-4 border-t border-blue-900/60">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                  Core Technologies ({cat.skills.length})
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#13234a] border border-blue-700/60 text-cyan-100 hover:text-white hover:border-cyan-400 transition-all duration-150 shadow-xs hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
