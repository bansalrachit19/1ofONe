import React, { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft } from "lucide-react";
import { useToast } from "./Toast";
import confetti from "canvas-confetti";

export default function TerminalBox() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Rachit Bansal Interactive Shell v2.5 (x86_64-linux-gnu)" },
    { type: "system", text: "Type 'help' to inspect available system commands or 'experience' to view career progression." }
  ]);
  const terminalEndRef = useRef(null);
  const { addToast } = useToast();

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${input}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  • about       - Overview & engineering profile
  • experience  - Birla Pivot (Aditya Birla Group) career timeline
  • skills      - Core tech ecosystem & production stack
  • projects    - Top architectural case studies & systems
  • patent      - Patent details (IN202511042404)
  • academics   - B.Tech Computer Engineering (8.80 CGPA, 10.00 Sem 8 SGPA)
  • resume      - Open official resume in new tab
  • contact     - Email, phone, LinkedIn & GitHub details
  • copy-email  - Copy bansalrachit311@gmail.com to clipboard
  • clear       - Clear terminal output`
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: "Rachit Bansal — Associate Software Engineer at Birla Pivot (Aditya Birla Group).\nSpecializing in backend platform engineering, AWS infrastructure (Terraform), Kubernetes & Helm, API Gateway automation, custom endpoint rate limiting, and in-house frontend observability (Faro SDK, Alloy, OpenTelemetry, OpenSearch)."
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          text: `[1] Birla Pivot (Aditya Birla Group) — Associate Software Engineer (2026 – Present, Full-Time)
    • Configurable endpoint-level rate limits (minute/hour policies, HTTP 429 enforcement).
    • Automated API Gateway exposure pipeline (Terraform, automated PRs, MS Teams review).
    • In-house browser telemetry pipeline (Faro SDK → Alloy → OTel → Logstash → OpenSearch).
    • Kubernetes & Helm microservice deployments, Prometheus metrics, and operational automation.
[2] Birla Pivot (Aditya Birla Group) — Software Engineering Intern (2026, 6 Months, Bangalore)
    • AWS Terraform IAC across core cloud services, Jenkins & Bitbucket CI/CD, and Filebeat/Logstash/OpenSearch logging.`
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `Cloud/DevOps : AWS (API Gateway, ACM, Load Balancers, Cognito, Aurora and RDS, MSK), Terraform, Kubernetes, Helm, Docker, Jenkins
Backend      : Kubernetes Microservices, Endpoint Rate Limiting (Minute/Hour), API Gateway Automation, OpenResty, JWT, Node.js
Observability: Faro SDK, Alloy, OpenTelemetry Collector, Logstash, OpenSearch, Prometheus, Kafka / MSK
Databases    : Redis, MongoDB, Amazon Aurora & RDS (MySQL), DynamoDB, S3
Languages    : C++ (DSA 450+ LeetCode Solved), JavaScript, Python`
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `• In-House Frontend Observability — Faro SDK → Alloy → OTel → Logstash → OpenSearch Web Vitals & Error Ingestion
• API Gateway Exposure Automation — Declarative Terraform, Automated PRs & MS Teams Review Workflow
• Configurable API Rate Limiting   — Fine-Grained Endpoint Minute/Hour Policies & HTTP 429 Gateway Shield
• MindMend                         — Full-Stack WebRTC Telehealth & Real-Time Consultation Platform
• Smart Energy 3.0 (Patent)        — IoT Relays & OpenCV Computer Vision Dynamic Facility Load Optimizer
• Enterprise Auth & RBAC           — Cryptographic JWT Microservice Engine with Salted Bcrypt & Role Trees`
        });
        break;

      case "patent":
        newHistory.push({
          type: "output",
          text: `Patent Application: IN202511042404 (Awaiting Examination)
Title: Automated Dynamic Energy Calculation & Control System for Multi-Zone Facilities
Role: Co-Inventor (Indian Patent Office)
Domain: OpenCV Occupancy Tracking, Dynamic Thermal Modeling, IoT Relays.`
        });
        break;

      case "academics":
        newHistory.push({
          type: "output",
          text: `Degree: B.Tech in Computer Engineering, Thapar Institute of Engineering and Technology (2022–2026)
Final CGPA: 8.80 / 10.0
Highlights: 8th Semester SGPA: 10.00 | 7th Semester SGPA: 9.38 (CGPA: 8.78)`
        });
        break;

      case "resume":
        window.open("https://drive.google.com/file/d/1HdkCGQE8YnFq3d3ObuGXd4IXqUNQFaHO/view?usp=sharing", "_blank");
        newHistory.push({ type: "output", text: "Opening resume in a new tab..." });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `Email    : bansalrachit311@gmail.com
Phone    : +91-8968922155
LinkedIn : linkedin.com/in/rachit-bansal-03961928b/
GitHub   : github.com/bansalrachit19
LeetCode : leetcode.com/u/rachit_bansal20/`
        });
        break;

      case "copy-email":
        navigator.clipboard.writeText("bansalrachit311@gmail.com");
        addToast("Copied bansalrachit311@gmail.com to clipboard!", "success");
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.9 } });
        newHistory.push({ type: "output", text: "✓ bansalrachit311@gmail.com copied to clipboard." });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo":
      case "hire":
        newHistory.push({
          type: "output",
          text: "🚀 Access Granted! Reach out directly via email at bansalrachit311@gmail.com or connect on LinkedIn."
        });
        confetti({ particleCount: 50, spread: 70 });
        break;

      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${cmd}'. Type 'help' to see all available commands.`
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-white/10 bg-obsidian-950/90 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-obsidian-900 border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="ml-2 text-slate-400 font-sans text-xs">rachit@production-bastion:~</span>
        </div>
        <span className="text-[11px] text-slate-400 hidden sm:inline">bash (interactive)</span>
      </div>

      {/* Terminal Screen */}
      <div className="p-4 sm:p-5 h-64 sm:h-72 overflow-y-auto space-y-2 select-text">
        {history.map((item, i) => (
          <div key={i} className="leading-relaxed">
            {item.type === "system" && (
              <span className="text-slate-400">{item.text}</span>
            )}
            {item.type === "user" && (
              <span className="text-accent-cyan font-semibold">{item.text}</span>
            )}
            {item.type === "output" && (
              <pre className="text-slate-300 whitespace-pre-wrap font-mono mt-0.5">{item.text}</pre>
            )}
            {item.type === "error" && (
              <span className="text-accent-rose">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Command Input Field */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-obsidian-900 border-t border-white/10">
        <span className="text-accent-emerald font-bold">rachit@bastion:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'experience', 'projects'..."
          className="w-full bg-transparent text-slate-100 focus:outline-none placeholder-slate-400 text-xs font-mono"
        />
        <button
          type="submit"
          className="p-1 text-slate-400 hover:text-accent-cyan transition-colors"
          aria-label="Send command"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}