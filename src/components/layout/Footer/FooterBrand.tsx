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
      <p className="text-sm font-semibold text-gray-900">{name}</p>
      <p className="text-xs text-gray-500">
        {location ? `${location} · ` : ""}© {year} · Tous droits réservés
      </p>
    </div>
  );
}
