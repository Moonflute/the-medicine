export type DiseaseSection = {
  title: string;
  content: string[];
};

export type DiseaseNote = {
  id: string;
  slug: string;
  title: string;
  sourcePath: string;
  specialty: string;
  category: string;
  classification: string[];
  aliases: string[];
  chiefComplaints: string[];
  definition?: string;
  overview?: string[];
  sections: DiseaseSection[];
  updatedAt: string;
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
export type SearchEntry = {
  type: string;
  slug: string;
  title: string;
  category: string;
  aliases: string[];
  href: string;
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
  exam: string[];
  plan: string[];
  recommendations: ChiefComplaintRecommendation[];
  sections: DiseaseSection[];
  updatedAt: string;
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





