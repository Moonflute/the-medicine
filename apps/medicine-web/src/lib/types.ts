export type DiseaseSection = {
  title: string;
  content: string[];
};

export type DiseaseFamilyMeta = {
  family: string;
  parentDisease?: string;
  relationToParent?: string;
  population?: string;
  canonicalDisease?: string;
};

export type DiseaseGroupOverview = {
  memberTitles: string[];
};

export type DiseaseNote = {
  id: string;
  slug: string;
  title: string;
  sourcePath: string;
  specialty: string;
  category: string;
  classification: string[];
  relatedSpecialties: string[];
  emergencyClassification: string[];
  oncologyClassification: string[];
  aliases: string[];
  chiefComplaints: string[];
  definition?: string;
  overview?: string[];
  sections: DiseaseSection[];
  updatedAt: string;
  clinicalPriority?: string;
  documentRole?: string;
  displayTitle?: string;
  groupOverview?: DiseaseGroupOverview;
  contentMeta?: ContentMeta;
  familyMeta?: DiseaseFamilyMeta;
};

export type DiseaseHierarchy = {
  schemaVersion: number;
  visibleSlugs: string[];
  canonicalSlugBySlug: Record<string, string>;
  parentSlugBySlug: Record<string, string>;
  childrenBySlug: Record<string, string[]>;
  descendantSlugsBySlug: Record<string, string[]>;
  groupMemberSlugsBySlug: Record<string, string[]>;
  scopeSlugsBySlug: Record<string, string[]>;
  unresolvedParents: Array<{ slug: string; title: string; parentDisease: string }>;
  unresolvedCanonicalReferences: Array<{ slug: string; title: string; canonicalDisease: string }>;
  nonHierarchicalSelfReferences: Array<{ slug: string; title: string; documentRole: string }>;
  unresolvedGroupMembers: Array<{ slug: string; title: string; memberTitle: string }>;
};

export type SpecialtySummary = {
  name: string;
  slug: string;
  count: number;
};

export type SpecialtyRoadmapItem = {
  time: string;
  title: string;
  points: string[];
};

export type SpecialtyRoadmapLane = {
  title: string;
  items: SpecialtyRoadmapItem[];
};

export type SpecialtyRoadmap = {
  specialtySlug: string;
  title: string;
  description: string;
  sources: SkillSource[];
  lanes: SpecialtyRoadmapLane[];
};

export type SpecialtyTocItem = {
  title: string;
  path: string[];
};

export type SpecialtyToc = {
  specialty: string;
  specialtySlug: string;
  sourcePath: string;
  items: SpecialtyTocItem[];
};

export type DomainToc = { domain: string; sourcePath: string; items: SpecialtyTocItem[]; };
export type SearchEntry = {
  type: string;
  slug: string;
  title: string;
  category: string;
  aliases: string[];
  keywords: string[];
  quickSummary: string;
  priority?: string;
  href: string;
};


export type CoverageLevel = "preferred" | "active" | "conditional" | "variable" | "inactive" | "unknown";
export type PregnancyStatus =
  | "generally_compatible"
  | "use_if_needed"
  | "trimester_caution"
  | "avoid_if_possible"
  | "contraindicated"
  | "insufficient_data";

export type AntibioticOrganism = {
  id: string;
  label: string;
  group: string;
  aliases: string[];
  noteSourceFile?: string;
  noteSlug?: string;
  noteTitle?: string;
  microbiologyId?: string;
  microbiologySlug?: string;
};

export type AntibioticEntry = {
  id: string;
  sourceFile: string;
  inn: string;
  displayName: string;
  drugSlug: string;
  drugTitle: string;
  class: string;
  routes: string[];
  pregnancy: { status: PregnancyStatus; note: string };
  coverage: Record<string, CoverageLevel>;
  siteCaveats: string[];
  resistanceNotes: string[];
  sourceIds: string[];
  reviewStatus: string;
};

export type AntibioticSpectrumDataset = {
  schemaVersion: number;
  reviewedAt: string;
  disclaimer: string;
  coverageLevels: CoverageLevel[];
  organisms: AntibioticOrganism[];
  sources: Array<{ id: string; label: string; url: string }>;
  antibiotics: AntibioticEntry[];
};

export type MicrobiologyEntityKind = "organism" | "clinical_group" | "resistance_phenotype";
export type MicrobiologyPathogenType = "bacterium" | "virus" | "fungus" | "protozoan" | "helminth" | "ectoparasite" | "prion" | "mixed";
export type MicrobiologyReviewStatus = "draft" | "source_checked" | "clinically_reviewed" | "verified" | "needs_update";

export type MicrobiologySource = {
  id: string;
  label: string;
  organization: string;
  url: string;
  tier: "A" | "B" | "C";
  year: string;
  scope: string[];
};

export type MicrobiologyEntity = {
  id: string;
  slug: string;
  title: string;
  scientificName: string;
  koreanName: string;
  entityKind: MicrobiologyEntityKind;
  pathogenType: MicrobiologyPathogenType;
  category: string;
  categoryPath: string[];
  aliases: string[];
  classification: string[];
  clinicalTags: string[];
  taxonomyIds: string[];
  spectrumIds: string[];
  relatedDiseaseIds: string[];
  relatedAntibioticIds: string[];
  relatedLabIds: string[];
  sourceIds: string[];
  reviewStatus: MicrobiologyReviewStatus;
  reviewedAt: string;
  sourcePath: string;
  summary: string[];
  sections: DiseaseSection[];
};

