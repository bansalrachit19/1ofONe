import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Copy, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Terminal as TerminalIcon,
  CheckCircle2
} from "lucide-react";
import SystemCanvas from "../components/SystemCanvas";
import { useToast } from "../components/Toast";
import confetti from "canvas-confetti";
import rachitPhoto from "../assets/RachitPhoto.png";

export default function Hero({ onOpenCommandPalette }) {
  const { addToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bansalrachit311@gmail.com");
    addToast("Email copied: bansalrachit311@gmail.com", "success");
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
  };

  const statHighlights = [
    { label: "Current Role", value: "Associate SE @ Birla Pivot", sub: "Aditya Birla Group" },
    { label: "Cloud & IAC", value: "AWS & Terraform", sub: "Production Infrastructure" },
    { label: "Observability", value: "OpenSearch & Thanos", sub: "Telemetry Pipelines" },
    { label: "Algorithms", value: "450+ LeetCode Solved", sub: "Consistent Problem Solver" }
  ];

  return (
    <section id="hero" className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Banner / Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shadow-inner-light backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald"></span>
          </span>
          <span>Birla Pivot (Aditya Birla Group) • Bangalore</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Intern → Full-Time Associate Software Engineer</span>
        </div>
      </motion.div>

      {/* Main Headline & Supporting Statement */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]"
        >
          Architecting Resilient <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-accent-cyan via-sky-300 to-accent-indigo bg-clip-text text-transparent">
            Backend Systems & Cloud Infra
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          I am <span className="text-slate-100 font-semibold">Rachit Bansal</span>, an Associate Software Engineer at <span className="text-slate-100 font-semibold">Birla Pivot (Aditya Birla Group)</span>. I specialize in designing scalable backend microservices, declarative AWS infrastructure with Terraform, distributed observability pipelines (OpenSearch, Prometheus, Thanos), and event streaming architectures.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-cyan text-obsidian-950 font-semibold text-sm hover:bg-sky-300 transition-all shadow-glow-cyan font-sans"
          >
            <span>Explore Engineering Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://drive.google.com/file/d/1HdkCGQE8YnFq3d3ObuGXd4IXqUNQFaHO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-sm transition-all"
          >
            <FileText className="w-4 h-4 text-accent-cyan" />
            <span>View Resume</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-slate-100 font-medium text-sm transition-all font-mono"
            aria-label="Copy email address"
          >
            <Copy className="w-4 h-4 text-accent-emerald" />
            <span className="hidden sm:inline">bansalrachit311@gmail.com</span>
            <span className="sm:hidden">Copy Email</span>
          </button>
        </motion.div>

        {/* Social / Developer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-400 font-mono"
        >
          <a href="https://github.com/bansalrachit19" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan flex items-center gap-1.5 transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/rachit-bansal-03961928b/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan flex items-center gap-1.5 transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <span>•</span>
          <a href="https://leetcode.com/u/rachit_bansal20/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan flex items-center gap-1.5 transition-colors">
            <TerminalIcon className="w-4 h-4" /> LeetCode (450+)
          </a>
        </motion.div>
      </div>

      {/* Interactive System Canvas Visualizer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4"
      >
        <SystemCanvas />
      </motion.div>

      {/* Engineering Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {statHighlights.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            className="p-4 rounded-xl glass-panel border border-white/5 bg-obsidian-900/60 flex flex-col justify-between"
          >
            <span className="text-xs font-mono text-slate-400 mb-1">{stat.label}</span>
            <span className="text-sm sm:text-base font-bold text-slate-100">{stat.value}</span>
            <span className="text-xs font-mono text-accent-cyan mt-1">{stat.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
