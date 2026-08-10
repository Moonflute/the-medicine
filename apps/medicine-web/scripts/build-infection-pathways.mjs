import fs from "node:fs";
import path from "node:path";

const APP_ROOT = process.env.INIT_CWD || process.cwd();
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "..", "..");
const HUBS_ROOT = path.join(WORKSPACE_ROOT, "source_notes", "10 Hubs");
const INFECTION_HUB = fs.readdirSync(HUBS_ROOT).find((name) => name.startsWith("01 "));
if (!INFECTION_HUB) throw new Error("Infection Hub folder is missing.");
const SOURCE_PATH = path.join(HUBS_ROOT, INFECTION_HUB, "_data", "infection-pathways.json");
const DATA_ROOT = path.join(WORKSPACE_ROOT, "_webapp", "data");
const OUTPUT_PATH = path.join(DATA_ROOT, "infection-pathways.json");
const MANIFEST_PATH = path.join(DATA_ROOT, "manifest.json");
const SNAPSHOT_PATH = path.join(WORKSPACE_ROOT, "reports", "infection-structure-snapshot.json");
const MAINTENANCE_PATH = path.join(WORKSPACE_ROOT, "reports", "infection-maintenance-audit.json");

const enums = {
  setting: new Set(["community", "mixed", "healthcare-associated", "hospital-acquired", "ventilator-associated", "procedure-associated"]),
  population: new Set(["adult", "pediatric", "neonate", "pregnant", "immunocompromised", "neutropenic"]),
  likelihood: new Set(["common", "important", "risk-factor-dependent", "uncommon", "excluded"]),
  rank: new Set(["preferred", "alternative", "conditional", "salvage", "not-recommended"]),
  selection: new Set(["one-of", "all-of", "optional"]),
  reviewStatus: new Set(["draft", "reviewed", "verified", "retired"]),
};

function readJson(filePath) {
  if (!fs.existsSync(filePath)) throw new Error(`Required file is missing: ${filePath}`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf-8");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function validateIdList(ids, known, context) {
  assert(Array.isArray(ids) && ids.length > 0, `${context}: at least one id is required`);
  for (const id of ids) assert(known.has(id), `${context}: unknown id ${id}`);
}

function validateSourceIds(ids, knownSources, context) {
  validateIdList(ids, knownSources, context);
}

function buildSnapshot() {
  const infectionRoot = path.join(WORKSPACE_ROOT, "source_notes", "02 Diseases", "08 감염");
  const files = fs.readdirSync(infectionRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "_목차.md")
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "ko"));
  const tocPath = path.join(infectionRoot, "_목차.md");
  const tocHeadings = fs.readFileSync(tocPath, "utf-8")
    .split(/\r?\n/)
    .filter((line) => /^\s*-\s+/.test(line))
    .map((line) => line.replace(/^\s*-\s+/, "").trim());

  return {
    generatedAt: new Date().toISOString(),
    invariant: "Specialty > 감염의 원인균 중심 목차와 기존 Markdown 위치를 보존한다.",
    markdownCount: files.length,
    files,
    tocHeadings,
  };
}

