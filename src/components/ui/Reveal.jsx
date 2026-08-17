import { cn } from "../../lib/cn.js";
import { useInView } from "../../hooks/useInView.js";

/**
 * Reveal — wraps children and fades/slides them up once they scroll into
 * view, using the useInView hook. This is the single reusable animation
 * wrapper for the whole app; individual sections never implement their
 * own IntersectionObserver logic.
 */
export function Reveal({ children, delay = 0, className }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={cn(
        "opacity-0",
        inView && "animate-fade-up",
        className
      )}
    >
      {children}
    </div>
  );
}
