import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="pt-6 pb-16 md:pt-12 md:pb-20">
      <h1 className="space-y-2 md:space-y-3 mb-10">
        <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.98] text-[var(--text-primary)]">
          Développeur full-stack.
        </span>
        <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.98] text-[var(--text-secondary)]">
          Web et applications.
        </span>
        <span className="hero-accent block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[1.08] pb-2">
          Simple et pérenne.
        </span>
      </h1>

      <div className="max-w-3xl">
        <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
          Développeur basé à Rouen, je conçois et réalise des <strong className="text-[var(--text-primary)] font-medium">applications web et mobiles sur mesure</strong>, de l'architecture back-end aux interfaces soignées. Je privilégie le code lisible, les performances concrètes et l'autonomie technique, pour des projets personnels ou des missions freelance.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-8">
          <a href="#projets" className="btn-primary">
            <span>Voir les projets</span>
            <ArrowDown size={14} />
          </a>
          <a href="https://atcode.fr/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <span>Studio web atcode</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
