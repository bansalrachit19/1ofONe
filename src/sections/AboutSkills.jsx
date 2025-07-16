import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaUserTie, FaUsers, FaMicrophone, FaHandshake, FaClock, FaBolt , FaHtml5  } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMongodb, SiTailwindcss, SiCplusplus, SiJavascript, SiPostman, SiExpress , SiArduino, SiSelenium, SiSocketdotio } from "react-icons/si";

const skills = {
  Tech: [
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <FaReact />, label: "React.js" },
    { icon: <SiCplusplus />, label: "C++" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiSelenium />, label: "Selenium" },
    { icon: <SiSocketdotio />, label: "Socket.io" },
    { icon: <SiArduino />, label: "Arduino" },
  ],
  Tools: [
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <FaDatabase />, label: "MySQL" },
    { icon: <VscVscode />, label: "VS Code" },
  ],
  Soft: [
    { icon: <FaUserTie  />, label: "Leadership" },
    { icon: <FaUsers  />, label: "Teamwork" },
    { icon: <FaMicrophone  />, label: "Public Speaking" },
    { icon: <FaHandshake  />, label: "Adaptability" },
    { icon: <FaClock  />, label: "Hardworking" },
    { icon: <FaBolt />, label: "Quick Learner" },
  ],
};

export default function AboutSkills() {
  const [activeTab, setActiveTab] = useState("Tech");

  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-16 bg-midnight text-starlight relative">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-nebulaPink to-auroraGreen opacity-20 blur-3xl rounded-full z-0" />

      <div className="relative z-10 grid md:grid-cols-2 gap-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-auroraGreen">About Me</h2>
          <p className="text-starlight/80 leading-relaxed text-justify">
            I'm a passionate Final Year Computer Engineering undergrad at Thapar Institute (CGPA: 8.69), a MERN stack developer, an AI enthusiast. I'm skilled in Data Structures and Algorithms, and I enjoy solving complex problems with simple, efficient solutions.
          </p>
          <p className="text-starlight/70 text-justify">
            I’ve built platforms like MindMend and Uhire, co-invented a patent, and led major events and technical teams — blending innovation, leadership, and real-world impact.
          </p>
          <p className="text-starlight/70 text-justify">
            Outside the code editor, I'm a state-ranked badminton player and team captain, which taught me discipline, strategy, and the power of teamwork.
          </p>
          <p className="text-starlight/70 text-justify">
            I’m looking for a company where I can keep growing, contribute to something meaningful, and work alongside people who value curiosity, empathy, and clean, effective solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1-AgNattulu1t3SFVmAI3omqyR_UdVgC2/view?usp=sharing"
            target="_blank"
            className="inline-block px-6 py-2 mt-4 bg-auroraGreen text-midnight font-semibold rounded-xl hover:scale-105 transition"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-4 mb-6">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  activeTab === tab
                    ? "bg-auroraGreen text-midnight"
                    : "bg-white/10 text-starlight hover:bg-white/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills[activeTab].map(({ icon, label }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 backdrop-blur-glass shadow-glass hover:scale-110 transition"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl text-nebulaPink">{icon}</div>
                <span className="text-sm mt-2">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
