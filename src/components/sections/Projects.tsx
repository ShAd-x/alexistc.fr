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
              <Card key={p.id} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  {p.imageSrc ? (
                    <img
                      src={p.imageSrc}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
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

                {/* Body */}
                <div className="flex flex-col gap-3 p-4 flex-1 relative pt-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  {p.description ? (
                    <p className="text-sm text-gray-600">{p.description}</p>
                  ) : null}

                  {p.tags && p.tags.length ? (
                    <div className="mt-1 mb-4 flex flex-wrap gap-2">
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
