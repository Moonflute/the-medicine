import { isSelection } from "./qbank-grading";
import { readMockExam, type MockExamState } from "./mock-exam";
import type { QbankSelection } from "./types";

export type QbankSessionAnswer = { questionId: string; selected?: QbankSelection; correct: boolean | null; specialty: string };
export type QbankSessionSnapshot = {
  drafts?: Record<string, QbankSelection>;
  mockExam?: MockExamState | null;
  questionIds: string[];
  currentIndex: number;
  answers: QbankSessionAnswer[];
  selected: QbankSelection | null;
  submitted: boolean;
};
export type QbankActiveSession = QbankSessionSnapshot & { sessionId: string; updatedAt: string };

export const QBANK_SESSION_STORAGE_PREFIX = "medicine-web-qbank-session:";
const ACTIVE_SESSION_STORAGE_KEY = "medicine-web-qbank-active-session-v1";

export function readQbankSessionDrafts(value: unknown): Record<string, QbankSelection> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([, answer]) => isSelection(answer)));
}

export function activeSessionFrom(value: unknown): QbankActiveSession | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<QbankActiveSession>;
  if (typeof candidate.sessionId !== "string" || !Array.isArray(candidate.questionIds) || !Array.isArray(candidate.answers) || typeof candidate.updatedAt !== "string") return null;
  return {
    sessionId: candidate.sessionId,
    mockExam: readMockExam(candidate.mockExam),
    drafts: readQbankSessionDrafts(candidate.drafts),
    questionIds: candidate.questionIds.filter((item): item is string => typeof item === "string"),
    currentIndex: typeof candidate.currentIndex === "number" ? candidate.currentIndex : 0,
    answers: candidate.answers as QbankSessionAnswer[],
    selected: isSelection(candidate.selected) ? candidate.selected : null,
    submitted: Boolean(candidate.submitted),
    updatedAt: candidate.updatedAt,
  };
}

export function loadLocalActiveQbankSession(): QbankActiveSession | null {
  if (typeof window === "undefined") return null;
  try {
    return activeSessionFrom(JSON.parse(window.localStorage.getItem(ACTIVE_SESSION_STORAGE_KEY) ?? "null"));
  } catch {
    return null;
  }
}

export function saveLocalActiveQbankSession(session: QbankActiveSession) {
  if (typeof window === "undefined") return;
  const serialized = JSON.stringify(session);
  window.localStorage.setItem(ACTIVE_SESSION_STORAGE_KEY, serialized);
  window.localStorage.setItem(`${QBANK_SESSION_STORAGE_PREFIX}${session.sessionId}`, serialized);
}

export function clearLocalActiveQbankSession(sessionId?: string) {
  if (typeof window === "undefined") return;
  const saved = loadLocalActiveQbankSession();
  const targetId = sessionId ?? saved?.sessionId;
  window.localStorage.removeItem(ACTIVE_SESSION_STORAGE_KEY);
  if (targetId) {
    window.localStorage.removeItem(`${QBANK_SESSION_STORAGE_PREFIX}${targetId}`);
    window.sessionStorage.removeItem(`${QBANK_SESSION_STORAGE_PREFIX}${targetId}`);
  }
}

export function remapLocalActiveQbankSession(aliases: Record<string, string>) {
  const session = loadLocalActiveQbankSession();
  if (!session || !Object.keys(aliases).length) return session;
  const map = (id: string) => aliases[id] ?? id;
  const questionIds = session.questionIds.map(map);
  const answers = session.answers.map((answer) => ({ ...answer, questionId: map(answer.questionId) }));
  const drafts = Object.fromEntries(Object.entries(session.drafts ?? {}).map(([id, value]) => [map(id), value]));
  if (questionIds.every((id, index) => id === session.questionIds[index]) && answers.every((answer, index) => answer.questionId === session.answers[index].questionId)) return session;
  const next = { ...session, questionIds, answers, drafts, selected: session.selected };
  saveLocalActiveQbankSession(next);
  return next;
}
