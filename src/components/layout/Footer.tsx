import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../profile";
import Button from "../ui/Button";

type FooterLink = { href: string; label: string; icon?: React.ReactNode };

type FooterProps = {
  name: string;
  location?: string;
  links?: FooterLink[];
};

export default function Footer({ name, location, links }: FooterProps) {
  const year = new Date().getFullYear();

  // Source unique : props.links sinon profile.socials
  const items: FooterLink[] =
    links && links.length
      ? links
      : profile.socials.map((s) => {
          let icon: React.ReactNode | undefined;
          switch (s.kind) {
            case "email":
              icon = <Mail size={16} />;
              break;
            case "github":
              icon = <Github size={16} />;
              break;
            case "linkedin":
              icon = <Linkedin size={16} />;
              break;
            default:
              icon = undefined;
          }
          return { href: s.href, label: s.label, icon };
        });

  return (
    <footer className="border-t border-gray-200/60 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">
              {location ? `${location} · ` : ""}© {year} · Tous droits réservés
            </p>
          </div>

          <nav className="flex items-center gap-4">
            {items.map((l) => (
              <Button
                key={l.href}
                href={l.href}
                icon={l.icon}
                aria-label={l.label}
                title={l.label}
                targetBlank={l.href.startsWith("http")}
                variant="footer"
              >
                {l.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 sm:justify-between">
          <div className="flex gap-3">
            <a
              href="#experiences-professionnelles"
              className="hover-smooth hover:text-indigo-600"
            >
              Expériences professionnelles
            </a>
            <a
              href="#formations"
              className="hover-smooth hover:text-indigo-600"
            >
              Formations
            </a>
            <a
              href="#competences"
              className="hover-smooth hover:text-indigo-600"
            >
              Compétences
            </a>
            <a href="#projets" className="hover-smooth hover:text-indigo-600">
              Projets
            </a>
            <a href="#contact" className="hover-smooth hover:text-indigo-600">
              Contact
            </a>
          </div>
          <p className="text-center">
            Construit avec React, TypeScript et TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
