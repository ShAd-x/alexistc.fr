import { useMemo, useState } from "react";
import type { Project } from "../../projects";
import { ExternalLink, Layers, Filter } from "lucide-react";
import Card from "../ui/Card";

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
                      "hover-smooth inline-flex items-center rounded-md border px-2.5 py-1.5 text-sm font-medium",
                      active
                        ? "border-indigo-600 bg-indigo-600 text-white"
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
                className="hover-smooth inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Réinitialiser
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
                className="flex flex-col group border border-gray-200 bg-white/90 backdrop-blur-sm transition-all duration-400 hover:scale-102 hover:shadow-2xl hover:shadow-gray-800/40 hover:border-indigo-300 hover:bg-white"
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
                        onClick={() => window.open(p.imageSrc, "_blank")}
                        title="Agrandir l'image"
                      >
                        Ouvrir l’image
                      </button>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                      Pas d’image
                    </div>
                  )}
                  {p.category ? (
                    <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-white/90 px-2 py-0.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                      {p.category}
                    </span>
                  ) : null}
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

                  {p.technologies && p.technologies.length ? (
                    <div className="mt-1 mb-2 flex flex-wrap gap-2">
                      {p.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="rounded-md border border-indigo-200 bg-indigo-50 px-2 py-1 text-xs text-indigo-700 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {p.tags && p.tags.length ? (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p.tags.map((t: string) => (
                        <span
                          key={t}
                          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-xs text-gray-500" />
                    <div className="absolute bottom-4 right-4 flex justify-end">
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover-smooth inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500 mt-4"
                        >
                          Voir le projet
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <button
                          className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 cursor-not-allowed mt-4"
                          disabled
                        >
                          Pas de lien vers ce projet
                          <ExternalLink size={16} />
                        </button>
                      )}
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

// Affichage description tronquée avec bouton "Voir plus"

function ProjectDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 130;
  const isLong = description.length > maxLength;
  const displayText =
    !expanded && isLong ? description.slice(0, maxLength) + "..." : description;

  return (
    <div>
      <p className="text-sm text-gray-600">{displayText}</p>
      {isLong && (
        <div className="mt-2">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-600 hover:text-white hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? (
              <>
                Voir moins
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10L8 6 4 10"
                  />
                </svg>
              </>
            ) : (
              <>
                Voir plus
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6l4 4 4-4"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
