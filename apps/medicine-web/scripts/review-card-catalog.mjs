import fs from "node:fs";
import path from "node:path";

const noteFiles = {
  disease: "diseases",
  chiefComplaint: "chief-complaints",
  drug: "drugs",
  labImg: "lab-img",
  skill: "skills",
  physiology: "physiology",
  pathology: "pathology",
  microorganism: "microorganisms",
  clinicalGroup: "microorganisms",
  resistancePhenotype: "microorganisms",
};

const specialtyByCategory = {
  "심혈계": ["순환기"],
  "심전도": ["순환기"],
  "간담췌": ["소화기"],
  "내분비·대사": ["내분비"],
  "비뇨·신장": ["신장", "비뇨기과"],
  "신장/비뇨기": ["신장", "비뇨기과"],
  "혈액·응고": ["혈액"],
  "정신": ["정신건강의학과"],
  "신경": ["신경과-신경외과"],
  "산부": ["산과", "부인과"],
  "소아": ["소아청소년과"],
};

const unnumber = text => text.replace(/^\d+\s+/, "").trim();

function terms(values, limit) {
  return [...new Set(values.filter(value => typeof value === "string").map(value => value.trim().slice(0, 180)).filter(Boolean))].slice(0, limit);
}

function excerpt(entry, note) {
  const sections = (note?.sections ?? []).filter(section => Array.isArray(section.content) && section.content.length);
  const sectionText = sections.slice(0, 8).map(section => section.content
    .filter(line => !/^\s*(?:https?:|!\[|>|\|\s*[:-]+|출처)/i.test(line))
    .join(" ").replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").slice(0, 128));
  return [entry.quickSummary?.slice(0, 220), ...sectionText, ...(note?.indications ?? []).slice(0, 4)]
    .filter(Boolean).join(" ").replace(/\s+/g, " ").trim().slice(0, 1100);
}

export function buildReviewCardCatalog(entries, dataRoot) {
  const read = name => JSON.parse(fs.readFileSync(path.join(dataRoot, name + ".json"), "utf8"));
  const notes = new Map([...new Set(Object.values(noteFiles))].map(name => {
    const data = read(name);
    const rows = Array.isArray(data) ? data : (data.items ?? data.entities);
    return [name, new Map(rows.map(note => [note.slug ?? note.id, note]))];
  }));
  const specialties = read("specialties").map(specialty => ({
    id: specialty.slug, label: unnumber(specialty.name),
  }));
  const specialtyIds = new Map(specialties.map(item => [item.label, item.id]));
  const documents = new Map();
  for (const entry of entries) {
    const file = noteFiles[entry.type];
    if (!file || documents.has(entry.href)) continue;
    const note = notes.get(file).get(entry.slug);
    const category = unnumber(entry.category?.split(">")[0] ?? "");
    const specialtyLabels = (note?.specialty ? [note.specialty, ...(note.relatedSpecialties ?? [])].map(unnumber)
      : (specialtyByCategory[category] ?? [category]));
    // In the general search index, disease aliases also include symptoms.
    const aliases = entry.type === "disease" && note ? [note.title, ...(note.aliases ?? [])] : (entry.aliases ?? []);
    documents.set(entry.href, {
      href: entry.href,
      title: entry.title.slice(0, 300),
      aliases: terms(aliases, 18),
      keywords: terms([...(entry.keywords ?? []), entry.category], 24),
      context: excerpt(entry, note),
      specialties: [...new Set(specialtyLabels.flatMap(label => specialtyIds.has(label) ? [specialtyIds.get(label)] : []))],
    });
  }
  return { specialties, documents: [...documents.values()] };
}
