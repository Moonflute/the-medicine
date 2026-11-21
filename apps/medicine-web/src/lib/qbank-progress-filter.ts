import { practiceSourceQuestionId } from "./practice-selection";
import { progressedInRound } from "./qbank-progress";
import type { QbankProgress, QbankState } from "./qbank-store";

export type QbankProgressFilter = "all" | "unattempted" | "wrong";

export function readQbankProgressFilter(value: unknown): QbankProgressFilter {
  return value === "unattempted" || value === "wrong" ? value : "all";
}

export function qbankProgressFilterFromParams(params: URLSearchParams): QbankProgressFilter {
  return readQbankProgressFilter(params.get("progress") ?? (params.get("practiceUnattempted") === "1" ? "unattempted" : "all"));
}

export function qbankQuestionProgressIds(question: { id: string; revisionIds?: string[]; sourceIds?: string[]; practiceIds?: string[] }): string[] {
  return [question.id, ...(question.revisionIds ?? []), ...(question.sourceIds ?? []), ...(question.practiceIds ?? [])];
}

/** Shared by picker counts and session creation; never applied to a resumed set. */
export function createQbankProgressMatcher(state: Pick<QbankState, "progress" | "wrongIds">, filter: QbankProgressFilter, resetAt: string | null): (ids: readonly string[]) => boolean {
  if (filter === "all") return () => true;
  if (filter === "unattempted") {
    const completed = new Set(Object.entries(state.progress)
      .filter(([, progress]) => progressedInRound(progress, resetAt))
      .map(([id]) => practiceSourceQuestionId(id)));
    return ids => !ids.some(id => completed.has(practiceSourceQuestionId(id)));
  }

  const wrong = new Set(state.wrongIds.map(practiceSourceQuestionId));
  const latestBySource = new Map<string, QbankProgress>();
  for (const [id, progress] of Object.entries(state.progress)) {
    if (progress.attempts <= 0) continue;
    const source = practiceSourceQuestionId(id);
    const previous = latestBySource.get(source);
    if (!previous || (progress.lastAttemptedAt ?? "") >= (previous.lastAttemptedAt ?? "")) latestBySource.set(source, progress);
  }
  return ids => {
    const sources = [...new Set(ids.map(practiceSourceQuestionId))];
    if (!sources.some(id => wrong.has(id))) return false;
    let latest: QbankProgress | undefined;
    for (const id of sources) {
      const progress = latestBySource.get(id);
      if (progress && (!latest || (progress.lastAttemptedAt ?? "") >= (latest.lastAttemptedAt ?? ""))) latest = progress;
    }
    return latest?.lastCorrect !== true;
  };
}
