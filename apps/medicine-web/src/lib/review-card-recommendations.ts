import {
  reviewCardDocumentFrom,
  reviewCardSpecialtyFrom,
  type ReviewCardDocument,
  type ReviewCardSpecialty,
} from "./review-card-relations";

type DocumentName = { text: string; compact: string; korean: boolean };
type IndexedDocument = {
  document: ReviewCardDocument;
  names: DocumentName[];
  terms: Map<string, number>;
  specialties: string[];
};

type ReviewCardCatalog = {
  documents: IndexedDocument[];
  specialties: ReviewCardSpecialty[];
  termWeights: Map<string, number>;
  nameCounts: Map<string, number>;
};

type RankedDocument = { entry: IndexedDocument; score: number };

const commonWords = new Set((
  "a an and are as at be by can for from has in is it of on or that the this to was were what when which with without " +
  "가능 가장 결과 검사 경우 관련 구분 기전 내용 다음 대부분 대표 목적 방법 문제 발생 보이는 상태 사용 설명 수치 시간 요약 원인 위험 의미 이해 적용 정리 정상 정의 중요 종류 진단 증상 질환 특징 치료 통한 필요 환자 확인 " +
  "없고 없다 없는 있고 있는 있다 이다 하는 한다 흔히 통해 주요"
).split(" "));
const koreanEnding = /(?:으로부터|에게서는|에게서|에서는|으로는|에서의|에게|처럼|보다|부터|까지|에서|으로|에는|하는|하다|한다|하며|하고|되는|된다|되며|한|된|은|는|이|가|을|를|에|의|로|과|와|도|만)$/u;

