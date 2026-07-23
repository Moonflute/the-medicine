import type { QbankAnswer } from "@/lib/types";

export type QbankSessionAnswer = {
  questionId: string;
  selected: QbankAnswer;
  correct: boolean;
  specialty: string;
};

export type QbankActiveSession = {
  key: string;
  mode: string;
  specialty: string;
  disease: string;
  chiefComplaint: string;
  count: string;
  questionIds: string[];
  currentIndex: number;
  selected: QbankAnswer | null;
  submitted: boolean;
  answers: QbankSessionAnswer[];
  startedAt: string;
  updatedAt: string;
};

const STORAGE_KEY = "medicine-web-qbank-active-session-v1";

export function loadActiveQbankSession(): QbankActiveSession | null {
  if (typeof window === "undefined") return null;
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null") as Partial<QbankActiveSession> | null;
    if (!value || typeof value !== "object" || typeof value.key !== "string" || !Array.isArray(value.questionIds)) return null;
    return {
      key: value.key,
      mode: typeof value.mode === "string" ? value.mode : "all",
      specialty: typeof value.specialty === "string" ? value.specialty : "all",
      disease: typeof value.disease === "string" ? value.disease : "",
      chiefComplaint: typeof value.chiefComplaint === "string" ? value.chiefComplaint : "",
      count: typeof value.count === "string" ? value.count : "10",
      questionIds: value.questionIds.filter((item): item is string => typeof item === "string"),
      currentIndex: typeof value.currentIndex === "number" ? Math.max(0, value.currentIndex) : 0,
      selected: value.selected === "A" || value.selected === "B" || value.selected === "C" || value.selected === "D" ? value.selected : null,
      submitted: value.submitted === true,
      answers: Array.isArray(value.answers) ? value.answers as QbankSessionAnswer[] : [],
      startedAt: typeof value.startedAt === "string" ? value.startedAt : new Date().toISOString(),
      updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveActiveQbankSession(session: QbankActiveSession) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...session, updatedAt: new Date().toISOString() }));
}

export function clearActiveQbankSession() {
  if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
}
