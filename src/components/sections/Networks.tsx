import { useEffect, useMemo, useState, useRef } from "react";
import MaltIcon from "../ui/MaltIcon";
import { ArrowUpRight, Github, Linkedin, Globe } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

type ContributionCell = ContributionDay | null;

const CONTRIBUTIONS_URL = "https://github-contributions-api.jogruber.de/v4/ShAd-x?y=last";
const GITHUB_PROFILE_URL = "https://github.com/shad-x";

function isContributionDay(value: unknown): value is ContributionDay {
  if (typeof value !== "object" || value === null) return false;
  const day = value as Record<string, unknown>;
  return (
    typeof day.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
    typeof day.count === "number" &&
    Number.isInteger(day.count) &&
    day.count >= 0 &&
    typeof day.level === "number" &&
    Number.isInteger(day.level) &&
    day.level >= 0 &&
    day.level <= 4
  );
}

function parseContributions(value: unknown): ContributionDay[] {
  if (typeof value !== "object" || value === null) throw new Error("Réponse invalide");
  const contributions = (value as Record<string, unknown>).contributions;
  if (!Array.isArray(contributions) || contributions.length === 0 || !contributions.every(isContributionDay)) {
    throw new Error("Données de contribution invalides");
  }
  return [...contributions].sort((a, b) => a.date.localeCompare(b.date));
}

