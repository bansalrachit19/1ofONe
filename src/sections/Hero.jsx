import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import heroPic from "../../src/assets/rachit.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-20 relative overflow-hidden bg-gradient-to-tr from-[#0f172a] via-[#141742] to-[#0f172a]"
    >
      <div className="absolute top-[-150px] left-[-100px] w-[700px] h-[700px] bg-gradient-to-br from-auroraGreen via-nebulaPink to-magenta blur-[150px] rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-tr from-electricTeal to-indigo-400 blur-[120px] rounded-full opacity-20 animate-ping" />

      <motion.div
        className="z-10 max-w-xl text-center lg:text-left space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-starlight leading-tight">
          Hey, I'm{" "}
          <span className="text-auroraGreen">Rachit Bansal</span> 🚀
        </h1>

        <div className="text-xl md:text-2xl text-starlight/80 font-medium h-[60px]">
          <Typewriter
            options={{
              strings: [
                "MERN Stack Wizard",
                "Inventor & Patent Holder",
                "Athlete • NDA Ranker • Tech Lead",
                "Builder of MindMend & Energy 3.0",
                "Captain Thapar Badminton Team",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </div>

        <div className="pt-4 space-x-4">
          <a
            href="https://drive.google.com/file/d/17aj2eKYFIQDGnfSoL4awqjnJZ2kVxv_5/view?usp=sharing"
            target="_blank"
            className="inline-block px-6 py-3 text-lg font-semibold bg-auroraGreen text-midnight rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="inline-block px-6 py-3 text-lg font-semibold border border-auroraGreen text-auroraGreen rounded-xl hover:bg-auroraGreen hover:text-midnight transition"
          >
            My Projects
          </a>
        </div>
      </motion.div>

      <motion.div
        className="z-10 w-[270px] md:w-[400px] relative mx-auto mb-10 lg:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="   shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src={heroPic}
            alt="Rachit Bansal"
            className="rounded-3xl w-full object-cover border-4 border-auroraGreen/20"
          />
        </div>
        <div className="absolute -bottom-8 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-auroraGreen to-nebulaPink opacity-30 blur-2xl animate-pulse" />
      </motion.div>
    </section>
  );
}
