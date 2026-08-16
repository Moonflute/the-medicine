import fs from "node:fs";
import path from "node:path";
import type {
  AntibioticSpectrumDataset,
  ChiefComplaintCategorySummary,
  ChiefComplaintNote,
  ClinicalRelation,
  ClinicalRelationIndex,
  ClinicalSkill,
  DiseaseHierarchy,
  DiseaseNote,
  DomainToc,
  DomainNote,
  MicrobiologyDataset,
  MicrobiologyEntity,
  MicrobiologyRelation,
  MicrobiologyRelationDataset,
  SearchEntry,
  SkillCategorySummary,
  SkillsManifest,
  SpecialtyRoadmap,
  SpecialtySummary,
  SpecialtyToc,
  QbankQuestionIndex,
  QbankQuestion,
  QbankSpecialtySummary,
  TermLink,
} from "@/lib/types";
import { interactiveConcepts } from "@/lib/interactive-concepts";

export type {
  ChiefComplaintCategorySummary,
  ChiefComplaintNote,
  ChiefComplaintHistorySlot,
  ChiefComplaintExamSlot,
  ClinicalRelation,
  ClinicalRelationIndex,
  ClinicalSkill,
  DiseaseNote,
  DiseaseHierarchy,
  DiseaseSection,
  DomainToc,
  DomainNote,
  MicrobiologyDataset,
  MicrobiologyEntity,
  MicrobiologyRelation,
  MicrobiologyRelationDataset,
  SearchEntry,
  SkillCategorySummary,
  SkillsManifest,
  SpecialtyRoadmap,
  SpecialtySummary,
  SpecialtyToc,
  TermLink,
  QbankQuestionIndex,
  QbankQuestion,
  QbankSpecialtySummary,
} from "@/lib/types";

const DATA_ROOT = path.resolve(process.cwd(), "..", "..", "_webapp", "data");
const DEFAULT_CATEGORY = "General";
const jsonCache = new Map<string, unknown>();

