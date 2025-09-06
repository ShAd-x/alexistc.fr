import { FileDown, Mail } from "lucide-react";
import React from "react";
import Button from "../ui/Button";
import ProfileImage from "../ui/ProfileImage";
import { MapPin } from "lucide-react";
import "./HeroWave.css";
import "./HeroAvailable.css";
import LearnMore from "../ui/LearnMore";

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
  location?: string;
};

export default function Hero({
  name,
  title,
  intro,
  avatarSrc,
  socials,
  cvHref,
  location,
}: HeroProps) {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="accueil" className="border-b border-gray-200/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-medium text-indigo-600">Portfolio</p>
          <h1 className="relative mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span
              className="inline-block origin-bottom animate-wave text-3xl mr-2 align-middle relative -top-1"
              role="img"
              aria-label="salut"
            >
              👋
            </span>
            Bonjour, je suis{" "}
            <span className="text-indigo-600">
              {first} {last}
            </span>
          </h1>
          <p className="relative mt-3 text-lg font-medium text-gray-800">
            <span className="relative inline-block">
              <span
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-indigo-600 opacity-100 rotate-[-2deg] h-[36px] w-full rounded-md blur-sm"
                aria-hidden="true"
              />
              <span className="relative px-2 text-white">{title}</span>
            </span>
          </p>
          <p className="mt-4 max-w-prose text-gray-800">{intro}</p>
          <div className="mt-2 flex items-center text-gray-800 text-sm font-medium">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <span className="flex items-center text-indigo-600 font-semibold">
              <span
                className="animate-blink mr-1 mb-1 text-2xl leading-none"
                style={{ fontSize: "1.5em" }}
              >
                •
              </span>
              Disponible pour de nouvelles missions !
            </span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              href="#contact"
              icon={<Mail size={18} />}
              aria-label="Discutons de votre projet"
              title="Discutons de votre projet"
              variant="primary"
            >
              Discutons de votre projet
            </Button>

            <Button
              href={cvHref ?? "#"}
              targetBlank={true}
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
      <LearnMore />
    </section>
  );
}
