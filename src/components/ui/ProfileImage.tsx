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
      <div
        className="absolute inset-0 z-0 rounded-2xl bg-indigo-600 blur-xl opacity-100 scale-110"
        aria-hidden="true"
      />
      <div className="relative z-10 h-full w-full overflow-hidden rounded-4xl">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
      <p className="absolute bottom-0 right-0 z-20 mb-2 mr-2 rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-white shadow-lg">
        Hey 👋 !
      </p>
    </div>
  );
}
