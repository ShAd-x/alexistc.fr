import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type ProjectDescriptionProps = {
  description: string;
  expandedByDefault?: boolean;
  disableToggle?: boolean;
};

export default function ProjectDescription({
  description,
  expandedByDefault = false,
  disableToggle = false,
}: ProjectDescriptionProps) {
  const [expanded, setExpanded] = useState(expandedByDefault || disableToggle);
  const maxLength = 130;
  const isLong = description.length > maxLength;
  const displayText =
    disableToggle || expanded
      ? description
      : !expanded && isLong
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{displayText}</p>
      {isLong && !disableToggle && (
        <div className="mt-2">
          <button
            type="button"
            className="cursor-pointer inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-text)]"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
          >
            {expanded ? (
              <>
                <span>Voir moins</span>
                <ChevronUp size={12} />
              </>
            ) : (
              <>
                <span>Voir plus</span>
                <ChevronDown size={12} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
