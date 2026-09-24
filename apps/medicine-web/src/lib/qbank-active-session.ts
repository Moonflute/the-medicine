import { isSelection } from "./qbank-grading";
import { readMockExam, type MockExamState } from "./mock-exam";
import type { QbankSelection } from "./types";

export type QbankSessionAnswer = { questionId: string; selected?: QbankSelection; correct: boolean | null; specialty: string };
export type QbankSessionTopic = { type: "disease" | "cc"; slug: string; title: string; count: number };
export type QbankSessionContext = {
  kind: string;
  title: string;
  summary?: string;
  topics?: QbankSessionTopic[];
  settings?: string[];
  requestedCount?: number;
  order?: "random" | "book";
  unattempted?: boolean;
};
export type QbankSessionSnapshot = {
  context?: QbankSessionContext;
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
const ACTIVE_SESSIONS_STORAGE_KEY = "medicine-web-qbank-active-sessions-v2";

export function readQbankSessionDrafts(value: unknown): Record<string, QbankSelection> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([, answer]) => isSelection(answer)));
}

function boundedText(value: unknown, maxLength: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const result = value.trim().slice(0, maxLength);
  return result || undefined;
}

function readSessionContext(value: unknown): QbankSessionContext | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;
  const candidate = value as Partial<QbankSessionContext>;
  const kind = boundedText(candidate.kind, 40);
  const title = boundedText(candidate.title, 120);
  if (!kind || !title || !/^[a-z0-9][a-z0-9-]*$/.test(kind)) return undefined;

  const summary = boundedText(candidate.summary, 240);
  const topicKeys = new Set<string>();
  const topics = Array.isArray(candidate.topics) ? candidate.topics.flatMap((value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return [];
    const topic = value as Partial<QbankSessionTopic>;
    if (topic.type !== "disease" && topic.type !== "cc") return [];
    const slug = boundedText(topic.slug, 240);
    const topicTitle = boundedText(topic.title, 120);
    if (!slug || !topicTitle || typeof topic.count !== "number" || !Number.isInteger(topic.count) || topic.count < 0 || topic.count > 100_000) return [];
    const key = `${topic.type}:${slug}`;
    if (topicKeys.has(key)) return [];
    topicKeys.add(key);
    return [{ type: topic.type, slug, title: topicTitle, count: topic.count } satisfies QbankSessionTopic];
  }).slice(0, 50) : [];

  const settings = Array.isArray(candidate.settings)
    ? [...new Set(candidate.settings.map((item) => boundedText(item, 100)).filter((item): item is string => Boolean(item)))].slice(0, 20)
    : [];
  const requestedCount = typeof candidate.requestedCount === "number" && Number.isInteger(candidate.requestedCount) && candidate.requestedCount > 0 && candidate.requestedCount <= 100_000
    ? candidate.requestedCount
    : undefined;
  const order = candidate.order === "random" || candidate.order === "book" ? candidate.order : undefined;
  const unattempted = typeof candidate.unattempted === "boolean" ? candidate.unattempted : undefined;

  return {
    kind,
    title,
    ...(summary ? { summary } : {}),
    ...(topics.length ? { topics } : {}),
    ...(settings.length ? { settings } : {}),
    ...(requestedCount ? { requestedCount } : {}),
    ...(order ? { order } : {}),
    ...(unattempted !== undefined ? { unattempted } : {}),
  };
}

export function activeSessionFrom(value: unknown): QbankActiveSession | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<QbankActiveSession>;
  if (typeof candidate.sessionId !== "string" || !Array.isArray(candidate.questionIds) || !Array.isArray(candidate.answers) || typeof candidate.updatedAt !== "string") return null;
  return {
    sessionId: candidate.sessionId,
    context: readSessionContext(candidate.context),
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

function sessionTime(session: QbankActiveSession): number {
  const value = Date.parse(session.updatedAt);
  return Number.isFinite(value) ? value : 0;
}

export function planActiveQbankSessionSync(local: QbankActiveSession[], remote: QbankActiveSession[], endedSessionIds: string[]) {
  const ended = new Set(endedSessionIds);
  const localActive = activeSessionsFrom(local).filter((session) => !ended.has(session.sessionId) && !session.mockExam?.finishedAt);
  const remoteActive = activeSessionsFrom(remote).filter((session) => !ended.has(session.sessionId) && !session.mockExam?.finishedAt);
  const remoteById = new Map(remoteActive.map((session) => [session.sessionId, session]));
  return {
    sessions: activeSessionsFrom([...localActive, ...remoteActive]),
    toUpload: localActive.filter((session) => {
      const saved = remoteById.get(session.sessionId);
      return !saved || sessionTime(session) > sessionTime(saved);
    }),
  };
}

export function activeSessionsFrom(value: unknown): QbankActiveSession[] {
  const record = value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : null;
  const values = Array.isArray(value) ? value
    : Array.isArray(record?.sessions) ? record.sessions
      : Array.isArray(record?.qbank_active_sessions) ? record.qbank_active_sessions
        : record && record.qbank_active_session !== undefined ? [record.qbank_active_session]
          : [value];
  const byId = new Map<string, QbankActiveSession>();
  for (const item of values) {
    const session = activeSessionFrom(item);
    if (!session) continue;
    const previous = byId.get(session.sessionId);
    if (!previous || sessionTime(session) > sessionTime(previous)) byId.set(session.sessionId, session);
  }
  return [...byId.values()].sort((left, right) => sessionTime(right) - sessionTime(left));
}

function readStoredJson(key: string): unknown {
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? "null");
  } catch {
    return null;
  }
}

