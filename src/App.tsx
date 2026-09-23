import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero";
import TechMarquee from "./components/sections/TechMarquee";
import BentoProfile from "./components/sections/BentoProfile";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Timeline from "./components/sections/Timeline";
import Networks from "./components/sections/Networks";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer/Footer";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();
  const { name, email, location } = profile;

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      <Navbar name={name} email={email} />

      <main className="site-container">
        <Hero />
        <TechMarquee />
        <BentoProfile />
        <Skills />
        <Projects items={projects} />
        <Timeline sectionId="parcours" items={experiences} />
        <Networks />
        <Contact email={email} />
        <Footer name={name} location={location} />
      </main>
    </div>
  );
}
