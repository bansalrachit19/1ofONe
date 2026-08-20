import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  ExternalLink, 
  Terminal as TerminalIcon, 
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Code2
} from "lucide-react";
import TerminalBox from "../components/TerminalBox";
import { useToast } from "../components/Toast";
import confetti from "canvas-confetti";

export default function ContactFooter() {
  const { addToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bansalrachit311@gmail.com");
    addToast("Copied to clipboard: bansalrachit311@gmail.com", "success");
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.85 } });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+918968922155");
    addToast("Copied phone number: +91-8968922155", "success");
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Connect & Collaborate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Let’s Build Resilient <br />
          <span className="bg-gradient-to-r from-accent-cyan via-sky-300 to-accent-indigo bg-clip-text text-transparent">
            Software & Scalable Systems
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          Open to backend engineering discussions, platform architecture inquiries, open-source collaborations, and high-impact software engineering opportunities.
        </p>
      </div>

      {/* Main Grid: Action Hub + Terminal Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Left: Contact Channels Card */}
        <div className="space-y-4">
          {/* Email Quick Action */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/80 hover:border-accent-cyan/30 transition-all flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-cyan/15 text-accent-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Primary Communication</span>
                  <span className="text-base font-bold text-slate-100 block">bansalrachit311@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:bansalrachit311@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent-cyan text-obsidian-950 font-semibold text-xs transition-transform active:scale-95"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-all flex items-center gap-1.5"
                aria-label="Copy email"
              >
                <Copy className="w-3.5 h-3.5 text-accent-cyan" /> Copy
              </button>
            </div>
          </div>

          {/* Social Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rachit-bansal-03961928b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/80 hover:border-accent-cyan/40 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 group-hover:text-accent-cyan transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Professional Network</span>
                  <span className="text-sm font-bold text-slate-100">LinkedIn Profile</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent-cyan transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/bansalrachit19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/80 hover:border-accent-cyan/40 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 group-hover:text-accent-cyan transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Open Source & Code</span>
                  <span className="text-sm font-bold text-slate-100">GitHub Profile</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent-cyan transition-colors" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/rachit_bansal20/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/80 hover:border-accent-cyan/40 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 group-hover:text-accent-cyan transition-colors">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">450+ Solved</span>
                  <span className="text-sm font-bold text-slate-100">LeetCode Profile</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent-cyan transition-colors" />
            </a>

            {/* Phone */}
            <div
              onClick={handleCopyPhone}
              className="p-5 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/80 hover:border-accent-emerald/40 transition-all flex items-center justify-between group shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 group-hover:text-accent-emerald transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Direct Mobile (India)</span>
                  <span className="text-sm font-bold text-slate-100">+91-8968922155</span>
                </div>
              </div>
              <Copy className="w-4 h-4 text-slate-400 group-hover:text-accent-emerald transition-colors" />
            </div>
          </div>
        </div>

        {/* Right: Interactive Terminal */}
        <div className="flex flex-col justify-between">
          <TerminalBox />
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-emerald"></span>
          <span>Rachit Bansal • Associate Software Engineer at Birla Pivot (Aditya Birla Group)</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Bangalore, India</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
