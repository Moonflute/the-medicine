import { practiceQuestionExamLabel, practiceVersionIds, type PracticeIndex } from "./practice-selection";

export const QUESTION_BOOKMARKS_HREF = "/review/bookmarks?tab=questions";
const QUESTION_ID = /^[a-z0-9_-]{1,1000}$/i;

export function questionBookmarkIdFromParams(params: URLSearchParams): string | undefined {
  if (params.get("mode") !== "bookmarks" || !params.has("id")) return undefined;
  const id = params.get("id") ?? "";
  return QUESTION_ID.test(id) ? id : "";
}

function questionBookmarkHref(id: string) {
  return "/review/qbank/session?" + new URLSearchParams({ mode: "bookmarks", id, count: "1" }).toString();
}

export type QuestionBookmarkRow = { id: string; title: string; href?: string; bookmarkIds: string[] };

export function questionBookmarkRows(bookmarkIds: readonly string[], publicTitles?: ReadonlyMap<string, string>, practice?: readonly PracticeIndex[]): QuestionBookmarkRow[] {
  const marked = new Set(bookmarkIds);
  const practiceRows = new Map<string, QuestionBookmarkRow>();
  for (const question of practice ?? []) {
    const versions = practiceVersionIds(question);
    const equivalentIds = [...new Set([...versions, ...(question.sourceIds ?? [])])];
    if (!equivalentIds.some(id => marked.has(id))) continue;
    const id = versions.findLast(id => marked.has(id)) ?? question.id;
    const number = question.id.match(/-(\d+)$/)?.[1];
    const subject = question.bookDepartment || question.specialty?.replace(/^\d+\s*/, "") || "실전문항";
    const title = [practiceQuestionExamLabel(question), subject, number ? `${Number(number)}번` : question.id].join(" · ");
    const row = { id: question.id, title, href: questionBookmarkHref(id), bookmarkIds: equivalentIds };
    for (const alias of equivalentIds) practiceRows.set(alias, row);
  }

  const rows = new Map<string, QuestionBookmarkRow>();
  for (const id of marked) {
    const practiceRow = practiceRows.get(id);
    if (practiceRow) {
      rows.set(practiceRow.id, practiceRow);
      continue;
    }
    const title = publicTitles?.get(id);
    rows.set(id, { id, title: title || `문항 · ${id}`, href: title && QUESTION_ID.test(id) ? questionBookmarkHref(id) : undefined, bookmarkIds: [id] });
  }
  return [...rows.values()];
}

let titlesRequest: Promise<ReadonlyMap<string, string>> | undefined;

export function loadPublicQuestionBookmarkTitles() {
  const path = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/generated/qbank/bookmark-titles.json?v=${process.env.NEXT_PUBLIC_APP_VERSION ?? "dev"}`;
  titlesRequest ??= fetch(path).then(async response => {
    if (!response.ok) throw new Error("공개 문항 이름을 불러오지 못했어요.");
    const data: unknown = await response.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("문항 이름 형식이 올바르지 않아요.");
    return new Map(Object.entries(data).filter((entry): entry is [string, string] => typeof entry[1] === "string" && Boolean(entry[1])));
  }).catch(error => { titlesRequest = undefined; throw error; });
  return titlesRequest;
}
