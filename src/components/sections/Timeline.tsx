import { Briefcase } from "lucide-react";

export type TimelineItem = {
  id: string;
  title: string;
  company?: string;
  period: string;
  location?: string;
  description?: string;
  skills?: string[];
  link?: string;
};

type TimelineProps = {
  sectionId: string;
  items: TimelineItem[];
  title?: string;
  icon?: React.ReactNode;
};

export default function Timeline({
  sectionId,
  items,
  title = "Expériences",
  icon,
}: TimelineProps) {
  return (
    <section id={sectionId} className="border-b border-gray-200/60">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white text-lg">
            {icon ? icon : <Briefcase size={18} />}
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>

        <ol className="relative ml-4 border-s border-gray-200">
          {items.map((it) => (
            <li key={it.id} className="mb-10 ms-6">
              {/* Dot */}
              <span className="absolute -start-1.5 mt-2 flex h-3 w-3 items-center justify-center rounded-full border border-white bg-blue-600 ring-2 ring-blue-200" />

              {/* Content */}
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {it.title}
                    {it.company ? (
                      <span className="text-gray-500"> · {it.company}</span>
                    ) : null}
                  </h3>
                  {it.location ? (
                    <p className="text-sm text-gray-500">{it.location}</p>
                  ) : null}
                </div>
                <time className="text-sm text-gray-500">{it.period}</time>
              </div>

              {it.description ? (
                <p className="mt-2 max-w-3xl text-sm text-gray-600">
                  {it.description}
                </p>
              ) : null}

              {it.skills && it.skills.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {it.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}

              {it.link ? (
                <p className="mt-3">
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-smooth inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    En savoir plus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-6.293 6.293a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
