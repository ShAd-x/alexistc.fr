import React from "react";
import { ArrowUpRight } from "lucide-react";

export type TimelineItem = {
  id: string;
  title: string;
  company?: string;
  companyLink?: string;
  period: string;
  location?: string;
  description?: string;
  skills?: string[];
  link?: string;
};

type TimelineProps = {
  sectionId?: string;
  items: TimelineItem[];
  title?: string;
  icon?: React.ReactNode;
};

export default function Timeline({
  sectionId = "parcours",
  items,
  title = "Parcours",
}: TimelineProps) {
  return (
    <section id={sectionId} className="section-wrapper relative">
      {/* Anchor alias for backward-compatibility with previous website URLs */}
      <span id="experiences-professionnelles" className="scroll-mt-28 absolute -top-10" aria-hidden="true" />
      <div className="section-head-split reveal-on-scroll">
        <div>
          <h2 className="section-title">
            {title}<span>.</span>
          </h2>
        </div>
        <p className="section-subtitle">
          Expériences en entreprise et en freelance, axées sur l'architecture logicielle, la robustesse des flux et la performance.
        </p>
      </div>

      <div className="exp-table reveal-on-scroll">
        {items.map((it) => (
          <div key={it.id} className="exp-row">
            {/* Period Column */}
            <div className="exp-period-col">
              <span className="font-semibold text-xs text-[var(--accent-text)]">
                {it.period}
              </span>
              {it.location && (
                <span className="exp-location">{it.location}</span>
              )}
            </div>

            {/* Role and Details */}
            <div className="exp-info-col">
              <div className="exp-role-title">
                <span>{it.title}</span>
                {it.company && (
                  <>
                    <span className="text-[var(--text-tertiary)] font-normal">chez</span>
                    {it.companyLink ? (
                      <a
                        href={it.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-company-badge hover:underline inline-flex items-center gap-1"
                      >
                        <span>{it.company}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="exp-company-badge">{it.company}</span>
                    )}
                  </>
                )}
              </div>

              {it.description && (
                <p className="exp-description">{it.description}</p>
              )}

              {it.skills && it.skills.length > 0 && (
                <div className="exp-tags">
                  {it.skills.map((skill) => (
                    <span key={skill} className="pill-tag !text-[10px]">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
