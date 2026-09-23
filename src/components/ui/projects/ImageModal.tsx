import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type ImageModalProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export default function ImageModal({
  src,
  alt = "Aperçu",
  onClose,
}: ImageModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    closeBtnRef.current?.focus();
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative max-w-3xl w-full rounded-2xl border border-white/15 bg-zinc-950 p-2 shadow-2xl animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-zinc-900/90 text-zinc-300 transition-colors hover:border-emerald-500/40 hover:bg-zinc-800 hover:text-white cursor-pointer"
          onClick={onClose}
          aria-label="Fermer l’aperçu"
          title="Fermer l’aperçu"
        >
          <X size={18} />
        </button>
        <img
          src={src}
          alt={alt}
          className="rounded-xl w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
}
