import type { QbankQuestionIndex } from "./types";

export type TheorySourceType = "disease" | "cc" | "drug" | "other";
type TheorySelectionItem = Pick<QbankQuestionIndex, "targetType" | "specialtySlug">;

// Picker groups describe the study scope, not the linked document's type.
// Keep lab/skill targets intact so reference links and related questions still work.
export function theorySourceType(question: Pick<TheorySelectionItem, "targetType">): TheorySourceType {
  if (question.targetType === "lab" || question.targetType === "skill") return "disease";
  return question.targetType === "disease" || question.targetType === "cc" || question.targetType === "drug"
    ? question.targetType : "other";
}

export function theorySelectionKey(question: TheorySelectionItem): string {
  return `${theorySourceType(question)}:${question.specialtySlug}`;
}

export function hasTheorySelection(selections: ReadonlySet<string>, question: TheorySelectionItem): boolean {
  const legacySource = question.targetType === "disease" || question.targetType === "cc" || question.targetType === "drug"
    ? question.targetType : "other";
  return selections.has(theorySelectionKey(question))
    || selections.has(`${legacySource}:${question.specialtySlug}`)
    || selections.has(question.specialtySlug);
}

export function normalizeTheorySelections(selections: readonly string[], questions: readonly QbankQuestionIndex[]): string[] {
  const selected = new Set(selections);
  // Restore old "other:" drafts into their visible specialty group; drop stale keys.
  return [...new Set(questions
    .filter(question => question.questionBank === "theory" && hasTheorySelection(selected, question))
    .map(theorySelectionKey))];
}
