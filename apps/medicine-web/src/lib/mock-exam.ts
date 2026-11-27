import type { QbankAnswer, QbankQuestion, QbankSelection } from "./types";
import { correctAnswers, gradeQuestion, isAnswer, isSelection } from "./qbank-grading";

export type MockExamResult = { questionId: string; selected?: QbankSelection; correct: boolean | null; correctAnswer: QbankAnswer | null; correctAnswers?: QbankAnswer[]; specialty: string };
export type MockExamState = { version: 1; title: string; startedAt: string; drafts: Record<string, QbankSelection>; flaggedIds: string[]; finishedAt?: string; results?: MockExamResult[] };

export const MOCK_SUBJECTS = ["내과", "외과", "산부인과", "소아과"] as const;
const mockSubjectRanks = new Map<string, number>(MOCK_SUBJECTS.map((subject, index) => [subject, index]));

export function compareMockSubjects(left: string, right: string): number {
  return (mockSubjectRanks.get(left) ?? MOCK_SUBJECTS.length) - (mockSubjectRanks.get(right) ?? MOCK_SUBJECTS.length)
    || left.localeCompare(right, "ko");
}

export type MockExamSummary = {
  version: 1;
  title: string;
  durationSeconds?: number;
  total: number;
  graded: number;
  correct: number;
  subjects: Record<string, { correct: number; total: number }>;
  wrongQuestionIds: string[];
  unansweredQuestionIds: string[];
  omittedQuestionIds: string[];
  /** Ordered, immutable grading snapshot, independent of later attempts/answer-key edits. */
  results: MockExamResult[];
};

export function createMockExamSummary(title: string, results: MockExamResult[], durationSeconds?: number): MockExamSummary {
  const subjects: MockExamSummary["subjects"] = Object.fromEntries(MOCK_SUBJECTS.map(subject => [subject, { correct: 0, total: 0 }]));
  for (const result of results) {
    const score = subjects[result.specialty] ??= { correct: 0, total: 0 };
    if (result.correct !== null) score.total++;
    if (result.correct === true) score.correct++;
  }
  return {
    version: 1, title: title.slice(0, 120),
    durationSeconds: typeof durationSeconds === "number" && Number.isFinite(durationSeconds) && durationSeconds >= 0 ? Math.floor(durationSeconds) : undefined,
    total: results.length, graded: results.filter(result => result.correct !== null).length,
    correct: results.filter(result => result.correct === true).length, subjects,
    wrongQuestionIds: results.filter(result => result.correct === false).map(result => result.questionId),
    unansweredQuestionIds: results.filter(result => !isSelection(result.selected)).map(result => result.questionId),
    omittedQuestionIds: results.filter(result => result.correct === null).map(result => result.questionId),
    results,
  };
}

export function readMockExamSummary(value: unknown): MockExamSummary | undefined {
  if (!value || typeof value !== "object") return undefined;
  const summary = value as Partial<MockExamSummary>;
  if (summary.version !== 1 || typeof summary.title !== "string" || !Array.isArray(summary.results) || !summary.results.length) return undefined;
  const parsed = readMockExam({ version: 1, startedAt: "2000-01-01T00:00:00Z", results: summary.results });
  if (!parsed?.results || parsed.results.length !== summary.results.length || new Set(parsed.results.map(result => result.questionId)).size !== parsed.results.length) return undefined;
  return createMockExamSummary(summary.title, parsed.results, summary.durationSeconds);
}

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

export function mockQuestionSubject(question: Pick<QbankQuestion, "id" | "archiveRoundKey" | "bookDepartment">): string {
  return (question.archiveRoundKey ? question.bookDepartment?.trim() : undefined) || mockSubject(question.id);
}

export function gradeMockExam(questions: QbankQuestion[], drafts: Record<string, QbankSelection>): MockExamResult[] {
  return questions.map(q => ({ questionId: q.id, selected: isSelection(drafts[q.id]) ? drafts[q.id] : undefined, correct: gradeQuestion(q, drafts[q.id]), correctAnswer: q.answer, correctAnswers: correctAnswers(q), specialty: mockQuestionSubject(q) }));
}
