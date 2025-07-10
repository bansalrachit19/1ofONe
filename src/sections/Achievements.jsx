import { motion } from "framer-motion";
import { FaMedal, FaHackerrank, FaTrophy } from "react-icons/fa";
import { SiLeetcode, SiCoursera } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const achievements = [
  {
    title: "Patent Co-Inventor",
    desc: "Smart energy system (IN202511042404) - Awaiting Examination",
    icon: <FaTrophy />,
    link: "https://drive.google.com/file/d/1huI7_mq9YMForgdSRQwTf6-SIGu7CrJL/view?usp=sharing",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    desc: "Cloud basics, Azure services and security",
    icon: <VscAzure />,
    link: "https://drive.google.com/file/d/18sku_awCiyo5wU6R7KfwffgUlH97nU7F/view?usp=sharing",
  },
  {
    title: "Microsoft: Develop AI Solution in Azure",
    desc: "Azure AI Foundry & Services",
    icon: <VscAzure />,
    link: "https://drive.google.com/file/d/1Mt0xDFyjIUERRsHtQA14c2aVj7Yv1v8g/view?usp=sharing",
  },
  {
    title: "MERN + test automation",
    desc: "Certified by Xebia",
    icon: <SiCoursera />,
    link: "https://drive.google.com/drive/folders/14XioexRUpz4JHT7a2QeuQXe0qMMq2ODa?usp=sharing",
  },
  {
    title: "LeetCode 350+ Qs",
    desc: "Badges in Stacks, LinkedLists, BST, Sorting",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/rachit_bansal20/",
  },
  {
    title: "Hack4Change Selection for Prototype Round",
    desc: "NotifyGenie SMS App prototype selected",
    icon: <FaHackerrank />,
    link: "https://sms-info-service.vercel.app/",
  },
  {
    title: "Gold @ INTERTECH",
    desc: "Badminton Gold at NIT KUK / PEC CHD",
    icon: <FaMedal />,
    link: "https://drive.google.com/drive/folders/1kN-GocIpgGPgDTpr9aE-EMdNWeXvVzyR?usp=sharing",
  },
  {
    title: "Bronze @ IIT Ropar",
    desc: "Led team as Captain, won Bronze medal",
    icon: <FaMedal />,
    link: "https://drive.google.com/drive/folders/1kN-GocIpgGPgDTpr9aE-EMdNWeXvVzyR?usp=sharing",
  },
  {
    title: "NDA (Sep 2022) Cleared at First Attempt and Advanced Conference Round in TES Entry",
    desc: "Top 27/280+ in 34 SSB Allahabad, Nov 2022",
    icon: <FaMedal />,
    link: "https://drive.google.com/file/d/1kHLAb8cnHpGTiBithLFLri5gq9q-NfLa/view?usp=sharing",
  },
];

export default function Achievements() {
  return (
    <section id = "achievements" className="min-h-screen py-20 px-6 md:px-16 bg-midnight text-starlight relative">
      <div className="absolute -bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-auroraGreen to-nebulaPink opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

      <motion.h2
        className="text-4xl font-bold text-center text-auroraGreen mb-12 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Certifications & Achievements
      </motion.h2>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-glass rounded-xl p-6 shadow-glass hover:scale-[1.03] transition-all border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="text-3xl text-nebulaPink mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-starlight/80 text-sm mb-3">{item.desc}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                className="text-sm text-auroraGreen hover:underline"
              >
                View ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
