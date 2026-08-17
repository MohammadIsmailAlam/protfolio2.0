import { useEffect, useRef, useState } from "react";

/**
 * useInView — tracks whether an element has scrolled into the viewport
 * using IntersectionObserver. Returns a ref to attach and a boolean.
 * Used by <Reveal> to drive scroll-triggered entrance animations, but
 * is generic enough to reuse for lazy-loading, view-tracking, etc.
 */
export function useInView({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, inView];
}
