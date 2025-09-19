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
        className="hover-smooth inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500"
        onClick={(e) => e.stopPropagation()}
      >
        Voir le projet
        <ExternalLink size={16} />
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400">
      Pas de lien vers ce projet
      <ExternalLink size={16} />
    </span>
  );
}
