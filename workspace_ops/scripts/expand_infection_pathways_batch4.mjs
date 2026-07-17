import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "..");
const diseaseRoot = path.join(root, "source_notes", "02 Diseases");
const infectionDirName = fs.readdirSync(diseaseRoot, { withFileTypes: true }).find((entry) => entry.isDirectory() && entry.name.startsWith("08 "))?.name;
if (!infectionDirName) throw new Error("Infection specialty directory was not found.");
const infectionDir = path.join(diseaseRoot, infectionDirName);
const sourcePath = path.join(infectionDir, "_data", "infection-pathways.json");
const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const reviewedAt = "2026-07-18";

function infectionFile(englishName) {
  const filename = fs.readdirSync(infectionDir).find((entry) => entry.endsWith(".md") && entry.includes(englishName));
  if (!filename) throw new Error(`Missing infection note for ${englishName}`);
  return `${infectionDirName}/${filename}`;
}

const sources = [
  { id: "cdc-strep-2025", label: "CDC Clinical Guidance for Group A Streptococcal Pharyngitis", url: "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html", tier: "A", year: "2025" },
  { id: "cdc-lyme-2026", label: "CDC Clinical Care of Erythema Migrans", url: "https://www.cdc.gov/lyme/hcp/clinical-care/erythema-migrans-rash.html", tier: "A", year: "2026" },
  { id: "idsa-lyme-2020", label: "AAN/ACR/IDSA Lyme Disease Guideline", url: "https://www.idsociety.org/practice-guideline/lyme-disease/", tier: "A", year: "2020" },
  { id: "cdc-leptospirosis-2026", label: "CDC Clinical Overview of Leptospirosis", url: "https://www.cdc.gov/leptospirosis/hcp/clinical-overview/index.html", tier: "A", year: "2026" },
  { id: "cdc-leptospirosis-yellowbook-2025", label: "CDC Yellow Book: Leptospirosis", url: "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/leptospirosis.html", tier: "A", year: "2025" },
  { id: "cdc-rickettsial-2025", label: "CDC Yellow Book: Rickettsial Diseases", url: "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/rickettsial-diseases.html", tier: "A", year: "2025" },
  { id: "cdc-rickettsial-mmw-2016", label: "CDC MMWR Tickborne Rickettsial Diseases", url: "https://www.cdc.gov/mmwr/volumes/65/rr/rr6502a1-2.htm", tier: "A", year: "2016" },
  { id: "cdc-cat-scratch-2026", label: "CDC Clinical Overview of Cat Scratch Disease", url: "https://www.cdc.gov/bartonella/hcp/clinical-overview/cat-scratch-disease.html", tier: "A", year: "2026" },
  { id: "pubmed-cat-scratch-1998", label: "Azithromycin for Cat Scratch Disease Randomized Trial", url: "https://pubmed.ncbi.nlm.nih.gov/9655532/", tier: "B", year: "1998" },
  { id: "cdc-salmonella-2024", label: "CDC Clinical Overview of Salmonellosis", url: "https://www.cdc.gov/salmonella/hcp/clinical-overview/index.html", tier: "A", year: "2024" },
  { id: "idsa-infectious-diarrhea-2017", label: "IDSA Infectious Diarrhea Guideline", url: "https://www.idsociety.org/practice-guideline/infectious-diarrhea/", tier: "A", year: "2017" },
  { id: "cdc-shigella-2024", label: "CDC Clinical Care of Shigellosis", url: "https://www.cdc.gov/shigella/hcp/clinical-care/index.html", tier: "A", year: "2024" },
  { id: "cdc-typhoid-2024", label: "CDC Clinical Guidance for Typhoid and Paratyphoid Fever", url: "https://www.cdc.gov/typhoid-fever/hcp/clinical-guidance/index.html", tier: "A", year: "2024" },
  { id: "cdc-typhoid-yellowbook-2025", label: "CDC Yellow Book: Typhoid and Paratyphoid Fever", url: "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/typhoid-and-paratyphoid-fever.html", tier: "A", year: "2025" },
  { id: "cdc-relapsing-fever-2024", label: "CDC Clinical Guidance for Hard Tick Relapsing Fever", url: "https://www.cdc.gov/relapsing-fever/hcp/hard-tick-relapsing-fever/index.html", tier: "A", year: "2024" },
  { id: "cdc-campylobacter-2024", label: "CDC Treatment of Campylobacter Infection", url: "https://www.cdc.gov/campylobacter/treatment/index.html", tier: "A", year: "2024" },
  { id: "cdc-campylobacter-resistance-2022", label: "CDC Campylobacter Antibiotic Resistance", url: "https://archive.cdc.gov/www_cdc_gov/campylobacter/campy-antibiotic-resistance.html", tier: "A", year: "2022" },
  { id: "cdc-cholera-2025", label: "CDC Yellow Book: Cholera", url: "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/cholera.html", tier: "A", year: "2025" },
  { id: "cdc-cholera-who-2024", label: "CDC/WHO Cholera Treatment Reference", url: "https://www.cdc.gov/cholera/media/pdfs/2024/07/Chapter-5-Laboratory-methods-for-the-diagnosis-of-epidemic-dysentery-and-cholera_ENG-5.pdf", tier: "A", year: "2024" },
  { id: "cdc-q-fever-2025", label: "CDC Clinical Guidance for Q Fever", url: "https://www.cdc.gov/q-fever/hcp/clinical-guidance/index.html", tier: "A", year: "2025" },
  { id: "cdc-q-fever-mmw-2013", label: "CDC MMWR Diagnosis and Management of Q Fever", url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6203a1.htm", tier: "A", year: "2013" },
];

const pathogens = [
  ["borrelia_burgdorferi", "Borrelia burgdorferi"], ["leptospira", "Leptospira spp."], ["rickettsia", "Rickettsia spp."], ["bartonella_henselae", "Bartonella henselae"], ["salmonella_nontyphoidal", "Non-typhoidal Salmonella"], ["shigella", "Shigella spp."], ["salmonella_typhi", "Salmonella Typhi/Paratyphi"], ["borrelia_relapsing", "Relapsing fever Borrelia"], ["campylobacter", "Campylobacter jejuni/coli"], ["v_cholerae", "Vibrio cholerae"], ["coxiella_burnetii", "Coxiella burnetii"],
].map(([id, label]) => ({ id, label, aliases: [] }));

const component = (antibioticIds, selection = "one-of") => ({ antibioticIds, selection });
const pathogen = (organismId, likelihood, notes = []) => ({ organismId, likelihood, notes });
const regimen = (id, context, rank, antibioticIds, sourceIds, conditions = [], notes = []) => ({ id, context, rank, components: [component(antibioticIds)], conditions, avoidWhen: [], notes, sourceIds });
const quiz = (id, prompt, choiceIds, correctId, sourceIds) => ({ id, type: "disease-to-antibiotic", prompt, choiceIds, correctId, explanation: "Select treatment only in the clinical context stated; microbiology, severity, patient factors, and local susceptibility can change the regimen.", sourceIds });
const pathway = ({ id, displayName, sourceFile, site, pathogens: group, regimens, sourceIds, quizDrug, notes = [], exclusions = [] }) => ({
  id, displayName, aliases: [], diseaseSourceFile: sourceFile, infectionSite: site, setting: "community", population: ["adult", "pediatric"], severity: ["uncomplicated", "severe"], exclusions,
  diagnosticNotes: ["Confirm the clinical syndrome and obtain appropriate microbiologic testing when it will change management.", ...notes], sourceControlNotes: [], stewardshipNotes: ["Use the narrowest effective agent and reassess once microbiology and clinical response are available."],
  pathogenGroups: [{ context: "typical-clinical-presentation", organisms: group }], empiricRegimens: regimens, targetedTherapies: [], sourceIds,
  quizQuestions: [quiz(`${id}-first-line`, `For the typical outpatient presentation of ${displayName}, which listed agent is a preferred option when antimicrobial treatment is indicated?`, [quizDrug, "cefepime", "vancomycin", "nitrofurantoin"], quizDrug, sourceIds)],
  reviewStatus: "verified", reviewedBy: "Codex official-guideline cross-check", reviewedAt,
});

const pathways = [
  pathway({ id: "erysipelas", displayName: "Erysipelas", sourceFile: infectionFile("Erysipelas"), site: "skin-soft-tissue", pathogens: [pathogen("streptococci", "common"), pathogen("mssa", "uncommon")], sourceIds: ["idsa-ssti-2014", "cdc-strep-2025"], quizDrug: "amoxicillin", regimens: [regimen("erysipelas-oral", "mild-outpatient", "preferred", ["amoxicillin", "cephalexin"], ["idsa-ssti-2014", "cdc-strep-2025"]), regimen("erysipelas-iv", "severe-or-unable-to-take-oral", "preferred", ["cefazolin", "ceftriaxone"], ["idsa-ssti-2014", "cdc-strep-2025"])], exclusions: ["purulent-abscess"] }),
  pathway({ id: "early-lyme-disease", displayName: "Early Lyme disease", sourceFile: infectionFile("Lyme Disease"), site: "tick-borne", pathogens: [pathogen("borrelia_burgdorferi", "common")], sourceIds: ["cdc-lyme-2026", "idsa-lyme-2020"], quizDrug: "doxycycline", regimens: [regimen("lyme-erythema-migrans", "localized-erythema-migrans", "preferred", ["doxycycline", "amoxicillin", "cefuroxime"], ["cdc-lyme-2026", "idsa-lyme-2020"])], notes: ["This pathway addresses localized erythema migrans. Neurologic, cardiac, or articular disease needs syndrome-specific assessment."] }),
  pathway({ id: "leptospirosis", displayName: "Leptospirosis", sourceFile: infectionFile("Leptospirosis"), site: "zoonotic-systemic", pathogens: [pathogen("leptospira", "common")], sourceIds: ["cdc-leptospirosis-2026", "cdc-leptospirosis-yellowbook-2025"], quizDrug: "doxycycline", regimens: [regimen("lepto-mild", "mild-outpatient", "preferred", ["doxycycline", "amoxicillin", "ampicillin", "azithromycin"], ["cdc-leptospirosis-2026", "cdc-leptospirosis-yellowbook-2025"]), regimen("lepto-severe", "severe-hospitalized", "preferred", ["benzylpenicillin", "ceftriaxone", "cefotaxime"], ["cdc-leptospirosis-2026", "cdc-leptospirosis-yellowbook-2025"])], notes: ["Start treatment promptly for high clinical suspicion; severe disease requires organ support and close monitoring."] }),
  pathway({ id: "tickborne-rickettsial-disease", displayName: "Tick-borne rickettsial disease", sourceFile: infectionFile("Rickettsial Disease"), site: "tick-borne", pathogens: [pathogen("rickettsia", "common")], sourceIds: ["cdc-rickettsial-2025", "cdc-rickettsial-mmw-2016"], quizDrug: "doxycycline", regimens: [regimen("rickettsial-suspected", "suspected-rickettsiosis", "preferred", ["doxycycline"], ["cdc-rickettsial-2025", "cdc-rickettsial-mmw-2016"])], notes: ["Do not delay doxycycline while awaiting confirmatory testing when the presentation is compatible."] }),
  pathway({ id: "cat-scratch-disease", displayName: "Cat scratch disease", sourceFile: infectionFile("Cat Scratch Disease"), site: "lymphatic", pathogens: [pathogen("bartonella_henselae", "common")], sourceIds: ["cdc-cat-scratch-2026", "pubmed-cat-scratch-1998"], quizDrug: "azithromycin", regimens: [regimen("csd-typical", "typical-lymphadenitis-when-treatment-selected", "conditional", ["azithromycin"], ["cdc-cat-scratch-2026", "pubmed-cat-scratch-1998"])], notes: ["Typical disease is often self-limited. Treat severe, atypical, or immunocompromised presentations with specialist input."], exclusions: ["culture-negative-endocarditis"] }),
  pathway({ id: "nontyphoidal-salmonellosis", displayName: "Non-typhoidal salmonellosis", sourceFile: infectionFile("Non-typhoidal Salmonella"), site: "gastrointestinal", pathogens: [pathogen("salmonella_nontyphoidal", "common")], sourceIds: ["cdc-salmonella-2024", "idsa-infectious-diarrhea-2017"], quizDrug: "azithromycin", regimens: [regimen("nts-severe-or-invasive", "severe-or-high-risk-for-invasive-disease", "conditional", ["azithromycin", "ciprofloxacin", "ceftriaxone"], ["cdc-salmonella-2024", "idsa-infectious-diarrhea-2017"])], notes: ["Most uncomplicated diarrheal illness needs rehydration alone; use susceptibility testing when antibiotics are indicated."], exclusions: ["uncomplicated-immunocompetent-gastroenteritis"] }),
  pathway({ id: "shigellosis", displayName: "Shigellosis", sourceFile: infectionFile("Dysentery"), site: "gastrointestinal", pathogens: [pathogen("shigella", "common")], sourceIds: ["cdc-shigella-2024", "idsa-infectious-diarrhea-2017"], quizDrug: "azithromycin", regimens: [regimen("shigella-severe", "severe-or-prolonged-disease", "conditional", ["azithromycin", "ciprofloxacin", "ceftriaxone"], ["cdc-shigella-2024", "idsa-infectious-diarrhea-2017"])], notes: ["Mild illness is often self-limited; choose therapy from susceptibility results because resistance is common."], exclusions: ["mild-self-limited-diarrhea"] }),
  pathway({ id: "typhoid-paratyphoid-fever", displayName: "Typhoid and paratyphoid fever", sourceFile: infectionFile("Typhoid Fever"), site: "systemic-enteric", pathogens: [pathogen("salmonella_typhi", "common")], sourceIds: ["cdc-typhoid-2024", "cdc-typhoid-yellowbook-2025"], quizDrug: "ceftriaxone", regimens: [regimen("typhoid-most-travel-regions", "uncomplicated-or-hospitalized-after-most-travel", "preferred", ["ceftriaxone", "azithromycin"], ["cdc-typhoid-2024", "cdc-typhoid-yellowbook-2025"]), regimen("typhoid-iraq-pakistan-severe", "complicated-after-iraq-or-pakistan-travel", "preferred", ["meropenem"], ["cdc-typhoid-2024", "cdc-typhoid-yellowbook-2025"])], notes: ["Travel history and susceptibility data are essential; do not use fluoroquinolones empirically in this pathway."] }),
  pathway({ id: "relapsing-fever", displayName: "Relapsing fever", sourceFile: infectionFile("Relapsing Fever"), site: "tick-borne", pathogens: [pathogen("borrelia_relapsing", "common")], sourceIds: ["cdc-relapsing-fever-2024", "cdc-rickettsial-2025"], quizDrug: "doxycycline", regimens: [regimen("relapsing-fever-oral", "uncomplicated", "preferred", ["doxycycline", "amoxicillin"], ["cdc-relapsing-fever-2024", "cdc-rickettsial-2025"])], notes: ["Observe for a Jarisch-Herxheimer reaction after antimicrobial initiation."] }),
  pathway({ id: "campylobacteriosis", displayName: "Campylobacter enteritis", sourceFile: infectionFile("Campylobacter"), site: "gastrointestinal", pathogens: [pathogen("campylobacter", "common")], sourceIds: ["cdc-campylobacter-2024", "cdc-campylobacter-resistance-2022"], quizDrug: "azithromycin", regimens: [regimen("campy-severe-or-high-risk", "severe-prolonged-or-high-risk", "conditional", ["azithromycin"], ["cdc-campylobacter-2024", "cdc-campylobacter-resistance-2022"])], notes: ["Most illness resolves without antibiotics; do not choose a fluoroquinolone empirically without local susceptibility support."], exclusions: ["mild-self-limited-enteritis"] }),
  pathway({ id: "cholera", displayName: "Cholera", sourceFile: infectionFile("Cholera"), site: "gastrointestinal", pathogens: [pathogen("v_cholerae", "common")], sourceIds: ["cdc-cholera-2025", "cdc-cholera-who-2024"], quizDrug: "doxycycline", regimens: [regimen("cholera-severe", "severe-or-high-output-diarrhea-after-rehydration", "conditional", ["doxycycline", "azithromycin"], ["cdc-cholera-2025", "cdc-cholera-who-2024"])], notes: ["Rehydration is the cornerstone. Use susceptibility and local outbreak guidance when selecting antibiotics."], exclusions: ["rehydration-alone-sufficient"] }),
  pathway({ id: "acute-q-fever", displayName: "Acute Q fever", sourceFile: infectionFile("Q Fever"), site: "zoonotic-systemic", pathogens: [pathogen("coxiella_burnetii", "common")], sourceIds: ["cdc-q-fever-2025", "cdc-q-fever-mmw-2013"], quizDrug: "doxycycline", regimens: [regimen("acute-q-fever", "symptomatic-suspected-or-confirmed-acute-disease", "preferred", ["doxycycline"], ["cdc-q-fever-2025", "cdc-q-fever-mmw-2013"]), regimen("acute-q-fever-pregnancy", "pregnancy-before-32-weeks", "conditional", ["trimethoprimsulfamethoxazole"], ["cdc-q-fever-2025", "cdc-q-fever-mmw-2013"])], notes: ["Chronic Q fever, pregnancy, vascular infection, and endocarditis require specialist-directed regimens beyond this acute pathway."] }),
  pathway({ id: "scrub-typhus", displayName: "Scrub typhus", sourceFile: infectionFile("Tsutsugamushi Disease"), site: "mite-borne", pathogens: [pathogen("rickettsia", "common", ["Orientia tsutsugamushi is managed within the rickettsial treatment framework."])], sourceIds: ["cdc-rickettsial-2025", "cdc-rickettsial-mmw-2016"], quizDrug: "doxycycline", regimens: [regimen("scrub-typhus-suspected", "suspected-scrub-typhus", "preferred", ["doxycycline"], ["cdc-rickettsial-2025", "cdc-rickettsial-mmw-2016"]), regimen("scrub-typhus-doxycycline-unsuitable", "pregnancy-or-doxycycline-unsuitable-with-specialist-input", "alternative", ["azithromycin"], ["cdc-rickettsial-2025", "cdc-rickettsial-mmw-2016"])], notes: ["Treat promptly when compatible fever, exposure history, and eschar or rash raise suspicion; do not wait for confirmatory testing."] }),];

const knownSources = new Set(data.sources.map((item) => item.id));
for (const source of sources) if (!knownSources.has(source.id)) data.sources.push(source);
const knownPathogens = new Set((data.pathogens ?? []).map((item) => item.id));
for (const item of pathogens) if (!knownPathogens.has(item.id)) data.pathogens.push(item);
const knownPathways = new Set(data.pathways.map((item) => item.id));
for (const item of pathways) if (!knownPathways.has(item.id)) data.pathways.push(item);
const catScratch = data.pathways.find((item) => item.id === "cat-scratch-disease");
if (catScratch) {
  const catScratchSources = ["cdc-cat-scratch-2026", "pubmed-cat-scratch-1998"];
  catScratch.sourceIds = catScratchSources;
  for (const item of catScratch.empiricRegimens) item.sourceIds = catScratchSources;
  for (const item of catScratch.quizQuestions) item.sourceIds = catScratchSources;
}data.reviewedAt = reviewedAt;
fs.writeFileSync(sourcePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ pathways: data.pathways.length, added: pathways.filter((item) => !knownPathways.has(item.id)).length }, null, 2));
