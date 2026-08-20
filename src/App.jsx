import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import TechEcosystem from "./sections/TechEcosystem";
import Projects from "./sections/Projects";
import Philosophy from "./sections/Philosophy";
import Credentials from "./sections/Credentials";
import ContactFooter from "./sections/ContactFooter";
import { ToastProvider } from "./components/Toast";

function PortfolioContent() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 selection:bg-accent-cyan/25 selection:text-accent-cyan relative overflow-x-hidden font-sans">
      {/* Background Micro Grid Layer */}
      <div className="fixed inset-0 bg-grid-subtle opacity-30 pointer-events-none z-0" />
      
      {/* Top Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-radial-gradient pointer-events-none z-0" />

      {/* Global Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Global ⌘K Command Palette */}
      <CommandPalette isOpen={commandPaletteOpen} setIsOpen={setCommandPaletteOpen} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <Experience />
        <TechEcosystem />
        <Projects />
        <Philosophy />
        <Credentials />
        <ContactFooter />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <PortfolioContent />
    </ToastProvider>
  );
}
