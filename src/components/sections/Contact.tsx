import { Mail, Copy, Check } from "lucide-react";
import { useState, useRef } from "react";
import Button from "../ui/Button";

type ContactProps = {
  email: string;
  title?: string;
  subtitle?: string;
};

export default function Contact({
  email,
  title = "Une idée, un projet ?",
  subtitle = "Discutons ensemble. Je réponds rapidement.",
}: ContactProps) {
  const mailto = `mailto:${email}`;
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function copyEmail() {
    try {
      void navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback: sélection + prompt
      try {
        window.prompt("Copiez l'adresse email :", email);
      } catch {
        /* noop */
      }
    }
  }

  return (
    <section id="contact" className="border-b border-gray-200/60">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
          <Mail size={20} />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-gray-600">{subtitle}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={mailto}
            icon={<Mail size={18} />}
            aria-label={`Envoyer un mail à ${email}`}
            title={`Envoyer un mail à ${email}`}
            variant="primary"
          >
            {email}
          </Button>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? "Email copié" : "Copier l'email"}
            className="hover-smooth inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} />
            )}
            <span>{copied ? "Copié !" : "Copier"}</span>
          </button>
        </div>
        <span className="sr-only" aria-live="polite">
          {copied ? "Adresse email copiée" : ""}
        </span>
      </div>
    </section>
  );
}
