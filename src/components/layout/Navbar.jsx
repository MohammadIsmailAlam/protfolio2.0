import { Moon, Sun } from "lucide-react";
import { siteConfig } from "../../config/siteConfig.js";
import { useTheme } from "../../context/ThemeContext.jsx";
import profileImage from "../../assets/img/profile.jpeg";
import { cn, scrollToId, useActiveSection } from "@ismailalam/react-utils";
import { Container } from "@ismailalam/ui-components";

const NAV_IDS = siteConfig.nav.map((item) => item.id);

/**
 * Navbar — fixed top bar styled as an editor tab strip. Active tab is
 * driven entirely by the useActiveSection hook (no manual scroll math
 * duplicated here), and the theme toggle reuses the useTheme hook.
 */
export function Navbar() {
  const activeId = useActiveSection(NAV_IDS);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={profileImage}
            alt={siteConfig.personal.name}
            className="h-8 w-8 rounded-full border border-border object-cover"
          />

          <span className="font-mono text-sm font-medium text-text">
            {siteConfig.personal.name}
          </span>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id, { offset: 56 })}
              className={cn(
                "rounded-md px-3 py-1.5 font-mono text-xs transition-colors duration-150",
                activeId === item.id
                  ? "bg-surface-2 text-text"
                  : "text-dim hover:text-text",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-dim transition-colors hover:text-text"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </Container>
    </header>
  );
}
