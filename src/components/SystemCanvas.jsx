import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Activity, Server, Database, Cloud, Radio, ShieldCheck, Cpu } from "lucide-react";

export default function SystemCanvas() {
  const [activeNode, setActiveNode] = useState(null);
  const [metrics, setMetrics] = useState({
    rps: 1420,
    latency: 24,
    health: "99.99%",
    logsIndexed: "48.2k/s"
  });

  // Randomize telemetry slightly for real-time heartbeat feel
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        rps: Math.floor(1380 + Math.random() * 80),
        latency: Math.floor(22 + Math.random() * 5),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    {
      id: "gateway",
      name: "OpenResty API Gateway",
      category: "Ingress & Routing",
      icon: ShieldCheck,
      color: "#38bdf8",
      pos: "top-left",
      stats: "Dynamic Rate Limiting • JWT Interception",
      details: "High-throughput ingress handling SSL termination, CORS, reverse proxying and token validation before microservice delegation."
    },
    {
      id: "services",
      name: "Node.js Core Microservices",
      category: "Backend Engine",
      icon: Server,
      color: "#10b981",
      pos: "center",
      stats: "REST APIs • Async Workflows",
      details: "Stateless microservice clusters handling core business logic, session validation, and service-to-service orchestration."
    },
    {
      id: "kafka",
      name: "Apache Kafka / MSK",
      category: "Event Streaming",
      icon: Radio,
      color: "#818cf8",
      pos: "top-right",
      stats: "Decoupled Event Streaming",
      details: "High-volume distributed event bus decoupling user activities, audit logs, and asynchronous worker tasks."
    },
    {
      id: "datastores",
      name: "MongoDB & DynamoDB",
      category: "Storage Layer",
      icon: Database,
      color: "#fbbf24",
      pos: "bottom-left",
      stats: "Aggregated Indexes & ACID Stores",
      details: "Document models for user profiles and transactions alongside ultra-fast key-value state for caching."
    },
    {
      id: "observability",
      name: "OpenSearch + Prometheus",
      category: "Observability Pipeline",
      icon: Activity,
      color: "#f43f5e",
      pos: "bottom-right",
      stats: "Filebeat • Thanos • Dashboards",
      details: "Full-stack distributed observability aggregating multi-tier logs and Prometheus metric federation with sub-second queries."
    }
  ];

  return (
    <div className="relative w-full rounded-2xl glass-panel p-6 border border-white/10 bg-obsidian-900/80 shadow-2xl overflow-hidden">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Status Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald"></span>
          </span>
          <span className="text-slate-300 font-semibold uppercase tracking-wider">Production Architecture Telemetry</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <div><span className="text-slate-400">Throughput:</span> <span className="text-accent-cyan font-bold">{metrics.rps} req/s</span></div>
          <div><span className="text-slate-400">Avg Latency:</span> <span className="text-accent-emerald font-bold">{metrics.latency}ms</span></div>
          <div><span className="text-slate-400">System Availability:</span> <span className="text-accent-cyan font-bold">{metrics.health}</span></div>
        </div>
      </div>

      {/* Interactive System Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
        {/* Gateway */}
        <div 
          onMouseEnter={() => setActiveNode(nodes[0])}
          onMouseLeave={() => setActiveNode(null)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeNode?.id === "gateway"
              ? "bg-accent-cyan/10 border-accent-cyan shadow-glow-cyan"
              : "bg-surface-glass border-white/10 hover:border-accent-cyan/40"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-cyan" />
              <span className="font-semibold text-sm text-slate-100">API Gateway</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-cyan/20 text-accent-cyan">OpenResty</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">Reverse Proxy, Rate Limiting & Auth Header Validation</p>
        </div>

        {/* Core Services (Center) */}
        <div 
          onMouseEnter={() => setActiveNode(nodes[1])}
          onMouseLeave={() => setActiveNode(null)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeNode?.id === "services"
              ? "bg-accent-emerald/10 border-accent-emerald shadow-glow-emerald"
              : "bg-surface-glass border-white/10 hover:border-accent-emerald/40"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-accent-emerald" />
              <span className="font-semibold text-sm text-slate-100">Core Microservices</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-emerald/20 text-accent-emerald">Node / Express</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">Stateless REST APIs, Microservice Routing & Async Workflows</p>
        </div>

        {/* Message Bus */}
        <div 
          onMouseEnter={() => setActiveNode(nodes[2])}
          onMouseLeave={() => setActiveNode(null)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeNode?.id === "kafka"
              ? "bg-accent-indigo/10 border-accent-indigo shadow-glow-indigo"
              : "bg-surface-glass border-white/10 hover:border-accent-indigo/40"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-accent-indigo" />
              <span className="font-semibold text-sm text-slate-100">Event Stream</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-indigo/20 text-accent-indigo">Kafka / MSK</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">High-Throughput Asynchronous Message Brokering</p>
        </div>

        {/* Datastores */}
        <div 
          onMouseEnter={() => setActiveNode(nodes[3])}
          onMouseLeave={() => setActiveNode(null)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeNode?.id === "datastores"
              ? "bg-accent-amber/10 border-accent-amber"
              : "bg-surface-glass border-white/10 hover:border-accent-amber/40"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-accent-amber" />
              <span className="font-semibold text-sm text-slate-100">Persistence Layer</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-amber/20 text-accent-amber">MongoDB & DynamoDB</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">ACID Transactions, Indexed Aggregations & Key-Value Caching</p>
        </div>

        {/* Cloud IAC */}
        <div 
          className="p-4 rounded-xl border bg-surface-glass border-white/10 hover:border-accent-violet/40 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-accent-violet" />
              <span className="font-semibold text-sm text-slate-100">Cloud Infrastructure</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-violet/20 text-accent-violet">AWS + Terraform</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">IAM, KMS, SQS, S3, ECR, CloudFront & Automated Provisioning</p>
        </div>

        {/* Observability Suite */}
        <div 
          onMouseEnter={() => setActiveNode(nodes[4])}
          onMouseLeave={() => setActiveNode(null)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeNode?.id === "observability"
              ? "bg-accent-rose/10 border-accent-rose"
              : "bg-surface-glass border-white/10 hover:border-accent-rose/40"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent-rose" />
              <span className="font-semibold text-sm text-slate-100">Observability Suite</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-rose/20 text-accent-rose">OpenSearch + Thanos</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">Unified Distributed Logs, Prometheus Metrics & Live Dashboards</p>
        </div>
      </div>

      {/* Dynamic Detail Callout when hovering */}
      <div className="relative z-10 mt-4 p-3 rounded-lg bg-obsidian-950/70 border border-white/5 text-xs text-slate-400 font-mono flex items-center justify-between">
        <div className="flex items-center gap-2 truncate">
          <span className="text-accent-cyan font-semibold">Active Inspector:</span>
          <span>{activeNode ? `${activeNode.name} — ${activeNode.details}` : "Hover over any architectural node to inspect data flow and production details."}</span>
        </div>
        <span className="hidden sm:inline text-slate-400 shrink-0 pl-4">Architecture Mode: Active</span>
      </div>
    </div>
  );
}
