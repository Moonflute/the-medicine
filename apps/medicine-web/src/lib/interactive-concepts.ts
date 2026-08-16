import conceptData from "../../data/interactive-concepts.json";

export type InteractiveEntityType = "disease" | "lab" | "drug";

export type InteractiveConceptTarget = {
  type: InteractiveEntityType;
  title: string;
  label?: string;
};

export type InteractiveConcept = {
  slug: string;
  title: string;
  shortTitle: string;
  aliases: string[];
  keywords: string[];
  summary: string;
  specialties: string[];
  targets: InteractiveConceptTarget[];
  status: "prototype" | "reviewed";
};

export const interactiveConcepts = conceptData as InteractiveConcept[];

function normalize(value: string) {
  return value
    .normalize("NFKC")
    .replace(/^\d+\s*/, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function getInteractiveConcept(slug: string) {
  return interactiveConcepts.find((concept) => concept.slug === slug);
}

export function getInteractiveConceptsForSpecialty(specialty: string) {
  const key = normalize(specialty);
  return interactiveConcepts.filter((concept) => concept.specialties.some((item) => normalize(item) === key));
}
