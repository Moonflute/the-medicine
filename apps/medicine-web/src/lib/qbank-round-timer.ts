export const QBANK_ROUND_DEFAULT_MINUTES = 60;
export const QBANK_ROUND_MAX_MINUTES = 360;
const MAX_ROUND_MS = QBANK_ROUND_MAX_MINUTES * 60_000;

export type QbankRunningRoundClock = { readonly deadlineAt: number };

export function readRoundLimitMinutes(value: string | null): number | undefined {
  if (!value || !/^\d+$/.test(value)) return undefined;
  const minutes = Number(value);
  return minutes >= 1 && minutes <= QBANK_ROUND_MAX_MINUTES ? minutes : undefined;
}

export function practiceRoundLimitFromParams(params: URLSearchParams): number | undefined {
  const mode = params.get("mode");
  if (params.get("practiceRound") !== "1" || params.get("practiceOnly") !== "1" || (mode !== "practice-book" && mode !== "selection")) return undefined;
  if (!/^\d{4}$/.test(params.get("practiceYears") ?? "") || ["practiceSeries", "practiceDepartments", "practiceSpecialties", "practiceBooks", "theory", "clinical"].some(key => params.get(key))) return undefined;
  return readRoundLimitMinutes(params.get("timeLimit"));
}

export function readRoundDeadline(value: unknown): number | undefined {
  return typeof value === "number" && Number.isSafeInteger(value) && value > 0 && value <= 8.64e15 ? value : undefined;
}

export function readRoundRemainingMs(value: unknown): number | undefined {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0 && value <= MAX_ROUND_MS ? value : undefined;
}

export function remainingRoundMs(deadlineAt: number, now: number): number {
  return Math.max(0, Math.min(MAX_ROUND_MS, deadlineAt - now));
}

export function resumeRoundDeadline(snapshot: { roundRemainingMs?: number; deadlineAt?: number; updatedAt?: string }, now: number, runningDeadline?: number): number | undefined {
  const savedAt = Date.parse(snapshot.updatedAt ?? "");
  const oldDeadline = readRoundDeadline(snapshot.deadlineAt);
  // v0.14.1 did not record a pause. Recover the budget at its last save.
  const savedRemaining = readRoundRemainingMs(snapshot.roundRemainingMs) ?? (oldDeadline === undefined ? undefined : remainingRoundMs(oldDeadline, Number.isFinite(savedAt) ? savedAt : now));
  if (savedRemaining === undefined) return runningDeadline;
  const resumed = now + savedRemaining;
  // A progress update from another device must not refill a live timer.
  return runningDeadline === undefined ? resumed : Math.min(runningDeadline, resumed);
}

export function isRoundTimeUp(deadlineAt: number | undefined, now = Date.now()): boolean {
  return deadlineAt !== undefined && now >= deadlineAt;
}

export function remainingRoundSeconds(deadlineAt: number, now: number): number {
  return Math.ceil(remainingRoundMs(deadlineAt, now) / 1000);
}

export function formatQbankClock(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
