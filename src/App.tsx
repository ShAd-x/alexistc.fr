import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero";
import Timeline from "./components/sections/Timeline";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer/Footer";
import Skills from "./components/sections/Skills";
import Expertise from "./components/sections/Expertise";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { navLinks } from "./data/navLinks";

function App() {
  const { name, email } = profile;

  const heroSocials = profile.socials.map((s) => {
    let icon: React.ReactNode;
    switch (s.kind) {
      case "email":
        icon = <Mail size={18} />;
        break;
      case "github":
        icon = <Github size={18} />;
        break;
      case "linkedin":
        icon = <Linkedin size={18} />;
        break;
      default:
        icon = <Mail size={18} />;
    }
    return { href: s.href, label: s.label, icon };
  });

  const footerLinks = profile.socials.map((s) => {
    let icon: React.ReactNode;
    switch (s.kind) {
      case "email":
        icon = <Mail size={16} />;
        break;
      case "github":
        icon = <Github size={16} />;
        break;
      case "linkedin":
        icon = <Linkedin size={16} />;
        break;
      default:
        icon = undefined;
    }
    return { href: s.href, label: s.label, icon };
  });

  return (
    <>
      <Navbar name={name} links={navLinks} />
      <main>
        <Hero
          name={name}
          title={profile.title}
          intro={profile.intro}
          avatarSrc={profile.avatar}
          socials={heroSocials}
          location={profile.location}
        />
        <Expertise />
        <Timeline
          sectionId="experiences-professionnelles"
          items={experiences}
          title="Expériences professionnelles"
        />
        <Skills />
        <Projects items={projects} />
        <Contact email={email} />
      </main>
      <Footer
        name={name}
        location={profile.location}
        links={footerLinks}
        navLinks={navLinks}
      />
    </>
  );
}

export default App;
