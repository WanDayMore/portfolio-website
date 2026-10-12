import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, PROJECTS } from '../data/portfolioData';
import resumePdf from '../assets/resume.pdf';
import { 
  X, 
  Printer, 
  Copy, 
  Check,
  Download,
  ExternalLink
} from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handlePrint = () => {
    // Open resume.pdf in a new tab for native printing and full PDF fidelity
    const printWindow = window.open(resumePdf, '_blank');
    if (printWindow) {
      printWindow.focus();
    } else {
      window.location.href = resumePdf;
    }
  };

  const handleCopyText = () => {
    const text = `
ISAIAH QUEJADAS
Full-Stack Software Engineer
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}

EXECUTIVE SUMMARY
${PERSONAL_INFO.bio}

EDUCATION
${EDUCATION.institution}
${EDUCATION.degree}

WORK EXPERIENCE
Globe Telecom — Service Quality Assurance Intern (Apr 2026 – Jul 2026)
- Modernized legacy Looker Studio dashboards into dynamic AppScript web applications.
- Engineered ETL data pipelines ingesting disparate sources into Google BigQuery.
- Deployed internal operational tools used nationwide by customer service agents.

Mapúa Malayan Colleges Laguna — Student Assistant (Apr 2024 – Apr 2026)
- Digitized internal scholarship application workflows, transitioning manual paper processes into automated digital tracking.

PROJECTS
1. WizPool Express: Campus carpooling platform (React, .NET Core, PostgreSQL, WebSockets, Microsoft OAuth)
2. WASP Mobile: Smart city waste collection optimization via Hybrid PSO - Neural Network (Kotlin, IoT GPS/Ultrasonic, OpenStreetMap)
3. Owl Jungle Survival: 2D endless runner engine in Unity (C#)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/40 animate-fade-in overflow-y-auto print:p-0 print:bg-white cursor-pointer" onClick={onClose}>
      
      {/* Resume Container */}
      <div 
        className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-xl shadow-xl flex flex-col my-auto max-h-[92vh] overflow-hidden print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold text-stone-700">Resume / Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <a
              href={resumePdf}
              download="Isaiah_Quejadas_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors shadow-xs"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-colors"
              title="Open and Print Resume PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Open PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-stone-800 print:bg-white print:text-black print:p-8">
          
          {/* Resume Header */}
          <div className="border-b border-stone-200 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-stone-900 print:text-black tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-semibold text-indigo-700 print:text-slate-800 mt-1">
                  Full-Stack Software Engineer &amp; Systems Architect
                </p>
              </div>

              <div className="text-xs space-y-1 text-stone-500 print:text-slate-700 sm:text-right font-mono">
                <p>{PERSONAL_INFO.email}</p>
                <p>{PERSONAL_INFO.location}</p>
                <p>GitHub: github.com/WanDayMore</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 print:text-black border-b border-stone-200 pb-1 font-mono">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 print:text-black border-b border-stone-200 pb-1 font-mono">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
              <div>
                <strong className="text-stone-900 print:text-black block font-bold">{EDUCATION.institution}</strong>
                <span className="text-stone-600 print:text-slate-700">{EDUCATION.degree}</span>
              </div>
              <span className="text-xs text-stone-500 print:text-slate-800 font-mono">{EDUCATION.status}</span>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 print:text-black border-b border-stone-200 pb-1 font-mono">
              Work Experience &amp; Internships
            </h2>
            
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <strong className="text-stone-900 print:text-black font-bold">{exp.role}</strong> — <span className="text-indigo-700 print:text-slate-700">{exp.company}</span>
                  </div>
                  <span className="text-xs text-stone-500 print:text-slate-600 font-mono">{exp.period}</span>
                </div>
                <p className="text-xs text-stone-600 print:text-slate-700">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 print:text-slate-800 pl-1">
                  {exp.deliverables.map((del, dIdx) => (
                    <li key={dIdx}>
                      <strong>{del.title}:</strong> {del.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 print:text-black border-b border-stone-200 pb-1 font-mono">
              Key Engineering Projects
            </h2>
            
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <strong className="text-stone-900 print:text-black font-bold text-sm">{proj.title}</strong>
                  <span className="text-stone-500 print:text-slate-600 font-mono">
                    {proj.technologies.slice(0, 3).join(', ')}
                  </span>
                </div>
                <p className="text-stone-600 print:text-slate-800">
                  {proj.shortDesc}
                </p>
                {proj.highlights && (
                  <ul className="list-disc list-inside space-y-0.5 text-stone-500 print:text-slate-700 pl-1">
                    {proj.highlights.slice(0, 2).map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Skills Matrix */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 print:text-black border-b border-stone-200 pb-1 font-mono">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 print:text-slate-800">
              <p><strong>Languages:</strong> C#, Python, JavaScript (ES6+), TypeScript, Kotlin, Java, SQL</p>
              <p><strong>Frontend &amp; Backend:</strong> React, .NET Core, Node.js, REST APIs, WebSockets, Tailwind</p>
              <p><strong>Databases &amp; Cloud:</strong> PostgreSQL, Google Cloud, BigQuery, Google Apps Script</p>
              <p><strong>AI &amp; Systems:</strong> Neural Networks, Particle Swarm Optimization, IoT Sensors, Unity</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
