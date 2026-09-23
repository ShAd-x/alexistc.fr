import React from "react";

type ButtonVariant = "primary" | "secondary" | "icon" | "footer";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  targetBlank?: boolean;
  "aria-label"?: string;
  title?: string;
  variant?: ButtonVariant;
};

export default function Button({
  href,
  children,
  icon,
  className = "",
  targetBlank,
  variant = "secondary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] cursor-pointer";
  let variantClass = "";

  if (variant === "primary") {
    variantClass = "btn-primary !px-5 !py-2.5 !rounded-xl";
  } else if (variant === "icon") {
    variantClass =
      "h-10 w-10 justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent-text)] hover:border-[var(--border-accent)] p-0 hover:-translate-y-0.5 active:translate-y-0 shadow-sm";
  } else if (variant === "footer") {
    variantClass = "bg-transparent text-[var(--text-secondary)] hover:text-[var(--accent-text)] px-2 py-1 transition-colors";
  } else {
    // secondary
    variantClass = "btn-secondary !px-5 !py-2.5 !rounded-xl";
  }

  return (
    <a
      href={href}
      target={targetBlank ?? href.startsWith("http") ? "_blank" : undefined}
      rel={targetBlank ?? href.startsWith("http") ? "noreferrer" : undefined}
      className={`${base} ${variantClass} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}
