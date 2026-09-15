"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "asinko-theme";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function handleSystemChange(event: MediaQueryListEvent) {
      if (localStorage.getItem(STORAGE_KEY)) {
        return;
      }
      applyTheme(event.matches);
      setIsDark(event.matches);
    }
    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark === null
          ? "Cambiar tema"
          : isDark
            ? "Cambiar a modo claro"
            : "Cambiar a modo oscuro"
      }
      className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {isDark === null && <span className="size-5" />}
      {isDark === false && <Moon className="size-5" aria-hidden="true" />}
      {isDark === true && <Sun className="size-5" aria-hidden="true" />}
    </button>
  );
}
