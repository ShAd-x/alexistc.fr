import { ArrowUp } from "lucide-react";
import { navLinks } from "../../../data/navLinks";

type FooterProps = {
  name?: string;
  location?: string;
};

export default function Footer({
  name = "Alexis Tatarkovic",
  location = "Rouen, France",
}: FooterProps) {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 pb-16 border-t border-[var(--border-subtle)] mt-24">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--text-secondary)] font-mono">
        <div>
          <span>{name}</span>
          <span className="mx-2 text-[var(--text-tertiary)]">·</span>
          <span>{location}</span>
          <span className="mx-2 text-[var(--text-tertiary)]">·</span>
          <span>© {year}</span>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {l.label}
            </a>
          ))}

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[var(--accent-text)] hover:underline cursor-pointer bg-transparent border-0 p-0"
            aria-label="Retourner en haut de la page"
          >
            <span>Haut</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
