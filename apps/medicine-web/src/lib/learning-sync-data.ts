import { studyDateKey } from "./study-date";
import { encodeSelection, decodeSelection } from "./qbank-grading";
import type { RecentReviewItem, ReviewCatalogItem, ReviewCoverageItem, ReviewDomain, ReviewItem } from "./review-store";
import type { QbankSessionResult, QbankState } from "./qbank-store";
type Metadata = Pick<ReviewCatalogItem, "title" | "href" | "category" | "summary" | "categories">;
type Row = Record<string, unknown>;



export function key(domain: string, contentId: string) {
  return `${domain}|${contentId}`;
}

function isDomain(value: unknown): value is ReviewDomain {
  return value === "disease" || value === "cc" || value === "drug" || value === "lab" || value === "skill";
}

function text(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function metadataFromItem(item: ReviewCatalogItem): Metadata {
  return { title: item.title, href: item.href, category: item.category, summary: item.summary, categories: item.categories };
}

export function itemFromRow(row: Row): ReviewItem | null {
  const domain = row.domain;
  const id = row.content_id;
  if (!isDomain(domain) || typeof id !== "string") return null;
  const metadata = row.metadata && typeof row.metadata === "object" ? row.metadata as Row : {};
  return {
    type: domain,
    id,
    title: text(metadata.title, id),
    href: text(metadata.href, "/review"),
    category: text(metadata.category, domain),
    summary: text(metadata.summary),
    categories: Array.isArray(metadata.categories) ? metadata.categories.filter((value): value is string => typeof value === "string") : undefined,
    savedAt: text(row.saved_at, new Date().toISOString()),
    lastReviewedAt: typeof row.last_reviewed_at === "string" ? row.last_reviewed_at : undefined,
    confidence: row.confidence === "again" || row.confidence === "hard" || row.confidence === "good" ? row.confidence : undefined,
    reviewCount: typeof row.review_count === "number" ? row.review_count : 0,
    nextReviewAt: typeof row.next_review_at === "string" ? row.next_review_at : undefined,
  };
}

export function coverageFromRow(row: Row): ReviewCoverageItem | null {
  const domain = row.domain;
  const id = row.content_id;
  if (!isDomain(domain) || typeof id !== "string") return null;
  const lastViewedAt = text(row.last_viewed_at, new Date().toISOString());
  return {
    type: domain,
    id,
    firstViewedAt: text(row.first_viewed_at, lastViewedAt),
    lastViewedAt,
    lastCountedDate: studyDateKey(new Date(lastViewedAt)),
    viewCount: typeof row.view_count === "number" ? row.view_count : 0,
  };
}

export function recentFromRow(row: Row): RecentReviewItem | null {
  const item = itemFromRow({ ...row, saved_at: row.last_viewed_at, review_count: 0 });
  if (!item) return null;
  return { type: item.type, id: item.id, title: item.title, href: item.href, category: item.category, categories: item.categories, summary: item.summary, viewedAt: text(row.last_viewed_at, new Date().toISOString()) };
}

function isoMax(...values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value)).sort().at(-1);
}

function isoMin(...values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value)).sort()[0];
}

export function mergeReviewItems(local: ReviewItem[], remote: ReviewItem[]) {
  const merged = new Map<string, ReviewItem>();
  for (const item of [...remote, ...local]) {
    const current = merged.get(key(item.type, item.id));
    if (!current) {
      merged.set(key(item.type, item.id), item);
      continue;
    }
    const useItem = (isoMax(current.lastReviewedAt, item.lastReviewedAt) ?? item.savedAt) === (item.lastReviewedAt ?? item.savedAt) ? item : current;
    merged.set(key(item.type, item.id), {
      ...current,
      ...useItem,
      savedAt: isoMin(current.savedAt, item.savedAt) ?? current.savedAt,
      reviewCount: Math.max(current.reviewCount, item.reviewCount),
      lastReviewedAt: isoMax(current.lastReviewedAt, item.lastReviewedAt),
      nextReviewAt: useItem.nextReviewAt,
    });
  }
  return [...merged.values()];
}

export function mergeCoverage(local: Record<string, ReviewCoverageItem>, remote: Record<string, ReviewCoverageItem>) {
  const merged: Record<string, ReviewCoverageItem> = { ...remote };
  for (const [entryKey, item] of Object.entries(local)) {
    const current = merged[entryKey];
    merged[entryKey] = current ? {
      ...current,
      firstViewedAt: isoMin(current.firstViewedAt, item.firstViewedAt) ?? current.firstViewedAt,
      lastViewedAt: isoMax(current.lastViewedAt, item.lastViewedAt) ?? current.lastViewedAt,
      lastCountedDate: studyDateKey(new Date(isoMax(current.lastViewedAt, item.lastViewedAt) ?? current.lastViewedAt)),
      viewCount: Math.max(current.viewCount, item.viewCount),
    } : item;
  }
  return merged;
}

function emptyQbankState(): QbankState {
  return { version: 1, progress: {}, wrongIds: [], bookmarkIds: [], sessions: [], dailyActivity: {} };
}

