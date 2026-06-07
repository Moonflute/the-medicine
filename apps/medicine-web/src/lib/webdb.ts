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
  folder: string;
  aliases: string[];
  category: string;
  summary: string[];
  sections: DiseaseSection[];
  updatedAt: string;
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

export type SkillStep = {
  stepNumber: number;
  title: string;
  description: string;
  warning?: string;
  image?: string;
};

export type ClinicalSkill = {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  indications: string[];
  supplies: string[];
  complications: string[];
  precautions: string[];
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

export function getSpecialties(): SpecialtySummary[] {
  return readJson("specialties.json");
}

export function getDiseasesBySpecialty(slug: string): DiseaseNote[] {
  return getAllDiseases().filter((note) => Buffer.from(note.specialty, "utf-8").toString("base64url") === slug);
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
