import { isSelection } from "./qbank-grading";
import type { QbankSelection } from "./types";

export function remainingQuestions(ids: string[], answers: { questionId: string }[], drafts: Record<string, QbankSelection>, currentId?: string, selected?: QbankSelection | null) {
  const submitted = new Set(answers.map(answer => answer.questionId));
  const remaining = ids.map((id, index) => ({ id, index })).filter(item => !submitted.has(item.id));
  const unsubmitted = remaining.filter(item => isSelection(item.id === currentId ? selected : drafts[item.id]));
  return { remaining, unsubmitted: unsubmitted.length, unanswered: remaining.length - unsubmitted.length };
}

export function sessionWrongIds(answers: { questionId: string; correct: boolean | null }[]) {
  return [...new Set(answers.filter(answer => answer.correct === false).map(answer => answer.questionId))];
}
