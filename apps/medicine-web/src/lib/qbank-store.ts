import type { QbankAnswer } from "@/lib/types";

export type QbankProgress = {
  questionId: string;
  attempts: number;
  correctAttempts: number;
  consecutiveCorrect: number;
  lastAnswer?: QbankAnswer;
  lastCorrect?: boolean;
  lastAttemptedAt?: string;
  mastered?: boolean;
};

export type QbankSessionResult = {
  id: string;
  startedAt: string;
  completedAt: string;
  questionIds: string[];
  correct: number;
  total: number;
};

export type QbankDailyActivity = {
  attempts: number;
  correct: number;
};

export type QbankState = {
  version: 1;
  progress: Record<string, QbankProgress>;
  wrongIds: string[];
  bookmarkIds: string[];
  sessions: QbankSessionResult[];
  dailyActivity: Record<string, QbankDailyActivity>;
};

const STORAGE_KEY = "medicine-web-qbank-v1";
const CHANGE_EVENT = "medicine-web-qbank-change";

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function emptyState(): QbankState {
  return { version: 1, progress: {}, wrongIds: [], bookmarkIds: [], sessions: [], dailyActivity: {} };
}

function loadDailyActivity(value: unknown, sessions: QbankSessionResult[]): Record<string, QbankDailyActivity> {
  const existing = value && typeof value === "object" ? value as Record<string, QbankDailyActivity> : {};
  if (Object.keys(existing).length > 0) return existing;

  const derived: Record<string, QbankDailyActivity> = {};
  for (const session of sessions) {
    if (!session?.completedAt) continue;
    const key = localDateKey(new Date(session.completedAt));
    const daily = derived[key] ?? { attempts: 0, correct: 0 };
    derived[key] = {
      attempts: daily.attempts + Math.max(0, Number(session.total) || 0),
      correct: daily.correct + Math.max(0, Number(session.correct) || 0),
    };
  }
  return derived;
}

export function loadQbankState(): QbankState {
  if (typeof window === "undefined") return emptyState();
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null") as Partial<QbankState> | null;
    if (!value || value.version !== 1) return emptyState();
    const sessions = Array.isArray(value.sessions) ? value.sessions.slice(0, 100) : [];
    return {
      version: 1,
      progress: value.progress && typeof value.progress === "object" ? value.progress : {},
      wrongIds: Array.isArray(value.wrongIds) ? value.wrongIds.filter((item): item is string => typeof item === "string") : [],
      bookmarkIds: Array.isArray(value.bookmarkIds) ? value.bookmarkIds.filter((item): item is string => typeof item === "string") : [],
      sessions,
      dailyActivity: loadDailyActivity(value.dailyActivity, sessions),
    };
  } catch {
    return emptyState();
  }
}

export function saveQbankState(state: QbankState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function recordQbankAttempt(questionId: string, answer: QbankAnswer, correct: boolean) {
  const state = loadQbankState();
  const previous = state.progress[questionId] ?? {
    questionId,
    attempts: 0,
    correctAttempts: 0,
    consecutiveCorrect: 0,
  };
  const next: QbankProgress = {
    ...previous,
    attempts: previous.attempts + 1,
    correctAttempts: previous.correctAttempts + (correct ? 1 : 0),
    consecutiveCorrect: correct ? previous.consecutiveCorrect + 1 : 0,
    lastAnswer: answer,
    lastCorrect: correct,
    lastAttemptedAt: new Date().toISOString(),
    mastered: correct && previous.consecutiveCorrect + 1 >= 2,
  };
  state.progress[questionId] = next;
  state.wrongIds = correct
    ? state.wrongIds
    : [...new Set([...state.wrongIds, questionId])];
  const dateKey = localDateKey();
  const daily = state.dailyActivity[dateKey] ?? { attempts: 0, correct: 0 };
  state.dailyActivity[dateKey] = {
    attempts: daily.attempts + 1,
    correct: daily.correct + (correct ? 1 : 0),
  };
  saveQbankState(state);
  return next;
}

export function toggleQbankBookmark(questionId: string) {
  const state = loadQbankState();
  const saved = state.bookmarkIds.includes(questionId);
  state.bookmarkIds = saved
    ? state.bookmarkIds.filter((id) => id !== questionId)
    : [...state.bookmarkIds, questionId];
  saveQbankState(state);
  return !saved;
}

export function removeQbankWrong(questionId: string) {
  const state = loadQbankState();
  state.wrongIds = state.wrongIds.filter((id) => id !== questionId);
  saveQbankState(state);
}

export function saveQbankSession(result: QbankSessionResult) {
  const state = loadQbankState();
  state.sessions = [result, ...state.sessions.filter((item) => item.id !== result.id)].slice(0, 100);
  saveQbankState(state);
}

export function exportQbankData() {
  return { exportedAt: new Date().toISOString(), ...loadQbankState() };
}

export function importQbankData(value: unknown) {
  if (!value || typeof value !== "object") throw new Error("올바른 Q-bank JSON 객체가 아닙니다.");
  const candidate = value as Partial<QbankState>;
  if (candidate.version !== 1) throw new Error("지원하지 않는 Q-bank 데이터 버전입니다.");
  const state: QbankState = {
    version: 1,
    progress: candidate.progress && typeof candidate.progress === "object" ? candidate.progress : {},
    wrongIds: Array.isArray(candidate.wrongIds) ? candidate.wrongIds.filter((item): item is string => typeof item === "string") : [],
    bookmarkIds: Array.isArray(candidate.bookmarkIds) ? candidate.bookmarkIds.filter((item): item is string => typeof item === "string") : [],
    sessions: Array.isArray(candidate.sessions) ? candidate.sessions.slice(0, 100) : [],
    dailyActivity: loadDailyActivity(candidate.dailyActivity, Array.isArray(candidate.sessions) ? candidate.sessions.slice(0, 100) : []),
  };
  saveQbankState(state);
}

export const QBANK_CHANGE_EVENT = CHANGE_EVENT;
