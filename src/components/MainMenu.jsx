import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TABLE_OF_CONTENTS } from "../constants/navigation";
import { useAudio } from "../context/AudioContext";

function MainMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisibility] = useState(false);
  const { soundEnabled, toggleSound, playSound } = useAudio();
  const navigate = useNavigate();

  // --- RETRO KEYBOARD NAVIGATION (Up/Down/Enter) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!visible) {
        if (e.key === "ArrowDown") {
          setSelectedIndex((prev) => (prev + 1) % TABLE_OF_CONTENTS.length);
          if (soundEnabled) playSound("select");
        } else if (e.key === "ArrowUp") {
          setSelectedIndex((prev) => (prev - 1 + TABLE_OF_CONTENTS.length) % TABLE_OF_CONTENTS.length);
          if (soundEnabled) playSound("select");
        } else if (e.key === "Enter") {
          if (soundEnabled) playSound("click");
          navigate(TABLE_OF_CONTENTS[selectedIndex].path);
        } 
      }
      if (e.key === "Escape") {
        setVisibility((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, soundEnabled, navigate, visible]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col items-center justify-center font-mono select-none relative overflow-hidden selection:bg-[#004b8d] selection:text-white">
      <Outlet/>
      
      {/* SCANLINE CRT OVERLAY (Subtle blue-toned scanlines) */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #004b8d, #004b8d 2px, transparent 2px, transparent 4px)"
        }}
      />

      <div className={`${visible ? "hidden" : ""} fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto`}>
        
        {/* TOP CONFIG / SYSTEM BAR */}
        <header className="w-full max-w-5xl flex justify-between items-center mb-3 text-xs text-slate-600 z-10 font-bold">
          
          <button
            onClick={toggleSound}
            className="px-3 py-1 border-2 border-[#004b8d] bg-white text-[#004b8d] hover:bg-[#004b8d] hover:text-white transition-colors text-[10px] uppercase shadow-[2px_2px_0px_0px_#004b8d] font-bold"
          >
            AUDIO: {soundEnabled ? "[ ON ]" : "[ OFF ]"}
          </button>
        </header>

        {/* MAIN DASHBOARD FRAME */}
        <div className="w-full max-w-5xl border-4 border-[#004b8d] rounded-none p-6 md:p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative shadow-[8px_8px_0px_0px_#004b8d] z-10">
          
          {/* CENTER DIVIDER LINE */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[2px] bg-slate-200 border-r border-dashed border-[#004b8d]/30" />

          {/* LEFT COLUMN: CANDIDATE INFO & OVERVIEW */}
          <div className="flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">


              {/* Profile Overview (Corporate Header replacing Sprite Canvas) */}
              <div className="bg-slate-50 border-2 border-[#004b8d] p-4 shadow-[4px_4px_0px_0px_#004b8d]">
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#004b8d] tracking-tight">
                  ISAIAH Q.
                </h1>
                <p className="text-xs text-[#00a3e0] font-bold mt-0.5 uppercase tracking-wider">
                  AI Forward Deployed Engineer 
                </p>

              </div>
            </div>

            {/* Profile Summary */}
            <div className="bg-slate-50 border-2 border-slate-300 p-4 text-xs leading-relaxed text-slate-700 space-y-2">
              <p className="text-[#004b8d] font-bold uppercase text-[11px] tracking-wider">// EXECUTIVE_SUMMARY:</p>
              <p>
                B.S. Computer Science candidate with hands-on experience in full-stack web applications, microservices architecture, and enterprise cloud solutions.
              </p>
            </div>

            {/* Links / Contact Items */}
            <div className="space-y-2">
              <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-bold">// QUICK_LINKS:</span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <a 
                  href="https://github.com/WanDayMore/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 border-2 border-slate-300 bg-slate-50 text-slate-800 hover:border-[#004b8d] hover:bg-[#004b8d] hover:text-white transition-all font-bold shadow-[2px_2px_0px_0px_#004b8d]"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 border-2 border-slate-300 bg-slate-50 text-slate-800 hover:border-[#004b8d] hover:bg-[#004b8d] hover:text-white transition-all font-bold shadow-[2px_2px_0px_0px_#004b8d]"
                >
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="p-2 border-2 border-slate-300 bg-slate-50 text-slate-800 hover:border-[#004b8d] hover:bg-[#004b8d] hover:text-white transition-all font-bold shadow-[2px_2px_0px_0px_#004b8d]"
                >
                  Resume
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: NAVIGATION / TABLE OF CONTENTS */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b-2 border-dashed border-[#004b8d]/30 pb-3 mb-6">
                <h2 className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  — NAVIGATION_INDEX —
                </h2>
                <span className="text-[10px] text-slate-400 font-semibold hidden sm:inline">KEYBOARD READY</span>
              </div>

              <nav className="space-y-3">
                {TABLE_OF_CONTENTS.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <Link
                      key={item.id || idx} 
                      to={item.path}
                      onMouseEnter={() => {
                        setSelectedIndex(idx);
                        if (soundEnabled) playSound("select");
                      }}
                      onClick={() => {
                        if (soundEnabled) playSound("click");
                      }}
                      className={`group flex items-center justify-between p-3 border-2 transition-all ${
                        isSelected
                          ? "bg-[#004b8d] text-white border-[#004b8d] font-bold shadow-[4px_4px_0px_0px_#00a3e0]"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#004b8d]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[#00a3e0]">
                          {isSelected ? "▶" : " "}
                        </span>
                        <span className="text-sm tracking-wide uppercase">{item.title}</span>
                      </div>

                      <span className={`text-xs font-mono ${isSelected ? "text-white" : "text-slate-400"}`}>
                        [{item.num}]
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer Control Prompt */}
            <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] text-slate-500 font-bold flex justify-between items-center">
              <span>[▲/▼] NAVIGATE</span>
              <span>[ENTER] SELECT</span>
              <span>[ESC] TOGGLE</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MainMenu;