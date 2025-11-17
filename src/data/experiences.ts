import type { TimelineItem } from "../components/sections/Timeline";

export const experiences: TimelineItem[] = [
  {
    id: "exp-alt-teleric",
    title: "Développeur d'application (Alternance)",
    company: "Teleric",
    period: "Septembre 2022 — Septembre 2025",
    location: "Amiens, France",
    description:
      "Conception et développement d'outils pour la gestion des pointages et la génération de PDF personnalisés (Laravel, Vue.js, Docker). Modernisation de l'application mobile (Flutter, architecture BLoC) et migration de pages Blade vers Vue.js avec adaptation du back-end. Mise en place de micro-services pour la génération de documents.",
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
      "Développement d'une application web de pointage par QR code (Laravel, Blade). Participation à la correction de bugs, à l'amélioration des fonctionnalités et à l'ajout d'API.",
    skills: ["Laravel", "Blade", "Bootstrap"],
  },
];
