import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, School, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 -z-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Formal Education &amp; Training
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed text-justify">
            Strong academic foundations spanning Information Engineering, computer science principles, discrete mathematics, and applied systems development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c1735]/90 backdrop-blur-md border border-blue-800/70 hover:border-cyan-400/80 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-900/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#091228] border border-blue-700/60 text-cyan-300">
                    <School className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-semibold text-cyan-300">
                      {edu.institution}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#070f24] border border-blue-800 text-xs font-mono font-bold text-cyan-300 self-start sm:self-auto shadow-inner">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {edu.details && (
                <p className="mt-3 text-xs sm:text-sm text-blue-100/90 leading-relaxed text-justify">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
