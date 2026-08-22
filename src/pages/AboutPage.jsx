import { useAudio } from "../context/AudioContext";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import { PROJECTS_DATA } from "../constants/projects";
import profilePic from "../assets/images/unnamed.jpg";

export default function AboutPage() {
  const { soundEnabled, playSound } = useAudio();
  const [activeSection, setActiveSection] = useState(0);
  

  

  // BACKGROUND IMAGES PER CARD STEP
  const cardBackgrounds = [
    "src/assets/images/castle.png",   // Card 0: Personal Dossier
    "src/assets/images/classroom.jpg", // Card 1: Education / Library
    "src/assets/images/bridge.jpg",    // Card 2: Work Experience
  ];

  

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      if (soundEnabled) playSound("select");
      setActiveSection((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeSection > 0) {
      if (soundEnabled) playSound("select");
      setActiveSection((prev) => prev - 1);
    }
  };

  // ARRAY OF ALL DOSSIER CARDS
  const sections = [
    // CARD 0: PERSONAL DOSSIER
    <div key="personal" className="w-11/12 md:w-5/6 lg:w-3/4 border-8 border-[#7c3aed] bg-white text-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(43,179,113,0.25)] transition-all duration-300 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border-b-2 border-dashed border-[#2bb371]/40 pb-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-32 h-32 md:w-36 md:h-36 bg-slate-100 border-4 border-[#7c3aed] flex flex-col items-center justify-center shrink-0 shadow-[6px_6px_0px_0px_rgba(43,179,113,0.2)] overflow-hidden">
            <img 
              src={profilePic} 
              alt="Isaiah Quejadas Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="text-center md:text-left">
            <div className="text-xs text-emerald-800 tracking-widest font-bold flex items-center justify-center md:justify-start gap-2">
              
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-wider mt-1">
              ISAIAH QUEJADAS
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed max-w-xl">
              Full-stack developer with a strong foundation in software design. Experienced in building web and mobile apps, analyzing data, and integrating machine learning and AI.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div className="bg-slate-50 border border-slate-200 p-3.5 text-center hover:border-[#2bb371] transition-colors">
          <span className="text-[10px] text-slate-500 uppercase block tracking-wider">TOTAL CODING EXP</span>
          <span className="text-xl font-bold text-amber-600 mt-1 block">6+ YEARS</span>
          <span className="text-[9px] text-slate-500 mt-0.5 block">Development Experience</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-3.5 text-center hover:border-[#2bb371] transition-colors">
          <span className="text-[10px] text-slate-500 uppercase block tracking-wider">ACADEMIC DEGREE</span>
          <span className="text-xl font-bold text-slate-900 mt-1 block">B.S. CS</span>
          <span className="text-[9px] text-slate-500 mt-0.5 block">Computer Science</span>
        </div>
        
      </div>
    </div>,

    // CARD 1: ACADEMIC BACKGROUND
    <div key="academic" className="w-11/12 md:w-5/6 lg:w-3/4 border-8 border-[#7c3aed] bg-white text-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(124,58,237,0.25)] transition-all duration-300 animate-fade-in">
      <div className="flex justify-between items-center border-b-2 border-dashed border-[#7c3aed]/30 pb-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wider">
          ACADEMIC BACKGROUND
        </h2>
      </div>

      <div className="bg-slate-50 border-2 border-slate-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">
            Mapua Malayan Colleges Laguna
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
            Comprehensive 4-year curriculum with an emphasis on core software engineering principles, algorithm optimization, Object-Oriented Design (OOD), and distributed systems.
          </p>

          <div className="pt-2">
            <span className="text-[10px] text-slate-500 font-bold block mb-1">
              CORE DISCIPLINES & COURSEWORK:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Data Structures & Algorithms",
                "Software Architecture",
                "Database Systems",
                "Operating Systems",
                "Web Engineering"
              ].map((course, idx) => (
                <span key={idx} className="text-[10px] bg-white border border-slate-300 text-slate-700 px-2 py-0.5">
                  • {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-200">
          <img src="src/assets/images/malayan.png" alt="Malayan Logo" width="300" height="300"/>
        </div>
      </div>
    </div>,

    // CARD 2: WORK EXPERIENCE
    <div key="experience" className="w-11/12 md:w-5/6 lg:w-3/4 border-8 border-[#7c3aed] bg-white text-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(124,58,237,0.25)] transition-all duration-300 animate-fade-in">
      <div className="flex justify-between items-center border-b-2 border-dashed border-[#7c3aed]/30 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💼</span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wider">
            WORK EXPERIENCE
          </h2>
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-4">
        <div onMouseEnter={() => soundEnabled && playSound("select")} className="bg-slate-50 border-2 border-slate-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-start gap-4 hover:border-[#7c3aed] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.03)]">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg md:text-xl font-bold text-slate-900">Globe Telecom</h3>
            <div className="text-xs font-bold text-purple-700">Service Quality Assurance Intern</div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              Assisted in developing automation solutions and digital systems to improve process efficiency, monitoring, and decision-making. Collaborated with Engineering and Operations teams to support key automation and digitalization initiatives.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-200 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-800 bg-white border border-slate-300 px-3 py-1 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]">
              Apr 2026 - Jul 2026
            </span>
          </div>
        </div>

        <div onMouseEnter={() => soundEnabled && playSound("select")} className="bg-slate-50 border-2 border-slate-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-start gap-4 hover:border-[#7c3aed] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.03)]">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg md:text-xl font-bold text-slate-900">MMCL Student Affairs Office</h3>
            <div className="text-xs font-bold text-purple-700">Student Assistant</div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              Managed clerical operations and customer-facing duties. Digitized internal scholarship application workflows, migrating manual paper processes to online systems and significantly reducing administrative overhead.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-200 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-800 bg-white border border-slate-300 px-3 py-1 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]">
              Apr 2024 - Apr 2026
            </span>
          </div>
        </div>
      </div>
    </div>,

    // CARD 3: PROJECTS & SKILLS

  ];

  return (
    <div className="min-h-screen w-full bg-slate-300 text-[#33ff66] font-mono selection:bg-[#33ff66] selection:text-black relative">
      
      {/* DYNAMIC SCROLLING BACKGROUND IMAGE BASED ON ACTIVE CARD */}
      <div 
        className="absolute inset-0 z-0 animate-infinite-scroll opacity-30 pointer-events-none transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url('${cardBackgrounds[activeSection] || cardBackgrounds[0]}')`,
          backgroundSize: "contain",
        }}
      />
      
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-between pt-[50px] pb-12 text-slate-800 font-mono">
        
        {/* RENDER CURRENT CARD ONLY */}
        <div className="w-full flex justify-center flex-grow items-center">
          {sections[activeSection]}
        </div>

        {/* 8-BIT NAVIGATION BAR (PREV / NEXT ARROWS) */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4 bg-white p-3 border-4 border-[#7c3aed] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeSection === 0}
              className={`px-4 py-2 border-2 font-bold text-xs flex items-center gap-2 transition-all ${
                activeSection === 0
                  ? "bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed"
                  : "bg-[#7c3aed] text-white border-purple-900 hover:bg-purple-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]"
              }`}
            >
              ▲ PREV CARD
            </button>

            <span className="text-xs font-bold text-purple-900 px-3 py-1 bg-purple-100 border border-purple-300">
              CARD {activeSection + 1} / {sections.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeSection === sections.length - 1}
              className={`px-4 py-2 border-2 font-bold text-xs flex items-center gap-2 transition-all ${
                activeSection === sections.length - 1
                  ? "bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed"
                  : "bg-[#7c3aed] text-white border-purple-900 hover:bg-purple-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]"
              }`}
            >
              NEXT CARD ▼
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}