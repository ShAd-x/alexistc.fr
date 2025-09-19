import { useEffect, useRef } from "react";
import type { Project } from "../../../data/projects";
import ProjectDescription from "./ProjectDescription";
import ProjectLink from "./ProjectLink";
import ProjectTags from "./ProjectTags";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectCategory from "./ProjectCategory";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    closeBtnRef.current?.focus();
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative max-w-xl w-full mx-4 bg-white rounded-xl shadow-lg p-6 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="absolute top-2 right-2 z-10 rounded-full bg-white/90 p-2 hover:bg-indigo-600 hover:text-white text-indigo-700 transition cursor-pointer"
          onClick={onClose}
          aria-label="Fermer la fiche projet"
          title="Fermer la fiche projet"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle
              cx="14"
              cy="14"
              r="13"
              fill="currentColor"
              className="opacity-10"
            />
            <path
              d="M9 9L19 19M19 9L9 19"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {project.imageSrc && (
          <img
            src={project.imageSrc}
            alt={project.title}
            className="rounded-lg shadow mb-4 w-full max-h-60 object-cover"
          />
        )}
        <div className="mb-2 flex items-center gap-2">
          <ProjectCategory category={project.category} />
          <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
        </div>
        <div className="mb-3">
          <ProjectDescription
            description={project.description}
            expandedByDefault={true}
            disableToggle={true}
          />
        </div>
        <ProjectTechnologies
          technologies={project.technologies}
          className="mb-2"
        />
        <ProjectTags tags={project.tags} className="mb-2" />

        <div className="flex items-center justify-end mt-4">
          <ProjectLink link={project.link} />
        </div>
      </div>
    </div>
  );
}
