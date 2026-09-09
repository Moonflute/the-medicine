import type { QbankAnswer, QbankQuestion, QbankSelection } from "./types";
import { correctAnswers, gradeQuestion, isAnswer, isSelection } from "./qbank-grading";

export type MockExamResult = { questionId: string; selected?: QbankSelection; correct: boolean | null; correctAnswer: QbankAnswer | null; correctAnswers?: QbankAnswer[]; specialty: string };
export type MockExamState = { version: 1; title: string; startedAt: string; drafts: Record<string, QbankSelection>; flaggedIds: string[]; finishedAt?: string; results?: MockExamResult[] };

export function readMockExam(value: unknown): MockExamState | null {
  if (!value || typeof value !== "object") return null;
  const x = value as Partial<MockExamState>;
  if (x.version !== 1 || typeof x.startedAt !== "string" || !Number.isFinite(Date.parse(x.startedAt))) return null;
  const drafts = Object.fromEntries(Object.entries(x.drafts ?? {}).filter(([, answer]) => isSelection(answer)));
  const finishedAt = typeof x.finishedAt === "string" && Number.isFinite(Date.parse(x.finishedAt)) ? x.finishedAt : undefined;
  const results = Array.isArray(x.results) ? x.results.filter(r => r && typeof r.questionId === "string" && (r.selected === undefined || isSelection(r.selected)) && (r.correct === null || typeof r.correct === "boolean") && (r.correctAnswer === null || isAnswer(r.correctAnswer)) && (r.correctAnswers === undefined || Array.isArray(r.correctAnswers) && r.correctAnswers.every(isAnswer)) && typeof r.specialty === "string") : undefined;
  return { version: 1, title: typeof x.title === "string" ? x.title.slice(0, 80) : "실전 모의고사", startedAt: x.startedAt, drafts, flaggedIds: Array.isArray(x.flaggedIds) ? [...new Set(x.flaggedIds.filter((id): id is string => typeof id === "string"))] : [], finishedAt: finishedAt && results?.length ? finishedAt : undefined, results };
}

export function mockSubject(id: string): string {
  return ({ IM: "내과", GS: "외과", OG: "산부인과", PE: "소아과" } as Record<string, string>)[id.match(/-(IM|GS|OG|PE)-/)?.[1] ?? ""] ?? "기타";
}

export function gradeMockExam(questions: QbankQuestion[], drafts: Record<string, QbankSelection>): MockExamResult[] {
  return questions.map(q => ({ questionId: q.id, selected: isSelection(drafts[q.id]) ? drafts[q.id] : undefined, correct: gradeQuestion(q, drafts[q.id]), correctAnswer: q.answer, correctAnswers: correctAnswers(q), specialty: mockSubject(q.id) }));
}
