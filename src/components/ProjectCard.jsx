import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  ArrowUpRight,
  ArrowRight,
  Workflow
} from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-7 border border-white/10 bg-obsidian-900/80 hover:border-accent-cyan/40 transition-all duration-300 shadow-xl overflow-hidden"
    >
      {/* Top Background Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/5 rounded-full blur-2xl group-hover:bg-accent-cyan/10 transition-colors pointer-events-none" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
            {project.category}
          </span>
          {project.badge && (
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
              {project.badge}
            </span>
          )}
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-accent-cyan transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-3">{project.subtitle}</p>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-obsidian-950/60 border border-white/5 mb-5 text-xs font-mono">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-slate-400 text-[11px]">{metric.label}</span>
                <span className="text-slate-200 font-semibold truncate">{metric.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Expandable Architecture Decisions */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 mb-5 pt-3 border-t border-white/10"
            >
              {/* Optional Pipeline Flow */}
              {project.pipelineFlow && (
                <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-accent-cyan/20">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent-cyan font-semibold mb-3">
                    <Workflow className="w-3.5 h-3.5" /> Pipeline Architecture Flow
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs font-mono">
                    {project.pipelineFlow.map((step, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-between">
                        <span className="text-accent-cyan font-semibold text-[11px]">{step.step}</span>
                        <span className="text-[10px] text-slate-400 mt-1">{step.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider font-mono flex items-center gap-1.5 mb-2">
                  <Cpu className="w-3.5 h-3.5" /> Architecture Highlights & Engineering Decisions
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 font-sans">
                  {project.architecturePoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-cyan mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div>
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors font-mono py-1"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" /> Hide Specs
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> Architecture Specs
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all"
              >
                <Github className="w-3.5 h-3.5" /> Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-cyan/15 hover:bg-accent-cyan/25 border border-accent-cyan/40 text-xs font-medium text-accent-cyan transition-all"
              >
                <ArrowUpRight className="w-3.5 h-3.5" /> View
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}