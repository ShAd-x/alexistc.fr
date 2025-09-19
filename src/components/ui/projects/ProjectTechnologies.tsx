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
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 font-semibold"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
