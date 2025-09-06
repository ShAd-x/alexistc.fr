type NavbarLinksProps = {
  links: { href: string; label: string }[];
};

export default function NavbarLinks({ links }: NavbarLinksProps) {
  return (
    <div className="hidden items-center gap-6 md:flex">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="hover-smooth text-sm font-medium text-gray-700 hover:text-indigo-600"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
