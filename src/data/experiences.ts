import type { TimelineItem } from "../components/sections/Timeline";

export const experiences: TimelineItem[] = [
  {
    id: "exp-pdd",
    title: "Développeur Full-Stack",
    company: "Human to Computer",
    period: "Décembre 2025 · Août 2026",
    location: "Rouen, France",
    description:
      "Développement full-stack sur un e-commerce pharmaceutique en production (PHP 8 legacy). Passerelle de paiement bancaire (CAWL), framework d'A/B testing server-side et carte de choix des points relais unifiée (Leaflet, géocodage Nominatim). Industrialisation du socle PHP brut : migrations SQL maison, file de jobs asynchrones (workers exécutés par cron), maillage interne SEO automatisé, benchmark de chargement des pages et mise en place de règles pour le développement assisté par IA. Synchronisation du catalogue vers la Google Merchant API. En parallèle, refonte vers une architecture découplée : API GraphQL (Laravel, Octane) + front Blade (htmx).",
    skills: [
      "PHP 8",
      "MySQL / MariaDB",
      "Laravel",
      "GraphQL",
      "E-commerce",
      "Paiement en ligne",
      "Migrations SQL",
      "Jobs asynchrones",
      "A/B testing",
      "SEO technique",
      "Google Merchant API",
      "Leaflet",
    ],
  },
  {
    id: "exp-alt-teleric",
    title: "Développeur d'application (Alternance)",
    company: "Teleric",
    period: "Septembre 2022 · Septembre 2025",
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
    period: "Mars 2022 · Juin 2022",
    location: "Amiens, France",
    description:
      "Développement d'une application web de pointage par QR code (Laravel, Blade). Participation à la correction de bugs, à l'amélioration des fonctionnalités et à l'ajout d'API.",
    skills: ["Laravel", "Blade", "Bootstrap"],
  },
];