export function qbankStateFromRows(progressRows: Row[], sessionRows: Row[]): QbankState {
  const state = emptyQbankState();
  for (const row of progressRows) {
    const questionId = text(row.question_id);
    if (!questionId) continue;
    state.progress[questionId] = {
      questionId,
      attempts: typeof row.attempts === "number" ? row.attempts : 0,
      correctAttempts: typeof row.correct_attempts === "number" ? row.correct_attempts : 0,
      consecutiveCorrect: typeof row.consecutive_correct === "number" ? row.consecutive_correct : 0,
      lastAnswer: decodeSelection(row.last_answer),
      lastCorrect: typeof row.last_correct === "boolean" ? row.last_correct : undefined,
      lastAttemptedAt: typeof row.last_attempted_at === "string" ? row.last_attempted_at : undefined,
    };
    if (row.wrong_marked === true) state.wrongIds.push(questionId);
    if (row.bookmarked === true) state.bookmarkIds.push(questionId);
  }
  state.sessions = sessionRows.map((row) => ({
    id: text(row.session_id),
    startedAt: text(row.started_at),
    completedAt: text(row.completed_at),
    questionIds: Array.isArray(row.question_ids) ? row.question_ids.filter((value): value is string => typeof value === "string") : [],
    correct: typeof row.correct === "number" ? row.correct : 0,
    total: typeof row.total === "number" ? row.total : 0,
  })).filter((session) => Boolean(session.id)).sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  for (const session of state.sessions) {
    const day = studyDateKey(new Date(session.completedAt));
    const daily = state.dailyActivity[day] ?? { attempts: 0, correct: 0 };
    state.dailyActivity[day] = { attempts: daily.attempts + session.total, correct: daily.correct + session.correct };
  }
  return state;
}

export function mergeQbank(local: QbankState, remote: QbankState): QbankState {
  const state = emptyQbankState();
  const ids = new Set([...Object.keys(local.progress), ...Object.keys(remote.progress), ...local.wrongIds, ...remote.wrongIds, ...local.bookmarkIds, ...remote.bookmarkIds]);
  for (const questionId of ids) {
    const left = local.progress[questionId];
    const right = remote.progress[questionId];
    const recent = (isoMax(left?.lastAttemptedAt, right?.lastAttemptedAt) ?? left?.lastAttemptedAt) === left?.lastAttemptedAt ? left : right;
    state.progress[questionId] = {
      questionId,
      attempts: Math.max(left?.attempts ?? 0, right?.attempts ?? 0),
      correctAttempts: Math.max(left?.correctAttempts ?? 0, right?.correctAttempts ?? 0),
      consecutiveCorrect: recent?.consecutiveCorrect ?? 0,
      lastAnswer: recent?.lastAnswer,
      lastCorrect: recent?.lastCorrect,
      lastAttemptedAt: isoMax(left?.lastAttemptedAt, right?.lastAttemptedAt),
    };
  }
  state.wrongIds = [...new Set([...local.wrongIds, ...remote.wrongIds])];
  state.bookmarkIds = [...new Set([...local.bookmarkIds, ...remote.bookmarkIds])];
  const sessions = new Map<string, QbankSessionResult>();
  for (const item of [...remote.sessions, ...local.sessions]) sessions.set(item.id, item);
  state.sessions = [...sessions.values()].sort((left, right) => right.completedAt.localeCompare(left.completedAt)).slice(0, 100);
  for (const session of state.sessions) {
    const day = studyDateKey(new Date(session.completedAt));
    const daily = state.dailyActivity[day] ?? { attempts: 0, correct: 0 };
    state.dailyActivity[day] = { attempts: daily.attempts + session.total, correct: daily.correct + session.correct };
  }
  for (const [day, daily] of Object.entries(local.dailyActivity)) {
    const current = state.dailyActivity[day];
    state.dailyActivity[day] = { attempts: Math.max(daily.attempts, current?.attempts ?? 0), correct: Math.max(daily.correct, current?.correct ?? 0) };
  }
  return state;
}


export function reviewRow(item: ReviewItem): Row {
  return { domain: item.type, content_id: item.id, is_saved: true, saved_at: item.savedAt, last_reviewed_at: item.lastReviewedAt ?? null, confidence: item.confidence ?? null, review_count: item.reviewCount, next_review_at: item.nextReviewAt ?? null, metadata: metadataFromItem(item) };
}
export function coverageRow(item: ReviewCoverageItem, recent?: RecentReviewItem): Row {
  return { domain: item.type, content_id: item.id, first_viewed_at: item.firstViewedAt, last_viewed_at: item.lastViewedAt, view_count: item.viewCount, ...(recent ? {metadata: metadataFromItem(recent)} : {}) };
}
export function questionRows(state: QbankState): Row[] {
  return [...new Set([...Object.keys(state.progress), ...state.wrongIds, ...state.bookmarkIds])].map(questionId => {
    const progress = state.progress[questionId];
    return { question_id: questionId, attempts: progress?.attempts ?? 0, correct_attempts: progress?.correctAttempts ?? 0, consecutive_correct: progress?.consecutiveCorrect ?? 0, last_answer: encodeSelection(progress?.lastAnswer), last_correct: progress?.lastCorrect ?? null, last_attempted_at: progress?.lastAttemptedAt ?? null, wrong_marked: state.wrongIds.includes(questionId), bookmarked: state.bookmarkIds.includes(questionId) };
  });
}
export function sessionRow(session: QbankSessionResult): Row {
  return { session_id: session.id, started_at: session.startedAt, completed_at: session.completedAt, question_ids: session.questionIds, correct: session.correct, total: session.total };
}
