// Playback only reads the calculated recording; it never changes ECG samples.
export const ECG_STEP_MS = 10;

export function playbackDuration(mode: "beat" | "all", rate: number, durationMs: number) {
  return mode === "beat" ? Math.min(60000 / rate, durationMs) : durationMs;
}

export function playbackStart(timeMs: number, endMs: number) {
  return timeMs >= endMs ? 0 : Math.max(0, timeMs);
}

export function advancePlayback(timeMs: number, elapsedMs: number, endMs: number) {
  const time = Math.max(0, Math.min(endMs, timeMs + elapsedMs));
  return { time, complete: time >= endMs };
}

export function stepPlayback(timeMs: number, direction: -1 | 1, endMs: number) {
  return advancePlayback(Math.min(timeMs, endMs), direction * ECG_STEP_MS, endMs).time;
}

export function traceSweepStart(timeMs: number, spanMs: number, durationMs: number) {
  // Keep the completed sweep visible at its exact endpoint instead of clearing it.
  return Math.floor(Math.max(0, Math.min(timeMs, durationMs) - .001) / spanMs) * spanMs;
}
