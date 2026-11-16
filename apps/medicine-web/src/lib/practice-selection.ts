export type PracticeIndex = {
  id: string;
  bookId: string;
  bookTitle: string;
  bookSeries: string;
  bookDepartment: string;
  specialty: string;
  specialtySlug: string;
  examYear: number | null;
  editionYear: number;
  status: string;
  relatedDiseaseSlugs: string[];
  relatedCcSlugs: string[];
  relatedDrugSlugs: string[];
  relatedTheoryQuestionIds: string[];
  sourceIds?: string[];
  /** Older-to-newer immutable content IDs for this canonical question. */
  revisionIds?: string[];
};

export type PracticeFilters = { books: string[]; specialties: string[]; years: string[]; series?: string[]; departments?: string[]; order?: "random" | "book"; examKey?: string };
export type PracticeTopicSection = { id: string; title: string; topics: Array<[string, string]> };
export const EMPTY_PRACTICE_FILTERS: PracticeFilters = { books: [], specialties: [], years: [] };
export const PRACTICE_REVISION_SERIES = "실전 개정판";

export function isPracticeRevisionId(id: string): boolean {
  return id.startsWith("QB-REV-");
}

export function practiceSourceQuestionId(id: string): string {
  // The revision table enforces QB-REV-YYYYMM-<part of source ID after QB->.
  return id.replace(/^QB-REV-\d{4}(?:0[1-9]|1[0-2])-/, "QB-");
}

export function indexPracticeVersions(originals: PracticeIndex[], revisions: PracticeIndex[]): PracticeIndex[] {
  const originalsById = new Map(originals.map(question => [question.id, question]));
  const versions = new Map<string, Set<string>>();
  for (const revision of revisions) {
    const sourceId = practiceSourceQuestionId(revision.id);
    if (revision.bookSeries !== PRACTICE_REVISION_SERIES || sourceId === revision.id || !originalsById.has(sourceId)) continue;
    const ids = versions.get(sourceId) ?? new Set<string>();
    ids.add(revision.id);
    versions.set(sourceId, ids);
  }
  return originals.map(question => {
    const ids = versions.get(question.id);
    return ids ? { ...question, revisionIds: [...ids].sort() } : question;
  });
}

export function practiceVersionIds(question: Pick<PracticeIndex, "id" | "revisionIds">): string[] {
  return [question.id, ...(question.revisionIds ?? [])];
}

export function practiceDeliveryIds(questions: PracticeIndex[], savedIds?: ReadonlySet<string>): string[] {
  if (!savedIds) return questions.map(question => question.revisionIds?.at(-1) ?? question.id);
  const sourceIds = new Set(questions.map(question => question.id));
  return [...savedIds].filter(id => sourceIds.has(practiceSourceQuestionId(id)));
}

// The source book subject owns classification; linked theory is only a topic.
export const PRACTICE_DEPARTMENTS = ["내과", "외과", "산부인과", "소아과"] as const;
function isObstetricPracticeQuestion(question: PracticeIndex): boolean {
  const topic = normalizedTopic(question.specialty);
  return /^12\b/.test(question.specialty)
    || includesAny(topic, ["산과", "임신", "분만", "태아", "산후", "산욕", "양수", "태반", "탯줄", "유산", "난산", "조산", "쌍둥이", "자궁경부무력", "자궁경부결찰", "cerclage"]);
}
export function practiceTopicKey(q: PracticeIndex): string {
  if (q.bookDepartment === "산부인과" && !isObstetricPracticeQuestion(q)) return "산부인과:gynecology";
  if (q.bookDepartment === "외과") return "외과:" + surgeryPracticeTheme(q).id;
  return `${q.bookDepartment}:${q.specialtySlug}`;
}
export function practiceTopicLabel(q: PracticeIndex): string {
  if (q.bookDepartment === "산부인과" && !isObstetricPracticeQuestion(q)) return "부인과";
  if (q.bookDepartment === "외과") return surgeryPracticeTheme(q).title;
  const topic = q.specialty.replace(/^\d+\s*/, "");
  const labels: Record<string, string> = {
    "외과": "수술·외과 일반", "소아청소년과": "성장·발달·소아 일반",
    "정신건강의학과": "정신·행동", "신경과-신경외과": "신경",
    "이비인후과": "귀·코·목", "피부과": "피부", "비뇨기과": "비뇨기",
    "응급의학": "응급·소생", "정형외과": "근골격",
  };
  return labels[topic] ?? topic;
}

