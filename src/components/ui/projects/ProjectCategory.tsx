type ProjectCategoryProps = {
  category?: string;
  className?: string;
};

export default function ProjectCategory({
  category,
  className = "",
}: ProjectCategoryProps) {
  if (!category) return null;
  return (
    <span
      className={`rounded-md bg-white/90 px-2 py-0.5 text-xs font-medium text-gray-700 shadow border border-gray-200 ${className}`}
    >
      {category}
    </span>
  );
}
