import React from 'react';
import { EDUCATION, PERSONAL_INFO } from '../data/portfolioData';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Compass, 
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Education &amp; Background
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Grounded in rigorous computer science principles and software engineering disciplines.
          </p>
        </div>

        {/* 2-Column Layout: Academic Card & About Me Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: MMCL Academic Dossier (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Institution Header with Crest */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-lg bg-white p-1.5 shrink-0 border border-stone-200 flex items-center justify-center shadow-xs">
                    <img 
                      src={EDUCATION.logo} 
                      alt="MMCL Crest" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Degree
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                      {EDUCATION.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      {EDUCATION.institution}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 self-start sm:self-auto">
                  {EDUCATION.status}
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Academic Focus &amp; Highlights
                </h4>
                <ul className="space-y-2">
                  {EDUCATION.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework Pills */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Core Engineering Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-stone-100 text-stone-700 border border-stone-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom credential bar */}
            <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 flex items-center justify-between">
              <span>Department of Computer Science</span>
              <span className="font-mono text-stone-600">Laguna, Philippines</span>
            </div>

          </div>

          {/* Right Column: About Me Bio & Engineering Philosophy (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                <div className="p-2 rounded-lg bg-stone-100 border border-stone-200 text-stone-700">
                  <Compass className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                    Behind the Code
                  </h3>
                  <span className="text-xs text-stone-500">
                    Isaiah's Story &amp; Vision
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                <p>
                  My journey started over <strong className="text-stone-900">6 years ago</strong> experimenting with game development and interactive systems. That fascination quickly evolved into architecting scalable web platforms, distributed systems, and modern mobile apps.
                </p>
                <p>
                  Throughout my academic and professional tenure at <strong className="text-stone-900">Mapúa Malayan Colleges Laguna</strong> and <strong className="text-stone-900">Globe Telecom</strong>, I learned that great software isn't just about elegant code—it's about empathy for end users, reliability in production, and measurable impact.
                </p>
                <p>
                  Today, I focus on quick deployments of <strong className="text-stone-900"> applications</strong> using AI assisted coding, designing resilient schemas, and applying practical AI and optimization algorithms to solve tangible problems.
                </p>
              </div>

              {/* Core Tenets */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                  What I Value Most
                </span>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span><strong>High Performance:</strong> Fast load times &amp; minimal latency.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-stone-400" />
                    <span><strong>Robust Architecture:</strong> Clean APIs, schemas, and fault tolerance.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span><strong>Continuous Growth:</strong> Rapidly mastering modern tooling &amp; AI workflows.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
