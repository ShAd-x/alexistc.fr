type Link = {
  href: string;
  label: string;
};

type NavbarMobilePanelProps = {
  links: Link[];
  close: () => void;
};

export default function NavbarMobilePanel({
  links,
  close,
}: NavbarMobilePanelProps) {
  return (
    <div className="md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-3">
        <div className="flex flex-col gap-1 rounded-md border border-gray-200 bg-white p-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="hover-smooth rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
