export interface SocialLink {
  label: string;
  href: string;
  kind?: "email" | "github" | "linkedin" | "other";
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  intro: string;
  avatar: string;
  cv: string;
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "Alexis Tatarkovic",
  title: "Développeur Fullstack",
  email: "contact@alexistc.fr",
  location: "Rouen, France",
  intro:
    "Avec plus de 3 ans d’expérience en développement web, j’accompagne les entreprises dans la création de produits utiles, performants et élégants.",
  avatar: "/src/assets/img/me.jpeg",
  cv: "/cv.pdf",
  socials: [
    { label: "Email", href: "mailto:contact@alexistc.fr", kind: "email" },
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
  ],
};