function main() {
  const source = readJson(SOURCE_PATH);
  const diseases = readJson(path.join(DATA_ROOT, "diseases.json"));
  const spectrum = readJson(path.join(DATA_ROOT, "antibiotic-spectrum.json"));
  const sourceIds = new Set(source.sources.map((item) => item.id));
  const organismIds = new Set(spectrum.organisms.map((item) => item.id));
  const antibioticIds = new Set(spectrum.antibiotics.map((item) => item.id));
  const requiredAntibiotics = new Set(["benzylpenicillin", "amoxicillin", "ampicillin", "amoxicillinclavulanate", "piperacillintazobactam", "cefazolin", "ceftriaxone", "cefotaxime", "cefepime", "ceftazidime", "meropenem", "aztreonam", "azithromycin", "doxycycline", "ciprofloxacin", "gentamicin", "metronidazole", "vancomycin", "linezolid", "daptomycin", "trimethoprimsulfamethoxazole", "nitrofurantoin", "fosfomycin"]);
  const requiredOrganisms = new Set(["mssa", "mrsa", "streptococci", "pneumococcus", "e_faecalis", "e_faecium", "enterobacterales", "pseudomonas", "b_fragilis", "atypicals", "esbl", "cre", "n_meningitidis", "listeria"]);
  const missingAntibiotics = [...requiredAntibiotics].filter((id) => !antibioticIds.has(id));
  const missingOrganisms = [...requiredOrganisms].filter((id) => !organismIds.has(id));
  assert(missingAntibiotics.length === 0, `Required clinical antibiotic anchors are missing: ${missingAntibiotics.join(", ")}`);
  assert(missingOrganisms.length === 0, `Required clinical organism anchors are missing: ${missingOrganisms.join(", ")}`);
  const pathwayIds = new Set();
  const regimenIds = new Set();
  const quizIds = new Set();

  assert(source.schemaVersion === 1, `Unsupported infection pathway schema: ${source.schemaVersion}`);
  assert(sourceIds.size === source.sources.length, "Duplicate infection source id");
  for (const item of source.sources) {
    assert(item.label && /^https:\/\//.test(item.url), `Invalid source: ${item.id}`);
    assert(["A", "B", "C"].includes(item.tier), `Invalid source tier: ${item.id}`);
    assert(/^\d{4}$/.test(item.year), `Invalid source year: ${item.id}`);
  }

  const pathways = source.pathways.map((pathway) => {
    assert(!pathwayIds.has(pathway.id), `Duplicate pathway id: ${pathway.id}`);
    pathwayIds.add(pathway.id);
    assert(enums.setting.has(pathway.setting), `${pathway.id}: invalid setting`);
    assert(enums.reviewStatus.has(pathway.reviewStatus), `${pathway.id}: invalid reviewStatus`);
    assert(pathway.population.every((item) => enums.population.has(item)), `${pathway.id}: invalid population`);
    validateSourceIds(pathway.sourceIds, sourceIds, `${pathway.id}/sources`);
    if (pathway.reviewStatus === "verified") {
      assert(new Set(pathway.sourceIds).size >= 2, `${pathway.id}: verified pathway needs independent cross-check sources`);
      assert(pathway.reviewedAt && pathway.reviewedBy, `${pathway.id}: verified pathway needs review metadata`);
      assert(pathway.sourceIds.some((id) => source.sources.find((item) => item.id === id)?.tier === "A"), `${pathway.id}: verified pathway needs a Tier A source`);
    }

    const expectedSourcePath = `source_notes/02 Diseases/${pathway.diseaseSourceFile}`.replaceAll("\\", "/");
    const disease = diseases.find((item) => item.sourcePath.replaceAll("\\", "/") === expectedSourcePath);
    assert(disease, `${pathway.id}: disease source is not generated: ${pathway.diseaseSourceFile}`);

    for (const group of pathway.pathogenGroups) {
      assert(group.context, `${pathway.id}: pathogen group context is required`);
      for (const organism of group.organisms) {
        assert(organismIds.has(organism.organismId), `${pathway.id}: unknown organism ${organism.organismId}`);
        assert(enums.likelihood.has(organism.likelihood), `${pathway.id}: invalid likelihood ${organism.likelihood}`);
      }
    }

    for (const regimen of pathway.empiricRegimens) {
      assert(!regimenIds.has(regimen.id), `Duplicate regimen id: ${regimen.id}`);
      regimenIds.add(regimen.id);
      assert(enums.rank.has(regimen.rank), `${regimen.id}: invalid rank`);
      assert(regimen.components.length > 0, `${regimen.id}: components are required`);
      validateSourceIds(regimen.sourceIds, sourceIds, `${regimen.id}/sources`);
      for (const component of regimen.components) {
        assert(enums.selection.has(component.selection), `${regimen.id}: invalid selection`);
        validateIdList(component.antibioticIds, antibioticIds, `${regimen.id}/antibiotics`);
      }
    }

    assert(Array.isArray(pathway.quizQuestions), `${pathway.id}: quizQuestions must be an array`);
    if (pathway.reviewStatus === "verified") assert(pathway.quizQuestions.length > 0, `${pathway.id}: verified pathway needs reviewed quiz templates`);
    for (const question of pathway.quizQuestions) {
      assert(!quizIds.has(question.id), `Duplicate infection quiz id: ${question.id}`);
      quizIds.add(question.id);
      assert(["disease-to-organism", "disease-to-antibiotic"].includes(question.type), `${question.id}: invalid quiz type`);
      assert(Array.isArray(question.choiceIds) && new Set(question.choiceIds).size === 4, `${question.id}: four unique choices are required`);
      assert(question.choiceIds.includes(question.correctId), `${question.id}: correctId must be one of choiceIds`);
      const knownChoices = question.type === "disease-to-organism" ? organismIds : antibioticIds;
      validateIdList(question.choiceIds, knownChoices, `${question.id}/choices`);
      validateSourceIds(question.sourceIds, sourceIds, `${question.id}/sources`);
      assert(question.sourceIds.every((id) => pathway.sourceIds.includes(id)), `${question.id}: quiz sources must belong to the pathway`);
    }

    for (const therapy of pathway.targetedTherapies) {
      assert(organismIds.has(therapy.organismId), `${pathway.id}: unknown targeted organism ${therapy.organismId}`);
      assert(enums.rank.has(therapy.rank), `${pathway.id}: invalid targeted rank`);
      validateIdList(therapy.antibioticIds, antibioticIds, `${pathway.id}/targeted antibiotics`);
      validateSourceIds(therapy.sourceIds, sourceIds, `${pathway.id}/targeted sources`);
    }

    return { ...pathway, diseaseSlug: disease.slug, diseaseTitle: disease.title };
  });

  const output = { ...source, pathways };
  writeJson(OUTPUT_PATH, output);
  const snapshot = buildSnapshot();
  const expectedToc = ["감염", "G(+)", "G(-)", "기타 감염질환", "혐기성균", "바이러스", "진균", "원생동물", "기생충", "발열", "원내감염", "지역사회 감염"];
  assert(snapshot.markdownCount === 87, `Infection specialty structure changed: expected 87 Markdown notes, got ${snapshot.markdownCount}`);
  assert(JSON.stringify(snapshot.tocHeadings) === JSON.stringify(expectedToc), "Infection specialty pathogen-centered TOC order changed");
  writeJson(SNAPSHOT_PATH, snapshot);
  const currentYear = new Date().getUTCFullYear();
  const visiblePathways = pathways.filter((item) => ["verified", "reviewed"].includes(item.reviewStatus));
  writeJson(MAINTENANCE_PATH, {
    generatedAt: new Date().toISOString(),
    summary: {
      pathways: pathways.length,
      verifiedPathways: pathways.filter((item) => item.reviewStatus === "verified").length,
      visibleInClinicalUi: visiblePathways.length,
      hiddenFromClinicalUi: pathways.filter((item) => !["verified", "reviewed"].includes(item.reviewStatus)).length,
      reviewedQuizQuestions: pathways.filter((item) => item.reviewStatus === "verified").reduce((sum, item) => sum + item.quizQuestions.length, 0),
      organisms: spectrum.organisms.length,
      organismNotesLinked: spectrum.organisms.filter((item) => item.noteSlug).length,
      antibiotics: spectrum.antibiotics.length,
    },
    clinicalAnchorAudit: { missingAntibiotics, missingOrganisms },
    hiddenPathways: pathways.filter((item) => !["verified", "reviewed"].includes(item.reviewStatus)).map((item) => ({ id: item.id, status: item.reviewStatus, sourceIds: item.sourceIds })),
    sourceReviewDue: source.sources.filter((item) => currentYear - Number(item.year) >= 5).map((item) => ({ id: item.id, year: item.year, usedByVerifiedPathways: pathways.filter((pathway) => pathway.reviewStatus === "verified" && pathway.sourceIds.includes(item.id)).map((pathway) => pathway.id) })),
  });

  const manifest = readJson(MANIFEST_PATH);
  manifest.domains.infectionPathways = {
    count: visiblePathways.length,
    source: "10 Hubs/01 감염 Hub/_data/infection-pathways.json",
  };
  writeJson(MANIFEST_PATH, manifest);

  console.log(JSON.stringify({ ok: true, pathways: pathways.length, verified: pathways.filter((item) => item.reviewStatus === "verified").length }, null, 2));
}

main();
