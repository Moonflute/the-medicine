"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { isAppTheme, themeGroups, THEME_STORAGE_KEY, type AppTheme } from "@/lib/themes";

const THEME_EVENT = "medicine:theme-change";
const ThemeContext = createContext<{ theme: AppTheme; setTheme: (theme: AppTheme) => boolean } | null>(null);

function getSnapshot(): AppTheme {
  const theme = document.documentElement.dataset.theme;
  if (isAppTheme(theme)) return theme;
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return isAppTheme(saved) ? saved : "light";
  } catch {
    return "light";
  }
}

function getServerSnapshot(): AppTheme {
  return "light";
}

function applyTheme(theme: AppTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "dark" || theme === "terminal" ? "dark" : "light";
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    applyTheme(isAppTheme(event.newValue) ? event.newValue : "light");
    callback();
  };
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

function setTheme(theme: AppTheme) {
  applyTheme(theme);
  let saved = true;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    saved = false;
  }
  window.dispatchEvent(new Event(THEME_EVENT));
  return saved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    // Hydration recovery can replace <html> and remove the prepaint attribute.
    const currentTheme = getSnapshot();
    applyTheme(currentTheme);
    const selected = themeGroups.map((group) => group.themes.find((item) => item.id === currentTheme)).find(Boolean);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", selected?.chrome ?? "#ffffff");
    if (currentTheme !== theme) window.dispatchEvent(new Event(THEME_EVENT));
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useAppTheme must be used inside ThemeProvider");
  return context;
}
