export type QbankElapsedClock = { elapsedMs: number; runStartedAt: number };
export function readElapsedMs(value: unknown): number | undefined {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0 ? value : undefined;
}
export function elapsedAt(clock: QbankElapsedClock | undefined, now: number): number | undefined {
  return clock ? clock.elapsedMs + Math.max(0, now - clock.runStartedAt) : undefined;
}
export function resumeElapsedClock(savedMs: number | undefined, now: number, running?: QbankElapsedClock): QbankElapsedClock | undefined {
  const current = elapsedAt(running, now);
  if (savedMs === undefined && current === undefined) return undefined; // Legacy duration is unknown, not wall time.
  return { elapsedMs: Math.max(savedMs ?? 0, current ?? 0), runStartedAt: now };
}
