"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import {
  chatSkins, isAppTheme, isChatFont, isChatSkin, isChatTextSize, themeGroups,
  THEME_STORAGE_KEY, CHAT_SKIN_STORAGE_KEY, CHAT_FONT_STORAGE_KEY, CHAT_SIZE_STORAGE_KEY,
  type AppTheme, type ChatSkin, type ChatFont, type ChatTextSize,
} from "@/lib/themes";

const THEME_EVENT = "medicine:theme-change";
const ThemeContext = createContext<{
  theme: AppTheme; setTheme: (theme: AppTheme) => boolean;
  chatSkin: ChatSkin; setChatSkin: (skin: ChatSkin) => boolean;
  chatFont: ChatFont; setChatFont: (font: ChatFont) => boolean;
  chatTextSize: ChatTextSize; setChatTextSize: (size: ChatTextSize) => boolean;
} | null>(null);

function readSetting<T>(attribute: string, key: string, valid: (value: unknown) => value is T, fallback: T): T {
  const current = document.documentElement.getAttribute(attribute);
  if (valid(current)) return current;
  try { const saved = localStorage.getItem(key); return valid(saved) ? saved : fallback; }
  catch { return fallback; }
}
const getTheme = () => readSetting("data-theme", THEME_STORAGE_KEY, isAppTheme, "light");
const getSkin = () => readSetting("data-chat-skin", CHAT_SKIN_STORAGE_KEY, isChatSkin, "classic");
const getFont = () => readSetting("data-chat-font", CHAT_FONT_STORAGE_KEY, isChatFont, "system");
const getSize = (): ChatTextSize => {
  const current = Number(document.documentElement.dataset.chatSize);
  if (isChatTextSize(current)) return current;
  try { const saved = Number(localStorage.getItem(CHAT_SIZE_STORAGE_KEY)); return isChatTextSize(saved) ? saved : 15; }
  catch { return 15; }
};
function updateColorScheme() {
  const theme = getTheme();
  document.documentElement.style.colorScheme = theme === "dark" || theme === "terminal" || theme === "editor" || (theme === "chat" && getSkin() === "midnight") ? "dark" : "light";
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && ![THEME_STORAGE_KEY, CHAT_SKIN_STORAGE_KEY, CHAT_FONT_STORAGE_KEY, CHAT_SIZE_STORAGE_KEY].includes(event.key)) return;
    const settings = [
      [THEME_STORAGE_KEY, "data-theme", isAppTheme, "light"],
      [CHAT_SKIN_STORAGE_KEY, "data-chat-skin", isChatSkin, "classic"],
      [CHAT_FONT_STORAGE_KEY, "data-chat-font", isChatFont, "system"],
    ] as const;
    for (const [key, attribute, valid, fallback] of settings) {
      if (event.key === key || event.key === null) document.documentElement.setAttribute(attribute, valid(event.newValue) ? event.newValue : fallback);
    }
    if (event.key === CHAT_SIZE_STORAGE_KEY || event.key === null) {
      const size = Number(event.newValue);
      document.documentElement.dataset.chatSize = String(isChatTextSize(size) ? size : 15);
    }
    updateColorScheme(); callback();
  };
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

function persist(attribute: string, key: string, value: string) {
  document.documentElement.setAttribute(attribute, value);
  updateColorScheme();
  let saved = true;
  try {
    localStorage.setItem(key, value);
  } catch {
    saved = false;
  }
  window.dispatchEvent(new Event(THEME_EVENT));
  return saved;
}
const setTheme = (theme: AppTheme) => persist("data-theme", THEME_STORAGE_KEY, theme);
const setChatSkin = (skin: ChatSkin) => persist("data-chat-skin", CHAT_SKIN_STORAGE_KEY, skin);
const setChatFont = (font: ChatFont) => persist("data-chat-font", CHAT_FONT_STORAGE_KEY, font);
const setChatTextSize = (size: ChatTextSize) => persist("data-chat-size", CHAT_SIZE_STORAGE_KEY, String(size));

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as AppTheme);
  const chatSkin = useSyncExternalStore(subscribe, getSkin, () => "classic" as ChatSkin);
  const chatFont = useSyncExternalStore(subscribe, getFont, () => "system" as ChatFont);
  const chatTextSize = useSyncExternalStore(subscribe, getSize, () => 15 as ChatTextSize);
  const value = useMemo(() => ({ theme, setTheme, chatSkin, setChatSkin, chatFont, setChatFont, chatTextSize, setChatTextSize }), [theme, chatSkin, chatFont, chatTextSize]);

  useEffect(() => {
    // Hydration recovery can replace <html> and remove the prepaint attribute.
    const currentTheme = getTheme();
    document.documentElement.dataset.theme = currentTheme;
    document.documentElement.dataset.chatSkin = getSkin();
    document.documentElement.dataset.chatFont = getFont();
    document.documentElement.dataset.chatSize = String(getSize());
    updateColorScheme();
    const selected = themeGroups.map((group) => group.themes.find((item) => item.id === currentTheme)).find(Boolean);
    const chrome = currentTheme === "chat" ? chatSkins.find(skin => skin.id === getSkin())?.chrome : selected?.chrome;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", chrome ?? "#ffffff");
    if (currentTheme !== theme || getSkin() !== chatSkin || getFont() !== chatFont || getSize() !== chatTextSize) window.dispatchEvent(new Event(THEME_EVENT));
  }, [theme, chatSkin, chatFont, chatTextSize]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useAppTheme must be used inside ThemeProvider");
  return context;
}
