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
    "inline-flex items-center gap-2 rounded-md text-sm font-medium focus:outline-none transition-transform duration-175 ease-in-out";
  let variantClass = "";

  if (variant === "primary") {
    variantClass =
      "bg-indigo-600 text-white border border-indigo-600 hover:bg-indigo-500 hover:text-white px-5 h-9 hover:scale-105";
  } else if (variant === "icon") {
    variantClass =
      "h-9 w-9 justify-center rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 p-0";
  } else if (variant === "footer") {
    variantClass =
      "bg-transparent text-gray-600 hover:text-indigo-600 px-2 py-1";
  } else {
    // secondary
    variantClass =
      "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-5 py-2.5";
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
