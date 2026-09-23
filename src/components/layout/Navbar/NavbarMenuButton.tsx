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
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={open}
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-400"
    >
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>
  );
}
