type ProjectTechnologiesProps = {
  technologies: string[];
  className?: string;
};

export default function ProjectTechnologies({
  technologies,
  className = "",
}: ProjectTechnologiesProps) {
  if (!technologies || technologies.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-secondary)]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
