import type { TimelineItem } from "../components/sections/Timeline";

export const experiences: TimelineItem[] = [
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
    skills: ["Laravel", "Blade", "Bootstrap"],
  },
];
