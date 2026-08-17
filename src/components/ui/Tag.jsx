import { cn } from "../../lib/cn.js";

const VARIANTS = {
  keyword: "text-keyword border-keyword/30 bg-keyword/10",
  string: "text-string border-string/30 bg-string/10",
  func: "text-func border-func/30 bg-func/10",
  const: "text-const border-const/30 bg-const/10",
  dim: "text-dim border-border bg-surface-2",
};

/**
 * Tag — a small pill, colored like a syntax-highlighting token. Used for
 * skills, project stack badges, and experience-log tags so every "token"
 * in the UI shares one consistent, reusable component.
 */
export function Tag({ children, variant = "dim", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs",
        VARIANTS[variant] ?? VARIANTS.dim,
        className
      )}
    >
      {children}
    </span>
  );
}
