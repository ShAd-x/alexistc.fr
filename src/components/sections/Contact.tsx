import { useState, useRef } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import MaltIcon from "../ui/MaltIcon";

type ContactProps = {
  email: string;
};

export default function Contact({ email }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const copyEmail = () => {
    try {
      void navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copiez l'adresse email :", email);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="reveal-on-scroll rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-colors duration-500 p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center shadow-lg">
        {/* Subtle ambient light in contact card */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-72 rounded-full bg-[var(--accent-subtle)] opacity-40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-5">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
            Me contacter<span className="text-[var(--accent-text)]">.</span>
          </h2>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Une question, une mission freelance ou simplement envie d'échanger sur un projet ? Vous pouvez m'écrire directement par email ou me retrouver sur Malt et LinkedIn.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            {/* Direct Mailto Button */}
            <a
              href={`mailto:${email}`}
              className="btn-primary !py-3 !px-6"
            >
              <Mail size={15} />
              <span>{email}</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Quick Copy Button */}
            <button
              type="button"
              onClick={copyEmail}
              className="btn-secondary !py-3 !px-5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-[var(--accent-text)]" />
                  <span>Adresse copiée !</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copier l'email</span>
                </>
              )}
            </button>

            {/* Malt button */}
            <a
              href="https://www.malt.fr/profile/alexistatarkovic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-3 !px-5"
            >
              <MaltIcon size={15} />
              <span>Malt</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="pt-8 mt-6 border-t border-[var(--border-subtle)]">
            <a
              href="https://atcode.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--accent-text)] hover:underline inline-flex items-center gap-1"
            >
              <span>Studio web atcode</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
