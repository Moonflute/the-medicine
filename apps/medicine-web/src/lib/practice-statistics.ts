import type { QbankSessionResult } from "./qbank-store";

export type PracticeStatisticsScore = { correct: number; total: number; excluded: number };

export function gradeTotals(results: readonly { correct: boolean | null }[]): Pick<PracticeStatisticsScore, "correct" | "total"> {
  let correct = 0, total = 0;
  for (const result of results) {
    if (typeof result.correct !== "boolean") continue;
    total++;
    if (result.correct) correct++;
  }
  return { correct, total };
}

/** Recalculate a view of saved results. Never use a later retry to reconstruct a score. */
export function practiceStatisticsScore(session: QbankSessionResult, excludedIds: ReadonlySet<string>): PracticeStatisticsScore | undefined {
  const excluded = session.questionIds.filter(id => excludedIds.has(id)).length;
  if (!excluded) return { correct: session.correct, total: session.total, excluded };
  const results = session.mockExam?.results;
  if (!results || results.length !== session.questionIds.length) return undefined;
  const submitted = new Set(session.questionIds);
  if (submitted.size !== results.length || !results.every(result => submitted.delete(result.questionId)
    && (result.correct === null || typeof result.correct === "boolean"))) return undefined;
  return { ...gradeTotals(results.filter(result => !excludedIds.has(result.questionId))), excluded };
}
