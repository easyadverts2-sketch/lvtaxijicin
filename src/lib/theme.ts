export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

/**
 * A) localStorage.theme je "dark" nebo "light" => použij to
 * B) prefers-color-scheme: dark => dark
 * C) prefers-color-scheme: light => čas 06:00–18:59 (lokální) => light, jinak dark
 * D) default dark
 */
export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage nepřístupný
  }

  if (typeof window.matchMedia !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  if (typeof window.matchMedia !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 19) return "light";
  }

  return "dark";
}

export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
