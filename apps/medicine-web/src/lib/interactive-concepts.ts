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
  summary: string;
  specialties: string[];
  targets: InteractiveConceptTarget[];
  status: "prototype" | "reviewed";
};

export const interactiveConcepts: InteractiveConcept[] = [
  {
    slug: "acid-base-balance",
    title: "Acid-Base Balance",
    shortTitle: "산-염기 균형",
    summary: "폐포 환기와 HCO3- 상태를 조절하며 pH, 보상, 혼합성 장애의 연결을 확인합니다.",
    specialties: ["신장", "호흡기"],
    targets: [
      { type: "disease", title: "산증 (Acidosis)", label: "산증" },
      { type: "disease", title: "알칼리증 (Alkalosis)", label: "알칼리증" },
      { type: "disease", title: "호흡부전 (Respiratory Failure)", label: "호흡부전" },
      { type: "disease", title: "만성 폐쇄성 폐질환 (COPD) (Chronic Obstructive Pulmonary Disease)", label: "COPD" },
      { type: "disease", title: "당뇨병성 케톤산증 (DKA) (Diabetic Ketoacidosis)", label: "DKA" },
      { type: "disease", title: "급성 콩팥 손상 (AKI) (Acute Kidney Injury)", label: "급성 콩팥 손상" },
      { type: "lab", title: "Arterial Blood Gas Analysis (ABGA)", label: "ABGA" },
      { type: "lab", title: "Bicarbonate (Total CO2)", label: "Bicarbonate" },
    ],
    status: "prototype",
  },
];

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

export function getInteractiveConceptsForEntity(type: InteractiveEntityType, title: string) {
  const key = normalize(title);
  return interactiveConcepts.filter((concept) =>
    concept.targets.some((target) => target.type === type && normalize(target.title) === key),
  );
}
