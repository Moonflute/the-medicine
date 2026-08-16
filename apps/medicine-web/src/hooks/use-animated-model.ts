"use client";

import { useEffect, useRef, useState } from "react";

export function useAnimatedModel<T extends Record<keyof T, number>>(initial: T) {
  const [inputs, setInputs] = useState(initial);
  const animation = useRef<number | null>(null);
  const stop = () => { if (animation.current !== null) cancelAnimationFrame(animation.current); animation.current = null; };
  useEffect(() => stop, []);
  const update = (key: keyof T, value: number) => { stop(); setInputs((current) => ({ ...current, [key]: value })); };
  const animateTo = (target: T, duration = 1200) => {
    stop(); const from = inputs; let started: number | null = null;
    const tick = (now: number) => { if (started === null) started = now; const progress = Math.min(1, (now - started) / duration); const eased = 1 - Math.pow(1 - progress, 3); const next = { ...from } as T; (Object.keys(target) as Array<keyof T>).forEach((key) => { next[key] = (from[key] + (target[key] - from[key]) * eased) as T[keyof T]; }); setInputs(next); if (progress < 1) animation.current = requestAnimationFrame(tick); else animation.current = null; };
    animation.current = requestAnimationFrame(tick);
  };
  return { inputs, update, animateTo };
}
