import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Activity } from "lucide-react";
import { academicData } from "../data/credentialsData";

export default function AcademicChart() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeMetric, setActiveMetric] = useState("both"); // "both", "sgpa", "cgpa"

  const semesters = academicData.semesters;

  // Chart dimensions & scaling
  const width = 740;
  const height = 180;
  const padding = { top: 25, right: 35, bottom: 35, left: 45 };

  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const minVal = 7.5;
  const maxVal = 10.0;
  const valRange = maxVal - minVal;

  const getX = (index) => padding.left + (index / (semesters.length - 1)) * plotWidth;
  const getY = (val) => padding.top + plotHeight - ((val - minVal) / valRange) * plotHeight;

  // Generate SVG Path for SGPA
  const sgpaPoints = semesters.map((s, i) => `${getX(i)},${getY(s.sgpa)}`);
  const sgpaPathD = `M ${sgpaPoints.join(" L ")}`;
  const sgpaAreaD = `M ${getX(0)},${padding.top + plotHeight} L ${sgpaPoints.join(" L ")} L ${getX(semesters.length - 1)},${padding.top + plotHeight} Z`;

  // Generate SVG Path for CGPA
  const cgpaPoints = semesters.map((s, i) => `${getX(i)},${getY(s.cgpa)}`);
  const cgpaPathD = `M ${cgpaPoints.join(" L ")}`;
  const cgpaAreaD = `M ${getX(0)},${padding.top + plotHeight} L ${cgpaPoints.join(" L ")} L ${getX(semesters.length - 1)},${padding.top + plotHeight} Z`;

  // Grid levels
  const yTicks = [10.0, 9.5, 9.0, 8.5, 8.0, 7.5];

  return (
    <div className="w-full mt-6 pt-5 border-t border-white/10">
      {/* Chart Header & Metric Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent-cyan" />
          <span className="text-xs font-bold text-slate-200 font-sans">
            Semester GPA Trajectory & Cumulative Performance
          </span>
        </div>

        {/* Legend / Toggle Buttons */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <button
            onClick={() => setActiveMetric("both")}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeMetric === "both"
                ? "bg-white/10 text-slate-100 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            All Curves
          </button>
          <button
            onClick={() => setActiveMetric("sgpa")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
              activeMetric === "sgpa"
                ? "bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 font-semibold"
                : "text-slate-400 hover:text-accent-cyan"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span>SGPA (Sem)</span>
          </button>
          <button
            onClick={() => setActiveMetric("cgpa")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
              activeMetric === "cgpa"
                ? "bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/40 font-semibold"
                : "text-slate-400 hover:text-accent-emerald"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent-emerald" />
            <span>CGPA (Cum.)</span>
          </button>
        </div>
      </div>

      {/* SVG Chart Container */}
      <div className="relative w-full rounded-xl bg-obsidian-950/80 border border-white/5 p-2 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible select-none"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="sgpaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="cgpaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Gridlines & Y-Axis Labels */}
          {yTicks.map((tick, i) => {
            const y = getY(tick);
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.07)"
                  strokeDasharray={tick === 10.0 ? "none" : "3 3"}
                  strokeWidth={tick === 10.0 ? "1.5" : "1"}
                />
                <text
                  x={padding.left - 10}
                  y={y + 3.5}
                  textAnchor="end"
                  fill={tick === 10.0 ? "#10b981" : "rgba(148, 163, 184, 0.6)"}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight={tick === 10.0 ? "bold" : "normal"}
                >
                  {tick.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Area Fills */}
          {(activeMetric === "both" || activeMetric === "sgpa") && (
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              d={sgpaAreaD}
              fill="url(#sgpaGradient)"
            />
          )}

          {(activeMetric === "both" || activeMetric === "cgpa") && (
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              d={cgpaAreaD}
              fill="url(#cgpaGradient)"
            />
          )}

          {/* CGPA Line */}
          {(activeMetric === "both" || activeMetric === "cgpa") && (
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              d={cgpaPathD}
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* SGPA Line */}
          {(activeMetric === "both" || activeMetric === "sgpa") && (
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              d={sgpaPathD}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Vertical Guide & Hover Interaction on Semesters */}
          {semesters.map((s, i) => {
            const x = getX(i);
            const sgpaY = getY(s.sgpa);
            const cgpaY = getY(s.cgpa);
            const isHovered = hoveredIdx === i;
            const isSem8 = i === 7;

            return (
              <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
                {/* Invisible hover capture bar */}
                <rect
                  x={x - plotWidth / (semesters.length * 2)}
                  y={padding.top}
                  width={plotWidth / semesters.length}
                  height={plotHeight}
                  fill="transparent"
                />

                {/* Vertical hover line */}
                {isHovered && (
                  <line
                    x1={x}
                    y1={padding.top}
                    x2={x}
                    y2={padding.top + plotHeight}
                    stroke="rgba(56, 189, 248, 0.4)"
                    strokeDasharray="2 2"
                    strokeWidth="1.5"
                  />
                )}

                {/* X-Axis Label */}
                <text
                  x={x}
                  y={height - 12}
                  textAnchor="middle"
                  fill={isHovered ? "#38bdf8" : isSem8 ? "#10b981" : "rgba(148, 163, 184, 0.7)"}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight={isHovered || isSem8 ? "bold" : "normal"}
                >
                  {s.sem}
                </text>

                {/* CGPA Node Dot */}
                {(activeMetric === "both" || activeMetric === "cgpa") && (
                  <circle
                    cx={x}
                    cy={cgpaY}
                    r={isHovered ? "5" : "3.5"}
                    fill="#060911"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                )}

                {/* SGPA Node Dot */}
                {(activeMetric === "both" || activeMetric === "sgpa") && (
                  <g>
                    {isSem8 && (
                      <circle
                        cx={x}
                        cy={sgpaY}
                        r="8"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1"
                        className="animate-ping opacity-75"
                      />
                    )}
                    <circle
                      cx={x}
                      cy={sgpaY}
                      r={isHovered ? "6" : isSem8 ? "5" : "4"}
                      fill={isSem8 ? "#10b981" : "#060911"}
                      stroke={isSem8 ? "#10b981" : "#38bdf8"}
                      strokeWidth="2.5"
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Dynamic Tooltip on Hover */}
        {hoveredIdx !== null && (
          <div
            className="absolute top-2 right-3 p-2.5 rounded-lg bg-obsidian-900/95 border border-accent-cyan/30 text-xs font-mono shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
          >
            <div className="border-r border-white/10 pr-2.5">
              <span className="text-slate-400 block text-[10px] uppercase">Term</span>
              <span className="text-slate-100 font-bold">{semesters[hoveredIdx].sem}</span>
            </div>
            <div>
              <span className="text-accent-cyan block">
                SGPA: <strong>{semesters[hoveredIdx].sgpa.toFixed(2)}</strong>
              </span>
              <span className="text-accent-emerald block">
                CGPA: <strong>{semesters[hoveredIdx].cgpa.toFixed(2)}</strong>
              </span>
            </div>
            {hoveredIdx === 7 && (
              <span className="px-1.5 py-0.5 rounded bg-accent-emerald/20 text-accent-emerald text-[10px] font-bold border border-accent-emerald/40">
                ⭐ 10.00 SGPA
              </span>
            )}
          </div>
        )}
      </div>

      {/* Caption note */}
      <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-accent-cyan" /> Hover or tap over semesters to inspect exact metrics.
        </span>
        <span className="text-accent-emerald font-semibold">
          Final Cumulative: 8.80 CGPA (Sem 8: 10.00 SGPA)
        </span>
      </div>
    </div>
  );
}