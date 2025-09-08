import type { TimelineItem } from "../components/sections/Timeline";

export const experiences: TimelineItem[] = [
  {
    id: "exp-freelance-fullstack",
    title: "Développeur fullstack freelance",
    company: "Indépendant",
    period: "Septembre 2025 — Aujourd’hui",
    location: "Rouen, France",
    description:
      "Vous avez un projet web ou mobile ? J’interviens en tant que développeur fullstack freelance pour concevoir, développer et optimiser vos solutions sur-mesure. Mon objectif : vous accompagner à chaque étape, de l’idée à la mise en production, avec réactivité, pédagogie et expertise technique. Travaillons ensemble pour concrétiser vos ambitions numériques.",
  },
  {
    id: "exp-alt-teleric",
    title: "Développeur d’application (Alternance)",
    company: "Teleric",
    period: "Septembre 2022 — Septembre 2025",
    location: "Amiens, France",
    description:
      "Conception et développement d’outils pour la gestion des pointages et la génération de PDF personnalisés (Laravel, Vue.js, Docker). Modernisation de l’application mobile (Flutter, architecture BLoC) et migration de pages Blade vers Vue.js avec adaptation du back-end. Mise en place de micro-services pour la génération de documents.",
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
      "Développement d’une application web de pointage par QR code (Laravel, Blade). Participation à la correction de bugs, à l’amélioration des fonctionnalités et à l’ajout d’API.",
    skills: ["Laravel", "Blade", "Bootstrap"],
  },
];
