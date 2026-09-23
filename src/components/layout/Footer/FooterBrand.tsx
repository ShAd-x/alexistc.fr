type FooterBrandProps = {
  name: string;
  location?: string;
  year: number;
};

export default function FooterBrand({
  name,
  location,
  year,
}: FooterBrandProps) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-sm font-bold text-white tracking-tight">{name}</p>
      <p className="text-xs font-mono text-zinc-500 mt-0.5">
        {location ? `${location} · ` : ""}© {year} · Conçu et développé par Alexis Tatarkovic
      </p>
    </div>
  );
}
