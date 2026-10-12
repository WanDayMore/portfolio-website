import React, { useState } from 'react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Copy, 
  Check, 
  MapPin, 
  Code2, 
  Terminal, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="overview" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Inline Availability Status (Grounded, not floating) */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-600 bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-medium text-stone-800">Available for Full-Stack Roles</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-500">{PERSONAL_INFO.timezone} (PHT)</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
                Isaiah Quejadas
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-stone-700 tracking-tight">
                Software Engineer &amp; Full-Stack Builder
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
              B.S. in Computer Science with <span className="text-stone-900 font-semibold">6+ years of coding experience</span>. Specializing in high-performance web systems (<span className="text-stone-900 font-medium">React</span> &amp; <span className="text-stone-900 font-medium">.NET Core</span>), real-time architectures, distributed pipelines, and machine learning.
            </p>

            {/* Location & Affiliation */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-stone-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-stone-400" />
                Ex-Globe Telecom QA Intern
              </span>
              <span className="text-stone-300">•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-stone-400" />
                MMCL Computer Science
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 transition-colors shadow-xs w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-stone-500" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors w-full sm:w-auto"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs text-stone-400 font-medium">Links:</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-stone-500 hover:text-stone-900 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="text-stone-500 hover:text-stone-900 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Solid White Profile Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              {/* Card Container */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-6">
                
                {/* Image + Header row */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-stone-200 shrink-0 bg-stone-100">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-stone-600">
                      Full-Stack Software Engineer
                    </p>
                    <p className="text-xs text-stone-400">
                      Mapúa Malayan Colleges Laguna
                    </p>
                    <div className="pt-1">
                      <span className="inline-flex items-center text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Available for Work
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technical Stack Highlights */}
                <div className="space-y-2 pt-3 border-t border-stone-100">
                  <div className="flex justify-between items-center text-xs text-stone-500">
                    <span className="font-medium text-stone-700">Core Focus</span>
                    <span className="text-xs text-stone-500 font-mono">Full-Stack / Distributed</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      'React',
                      '.NET Core',
                      'PostgreSQL',
                      'WebSockets',
                      'Python',
                      'Kotlin / IoT',
                      'BigQuery'
                    ].map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architectural Philosophy Card */}
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-600 leading-relaxed">
                  <span className="text-stone-900 font-mono text-xs uppercase tracking-wider font-semibold block mb-1">
                    Engineering Principle
                  </span>
                  "Building reliable, performant software that bridges complex backends with fluid, high-fidelity user experiences."
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Metrics Strip */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between shadow-xs hover:border-stone-300 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1 block tracking-tight">
                  {metric.value}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-2 font-normal">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
