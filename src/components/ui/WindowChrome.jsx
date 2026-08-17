import { cn } from "../../lib/cn.js";

/**
 * WindowChrome — wraps arbitrary content in a macOS-style editor/terminal
 * window: a title bar with traffic-light dots + filename, and a body.
 * Reused by the Hero code block, Skills category cards, Projects cards,
 * and the Contact terminal — one component, four very different uses.
 */
export function WindowChrome({ title, children, className, bodyClassName }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-surface shadow-xl shadow-black/20",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        {/* <span className="h-2.5 w-2.5 rounded-full bg-cursor/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-const/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-string/70" /> */}
        {title ? (
          <span className="ml-3 min-w-0 font-mono text-xs leading-5 text-dim line-clamp-2">
            {title}
          </span>
        ) : null}
      </div>
      <div className={cn("p-5 sm:p-6", bodyClassName)}>{children}</div>
    </div>
  );
}
