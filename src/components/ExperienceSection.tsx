import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, Award, FileCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Experience, EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenDocument?: (doc: { title: string; url: string; badge?: string }) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenDocument }) => {
  const getExperienceTech = (id: string) => {
    switch (id) {
      case 'nexasecure':
        return ['Cybersecurity Standards', 'Modular Scripting', 'Code Auditing', 'Remote Engineering'];
      case 'khizex':
        return ['Full-Stack Development', 'React', 'REST APIs', 'UI Components', 'QA & Testing'];
      case 'alkhidmat':
        return ['Project Coordination', 'Community Outreach', 'Logistics', 'Leadership'];
      default:
        return [];
    }
  };

  return (
    <section id="experience" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 -z-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Industry &amp; Field Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Verified Professional Experience
          </h2>
          <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed text-justify">
            Practical development internships and volunteer engagements backed by verifiable letters, completion certificates, and recommendation documents.
          </p>
        </div>

        {/* Detailed Experience Timeline Cards in Blue */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-indigo-600 before:z-0">
          {EXPERIENCES.map((exp: Experience, index: number) => {
            const appliedTech = getExperienceTech(exp.id);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="relative z-10 pl-10 sm:pl-16"
              >
                {/* Glowing Node on Timeline in Blue */}
                <div className="absolute left-2 sm:left-5 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#070c18] bg-cyan-400 shadow-lg shadow-cyan-400/50 ring-4 ring-blue-900/60" />

                <div className="bg-[#0c1735]/90 backdrop-blur-md rounded-2xl border border-blue-800/70 p-6 sm:p-8 shadow-xl hover:border-cyan-400/80 hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-blue-900/60 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-extrabold text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 px-2.5 py-0.5 rounded-full shadow-xs">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Verified</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-cyan-300 mt-1">
                        <Building2 className="w-4 h-4 text-cyan-400" />
                        <span>{exp.company}</span>
                        <span className="text-blue-600" aria-hidden="true">·</span>
                        <span className="text-xs font-normal text-blue-200">{exp.location}</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5 shrink-0 bg-[#070f24] px-3 py-1.5 rounded-lg border border-blue-800 shadow-inner">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description & Responsibilities with text-justify */}
                  <div className="mt-4">
                    <p className="text-sm text-blue-100 leading-relaxed font-normal text-justify">
                      {exp.description}
                    </p>

                    <div className="mt-3.5">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                        Key Responsibilities &amp; Achievements
                      </span>
                      <ul className="space-y-1.5 text-xs text-blue-200">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold select-none" aria-hidden="true">&bull;</span>
                            <span className="text-justify">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applied Technologies Pill Matrix in Blue */}
                    {appliedTech.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-blue-900/60">
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                          Applied Tools &amp; Methods
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          {appliedTech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md bg-[#13234a] text-cyan-200 font-semibold border border-blue-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Verified Documents / Certificates */}
                  {exp.documents.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-blue-900/60 bg-[#081024]/80 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 sm:p-6 rounded-b-2xl border-b border-blue-900/40">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider font-bold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>Official Credentials &amp; Letters ({exp.documents.length})</span>
                        </span>
                        <span className="text-[10px] text-blue-300 font-mono">Issued &amp; Certified</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        {exp.documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#0e1d44] hover:bg-blue-600/40 border border-blue-700 hover:border-cyan-400 transition-all shadow-md group"
                              title={`Open ${doc.title} in new tab`}
                            >
                              <FileCheck className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:scale-110" />
                              <span>{doc.title}</span>
                              <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                            </a>

                            {onOpenDocument && (
                              <button
                                type="button"
                                onClick={() => onOpenDocument(doc)}
                                className="px-2.5 py-2 text-blue-300 hover:text-white hover:bg-blue-900/40 rounded-lg text-[11px] font-bold border border-transparent hover:border-blue-700 transition-colors"
                                title="Quick preview document in modal"
                              >
                                Preview
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
