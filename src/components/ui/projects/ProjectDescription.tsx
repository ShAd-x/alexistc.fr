import { useState } from "react";

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
      <p className="text-sm text-gray-600">{displayText}</p>
      {isLong && !disableToggle && (
        <div className="mt-2">
          <button
            type="button"
            className="cursor-pointer inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-600 hover:text-white hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
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
