/**
 * scrollToId — smooth-scrolls the viewport to bring an element with the
 * given id into view. Shared by the nav tabs and any in-page CTA link so
 * the scrolling behavior (offset, easing) is defined in exactly one place.
 */
export function scrollToId(id, { offset = 0 } = {}) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
