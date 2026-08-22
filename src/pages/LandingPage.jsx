import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pixelHero } from "../assets/canvas/pixelHero";

import { TABLE_OF_CONTENTS } from "../constants/navigation";
import { useAudio } from "../context/AudioContext";


export default function LandingPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {soundEnabled, toggleSound, playSound } = useAudio();
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // --- 8-BIT PIXEL AVATAR CANVAS ANIMATION ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    let frame = 0;
    let animId;

    const render = () => {
      pixelHero(canvasRef.current, frame);
      frame++;
      animId = requestAnimationFrame(render);

    };
    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  // --- RETRO KEYBOARD NAVIGATION (Up/Down/Enter) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
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
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, soundEnabled, navigate]);

  return (
    <div className="min-h-screen bg-[#0f0f1b] text-[#33ff66] flex flex-col items-center justify-center p-4 md:p-8 font-mono select-none relative overflow-hidden">
      
      {/* SCANLINE CRT OVERLAY */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)"
        }}
      />

      {/* TOP CONFIG / SOUND BAR */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-4 text-xs text-stone-400 z-10">
        <span className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-emerald-500 animate-pulse" />
          <span>PORTFOLIO_OS [v2.6.0]</span>
        </span>
        <button
          onClick={toggleSound}
          className="px-2 py-1 border border-stone-700 bg-[#181829] hover:border-emerald-500 transition-colors text-[10px]"
        >
          SFX: {soundEnabled ? "[ ON ]" : "[ OFF ]"}
        </button>
      </header>

      {/* OUTER 8-BIT BOOK FRAME */}
      <div className="w-full max-w-5xl border-4 border-[#33ff66] rounded-none p-6 md:p-10 bg-[#181829] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative shadow-[0_0_30px_rgba(51,255,102,0.15)] z-10">
        
        {/* CENTER SPINE LINE */}
        <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[4px] bg-[#33ff66]/20 border-r border-l border-[#33ff66]/40" />

        {/* LEFT PAGE (CHARACTER STATS & BIO) */}
        <div className="flex flex-col justify-between space-y-6">
          
          {/* Header & Sprite Display */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-dashed border-[#33ff66]/30 pb-3">
              <span className="text-xs uppercase tracking-widest text-[#33ff66]">
                PLAYER 1
              </span>
              <span className="text-xs text-amber-400">LVL 7 ENGINEER</span>
            </div>

            <div className="flex gap-4 items-center">
              {/* 8-Bit Animated Canvas Canvas */}
              <div className="w-24 h-24 bg-[#0f0f1b] border-2 border-[#33ff66] flex items-center justify-center p-1 shrink-0">
                <canvas ref={canvasRef} width={100} height={100} />
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                  ISAIAH Q.
                </h1>
                <p className="text-xs text-emerald-400 mt-1">
                  CLASS: SOFTWARE ENGINEER
                </p>
                <div className="mt-2 flex gap-1">
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-1.5 py-0.5">
                    HP 100/100
                  </span>
                  <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-800 px-1.5 py-0.5">
                    MP 80/80
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quest Log / Bio */}
          <div className="bg-[#0f0f1b] border border-[#33ff66]/30 p-3 text-xs leading-relaxed text-stone-300 space-y-2">
            <p className="text-amber-300 font-semibold">// QUEST LOG:</p>
            <p>
              B.S. in Computer Science. 7 years coding experience, specializing in full-stack architecture & web UI.
            </p>
          </div>

          {/* Social Links as Item Inventory */}
          <div className="space-y-2">
            <span className="text-[10px] text-stone-400 block uppercase tracking-wider">// EQUIPMENT:</span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 border border-stone-700 hover:border-[#33ff66] bg-[#0f0f1b] hover:text-white transition-colors"
              >
                [ GitHub ]
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 border border-stone-700 hover:border-[#33ff66] bg-[#0f0f1b] hover:text-white transition-colors"
              >
                [ LinkedIn ]
              </a>
              <a 
                href="#" 
                className="p-1.5 border border-stone-700 hover:border-[#33ff66] bg-[#0f0f1b] hover:text-white transition-colors"
              >
                [ Resume ]
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT PAGE (8-BIT MENU / TABLE OF CONTENTS) */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b-2 border-dashed border-[#33ff66]/30 pb-3 mb-6">
              <h2 className="text-xs uppercase tracking-widest text-stone-400">
                — SELECT DESTINATION —
              </h2>
              <span className="text-[10px] text-stone-500 hidden sm:inline">USE ARROW KEYS</span>
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
                        ? "bg-[#33ff66] text-[#0f0f1b] border-[#33ff66] font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                        : "bg-[#0f0f1b] text-[#33ff66] border-stone-800 hover:border-[#33ff66]/50"
                    }`}
                  >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold">
                        {isSelected ? "▶" : " "}
                      </span>
                      <span className="text-sm">{item.title}</span>
                    </div>

                    <span className={`text-xs font-mono ${isSelected ? "text-[#0f0f1b]" : "text-stone-500"}`}>
                      [{item.num}]
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Footer Controls Prompt */}
          <div className="mt-6 pt-4 border-t border-stone-800 text-[10px] text-stone-500 flex justify-between items-center">
            <span>[UP/DOWN] NAVIGATE</span>
            <span>[ENTER] SELECT</span>
          </div>

        </div>

      </div>

    </div>
  );
}