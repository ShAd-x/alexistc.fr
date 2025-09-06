import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../../data/profile";
import FooterBrand from "./FooterBrand";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterNavLinks from "./FooterNavLinks";
import FooterTech from "./FooterTech";

type FooterLink = { href: string; label: string; icon?: React.ReactNode };

type FooterProps = {
  name: string;
  location?: string;
  links?: FooterLink[];
  navLinks?: { href: string; label: string }[];
};

export default function Footer({
  name,
  location,
  links,
  navLinks,
}: FooterProps) {
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
          <FooterBrand name={name} location={location} year={year} />

          <FooterSocialLinks links={items} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 sm:justify-between">
          <FooterNavLinks links={navLinks ? navLinks : []} />
          <FooterTech />
        </div>
      </div>
    </footer>
  );
}
