import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  Eye, 
  Images, 
  Code 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack & Web', 'Mobile & AI / IoT', 'Game & Interactive'];

  const flagshipProjects = PROJECTS.filter(p => p.featured);
  const secondaryProjects = PROJECTS.filter(p => !p.featured);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl">
              Production systems and applications designed for real-world utility, scalable backend architectures, and clean developer ergonomics.
            </p>
          </div>

          {/* Filter Tabs (Clean inline tabs, not floating pills) */}
          <div className="flex flex-wrap gap-1.5 bg-stone-100 p-1 rounded-lg border border-stone-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs border border-stone-200/80 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {activeCategory === 'All' ? (
          <div className="space-y-16">
            {/* Primary Tier: Flagship Engineering Systems */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  Primary Production &amp; Distributed Systems
                </span>
                <span className="text-xs text-stone-400 font-mono">2 Flagship Systems</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {flagshipProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl overflow-hidden flex flex-col justify-between border border-stone-200 shadow-xs hover:border-stone-300 transition-colors group"
                  >
                    {/* Card Thumbnail / Preview (Clean, NO floating chips) */}
                    <div 
                      className="relative h-60 sm:h-64 bg-stone-100 overflow-hidden cursor-pointer border-b border-stone-200"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                      <div className="space-y-2">
                        {/* Inline Grounded Metadata (replaces floating status chip) */}
                        <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                          <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                            Flagship
                          </span>
                          <span>•</span>
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.badge}</span>
                        </div>

                        <h3 
                          className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight hover:text-indigo-600 transition-colors cursor-pointer pt-1"
                          onClick={() => setSelectedProject(project)}
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {project.shortDesc}
                        </p>
                      </div>

                      {/* Tech Badges & Actions */}
                      <div className="space-y-4 pt-3 border-t border-stone-100">
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

                        <div className="flex items-center justify-between pt-1">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 group/btn"
                          >
                            <span>Inspect Architecture &amp; Demo</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </button>

                          <div className="flex items-center gap-2">
                            {project.codeUrl && (
                              <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors border border-stone-200"
                                title="View Repository"
                              >
                                <GithubIcon className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subordinate Tier: Additional & Exploratory Projects */}
            <div className="space-y-4 pt-6 border-t border-stone-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
                    Auxiliary &amp; Experimental Work
                  </span>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                    Interactive Systems &amp; Game Engine
                  </h3>
                </div>
                <span className="text-xs text-stone-400 font-mono">Secondary Project</span>
              </div>

              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl bg-white border border-stone-200 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-stone-300 transition-colors shadow-xs group"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-grow">
                    <div 
                      className="w-full sm:w-36 h-24 rounded-lg bg-stone-100 overflow-hidden shrink-0 cursor-pointer border border-stone-200"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                        <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded border border-stone-200">
                          {project.category}
                        </span>
                        <span>•</span>
                        <span>{project.badge}</span>
                      </div>
                      <h4 
                        className="text-base font-bold text-stone-900 tracking-tight hover:text-indigo-600 transition-colors cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title}
                      </h4>
                      <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
                        {project.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2 rounded-lg text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1.5 border border-stone-200"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors border border-stone-200"
                        title="View Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Filtered View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden flex flex-col justify-between border border-stone-200 shadow-xs hover:border-stone-300 transition-colors group"
              >
                {/* Card Thumbnail / Preview (Clean, NO floating chips) */}
                <div 
                  className="relative h-52 bg-stone-100 overflow-hidden cursor-pointer border-b border-stone-200"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                      {project.featured ? (
                        <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                          Flagship
                        </span>
                      ) : (
                        <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded border border-stone-200">
                          Auxiliary
                        </span>
                      )}
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 
                      className="text-lg font-bold text-stone-900 tracking-tight hover:text-indigo-600 transition-colors cursor-pointer pt-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="space-y-3 pt-2 border-t border-stone-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors border border-stone-200"
                            title="View Source"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox / Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
