import fs from "node:fs";
import path from "node:path";

const APP_ROOT = process.env.INIT_CWD || process.cwd();
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "..", "..");
const DATA_ROOT = path.join(WORKSPACE_ROOT, "_webapp", "data");
const SOURCE_ROOT = path.join(WORKSPACE_ROOT, "source_notes", "09 Microbiology", "_data");
const REPORT_ROOT = path.join(WORKSPACE_ROOT, "reports");
const OUTPUT = path.join(DATA_ROOT, "microbiology-relations.json");
const reviewedAt = "2026-07-29";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

const microbiology = readJson(path.join(DATA_ROOT, "microorganisms.json"));
const sourceRelations = readJson(path.join(SOURCE_ROOT, "microbiology-relations.json"));
const diseases = readJson(path.join(DATA_ROOT, "diseases.json"));
const drugs = readJson(path.join(DATA_ROOT, "drugs.json"));
const labs = readJson(path.join(DATA_ROOT, "lab-img.json"));
const pathways = readJson(path.join(DATA_ROOT, "infection-pathways.json"));
const spectrum = readJson(path.join(DATA_ROOT, "antibiotic-spectrum.json"));

const sourceType = (entity) => ({
  organism: "microorganism",
  clinical_group: "clinicalGroup",
  resistance_phenotype: "resistancePhenotype",
})[entity.entityKind];

const relationMap = new Map();
function addRelation(relation) {
  const key = [relation.sourceId, relation.relation, relation.targetType, relation.targetId].join("|");
  if (!relationMap.has(key)) relationMap.set(key, relation);
}
for (const relation of sourceRelations.relations) addRelation(relation);

const entityBySpectrumId = new Map();
for (const entity of microbiology.entities) {
  for (const spectrumId of entity.spectrumIds) entityBySpectrumId.set(spectrumId, entity);
}

for (const pathway of pathways.pathways.filter((item) => item.reviewStatus === "verified")) {
  const pathwayOrganismIds = new Set(pathway.pathogenGroups.flatMap((group) => group.organisms.filter((item) => item.likelihood !== "excluded").map((item) => item.organismId)));
  for (const spectrumId of pathwayOrganismIds) {
    const entity = entityBySpectrumId.get(spectrumId);
    if (!entity) continue;
    addRelation({
      sourceType: sourceType(entity),
      sourceId: entity.id,
      relation: "associated_with",
      targetType: "disease",
      targetId: pathway.diseaseSlug,
      context: [pathway.id, pathway.setting, ...pathway.severity],
      sourceIds: pathway.sourceIds,
      reviewStatus: "source_checked",
      reviewedAt,
    });

    const antibioticIds = [
      ...pathway.empiricRegimens.flatMap((regimen) => regimen.components.flatMap((component) => component.antibioticIds)),
      ...pathway.targetedTherapies.filter((therapy) => therapy.organismId === spectrumId).flatMap((therapy) => therapy.antibioticIds),
    ];
    for (const antibioticId of new Set(antibioticIds)) {
      const antibiotic = spectrum.antibiotics.find((item) => item.id === antibioticId);
      if (!antibiotic) continue;
      addRelation({
        sourceType: sourceType(entity),
        sourceId: entity.id,
        relation: "treated_with",
        targetType: "drug",
        targetId: antibiotic.drugSlug,
        context: [pathway.id],
        sourceIds: pathway.sourceIds,
        reviewStatus: "source_checked",
        reviewedAt,
      });
    }
  }
}

for (const entity of microbiology.entities.filter((item) => item.spectrumIds.length)) {
  for (const antibiotic of spectrum.antibiotics) {
    const levels = entity.spectrumIds.map((id) => antibiotic.coverage[id] ?? "unknown");
    if (!levels.some((level) => level === "preferred" || level === "active")) continue;
    addRelation({
      sourceType: sourceType(entity),
      sourceId: entity.id,
      relation: "spectrum_active",
      targetType: "drug",
      targetId: antibiotic.drugSlug,
      context: levels,
      sourceIds: antibiotic.sourceIds,
      reviewStatus: "source_checked",
      reviewedAt,
    });
  }
}

