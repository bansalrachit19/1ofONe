import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  Briefcase, 
  Layers, 
  Cpu, 
  Award, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  Code2, 
  Copy, 
  X,
  ExternalLink
} from "lucide-react";
import { useToast } from "./Toast";
import confetti from "canvas-confetti";

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { addToast } = useToast();

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("bansalrachit311@gmail.com");
    addToast("Email copied to clipboard: bansalrachit311@gmail.com", "success");
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setIsOpen(false);
  }, [addToast, setIsOpen]);

  const items = [
    {
      category: "Navigation",
      id: "nav-hero",
      title: "Home / Overview",
      icon: Cpu,
      action: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      category: "Navigation",
      id: "nav-experience",
      title: "Birla Pivot Career Progression",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      category: "Navigation",
      id: "nav-tech",
      title: "Technical Ecosystem & Skills",
      icon: Layers,
      action: () => {
        document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      category: "Navigation",
      id: "nav-projects",
      title: "Featured Engineering Projects",
      icon: Code2,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      category: "Navigation",
      id: "nav-credentials",
      title: "Patents, Certifications & Academics",
      icon: Award,
      action: () => {
        document.getElementById("credentials")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      category: "Navigation",
      id: "nav-contact",
      title: "Contact Hub & Terminal",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    },
    {
      category: "Quick Actions",
      id: "action-copy-email",
      title: "Copy Email (bansalrachit311@gmail.com)",
      icon: Copy,
      action: handleCopyEmail
    },
    {
      category: "External Links",
      id: "link-resume",
      title: "View Official Resume (PDF)",
      icon: FileText,
      action: () => {
        window.open("https://drive.google.com/file/d/1HdkCGQE8YnFq3d3ObuGXd4IXqUNQFaHO/view?usp=sharing", "_blank");
        setIsOpen(false);
      }
    },
    {
      category: "External Links",
      id: "link-github",
      title: "GitHub Profile (@bansalrachit19)",
      icon: Github,
      action: () => {
        window.open("https://github.com/bansalrachit19", "_blank");
        setIsOpen(false);
      }
    },
    {
      category: "External Links",
      id: "link-linkedin",
      title: "LinkedIn Profile",
      icon: Linkedin,
      action: () => {
        window.open("https://www.linkedin.com/in/rachit-bansal-03961928b/", "_blank");
        setIsOpen(false);
      }
    },
    {
      category: "External Links",
      id: "link-leetcode",
      title: "LeetCode Profile (450+ Solved)",
      icon: Code2,
      action: () => {
        window.open("https://leetcode.com/u/rachit_bansal20/", "_blank");
        setIsOpen(false);
      }
    },
    {
      category: "External Links",
      id: "link-patent",
      title: "Patent Document (IN202511042404)",
      icon: Award,
      action: () => {
        window.open("https://drive.google.com/file/d/1huI7_mq9YMForgdSRQwTf6-SIGu7CrJL/view?usp=sharing", "_blank");
        setIsOpen(false);
      }
    }
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyNavigation = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl rounded-2xl bg-obsidian-900 border border-white/10 shadow-2xl overflow-hidden z-10 text-slate-100"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-obsidian-850">
              <Search className="w-5 h-5 text-accent-cyan shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyNavigation}
                placeholder="Type a command, jump to section, or open link..."
                className="w-full bg-transparent text-sm focus:outline-none placeholder-slate-400 font-sans"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-200 rounded-md hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/5">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-sm">
                  No matching commands found for <span className="text-slate-200 font-mono">"{query}"</span>
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-accent-cyan/15 text-accent-cyan"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected ? "bg-accent-cyan/20 text-accent-cyan" : "bg-white/5 text-slate-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{item.title}</div>
                          <div className="text-xs text-slate-400 font-mono">{item.category}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        {isSelected && <ArrowRight className="w-3.5 h-3.5 text-accent-cyan" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer / Shortcuts */}
            <div className="px-4 py-2.5 bg-obsidian-950/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">↑↓</kbd> Navigate</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">↵</kbd> Select</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">esc</kbd> Close</span>
              </div>
              <span className="text-slate-400">⌘K / Ctrl+K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
