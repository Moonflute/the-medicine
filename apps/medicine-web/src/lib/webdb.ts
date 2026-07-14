import fs from "node:fs";
import path from "node:path";
import type {
  ChiefComplaintCategorySummary,
  ChiefComplaintNote,
  ClinicalRelation,
  ClinicalRelationIndex,
  ClinicalSkill,
  DiseaseNote,
  DomainToc,
  DomainNote,
  SearchEntry,
  SkillCategorySummary,
  SkillsManifest,
  SpecialtyRoadmap,
  SpecialtySummary,
  SpecialtyToc,
  TermLink,
} from "@/lib/types";

export type {
  ChiefComplaintCategorySummary,
  ChiefComplaintNote,
  ChiefComplaintHistorySlot,
  ChiefComplaintExamSlot,
  ClinicalRelation,
  ClinicalRelationIndex,
  ClinicalSkill,
  DiseaseNote,
  DiseaseSection,
  DomainToc,
  DomainNote,
  SearchEntry,
  SkillCategorySummary,
  SkillsManifest,
  SpecialtyRoadmap,
  SpecialtySummary,
  SpecialtyToc,
  TermLink,
} from "@/lib/types";

const DATA_ROOT = path.resolve(process.cwd(), "..", "..", "_webapp", "data");
const DEFAULT_CATEGORY = "General";

function readJson<T>(fileName: string): T {
  const filePath = path.join(DATA_ROOT, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Generated web DB file is missing: ${filePath}. Run "npm run sync:data" in apps/medicine-web.`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

function normalizeSpecialtyLabel(value: string) {
  return value.replace(/^\d+\s*/, "").trim();
}

function normalizeCategory(value?: string | null) {
  return value?.trim() || DEFAULT_CATEGORY;
}

function compareKo(a: string, b: string) {
  return a.localeCompare(b, "ko");
}

export function getClinicalRelationIndex(): ClinicalRelationIndex {
  return readJson<ClinicalRelationIndex>("clinical-relations.json");
}

export function getClinicalRelationsFor(sourceType: string, sourceId: string): ClinicalRelation[] {
  return getClinicalRelationIndex().relations.filter(
    (relation) => relation.sourceType === sourceType && relation.sourceId === sourceId,
  );
}
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

function buildTermLinks(notes: Array<{ slug: string; title: string; aliases: string[] }>, hrefForSlug: (slug: string) => string): TermLink[] {
  const links = new Map<string, string>();

  for (const note of notes) {
    const href = hrefForSlug(note.slug);
    const candidates = [note.title, ...note.aliases].map((value) => value.trim()).filter(Boolean);

    for (const candidate of candidates) {
      if (!links.has(candidate)) {
        links.set(candidate, href);
      }
    }
  }

  return [...links.entries()].map(([term, href]) => ({ term, href }));
}

export function getDiseaseLinks(): TermLink[] {
  return buildTermLinks(getAllDiseases(), (slug) => `/disease/${slug}`);
}

export function getSpecialties(): SpecialtySummary[] {
  return readJson("specialties.json");
}

export function getSpecialtyRoadmap(slug: string): SpecialtyRoadmap | undefined {
  return readJson<SpecialtyRoadmap[]>("specialty-roadmaps.json").find((roadmap) => roadmap.specialtySlug === slug);
}

export function getSpecialtyToc(slug: string): SpecialtyToc | undefined {
  return readJson<SpecialtyToc[]>("specialty-toc.json").find((toc) => toc.specialtySlug === slug);
}
export function getDrugToc(): DomainToc { return readJson<DomainToc>("drug-toc.json"); }
export function getLabImgToc(): DomainToc { return readJson<DomainToc>("lab-img-toc.json"); }

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
    const key = normalizeCategory(note.category);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort(([a], [b]) => compareKo(a, b))
    .map(([name, count]) => ({
      name,
      slug: toBase64Url(name),
      count,
    }));
}

export function getChiefComplaintsByCategory(slug: string): ChiefComplaintNote[] {
  return getChiefComplaints().filter((note) => toBase64Url(normalizeCategory(note.category)) === slug);
}

export function getChiefComplaintByCategoryAndSlug(categorySlug: string, slug: string): ChiefComplaintNote | undefined {
  return getChiefComplaints().find((note) => note.slug === slug && toBase64Url(normalizeCategory(note.category)) === categorySlug);
}

export function getChiefComplaintLinksForTerms(terms: string[]): TermLink[] {
  const cleanedTerms = new Set(terms.map((term) => term.trim()).filter(Boolean));
  const links = new Map<string, string>();

  for (const note of getChiefComplaints()) {
    const href = `/cc/category/${toBase64Url(normalizeCategory(note.category))}/${note.slug}`;
    const candidates = [note.title, ...note.aliases].map((value) => value.trim()).filter(Boolean);

    for (const candidate of candidates) {
      if (cleanedTerms.has(candidate) && !links.has(candidate)) {
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




