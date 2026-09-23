type NavbarBrandProps = {
  first: string;
  last: string;
};

export default function NavbarBrand({ first, last }: NavbarBrandProps) {
  return (
    <a
      href="#"
      className="group flex items-center gap-3 transition-opacity hover:opacity-90"
      aria-label={`${first} ${last} - Accueil`}
    >
      {/* Monogram Badge */}
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-zinc-900 font-mono text-xs font-bold tracking-wider text-emerald-400 shadow-inner transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.3)]">
        AT
      </span>

      {/* Name */}
      <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
        {first} <span className="text-zinc-400 font-medium transition-colors group-hover:text-zinc-200">{last}</span>
      </span>
    </a>
  );
}
