import Hero from "./sections/Hero";
import AboutSkills from "./sections/AboutSkills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import LeadershipTimeline from "./sections/LeadershipTimeline";
import ContactFooter from "./sections/ContactFooter";
import Navbar from "./components/Navbar";
import AcademicChart from "./sections/AcademicChart";

function App() {
  return (
    <>
      <Navbar />
      <main className="font-boom">
        <Hero />
        <AboutSkills />
        <AcademicChart />
        <Projects />
        <Achievements />
        <LeadershipTimeline />
        <ContactFooter />
      </main>
    </>
  );
}

export default App;
