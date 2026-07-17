import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const DISEASE_ROOT = path.join(ROOT, "source_notes", "02 Diseases");
const INFECTION_ROOT = fs.readdirSync(DISEASE_ROOT, { withFileTypes: true })
  .find((entry) => entry.isDirectory() && entry.name.startsWith("08 "));

if (!INFECTION_ROOT) throw new Error("Infection specialty directory was not found.");

const infectionDir = path.join(DISEASE_ROOT, INFECTION_ROOT.name);
const pathwayFile = path.join(infectionDir, "_data", "infection-pathways.json");
const registryFile = path.join(infectionDir, "_data", "infection-note-registry.json");
const reportFile = path.join(ROOT, "reports", "infection-specialty-coverage.json");

const categories = {
  "antibacterial-pathway": "Bacterial disease or syndrome requiring a disease-to-pathogen-to-antibiotic pathway.",
  "organism-reference": "Organism reference; keep in the organism-to-antibiotic explorer rather than creating a disease pathway.",
  "non-antibacterial-infection": "Viral, fungal, parasitic, or toxin-mediated condition; excluded from the antibiotic pathway model.",
  "antimicrobial-model-gap": "Antimicrobial disease, but the required core drug or non-antibiotic treatment component is not represented in the current antibiotic model.",
  "specialist-pathway-review": "Antibacterial disease with highly individualized or prolonged treatment; retain as an explicit specialist-review queue rather than publishing an oversimplified pathway.",
  "syndrome-or-host-context": "Syndrome, host state, or broad presentation; only link a pathway when a clinical bacterial syndrome is explicitly defined.",
  "index-or-taxonomy": "Navigation, taxonomy, or overview note; no individual treatment pathway.",
};

const filenameIncludes = (file, terms) => terms.some((term) => file.includes(term));

function classify(filename) {
  if (filename === "_\ubaa9\ucc28.md" || filenameIncludes(filename, ["G(+)", "G(-)", "\uac10\uc5fc.md", "\uae30\ud0c0.md", "\uae30\uc0dd\ucda9.md", "\ubc14\uc774\ub7ec\uc2a4.md", "\uc9c4\uade0.md", "\uc6d0\ub0b4\uac10\uc5fc.md", "\uc9c0\uc5ed\uc0ac\ud68c.md", "\uc6d0\uc0dd\ub3cc\ubb3c.md"])) return "index-or-taxonomy";
  if (filenameIncludes(filename, ["Pseudomonas Aeruginosa", "E. coli", "Legionella", "Listeria", "Mycoplasma", "Meningococcus", "Staphylococcus", "Anaerobic Bacteria Infection"])) return "organism-reference";
  if (filenameIncludes(filename, ["Common Cold", "Cytomegalovirus", "Rabies", "Herpes", "Dengue", "Malaria", "Varicella", "Hemorrhagic Fever", "Adenovirus", "Amebic", "Amebiasis", "Aspergillosis", "Epstein-Barr", "Enterobiasis", "Free-Living Amebic", "Influenza", "MERS", "SFTS", "Zika", "COVID-19", "Candidiasis", "Cryptococcosis", "Mucormycosis", "Toxoplasmosis", "Pneumocystis", "Paragonimiasis", "Clonorchiasis", "Anisakiasis", "Chikungunya", "AIDS"])) return "non-antibacterial-infection";
  if (filenameIncludes(filename, ["Syphilis", "Brucellosis", "Tetanus", "Leprosy"])) return "antimicrobial-model-gap";
  if (filenameIncludes(filename, ["Nocardiosis", "Actinomycosis"])) return "specialist-pathway-review";
  if (filenameIncludes(filename, ["Osteomyelitis", "Gangrene).md", "Immunocompromised Host", "Fever of Unknown Origin", "Diarrhea", "Neutropenia"])) return "syndrome-or-host-context";
  return "antibacterial-pathway";
}

function noteTitle(filename) {
  return filename.replace(/\.md$/, "").replace(/\s*\([^)]*\)$/, "");
}

function main() {
  const pathways = JSON.parse(fs.readFileSync(pathwayFile, "utf8")).pathways;
  const files = fs.readdirSync(infectionDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "_\ubaa9\ucc28.md")
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "ko"));

  const entries = files.map((filename) => {
    const sourceFile = `${INFECTION_ROOT.name}/${filename}`;
    const linkedPathways = pathways.filter((pathway) => pathway.diseaseSourceFile === sourceFile).map((pathway) => pathway.id);
    const category = classify(filename);
    return {
      sourceFile,
      title: noteTitle(filename),
      category,
      pathwayIds: linkedPathways,
      pathwayState: linkedPathways.length ? "linked" : category === "antibacterial-pathway" ? "needs-pathway" : category === "antimicrobial-model-gap" ? "requires-drug-model-expansion" : category === "specialist-pathway-review" ? "requires-specialist-review" : "not-applicable",
    };
  });

  const summary = Object.fromEntries(Object.keys(categories).map((category) => [category, entries.filter((entry) => entry.category === category).length]));
  const linked = entries.filter((entry) => entry.pathwayState === "linked").length;
  const needsPathway = entries.filter((entry) => entry.pathwayState === "needs-pathway");
  const registry = {
    schemaVersion: 1,
    reviewedAt: "2026-07-18",
    categories,
    entries,
  };
  const report = {
    generatedAt: new Date().toISOString(),
    markdownNotes: entries.length,
    categorySummary: summary,
    linkedClinicalNotes: linked,
    needsAntibacterialPathway: needsPathway.map((entry) => ({ sourceFile: entry.sourceFile, title: entry.title })),
    modelGaps: entries.filter((entry) => entry.pathwayState === "requires-drug-model-expansion").map((entry) => ({ sourceFile: entry.sourceFile, title: entry.title })),
    specialistReviewQueue: entries.filter((entry) => entry.pathwayState === "requires-specialist-review").map((entry) => ({ sourceFile: entry.sourceFile, title: entry.title })),
    exclusionRule: "Non-antibacterial infections, organism references, and taxonomy notes are intentionally not counted as antibiotic pathways.",
  };

  fs.writeFileSync(registryFile, `${JSON.stringify(registry, null, 2)}\n`, "utf8");
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ notes: entries.length, linked, needsPathway: needsPathway.length, categorySummary: summary }, null, 2));
}

main();
