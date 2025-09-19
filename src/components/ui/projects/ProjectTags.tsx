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
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
