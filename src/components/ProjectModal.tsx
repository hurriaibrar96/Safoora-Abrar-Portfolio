import React from 'react';
import { X, ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isSuperiorXR = project.id === 'superior-xr';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040814]/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="bg-[#0c1735] w-full max-w-2xl rounded-2xl border border-blue-700/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blue-800 bg-[#081024]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                {project.type}
              </span>
              {isSuperiorXR && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400/50">
                  Explore the Business
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-black text-white mt-0.5">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-blue-300 hover:text-white hover:bg-blue-900/60 rounded-lg transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-bold">
              Overview &amp; Purpose
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed font-normal text-justify">
              {project.longDescription || project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5 font-bold">
              Key Engineering Features
            </h3>
            <ul className="space-y-2 text-xs text-blue-200">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-justify">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-bold">
              Technology Stack
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {project.technologies.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded-md bg-[#13234a] border border-blue-700/60 text-cyan-200 font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#0e1d44] hover:bg-blue-600/40 border border-blue-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>View Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all shadow-md shadow-blue-500/25"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span>{isSuperiorXR ? 'Explore the Business (SuperiorXR Solutions)' : 'Visit Live Project'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-blue-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-blue-900/40 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
