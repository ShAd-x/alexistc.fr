export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  category: "Professionnel" | "Personnel" | "Académique";
  link?: string;
  imageSrc?: string;
}

export const projects: Project[] = [
  {
    id: "piesente",
    title: "Piesente.fr – Deuxième année de master",
    imageSrc: "/img/projects/piesente.webp",
    description:
      "Projet universitaire en équipe de cinq personnes, consistant en la refonte complète du site web d’une association de marche. Nous avons assuré l’ensemble du cycle de production, depuis le recueil des besoins et la rédaction du cahier des charges en collaboration avec le client, jusqu’à la conception de maquettes fonctionnelles et la rédaction de documents techniques. J’ai également participé au développement complet de l’application, front-end et back-end, ainsi qu’à sa mise en production finale.",
    technologies: ["Laravel", "PHP", "JavaScript", "Bootstrap"],
    tags: ["Fullstack web", "Association", "Gestion de projet", "Figma"],
    category: "Professionnel",
    link: "https://piesente.fr",
  },
  {
    id: "korusmc",
    title: "Serveur Minecraft KorusMC",
    imageSrc: "/img/projects/korusmc.webp",
    description:
      "Création et gestion d’un serveur Minecraft avec base de données, coordination d’équipe, outils collaboratifs, rédaction de cahiers des charges. Expérience forte en gestion de projet agile, organisation d’équipe et développement.",
    technologies: ["Java", "Kotlin", "MariaDB"],
    tags: [
      "Backend",
      "Base de données",
      "Gestion d'équipe",
      "Agile",
      "Serveur",
      "Minecraft",
    ],
    category: "Professionnel",
  },
  {
    id: "lotary",
    title: "Serveur Minecraft Lotary",
    imageSrc: "/img/projects/lotary.webp",
    description:
      "Participation comme développeur dans une équipe, développement de plusieurs fonctionnalités pour un serveur Minecraft.",
    technologies: ["Java", "MySQL"],
    tags: ["Backend", "Travail en équipe"],
    category: "Professionnel",
  },
  {
    id: "fasttyping",
    title: "Extension VSCode FastTyping",
    imageSrc: "/img/projects/fasttyping.webp",
    description:
      "Développement d’une extension Visual Studio Code pour automatiser des raccourcis d’écriture (ex: -- devient →).",
    technologies: ["TypeScript", "VSCode API"],
    tags: ["Extension", "Automatisation"],
    category: "Personnel",
    link: "https://github.com/ShAd-x/FastTyping",
  },
  {
    id: "portfolio",
    title: "Ce site - Mon portfolio personnel",
    imageSrc: "/img/projects/portfolio.png",
    description:
      "Site web personnel, permettant de présenter mes compétences et mes projets. Ce site sert à mon activité professionnelle et est régulièrement mis à jour. Il est développé avec React, TypeScript et Tailwind CSS et est optimisé pour le référencement naturel (SEO).",
    technologies: ["React", "Tailwind", "TypeScript", "Vite"],
    tags: ["Responsive", "Portfolio", "Web", "Figma"],
    category: "Personnel",
  },
  {
    id: "pokemon-ios",
    title: "Application iOS Pokémon",
    imageSrc: "/img/projects/cleanpoke.png",
    description:
      "Application iOS qui consomme l’API PokéAPI, architecture propre (Clean Architecture), gestion réseau et affichage structuré.",
    technologies: ["Swift", "PokéAPI"],
    tags: ["Clean Architecture", "iOS", "API"],
    category: "Personnel",
    link: "https://github.com/ShAd-x/CleanPoke",
  },
  {
    id: "medicit",
    title: "MedicIT – Première année de master",
    imageSrc: "/img/projects/medicit.webp",
    description:
      "Application de gestion d’un cabinet médical (comptes patients/médecins, validation, ordonnances).",
    technologies: ["Laravel", "PHP", "JavaScript", "Bootstrap"],
    tags: ["Fullstack web", "Santé"],
    category: "Académique",
  },
  {
    id: "app-bancaire",
    title: "Application Bancaire Web",
    imageSrc: "",
    description:
      "Développement d’une appli bancaire avec gestion de comptes, dépôts/retraits, transactions, base de données relationnelle.",
    technologies: ["Spring", "Java"],
    tags: ["Backend", "Web", "Finance", "Base de données", "Transactions"],
    category: "Académique",
    link: "https://github.com/ShAd-x/asi2-systemebancaire",
  },
  {
    id: "gestion-materiel",
    title: "Application Web de Gestion de Matériel",
    imageSrc: "/img/projects/angular.png",
    description:
      "Développement fullstack avec Angular (frontend) + Node.js/Express (backend) + MongoDB. Gestion d’équipements.",
    technologies: ["Angular", "Node.js", "Express", "MongoDB", "Mongoose"],
    tags: ["Fullstack web", "Authentification JWT", "NoSQL"],
    category: "Académique",
    link: "https://github.com/ShAd-x/equipment-management",
  },
  {
    id: "gestion-patients",
    title: "Application Web de Gestion de Patients",
    imageSrc: "",
    description: "Application CRUD en .NET Razor pour gestion de patients.",
    technologies: [".NET", "Razor"],
    tags: ["Web", "CRUD"],
    category: "Académique",
    link: "https://github.com/ShAd-x/projet_asi",
  },
];
