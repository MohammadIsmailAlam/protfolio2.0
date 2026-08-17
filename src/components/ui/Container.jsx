import { cn } from "../../lib/cn.js";

/**
 * Container — the single max-width + horizontal padding wrapper used by
 * every section, so layout width is defined once, not per-section.
 */
export function Container({ children, className }) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
