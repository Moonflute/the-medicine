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
};

export type PracticeFilters = { books: string[]; specialties: string[]; years: string[]; series?: string[]; departments?: string[]; order?: "random" | "book" };
export const EMPTY_PRACTICE_FILTERS: PracticeFilters = { books: [], specialties: [], years: [] };

// The source book subject owns classification; linked theory is only a topic.
export const PRACTICE_DEPARTMENTS = ["내과", "외과", "산부인과", "소아과"] as const;
export function practiceTopicKey(q: PracticeIndex): string {
  return `${q.bookDepartment}:${q.specialtySlug}`;
}
export function practiceTopicLabel(q: PracticeIndex): string {
  const topic = q.specialty.replace(/^\d+\s*/, "");
  const labels: Record<string, string> = {
    "외과": "수술·외과 일반", "소아청소년과": "성장·발달·소아 일반",
    "정신건강의학과": "정신·행동", "신경과-신경외과": "신경",
    "이비인후과": "귀·코·목", "피부과": "피부", "비뇨기과": "비뇨기",
    "응급의학": "응급·소생", "정형외과": "근골격",
  };
  return labels[topic] ?? topic;
}

export function mockExamFilters(series: string, year: number): PracticeFilters {
  return { books: [], specialties: [], departments: [], series: [series], years: [String(year)], order: "book" };
}

export function practiceMockExams(questions: PracticeIndex[]) {
  const exams = new Map<string, { series: string; year: number; label: string; count: number }>();
  for (const q of questions) {
    if (q.examYear === null || !["퍼펙트", "리얼"].includes(q.bookSeries)) continue;
    const key = `${q.bookSeries}:${q.examYear}`;
    const exam = exams.get(key) ?? { series: q.bookSeries, year: q.examYear, label: `${q.bookSeries === "퍼펙트" ? "P" : "R"} ${q.examYear}`, count: 0 };
    exam.count++;
    exams.set(key, exam);
  }
  return [...exams.values()].sort((a, b) => a.label[0].localeCompare(b.label[0]) || b.year - a.year);
}

export function hasPracticeSelection(filters?: PracticeFilters): boolean {
  return Boolean(filters && (filters.books.length || filters.specialties.length || filters.years.length || filters.series?.length || filters.departments?.length));
}

// Empty dimensions are unrestricted; an untouched picker selects nothing.
export function matchesPractice(question: PracticeIndex, filters: PracticeFilters): boolean {
  return hasPracticeSelection(filters)
    && (!filters.books.length || filters.books.includes(question.bookId))
    && (!filters.series?.length || filters.series.includes(question.bookSeries))
    && (!filters.departments?.length || filters.departments.includes(question.bookDepartment))
    && (!filters.specialties.length || (filters.specialties.includes(practiceTopicKey(question)) || filters.specialties.includes(question.specialtySlug)))
    && (!filters.years.length || filters.years.includes(question.examYear === null ? "unknown" : String(question.examYear)));
}

// IDs encode source volume, original subject, year section, and printed number.
export function comparePracticeOrder(a: { id: string }, b: { id: string }): number {
  const key = (id: string) => id.replace(/-(IM|GS|OG|PE)-/, (_, subject: string) => `-${({ IM: "1", GS: "2", OG: "3", PE: "4" } as Record<string, string>)[subject]}-`).replace(/-Y(\d{4})-/, (_, year: string) => `-A${9999 - Number(year)}-`).replace(/-BANK-/, "-Z-");
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