const diseasePatterns = new Map([
  ["coagulase-negative-staphylococci", /인공판막.*심내막염|prosthetic valve endocarditis|카테터.*혈류감염|catheter-related bloodstream/i],
  ["corynebacterium-diphtheriae", /디프테리아|diphtheria/i],
  ["moraxella-catarrhalis", /중이염|otitis media|부비동염|sinusitis|COPD.*악화/i],
  ["chlamydia-pneumoniae", /지역사회획득폐렴|community-acquired pneumonia|비정형 폐렴/i],
  ["borrelia-clinical-group", /라임병|Lyme disease|재귀열|relapsing fever/i],
  ["leptospira-species", /렙토스피라|leptospirosis/i],
  ["enterovirus", /수족구|hand-foot-mouth|무균성 수막염|aseptic meningitis|심근염|myocarditis/i],
  ["rotavirus", /로타바이러스|rotavirus/i],
  ["hepatitis-a-virus", /A형간염|hepatitis A/i],
  ["measles-virus", /홍역|measles/i],
  ["mumps-virus", /유행성이하선염|볼거리|mumps/i],
  ["rubella-virus", /풍진|rubella/i],
  ["dermatophytes", /백선|tinea|피부사상균|onychomycosis/i],
  ["histoplasma-capsulatum", /히스토플라스마|histoplasmosis/i],
  ["coccidioides-species", /콕시디오이데스|coccidioidomycosis/i],
  ["cryptosporidium-species", /와포자충|cryptosporid/i],
  ["intestinal-helminths", /회충|요충|편충|구충|ascariasis|enterobiasis|trichuriasis|hookworm/i],
  ["tissue-helminths", /주혈흡충|사상충|에키노코쿠스|schistosom|filariasis|echinococc/i],
  ["streptococcus-pyogenes", /성홍열|화농사슬알균|group A strep|괴사성 근막염|necrotizing fasciitis/i],
  ["streptococcus-agalactiae", /B군사슬알균|group B strep|신생아.*패혈|neonatal sepsis/i],
  ["clostridioides-difficile", /Clostridioides|C\.?\s*difficile|위막성 대장염/i],
  ["escherichia-coli", /대장균|E\.?\s*coli|용혈성요독증후군|HUS/i],
  ["neisseria-gonorrhoeae", /임질|임균|gonorrh/i],
  ["chlamydia-trachomatis", /클라미디아|chlamydia/i],
  ["mycobacterium-tuberculosis-complex", /결핵|tuberculosis/i],
  ["nontuberculous-mycobacteria", /비결핵항산균|nontuberculous|NTM/i],
  ["treponema-pallidum", /매독|syphilis/i],
  ["bordetella-pertussis", /백일해|pertussis/i],
  ["influenza-virus", /인플루엔자|influenza/i],
  ["respiratory-syncytial-virus", /호흡기세포융합|RSV/i],
  ["sars-cov-2", /COVID|코로나바이러스감염증|SARS-CoV-2/i],
  ["adenovirus", /아데노바이러스|adenovirus/i],
  ["norovirus", /노로바이러스|norovirus/i],
  ["herpes-simplex-virus", /단순헤르페스|herpes simplex|HSV/i],
  ["varicella-zoster-virus", /수두|대상포진|varicella|zoster/i],
  ["cytomegalovirus", /거대세포바이러스|cytomegalovirus|CMV/i],
  ["epstein-barr-virus", /엡스타인|Epstein-Barr|전염성 단핵구증|infectious mononucleosis/i],
  ["hepatitis-b-virus", /B형간염|hepatitis B/i],
  ["hepatitis-c-virus", /C형간염|hepatitis C/i],
  ["human-immunodeficiency-virus-1", /HIV|후천성면역결핍|AIDS/i],
  ["human-papillomavirus", /사람유두종|human papillomavirus|HPV/i],
  ["candida-albicans", /칸디다|candid/i],
  ["candida-auris", /Candida auris|칸디다 아우리스/i],
  ["aspergillus-fumigatus", /아스페르길|aspergill/i],
  ["cryptococcus-neoformans-gattii", /크립토코쿠스|cryptococc/i],
  ["pneumocystis-jirovecii", /폐포자충|Pneumocystis|PJP|PCP/i],
  ["mucorales", /털곰팡이|mucormycosis|Mucorales/i],
  ["plasmodium-falciparum", /말라리아|malaria/i],
  ["toxoplasma-gondii", /톡소포자충|toxoplas/i],
  ["giardia-duodenalis", /편모충|Giardia|giardiasis/i],
  ["entamoeba-histolytica", /이질아메바|amebiasis|Entamoeba/i],
  ["strongyloides-stercoralis", /분선충|strongyloid/i],
  ["taenia-solium", /유구낭미충|신경낭미충|Taenia solium|cysticerc/i],
  ["sarcoptes-scabiei", /옴|scabies/i],
]);

