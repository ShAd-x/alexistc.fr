import React from "react";
import Button from "../../ui/Button";

type FooterLink = { href: string; label: string; icon?: React.ReactNode };

type FooterSocialLinksProps = {
  links: FooterLink[];
};

export default function FooterSocialLinks({ links }: FooterSocialLinksProps) {
  return (
    <nav className="flex items-center gap-4">
      {links.map((l) => (
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
  );
}