// Practice questions inherit the theory specialty identifier. Keep the same
// numbered specialty sequence instead of alphabetizing the Korean labels.
export function practiceTopicOrder(q: Pick<PracticeIndex, "specialty" | "specialtySlug">): number {
  const number = Number(q.specialty.match(/^\s*(\d{1,2})\b/)?.[1]);
  return Number.isFinite(number) ? number : Number.MAX_SAFE_INTEGER;
}

// The practice-book subject is broader than an individual linked theory page.
// Its detail picker must nevertheless mirror the theory taxonomy for that
// subject: medicine is exactly 01 순환기 through 10 종양. A question linked
// only to a surgical, pediatric, etc. page remains available through the
// top-level "내과" selector, but must not create a false inner-medicine topic.
function isDepartmentTheoryTopic(question: PracticeIndex, department: string): boolean {
  if (department !== "내과") return true;
  const order = practiceTopicOrder(question);
  return order >= 1 && order <= 10;
}

function normalizedTopic(value: string) {
  return value.replace(/\s+/g, "").replace(/[·ㆍ·\-–—/]/g, "").toLowerCase();
}

function includesAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(normalizedTopic(term)));
}

function surgeryPracticeTheme(question: PracticeIndex): { id: string; title: string; order: number } {
  const topic = normalizedTopic(question.specialty);
  if (/^21\b/.test(question.specialty) || includesAny(topic, ["응급", "외상", "화상", "쇼크", "중독", "물림", "쏘임"])) {
    return { id: "emergency", title: "응급처치", order: 30 };
  }
  if (/^11\b/.test(question.specialty) || includesAny(topic, ["외과", "수술", "수술후", "수술 전"])) {
    return { id: "general", title: "외과개론", order: 10 };
  }
  return { id: "detail", title: "외과각론", order: 20 };
}

function sectionForTopic(question: PracticeIndex): { id: string; title: string; primary?: string; order: number } {
  const topic = normalizedTopic(`${question.specialty} ${practiceTopicLabel(question)}`);
  if (question.bookDepartment === "소아과") {
    const general = includesAny(topic, ["소아과 총론", "성장", "발달", "신생아", "미숙아", "예방접종", "영양", "수유", "소아 일반"]);
    return general ? { id: "pediatric-general", title: "소아과 총론", order: 10 } : { id: "pediatric-detail", title: "소아과 각론", order: 20 };
  }
  if (question.bookDepartment === "산부인과") {
    const obstetric = isObstetricPracticeQuestion(question);
    const primary = obstetric ? "산과" : "부인과";
    const secondary = obstetric
      ? includesAny(topic, ["분만", "난산", "조산", "둔위"]) ? ["delivery", "분만"]
        : includesAny(topic, ["출혈", "전치태반", "태반조기박리"]) ? ["bleeding", "산과적 출혈"]
          : includesAny(topic, ["산후", "산욕", "유방염"]) ? ["postpartum", "산욕기"]
            : includesAny(topic, ["고혈압", "자간", "전자간"]) ? ["hypertension", "임신 고혈압"]
              : ["pregnancy", "임신·태아"]
      : includesAny(topic, ["종양", "암", "유방"]) ? ["oncology", "종양·유방"]
        : includesAny(topic, ["월경", "무월경", "배란", "내분비", "폐경", "다낭"]) ? ["endocrine", "월경·내분비"]
          : includesAny(topic, ["임신", "피임", "불임", "생식"]) ? ["reproductive", "피임·생식"]
            : includesAny(topic, ["감염", "질염", "골반염", "성매개"]) ? ["infection", "감염"]
              : ["gynecology", "부인과 일반"];
    return { id: `${primary}-${secondary[0]}`, title: secondary[1], primary, order: primary === "산과" ? 20 : 50 };
  }
  if (question.bookDepartment === "외과") {
    return surgeryPracticeTheme(question);
  }
  return { id: "default", title: `${question.bookDepartment} 세부 주제`, order: 0 };
}

