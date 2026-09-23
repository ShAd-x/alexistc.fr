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
        "group overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/90 shadow-xl shadow-black/30 " +
        className
      }
      onClick={onClick}
    >
      {children}
    </article>
  );
}