function dateFromIso(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00`);
}

function formatContributionDate(isoDate: string): string {
  return dateFromIso(isoDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface HoveredCellInfo {
  day: ContributionDay;
  x: number;
  y: number;
  contWidth: number;
}

function getTooltipPosition(x: number, y: number, contWidth: number) {
  const isRight = contWidth - x < 150 || (contWidth < 320 && x > contWidth / 2);
  const isLeft = !isRight && (x < 150 || (contWidth < 320 && x <= contWidth / 2));

  if (isRight) {
    const distFromRight = contWidth - x;
    return {
      container: {
        right: "12px",
        top: `${Math.max(10, y - 10)}px`,
        transform: "translateY(-100%)",
      } as React.CSSProperties,
      arrow: {
        right: `${Math.max(14, Math.min(contWidth - 36, distFromRight - 12))}px`,
        bottom: "-4px",
        transform: "translateX(50%) rotate(45deg)",
      } as React.CSSProperties,
    };
  }

  if (isLeft) {
    return {
      container: {
        left: "12px",
        top: `${Math.max(10, y - 10)}px`,
        transform: "translateY(-100%)",
      } as React.CSSProperties,
      arrow: {
        left: `${Math.max(14, Math.min(contWidth - 36, x - 12))}px`,
        bottom: "-4px",
        transform: "translateX(-50%) rotate(45deg)",
      } as React.CSSProperties,
    };
  }

  return {
    container: {
      left: `${x}px`,
      top: `${Math.max(10, y - 10)}px`,
      transform: "translate(-50%, -100%)",
    } as React.CSSProperties,
    arrow: {
      left: "50%",
      bottom: "-4px",
      transform: "translateX(-50%) rotate(45deg)",
    } as React.CSSProperties,
  };
}

export default function Networks() {
  const [hoveredCell, setHoveredCell] = useState<HoveredCellInfo | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function loadContributions() {
      try {
        const response = await fetch(CONTRIBUTIONS_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        setContributions(parseContributions(await response.json()));
      } catch {
        if (!controller.signal.aborted) setLoadError(true);
      }
    }
    void loadContributions();
    return () => controller.abort();
  }, []);

  // Automatically scroll the heatmap all the way to the right (today) on load
  useEffect(() => {
    if (!contributions || !scrollRef.current) return;
    const el = scrollRef.current;
    const scrollToRight = () => {
      if (el) {
        el.scrollLeft = el.scrollWidth;
      }
    };
    scrollToRight();
    const rAF = requestAnimationFrame(scrollToRight);
    const timer = setTimeout(scrollToRight, 60);

    return () => {
      cancelAnimationFrame(rAF);
      clearTimeout(timer);
    };
  }, [contributions]);

  // Dismiss tooltip when tapping outside
  useEffect(() => {
    if (!hoveredCell) return;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setHoveredCell(null);
      }
    };
    window.addEventListener("pointerdown", handlePointerDown as EventListener);
    return () => window.removeEventListener("pointerdown", handlePointerDown as EventListener);
  }, [hoveredCell]);

  const updateHoveredCell = (
    target: HTMLElement,
    day: ContributionDay,
    isClick = false
  ) => {
    if (!containerRef.current) return;
    const cellRect = target.getBoundingClientRect();
    const contRect = containerRef.current.getBoundingClientRect();
    const x = cellRect.left - contRect.left + cellRect.width / 2;
    const y = cellRect.top - contRect.top;

    setHoveredCell((prev) => {
      if (isClick && prev?.day.date === day.date) {
        return null;
      }
      return {
        day,
        x,
        y,
        contWidth: contRect.width,
      };
    });
  };

  const { cells, months, weekCount, total } = useMemo(() => {
    if (!contributions) return { cells: [] as ContributionCell[], months: [], weekCount: 0, total: 0 };
    const firstDate = dateFromIso(contributions[0].date);
    const firstDayOffset = (firstDate.getDay() + 6) % 7;
    const paddedCells: ContributionCell[] = [
      ...Array<null>(firstDayOffset).fill(null),
      ...contributions,
    ];
    const weeks = Math.ceil(paddedCells.length / 7);
    const computedMonths: { name: string; col: number }[] = [];
    let lastMonth = -1;
    let lastCol = -10;
    for (let w = 0; w < weeks; w++) {
      const day = paddedCells[w * 7];
      if (!day) continue;
      const d = dateFromIso(day.date);
      const m = d.getMonth();
      if (m !== lastMonth) {
        if (w + 1 - lastCol >= 3 && weeks - (w + 1) >= 2) {
          const rawName = d.toLocaleDateString("fr-FR", { month: "short" });
          const name = rawName.charAt(0).toUpperCase() + rawName.slice(1);
          computedMonths.push({ name, col: w + 1 });
          lastCol = w + 1;
        }
        lastMonth = m;
      }
    }

    return {
      cells: paddedCells,
      months: computedMonths,
      weekCount: weeks,
      total: contributions.reduce((sum, day) => sum + day.count, 0),
    };
  }, [contributions]);

  return (
    <section id="reseaux" className="section-wrapper">
      <div className="section-head-split reveal-on-scroll">
        <div>
          <h2 className="section-title">
            Réseaux<span>.</span>
          </h2>
        </div>
        <p className="section-subtitle">
          Retrouvez mes dépôts open-source, mes retours d'expérience et mon profil freelance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alexis-tatarkovic-8a16031a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="network-card reveal-on-scroll reveal-delay-1 group"
        >
          <div className="flex items-center justify-between pb-6">
            <div className="network-icon-box">
              <Linkedin size={18} />
            </div>
            <ArrowUpRight size={15} className="network-arrow" />
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
              alexis-tatarkovic
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              LinkedIn · Profil et parcours
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shad-x"
          target="_blank"
          rel="noopener noreferrer"
          className="network-card reveal-on-scroll reveal-delay-2 group"
        >
          <div className="flex items-center justify-between pb-6">
            <div className="network-icon-box">
              <Github size={18} />
            </div>
            <ArrowUpRight size={15} className="network-arrow" />
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
              @shad-x
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              GitHub · Dépôts et code
            </div>
          </div>
        </a>

        {/* Malt */}
        <a
          href="https://www.malt.fr/profile/alexistatarkovic"
          target="_blank"
          rel="noopener noreferrer"
          className="network-card reveal-on-scroll reveal-delay-3 group"
        >
          <div className="flex items-center justify-between pb-6">
            <div className="network-icon-box">
              <MaltIcon size={18} />
            </div>
            <ArrowUpRight size={15} className="network-arrow" />
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
              alexistatarkovic
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              Malt · Missions freelance
            </div>
          </div>
        </a>

        {/* atcode.fr */}
        <a
          href="https://atcode.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="network-card reveal-on-scroll reveal-delay-4 group"
        >
          <div className="flex items-center justify-between pb-6">
            <div className="network-icon-box">
              <Globe size={18} />
            </div>
            <ArrowUpRight size={15} className="network-arrow" />
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
              atcode.fr
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              Studio web atcode
            </div>
          </div>
        </a>
      </div>

      {/* GitHub Heatmap Activity Container */}
      <div ref={containerRef} className="reveal-on-scroll p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] gh-heatmap relative">
        {/* Floating Tooltip clamped to container to avoid any mobile overflow */}
        {(() => {
          const tooltipPos = hoveredCell
            ? getTooltipPosition(hoveredCell.x, hoveredCell.y, hoveredCell.contWidth)
            : null;

          return hoveredCell && tooltipPos ? (
            <div
              className="pointer-events-none absolute z-30 px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-accent)] shadow-xl text-xs font-mono text-[var(--text-primary)] whitespace-nowrap max-w-[calc(100%-24px)] transition-all duration-150 ease-out"
              style={tooltipPos.container}
            >
              <span className="text-[var(--accent-text)] font-semibold">
                {hoveredCell.day.count === 0
                  ? "0 contribution"
                  : `${hoveredCell.day.count} contribution${hoveredCell.day.count > 1 ? "s" : ""}`}
              </span>
              <span className="text-[var(--text-secondary)] ml-1.5">le {formatContributionDate(hoveredCell.day.date)}</span>
              {/* Arrow indicator pointing to cell */}
              <div
                className="absolute w-2 h-2 bg-[var(--bg-surface-elevated)] border-r border-b border-[var(--border-accent)] pointer-events-none"
                style={tooltipPos.arrow}
              />
            </div>
          ) : null;
        })()}

        <div className="flex items-center pb-5 border-b border-[var(--border-subtle)] mb-6">
          <div className="flex items-center gap-3">
            <img
              src="/img/me.webp"
              alt="Alexis Tatarkovic"
              className="w-9 h-9 rounded-full border border-[var(--border-strong)] object-cover object-[center_15%]"
            />
            <div>
              <div className="font-semibold text-sm text-[var(--text-primary)]">
                Activité GitHub
              </div>
              <div className="text-xs font-mono text-[var(--text-secondary)]">
                @shad-x
              </div>
            </div>
          </div>
        </div>

        {loadError && (
          <p className="text-sm text-[var(--text-secondary)]" role="status">
            L'activité GitHub est momentanément indisponible. Consultez le{" "}
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="underline text-[var(--text-primary)]">
              profil GitHub
            </a>.
          </p>
        )}
        {!loadError && !contributions && (
          <p className="text-sm text-[var(--text-secondary)]" role="status">
            Chargement de l'activité GitHub…
          </p>
        )}
        {contributions && (
          <>
            {/* Scrollable Heatmap Grid */}
            <div
              ref={scrollRef}
              className="gh-heatmap-scroll"
              role="img"
              aria-label={`Calendrier GitHub : ${total} contributions sur les 12 derniers mois`}
              onScroll={() => {
                if (hoveredCell) setHoveredCell(null);
              }}
            >
              <div className="gh-heatmap-plot">
                <div className="gh-heatmap-months" style={{ gridTemplateColumns: `repeat(${weekCount}, var(--cell))` }}>
                  {months.map((m) => (
                    <span key={`${m.name}-${m.col}`} style={{ gridColumn: m.col }}>
                      {m.name}
                    </span>
                  ))}
                </div>

                <div className="gh-heatmap-body">
                  <div className="gh-heatmap-days">
                    <span>Lun</span>
                    <span>Mer</span>
                    <span>Ven</span>
                    <span>Dim</span>
                  </div>
                  <div className="gh-heatmap-grid">
                    {cells.map((cell, idx) => cell ? (
                      <span
                        key={cell.date}
                        className="gh-cell"
                        data-l={cell.level}
                        title={`${cell.count} contribution${cell.count > 1 ? "s" : ""} le ${formatContributionDate(cell.date)}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          updateHoveredCell(e.currentTarget, cell, true);
                        }}
                        onMouseEnter={(e) => {
                          updateHoveredCell(e.currentTarget, cell, false);
                        }}
                        onMouseLeave={() => setHoveredCell(null)}
                      />
                    ) : (
                      <span key={`pad-${idx}`} aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Foot Stats & Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[var(--border-subtle)] mt-6 text-xs text-[var(--text-secondary)] font-mono">
              <div>
                {hoveredCell ? (
                  <span>
                    <strong className="text-[var(--accent-text)] text-sm font-mono mr-1">
                      {hoveredCell.day.count} contribution{hoveredCell.day.count > 1 ? "s" : ""}
                    </strong>{" "}
                    le {formatContributionDate(hoveredCell.day.date)}
                  </span>
                ) : (
                  <span>
                    <strong className="text-[var(--text-primary)] text-sm font-mono mr-1">
                      {total.toLocaleString("fr-FR")}
                    </strong>{" "}
                    contributions sur les 12 derniers mois
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span>Moins</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[var(--color-h0)]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[var(--color-h1)]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[var(--color-h2)]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[var(--color-h3)]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[var(--color-h4)]" />
                </div>
                <span>Plus</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
