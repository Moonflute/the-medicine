import { practiceSourceQuestionId } from "./practice-selection";
import type { QbankProgress, QbankState } from "./qbank-store";

type WrongState = Pick<QbankState, "progress" | "wrongIds">;

function latestProgress(items: Array<QbankProgress | undefined>): QbankProgress | undefined {
  return items.reduce<QbankProgress | undefined>((latest, item) => {
    if (!item || item.attempts <= 0) return latest;
    return !latest || (item.lastAttemptedAt ?? "") >= (latest.lastAttemptedAt ?? "") ? item : latest;
  }, undefined);
}

/** A correct retry resolves the queue, not the historical answers or scores. */
export function unresolvedQbankWrongIds({ progress, wrongIds }: WrongState): string[] {
  const latest = new Map<string, QbankProgress>();
  for (const [id, item] of Object.entries(progress)) {
    const sourceId = practiceSourceQuestionId(id);
    const recent = latestProgress([latest.get(sourceId), item]);
    if (recent) latest.set(sourceId, recent);
  }
  return [...new Set(wrongIds)].filter(id => latest.get(practiceSourceQuestionId(id))?.lastCorrect !== true);
}

/** Explicit source aliases and revisions all represent one statistics slot. */
export function isUnresolvedQbankWrong(state: WrongState, ids: readonly string[]): boolean {
  const sources = new Set(ids.map(practiceSourceQuestionId));
  const versions = Object.keys(state.progress).filter(id => sources.has(practiceSourceQuestionId(id)));
  const recent = latestProgress(versions.map(id => state.progress[id]));
  return recent?.lastCorrect !== true && state.wrongIds.some(id => sources.has(practiceSourceQuestionId(id)));
}