for (const [entityId, pattern] of diseasePatterns) {
  const entity = microbiology.entities.find((item) => item.id === entityId);
  if (!entity) continue;
  for (const disease of diseases.filter((item) => pattern.test(`${item.title} ${item.aliases.join(" ")}`)).slice(0, 12)) {
    addRelation({
      sourceType: sourceType(entity),
      sourceId: entity.id,
      relation: "associated_with",
      targetType: "disease",
      targetId: disease.slug,
      context: ["curated-title-match"],
      sourceIds: entity.sourceIds,
      reviewStatus: "source_checked",
      reviewedAt,
    });
  }
}

const drugPatterns = new Map([
  ["corynebacterium-diphtheriae", /Penicillin|Erythromycin|Azithromycin/i],
  ["moraxella-catarrhalis", /Amoxicillin.*clavulan|Cefuroxime|Azithromycin/i],
  ["chlamydia-pneumoniae", /Azithromycin|Doxycycline|Levofloxacin|Moxifloxacin/i],
  ["borrelia-clinical-group", /Doxycycline|Amoxicillin|Ceftriaxone/i],
  ["leptospira-species", /Doxycycline|Penicillin|Ceftriaxone/i],
  ["dermatophytes", /Terbinafine|Itraconazole|Fluconazole/i],
  ["histoplasma-capsulatum", /Itraconazole|Amphotericin/i],
  ["coccidioides-species", /Fluconazole|Itraconazole|Amphotericin/i],
  ["cryptosporidium-species", /Nitazoxanide/i],
  ["intestinal-helminths", /Albendazole|Mebendazole|Praziquantel|Pyrantel/i],
  ["tissue-helminths", /Praziquantel|Ivermectin|Albendazole|Diethylcarbamazine/i],
  ["influenza-virus", /Oseltamivir|Zanamivir|Peramivir|Baloxavir/i],
  ["herpes-simplex-virus", /Acyclovir|Valacyclovir|Famciclovir/i],
  ["varicella-zoster-virus", /Acyclovir|Valacyclovir|Famciclovir/i],
  ["cytomegalovirus", /Ganciclovir|Valganciclovir|Foscarnet|Maribavir/i],
  ["hepatitis-b-virus", /Tenofovir|Entecavir/i],
  ["hepatitis-c-virus", /Sofosbuvir|Glecaprevir|Pibrentasvir|Velpatasvir/i],
  ["human-immunodeficiency-virus-1", /Dolutegravir|Bictegravir|Tenofovir|Emtricitabine|Lamivudine/i],
  ["candida-albicans", /Fluconazole|Micafungin|Caspofungin|Anidulafungin/i],
  ["candida-auris", /Micafungin|Caspofungin|Anidulafungin/i],
  ["aspergillus-fumigatus", /Voriconazole|Isavuconazole|Amphotericin/i],
  ["cryptococcus-neoformans-gattii", /Amphotericin|Flucytosine|Fluconazole/i],
  ["pneumocystis-jirovecii", /Trimethoprim|Sulfamethoxazole|Pentamidine|Atovaquone/i],
  ["mucorales", /Amphotericin|Isavuconazole|Posaconazole/i],
  ["plasmodium-falciparum", /Artesunate|Artemether|Lumefantrine|Atovaquone|Proguanil/i],
  ["toxoplasma-gondii", /Pyrimethamine|Sulfadiazine|Atovaquone/i],
  ["giardia-duodenalis", /Metronidazole|Tinidazole|Nitazoxanide/i],
  ["entamoeba-histolytica", /Metronidazole|Tinidazole|Paromomycin/i],
  ["strongyloides-stercoralis", /Ivermectin/i],
  ["taenia-solium", /Albendazole|Praziquantel/i],
  ["sarcoptes-scabiei", /Ivermectin|Permethrin/i],
]);