export type MicrobiologyDataset = {
  schemaVersion: number;
  reviewedAt: string;
  disclaimer: string;
  sources: MicrobiologySource[];
  entities: MicrobiologyEntity[];
};

export type MicrobiologyRelation = {
  sourceType: "microorganism" | "clinicalGroup" | "resistancePhenotype";
  sourceId: string;
  relation: string;
  targetType: "microorganism" | "clinicalGroup" | "resistancePhenotype" | "disease" | "drug" | "lab";
  targetId: string;
  context: string[];
  sourceIds: string[];
  reviewStatus: MicrobiologyReviewStatus;
  reviewedAt: string;
};

export type MicrobiologyRelationDataset = {
  schemaVersion: number;
  reviewedAt: string;
  relations: MicrobiologyRelation[];
};

export type ContentMeta = {
  reviewedAt?: string;
  reviewStatus?: "draft" | "reviewed" | "verified" | string;
  contentUpdatedAt?: string;
  guidelineYear?: string;
  sources: SkillSource[];
};

export type DomainNote = {
  id: string;
  slug: string;
  title: string;
  sourcePath: string;
  relativePath: string;
  pathSegments: string[];
  folder: string;
  aliases: string[];
  category: string;
  summary: string[];
  sections: DiseaseSection[];
  updatedAt: string;
  contentMeta?: ContentMeta;
  drugMeta?: {
    type: string;
    categoryPath: string;
    topClass: string;
    middleClass: string;
    detailClass: string;
    clinicalCore: boolean;
    priority: string;
    brands: string[];
    doses: string[];
    relatedDiseases: string[];
    indications: string[];
    contraindications: string[];
    interactions: string[];
    adverseEffects: string[];
    monitoring: string[];
    profile: string;
  };
};

export type ChiefComplaintNote = {
  id: string;
  slug: string;
  title: string;
  aliases: string[];
  category: string;
  sourcePath: string;
  concept: string[];
  differentials: string[];
  history: string[];
  historyChecklist: ChiefComplaintHistorySlot[];
  examChecklist: ChiefComplaintExamSlot[];
  exam: string[];
  plan: string[];
  recommendations: ChiefComplaintRecommendation[];
  sections: DiseaseSection[];
  updatedAt: string;
};

export type ChiefComplaintHistorySlot = {
  key: string;
  label: string;
  groups: Array<{
    label: string;
    items: string[];
  }>;
};

export type ChiefComplaintExamSlot = {
  key: string;
  label: string;
  groups: Array<{
    label: string;
    items: string[];
  }>;
};

export type ChiefComplaintRecommendation = {
  symptoms: string[];
  disease: string;
  tests: string;
  treatment: string;
};

export type ChiefComplaintCategorySummary = {
  name: string;
  slug: string;
  count: number;
};

export type ClinicalRelation = {
  sourceType: string;
  sourceId: string;
  sourceTitle: string;
  sourceHref: string;
  relation: string;
  targetType: string;
  targetId: string;
  targetTitle: string;
  targetHref: string;
  provenance: "frontmatter" | "section" | "wikilink" | "generated" | string;
  evidence: string;
};

export type ClinicalRelationIndex = {
  generatedAt: string;
  source: string;
  nodeCount: number;
  relationCount: number;
  explicitRelationCount: number;
  generatedRelationCount: number;
  brokenTargetCount: number;
  unresolvedReferenceCount: number;
  relations: ClinicalRelation[];
};
export type TermLink = {
  term: string;
  href: string;
};

export type SkillStep = {
  stepNumber: number;
  title: string;
  description: string;
  warning?: string;
  image?: string;
};

export type SkillSource = {
  label: string;
  url: string;
};

export type ClinicalSkill = {
  id: string;
  name: string;
  aliases: string[];
  categoryId: string;
  categoryName: string;
  summary: string[];
  indications: string[];
  supplies: string[];
  complications: string[];
  precautions: string[];
  sources: SkillSource[];
  videoUrl?: string | null;
  steps: SkillStep[];
};

export type SkillCategorySummary = {
  id: string;
  name: string;
  iconName: string;
  items: Array<{
    id: string;
    name: string;
  }>;
};

export type SkillsManifest = {
  source: string;
  categories: SkillCategorySummary[];
  items: ClinicalSkill[];
};

export type QbankAnswer = "A" | "B" | "C" | "D";

export type QbankQuestion = {
  id: string;
  source: string;
  sourceSplit: "train" | "validation" | "test" | string;
  specialty: string;
  specialtySlug: string;
  relatedDiseaseTerms: string[];
  relatedDiseaseSlugs: string[];
  relatedCcSlugs: string[];
  questionType: string;
  difficulty: string;
  question: string;
  options: Record<QbankAnswer, string>;
  answer: QbankAnswer;
  explanation: string;
  translationStatus: string;
  explanationStatus: string;
  reviewStatus: string;
  questionBank: "clinical" | "theory" | string;
  targetType: "disease" | "cc" | "drug" | string;
  targetSlug: string;
  targetTitle?: string;
};

export type QbankQuestionIndex = Pick<
  QbankQuestion,
  "id" | "specialty" | "specialtySlug" | "relatedDiseaseSlugs" | "relatedCcSlugs" | "questionType" | "difficulty" | "translationStatus" | "explanationStatus" | "questionBank" | "targetType" | "targetSlug" | "targetTitle"
>;

export type QbankSpecialtySummary = {
  name: string;
  slug: string;
  count: number;
};





