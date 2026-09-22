import { activeSessionFrom, type QbankSessionContext, type QbankSessionTopic } from "./qbank-active-session";
import type { QbankSpecialtySummary } from "./types";

function values(value: string | null): string[] {
  return (value ?? "").split(",").map((item) => item.trim()).filter(Boolean);
}

function compact(valuesToCompact: readonly string[], limit = 3): string {
  const unique = [...new Set(valuesToCompact.filter(Boolean))];
  if (unique.length <= limit) return unique.join(" · ");
  return `${unique.slice(0, limit).join(" · ")} 외 ${unique.length - limit}개`;
}

function selectedSpecialtyNames(raw: string | null, specialties: readonly QbankSpecialtySummary[]): string[] {
  const bySlug = new Map(specialties.map((item) => [item.slug, item.name.replace(/^\d+\s*/, "").trim()]));
  return values(raw).map((item) => bySlug.get(item.includes(":") ? item.slice(item.indexOf(":") + 1) : item) ?? "").filter(Boolean);
}

function readTopicMeta(value: string | null): QbankSessionTopic[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const candidate = item as Partial<QbankSessionTopic>;
      if ((candidate.type !== "disease" && candidate.type !== "cc") || typeof candidate.slug !== "string" || typeof candidate.title !== "string" || typeof candidate.count !== "number") return [];
      return [{ type: candidate.type, slug: candidate.slug, title: candidate.title, count: candidate.count }];
    });
  } catch {
    return [];
  }
}

export function qbankSessionContextFromParams(params: URLSearchParams, specialties: readonly QbankSpecialtySummary[]): QbankSessionContext {
  const mode = params.get("mode") || "all";
  const explicitKind = params.get("sessionKind")?.trim();
  const explicitTitle = params.get("sessionTitle")?.trim();
  const explicitSummary = params.get("sessionSummary")?.trim();
  const topics = readTopicMeta(params.get("topicMeta"));
  const requestedCount = /^\d+$/.test(params.get("count") ?? "") ? Number(params.get("count")) : undefined;
  const theoryNames = selectedSpecialtyNames(params.get("theory"), specialties);
  const clinicalNames = selectedSpecialtyNames(params.get("clinical"), specialties);
  const practiceLabels = [
    ...values(params.get("practiceYears")).map((year) => `${year}년`),
    ...values(params.get("practiceDepartments")),
    ...values(params.get("practiceSpecialties")),
  ];
  const settings: string[] = [];
  if (theoryNames.length) settings.push(`이론 ${compact(theoryNames)}`);
  if (clinicalNames.length) settings.push(`임상 ${compact(clinicalNames)}`);
  if (practiceLabels.length) settings.push(`실전 ${compact(practiceLabels)}`);
  if (params.get("practiceUnattempted") === "1") settings.push("미풀이만");
  if (requestedCount) settings.push(`${requestedCount}문항`);

  let kind = explicitKind || mode;
  let title = explicitTitle || "문제풀이 세션";
  if (!explicitTitle) {
    if (mode === "theory-linked") title = "관련 이론문제 풀이";
    else if (mode === "wrong") title = "오답 다시 풀기";
    else if (mode === "bookmarks") title = "북마크 문제 풀이";
    else if (mode === "unattempted") title = "미풀이 문제 풀이";
    else if (mode === "retry") title = "이번 회차 오답 다시 풀기";
    else if (params.get("exam") === "1") title = "실전 모의고사";
    else if (params.get("practiceOnly") === "1") title = "실전문제 풀이";
    else if (mode === "related") title = `${params.get("targetLabel") || "선택 주제"} 관련 문제`;
    else if (theoryNames.length || clinicalNames.length || practiceLabels.length) title = "선택 범위 문제풀이";
  }
  if (!/^[a-z0-9][a-z0-9-]*$/.test(kind)) kind = "selection";
  const summary = explicitSummary || settings.join(" · ") || (topics.length ? `${compact(topics.map((topic) => topic.title))} · 관련 이론` : undefined);
  const context: QbankSessionContext = {
    kind,
    title,
    ...(summary ? { summary } : {}),
    ...(topics.length ? { topics } : {}),
    ...(settings.length ? { settings } : {}),
    ...(requestedCount ? { requestedCount } : {}),
    order: mode === "practice-book" ? "book" : "random",
    ...(params.get("practiceUnattempted") === "1" ? { unattempted: true } : {}),
  };
  // Reuse the persisted-session parser so URL-provided display text receives
  // exactly the same bounds and validation as restored local/cloud metadata.
  return activeSessionFrom({ sessionId: "preview", updatedAt: new Date(0).toISOString(), questionIds: [], currentIndex: 0, answers: [], selected: null, submitted: false, context })?.context
    ?? { kind: "selection", title: "문제풀이 세션" };
}
