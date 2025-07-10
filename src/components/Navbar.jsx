import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-starlight">
        <a
          href="#hero"
          className="text-2xl font-bold text-auroraGreen tracking-wider hover:text-nebulaPink transition"
        >
          RACHIT BANSAL
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="hover:text-auroraGreen transition cursor-pointer"
            >
              <a href={link.href} className="transition-all duration-300">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {open && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden bg-[#0b0c1d] px-6 py-6 space-y-4 border-t border-white/10 text-sm"
        >
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="block text-starlight hover:text-auroraGreen"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
