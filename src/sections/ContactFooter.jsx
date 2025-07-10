import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <section id = "contact" className="bg-gradient-to-tr from-[#0f172a] via-[#0b0c1d] to-[#0f172a] text-starlight pt-20 pb-8 px-6 md:px-16 relative">
      <div className="absolute -top-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-auroraGreen to-nebulaPink opacity-20 blur-3xl rounded-full z-0" />

      <motion.div
        className="z-10 relative max-w-3xl mx-auto bg-white/10 backdrop-blur-glass p-8 rounded-2xl shadow-glass border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-auroraGreen">Let’s Connect 💬</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 text-starlight border border-white/20 focus:outline-none focus:ring-2 focus:ring-auroraGreen"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 text-starlight border border-white/20 focus:outline-none focus:ring-2 focus:ring-auroraGreen"
              required
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-white/10 text-starlight border border-white/20 focus:outline-none focus:ring-2 focus:ring-auroraGreen"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-auroraGreen text-midnight font-bold rounded-xl hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold mb-4">Find Me On</h3>
        <div className="flex justify-center gap-6 text-2xl text-starlight">
          <a href="https://github.com/bansalrachit19" target="_blank" className="hover:text-auroraGreen">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rachit-bansal-03961928b/" target="_blank" className="hover:text-auroraGreen">
            <FaLinkedin />
          </a>
          <a href="mailto:bansalrachit311@gmail.com" className="hover:text-auroraGreen">
            <FaEnvelope />
          </a>
          <a href="https://leetcode.com/u/rachit_bansal20/" target="_blank" className="hover:text-auroraGreen">
            <SiLeetcode />
          </a>
        </div>
        <div className="pt-3">(+91-8968922155)</div>
      </div>

      <footer className="mt-16 text-center text-starlight/70 text-sm">
        <div className="mb-2 w-full h-px bg-gradient-to-r from-transparent via-auroraGreen to-transparent" />
        <p>
          Built with 💖 by <span className="text-auroraGreen font-bold">Rachit Bansal</span> — {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
