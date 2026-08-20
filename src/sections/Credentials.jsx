import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  ExternalLink, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { patentData, certificationsData, academicData, leadershipData } from "../data/credentialsData";

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/20 text-xs font-mono text-accent-amber mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Patents, Certifications & Academic Rigor</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Validated Credentials & <br />
          <span className="bg-gradient-to-r from-accent-amber via-yellow-200 to-accent-cyan bg-clip-text text-transparent">
            Intellectual Property
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          Patent filing for smart building energy systems, Microsoft cloud certifications, academic foundation at Thapar Institute of Engineering and Technology (8.80 CGPA • 10.00 Sem 8 SGPA), and proven leadership.
        </p>
      </div>

      {/* 1. Patent Spotlight Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-6 sm:p-8 rounded-2xl glass-panel border border-accent-amber/30 bg-gradient-to-r from-amber-500/10 via-obsidian-900/90 to-obsidian-900/90 shadow-2xl mb-10 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-accent-amber/20 text-accent-amber text-xs font-mono font-semibold">
                Patent Co-Inventor
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                App No: {patentData.applicationNumber}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-accent-emerald/15 text-accent-emerald text-xs font-mono">
                {patentData.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              {patentData.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {patentData.description}
            </p>
          </div>

          <a
            href={patentData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-amber text-obsidian-950 font-semibold text-xs sm:text-sm hover:bg-amber-300 transition-all shrink-0 font-sans shadow-lg"
          >
            <span>View Patent Document</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* 2. Certifications & Problem Solving Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="p-5 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/70 flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  {cert.issuer}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  {cert.badge}
                </span>
              </div>
              <h4 className="font-bold text-slate-100 text-sm mb-1.5">{cert.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                {cert.description}
              </p>
            </div>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-accent-cyan hover:underline font-mono pt-3 border-t border-white/5"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* 3. Academic Foundation & Semester Climb */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Academic Overview */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/70 flex flex-col justify-between">
          <div>
            <div className="p-2.5 w-fit rounded-xl bg-accent-cyan/10 text-accent-cyan mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-slate-400">{academicData.period}</span>
            <h3 className="text-lg font-bold text-slate-100 mt-1">{academicData.degree}</h3>
            <p className="text-xs text-accent-cyan font-mono mt-1">{academicData.institution}</p>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed font-sans">
              Rigorous curriculum spanning Operating Systems, Computer Networks, Database Management Systems, Distributed Computing, Cloud Architecture, and Data Structures & Algorithms.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono">
            <span className="text-xs text-slate-400">Final Cumulative CGPA:</span>
            <span className="text-xl font-bold text-accent-emerald">{academicData.finalCgpa}</span>
          </div>
        </div>

        {/* Semester-by-Semester Progression */}
        <div className="lg:col-span-2 p-6 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/70 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-100 font-sans flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent-cyan" /> Academic Consistency & Upward Progression
              </h4>
              <span className="text-xs font-mono text-accent-emerald flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Sem 8: 10.00 SGPA
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-6 font-sans">
              Demonstrated consistent academic climb culminating in a perfect 10.00 SGPA in the 8th Semester and a 9.38 SGPA in the 7th Semester.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {academicData.semesters.map((s, i) => (
                <div 
                  key={i} 
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    s.sgpa === 10.0
                      ? "bg-accent-emerald/15 border-accent-emerald/40 shadow-glow-emerald"
                      : s.sgpa >= 9.0
                      ? "bg-accent-cyan/10 border-accent-cyan/30"
                      : "bg-obsidian-950/70 border-white/5"
                  }`}
                >
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">{s.sem}</span>
                  <span className={`text-xs sm:text-sm font-bold block ${s.sgpa === 10.0 ? "text-accent-emerald" : "text-accent-cyan"}`}>
                    {s.sgpa.toFixed(2)}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5">CG: {s.cgpa.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Thapar Institute of Engineering and Technology</span>
            <span className="text-slate-300 font-semibold">Graduation Year: {academicData.graduationYear}</span>
          </div>
        </div>
      </div>

      {/* 4. Leadership & Athletic Discipline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipData.map((lead, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/70"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-accent-cyan">{lead.period}</span>
              <Trophy className="w-4 h-4 text-accent-amber" />
            </div>
            <h4 className="text-base font-bold text-slate-100">{lead.title}</h4>
            <p className="text-xs font-mono text-slate-400 mb-4">{lead.organization}</p>
            <div className="space-y-2">
              {lead.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}