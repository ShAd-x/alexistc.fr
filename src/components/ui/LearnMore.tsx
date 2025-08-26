import React from "react";
import "./LearnMore.css";

type LearnMoreProps = {
  targetId?: string;
};

export default function LearnMore({
  targetId = "experiences-professionnelles",
}: LearnMoreProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <span
      className="learn-more-vertical"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Voir les expériences professionnelles"
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <span className="learn-more-blink">En savoir plus</span>
      <span className="learn-more-arrows-row">
        <span className="learn-more-arrows" style={{ animationDelay: "0ms" }}>
          ↓
        </span>
        <span className="learn-more-arrows" style={{ animationDelay: "180ms" }}>
          ↓
        </span>
        <span className="learn-more-arrows" style={{ animationDelay: "360ms" }}>
          ↓
        </span>
      </span>
    </span>
  );
}
