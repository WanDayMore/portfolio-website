import BookLayout from "../components/MainMenu";
import { PROJECTS_DATA } from "../constants/projects";
import { useAudio } from "../context/AudioContext";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

export default function ProjectPage() {
    const { soundEnabled, playSound } = useAudio();

    const [selectedFilters, setSelectedFilters] = useState([]);


    const availableFilters = ['Web Development', 'Mobile Development', 'Machine Learning', 'Backend Development', 'Game Development','Artificial Intelligence'];

    const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
    };
    return (
      <div className="min-h-screen w-full bg-slate-300 text-[#33ff66] font-mono selection:bg-[#33ff66] selection:text-black relative">
      
      {/* DYNAMIC SCROLLING BACKGROUND IMAGE BASED ON ACTIVE CARD */}
      <div 
        className="absolute inset-0 z-0 animate-infinite-scroll opacity-30 pointer-events-none transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url('src/assets/images/castle.png')`,
          backgroundSize: "contain",
        }}
      />
      
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-between pt-[50px] pb-12 text-slate-800 font-mono">
        
        <div key="projects" className="w-11/12 md:w-5/6 lg:w-3/4 border-8 border-[#7c3aed] bg-white text-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(124,58,237,0.25)] transition-all duration-300 animate-fade-in">
              <div className="flex justify-between items-center border-b-2 border-dashed border-[#7c3aed]/30 pb-4 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wider">
                  PROJECTS & SKILLS
                </h2>
              </div>
        
              <div className="flex flex-wrap gap-2 mb-6">
                {availableFilters.map((filter) => {
                  const isActive = selectedFilters.includes(filter);
                  return (
                    <button
                      key={filter}
                      onClick={() => toggleFilter(filter)}
                      className={`px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                        isActive
                          ? 'bg-[#7c3aed] text-white border-purple-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-[#7c3aed]'
                      }`}
                    >
                      {isActive ? '✓ ' : '+ '} {filter}
                    </button>
                  );
                })}
              </div>
        
              <div className="space-y-6">
                {PROJECTS_DATA
                  .filter((project) => {
                    if (selectedFilters.length === 0) return true;         
                    return selectedFilters.some((filter) => project.technologies?.includes(filter));
                  })
                  .map((project, idx) => (
                    <ProjectCard
                      key={project.id || idx}
                      {...project}
                      onHover={() => soundEnabled && playSound("select")}
                    />
                  ))}
              </div>
            </div>

        

      </div>
    </div>
        
    );
}
