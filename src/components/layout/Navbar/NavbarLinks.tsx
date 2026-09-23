type NavbarLinksProps = {
  links: { href: string; label: string }[];
};

export default function NavbarLinks({ links }: NavbarLinksProps) {
  return (
    <div className="hidden items-center gap-1 lg:gap-2 md:flex">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-emerald-400"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
