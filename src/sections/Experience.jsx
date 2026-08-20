import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { experienceData } from "../data/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-emerald/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-xs font-mono text-accent-emerald mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Experience & Timeline</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Career Progression at <br />
          <span className="bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-cyan bg-clip-text text-transparent">
            Birla Pivot (Aditya Birla Group)
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          From architecting core cloud automation and CI/CD pipelines during my 6-month internship in Bangalore to taking full ownership of production backend services, API reliability, and distributed observability as a full-time Associate Software Engineer.
        </p>
      </div>

      {/* Career Timeline */}
      <div className="relative border-l border-white/15 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline Node Bullet */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 ${
                exp.current
                  ? "bg-accent-emerald border-obsidian-950 shadow-glow-emerald"
                  : "bg-slate-400 border-obsidian-950"
              }`}
            />

            {/* Experience Card */}
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 bg-obsidian-900/80 shadow-xl relative overflow-hidden">
              {exp.current && (
                <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-accent-emerald/20 border-b border-l border-accent-emerald/30 text-accent-emerald text-xs font-mono font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  <span>Current Full-Time Role</span>
                </div>
              )}

              {/* Role & Company Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
                  <span>{exp.role}</span>
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-slate-400 mb-4">
                <span className="text-accent-cyan font-semibold flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" /> {exp.company} ({exp.parentCompany})
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {exp.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {exp.period} ({exp.type})
                </span>
              </div>

              {/* Highlight Banner */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-slate-300 mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-amber shrink-0" />
                <span>{exp.highlight}</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {exp.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                  Key Engineering Responsibilities & Impact
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.keyDeliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 mb-2">Systems & Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
