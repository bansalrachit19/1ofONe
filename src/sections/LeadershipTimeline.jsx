import { motion } from "framer-motion";
import { FaCrown, FaBicycle, FaRocket, FaChessKing, FaUserTie  } from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";

const timeline = [
  {
    title: "URJA - Technical and Event Management Department Head",
    year: "Dec 2023 – Feb 2025",
    icon: <FaUserTie />,
    desc: [
      "Organized Sports Fest 2024 & 2025 with 10+ sports events",
      "Led a 10-member team to revamp the website for better UX",
    ],
  },
  {
    title: "Captain Thapar Badminton Team",
    year: "Jan 2024 - present",
    icon: <FaCrown />,
    desc: [
      "Led team to Bronze at IIT Ropar’s AAROHAN & Gold at NIT Kurukshetra’s and PEC Chandigarh's INTERTECH",
      "Three consecutive times Gold winner at URJA",
      "Mentored new players and coordinated inter-college tournaments",
      "Maintained training discipline, trust among team members and strategic planning for matches",
    ],
  },
  {
    title: "Thapar Fitness Club - Core Member",
    year: "June 2023 – December 2024",
    icon: <FaRocket />,
    desc: [
      "Led Thaparlympics 2024 (Inter-branch) & ACE 2024 (Inter-year)",
      "Managed event planning, team coordination, logistics",
    ],
  },
  {
    title: "Cyclothon Event Lead",
    year: "Sep 2023",
    icon: <FaBicycle />,
    desc: [
      "Collaborated with Thapar Paryavaran Society",
      "Promoted fitness and sustainability across campus",
    ],
  },
];

export default function LeadershipTimeline() {
  return (
    <section id = "leadership" className="min-h-screen py-20 px-6 md:px-16 bg-gradient-to-tl from-midnight via-[#0b0c1d] to-midnight text-starlight relative">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-nebulaPink to-electricTeal opacity-20 blur-3xl rounded-full z-0" />

      <motion.h2
        className="text-4xl font-bold text-center text-auroraGreen mb-16 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Leadership Timeline 🧠👑
      </motion.h2>

      <div className="relative z-10 flex flex-col gap-12 border-l border-white/20 pl-6">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="relative ml-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <div className="absolute -left-6 top-2 w-8 h-8 z-20 bg-auroraGreen rounded-full flex items-center justify-center shadow-lg text-midnight">
              {item.icon}
            </div>

            <div className="bg-white/10 backdrop-blur-glass p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-nebulaPink">{item.title}</h3>
              <p className="text-sm text-starlight/60 mb-3">{item.year}</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-starlight/90">
                {item.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
