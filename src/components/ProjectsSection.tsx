import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Boxes,
  ShoppingCart,
  Smartphone,
  Navigation,
  CheckSquare,
  Box,
  Layers,
  Sparkles
} from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ai' | 'mobile'>('all');
  const [activeTabPerCard, setActiveTabPerCard] = useState<Record<string, 'preview' | 'specs'>>({});

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case '3d-model-showcase':
        return <Boxes className="w-4 h-4 text-cyan-400" />;
      case 'freshcart':
        return <ShoppingCart className="w-4 h-4 text-emerald-400" />;
      case 'superior-xr':
        return <Smartphone className="w-4 h-4 text-sky-400" />;
      case 'campus-navigation':
        return <Navigation className="w-4 h-4 text-amber-400" />;
      case 'orbit-habit-tracker':
        return <CheckSquare className="w-4 h-4 text-rose-400" />;
      default:
        return <Box className="w-4 h-4 text-blue-400" />;
    }
  };

  const getProjectSpecs = (id: string) => {
    switch (id) {
      case '3d-model-showcase':
        return {
          architecture: 'Client-Side WebGL 3D Canvas',
          renderEngine: 'Three.js v0.160+ / OrbitControls',
          deployment: 'Vercel Edge Network',
          performance: 'Targeted 60 FPS fluid rendering'
        };
      case 'freshcart':
        return {
          architecture: 'Decoupled Client-Server REST Model',
          frontend: 'React 19, Context API, Tailwind CSS',
          backend: 'Node.js, Express REST endpoints',
          deployment: 'Vercel Deployment'
        };
      case 'superior-xr':
        return {
          architecture: 'Native Handheld XR Architecture',
          runtime: 'Android APK / Spatial SDKs',
          inputTracking: 'Touch Gesture 6DoF Anchoring',
          optimization: 'Lightweight battery-conscious build'
        };
      case 'campus-navigation':
        return {
          architecture: 'Interactive Vector Wayfinding App',
          routing: 'Client-Side Graph / Coordinate Mapping',
          rendering: 'Responsive Interactive Map Layer',
          deployment: 'Vercel Deployment'
        };
      case 'orbit-habit-tracker':
        return {
          architecture: 'Offline-First Progressive Web App',
          state: 'Deterministic LocalStorage engine',
          analytics: 'Streak calculation matrix',
          deployment: 'Vercel Deployment'
        };
      default:
        return {
          architecture: 'Modular Web Application',
          deployment: 'Production Verified'
        };
    }
  };

  const toggleCardTab = (projectId: string, tab: 'preview' | 'specs') => {
    setActiveTabPerCard((prev) => ({
      ...prev,
      [projectId]: tab
    }));
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 border-b border-blue-900/40 tech-grid-pattern overflow-hidden">
      {/* Background ambient lighting in rich shades of blue */}
      <div className="absolute top-1/4 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="font-bold">Engineering Portfolio &amp; Live Demos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Featured Software Engineering Projects
            </h2>
            <p className="mt-2 text-sm text-blue-200/80 max-w-2xl leading-relaxed">
              Explore interactive visual simulations, production repositories, and live deployed web architectures below.
            </p>
          </div>

          {/* Category Filter Pills in Professional Blue */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0e1a38] rounded-xl border border-blue-800/80 shadow-md self-start md:self-auto shrink-0">
            {[
              { id: 'all', label: `All (${PROJECTS.length})` },
              { id: 'ai', label: '3D & AI' },
              { id: 'web', label: 'Web Apps' },
              { id: 'mobile', label: 'Mobile & XR' }
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`relative px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30'
                      : 'text-blue-300 hover:text-white hover:bg-blue-900/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isWide = index === 0 && activeFilter === 'all';
              const cardTab = activeTabPerCard[project.id] || 'preview';
              const specs = getProjectSpecs(project.id);

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`relative bg-[#0d1836]/90 backdrop-blur-md rounded-2xl border border-blue-800/60 shadow-xl hover:border-cyan-400/80 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    isWide ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Card Browser / Terminal Frame Header in Blue */}
                  <div className="px-4 py-2.5 bg-[#091126] border-b border-blue-900/60 flex items-center justify-between gap-3 text-xs">
                    {/* Window dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block shadow-xs"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block shadow-xs"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block shadow-xs"></span>
                    </div>

                    {/* URL Bar */}
                    <div className="flex-1 max-w-xs mx-auto px-3 py-0.5 rounded-md bg-[#0e1c40] border border-blue-700/50 text-[11px] font-mono text-cyan-300 truncate text-center shadow-inner">
                      {project.liveUrl ? (
                        <span className="font-semibold">{project.liveUrl.replace('https://', '')}</span>
                      ) : (
                        <span className="text-blue-300">github.com/.../{project.id}</span>
                      )}
                    </div>

                    {/* Live status badge */}
                    {project.liveUrl ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        LIVE
                      </span>
                    ) : (
                      <span className="text-[10px] text-cyan-300 font-mono font-bold bg-blue-950 px-2 py-0.5 rounded-full border border-blue-700">
                        APK
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Bar: Icon + Category + Tab switcher */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-blue-950/80 border border-blue-700/60">
                            {getProjectIcon(project.id)}
                          </div>
                          <span className="font-mono text-cyan-300 uppercase tracking-wider text-[11px] font-bold">
                            {project.type}
                          </span>
                        </div>

                        {/* Interactive Preview vs Architecture Tab */}
                        <div className="flex items-center gap-1 bg-blue-950/80 p-0.5 rounded-md border border-blue-700/50 text-[10px] font-mono font-semibold">
                          <button
                            type="button"
                            onClick={() => toggleCardTab(project.id, 'preview')}
                            className={`px-2 py-0.5 rounded transition-colors ${
                              cardTab === 'preview'
                                ? 'bg-blue-600 text-white font-bold shadow-xs'
                                : 'text-blue-300 hover:text-white'
                            }`}
                          >
                            Animation
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleCardTab(project.id, 'specs')}
                            className={`px-2 py-0.5 rounded transition-colors ${
                              cardTab === 'specs'
                                ? 'bg-blue-600 text-white font-bold shadow-xs'
                                : 'text-blue-300 hover:text-white'
                            }`}
                          >
                            Architecture
                          </button>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Interactive Related Animation Preview Inside the Card! */}
                      {cardTab === 'preview' ? (
                        <div className="mt-4 mb-4">
                          <ProjectCardPreview projectId={project.id} />
                        </div>
                      ) : (
                        <div className="mt-4 mb-4 p-3.5 rounded-xl bg-[#091228] border border-blue-800/80 font-mono text-xs space-y-2">
                          <div className="text-[10px] text-cyan-400 uppercase tracking-wider font-bold">
                            Technical Architecture Spec
                          </div>
                          {Object.entries(specs).map(([key, val]) => (
                            <div key={key} className="flex items-start justify-between gap-2 border-b border-blue-900/60 pb-1.5 last:border-b-0 last:pb-0">
                              <span className="text-blue-300 capitalize">{key}:</span>
                              <span className="text-white font-semibold text-right">{val}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm text-blue-100/90 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-3.5 pt-3 border-t border-blue-900/60">
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1.5 font-bold">
                          Key Features
                        </span>
                        <ul className="space-y-1 text-xs text-blue-200/90">
                          {project.highlights.slice(0, 3).map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-cyan-400 font-bold select-none" aria-hidden="true">&bull;</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology Pills */}
                      <div className="mt-4 pt-3 border-t border-blue-900/60">
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md bg-[#13234a] text-cyan-200 font-semibold border border-blue-700/60 hover:border-cyan-400 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* External Actions in Blue */}
                    <div className="mt-6 pt-4 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-blue-950/90 hover:bg-blue-900 border border-blue-700 rounded-lg transition-colors shadow-xs"
                          title={`View repository for ${project.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View Code</span>
                          <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                        </a>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all shadow-md shadow-blue-500/25"
                            title={`Open live app for ${project.title}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live App</span>
                            <ArrowUpRight className="w-3 h-3 text-white" />
                          </a>
                        )}
                      </div>

                      {onSelectProject && (
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Full Details &rarr;
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* GitHub Banner in rich deep navy/sapphire */}
        <div className="mt-10 p-6 rounded-2xl border border-blue-700/60 bg-gradient-to-r from-[#0d1a38] via-[#102454] to-[#0c1836] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-600/30 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-500/40 shadow-inner">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Explore More Repositories on GitHub
              </p>
              <p className="text-xs text-blue-200/90 mt-0.5">
                Continuous code commits, Python AI scripts, and web development repositories.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/hurriaibrar96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-950 bg-cyan-400 hover:bg-cyan-300 px-4 py-2.5 rounded-lg transition-all shadow-md shadow-cyan-400/20 shrink-0"
          >
            <span>github.com/hurriaibrar96</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-950" />
          </a>
        </div>
      </div>
    </section>
  );
};
