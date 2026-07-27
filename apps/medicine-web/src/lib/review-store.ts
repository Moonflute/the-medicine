export type ReviewDomain = "disease" | "cc" | "drug" | "lab" | "skill";

export type ReviewConfidence = "again" | "hard" | "good";

export type ReviewCatalogItem = {
  type: ReviewDomain;
  id: string;
  title: string;
  href: string;
  category: string;
  categories?: string[];
  summary: string;
};

export type ReviewItem = ReviewCatalogItem & {
  savedAt: string;
  lastReviewedAt?: string;
  confidence?: ReviewConfidence;
  reviewCount: number;
  nextReviewAt?: string;
};

export type RecentReviewItem = ReviewCatalogItem & {
  viewedAt: string;
};

export type ReviewCoverageItem = {
  type: ReviewDomain;
  id: string;
  firstViewedAt: string;
  lastViewedAt: string;
  lastCountedDate: string;
  viewCount: number;
};

const STORAGE_KEY = "medicine-web-review-v2";
const LEGACY_STORAGE_KEY = "medicine-web-review";
const RECENT_KEY = "medicine-web-recent-items";
const COVERAGE_KEY = "medicine-web-review-coverage-v1";
const CHANGE_EVENT = "medicine-web-review-change";
const REVIEW_DOMAINS = new Set<ReviewDomain>(["disease", "cc", "drug", "lab", "skill"]);

function isReviewDomain(value: unknown): value is ReviewDomain {
  return typeof value === "string" && REVIEW_DOMAINS.has(value as ReviewDomain);
}

