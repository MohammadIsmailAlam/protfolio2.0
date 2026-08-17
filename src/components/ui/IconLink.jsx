import { getIcon } from "../../lib/icons.js";
import { cn } from "../../lib/cn.js";

/**
 * IconLink — renders one social/contact link as an accessible icon
 * button. Looks up its icon via lib/icons.js so siteConfig.js can stay
 * plain data (strings) instead of importing React components.
 */
export function IconLink({ label, href, icon, className }) {
  const Icon = getIcon(icon);
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-dim transition-colors duration-200 hover:border-text-dim hover:text-text",
        className
      )}
    >
      <Icon size={16} strokeWidth={2} />
    </a>
  );
}
