export default function TechMarquee() {
  const stackTop = [
    "Laravel",
    "React 19",
    "TypeScript",
    "Docker",
    "Tailwind CSS",
    "PostgreSQL",
    "PHP 8",
    "GraphQL",
    "Vue.js",
  ];

  const stackBottom = [
    "Architecture logicielle",
    "Core Web Vitals",
    "SEO technique",
    "E-commerce et paiement",
    "Flutter mobile",
    "Vite",
    "Queues et jobs asynchrones",
    "APIs RESTful",
  ];

  return (
    <div className="py-4 border-y border-[var(--border-subtle)] my-10 bg-[var(--bg-surface)] overflow-hidden space-y-2.5">
      {/* Top Track */}
      <div className="ticker-ribbon">
        <div className="ticker-track">
          {[...stackTop, ...stackTop, ...stackTop].map((item, idx) => (
            <span key={idx} className="ticker-item">
              <span>{item}</span>
              <span className="ticker-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Track (Reverse direction) */}
      <div className="ticker-ribbon">
        <div
          className="ticker-track"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...stackBottom, ...stackBottom, ...stackBottom].map((item, idx) => (
            <span key={idx} className="ticker-item text-[var(--accent-text)] font-medium">
              <span>{item}</span>
              <span className="ticker-dot text-[var(--text-tertiary)]">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
