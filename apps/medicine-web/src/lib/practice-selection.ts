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

export type PracticeFilters = { books: string[]; specialties: string[]; years: string[] };
export const EMPTY_PRACTICE_FILTERS: PracticeFilters = { books: [], specialties: [], years: [] };

// Empty dimensions mean no restriction; at least one book must be selected.
export function matchesPractice(question: PracticeIndex, filters: PracticeFilters): boolean {
  return filters.books.includes(question.bookId)
    && (!filters.specialties.length || filters.specialties.includes(question.specialtySlug))
    && (!filters.years.length || filters.years.includes(question.examYear === null ? "unknown" : String(question.examYear)));
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
