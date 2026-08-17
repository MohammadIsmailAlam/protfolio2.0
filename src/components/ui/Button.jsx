import { cn } from "../../lib/cn.js";

const BASE =
  "inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-func focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const VARIANTS = {
  primary:
    "bg-string text-bg hover:brightness-110 active:brightness-95 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
  ghost:
    "border border-border text-text hover:border-text-dim hover:bg-surface-2",
};

/**
 * Button — the one clickable-action primitive in the app. Renders as an
 * <a> when `href` is passed, otherwise a <button>, so callers don't need
 * two separate components for links vs. actions.
 */
export function Button({
  as,
  href,
  variant = "primary",
  icon: Icon,
  children,
  className,
  ...rest
}) {
  const classes = cn(BASE, VARIANTS[variant] ?? VARIANTS.primary, className);

  if (href || as === "a") {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {Icon ? <Icon size={16} strokeWidth={2} /> : null}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
      {Icon ? <Icon size={16} strokeWidth={2} /> : null}
    </button>
  );
}
