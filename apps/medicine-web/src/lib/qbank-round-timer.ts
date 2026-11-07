export const QBANK_ROUND_DEFAULT_MINUTES = 60;
export const QBANK_ROUND_MAX_MINUTES = 360;

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

export function isRoundTimeUp(deadlineAt: number | undefined, now = Date.now()): boolean {
  return deadlineAt !== undefined && now >= deadlineAt;
}

export function remainingRoundSeconds(deadlineAt: number, now: number): number {
  return Math.max(0, Math.ceil((deadlineAt - now) / 1000));
}

export function formatQbankClock(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
