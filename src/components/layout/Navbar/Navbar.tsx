import { useState, useEffect } from "react";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../../../data/navLinks";

type NavbarProps = {
  name: string;
  email: string;
};

export default function Navbar({ name, email }: NavbarProps) {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as "dark" | "light" | null;
      if (saved) return saved;
      return "dark";
    }
    return "dark";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const headerLinks = navLinks.filter((l) => l.href !== "#contact");

  return (
    <>
      {/* Background ambient lighting and subtle architectural grid */}
      <div className="ambient-mesh" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      {/* Floating Island Navigation */}
      <div className="floating-header site-container">
        <header className="floating-navbar">
          {/* Brand */}
          <a href="#" className="nav-brand">
            <span>{name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex nav-links" aria-label="Navigation principale">
            {headerLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            {/* Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
              aria-label="Basculer le thème"
              title={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Direct Contact Button */}
            <a
              href={`mailto:${email}`}
              className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-[12px]"
            >
              <span>Me contacter</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[var(--bg-surface-glass)] backdrop-blur-xl border border-[var(--border-strong)] flex flex-col gap-2 shadow-2xl">
            {headerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border-subtle)] mt-1">
              <a
                href={`mailto:${email}`}
                className="btn-primary w-full !py-2.5 justify-center"
              >
                <span>Me contacter</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