function readArray<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const value = JSON.parse(window.localStorage.getItem(key) ?? "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function emitChange() {
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

function catalogKey(type: string, id: string) {
  return `${type}|${id}`;
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function loadReviewCoverage(catalog: ReviewCatalogItem[] = []): Record<string, ReviewCoverageItem> {
  if (typeof window === "undefined") return {};
  let coverage: Record<string, ReviewCoverageItem> = {};
  try {
    const value = JSON.parse(window.localStorage.getItem(COVERAGE_KEY) ?? "null") as Record<string, ReviewCoverageItem> | null;
    if (value && typeof value === "object") coverage = value;
  } catch {
    coverage = {};
  }

  if (Object.keys(coverage).length === 0) {
    for (const item of readArray<RecentReviewItem>(RECENT_KEY)) {
      if (!isReviewDomain(item.type) || typeof item.id !== "string" || typeof item.viewedAt !== "string") continue;
      coverage[catalogKey(item.type, item.id)] = {
        type: item.type,
        id: item.id,
        firstViewedAt: item.viewedAt,
        lastViewedAt: item.viewedAt,
        lastCountedDate: localDateKey(new Date(item.viewedAt)),
        viewCount: 1,
      };
    }
    if (Object.keys(coverage).length > 0) window.localStorage.setItem(COVERAGE_KEY, JSON.stringify(coverage));
  }

  if (catalog.length === 0) return coverage;
  const allowed = new Set(catalog.map((item) => catalogKey(item.type, item.id)));
  return Object.fromEntries(Object.entries(coverage).filter(([key]) => allowed.has(key)));
}

function enrichItems(items: ReviewItem[], catalog: ReviewCatalogItem[]) {
  const catalogByKey = new Map(catalog.map((item) => [catalogKey(item.type, item.id), item]));
  return items
    .filter((item) => item && typeof item.id === "string" && isReviewDomain(item.type))
    .filter((item) => catalog.length === 0 || catalogByKey.has(catalogKey(item.type, item.id)))
    .map((item) => ({ ...item, ...(catalogByKey.get(catalogKey(item.type, item.id)) ?? {}) }));
}

export function loadReviewItems(catalog: ReviewCatalogItem[] = []): ReviewItem[] {
  if (typeof window === "undefined") return [];
  const hasCurrentStore = window.localStorage.getItem(STORAGE_KEY) !== null;
  const current = readArray<ReviewItem>(STORAGE_KEY);
  if (hasCurrentStore) return enrichItems(current, catalog);

  const legacy = readArray<string>(LEGACY_STORAGE_KEY).filter((item) => typeof item === "string");
  if (legacy.length === 0) return [];

  const diseaseById = new Map(catalog.filter((item) => item.type === "disease").map((item) => [item.id, item]));
  const now = new Date().toISOString();
  const migrated = legacy.map((slug) => ({
    type: "disease" as const,
    id: slug,
    title: diseaseById.get(slug)?.title ?? slug,
    href: diseaseById.get(slug)?.href ?? `/disease/${slug}`,
    category: diseaseById.get(slug)?.category ?? "Disease",
    summary: diseaseById.get(slug)?.summary ?? "",
    savedAt: now,
    reviewCount: 0,
  }));
  saveReviewItems(migrated);
  window.localStorage.removeItem(LEGACY_STORAGE_KEY);
  return migrated;
}

export function saveReviewItems(items: ReviewItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  emitChange();
}

export function toggleReviewItem(item: ReviewCatalogItem) {
  const items = loadReviewItems();
  const index = items.findIndex((saved) => saved.type === item.type && saved.id === item.id);
  if (index >= 0) {
    saveReviewItems(items.filter((_, itemIndex) => itemIndex !== index));
    return false;
  }

  saveReviewItems([
    ...items,
    {
      ...item,
      savedAt: new Date().toISOString(),
      reviewCount: 0,
    },
  ]);
  return true;
}

export function rateReviewItem(type: ReviewDomain, id: string, confidence: ReviewConfidence) {
  const now = new Date();
  const items = loadReviewItems();
  const next = items.map((item) => {
    if (item.type !== type || item.id !== id) return item;
    const reviewCount = item.reviewCount + 1;
    const delayMinutes =
      confidence === "again"
        ? 10
        : confidence === "hard"
          ? 24 * 60 * Math.max(1, reviewCount)
          : 3 * 24 * 60 * Math.max(1, reviewCount);
    return {
      ...item,
      confidence,
      reviewCount,
      lastReviewedAt: now.toISOString(),
      nextReviewAt: new Date(now.getTime() + delayMinutes * 60_000).toISOString(),
    };
  });
  saveReviewItems(next);
}

export function isDue(item: ReviewItem, now = new Date()) {
  return !item.nextReviewAt || new Date(item.nextReviewAt).getTime() <= now.getTime();
}

export function loadRecentItems(catalog: ReviewCatalogItem[] = []): RecentReviewItem[] {
  const allowed = new Set(catalog.map((item) => catalogKey(item.type, item.id)));
  return readArray<RecentReviewItem>(RECENT_KEY).filter(
    (item) => isReviewDomain(item.type) && (catalog.length === 0 || allowed.has(catalogKey(item.type, item.id))),
  );
}

export function trackRecentItem(item: ReviewCatalogItem) {
  if (typeof window === "undefined") return;
  const now = new Date();
  const nowIso = now.toISOString();
  const current = loadRecentItems();
  const next = [
    { ...item, viewedAt: nowIso },
    ...current.filter((saved) => saved.type !== item.type || saved.id !== item.id),
  ].slice(0, 50);
  window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));

  const coverage = loadReviewCoverage();
  const key = catalogKey(item.type, item.id);
  const previous = coverage[key];
  const dateKey = localDateKey(now);
  coverage[key] = {
    type: item.type,
    id: item.id,
    firstViewedAt: previous?.firstViewedAt ?? nowIso,
    lastViewedAt: nowIso,
    lastCountedDate: dateKey,
    viewCount: (previous?.viewCount ?? 0) + (previous?.lastCountedDate === dateKey ? 0 : 1),
  };
  window.localStorage.setItem(COVERAGE_KEY, JSON.stringify(coverage));
  emitChange();
}

export function exportReviewData() {
  return {
    version: 2,
    exportedAt: new Date().toISOString(),
    items: loadReviewItems(),
    recentItems: loadRecentItems(),
    coverage: loadReviewCoverage(),
  };
}

export function importReviewData(value: unknown) {
  if (!value || typeof value !== "object") throw new Error("올바른 JSON 객체가 아닙니다.");
  const data = value as { version?: unknown; items?: unknown; recentItems?: unknown; coverage?: unknown };
  if (data.version !== 2 || !Array.isArray(data.items)) throw new Error("지원하지 않는 복습 데이터 형식입니다.");
  const items = data.items.filter((item): item is ReviewItem => Boolean(item && typeof item === "object" && "id" in item && "type" in item && isReviewDomain((item as { type?: unknown }).type)));
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  if (Array.isArray(data.recentItems)) window.localStorage.setItem(RECENT_KEY, JSON.stringify(data.recentItems));
  if (data.coverage && typeof data.coverage === "object") window.localStorage.setItem(COVERAGE_KEY, JSON.stringify(data.coverage));
  emitChange();
}

export const REVIEW_CHANGE_EVENT = CHANGE_EVENT;
