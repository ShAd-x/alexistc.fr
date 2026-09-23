export interface SocialLink {
  label: string;
  href: string;
  kind?: "email" | "github" | "linkedin" | "malt" | "other";
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  timezone?: string;
  intro: string;
  avatar: string;
  socials: SocialLink[];
  status?: {
    available: boolean;
    label: string;
    sublabel?: string;
  };
  metrics?: { label: string; value: string }[];
  stack?: string[];
}

export const profile: Profile = {
  name: "Alexis Tatarkovic",
  title: "Développeur Full-Stack",
  email: "alexis@atcode.fr",
  location: "Rouen, France",
  timezone: "Europe/Paris",
  intro:
    "Avec plus de 4 ans d'expérience en développement web et mobile, j'accompagne les entreprises et créateurs dans la conception de solutions performantes, pérennes et soignées. De l'architecture logicielle au référencement naturel, chaque détail compte.",
  avatar: "/img/me.webp",
  status: {
    available: true,
    label: "Disponible pour missions",
    sublabel: "Freelance et projets ambitieux",
  },
  metrics: [
    { label: "Années d'expérience", value: "4+" },
    { label: "Projets menés", value: "12+" },
    { label: "Approche", value: "Full-Stack et SEO" },
  ],
  stack: [
    "Laravel",
    "React",
    "TypeScript",
    "Vue.js",
    "PHP 8",
    "Tailwind CSS",
    "Docker",
    "Flutter",
    "GraphQL",
    "MySQL",
    "SEO technique",
    "Vite",
    "E-commerce",
    "Paiement bancaire",
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:alexis@atcode.fr",
      kind: "email",
    },
    {
      label: "GitHub",
      href: "https://github.com/shad-x",
      kind: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexis-tatarkovic-8a16031a1/",
      kind: "linkedin",
    },
    {
      label: "Malt",
      href: "https://www.malt.fr/profile/alexistatarkovic",
      kind: "malt",
    },
  ],
};
