export const expertiseText =
  "Je vous accompagne de l’idée à la mise en ligne : écoute, conseils, maquettage, développement agile, et suivi personnalisé. Mon objectif : transformer vos besoins en solutions concrètes, modernes et accessibles, tout en vous offrant une expérience fluide et transparente.";

export type Step = {
  icon: "lightbulb" | "layers" | "rocket" | "users";
  title: string;
  desc: string;
};

export const expertiseSteps: Step[] = [
  {
    icon: "lightbulb",
    title: "Écoute & analyse",
    desc: "Compréhension de vos besoins, échanges clairs et vulgarisation technique pour partir sur de bonnes bases.",
  },
  {
    icon: "layers",
    title: "Maquettage & conception",
    desc: "Création de maquettes modernes et fonctionnelles (UX/UI), validation avec vous avant tout développement.",
  },
  {
    icon: "rocket",
    title: "Développement agile",
    desc: "Méthode agile : avancement par étapes, retours réguliers, adaptation continue et livraison rapide de solutions fiables.",
  },
  {
    icon: "users",
    title: "Accompagnement & suivi",
    desc: "Formation, documentation, support et évolutions : je reste disponible pour garantir la réussite et la pérennité de votre projet.",
  },
];
