import { cn } from "../../lib/cn.js";

/**
 * CursorBlink — a small blinking block, standing in for a terminal /
 * editor caret. Reused in the Hero typewriter line and the Footer prompt.
 */
export function CursorBlink({ className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-[1em] w-[0.5ch] translate-y-[0.1em] animate-blink bg-cursor align-middle",
        className
      )}
    />
  );
}
