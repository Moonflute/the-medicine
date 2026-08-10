import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, "..", "..", "..");
const DATA_ROOT = path.join(REPO_ROOT, "_webapp", "data");
const REPORT_PATH = path.join(REPO_ROOT, "reports", "disease-hierarchy-audit.json");

function readJson(name) {
  return JSON.parse(fs.readFileSync(path.join(DATA_ROOT, name), "utf8"));
}

function normalizedTitle(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/[\s·ㆍ\-_/]/g, "")
    .toLowerCase();
}

const diseases = readJson("diseases.json");
const hierarchy = readJson("disease-hierarchy.json");
const visible = new Set(hierarchy.visibleSlugs);
const visibleDiseases = diseases.filter((item) => visible.has(item.slug));
const byNormalizedTitle = new Map();

for (const item of visibleDiseases) {
  const key = normalizedTitle(item.title);
  if (!key) continue;
  const entries = byNormalizedTitle.get(key) ?? [];
  entries.push(item);
  byNormalizedTitle.set(key, entries);
}

const titleCollisions = [...byNormalizedTitle.entries()]
  .filter(([, entries]) => entries.length > 1)
  .map(([normalized, entries]) => ({
    normalized,
    entries: entries.map((item) => ({
      slug: item.slug,
      title: item.title,
      specialty: item.specialty,
      documentRole: item.documentRole ?? "canonical",
      sourcePath: item.sourcePath,
    })),
  }));

const sameSpecialtyTitleCollisions = titleCollisions.filter((group) => new Set(group.entries.map((entry) => entry.specialty)).size === 1);
const crossSpecialtySharedTopics = titleCollisions.filter((group) => new Set(group.entries.map((entry) => entry.specialty)).size > 1);

const families = new Map();
for (const item of visibleDiseases) {
  const family = item.familyMeta?.family;
  if (!family) continue;
  const entries = families.get(family) ?? [];
  entries.push(item);
  families.set(family, entries);
}

const familySummary = [...families.entries()]
  .map(([family, entries]) => ({
    family,
    count: entries.length,
    roots: entries.filter((item) => !hierarchy.parentSlugBySlug[item.slug]).map((item) => ({ slug: item.slug, title: item.title })),
    children: entries.filter((item) => hierarchy.parentSlugBySlug[item.slug]).map((item) => ({ slug: item.slug, title: item.title, parentSlug: hierarchy.parentSlugBySlug[item.slug] })),
  }))
  .sort((left, right) => right.count - left.count || left.family.localeCompare(right.family));

const parentClassificationDivergences = Object.entries(hierarchy.parentSlugBySlug).flatMap(([childSlug, parentSlug]) => {
  const child = diseases.find((item) => item.slug === childSlug);
  const parent = diseases.find((item) => item.slug === parentSlug);
  if (!child || !parent) return [];
  const childPrimary = child.classification?.[0] ?? "";
  const parentPrimary = parent.classification?.[0] ?? "";
  if (!childPrimary || !parentPrimary || childPrimary === parentPrimary) return [];
  return [{
    child: { slug: child.slug, title: child.title, classification: child.classification, sourcePath: child.sourcePath },
    parent: { slug: parent.slug, title: parent.title, classification: parent.classification, sourcePath: parent.sourcePath },
  }];
});

const roleCounts = Object.fromEntries([...new Set(diseases.map((item) => item.documentRole ?? "canonical"))]
  .sort()
  .map((role) => [role, diseases.filter((item) => (item.documentRole ?? "canonical") === role).length]));

const report = {
  generatedAt: new Date().toISOString(),
  contract: {
    hierarchySource: "disease_family + parent_disease + canonical_disease frontmatter",
    classificationSource: "classification frontmatter; display grouping only",
    compatibilityBehavior: "hidden from navigation/search and redirected to canonical_disease",
    qbankBehavior: "parent scope includes explicitly modeled descendants; group overview scope includes its listed members and their descendants",
  },
  summary: {
    documents: diseases.length,
    visibleDocuments: visibleDiseases.length,
    roleCounts,
    explicitParentRelations: Object.keys(hierarchy.parentSlugBySlug).length,
    unresolvedParentReferences: hierarchy.unresolvedParents.length,
    unresolvedCanonicalReferences: hierarchy.unresolvedCanonicalReferences.length,
    nonHierarchicalSelfReferences: hierarchy.nonHierarchicalSelfReferences.length,
    groupOverviews: Object.keys(hierarchy.groupMemberSlugsBySlug ?? {}).length,
    unresolvedGroupMemberReferences: hierarchy.unresolvedGroupMembers?.length ?? 0,
    sameSpecialtyTitleCollisions: sameSpecialtyTitleCollisions.length,
    crossSpecialtySharedTopics: crossSpecialtySharedTopics.length,
    modeledFamilies: familySummary.length,
  },
  blocking: {
    unresolvedParents: hierarchy.unresolvedParents,
    unresolvedCanonicalReferences: hierarchy.unresolvedCanonicalReferences,
  },
  review: {
    nonHierarchicalSelfReferences: hierarchy.nonHierarchicalSelfReferences,
    unresolvedGroupMembers: hierarchy.unresolvedGroupMembers ?? [],
    sameSpecialtyTitleCollisions,
    crossSpecialtySharedTopics,
    parentClassificationDivergences,
    familiesWithMultipleRoots: familySummary.filter((family) => family.roots.length > 1),
  },
  families: familySummary,
};

fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
fs.writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ ok: true, report: path.relative(REPO_ROOT, REPORT_PATH), summary: report.summary }, null, 2));