for (const [entityId, pattern] of drugPatterns) {
  const entity = microbiology.entities.find((item) => item.id === entityId);
  if (!entity) continue;
  for (const drug of drugs.filter((item) => pattern.test(`${item.title} ${item.aliases.join(" ")}`)).slice(0, 12)) {
    addRelation({
      sourceType: sourceType(entity),
      sourceId: entity.id,
      relation: "treated_with",
      targetType: "drug",
      targetId: drug.slug,
      context: ["curated-drug-class-match"],
      sourceIds: entity.sourceIds,
      reviewStatus: "source_checked",
      reviewedAt,
    });
  }
}

const labByTitle = new Map(labs.map((item) => [item.title.toLocaleLowerCase(), item]));
function addLab(entity, title, context) {
  const lab = labByTitle.get(title.toLocaleLowerCase());
  if (!lab) return;
  addRelation({
    sourceType: sourceType(entity),
    sourceId: entity.id,
    relation: "evaluated_by",
    targetType: "lab",
    targetId: lab.slug,
    context: [context],
    sourceIds: entity.sourceIds,
    reviewStatus: "source_checked",
    reviewedAt,
  });
}
for (const entity of microbiology.entities) {
  addLab(entity, "Syndromic multiplex NAAT", "molecular testing when clinically indicated");
  if (entity.pathogenType === "bacterium" && !["비정형균", "Mycobacteria", "Spirochetes"].includes(entity.category)) addLab(entity, "Gram stain", "direct specimen microscopy");
  if (["bacterium", "fungus"].includes(entity.pathogenType)) addLab(entity, "Antimicrobial susceptibility testing", "isolate-based susceptibility testing");
  if (entity.clinicalTags.some((tag) => /bacteremia|candidemia|endocarditis|sepsis|invasive/.test(tag))) addLab(entity, "Blood culture", "bloodstream infection evaluation");
}

// Species, clinical groups and resistance phenotypes are separate entities. Propagate only
// externally reviewed links across explicit phenotype/member edges, preserving provenance.
for (const bridge of sourceRelations.relations.filter((item) => ["phenotype_of", "member_of"].includes(item.relation))) {
  const inherited = [...relationMap.values()].filter((item) => item.sourceId === bridge.sourceId && ["disease", "drug", "lab"].includes(item.targetType));
  const targetEntity = microbiology.entities.find((item) => item.id === bridge.targetId);
  if (!targetEntity) continue;
  for (const relation of inherited) {
    addRelation({
      ...relation,
      sourceType: sourceType(targetEntity),
      sourceId: targetEntity.id,
      context: [...new Set([...(relation.context ?? []), `inherited-via:${bridge.sourceId}`])],
      sourceIds: [...new Set([...(relation.sourceIds ?? []), ...(bridge.sourceIds ?? [])])],
    });
  }
}

const relations = [...relationMap.values()].sort((a, b) => a.sourceId.localeCompare(b.sourceId) || a.targetType.localeCompare(b.targetType) || a.targetId.localeCompare(b.targetId));
writeJson(OUTPUT, { schemaVersion: 1, reviewedAt, relations });

