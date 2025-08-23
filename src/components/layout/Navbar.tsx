import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  name: string;
};

export default function Navbar({ name }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    {
      href: "#experiences-professionnelles",
      label: "Expériences professionnelles",
    },
    { href: "#formations", label: "Formations" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");
  const headerClass =
    "sticky top-0 z-40 border-b border-gray-200 bg-white text-gray-900";

  return (
    <>
      {/* Header */}
      <header className={headerClass}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          {/* Brand */}
          <a
            href="#"
            className="font-semibold tracking-tight hover:opacity-90 hover:transition-opacity"
          >
            <span className="text-xl md:text-2xl text-gray-900">
              {first}&nbsp;
            </span>
            <span className="text-xl md:text-2xl text-indigo-600">{last}</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover-smooth text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile: menu + theme */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="hover-smooth inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-3">
              <div className="flex flex-col gap-1 rounded-md border border-gray-200 bg-white p-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="hover-smooth rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
