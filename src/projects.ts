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
    title: "Piesente – Deuxième année de master",
    imageSrc: "",
    description:
      "Projet universitaire en équipe, refonte complète d’un site d’association (analyse besoins, maquettes, dev complet).",
    technologies: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
    tags: [
      "Fullstack",
      "Web",
      "Association",
      "Maquettage",
      "Gestion de projet",
    ],
    category: "Professionnel",
    link: "https://github.com/piesente/piesente",
  },
  {
    id: "korusmc",
    title: "Serveur Minecraft KorusMC",
    imageSrc: "",
    description:
      "Création et gestion d’un serveur Minecraft avec base de données, coordination d’équipe, outils collaboratifs, rédaction de cahiers des charges. Expérience forte en gestion de projet agile, organisation d’équipe et développement backend.",
    technologies: ["Java", "Kotlin", "MySQL", "Agile", "Gestion de projet"],
    tags: [
      "Backend",
      "Base de données",
      "Gestion d'équipe",
      "Agile",
      "Serveur",
      "Minecraft",
    ],
    category: "Professionnel",
    link: "https://github.com/korusmc/korusmc",
  },
  {
    id: "lotary",
    title: "Serveur Minecraft Lotary",
    imageSrc: "",
    description:
      "Participation comme développeur dans une équipe, développement de plusieurs fonctionnalités pour un serveur Minecraft.",
    technologies: ["Java", "Minecraft"],
    tags: ["Backend", "Jeu vidéo", "Travail en équipe", "Serveur"],
    category: "Professionnel",
    link: "https://github.com/lotary/lotary",
  },
  {
    id: "fasttyping",
    title: "Extension VSCode FastTyping",
    imageSrc: "",
    description:
      "Développement d’une extension Visual Studio Code pour automatiser des raccourcis d’écriture (ex: -- devient →).",
    technologies: ["TypeScript", "VSCode API"],
    tags: ["Extension", "Productivité", "Automatisation", "VSCode"],
    category: "Personnel",
    link: "https://github.com/tonprofil/fasttyping",
  },
  {
    id: "pokemon-ios",
    title: "Application iOS Pokémon",
    imageSrc: "",
    description:
      "Application iOS qui consomme l’API PokéAPI, architecture propre (Clean Architecture), gestion réseau et affichage structuré.",
    technologies: ["Swift", "Clean Architecture", "PokéAPI"],
    tags: ["Mobile", "iOS", "API", "Architecture", "Swift"],
    category: "Personnel",
    link: "https://github.com/tonprofil/pokemon-ios",
  },
  {
    id: "medicit",
    title: "MedicIT – Première année de master",
    imageSrc: "",
    description:
      "Application de gestion d’un cabinet médical (comptes patients/médecins, validation, ordonnances).",
    technologies: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
    tags: ["Fullstack", "Web", "Santé", "Gestion", "CRUD"],
    category: "Académique",
    link: "https://github.com/medicit/medicit",
  },
  {
    id: "app-bancaire",
    title: "Application Bancaire Web",
    imageSrc: "",
    description:
      "Développement d’une appli bancaire avec gestion de comptes, dépôts/retraits, transactions, base de données relationnelle.",
    technologies: ["Spring", "Java", "HTML"],
    tags: ["Backend", "Web", "Finance", "Base de données", "Transactions"],
    category: "Académique",
    link: "https://github.com/tonprofil/app-bancaire",
  },
  {
    id: "gestion-materiel",
    title: "Application Web de Gestion de Matériel",
    imageSrc: "",
    description:
      "Développement fullstack avec Angular (frontend) + Node.js/Express (backend) + MongoDB. Gestion d’équipements.",
    technologies: ["Angular", "Node.js", "Express", "MongoDB"],
    tags: ["Fullstack", "Web", "Gestion", "Matériel", "NoSQL"],
    category: "Académique",
    link: "https://github.com/tonprofil/gestion-materiel",
  },
  {
    id: "gestion-patients",
    title: "Application Web de Gestion de Patients",
    imageSrc: "",
    description: "Application CRUD en .NET Razor pour gestion de patients.",
    technologies: [".NET", "Razor"],
    tags: ["Web", "CRUD", "Santé", "Gestion", ".NET"],
    category: "Académique",
    link: "https://github.com/tonprofil/gestion-patients",
  },
];
