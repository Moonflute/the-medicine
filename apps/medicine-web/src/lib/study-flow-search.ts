import { studyLinkFrom, type StudyLink } from "./study-flow-model";

export type StudySearchEntry = StudyLink & { aliases: string[] };
let publicIndex: Promise<StudySearchEntry[]> | null = null;
export function loadStudySearchIndex() {
  publicIndex ??= fetch((process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/generated/study-flow-index.json")
    .then(async response => {
      if (!response.ok) throw new Error("문서 검색 목록을 불러오지 못했습니다.");
      const value: unknown = await response.json();
      if (!Array.isArray(value)) throw new Error("검색 목록을 확인하지 못했습니다.");
      return value.flatMap(entry => {
        const link = studyLinkFrom(entry);
        return link && link.kind !== "question" ? [{ ...link, aliases: Array.isArray(entry.aliases) ? entry.aliases.filter((alias: unknown): alias is string => typeof alias === "string") : [] }] : [];
      });
    }).catch(error => { publicIndex = null; throw error; });
  return publicIndex;
}
function compact(value: string) { return value.toLowerCase().replace(/[\s/·._()-]+/g, ""); }
const normalized = new WeakMap<StudySearchEntry, { title: string; aliases: string[] }>();
function normalizedEntry(entry: StudySearchEntry) {
  let result = normalized.get(entry);
  if (!result) { result = { title: compact(entry.title), aliases: entry.aliases.map(compact) }; normalized.set(entry, result); }
  return result;
}
export function searchStudyLinks(entries: readonly StudySearchEntry[], query: string, kind = "all") {
  let term = query.trim();
  const prefix = /^(disease|cc|drug|lab|질환|약물|검사):\s*(.*)$/i.exec(term);
  if (prefix) {
    kind = ({ 질환: "disease", 약물: "drug", 검사: "lab" } as Record<string, string>)[prefix[1]] ?? prefix[1].toLowerCase();
    term = prefix[2];
  }
  const needle = compact(term);
  return entries.filter(entry => entry.kind !== "question" && (kind === "all" || entry.kind === kind)).map(entry => {
    const { title, aliases } = normalizedEntry(entry);
    const score = !needle ? 1 : title === needle ? 100 : title.startsWith(needle) ? 90 : aliases.includes(needle) ? 85 : title.includes(needle) ? 75 : aliases.some(alias => alias.includes(needle)) ? 60 : 0;
    return { entry, score };
  }).filter(item => item.score > 0).sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "ko")).slice(0, 16).map(item => item.entry);
}
