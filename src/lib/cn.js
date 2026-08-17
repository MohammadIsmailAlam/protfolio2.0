/**
 * cn — a tiny, dependency-free class-name combiner.
 * Accepts strings, arrays, and objects ({ className: boolean }) and
 * returns a single space-separated className string, skipping falsy
 * values. This is the one place conditional-class logic lives, so no
 * component has to hand-roll template-string class concatenation.
 *
 * Usage:
 *   cn("btn", isActive && "btn-active", { "btn-disabled": disabled })
 */
export function cn(...inputs) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string" || typeof input === "number") {
        return [String(input)];
      }
      if (Array.isArray(input)) {
        return [cn(...input)];
      }
      if (typeof input === "object") {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}