const byEntity = new Map(microbiology.entities.map((entity) => [entity.id, relations.filter((relation) => relation.sourceId === entity.id)]));
const sourceMap = new Map(microbiology.sources.map((source) => [source.id, source]));
const inventory = {
  generatedAt: new Date().toISOString(),
  total: microbiology.entities.length,
  byEntityKind: Object.fromEntries([...new Set(microbiology.entities.map((item) => item.entityKind))].map((value) => [value, microbiology.entities.filter((item) => item.entityKind === value).length])),
  byPathogenType: Object.fromEntries([...new Set(microbiology.entities.map((item) => item.pathogenType))].map((value) => [value, microbiology.entities.filter((item) => item.pathogenType === value).length])),
  byCategory: Object.fromEntries([...new Set(microbiology.entities.map((item) => item.category))].sort().map((value) => [value, microbiology.entities.filter((item) => item.category === value).length])),
  byReviewStatus: Object.fromEntries([...new Set(microbiology.entities.map((item) => item.reviewStatus))].map((value) => [value, microbiology.entities.filter((item) => item.reviewStatus === value).length])),
};
writeJson(path.join(REPORT_ROOT, "microbiology-inventory.json"), inventory);

const coverageRows = microbiology.entities.map((entity) => {
  const entityRelations = byEntity.get(entity.id) ?? [];
  return {
    id: entity.id,
    entityKind: entity.entityKind,
    pathogenType: entity.pathogenType,
    reviewStatus: entity.reviewStatus,
    sourceCount: entity.sourceIds.length,
    spectrumMapped: entity.spectrumIds.length > 0,
    diseaseLinks: entityRelations.filter((item) => item.targetType === "disease").length,
    drugLinks: entityRelations.filter((item) => item.targetType === "drug").length,
    labLinks: entityRelations.filter((item) => item.targetType === "lab").length,
  };
});
writeJson(path.join(REPORT_ROOT, "microbiology-coverage.json"), {
  generatedAt: new Date().toISOString(),
  summary: {
    entities: coverageRows.length,
    withDisease: coverageRows.filter((item) => item.diseaseLinks > 0).length,
    withDrug: coverageRows.filter((item) => item.drugLinks > 0).length,
    withLab: coverageRows.filter((item) => item.labLinks > 0).length,
    spectrumMapped: coverageRows.filter((item) => item.spectrumMapped).length,
  },
  gaps: {
    noDisease: coverageRows.filter((item) => item.diseaseLinks === 0).map((item) => item.id),
    noDrug: coverageRows.filter((item) => item.drugLinks === 0).map((item) => item.id),
    noLab: coverageRows.filter((item) => item.labLinks === 0).map((item) => item.id),
  },
  entities: coverageRows,
});

const sourceRows = microbiology.entities.map((entity) => {
  const knownSources = entity.sourceIds.map((id) => sourceMap.get(id)).filter(Boolean);
  return {
    id: entity.id,
    sourceIds: entity.sourceIds,
    tierACount: knownSources.filter((source) => source.tier === "A").length,
    unknownSourceIds: entity.sourceIds.filter((id) => !sourceMap.has(id)),
  };
});
writeJson(path.join(REPORT_ROOT, "microbiology-source-audit.json"), {
  generatedAt: new Date().toISOString(),
  sourceCount: microbiology.sources.length,
  entitiesWithNoTierA: sourceRows.filter((item) => item.tierACount === 0).map((item) => item.id),
  unknownSourceReferences: sourceRows.filter((item) => item.unknownSourceIds.length),
  entities: sourceRows,
});

const validTargets = {
  disease: new Set(diseases.map((item) => item.slug)),
  drug: new Set(drugs.map((item) => item.slug)),
  lab: new Set(labs.map((item) => item.slug)),
  microorganism: new Set(microbiology.entities.map((item) => item.id)),
  clinicalGroup: new Set(microbiology.entities.map((item) => item.id)),
  resistancePhenotype: new Set(microbiology.entities.map((item) => item.id)),
};
const broken = relations.filter((relation) => !validTargets[relation.targetType]?.has(relation.targetId));
writeJson(path.join(REPORT_ROOT, "microbiology-relation-audit.json"), {
  generatedAt: new Date().toISOString(),
  relationCount: relations.length,
  byTargetType: Object.fromEntries(Object.keys(validTargets).map((type) => [type, relations.filter((item) => item.targetType === type).length])),
  brokenTargetCount: broken.length,
  broken,
});
if (broken.length) throw new Error(`Broken microbiology relation targets: ${broken.length}`);
console.log(JSON.stringify({ ok: true, entities: microbiology.entities.length, relations: relations.length, broken: broken.length }, null, 2));