export function practiceTopicSections(questions: PracticeIndex[], department: string): PracticeTopicSection[] {
  const source = questions.filter((question) => question.bookDepartment === department && isDepartmentTheoryTopic(question, department));
  const candidates = new Map<string, { label: string; order: number; sections: Map<string, { title: string; primary?: string; order: number; count: number }> }>();
  for (const question of source) {
    const section = sectionForTopic(question);
    const key = practiceTopicKey(question);
    const current = candidates.get(key) ?? { label: practiceTopicLabel(question), order: practiceTopicOrder(question), sections: new Map() };
    const assigned = current.sections.get(section.id) ?? { title: section.title, primary: section.primary, order: section.order, count: 0 };
    assigned.count += 1;
    current.sections.set(section.id, assigned);
    candidates.set(key, current);
  }
  const sections = new Map<string, { title: string; primary?: string; order: number; topics: Array<[string, string, number]> }>();
  for (const [key, topic] of candidates) {
    const [id, section] = [...topic.sections.entries()].sort(([, left], [, right]) => right.count - left.count || left.order - right.order || left.title.localeCompare(right.title, "ko"))[0];
    const current = sections.get(id) ?? { title: section.title, primary: section.primary, order: section.order, topics: [] };
    current.topics.push([key, topic.label, topic.order]);
    sections.set(id, current);
  }
  const grouped = [...sections.entries()].map(([id, section]) => ({
    id,
    title: section.title,
    primary: section.primary,
    order: section.order,
    topics: section.topics.sort(([, leftLabel, leftOrder], [, rightLabel, rightOrder]) => leftOrder - rightOrder || leftLabel.localeCompare(rightLabel, "ko")).map(([key, label]) => [key, label] as [string, string]),
  }));
  if (department !== "산부인과") return grouped.sort((left, right) => left.order - right.order || left.title.localeCompare(right.title, "ko"));

  const result: PracticeTopicSection[] = [];
  for (const primary of ["산과", "부인과"]) {
    const children = grouped.filter((group) => group.primary === primary).sort((left, right) => left.order - right.order || left.title.localeCompare(right.title, "ko"));
    const topicCount = children.reduce((count, group) => count + group.topics.length, 0);
    // Obstetrics and gynecology are the two meaningful top-level choices for
    // this book.  Keep gynecology as one selectable block even as its linked
    // theory topics grow, rather than exposing a second layer of tiny groups.
    if (primary === "부인과" || topicCount < 8 || children.length < 2) {
      result.push({ id: `obgyn-${primary}`, title: primary, topics: children.flatMap((group) => group.topics) });
    } else {
      result.push(...children.map(({ id, title, topics }) => ({ id, title: `${primary} · ${title}`, topics })));
    }
  }
  return result;
}

const RES26_EXAM_KEY = "2026-2";

function practiceMockExamKey(question: PracticeIndex): string | undefined {
  if (question.examYear === null) return undefined;
  if (question.examYear === 2026 && question.bookId === "practice-res2608") return RES26_EXAM_KEY;
  return String(question.examYear);
}

export function practiceMockExamLabel(key: string): string {
  return key === RES26_EXAM_KEY ? key : `${key}년`;
}

export function mockExamFilters(year: number, examKey = String(year)): PracticeFilters {
  return { ...EMPTY_PRACTICE_FILTERS, years: [String(year)], order: "book", examKey };
}

