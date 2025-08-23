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
        "relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 flex items-center justify-center " +
        className
      }
    >
      {/* Effet gradient autour */}
      <div
        className="absolute inset-0 z-0 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-indigo-700 blur-xl opacity-70 scale-110"
        aria-hidden="true"
      />
      <div className="relative z-10 h-full w-full overflow-hidden rounded-full border border-gray-200 shadow-sm">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}
