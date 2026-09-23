type FooterNavLinksProps = {
  links: { href: string; label: string }[];
};

export default function FooterNavLinks({ links }: FooterNavLinksProps) {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-medium">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="text-zinc-400 transition-colors hover:text-emerald-400"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
