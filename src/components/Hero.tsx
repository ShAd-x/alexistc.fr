import { FileDown } from "lucide-react";
import React from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

type HeroProps = {
  name: string;
  title: string;
  intro?: string;
  avatarSrc?: string;
  socials?: SocialLink[];
  cvHref?: string;
};

export default function Hero({
  name,
  title,
  intro,
  avatarSrc,
  socials,
  cvHref,
}: HeroProps) {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="accueil" className="border-b border-gray-200/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        {/* Texte */}
        <div>
          <p className="text-sm font-medium text-indigo-600">Portfolio</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Bonjour, je suis{" "}
            <span className="text-indigo-600">
              {first} {last}
            </span>
          </h1>
          <p className="mt-3 text-lg font-medium text-gray-800">{title}</p>
          <p className="mt-4 max-w-prose text-gray-600">{intro}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              href={cvHref ?? "#"}
              icon={<FileDown size={18} />}
              aria-label="Télécharger mon CV"
              title="Télécharger mon CV"
              variant="primary"
            >
              Télécharger mon CV
            </Button>

            <div className="flex items-center gap-2">
              {socials!.map((l) => (
                <Button
                  key={l.href}
                  href={l.href}
                  icon={l.icon}
                  aria-label={l.label}
                  title={l.label}
                  className="h-9 w-9 justify-center rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 p-0"
                  targetBlank={l.href.startsWith("http")}
                  variant="icon"
                >
                  {null}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <ProfileImage src={avatarSrc} alt={`Photo de ${name}`} />
        </div>
      </div>
    </section>
  );
}
