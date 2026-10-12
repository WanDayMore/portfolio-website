import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function PortfolioHome() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // If user navigated directly to /projects, /internship, /about, smooth-scroll to section
    const path = location.pathname.replace('/', '');
    if (path === 'projects') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'internship' || path === 'experience') {
      const el = document.getElementById('experience');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'about' || path === 'education') {
      const el = document.getElementById('education');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenResume={() => setResumeOpen(true)}
        />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Modern Minimal Footer */}
      <Footer />

      {/* Resume Modal */}
      {resumeOpen && (
        <ResumeModal 
          onClose={() => setResumeOpen(false)} 
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/projects" element={<PortfolioHome />} />
      <Route path="/internship" element={<PortfolioHome />} />
      <Route path="/experience" element={<PortfolioHome />} />
      <Route path="/about" element={<PortfolioHome />} />
      <Route path="/contact" element={<PortfolioHome />} />
      <Route path="*" element={<PortfolioHome />} />
    </Routes>
  );
}