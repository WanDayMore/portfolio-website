import React from 'react';

export default function InternshipPage() {
  return (
    <div className="min-h-screen w-full bg-slate-400 text-slate-800 font-mono relative overflow-x-hidden selection:bg-[#004b8d] selection:text-white">
      {/* Background Pattern Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('src/assets/images/img-globe-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8">
        
        {/* Header / Hero Section */}
        <header className="bg-white border-4 border-[#004b8d] p-6 shadow-[6px_6px_0px_0px_#004b8d]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b-2 border-dashed border-slate-300 pb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#004b8d] tracking-tight mt-1">
                Globe Telecom Internship
              </h1>
            </div>

          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
            <div className="bg-slate-100 p-3 border-2 border-slate-300">
              <span className="block text-slate-500 uppercase text-[10px]">Role / Dept</span>
              <span className="text-slate-900">Service Quality Assurance Intern / Network Tech Group</span>
            </div>
            <div className="bg-slate-100 p-3 border-2 border-slate-300">
              <span className="block text-slate-500 uppercase text-[10px]">Duration</span>
              <span className="text-slate-900">April 14 2026 - July 27 2026</span>
            </div>
            <div className="bg-slate-100 p-3 border-2 border-slate-300">
              <span className="block text-slate-500 uppercase text-[10px]">Supervisor</span>
              <span className="text-slate-900">Jose Mari Garing</span>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section className="bg-white border-4 border-[#004b8d] p-6 shadow-[6px_6px_0px_0px_#004b8d]">
          <h2 className="text-lg font-bold text-[#004b8d] mb-3 flex items-center gap-2">
            <span className="text-[#00a3e0]">&gt;</span> OVERVIEW &amp; OBJECTIVES
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Contributed to modernizing internal microservices and enhancing frontend performance for core operations. Collaborated across cross-functional Agile teams to optimize infrastructure deployment pipelines.
          </p>
        </section>

        {/* Key Contributions & Projects */}
        <section className="bg-white border-4 border-[#004b8d] p-6 shadow-[6px_6px_0px_0px_#004b8d]">
          <h2 className="text-lg font-bold text-[#004b8d] mb-4 flex items-center gap-2">
            <span className="text-[#00a3e0]">&gt;</span> KEY_DELIVERABLES
          </h2>
          
          <ul className="space-y-4 text-sm">
            <li className="p-3 bg-slate-50 border-2 border-slate-200">
              <strong className="text-[#004b8d] block mb-1">Dashboard Optimization</strong>
              <p className="text-xs text-slate-600">Replaced legacy Looker Studio dashboards, with much more functional and editable Appscript deployable websites.</p>
            </li>
            <li className="p-3 bg-slate-50 border-2 border-slate-200">
              <strong className="text-[#004b8d] block mb-1">Data Engineering</strong>
              <p className="text-xs text-slate-600">Built scalable data pipelines that take from multiple outside sources and join them to a single processed output.</p>
            </li>
            <li className="p-3 bg-slate-50 border-2 border-slate-200">
              <strong className="text-[#004b8d] block mb-1">Internal Software Deployment</strong>
              <p className="text-xs text-slate-600">Built internal tools that are expected to be used by every Globe Telecom customer service agents nationwide.</p>
            </li>
          </ul>
        </section>

        {/* Tech Stack & Skills */}
        <section className="bg-white border-4 border-[#004b8d] p-6 shadow-[6px_6px_0px_0px_#004b8d]">
          <h2 className="text-lg font-bold text-[#004b8d] mb-4 flex items-center gap-2">
            <span className="text-[#00a3e0]">&gt;</span> TECH_STACK_UTILIZED
          </h2>
          <div className="flex flex-wrap gap-2 text-xs font-bold">
            {['Google Cloud', 'Javascript', 'Python', 'SQL BigQuery', 'Google Appscript'].map((skill) => (
              <span key={skill} className="bg-[#00a3e0] text-white px-3 py-1 border-2 border-[#004b8d] shadow-[2px_2px_0px_0px_#004b8d]">
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}