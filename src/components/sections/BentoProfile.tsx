export default function BentoProfile() {
  return (
    <section id="a-propos" className="section-wrapper">
      <div className="section-head reveal-on-scroll">
        <h2 className="section-title">
          À propos<span>.</span>
        </h2>
        <p className="section-subtitle">
          Développeur full-stack pragmatique, attentif à la clarté du code et à l'expérience utilisateur.
        </p>
      </div>

      <div className="reveal-on-scroll group relative overflow-hidden rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:shadow-xl hover:shadow-[var(--accent-glow)] transition-all duration-500 ease-out p-6 sm:p-8">
        {/* Subtle ambient light on hover */}
        <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[var(--accent-subtle)] opacity-0 blur-3xl group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 relative z-10">
          <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[var(--border-strong)] group-hover:border-[var(--border-accent)] transition-colors duration-500 shadow-xl">
            <img
              src="/img/me.webp"
              alt="Alexis Tatarkovic"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[var(--accent-text)] bg-[var(--accent-subtle)] border border-[var(--border-accent)] px-3 py-1 rounded-full mb-3 shadow-xs">
              <span className="size-1.5 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
              <span>Développeur full-stack</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Alexis Tatarkovic
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2.5 leading-relaxed">
              Basé à <strong className="text-[var(--text-primary)] font-semibold">Rouen</strong>, je travaille principalement à distance et en Normandie. Co-fondateur du studio web <strong className="text-[var(--text-primary)] font-semibold">atcode</strong>, je conçois et développe des applications web et mobiles.
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
              J'interviens sur le développement full-stack, de l'interface aux API et à la mise en production. Je suis ouvert aux missions freelance et aux collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
