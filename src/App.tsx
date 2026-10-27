/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { InterestsSection } from './components/InterestsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [selectedDocUrl, setSelectedDocUrl] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenCertificates = (docUrl?: string) => {
    setSelectedDocUrl(docUrl);
    setIsCertModalOpen(true);
  };

  const handleCloseCertificates = () => {
    setIsCertModalOpen(false);
    setSelectedDocUrl(undefined);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#070c18] tech-blue-mesh text-slate-100 font-sans selection:bg-cyan-400 selection:text-stone-950 flex flex-col">
      {/* Sticky Top Navigation */}
      <Navbar onOpenCertificates={() => handleOpenCertificates()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCertificates={() => handleOpenCertificates()} />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <ExperienceSection
          onOpenDocument={(doc) => handleOpenCertificates(doc.url)}
        />
        <SkillsSection />
        <InterestsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={handleCloseCertificates}
        initialDocUrl={selectedDocUrl}
      />

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}
