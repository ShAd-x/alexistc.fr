import { useMemo, useState } from "react";
import type { Project } from "../../data/projects";
import { Layers, Filter, RotateCcw } from "lucide-react";
import Card from "../ui/Card";
import ImageModal from "../ui/projects/ImageModal";
import ProjectTags from "../ui/projects/ProjectTags";
import ProjectTechnologies from "../ui/projects/ProjectTechnologies";
import ProjectModal from "../ui/projects/ProjectModal";
import ProjectLink from "../ui/projects/ProjectLink";
import ProjectDescription from "../ui/projects/ProjectDescription";
import ProjectCategory from "../ui/projects/ProjectCategory";

type ProjectsProps = {
  items: Project[];
  title?: string;
};

export default function Projects({ items, title = "Projets" }: ProjectsProps) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const p of items) if (p.category) set.add(p.category);
    return Array.from(set);
  }, [items]);

  const initialSelected = useMemo(
    () => new Set<string>(categories.filter((k) => k !== "Académique")),
    [categories]
  );
  const [selected, setSelected] = useState<Set<string>>(initialSelected);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleKind = (k: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
  };

  const reset = () => setSelected(new Set(initialSelected));

  const filtered = useMemo(() => {
    return items.filter((p) => {
      if (!p.category) return true;
      return selected.has(p.category);
    });
  }, [items, selected]);

  return (
    <section id="projets" className="border-b border-gray-200/60">
      {/* Modale d'image */}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Aperçu du projet"
          onClose={() => setSelectedImage(null)}
        />
      )}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
              <Layers size={18} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          </div>

          {/* Filtres cumulables */}
          {categories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                <Filter size={16} /> Filtrer par type
              </span>
              {categories.map((cat) => {
                const active = selected.has(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleKind(cat)}
                    aria-pressed={active}
                    className={[
                      "hover-smooth inline-flex items-center rounded-md border px-2.5 py-1.5 text-sm font-medium cursor-pointer",
                      active
                        ? "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={reset}
                className="hover-smooth inline-flex items-center rounded-md border px-2.5 py-1.5 text-sm font-medium text-white cursor-pointer bg-indigo-600 border-indigo-600 hover:bg-indigo-500"
              >
                <RotateCcw size={16} className="mr-1" /> Réinitialiser
              </button>
            </div>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length === 0 ? (
            <div className="col-span-full flex items-center justify-center py-12 text-gray-500 text-lg">
              Il n'y a aucun projet qui correspond à vos critères.
            </div>
          ) : (
            filtered.map((p) => (
              <Card
                key={p.id}
                className="flex flex-col group border border-gray-200 bg-white/90 backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:shadow-2xl hover:shadow-gray-800/40 hover:border-indigo-300 hover:bg-white cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  {p.imageSrc ? (
                    <>
                      <img
                        src={p.imageSrc}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-104 group-hover:brightness-105"
                        loading="lazy"
                      />
                      <button
                        type="button"
                        className="absolute bottom-2 right-2 z-10 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-indigo-700 shadow hover:bg-indigo-600 hover:text-white transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(p.imageSrc as string);
                        }}
                        title="Agrandir l'image"
                        aria-haspopup="dialog"
                      >
                        Ouvrir l’image
                      </button>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                      Pas d’image
                    </div>
                  )}
                  <div className="pointer-events-none absolute left-3 top-3">
                    <ProjectCategory category={p.category} />
                  </div>
                </div>

                {/* Séparateur */}
                <hr className="border-t border-gray-200 w-full" />
                {/* Body */}
                <div className="flex flex-col gap-3 p-4 flex-1 relative pt-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  {p.description ? (
                    <ProjectDescription description={p.description} />
                  ) : null}

                  <ProjectTechnologies
                    technologies={p.technologies}
                    className="mt-1 mb-2"
                  />

                  <ProjectTags tags={p.tags} className="mb-4" />

                  <div className="mt-2 flex items-center justify-between">
                    <div className="absolute bottom-4 right-4 flex justify-end">
                      <ProjectLink link={p.link} />
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
