"use client";


import { useSimulationClock } from "@/components/simulation-workbench";
import { useEffect, useRef, useState } from "react";

export function useAnimatedModel<T extends Record<keyof T, number>>(initial: T) {
  const clock = useSimulationClock();
  const [inputs, setInputs] = useState(initial);
  const [transitioning, setTransitioning] = useState(false);
  const animation = useRef<number | null>(null);
  const stop = () => { if (animation.current !== null) cancelAnimationFrame(animation.current); animation.current = null; };
  useEffect(() => stop, []);
  const update = (key: keyof T, value: number) => { stop(); setTransitioning(false); setInputs((current) => ({ ...current, [key]: value })); };
  const animateTo = (target: T, duration = 1200) => {
    stop();
    if (!clock.current.playing || clock.current.reducedMotion || duration===0) {setInputs(target);setTransitioning(false);return;}
    setTransitioning(true); const from = inputs; let started: number | null = null; let elapsed = 0;
    const tick = (now: number) => { if (started === null) started = now; if (clock.current.playing && !document.hidden) elapsed += Math.min(100, now - started) * clock.current.speed; started = now; const progress = clock.current.reducedMotion ? 1 : Math.min(1, elapsed / duration); const eased = 1 - Math.pow(1 - progress, 3); const next = { ...from } as T; (Object.keys(target) as Array<keyof T>).forEach((key) => { next[key] = (from[key] + (target[key] - from[key]) * eased) as T[keyof T]; }); setInputs(next); if (progress < 1) animation.current = requestAnimationFrame(tick); else { animation.current = null; setTransitioning(false); } };
    animation.current = requestAnimationFrame(tick);
  };
  return { inputs, update, animateTo, transitioning };
}