export function selectedPracticeExamKey(filters: PracticeFilters): string | undefined {
  if (filters.examKey && (filters.examKey === RES26_EXAM_KEY || /^\d{4}$/.test(filters.examKey))) return filters.examKey;
  // Restore a year-only round selected before rounds had their own key.
  if (filters.order !== "book" || filters.years.length !== 1 || filters.books.length || filters.specialties.length || filters.series?.length || filters.departments?.length) return undefined;
  return /^\d{4}$/.test(filters.years[0]) ? filters.years[0] : undefined;
}

export function practiceFiltersFromParams(params: URLSearchParams): PracticeFilters {
  const values = (name: string) => (params.get(name) ?? "").split(",").filter(Boolean);
  const filters: PracticeFilters = {
    books: values("practiceBooks"), specialties: values("practiceSpecialties"),
    years: values("practiceYears"), series: values("practiceSeries"), departments: values("practiceDepartments"),
  };
  if (params.get("practiceOnly") !== "1") return filters;
  const examKey = params.get("practiceExam");
  if (examKey !== null) {
    // An empty key marks an ordered launch from the general filters, not a round.
    return { ...filters, examKey: examKey || undefined };
  }
  if (params.get("mode") === "practice-book" || params.get("exam") === "1" || params.get("practiceRound") === "1") {
    return { ...filters, examKey: selectedPracticeExamKey({ ...filters, order: "book" }) };
  }
  return filters;
}

export function practiceMockExams(questions: PracticeIndex[]) {
  const exams = new Map<string, { key: string; year: number; label: string; count: number }>();
  for (const q of questions) {
    if (q.examYear === null || q.bookSeries === PRACTICE_REVISION_SERIES) continue;
    const key = practiceMockExamKey(q);
    if (!key) continue;
    const exam = exams.get(key) ?? { key, year: q.examYear, label: practiceMockExamLabel(key), count: 0 };
    exam.count++;
    exams.set(key, exam);
  }
  return [...exams.values()].sort((a, b) => b.year - a.year || b.key.localeCompare(a.key, "en", { numeric: true }));
}

export function hasPracticeSelection(filters?: PracticeFilters): boolean {
  return Boolean(filters && (filters.books.length || filters.specialties.length || filters.years.length || filters.series?.length || filters.departments?.length || selectedPracticeExamKey(filters)));
}

// Empty dimensions are unrestricted; an untouched picker selects nothing.
export function matchesPractice(question: PracticeIndex, filters: PracticeFilters): boolean {
  const examKey = selectedPracticeExamKey(filters);
  return hasPracticeSelection(filters)
    && question.bookSeries !== PRACTICE_REVISION_SERIES
    && (!examKey || practiceMockExamKey(question) === examKey)
    && (!filters.books.length || filters.books.includes(question.bookId))
    && (!filters.series?.length || filters.series.includes(question.bookSeries)
      || Boolean(question.revisionIds?.length && filters.series.includes(PRACTICE_REVISION_SERIES)))
    && (!filters.departments?.length || filters.departments.includes(question.bookDepartment))
    && (!filters.specialties.length || (filters.specialties.includes(practiceTopicKey(question)) || filters.specialties.includes(question.specialtySlug)))
    && (!filters.years.length || filters.years.includes(question.examYear === null ? "unknown" : String(question.examYear)));
}

// IDs encode source volume, original subject, year section, and printed number.
export function comparePracticeOrder(a: { id: string }, b: { id: string }): number {
  const key = (id: string) => practiceSourceQuestionId(id).replace(/-(IM|GS|OG|PE)-/, (_, subject: string) => `-${({ IM: "1", GS: "2", OG: "3", PE: "4" } as Record<string, string>)[subject]}-`).replace(/-Y(\d{4})-/, (_, year: string) => `-A${9999 - Number(year)}-`).replace(/-BANK-/, "-Z-");
  return key(a.id).localeCompare(key(b.id), "en", { numeric: true });
}

export function toggleGroup(selected: string[], group: string[]): string[] {
  const next = new Set(selected);
  const remove = group.every((key) => next.has(key));
  group.forEach((key) => remove ? next.delete(key) : next.add(key));
  return [...next];
}

export function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}
