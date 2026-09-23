type ProfileImageProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export default function ProfileImage({
  src,
  alt,
  className = "",
}: ProfileImageProps) {
  return (
    <div
      className={
        "relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 flex items-center justify-center group " +
        className
      }
    >
      {/* Ambient glowing backdrop */}
      <div
        className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-tr from-emerald-500/25 via-emerald-400/10 to-transparent blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Main photo container */}
      <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:border-emerald-500/40">
        <img
          src={src}
          srcSet={
            src
              ? `${src.replace(".webp", "-160.webp")} 160w, ${src.replace(".webp", "-320.webp")} 320w, ${src.replace(".webp", "-480.webp")} 480w, ${src} 768w`
              : undefined
          }
          sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
          alt={alt}
          className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-105"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      {/* Floating status badge */}
      <div className="absolute -bottom-2 -right-2 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/90 px-3.5 py-1.5 shadow-xl backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-xs font-mono font-medium text-zinc-200">Rouen, FR</span>
      </div>
    </div>
  );
}
