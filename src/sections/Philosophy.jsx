import React from "react";
import { motion } from "framer-motion";
import { Compass, Activity, ShieldCheck, Terminal, Cpu, GitCommit } from "lucide-react";

export default function Philosophy() {
  const principles = [
    {
      icon: Activity,
      title: "Observability is a Non-Negotiable Core Feature",
      description: "A system isn't production-ready just because tests pass. Real reliability demands structured logging, metric aggregation, proactive health checks, and alerting pipelines that identify anomalies before users notice."
    },
    {
      icon: ShieldCheck,
      title: "Declarative Infrastructure Over Manual Configuration",
      description: "Server state, networking, IAM privileges, and encryption policies should live in version-controlled Terraform code. Reproducibility eliminates configuration drift and ensures auditable security."
    },
    {
      icon: Cpu,
      title: "Decoupled Architectures & Asynchronous Flows",
      description: "Leverage message buses (Kafka) and stateless microservices to prevent cascading failures. High-volume data ingestion must never block client-facing request-response loops."
    },
    {
      icon: Terminal,
      title: "Algorithmic Precision & Data Structure Mastery",
      description: "With 450+ algorithmic problems solved on LeetCode across dynamic programming, trees, and graphs, I prioritize efficient time-space complexity and elegant, maintainable code."
    }
  ];

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-xs font-mono text-accent-indigo mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Engineering Tenets & Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          How I Build & <br />
          <span className="bg-gradient-to-r from-accent-indigo via-purple-300 to-accent-cyan bg-clip-text text-transparent">
            Approach Systems Engineering
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          The foundational principles guiding my technical decisions across backend architectures, cloud scalability, and continuous improvement.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 bg-obsidian-900/70 hover:border-accent-indigo/30 transition-all shadow-xl"
            >
              <div className="p-2.5 w-fit rounded-xl bg-accent-indigo/15 text-accent-indigo border border-accent-indigo/30 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
