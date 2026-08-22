import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ProjectCard({

  title,
  description,
  bullets = [],
  technologies = [],
  metricLabel = "KEY METRIC",
  metricValue,
  hasDetails = false,
  details,
  imgLinks = [],
  demoUrl,
  codeUrl,
  onHover,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={onHover}
      className="bg-slate-50 border-2 border-slate-200 p-6 hover:border-[#7c3aed] transition-colors flex flex-col justify-between gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.03)]"
    >
      {/* MAIN CARD CONTENT */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* LEFT CONTENT COLUMN */}
        <div className="space-y-3 max-w-xl">


          {/* PROJECT TITLE */}
          <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-wide">
            {title}
          </h3>

          {/* MAIN DESCRIPTION */}
          <p className="text-xs text-slate-600 leading-relaxed">
            {description}
          </p>

          {/* OPTIONAL BULLET POINTS */}
          {bullets.length > 0 && (
            <ul className="space-y-1 pt-1">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="text-[#7c3aed] font-bold">▶</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* TECH STACK BADGES */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-purple-50 text-purple-900 border border-purple-200 font-bold px-2 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.05)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT ACTION & METRIC COLUMN */}
        <div className="flex flex-col justify-between items-start md:items-end shrink-0 gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-slate-200">
          

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto mt-auto">
            {hasDetails && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-bold bg-purple-100 text-purple-900 px-3 py-1.5 border border-purple-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] hover:bg-purple-200 transition-colors flex items-center justify-center gap-1.5 w-full md:w-auto"
              >
                <span>{isExpanded ? "▼" : "▶"}</span>
                <span>{isExpanded ? "HIDE DETAILS" : "VIEW DETAILS"}</span>
              </button>
            )}

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-[#7c3aed] text-white px-3 py-1.5 border border-purple-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] hover:bg-purple-800 transition-colors flex items-center justify-center gap-1 w-1/2 md:w-auto"
              >
                <span>▶</span> DEMO
              </a>
            )}

            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-white text-slate-800 border border-slate-300 px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] hover:bg-slate-100 transition-colors flex items-center justify-center gap-1 w-1/2 md:w-auto"
              >
                <span>💻</span> SOURCE
              </a>
            )}
          </div>
        </div>
      </div>

      {/* EXPANDABLE DETAILS SECTION */}
      {hasDetails && isExpanded && (
        <div className="border-t-2 border-dashed border-[#7c3aed]/30 pt-6 mt-2 space-y-6">
          <div className="bg-white border border-slate-200 p-4 space-y-4">
            <span className="text-[10px] text-purple-800 font-bold tracking-widest block uppercase">
              // DEEP_DIVE_DOSSIER
            </span>

            {/* DETAILED TEXT */}
            {details && (
              <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                {details}
              </p>
            )}

            {/* GALLERY GRID */}
            {imgLinks.length > 0 && (
              <div className="pt-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase block mb-2">
                  // SCREENSHOT_LOGS ({imgLinks.length}):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {imgLinks.map((src, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-100 border-2 border-slate-200 hover:border-[#7c3aed] transition-colors p-1"
                    >
                      <img
                        src={src}
                        alt={`${title} capture ${idx + 1}`}
                        className="w-full min-h-32 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  questNumber: PropTypes.string,
  title: PropTypes.string.isRequired,
  status: PropTypes.string,
  description: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string),
  technologies: PropTypes.arrayOf(PropTypes.string),
  metricLabel: PropTypes.string,
  metricValue: PropTypes.string,
  hasDetails: PropTypes.bool,
  details: PropTypes.string,
  imgLinks: PropTypes.arrayOf(PropTypes.string),
  demoUrl: PropTypes.string,
  codeUrl: PropTypes.string,
  onHover: PropTypes.func,
};