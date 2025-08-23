import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { Github, Linkedin, Mail } from "lucide-react";
import type { TimelineItem } from "./components/Timeline";
import { profile } from "./profile";
import { projects as importedProjects } from "./projects";

function App() {
  const { name, email } = profile;

  // Expériences professionnelles
  const experiences: TimelineItem[] = [
    {
      id: "exp-alt-teleric",
      title: "Développeur d’application (Alternance)",
      company: "Teleric",
      period: "Septembre 2022 — Aujourd’hui",
      location: "Amiens, France",
      description:
        "Développement d'un interfaçage pour la récupération de données de pointages entre Teleric et une autre entreprise de pointage (Laravel, Blade). Mise en place d'applications sous container Docker. Développement d'un générateur de PDF personnalisable, avec paramétrage via interface web en Vue.js et Laravel. Serveur de génération de PDF en micro-service avec l'outil wkhtmltopdf. Refonte du planning des utilisateurs de l'application mobile codée en Flutter avec l'architecture BLoC. Refonte de page Blade en Vue.js, et ainsi, refonte du back-end en Laravel pour convenir aux nouvelles vues. Utilisation des SGBD MariaDB, PostgreSQL et SQLite.",
      skills: [
        "Laravel",
        "Vue.js",
        "Blade",
        "CSS/SCSS",
        "JavaScript/TypeScript",
        "Flutter",
        "Docker",
        "MariaDB/PostgreSQL/SQLite",
        "Bootstrap",
        "wkhtmltopdf",
      ],
    },
    {
      id: "exp-stage-teleric",
      title: "Développeur web (Stage)",
      company: "Teleric",
      period: "Mars 2022 - Juin 2022",
      location: "Amiens, France",
      description:
        "Développement d’application web de pointage par QR code (Laravel, Blade). Correction de bugs, amélioration de fonctionnalités et ajout de routes API.",
      skills: ["Laravel", "Blade", "Bootstrap", "API", "QR Code"],
    },
  ];

  // Formations
  const formations: TimelineItem[] = [
    {
      id: "form-miage",
      title: "Master MIAGE",
      company: "UPJV Amiens",
      period: "2023 — Aujourd’hui",
      location: "Amiens, France",
      description:
        "Option : Organisation des systèmes d’information de l’entreprise.",
      skills: ["Systèmes d’information", "Organisation"],
    },
    {
      id: "form-rgi",
      title: "Licence Professionnelle RGI",
      company: "IUT Amiens",
      period: "2022 — 2023",
      location: "Amiens, France",
      description: "Option : ERP (Enterprise Resource Planning).",
      skills: ["Réseaux", "ERP"],
    },
    {
      id: "form-dut",
      title: "DUT Informatique",
      company: "IUT Amiens",
      period: "2020 — 2022",
      location: "Amiens, France",
      description: "Spécialité : IoT (Internet of Things).",
      skills: ["IoT"],
    },
  ];

  // Adaptation des projets importés au format attendu par le composant Projects
  const projects = importedProjects;

  // Mapping utilitaire (source unique: profile.socials)
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
      <Navbar name={name} />
      <main>
        <Hero
          name={name}
          title={profile.title}
          intro={profile.intro}
          avatarSrc={profile.avatar}
          cvHref={profile.cv}
          socials={heroSocials}
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
      <Footer name={name} location={profile.location} links={footerLinks} />
    </>
  );
}

export default App;
