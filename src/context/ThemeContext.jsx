import { useLocalStorage } from "@portf0li0/react-utils";
import { createContext, useContext, useEffect } from "react";
const ThemeContext = createContext(null);

function getPreferredTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

/**
 * ThemeProvider — wraps the app, owns the current editor theme
 * ("dark" | "light"), persists it via useLocalStorage, and reflects it
 * onto <html data-theme="..."> so index.css's CSS variables switch.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage(
    "portfolio-theme",
    getPreferredTheme(),
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme — convenience hook so components just call useTheme() instead
 * of importing ThemeContext + useContext everywhere.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return ctx;
}
