import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Layout, Server, Database, Code, CheckCircle, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'frontend':
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'backend':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'architecture':
        return <Code className="w-4 h-4 text-sky-400" />;
      default:
        return <Cpu className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -z-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed text-justify">
            Core toolset encompassing frontend and backend engineering, scalable system architecture, and GBOB outreach methodologies.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#0c1735]/90 backdrop-blur-md border border-blue-800/70 hover:border-cyan-400/80 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-[#091228] border border-blue-700/60">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-blue-200/90 leading-relaxed mb-4 text-justify">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#13234a] border border-blue-700/60 text-cyan-200 text-xs font-semibold hover:border-cyan-400 transition-colors"
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
