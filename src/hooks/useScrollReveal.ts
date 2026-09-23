import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setupObserver = () => {
      const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll:not(.is-revealed)");

      if (prefersReduced || typeof IntersectionObserver === "undefined") {
        elements.forEach((el) => el.classList.add("is-revealed"));
        return null;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add("is-revealed");
              observer.unobserve(target);

              // After reveal transition completes, clean up reveal classes
              // so interactive elements (cards, links) have 100% clean, instant-reacting hover transitions
              window.setTimeout(() => {
                target.classList.remove(
                  "reveal-on-scroll",
                  "reveal-delay-1",
                  "reveal-delay-2",
                  "reveal-delay-3",
                  "reveal-delay-4",
                  "reveal-delay-5",
                  "reveal-delay-6"
                );
                target.classList.add("revealed-done");
              }, 650);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already visible within viewport on initial load
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
          window.setTimeout(() => {
            el.classList.remove(
              "reveal-on-scroll",
              "reveal-delay-1",
              "reveal-delay-2",
              "reveal-delay-3",
              "reveal-delay-4",
              "reveal-delay-5",
              "reveal-delay-6"
            );
            el.classList.add("revealed-done");
          }, 650);
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    const observer = setupObserver();

    // Re-check on mutation if any dynamic content is added
    const mutationObserver = new MutationObserver(() => {
      const unrevealed = document.querySelectorAll<HTMLElement>(".reveal-on-scroll:not(.is-revealed)");
      if (unrevealed.length > 0) {
        setupObserver();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
