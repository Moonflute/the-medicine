import type { QbankAnswer, QbankQuestion, QbankSelection } from "./types";

export function isAnswer(value: unknown): value is QbankAnswer {
  return typeof value === "string" && /^[A-E]$/.test(value);
}
export function isSelection(value: unknown): value is QbankSelection {
  return isAnswer(value) || (Array.isArray(value) && value.length > 0 && value.length <= 5 && value.every(isAnswer) && new Set(value).size === value.length);
}
export function selectedAnswers(value: QbankSelection | null | undefined): QbankAnswer[] {
  return isSelection(value) ? Array.isArray(value) ? value : [value] : [];
}
export function isMultiple(question: QbankQuestion): boolean {
  return question.gradingMode === "multiple-exact" || question.gradingMode === "multiple-any";
}
export function toggleSelection(question: QbankQuestion, value: QbankSelection | null | undefined, answer: QbankAnswer): QbankSelection | null {
  if (question.options[answer] === undefined) return value ?? null;
  if (!isMultiple(question)) return answer;
  const previous = selectedAnswers(value);
  const next = previous.includes(answer) ? previous.filter(key => key !== answer) : [...previous, answer].sort();
  return next.length ? next : null;
}
export function correctAnswers(question: QbankQuestion): QbankAnswer[] {
  if (question.gradingMode === "all-credit") return Object.keys(question.options).filter(isAnswer);
  if (isMultiple(question)) return (question.acceptedAnswers ?? []).filter(key => question.options[key] !== undefined);
  return question.answer ? [question.answer] : [];
}
export function gradeQuestion(question: QbankQuestion, value?: QbankSelection | null): boolean | null {
  // A withdrawn/defective item awarded to everyone also receives credit if left blank in an exam.
  if (question.gradingMode === "all-credit") return true;
  const correct = correctAnswers(question);
  if (!correct.length) return null;
  const chosen = selectedAnswers(value);
  if (!chosen.length || chosen.some(key => question.options[key] === undefined)) return false;
  if (question.gradingMode === "multiple-any") return chosen.every(key => correct.includes(key));
  return chosen.length === correct.length && chosen.every(key => correct.includes(key));
}
export function selectionHint(question: QbankQuestion): string {
  if (question.gradingMode === "multiple-exact") return `복수선택 · ${correctAnswers(question).length}개를 모두 선택하세요. 선택한 보기를 다시 누르면 해제됩니다.`;
  if (question.gradingMode === "multiple-any") return "복수정답 인정 · 타당하다고 판단한 보기를 하나 이상 선택하세요. 인정 답만 선택하면 정답입니다.";
  return "";
}
// last_answer is a text column. Keep old single-letter records readable without a schema change.
export function encodeSelection(value?: QbankSelection): string | null {
  return isSelection(value) ? selectedAnswers(value).join(",") : null;
}
export function decodeSelection(value: unknown): QbankSelection | undefined {
  if (isSelection(value)) return value;
  if (typeof value !== "string") return undefined;
  const parts = value.split(",");
  return isSelection(parts) ? parts : undefined;
}
