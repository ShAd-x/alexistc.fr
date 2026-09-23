import type { TimelineItem } from "../components/sections/Timeline";

export const experiences: TimelineItem[] = [
  {
    id: "exp-freelance-full-stack",
    title: "Développeur Full-Stack indépendant",
    company: "atcode",
    companyLink: "https://atcode.fr/",
    period: "Août 2026 · Aujourd’hui",
    location: "Rouen, France",
    description:
      "Conception, développement et optimisation de solutions web et mobiles sur-mesure pour les clients, de l’idée à la mise en production, avec réactivité et expertise technique.",
  },
  {
    id: "exp-pdd",
    title: "Développeur Full-Stack",
    company: "Human to Computer",
    companyLink: "https://www.humantocomputer.com/",
    period: "Décembre 2025 · Août 2026",
    location: "Rouen, France",
    description:
      "Développement full-stack sur un e-commerce pharmaceutique en production (PHP 8 legacy). Passerelle de paiement bancaire (CAWL), framework d'A/B testing server-side et carte de choix des points relais unifiée (Leaflet).\nIndustrialisation du socle PHP brut : migrations SQL maison, file de jobs asynchrones (workers exécutés par cron), maillage interne SEO automatisé, benchmark de chargement des pages et mise en place de règles pour le développement assisté par IA. Synchronisation du catalogue vers la Google Merchant API.\nEn parallèle, refonte vers une architecture découplée : API GraphQL (Laravel, Octane) + front Blade (htmx).",
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
    companyLink: "https://www.teleric.net/",
    period: "Septembre 2022 · Septembre 2025",
    location: "Amiens, France",
    description:
      "Mise en place d'une architecture micro-services sous Docker pour automatiser la génération de PDF personnalisés volumineux, permettant d'accélérer les temps de traitement et de fiabiliser les exports.\nModernisation de l'application web : migration progressive de vues Blade vers une interface réactive sous Vue.js, tout en optimisant les API Laravel sous-jacentes.\nRefonte de l'application mobile en Flutter (architecture BLoC) pour assurer un code maintenable et une navigation plus fluide sur le terrain.",
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
    companyLink: "https://www.teleric.net/",
    period: "Mars 2022 · Juin 2022",
    location: "Amiens, France",
    description:
      "Conception et développement de bout en bout d'une application web métier de pointage par QR code (Laravel, Blade, MariaDB).\nConception d'API REST sécurisées pour fiabiliser la synchronisation des données internes et refactorisation continue du code, garantissant un parcours utilisateur fluide et une gestion robuste des flux de pointage.",
    skills: ["Laravel", "Blade", "Bootstrap", "API"],
  },
];
