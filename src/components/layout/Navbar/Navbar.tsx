import { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarMobilePanel from "./NavbarMobilePanel";

type NavbarProps = {
  name: string;
  links?: { href: string; label: string }[];
};

export default function Navbar({ name, links }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");
  const headerClass =
    "sticky top-0 z-40 border-b border-gray-200 bg-white text-gray-900";

  return (
    <>
      {/* Header */}
      <header className={headerClass}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          {/* Brand */}
          <NavbarBrand first={first} last={last} />

          {/* Desktop links */}
          <NavbarLinks links={links} />

          {/* Mobile: menu + theme */}
          <div className="flex items-center gap-2 md:hidden">
            <NavbarMenuButton open={open} toggle={() => setOpen((v) => !v)} />
          </div>
        </nav>

        {/* Mobile panel */}
        {open && (
          <NavbarMobilePanel links={links} close={() => setOpen(false)} />
        )}
      </header>
    </>
  );
}
