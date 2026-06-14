import fs from "node:fs";
import path from "node:path";

const DATA_ROOT = path.resolve(process.cwd(), "..", "..", "_webapp", "data");

function readJson(fileName: string) {
  const filePath = path.join(DATA_ROOT, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Generated web DB file is missing: ${filePath}. Run "npm run sync:data" in apps/medicine-web.`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

function normalizeSpecialtyLabel(value: string) {
  return value.replace(/^\d+\s*/, "").trim();
}

const CHIEF_COMPLAINT_CATEGORY_ORDER = [
  "전신증상",
  "순환기",
  "호흡기",
  "소화기",
  "신장/비뇨기",
  "근골격/피부",
  "정신",
  "신경",
  "산부",
  "소아",
  "상담",
];

function getChiefComplaintCategoryRank(name: string) {
  const rank = CHIEF_COMPLAINT_CATEGORY_ORDER.indexOf(name);
  return rank === -1 ? Number.MAX_SAFE_INTEGER : rank;
}

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
  sections: DiseaseSection[];
  updatedAt: string;
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

export function getManifest() {
  return readJson("manifest.json");
}

export function getAllDiseases(): DiseaseNote[] {
  return readJson("diseases.json");
}

export function getDiseaseBySlug(slug: string): DiseaseNote | undefined {
  return getAllDiseases().find((note) => note.slug === slug);
}

export function isSpecialtyIndexDisease(note: DiseaseNote) {
  return normalizeSpecialtyLabel(note.title) === normalizeSpecialtyLabel(note.specialty);
}

export function getDiseaseLinks(): TermLink[] {
  const links = new Map<string, string>();

  for (const note of getAllDiseases()) {
    const href = `/disease/${note.slug}`;
    const candidates = [note.title, ...note.aliases].map((value) => value.trim()).filter(Boolean);

    for (const candidate of candidates) {
      if (!links.has(candidate)) {
        links.set(candidate, href);
      }
    }
  }

  return [...links.entries()].map(([term, href]) => ({ term, href }));
}

export function getSpecialties(): SpecialtySummary[] {
  return readJson("specialties.json");
}

export function getDiseasesBySpecialty(slug: string): DiseaseNote[] {
  return getAllDiseases().filter((note) => toBase64Url(note.specialty) === slug);
}

export function getDiseaseSearchIndex(): SearchEntry[] {
  return readJson("search-index.json");
}

export function getChiefComplaints(): ChiefComplaintNote[] {
  return readJson("chief-complaints.json");
}

export function getChiefComplaintBySlug(slug: string): ChiefComplaintNote | undefined {
  return getChiefComplaints().find((note) => note.slug === slug);
}

export function getChiefComplaintCategories(): ChiefComplaintCategorySummary[] {
  const counts = new Map<string, number>();

  for (const note of getChiefComplaints()) {
    const key = note.category || "기타";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => getChiefComplaintCategoryRank(a[0]) - getChiefComplaintCategoryRank(b[0]) || a[0].localeCompare(b[0], "ko"))
    .map(([name, count]) => ({
      name,
      slug: toBase64Url(name),
      count,
    }));
}

export function getChiefComplaintsByCategory(slug: string): ChiefComplaintNote[] {
  return getChiefComplaints().filter((note) => toBase64Url(note.category || "기타") === slug);
}

export function getChiefComplaintByCategoryAndSlug(categorySlug: string, slug: string): ChiefComplaintNote | undefined {
  return getChiefComplaints().find((note) => note.slug === slug && toBase64Url(note.category || "기타") === categorySlug);
}

export function getChiefComplaintLinksForTerms(terms: string[]): TermLink[] {
  const cleanedTerms = [...new Set(terms.map((term) => term.trim()).filter(Boolean))];
  const links = new Map<string, string>();

  for (const note of getChiefComplaints()) {
    const href = `/cc/category/${toBase64Url(note.category || "기타")}/${note.slug}`;
    const candidates = [note.title, ...note.aliases].map((value) => value.trim()).filter(Boolean);

    for (const candidate of candidates) {
      if (cleanedTerms.includes(candidate) && !links.has(candidate)) {
        links.set(candidate, href);
      }
    }
  }

  return [...links.entries()].map(([term, href]) => ({ term, href }));
}

export function getDrugs(): DomainNote[] {
  return readJson("drugs.json");
}

export function getDrugBySlug(slug: string): DomainNote | undefined {
  return getDrugs().find((note) => note.slug === slug);
}

export function getPhysiologyNotes(): DomainNote[] {
  return readJson("physiology.json");
}

export function getPhysiologyNoteBySlug(slug: string): DomainNote | undefined {
  return getPhysiologyNotes().find((note) => note.slug === slug);
}

export function getPathologyNotes(): DomainNote[] {
  return readJson("pathology.json");
}

export function getPathologyNoteBySlug(slug: string): DomainNote | undefined {
  return getPathologyNotes().find((note) => note.slug === slug);
}

export function getLabImgNotes(): DomainNote[] {
  return readJson("lab-img.json");
}

export function getLabImgNoteBySlug(slug: string): DomainNote | undefined {
  return getLabImgNotes().find((note) => note.slug === slug);
}

export function getSkillsManifest(): SkillsManifest {
  return readJson("skills.json");
}

export function getSkillsCategories(): SkillCategorySummary[] {
  return getSkillsManifest().categories;
}

export function getSkillCategoryById(id: string): SkillCategorySummary | undefined {
  return getSkillsCategories().find((category) => category.id === id);
}

export function getAllSkills(): ClinicalSkill[] {
  return getSkillsManifest().items;
}

export function getSkillById(id: string): ClinicalSkill | undefined {
  return getAllSkills().find((skill) => skill.id === id);
}
