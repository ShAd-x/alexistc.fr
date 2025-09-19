import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <article
      className={
        "group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-colors hover:border-blue-200 " +
        className
      }
      onClick={onClick}
    >
      {children}
    </article>
  );
}
