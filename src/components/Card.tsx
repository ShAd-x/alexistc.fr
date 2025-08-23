import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={
        "group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-colors hover:border-indigo-200 " +
        className
      }
    >
      {children}
    </article>
  );
}
