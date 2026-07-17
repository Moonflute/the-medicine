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
  aliases: string[];
  chiefComplaints: string[];
  definition?: string;
  overview?: string[];
  sections: DiseaseSection[];
  updatedAt: string;
  clinicalPriority?: string;
  contentMeta?: ContentMeta;
  familyMeta?: DiseaseFamilyMeta;
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





