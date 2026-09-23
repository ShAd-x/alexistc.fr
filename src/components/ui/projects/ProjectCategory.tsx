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
      className={`inline-flex items-center rounded-md border border-[var(--border-accent)] bg-[var(--accent-subtle)] px-2.5 py-1 text-xs font-mono font-medium text-[var(--accent-text)] ${className}`}
    >
      {category}
    </span>
  );
}