function readJson<T>(fileName: string): T {
  if (jsonCache.has(fileName)) {
    return jsonCache.get(fileName) as T;
  }

  const filePath = path.join(DATA_ROOT, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Generated web DB file is missing: ${filePath}. Run "npm run sync:data" in apps/medicine-web.`);
  }
  const value = JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
  jsonCache.set(fileName, value);
  return value;
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

let clinicalRelationsBySource: Map<string, ClinicalRelation[]> | undefined;

export function getClinicalRelationsFor(sourceType: string, sourceId: string): ClinicalRelation[] {
  if (!clinicalRelationsBySource) {
    clinicalRelationsBySource = new Map<string, ClinicalRelation[]>();
    for (const relation of getClinicalRelationIndex().relations) {
      const key = `${relation.sourceType}\u0000${relation.sourceId}`;
      const values = clinicalRelationsBySource.get(key) ?? [];
      values.push(relation);
      clinicalRelationsBySource.set(key, values);
    }
  }

  return clinicalRelationsBySource.get(`${sourceType}\u0000${sourceId}`) ?? [];
}
export function getManifest() {
  return readJson("manifest.json");
}

export function getAllDiseases(): DiseaseNote[] {
  return readJson("diseases.json");
}

let diseaseBySlug: Map<string, DiseaseNote> | undefined;

export function getDiseaseHierarchy(): DiseaseHierarchy {
  return readJson<DiseaseHierarchy>("disease-hierarchy.json");
}

export function isCompatibilityDisease(note: DiseaseNote) {
  return note.documentRole === "compatibility";
}

export function getCanonicalDiseaseSlug(slug: string): string {
  return getDiseaseHierarchy().canonicalSlugBySlug[slug] ?? slug;
}

export function getDiseaseScopeSlugs(slug: string): string[] {
  const canonicalSlug = getCanonicalDiseaseSlug(slug);
  const hierarchy = getDiseaseHierarchy();
  return hierarchy.scopeSlugsBySlug?.[canonicalSlug]
    ?? [canonicalSlug, ...(hierarchy.descendantSlugsBySlug[canonicalSlug] ?? [])];
}

export function getDiseaseBySlug(slug: string): DiseaseNote | undefined {
  diseaseBySlug ??= new Map(getAllDiseases().map((note) => [note.slug, note]));
  return diseaseBySlug.get(slug);
}

export function isSpecialtyIndexDisease(note: DiseaseNote) {
  return normalizeSpecialtyLabel(note.title) === normalizeSpecialtyLabel(note.specialty);
}

function buildTermLinks(notes: Array<{ slug: string; title: string; displayTitle?: string; aliases: string[] }>, hrefForSlug: (slug: string) => string): TermLink[] {
  const links = new Map<string, string>();

  for (const note of notes) {
    const href = hrefForSlug(note.slug);
    const candidates = [note.title, note.displayTitle, ...note.aliases]
      .filter((value): value is string => Boolean(value))
      .map((value) => value.trim())
      .filter(Boolean);

    for (const candidate of candidates) {
      if (!links.has(candidate)) {
        links.set(candidate, href);
      }
    }
  }

  return [...links.entries()].map(([term, href]) => ({ term, href }));
}

export function getDiseaseLinks(): TermLink[] {
  diseaseLinks ??= buildTermLinks(getAllDiseases().filter((note) => !isCompatibilityDisease(note)), (slug) => `/disease/${slug}`);
  return diseaseLinks;
}

let diseaseLinks: TermLink[] | undefined;

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
  const specialty = getSpecialties().find((item) => item.slug === slug);
  if (!specialty) return [];

  const target = normalizeSpecialtyLabel(specialty.name);
  const diseases = getAllDiseases().filter((note) => !isCompatibilityDisease(note));
  const diseaseByTitle = new Map(diseases.map((note) => [note.title, note]));

  return diseases.filter((note) => {
    const parent = note.familyMeta?.parentDisease ? diseaseByTitle.get(note.familyMeta.parentDisease) : undefined;
    return (
    note.specialty === specialty.name
    || note.relatedSpecialties?.some((item) => normalizeSpecialtyLabel(item) === target)
    || (parent ? normalizeSpecialtyLabel(parent.specialty) === target : false)
    );
  });
}

export function getDiseaseSearchIndex(): SearchEntry[] {
  const generated = readJson<SearchEntry[]>("search-index.json");
  const concepts: SearchEntry[] = interactiveConcepts.map((concept) => ({
    type: "interactiveConcept",
    slug: concept.slug,
    title: concept.shortTitle,
    category: concept.specialties.join(" · "),
    aliases: [concept.title, ...concept.aliases],
    keywords: ["interactive", "physiology", "생리", "기전", ...concept.keywords, ...concept.specialties],
    quickSummary: concept.summary,
    href: `/interactive/${concept.slug}`,
  }));
  return [...generated, ...concepts];
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

type NeuroNotePayload = {
  anatomy: Array<{ label?: string; text: string }>;
  function: Array<{ label?: string; text: string }>;
  clinical: Array<{ label?: string; text: string }>;
  related: Array<{ id: string; label?: string; text: string }>;
  diseases: string[];
  sourceIds?: string[];
};

export type NeuroAtlas = {
  version: number;
  updatedAt: string;
  disclaimer: string;
  sources: Array<{ id?: string; label: string; title?: string; publisher?: string; edition?: string; editionOrVersion?: string; section?: string; url: string; accessedAt?: string; license?: string; usedFor?: string }>;
  views: Array<{ id: string; label: string; description: string; hierarchy: string[]; group?: string; orientation?: string; sourceIds?: string[]; createdAs: "project-generated-illustration"; referenceSourceIds: string[]; anatomyReviewStatus?: "source-mapped"; visualReviewStatus?: "design-system-checked"; reviewScope?: string; reviewStatus: "draft-anatomy" | "source-checked" | "review-ready"; published?: boolean; isPilotSelectable?: boolean; illustrationAsset: { asset: string; width: number; height: number; kind: "project-generated-reference-traced"; sha256: string; overlayId: string; reviewStatus: string; referenceSourceIds: string[]; reviewNote?: string } }>;
  structures: Array<{ id: string; ko: string; en: string; group: string; summary: string; links: string[]; drugLinks?: string[]; viewIds?: string[]; sourceIds?: string[]; note?: NeuroNotePayload }>;
  pathways: Array<{ id: string; ko: string; en: string; kind: string; route: string; pattern: string; links: string[]; drugLinks?: string[]; nodes?: string[]; sourceIds?: string[]; origin?: string; relayNuclei?: string[]; decussation?: string; termination?: string; primaryFunction?: string; lesionPattern?: string; laterality?: { rule: string; description: string }; segments?: Array<{ structureId: string; role: string; label: string }>; reviewedAt?: string; reviewBasis?: string; note?: NeuroNotePayload }>;
  dermatomes: Array<{ id: string; label: string; area: string; hint: string }>;
  myotomes: Array<{ id: string; label: string; action: string; muscle: string; reflex: string; peripheralNerve?: string; testPosition?: string; differential?: string; sourceIds?: string[] }>;
  reflexes: Array<{ id: string; label: string; arc: string; localization: string; purpose?: string; technique?: string[]; route?: string[]; routeLabels?: string[]; routeStages?: Array<"stimulus" | "afferent" | "central" | "efferent" | "effector">; laterality?: { options: string[]; default: string; description: string }; normal?: string; abnormal?: string; viewId?: string; sourceIds?: string[]; reviewStatus?: "draft" | "source-checked" | "retired"; note?: NeuroNotePayload }>;
  theoryTopics: Array<{
    id: string;
    title: string;
    category: string;
    summary: string;
    keyPoints: string[];
    sections?: Array<{ heading: string; body: string }>;
    viewId: string;
    itemId?: string;
    sourceIds: string[];
    drugLinks?: string[];
    note?: NeuroNotePayload;
  }>;
};

export type MaternalChildHubData = {
  schemaVersion: number;
  updatedAt: string;
  stages: Array<{
    group: "obstetrics" | "pediatrics" | "shared";
    time: string;
    title: string;
    subtitle: string;
    development: string[];
    assessments: string[];
    clinicalFocus: string[];
    related: string[];
    sources: string[];
  }>;
  pediatricMilestones: Array<{
    age: string;
    title: string;
    gross: string[];
    fine: string[];
    language: string[];
    social: string[];
    visit: string[];
  }>;
  sources: Array<{ label: string; url: string }>;
};

export function getMaternalChildHubData(): MaternalChildHubData {
  return readJson<MaternalChildHubData>("maternal-child-hub.json");
}

export function getNervousSystemAtlas(): NeuroAtlas { return readJson<NeuroAtlas>("nervous-system-atlas.json"); }
export function getAntibioticSpectrum(): AntibioticSpectrumDataset {
  return readJson<AntibioticSpectrumDataset>("antibiotic-spectrum.json");
}

export function getMicrobiologyDataset(): MicrobiologyDataset {
  return readJson<MicrobiologyDataset>("microorganisms.json");
}

export function getMicrobiologyEntities(): MicrobiologyEntity[] {
  return getMicrobiologyDataset().entities;
}

export function getMicrobiologyEntityBySlug(slug: string): MicrobiologyEntity | undefined {
  return getMicrobiologyEntities().find((entity) => entity.slug === slug);
}

export function getMicrobiologyEntityById(id: string): MicrobiologyEntity | undefined {
  return getMicrobiologyEntities().find((entity) => entity.id === id);
}

export function getMicrobiologyEntityForSpectrumId(spectrumId: string): MicrobiologyEntity | undefined {
  return getMicrobiologyEntities().find((entity) => entity.spectrumIds.includes(spectrumId));
}

export function getMicrobiologyRelationDataset(): MicrobiologyRelationDataset {
  return readJson<MicrobiologyRelationDataset>("microbiology-relations.json");
}

export function getMicrobiologyRelationsFor(sourceId: string): MicrobiologyRelation[] {
  return getMicrobiologyRelationDataset().relations.filter((relation) => relation.sourceId === sourceId);
}

export function getDrugs(): DomainNote[] {
  return readJson("drugs.json");
}

let drugBySlug: Map<string, DomainNote> | undefined;

export function getDrugBySlug(slug: string): DomainNote | undefined {
  drugBySlug ??= new Map(getDrugs().map((note) => [note.slug, note]));
  return drugBySlug.get(slug);
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

export function getQbankIndex(): QbankQuestionIndex[] {
  return readJson("qbank-index.json");
}

export function getQbankSpecialties(): QbankSpecialtySummary[] {
  return readJson("qbank-specialties.json");
}

export function getQbankCountForDisease(diseaseSlug: string): number {
  return getQbankIndex().filter((item) => item.relatedDiseaseSlugs?.includes(diseaseSlug)).length;
}

export function getQbankCountForTarget(targetType: "disease" | "cc", targetSlug: string): number {
  const diseaseScope = targetType === "disease" ? new Set(getDiseaseScopeSlugs(targetSlug)) : new Set<string>();
  return getQbankIndex().filter((item) => (
    (item.targetType === targetType && (targetType !== "disease" ? item.targetSlug === targetSlug : diseaseScope.has(item.targetSlug)))
    || (targetType === "disease" && item.relatedDiseaseSlugs?.some((slug) => diseaseScope.has(slug)))
    || (targetType === "cc" && item.relatedCcSlugs?.includes(targetSlug))
  )).length;
}

export function getQbankQuestionsBySpecialty(specialtySlug: string): QbankQuestion[] {
  return readJson(`qbank/${specialtySlug}.json`);
}

export function getQbankQuestionById(id: string): QbankQuestion | undefined {
  const index = getQbankIndex().find((item) => item.id === id);
  if (!index) return undefined;
  return getQbankQuestionsBySpecialty(index.specialtySlug).find((item) => item.id === id);
}
