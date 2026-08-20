import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Github } from "lucide-react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Engineering Projects" },
    { id: "Observability & Telemetry", label: "Observability & Telemetry" },
    { id: "Cloud & Automation", label: "Cloud & Automation" },
    { id: "Backend & Systems", label: "Backend & Systems" },
    { id: "Full Stack & WebRTC", label: "Full Stack & WebRTC" },
    { id: "IoT & Systems", label: "IoT & Patent Systems" },
    { id: "Backend & Security", label: "Backend & Security" },
  ];

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>Featured Engineering Case Studies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Production Systems & <br />
          <span className="bg-gradient-to-r from-accent-cyan via-sky-300 to-accent-indigo bg-clip-text text-transparent">
            Architectural Implementations
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          Technical case studies covering in-house frontend observability pipelines, automated API Gateway GitOps workflows, configurable endpoint-level rate limiting, real-time WebRTC communications, patent-filed IoT load optimizers, and cryptographic authentication engines.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              filter === cat.id
                ? "bg-accent-cyan text-obsidian-950 font-bold shadow-glow-cyan"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom GitHub Callout */}
      <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <Github className="w-5 h-5 text-accent-cyan" />
          <span>Looking to explore more repositories, utilities, and experimental systems?</span>
        </div>
        <a
          href="https://github.com/bansalrachit19?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-accent-cyan transition-all shrink-0"
        >
          View All GitHub Repositories ↗
        </a>
      </div>
    </section>
  );
}