import { Menu, X } from "lucide-react";

type NavbarMenuButtonProps = {
  open: boolean;
  toggle: () => void;
};

export default function NavbarMenuButton({
  open,
  toggle,
}: NavbarMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label="Ouvrir le menu"
      aria-expanded={open}
      onClick={toggle}
      className="hover-smooth inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
    >
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>
  );
}
