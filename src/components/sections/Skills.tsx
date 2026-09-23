import { Code2, Layers, Database, CreditCard, Cpu, TrendingUp } from "lucide-react";

interface SkillGroup {
  title: string;
  tagline: string;
  icon: typeof Code2;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Langages",
    tagline: "Typage strict, logique serveur robuste et développement applicatif",
    icon: Code2,
    items: ["TypeScript", "PHP", "JavaScript", "Java", "Dart"],
  },
  {
    title: "Frameworks",
    tagline: "Architectures modernes réactives, SPA, SSR et composants modulaires",
    icon: Layers,
    items: ["Laravel", "React.js", "Vue.js", "Livewire", "Flutter", "Express.js", "AdonisJS"],
  },
  {
    title: "Bases de données",
    tagline: "Modélisation relationnelle, volumétrie, intégrité et NoSQL",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "E-commerce et paiement",
    tagline: "Tunnels de commande, flux sécurisés, webhooks et conformité 3DS",
    icon: CreditCard,
    items: ["Paiement en ligne", "Apple Pay / Google Pay", "Stripe API", "Gestion des flux"],
  },
  {
    title: "Industrialisation et performance",
    tagline: "Conteneurisation, queues asynchrones et optimisation SQL",
    icon: Cpu,
    items: ["Docker", "Jobs asynchrones", "Migrations SQL", "Index et requêtes", "Optimisation"],
  },
  {
    title: "Expérimentation et SEO",
    tagline: "Core Web Vitals, visibilité organique, analytics et données structurées",
    icon: TrendingUp,
    items: ["SEO technique", "Core Web Vitals", "Données structurées", "A/B testing", "Statistiques", "Google Merchant"],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="section-wrapper">
      <div className="section-head reveal-on-scroll">
        <h2 className="section-title">
          Compétences<span>.</span>
        </h2>
        <p className="section-subtitle">
          Technologies maîtrisées, outils d'ingénierie et domaines d'expertise appliqués au quotidien.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          const delayClass = `reveal-delay-${(index % 3) + 1}`;

          return (
            <article
              key={group.title}
              className={`skill-card reveal-on-scroll ${delayClass} group`}
            >
              {/* Subtle top amber accent line on hover */}
              <div className="skill-card-line" />

              {/* Ambient radial glow inside card on hover */}
              <div className="skill-card-glow" />

              <div>
                {/* Header: Icon & Monospace Index */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="skill-icon-box">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[var(--accent-text)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-full">
                    // {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="mb-2 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  {group.title}
                </h3>
                <p className="mb-5 text-xs text-[var(--text-secondary)] leading-relaxed min-h-[34px]">
                  {group.tagline}
                </p>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-chip"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
