import { ExternalLink } from "lucide-react";

type ProjectLinkProps = {
  link?: string;
};

export default function ProjectLink({ link }: ProjectLinkProps) {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group/link btn-primary !py-2 !px-4 !text-xs !shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Consulter</span>
        <ExternalLink
          size={13}
          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
      Projet interne
    </span>
  );
}