function persistLocalActiveQbankSessions(sessions: QbankActiveSession[]) {
  if (!sessions.length) {
    window.localStorage.removeItem(ACTIVE_SESSIONS_STORAGE_KEY);
    window.localStorage.removeItem(ACTIVE_SESSION_STORAGE_KEY);
    return;
  }
  const normalized = activeSessionsFrom(sessions);
  window.localStorage.setItem(ACTIVE_SESSIONS_STORAGE_KEY, JSON.stringify(normalized));
  window.localStorage.setItem(ACTIVE_SESSION_STORAGE_KEY, JSON.stringify(normalized[0]));
}

export function loadLocalActiveQbankSessions(): QbankActiveSession[] {
  if (typeof window === "undefined") return [];
  const collection = activeSessionsFrom(readStoredJson(ACTIVE_SESSIONS_STORAGE_KEY));
  const legacy = activeSessionFrom(readStoredJson(ACTIVE_SESSION_STORAGE_KEY));
  return activeSessionsFrom(legacy ? [...collection, legacy] : collection);
}

export function loadLocalActiveQbankSession(sessionId?: string): QbankActiveSession | null {
  const sessions = loadLocalActiveQbankSessions();
  return (sessionId ? sessions.find((session) => session.sessionId === sessionId) : sessions[0]) ?? null;
}

export function saveLocalActiveQbankSession(session: QbankActiveSession) {
  if (typeof window === "undefined") return;
  const parsed = activeSessionFrom(session);
  if (!parsed) return;
  const sessions = activeSessionsFrom([parsed, ...loadLocalActiveQbankSessions()]);
  persistLocalActiveQbankSessions(sessions);
  const saved = sessions.find((candidate) => candidate.sessionId === parsed.sessionId) ?? parsed;
  window.localStorage.setItem(`${QBANK_SESSION_STORAGE_PREFIX}${saved.sessionId}`, JSON.stringify(saved));
}

export function clearLocalActiveQbankSession(sessionId?: string) {
  if (typeof window === "undefined") return;
  const sessions = loadLocalActiveQbankSessions();
  if (sessionId) {
    persistLocalActiveQbankSessions(sessions.filter((session) => session.sessionId !== sessionId));
    window.localStorage.removeItem(`${QBANK_SESSION_STORAGE_PREFIX}${sessionId}`);
    window.sessionStorage.removeItem(`${QBANK_SESSION_STORAGE_PREFIX}${sessionId}`);
    return;
  }
  persistLocalActiveQbankSessions([]);
  for (const session of sessions) {
    window.localStorage.removeItem(`${QBANK_SESSION_STORAGE_PREFIX}${session.sessionId}`);
    window.sessionStorage.removeItem(`${QBANK_SESSION_STORAGE_PREFIX}${session.sessionId}`);
  }
}

export function remapLocalActiveQbankSession(aliases: Record<string, string>) {
  const sessions = loadLocalActiveQbankSessions();
  if (!sessions.length || !Object.keys(aliases).length) return sessions[0] ?? null;
  const map = (id: string) => aliases[id] ?? id;
  let changed = false;
  const next = sessions.map((session) => {
    const questionIds = session.questionIds.map(map);
    const answers = session.answers.map((answer) => ({ ...answer, questionId: map(answer.questionId) }));
    const drafts = Object.fromEntries(Object.entries(session.drafts ?? {}).map(([id, value]) => [map(id), value]));
    if (questionIds.every((id, index) => id === session.questionIds[index]) && answers.every((answer, index) => answer.questionId === session.answers[index].questionId)) return session;
    changed = true;
    return { ...session, questionIds, answers, drafts, selected: session.selected };
  });
  if (!changed) return sessions[0];
  persistLocalActiveQbankSessions(next);
  for (const session of next) window.localStorage.setItem(`${QBANK_SESSION_STORAGE_PREFIX}${session.sessionId}`, JSON.stringify(session));
  return next[0];
}
