import { useEffect, useState } from "react";

/**
 * useActiveSection — observes a list of section ids and returns whichever
 * one currently occupies the middle band of the viewport. Drives the
 * "active tab" highlight in the Navbar as the user scrolls, so nav state
 * never has to be managed by hand in multiple places.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? null);

  useEffect(() => {
    if (!ids || ids.length === 0) return undefined;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
