type ProjectTagsProps = {
  tags: string[];
  className?: string;
};

export default function ProjectTags({
  tags,
  className = "",
}: ProjectTagsProps) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 text-[11px] text-[var(--text-secondary)]"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
