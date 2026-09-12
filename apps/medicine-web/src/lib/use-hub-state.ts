"use client";

import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";

export function useHubState<T>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initial);
  const [ready, setReady] = useState(false);
  const storageKey = useRef("");
  useEffect(() => {
    storageKey.current = `medicine-hub:v1:${window.location.pathname}:${key === "infection-hub:tab" ? "" : window.location.search}:${key}`;
    try {
      const raw = sessionStorage.getItem(storageKey.current);
      if (raw !== null) {
        const saved = JSON.parse(raw);
        if (typeof saved === typeof initial && saved !== null) setValue(saved);
      }
    } catch { /* Storage is optional. */ }
    setReady(true);
  // Initial values are defaults; restore once per mounted control.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  useEffect(() => {
    if (!ready) return;
    try { sessionStorage.setItem(storageKey.current, JSON.stringify(value)); } catch { /* Storage is optional. */ }
  }, [ready, value]);
  return [value, setValue];
}

export function useHubScroll() {
  useEffect(() => {
    const key = `medicine-hub-scroll:v1:${window.location.pathname}`;
    let frame = 0;
    let restored = false;
    const save = () => { if (restored) { try { sessionStorage.setItem(key, String(window.scrollY)); } catch { /* Storage is optional. */ } } };
    try {
      const y = Number(sessionStorage.getItem(key) || 0);
      frame = requestAnimationFrame(() => { frame = requestAnimationFrame(() => { window.scrollTo({ top: Number.isFinite(y) ? y : 0, behavior: "instant" }); restored = true; }); });
    } catch { restored = true; }
    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("pagehide", save);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", save); window.removeEventListener("pagehide", save); };
  }, []);
}
