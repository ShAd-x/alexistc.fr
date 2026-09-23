import { ArrowUpRight } from "lucide-react";

type NavbarMobilePanelProps = {
  links: { href: string; label: string }[];
  close: () => void;
};

export default function NavbarMobilePanel({
  links,
  close,
}: NavbarMobilePanelProps) {
  return (
    <div className="border-b border-white/[0.08] bg-zinc-950/95 backdrop-blur-2xl md:hidden animate-fade-in-scale">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <nav className="flex flex-col gap-1.5" aria-label="Navigation mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-emerald-400"
            >
              <span>{l.label}</span>
              <ArrowUpRight size={16} className="text-zinc-600" />
            </a>
          ))}

          <div className="mt-2 pt-2 border-t border-white/[0.08]">
            <a
              href="#contact"
              onClick={close}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-300"
            >
              Discuter d'un projet
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
