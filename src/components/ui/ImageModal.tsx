import { useEffect, useRef } from "react";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative max-w-xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="absolute top-2 right-2 z-10 rounded-full bg-white/90 p-2 hover:bg-blue-600 hover:text-white text-blue-700 transition cursor-pointer"
          onClick={onClose}
          aria-label="Fermer l’aperçu"
          title="Fermer l’aperçu"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle
              cx="14"
              cy="14"
              r="13"
              fill="currentColor"
              className="opacity-10"
            />
            <path
              d="M9 9L19 19M19 9L9 19"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full max-h-[60vh] object-contain bg-white"
        />
      </div>
    </div>
  );
}
