import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero";
import Timeline from "./components/sections/Timeline";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer/Footer";
import Skills from "./components/sections/Skills";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { formations } from "./data/formations";
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
          cvHref={profile.cv}
          socials={heroSocials}
          location={profile.location}
        />
        <Timeline
          sectionId="experiences-professionnelles"
          items={experiences}
          title="Expériences professionnelles"
        />
        <Timeline
          sectionId="formations"
          items={formations}
          title="Formations"
          icon={
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 3L2 8l10 5 10-5-10-5zm0 7.236L4.618 8 12 4.764 19.382 8 12 10.236zM4 10.618v2.764c0 2.485 3.582 4.618 8 4.618s8-2.133 8-4.618v-2.764l-8 4-8-4z"
              />
            </svg>
          }
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
