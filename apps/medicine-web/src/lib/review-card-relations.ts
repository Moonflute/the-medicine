import { safeStudyHref } from "./study-flow-model";

export type ReviewCardSpecialty = { id: string; label: string };
export type ReviewCardDocument = { href: string; title: string };
export type ReviewCardRelations = {
  specialties: ReviewCardSpecialty[];
  documents: ReviewCardDocument[];
};

export const REVIEW_CARD_RELATION_LIMIT = 12;

const documentRoute = /^\/(?:cc|disease|drugs|lab-img|skills|physiology|pathology|microbiology)\//;

export function reviewCardDocumentFrom(value: unknown): ReviewCardDocument | null {
  if (!value || typeof value !== "object") return null;
  const { href, title } = value as Partial<ReviewCardDocument>;
  if (!safeStudyHref(href) || !documentRoute.test(href) || href.length > 1000) return null;
  if (typeof title !== "string" || !title.trim() || title.length > 300) return null;
  return { href, title: title.trim() };
}

export function reviewCardSpecialtyFrom(value: unknown): ReviewCardSpecialty | null {
  if (!value || typeof value !== "object") return null;
  const { id, label } = value as Partial<ReviewCardSpecialty>;
  if (typeof id !== "string" || !/^[a-z0-9_-]{1,160}$/i.test(id)) return null;
  if (typeof label !== "string" || !label.trim() || label.length > 80) return null;
  return { id, label: label.trim() };
}

function readUnique<T>(value: unknown, parse: (item: unknown) => T | null, key: (item: T) => string): T[] {
  if (!Array.isArray(value)) return [];
  const result = new Map<string, T>();
  for (const raw of value) {
    const item = parse(raw);
    if (item && !result.has(key(item))) result.set(key(item), item);
    if (result.size === REVIEW_CARD_RELATION_LIMIT) break;
  }
  return [...result.values()];
}

export function readReviewCardRelations(value: unknown): ReviewCardRelations {
  const data = value && typeof value === "object" ? value as Partial<ReviewCardRelations> : {};
  return {
    specialties: readUnique(data.specialties, reviewCardSpecialtyFrom, item => item.id),
    documents: readUnique(data.documents, reviewCardDocumentFrom, item => item.href),
  };
}
