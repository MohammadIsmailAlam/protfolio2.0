import { useEffect, useState } from "react";

/**
 * useLocalStorage — a generic, reusable hook that behaves like useState
 * but persists the value to localStorage under `key`. Any component or
 * other hook (see useTheme) that needs persisted state can reuse this
 * instead of re-implementing the read/parse/write dance each time.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage may be unavailable (private mode, quota) — fail silently
    }
  }, [key, value]);

  return [value, setValue];
}
