import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MindMend",
    desc: "A mental wellness platform featuring bookings with therapists, mood tracker, real-time video therapy, AI mood insights, community, and self-help tools.",
    tags: ["MERN", "Socket.IO", "JWT", "webRTC", "AI"],
    github: "https://github.com/bansalrachit19/MINDMEND-1",
    demo: "https://mindmend-1.vercel.app/",
  },
  {
    title: "Uhire (In Progress)",
    desc: "AI-driven interview prep platform with smart resume analysis, Coursera-based learning path suggestions, and real-time mock interviews.",
    tags: ["FastAPI", "MERN", "AI", "ML", "NLP"],
    github: "https://github.com/Anvit2512/hiring",
    demo: "",
  },
  {
    title: "Energy 3.0",
    desc: "Smart building solution using OpenCV, IoT, and automation to reduce power consumption at Thapar University.",
    tags: ["Node.js", "OpenCV", "IoT", "MongoDB"],
    github: "",
    demo: "https://docs.google.com/document/d/1wq4AtHJFZdLfaEdPd6a31JZFDUnuXG67A2uaKkWemXg/edit?tab=t.0",
  },
  {
    title: "StudyNotion",
    desc: "A full-stack learning platform enabling course creation, purchases, media uploads, and payment integration.",
    tags: ["ReactJS", "Node.js", "MongoDB", "Tailwind", "Cloudinary"],
    github: "https://github.com/bansalrachit19/Learn_With_StudyNotion",
    demo: "https://learn-with-study-notion-frontend.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id = "projects" className="min-h-screen py-20 px-6 md:px-16 bg-gradient-to-bl from-midnight via-[#0a0a1f] to-midnight text-starlight relative">
      <div className="absolute -top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-nebulaPink to-electricTeal opacity-20 blur-3xl rounded-full z-0" />

      <motion.h2
        className="text-4xl font-bold text-center text-auroraGreen mb-12 z-10 relative"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects That Define Me
      </motion.h2>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-glass p-6 rounded-2xl shadow-glass hover:scale-[1.03] transition-all duration-300 border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-nebulaPink mb-2">{proj.title}</h3>
            <p className="text-starlight/80 mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-white/10 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  className="text-starlight hover:text-auroraGreen transition"
                >
                  <FaGithub size={22} />
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  className="text-starlight hover:text-auroraGreen transition"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
