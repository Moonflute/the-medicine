export type AudioDomain = "disease" | "cc" | "drug" | "lab" | "skill";

export type AudioSection = { title: string; lines: string[]; };

export type AudioDocument = {
  id: string;
  domain: AudioDomain;
  title: string;
  category: string;
  href: string;
  sections: AudioSection[];
};

export type AudioSegment = {
  text: string;
  sectionTitle: string;
  pauseMs: number;
};

export type SpeechUnit = {
  text: string;
  lang: "ko-KR" | "en-US";
};

export type AudioPlaylistItem = Pick<AudioDocument, "id" | "domain" | "title" | "category" | "href"> & { segments: AudioSegment[]; };

export type AudioReviewSession = {
  version: 1;
  playlist: AudioPlaylistItem[];
  itemIndex: number;
  segmentIndex: number;
  unitIndex: number;
  rate: number;
  status: "playing" | "paused" | "ended";
  updatedAt: string;
};

export const AUDIO_REVIEW_CHANGE_EVENT = "medicine-web-audio-review-change";
const STORAGE_KEY = "medicine-web-audio-review-v1";

const PRONUNCIATION: Array<[RegExp, string]> = [
  [/\bCC\b/g, "주호소"],
  [/\bHFrEF\b/g, "에이치 에프 렙"],
  [/\bHFpEF\b/g, "에이치 에프 펩"],
  [/\bCKD\b/g, "씨 케이 디"],
  [/\bAKI\b/g, "에이 케이 아이"],
  [/\bCOPD\b/g, "씨 오 피 디"],
  [/\bECG\b|\bEKG\b/g, "이 씨 지"],
  [/\bQRS\b/g, "큐 알 에스"],
  [/\bCT\b/g, "씨 티"],
  [/\bMRI\b/g, "엠 알 아이"],
  [/\bUS\b/g, "초음파"],
  [/\bIV\b/g, "정맥 주사"],
  [/\bPO\b/g, "경구"],
  [/\bPRN\b/g, "필요 시"],
  [/\bq(\d+)h\b/gi, "$1시간마다"],
  [/mg\/kg\/day/gi, "킬로그램당 하루 밀리그램"],
  [/mg\/kg/gi, "킬로그램당 밀리그램"],
  [/mcg/gi, "마이크로그램"],
  [/mL/gi, "밀리리터"],
];

function cleanInline(value: string) {
  let text = value
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*(?:[-*•]|\d+[.)])\s+/, "")
    .replace(/^\s*[-*]\s*\[[ xX]\]\s*/, "")
    .replace(/\b(?:https?:\/\/|www\.)\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  for (const [pattern, spoken] of PRONUNCIATION) text = text.replace(pattern, spoken);
  return text;
}

function tableText(line: string) {
  const cells = line.split("|").map(cleanInline).filter(Boolean);
  if (cells.length < 2 || cells.every((cell) => /^:?-{2,}:?$/.test(cell))) return "";
  return cells.map((cell, index) => index % 2 === 0 ? `${cell}` : `, ${cell}`).join("");
}

function splitForSpeech(text: string, limit = 88) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  const parts: string[] = [];
  let rest = normalized;
  while (rest.length > limit) {
    const windowed = rest.slice(0, limit + 1);
    const candidates = [...windowed.matchAll(/[.?!。;:：,，·/)]\s*/g)].map((match) => (match.index ?? 0) + match[0].length);
    const cut = candidates.filter((index) => index >= Math.floor(limit * 0.45)).at(-1) ?? limit;
    parts.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest) parts.push(rest);
  return parts;
}

export function speechUnits(text: string): SpeechUnit[] {
  const units: SpeechUnit[] = [];
  const english = /(?:[A-Za-z][A-Za-z0-9+.#/'-]*)(?:\s+(?:[A-Za-z][A-Za-z0-9+.#/'-]*))*/g;
  let cursor = 0;
  for (const match of text.matchAll(english)) {
    const index = match.index ?? 0;
    const korean = text.slice(cursor, index).trim();
    if (korean) units.push({ text: korean, lang: "ko-KR" });
    if (match[0].trim()) units.push({ text: match[0].trim(), lang: "en-US" });
    cursor = index + match[0].length;
  }
  const korean = text.slice(cursor).trim();
  if (korean) units.push({ text: korean, lang: "ko-KR" });
  return units.length ? units : [{ text, lang: "ko-KR" }];
}

export function buildAudioSegments(document: AudioDocument) {
  const segments: AudioSegment[] = [{ text: `${document.title}.`, sectionTitle: "문서 시작", pauseMs: 700 }];
  for (const section of document.sections) {
    const spokenLines = section.lines.flatMap((line) => {
      if (/^\s*\|/.test(line)) return tableText(line) ? [tableText(line)] : [];
      const text = cleanInline(line);
      if (!text || /^(출처|references?|last updated|근거)\b/i.test(text)) return [];
      return [text];
    });
    if (!spokenLines.length) continue;
    segments.push({ text: `${section.title}입니다.`, sectionTitle: section.title, pauseMs: 550 });
    for (const line of spokenLines) {
      const chunks = splitForSpeech(line);
      for (const [index, text] of chunks.entries()) segments.push({ text, sectionTitle: section.title, pauseMs: index + 1 === chunks.length ? 330 : 180 });
    }
  }
  return segments;
}

export function makeAudioPlaylist(documents: AudioDocument[]) {
  return documents.map((document) => ({ id: document.id, domain: document.domain, title: document.title, category: document.category, href: document.href, segments: buildAudioSegments(document) })).filter((item) => item.segments.length > 1);
}

export function loadAudioReviewSession(): AudioReviewSession | null {
  if (typeof window === "undefined") return null;
  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null") as AudioReviewSession | null;
    if (!value || value.version !== 1 || !Array.isArray(value.playlist) || value.playlist.length === 0) return null;
    return { ...value, unitIndex: typeof value.unitIndex === "number" ? value.unitIndex : 0, status: value.status === "playing" ? "paused" : value.status };
  } catch { return null; }
}

export function saveAudioReviewSession(session: AudioReviewSession | null) {
  if (typeof window === "undefined") return;
  if (session) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  else window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(AUDIO_REVIEW_CHANGE_EVENT, { detail: { session } }));
}

export function makeAudioSession(playlist: AudioPlaylistItem[], rate = 1): AudioReviewSession {
  return { version: 1, playlist, itemIndex: 0, segmentIndex: 0, unitIndex: 0, rate, status: "paused", updatedAt: new Date().toISOString() };
}