import { useState } from "react";
import type { Project } from "../../data/projects";
import ProjectModal from "../ui/projects/ProjectModal";
import { ArrowUpRight } from "lucide-react";

type ProjectsProps = {
  items: Project[];
};

export default function Projects({ items }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("Tous");

  const categories = [
    { id: "Tous", label: "Tous" },
    { id: "Professionnel", label: "Pro" },
    { id: "Personnel", label: "Perso" },
    { id: "Académique", label: "Académique" },
  ];

  const filtered = items.filter((p) => {
    if (filter === "Tous") return true;
    return p.category === filter;
  });

  return (
    <section id="projets" className="section-wrapper">
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Section Header with Category Tabs */}
      <div className="section-head-split reveal-on-scroll">
        <div>
          <h2 className="section-title">
            Projets<span className="counter">0{filtered.length}</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              aria-pressed={filter === cat.id}
              className={`tab-filter-btn ${filter === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filtered.map((proj, idx) => (
          <article
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className={`project-card group reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
          >
            {/* Visual Thumbnail Frame */}
            <div className="project-thumbnail">
              {proj.imageSrc ? (
                <img
                  src={proj.imageSrc}
                  alt={proj.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[var(--text-tertiary)] bg-[var(--bg-surface-elevated)]">
                  Aperçu du projet
                </div>
              )}

              {/* Decorative Subtle Overlay Grid */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-60" />

              {/* Top Meta Badges inside visual */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="pill-tag bg-[var(--bg-surface-glass)] backdrop-blur-md !text-[10px]">
                  {proj.category || "Projet"}
                </span>

                {proj.technologies && proj.technologies.length > 0 && (
                  <span className="font-mono text-xs text-[var(--accent-text)] bg-[var(--bg-surface-glass)] backdrop-blur-md px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                    {proj.technologies[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title flex items-center gap-2">
                  <span>{proj.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-text)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </h3>
                <span className="project-index">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="project-desc line-clamp-3">
                {proj.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="project-footer">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="pill-tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                  {proj.tags.length > 4 && (
                    <span className="pill-tag text-[10px] text-[var(--accent)] font-semibold">
                      +{proj.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
