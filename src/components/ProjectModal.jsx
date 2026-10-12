import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { GithubIcon } from './Icons';

// Helper to parse standard and short YouTube URLs into privacy-respecting embed links
const getYouTubeEmbedUrl = (url) => {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  // Match youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID, etc.
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = trimmed.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube-nocookie.com/embed/${match[2]}`;
  }
  return null;
};

export default function ProjectModal({ project, onClose }) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  const currentImage = project.images?.[selectedImgIndex] || { url: project.thumbnail, title: project.title };
  const embedUrl = getYouTubeEmbedUrl(project.videoLink);

  const handleNext = () => {
    if (project.images?.length > 1) {
      setSelectedImgIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePrev = () => {
    if (project.images?.length > 1) {
      setSelectedImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/40 animate-fade-in overflow-y-auto cursor-pointer"
      onClick={onClose}
    >
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden flex flex-col my-auto max-h-[92vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
              {project.badge || project.category}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Top-Most Video Demo Section (if videoLink exists) */}
          {embedUrl && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
                  Video Demonstration &amp; Walkthrough
                </span>
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-indigo-600 hover:text-indigo-800 hover:underline"
                >
                  Watch on YouTube
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-stone-200 bg-stone-950 shadow-xs">
                <iframe
                  src={embedUrl}
                  title={`${project.title} Video Walkthrough`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Gallery Viewport */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-3">
              <div className="relative w-full h-64 sm:h-96 bg-stone-100 rounded-lg overflow-hidden border border-stone-200 flex items-center justify-center group">
                <img
                  src={currentImage.url}
                  alt={currentImage.title}
                  className="w-full h-full object-contain p-2"
                />

                {/* Left/Right Controls */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-stone-800 border border-stone-200 hover:bg-indigo-600 hover:text-white transition-colors shadow-md"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-stone-800 border border-stone-200 hover:bg-indigo-600 hover:text-white transition-colors shadow-md"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Caption pill */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center px-3 py-1.5 rounded-lg bg-white/95 border border-stone-200 text-xs text-stone-700 shadow-xs">
                  <span className="font-medium text-stone-900">{currentImage.title}</span>
                  <span className="text-stone-500 font-mono">
                    {selectedImgIndex + 1} / {project.images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        selectedImgIndex === idx
                          ? 'border-indigo-600 ring-2 ring-indigo-600/20'
                          : 'border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Left 2 cols: Overview & Highlights */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5 font-mono">
                  System Overview
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {project.architecture && (
                <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    <span>System Architecture</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-mono">
                    {project.architecture}
                  </p>
                </div>
              )}

              {project.highlights && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5 font-mono">
                    Technical Highlights &amp; Accomplishments
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right col: Stack & Links */}
            <div className="space-y-6 md:border-l md:border-stone-200 md:pl-6">
              
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 font-mono">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-stone-100">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1 font-mono">
                  Project Links
                </h3>
                
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Inspect Repository &amp; Code
                  </a>
                )}

                {project.demoUrl && project.demoUrl !== project.codeUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 transition-colors shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live System Deployment
                  </a>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
