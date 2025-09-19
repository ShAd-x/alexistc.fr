type NavbarBrandProps = {
  first: string;
  last: string;
};

export default function NavbarBrand({ first, last }: NavbarBrandProps) {
  return (
    <a
      href="#"
      className="font-semibold tracking-tight hover:opacity-90 hover:transition-opacity"
    >
      <span className="text-xl md:text-2xl text-gray-900">{first}&nbsp;</span>
      <span className="text-xl md:text-2xl text-blue-600">{last}</span>
    </a>
  );
}
