import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Search, 
  FileText, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function Navbar({ onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "experience", "tech", "projects", "philosophy", "credentials", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Tech Stack", href: "#tech", id: "tech" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Philosophy", href: "#philosophy", id: "philosophy" },
    { name: "Credentials", href: "#credentials", id: "credentials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-obsidian-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand & Live Role Tag */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="flex items-center gap-2 text-slate-100 font-bold text-lg tracking-tight hover:text-accent-cyan transition-colors"
            >
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-accent-cyan to-blue-600 flex items-center justify-center text-obsidian-950 font-black text-sm shadow-glow-cyan">
                RB
              </span>
              <span className="hidden sm:inline font-sans">Rachit Bansal</span>
            </a>

            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span>Associate SE @ Birla Pivot</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-glass border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner-light">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-accent-cyan shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Command Palette & Resume */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-all font-mono shadow-sm group"
              aria-label="Open Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-accent-cyan group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline text-slate-400">Search</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400 border border-white/10">⌘K</kbd>
            </button>

            <a
              href="https://drive.google.com/file/d/1HdkCGQE8YnFq3d3ObuGXd4IXqUNQFaHO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accent-cyan/15 hover:bg-accent-cyan/25 border border-accent-cyan/40 text-xs font-medium text-accent-cyan transition-all font-sans shadow-glow-cyan"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-slate-100 hover:bg-white/10 transition-all"
              aria-label="Open Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-obsidian-900 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-accent-cyan text-obsidian-950 font-bold flex items-center justify-center text-xs">
                      RB
                    </span>
                    <span className="font-bold text-slate-100 text-sm">Rachit Bansal</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-4 px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 flex items-center gap-2 font-mono">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span>Associate SE @ Birla Pivot</span>
                </div>

                {/* Nav Links */}
                <div className="mt-6 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-accent-cyan transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom CTAs */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 font-mono"
                >
                  <Search className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Command Palette (⌘K)</span>
                </button>

                <a
                  href="https://drive.google.com/file/d/1HdkCGQE8YnFq3d3ObuGXd4IXqUNQFaHO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent-cyan text-obsidian-950 font-semibold text-xs transition-transform active:scale-95"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
                  <a href="https://github.com/bansalrachit19" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/rachit-bansal-03961928b/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
