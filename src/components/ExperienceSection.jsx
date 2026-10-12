import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  UserCheck, 
  Sparkles, 
  CheckCircle2,
  TrendingUp,
  Layers
} from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-stone-100/60 border-y border-stone-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Work Experience &amp; Internships
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Professional engineering experience across enterprise telecommunications and institutional academic operations.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:border-stone-300 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 4 cols: Company Branding & Role Metadata */}
                <div className="lg:col-span-4 space-y-5">
                  
                  {/* Photo or Logo thumbnail */}
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Metadata List */}
                  <div className="space-y-2 text-xs text-stone-600 font-normal">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
                      <span className="font-semibold text-stone-900">{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                      <span>{exp.location}</span>
                    </div>

                    {exp.department && (
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{exp.department}</span>
                      </div>
                    )}

                    {exp.supervisor && (
                      <div className="flex items-center gap-2 pt-1 border-t border-stone-100">
                        <UserCheck className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>Supervisor: <strong className="text-stone-800">{exp.supervisor}</strong></span>
                      </div>
                    )}
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-2">
                      Technologies Utilized:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right 8 cols: Detailed Deliverables & Impact */}
                <div className="lg:col-span-8 space-y-6">
                  
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-stone-100 text-stone-700 border border-stone-200">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-indigo-700 mt-1">
                      {exp.company} &bull; {exp.department}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed mt-2.5">
                      {exp.description}
                    </p>
                  </div>

                  {/* Key Deliverables Grid */}
                  <div className="space-y-3 pt-2 border-t border-stone-100">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Key Deliverables &amp; High-Impact Contributions
                    </h4>

                    <div className="grid grid-cols-1 gap-3">
                      {exp.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3.5 rounded-lg bg-stone-50 border border-stone-200"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <h5 className="text-sm font-semibold text-stone-900">
                              {item.title}
                            </h5>
                          </div>
                          <p className="text-xs text-stone-600 leading-relaxed pl-6">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
