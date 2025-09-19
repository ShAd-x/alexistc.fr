type FooterNavLinksProps = {
  links: { href: string; label: string }[];
};

export default function FooterNavLinks({ links }: FooterNavLinksProps) {
  return (
    <div className="flex gap-3">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="hover-smooth hover:text-blue-600"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
