import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Terminal, 
  Sparkles 
} from 'lucide-react';

export default function SkillsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-indigo-600" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-600" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600" />;
      default: return <Wrench className="w-5 h-5 text-stone-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Technical Proficiencies
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Core technical toolkit developed through 6+ years of computer science coursework, production systems, and enterprise internships.
          </p>
        </div>

        {/* Grid of Solid Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between shadow-xs hover:border-stone-300 transition-colors"
            >
              
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                  <div className="p-2 rounded-lg bg-stone-100 border border-stone-200 shrink-0">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-xs text-stone-500 font-mono">
                      {category.skills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Simple Skills List */}
                <ul className="space-y-2 pt-1">
                  {category.skills.map((skill, sIdx) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name;
                    return (
                      <li
                        key={sIdx}
                        className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 font-medium hover:bg-stone-100 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                        <span>{skillName}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-stone-900 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              Engineering Standard
            </h4>
            <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
              Writing clean, modular, and maintainable code with strict attention to database normalization, API latency, cross-browser compatibility, and fault-tolerant system design.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
              Clean Architecture
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
              CI/CD &amp; Testing
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
