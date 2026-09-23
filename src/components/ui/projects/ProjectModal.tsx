import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../../../data/projects";
import ProjectDescription from "./ProjectDescription";
import ProjectLink from "./ProjectLink";
import ProjectTags from "./ProjectTags";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectCategory from "./ProjectCategory";
import { X } from "lucide-react";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      role="dialog"
    >
      <div
        ref={dialogRef}
        className="relative flex max-h-[90vh] max-w-2xl w-full flex-col rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-5 sm:p-7 text-[var(--text-primary)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)] cursor-pointer"
          onClick={onClose}
          aria-label="Fermer la fiche projet"
          title="Fermer la fiche projet"
        >
          <X size={16} />
        </button>

        <div className="min-h-0 overflow-y-auto pr-1">
          {project.imageSrc && (
            <div className="relative mb-5 h-48 sm:h-60 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="h-full w-full object-contain"
              />
            </div>
          )}

          <div className="mb-3 flex flex-wrap items-center gap-2">
            <ProjectCategory category={project.category} />
            <h2 id="project-dialog-title" className="text-xl font-bold tracking-tight text-[var(--text-primary)]">{project.title}</h2>
          </div>

          <div className="mb-4">
            <ProjectDescription
              description={project.description}
              expandedByDefault={true}
              disableToggle={true}
            />
          </div>

          <div className="space-y-3 pt-3 border-t border-[var(--border-subtle)]">
            <div>
              <p className="text-xs font-mono text-[var(--text-tertiary)] mb-1.5">Technologies</p>
              <ProjectTechnologies technologies={project.technologies} />
            </div>
            <div>
              <p className="text-xs font-mono text-[var(--text-tertiary)] mb-1.5">Tags</p>
              <ProjectTags tags={project.tags} />
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-end mt-5 pt-4 border-t border-[var(--border-subtle)]">
          <ProjectLink link={project.link} />
        </div>
      </div>
    </div>,
    document.body
  );
}
