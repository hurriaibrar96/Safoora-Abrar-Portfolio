import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed">
            Formal foundations in Information Engineering, Software Engineering principles, and analytical sciences.
          </p>
        </div>

        {/* Timeline list in Blue */}
        <div className="space-y-5">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#0c1735]/90 backdrop-blur-md rounded-2xl border border-blue-800/70 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-start justify-between gap-4 shadow-xl hover:border-cyan-400/80 transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold">
                  <div className="w-7 h-7 rounded-lg bg-blue-900/80 border border-blue-600/50 flex items-center justify-center text-cyan-300 shadow-inner">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-cyan-400">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-extrabold text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-bold text-cyan-300">
                  {edu.institution}
                </p>
                {edu.details && (
                  <p className="text-xs text-blue-200/90 max-w-2xl mt-1 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 shrink-0 bg-[#070f24] px-3.5 py-1.5 rounded-lg border border-blue-800 shadow-inner self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
