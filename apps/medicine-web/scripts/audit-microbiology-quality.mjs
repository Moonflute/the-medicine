import fs from "node:fs";
import path from "node:path";

const appRoot = path.resolve(import.meta.dirname, "..");
const repoRoot = path.resolve(appRoot, "../..");
const microbiologyRoot = path.join(repoRoot, "source_notes", "09 Microbiology");
const registry = JSON.parse(fs.readFileSync(path.join(microbiologyRoot, "_data", "microorganism-registry.json"), "utf8"));
const sourceRegistry = JSON.parse(fs.readFileSync(path.join(microbiologyRoot, "_data", "microbiology-sources.json"), "utf8"));
const relationAudit = JSON.parse(fs.readFileSync(path.join(repoRoot, "reports", "microbiology-relation-audit.json"), "utf8"));
const sourceMap = new Map(sourceRegistry.sources.map((source) => [source.id, source]));

const organismSections = [
  "## 동정 및 분류",
  "## 저장소와 전파",
  "## 병원성 및 병태생리",
  "## 임상 정보",
  "## 진단",
  "## 치료 원칙",
  "## 감염관리 및 예방",
  "## 출처",
];
const phenotypeSections = [
  "## 정의",
  "## 해당 병원체",
  "## 내성 기전",
  "## 검사 및 판정",
  "## 임상적 의미",
  "## 치료 원칙",
  "## 감염관리",
  "## 출처",
];
const clinicalGroupSections = [
  "## 정의와 범위",
  "## 주요 구성 병원체",
  "## 공통 동정 특징",
  "## 임상 정보",
  "## 진단",
  "## 치료 원칙",
  "## 주요 예외",
  "## 출처",
];
const forbiddenBoilerplate = [
  "감염 여부와 중증도는 병원체의 virulence뿐 아니라",
  "면역저하, 장기·해부학적 장벽 손상, invasive device와 의료노출 여부",
  "중증 또는 비전형적 경과에서는 dissemination, 합병증과 source control",
  "예상보다 반응이 나쁘면 오진, 부적절한 검체, 약물노출, 내성, deep focus",
];

const errors = [];
const warnings = [];
const entities = [];
const nowYear = new Date().getUTCFullYear();

for (const entity of registry.entities) {
  const notePath = path.join(microbiologyRoot, entity.noteSourceFile);
  if (!fs.existsSync(notePath)) {
    errors.push({ entityId: entity.id, code: "missing-note", detail: entity.noteSourceFile });
    continue;
  }

  const text = fs.readFileSync(notePath, "utf8");
  const requiredSections = entity.entityKind === "resistance_phenotype"
    ? phenotypeSections
    : entity.entityKind === "clinical_group"
      ? clinicalGroupSections
      : organismSections;
  const missingSections = requiredSections.filter((section) => !text.includes(section));
  const unknownSources = entity.sourceIds.filter((id) => !sourceMap.has(id));
  const tierACount = entity.sourceIds.filter((id) => sourceMap.get(id)?.tier === "A").length;
  const staleSources = entity.sourceIds
    .map((id) => sourceMap.get(id))
    .filter((source) => source && /^\d{4}$/.test(String(source.year)) && nowYear - Number(source.year) > 5)
    .map((source) => source.id);
  const hangulCount = (text.match(/[가-힣]/g) ?? []).length;
  const forbiddenMatches = forbiddenBoilerplate.filter((item) => text.includes(item));

  if (missingSections.length) errors.push({ entityId: entity.id, code: "missing-sections", detail: missingSections });
  if (!entity.reviewedAt) errors.push({ entityId: entity.id, code: "missing-reviewed-at" });
  if (unknownSources.length) errors.push({ entityId: entity.id, code: "unknown-source", detail: unknownSources });
  if (tierACount === 0) errors.push({ entityId: entity.id, code: "missing-tier-a-source" });
  if (hangulCount < 80) errors.push({ entityId: entity.id, code: "insufficient-korean-explanation", detail: hangulCount });
  if (/[\u0000\uFFFD]|<\?xml|undefined/i.test(text)) errors.push({ entityId: entity.id, code: "broken-content-token" });
  if (forbiddenMatches.length) errors.push({ entityId: entity.id, code: "generic-boilerplate", detail: forbiddenMatches });
  if (staleSources.length) warnings.push({ entityId: entity.id, code: "source-freshness-review", detail: staleSources });

  entities.push({
    id: entity.id,
    entityKind: entity.entityKind,
    pathogenType: entity.pathogenType,
    reviewStatus: entity.reviewStatus,
    reviewedAt: entity.reviewedAt,
    hangulCount,
    sourceCount: entity.sourceIds.length,
    tierACount,
    staleSources,
    missingSections,
  });
}

if (relationAudit.brokenTargetCount !== 0) {
  errors.push({ code: "broken-relation-targets", detail: relationAudit.brokenTargetCount });
}

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    entities: registry.entities.length,
    checkedNotes: entities.length,
    errors: errors.length,
    warnings: warnings.length,
    tierAComplete: entities.filter((entity) => entity.tierACount > 0).length,
    reviewedAtComplete: entities.filter((entity) => entity.reviewedAt).length,
    brokenTargets: relationAudit.brokenTargetCount,
  },
  errors,
  warnings,
  entities,
};

const reportPath = path.join(repoRoot, "reports", "microbiology-quality-audit.json");
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Microbiology quality audit: ${report.summary.entities} entities, ${errors.length} errors, ${warnings.length} warnings.`);
if (errors.length) process.exitCode = 1;
