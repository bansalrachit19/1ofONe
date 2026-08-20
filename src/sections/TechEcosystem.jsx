import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Cloud, 
  Server, 
  Activity, 
  Database, 
  Layout, 
  Terminal, 
  Check, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { skillsCategories } from "../data/skillsData";

export default function TechEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories = selectedCategory === "all"
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedCategory);

  const categoryIcons = {
    "cloud-devops": Cloud,
    "backend-arch": Server,
    "observability-systems": Activity,
    "databases-storage": Database,
    "frontend-ui": Layout,
    "languages-tools": Terminal,
  };

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Technical Ecosystem & Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Engineered for <br />
          <span className="bg-gradient-to-r from-accent-cyan via-sky-300 to-accent-indigo bg-clip-text text-transparent">
            Reliability, Scale & Performance
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          A battle-tested technical matrix across cloud infrastructure, high-throughput backend services, distributed observability, and resilient datastores.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
            selectedCategory === "all"
              ? "bg-accent-cyan text-obsidian-950 font-bold shadow-glow-cyan"
              : "bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10"
          }`}
        >
          All Domains ({skillsCategories.length})
        </button>
        {skillsCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === cat.id
                ? "bg-accent-cyan text-obsidian-950 font-bold shadow-glow-cyan"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, idx) => {
          const Icon = categoryIcons[cat.id] || Layers;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl glass-panel p-6 border border-white/10 bg-obsidian-900/70 hover:border-accent-cyan/30 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-accent-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-100 text-base">{cat.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  {cat.description}
                </p>

                {/* Skill List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg bg-obsidian-950/60 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? "bg-accent-cyan" : "bg-slate-400"}`} />
                        <span className="text-xs font-medium text-slate-200 font-sans">{skill.name}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          skill.level === "Production"
                            ? "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30 font-semibold"
                            : skill.level === "Advanced"
                            ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 font-semibold"
                            : "bg-white/5 text-slate-400 border border-white/5"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} core technologies</span>
                <span className="text-accent-cyan">Verified in Production</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