function normalize(text: string) {
  return text.normalize("NFKC").toLowerCase()
    .replace(/\b([a-z])[-–−]([a-z])\b/g, "$1$2")
    .replace(/\b([a-z])\s+(파|분절)/g, "$1$2")
    .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function terms(text: string) {
  const words = new Set<string>();
  for (const token of normalize(text).split(" ")) {
    const stem = /[가-힣]$/.test(token) ? token.replace(koreanEnding, "") : token;
    const word = stem.length >= 2 ? stem : token;
    if (word.length >= 2 && /\p{L}/u.test(word) && !commonWords.has(word)) words.add(word);
  }
  return words;
}

const strings = (value: unknown): string[] => Array.isArray(value) ? value.filter(item => typeof item === "string") : [];

function documentNames(values: string[]): DocumentName[] {
  const variants = new Set(values.flatMap(value => [value, ...value.split(/[()[\]]+/)]).map(normalize));
  return [...variants].filter(name => name.length >= 2 && /\p{L}/u.test(name) && !commonWords.has(name))
    .map(text => ({ text, compact: text.replaceAll(" ", ""), korean: /^[가-힣 ]+$/.test(text) }));
}

export function prepareReviewCardCatalog(value: unknown): ReviewCardCatalog {
  if (!value || typeof value !== "object") throw new Error("복습카드 문서 목록을 읽지 못했어요.");
  const input = value as { specialties?: unknown; documents?: unknown };
  if (!Array.isArray(input.specialties) || !Array.isArray(input.documents)) throw new Error("복습카드 문서 목록 형식이 잘못됐어요.");

  const specialties = input.specialties.flatMap(item => reviewCardSpecialtyFrom(item) ?? []);
  const termCounts = new Map<string, number>();
  const nameCounts = new Map<string, number>();
  const documents = input.documents.flatMap((item): IndexedDocument[] => {
    const document = reviewCardDocumentFrom(item);
    if (!document) return [];
    const aliases = strings(item.aliases);
    const weighted = new Map<string, number>();
    const fields: [string, number][] = [
      [typeof item.context === "string" ? item.context : "", 1],
      [strings(item.keywords).join(" "), 1.35],
      [aliases.join(" "), 2],
      [document.title, 2.6],
    ];
    for (const [content, weight] of fields) {
      for (const word of terms(content)) weighted.set(word, weight);
    }
    for (const word of weighted.keys()) termCounts.set(word, (termCounts.get(word) ?? 0) + 1);
    const names = documentNames([document.title, ...aliases]);
    for (const { text } of names) nameCounts.set(text, (nameCounts.get(text) ?? 0) + 1);
    return [{ document, names, terms: weighted, specialties: strings(item.specialties) }];
  });
  if (!specialties.length || !documents.length) throw new Error("복습카드 문서 목록이 비어 있어요.");

  const termWeights = new Map([...termCounts].map(([term, count]) => [
    term,
    Math.min(5, 1 + Math.log((documents.length + 1) / (count + 1))),
  ]));
  return { documents, specialties, termWeights, nameCounts };
}

function noteText(value: string) {
  const text = normalize(value);
  return { text, padded: " " + text + " ", korean: text.replace(/(?<=[가-힣]) (?=[가-힣])/gu, "") };
}

function hasName(note: ReturnType<typeof noteText>, name: DocumentName) {
  return note.padded.includes(" " + name.text + " ")
    || (name.korean && name.compact.length >= 3 && note.korean.includes(name.compact));
}

function nameMatchScore(note: ReturnType<typeof noteText>, name: DocumentName) {
  if (!hasName(note, name)) return 0;
  const exact = note.text === name.text || (name.korean && note.korean === name.compact);
  return 10 + Math.min(12, name.compact.length) + (exact ? 20 : 0);
}

function compareDocuments(a: RankedDocument, b: RankedDocument) {
  return b.score - a.score || a.entry.document.title.localeCompare(b.entry.document.title, "ko")
    || a.entry.document.href.localeCompare(b.entry.document.href);
}

export function recommendReviewCardTopics(catalog: ReviewCardCatalog, front: string, back: string) {
  const question = noteText(front);
  const answer = noteText(back);
  const frontWords = terms(front);
  const backWords = terms(back);
  const queryWeights = new Map<string, number>();
  for (const word of backWords) queryWeights.set(word, 1);
  for (const word of frontWords) queryWeights.set(word, backWords.has(word) ? 1.45 : 1.2);

  const ranked: RankedDocument[] = [];
  for (const entry of catalog.documents) {
    let shared = 0;
    let frontClue = false;
    let backClue = false;
    let evidence = 0;
    // Count different clues across both sides. Repeating a word does not boost it.
    for (const [word, weight] of entry.terms) {
      const queryWeight = queryWeights.get(word);
      if (!queryWeight) continue;
      const rarity = catalog.termWeights.get(word) ?? 1;
      if (rarity >= 2.6) {
        shared++;
        frontClue ||= frontWords.has(word);
        backClue ||= backWords.has(word);
      }
      evidence += weight * queryWeight * rarity;
    }
    const contextScore = evidence / Math.sqrt(1 + entry.terms.size / 100)
      + Math.min(shared, 8) + (frontClue && backClue && shared >= 2 ? 5 : 0);
    let nameScore = 0;
    for (const name of entry.names) {
      const frequency = catalog.nameCounts.get(name.text) ?? 1;
      if (frequency > 1 && name.compact.length <= 2 && shared < 2) continue;
      nameScore = Math.max(nameScore, nameMatchScore(question, name) * 1.12, nameMatchScore(answer, name));
    }
    if (nameScore || (shared >= 2 && contextScore >= 8)) ranked.push({ entry, score: nameScore + contextScore });
  }
  ranked.sort(compareDocuments);

  const specialtyScores = new Map<string, number>();
  const best = ranked[0]?.score ?? 0;
  const candidates = ranked.filter(item => item.score >= best * .64).slice(0, 16);
  for (const { entry, score } of candidates) {
    entry.specialties.forEach((id, index) => {
      specialtyScores.set(id, Math.max(specialtyScores.get(id) ?? 0, index === 0 ? score : score * .82));
    });
  }
  for (const specialty of catalog.specialties) {
    const [name] = documentNames([specialty.label]);
    if (name && (hasName(question, name) || hasName(answer, name))) {
      specialtyScores.set(specialty.id, Math.max(specialtyScores.get(specialty.id) ?? 0, 38));
    }
  }
  return {
    documents: candidates.map(item => item.entry.document),
    specialties: catalog.specialties.filter(item => specialtyScores.has(item.id))
      .sort((a, b) => specialtyScores.get(b.id)! - specialtyScores.get(a.id)!),
  };
}

export function searchReviewCardDocuments(catalog: ReviewCardCatalog, query: string) {
  const term = normalize(query).replaceAll(" ", "");
  if (!term) return [];
  return catalog.documents.flatMap((entry): RankedDocument[] => {
    const score = entry.names.reduce((best, name) => Math.max(best,
      name.compact === term ? 3 : name.compact.startsWith(term) ? 2 : name.compact.includes(term) ? 1 : 0), 0);
    return score ? [{ entry, score }] : [];
  }).sort(compareDocuments).map(item => item.entry.document);
}

export function searchReviewCardSpecialties(catalog: ReviewCardCatalog, query: string) {
  const term = normalize(query).replaceAll(" ", "");
  return catalog.specialties.filter(item => normalize(item.label).replaceAll(" ", "").includes(term));
}

let catalogPromise: Promise<ReviewCardCatalog> | null = null;
export function loadReviewCardCatalog() {
  catalogPromise ??= fetch((process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/generated/review-card-topics.json")
    .then(async response => {
      if (!response.ok) throw new Error("복습카드 문서 목록을 불러오지 못했어요.");
      return prepareReviewCardCatalog(await response.json());
    })
    .catch(error => {
      catalogPromise = null;
      throw error;
    });
  return catalogPromise;
}
