import type { QbankAnswer, QbankQuestion } from "./types";

export const OPTION_LABELS: QbankAnswer[] = ["A", "B", "C", "D", "E"];

// Answers and stored selections always retain their original IDs. Only presentation changes.
export function optionOrder(question: Pick<QbankQuestion, "id" | "questionBank" | "options" | "question" | "explanation">, sessionId: string): QbankAnswer[] {
  const keys = OPTION_LABELS.filter(key => question.options[key] !== undefined);
  if (question.questionBank !== "theory" || !sessionId) return keys;
  // Positional references would change meaning after a shuffle.
  const text = [question.question, question.explanation, ...Object.values(question.options)].join("\n");
  if (/(?:위의|상기의|이상의)\s*(?:모두|모든|보기|선택지)|(?:선택지|보기|정답)\s*[A-E①-⑤]|\b[A-E]\s*(?:번|선택지|보기|와|과|및|and\b)|[①-⑤]\s*(?:번|와|과|및)/i.test(text)) return keys;
  let seed = 2166136261;
  for (const char of `${sessionId}:${question.id}`) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  const random = () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let value = Math.imul(seed ^ seed >>> 15, 1 | seed);
    value ^= value + Math.imul(value ^ value >>> 7, 61 | value);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
  for (let i = keys.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [keys[i], keys[j]] = [keys[j], keys[i]];
  }
  return keys;
}
