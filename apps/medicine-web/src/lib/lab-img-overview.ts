import { labDocumentMeta } from "./lab-document-kind";
import type { DomainNote } from "@/lib/webdb";

export type LabImgRangeRow = {
  slug: string;
  title: string;
  lower: string;
  upper: string;
  rangeType?: "bounds" | "reference";
};

export type LabImgOverviewGroup = {
  title: string;
  rows: LabImgRangeRow[];
};

const SHORT_LABELS = new Map<string, string>([
  ["White Blood Cell Count (WBC)", "WBC"],
  ["Red Blood Cell Count (RBC)", "RBC"],
  ["Hemoglobin", "Hb"],
  ["Hematocrit", "Hct"],
  ["Mean Corpuscular Volume (MCV)", "MCV"],
  ["Mean Corpuscular Hemoglobin and MCHC (MCH-MCHC)", "MCH/MCHC"],
  ["Red Cell Distribution Width (RDW)", "RDW"],
  ["Platelet Count", "Plt"],
  ["White Blood Cell Differential", "Diff"],
  ["Aspartate Aminotransferase (AST)", "AST"],
  ["Alanine Aminotransferase (ALT)", "ALT"],
  ["Alkaline Phosphatase (ALP)", "ALP"],
  ["Albumin", "Alb"],
  ["Total Bilirubin", "TBil"],
  ["Lipase", "Lipase"],
  ["Blood Urea Nitrogen (BUN)", "BUN"],
  ["Estimated Glomerular Filtration Rate (eGFR)", "eGFR"],
  ["Creatinine", "Cr"],
  ["Bicarbonate (Total CO2)", "HCO3"],
  ["Sodium", "Na"],
  ["Potassium", "K"],
  ["Chloride", "Cl"],
  ["Calcium", "Ca"],
  ["Magnesium", "Mg"],
  ["Phosphate", "P"],
  ["Blood Glucose", "Glu"],
  ["Hemoglobin A1C (HbA1c)", "HbA1c"],
  ["C-Reactive Protein (CRP)", "CRP"],
  ["Erythrocyte Sedimentation Rate (ESR)", "ESR"],
  ["Procalcitonin", "PCT"],
  ["Troponin", "Tn"],
  ["Natriuretic Peptide Tests (BNP, NT-proBNP)", "BNP/NT-proBNP"],
  ["Prothrombin Time and INR (PT-INR)", "PT/INR"],
  ["Activated Partial Thromboplastin Time (aPTT)", "aPTT"],
  ["Fibrinogen", "Fibrinogen"],
  ["D-dimer", "D-dimer"],
  ["Thyroid-Stimulating Hormone (TSH)", "TSH"],
  ["Free Thyroxine (Free T4)", "Free T4"],
  ["Cortisol", "Cortisol"],
  ["Prolactin", "Prolactin"],
  ["Beta-human Chorionic Gonadotropin (beta-hCG)", "beta-hCG"],
  ["Ferritin", "Ferritin"],
  ["Cholesterol Levels (Lipid Panel)", "Lipid"],
  ["Immunoglobulin G (IgG)", "IgG"],
  ["Immunoglobulin A (IgA)", "IgA"],
  ["Immunoglobulin M (IgM)", "IgM"],
  ["Immunoglobulin E (IgE)", "IgE"],
  ["Complement C3", "C3"],
  ["Complement C4", "C4"],
  ["Lactate Dehydrogenase (LDH)", "LDH"],
  ["Arterial Blood Gas Analysis (ABGA)", "ABGA"],
  ["Lactate", "Lac"],
  ["Arterial oxygen partial pressure (PaO2)", "PaO2"],
  ["Arterial carbon dioxide partial pressure (PaCO2)", "PaCO2"],
  ["Arterial oxygen saturation (SaO2)", "SaO2"],
]);

const PANEL_TITLE_MAP: Record<string, string> = {
  "cbc differential platelet": "CBC",
  electrolytes: "Electrolytes",
  renal: "Renal",
  "glucose metabolism": "Glucose",
  "liver pancreas": "LFT / Pancreas",
  "inflammation marker": "Inflammation",
  "cardiac marker": "Cardiac",
  coagulation: "Coagulation",
  hormones: "Hormones",
  "iron status": "Iron",
  lipid: "Lipid",
  immunology: "Immunology",
  "blood gas perfusion": "ABGA / Perfusion",
  "general tissue injury": "General injury",
};

const PANEL_ORDER = [
  "CBC",
  "Electrolytes",
  "Renal",
  "Glucose",
  "LFT / Pancreas",
  "Inflammation",
  "Cardiac",
  "Coagulation",
  "Hormones",
  "Iron",
  "Lipid",
  "Immunology",
  "ABGA / Perfusion",
  "General injury",
];

function cleanText(value: string) {
  return value.replace(/`/g, "").replace(/\*\*/g, "").trim();
}

function normalizeSpace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stripBulletPrefix(value: string) {
  return value.replace(/^[•*\-]\s*/, "").trim();
}

function normalizeKey(value: string) {
  return normalizeSpace(
    cleanText(value)
      .replace(/overview/gi, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .replace(/:/g, " "),
  ).toLowerCase();
}

function standardizePanelTitle(label: string) {
  const normalized = normalizeKey(label);
  return PANEL_TITLE_MAP[normalized] ?? normalizeSpace(cleanText(label));
}

function buildNoteLookup(notes: DomainNote[]) {
  const lookup = new Map<string, DomainNote>();

  for (const note of notes) {
    lookup.set(normalizeKey(note.title), note);
    lookup.set(normalizeKey(note.slug), note);
    for (const alias of note.aliases) {
      lookup.set(normalizeKey(alias), note);
    }
  }

  return lookup;
}

function resolveNote(name: string, lookup: Map<string, DomainNote>) {
  const direct = lookup.get(normalizeKey(name));
  if (direct) return direct;

  const stripped = name.split("/").pop()?.trim();
  if (!stripped) return undefined;
  return lookup.get(normalizeKey(stripped));
}

function conciseLabel(title: string) {
  const cleaned = cleanText(title);
  const mapped = SHORT_LABELS.get(cleaned);
  if (mapped) return mapped;

  const shortParen = cleaned.match(/\(([A-Za-z0-9\-+/., ]{2,24})\)/);
  if (shortParen) return shortParen[1].replace(/,\s+/g, "/").trim();

  return cleaned;
}

function extractWikiLinks(line: string) {
  return [...line.matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => match[1].split("|")[0].trim());
}

function findTableLines(note: DomainNote) {
  for (const section of note.sections) {
    const tableLines = section.content.filter((line) => line.trim().startsWith("|"));
    if (tableLines.length >= 3) return tableLines;
  }

  return [];
}

function tableCells(line: string) {
  return line
    .trim()
    .split("|")
    .map((cell) => cleanText(cell))
    .filter(Boolean);
}
function parseTableRows(note: DomainNote, lookup: Map<string, DomainNote>): LabImgRangeRow[] {
  const lines = findTableLines(note);
  if (lines.length < 3) return [];

  const headers = tableCells(lines[0]).map(normalizeKey);
  const lowerIndex = headers.findIndex((header) => /(^|\s)(low|lower|min)(\s|$)|\uD558\uD55C/.test(header));
  const upperIndex = headers.findIndex((header) => /(^|\s)(high|upper|max)(\s|$)|\uC0C1\uD55C/.test(header));
  const referenceIndex = headers.findIndex((header) => /reference|normal|range|\uCC38\uACE0|\uC815\uC0C1/.test(header));
  const hasBoundColumns = lowerIndex >= 0 || upperIndex >= 0;
  const rangeType: LabImgRangeRow["rangeType"] = hasBoundColumns ? "bounds" : "reference";

  if (!hasBoundColumns && referenceIndex < 1) return [];

  return lines
    .slice(2)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line): LabImgRangeRow | null => {
      const cells = tableCells(line);
      if (cells.length < 2) return null;

      const linked = resolveNote(cells[0], lookup);
      return {
        slug: linked?.slug ?? note.slug,
        title: conciseLabel(cells[0]),
        lower: hasBoundColumns ? cells[lowerIndex] || "-" : cells[referenceIndex] || "-",
        upper: hasBoundColumns ? cells[upperIndex] || "-" : "-",
        rangeType,
      };
    })
    .filter((row): row is LabImgRangeRow => row !== null);
}

export function formatLabImgReference(row: LabImgRangeRow) {
  const lower = row.lower.trim();
  const upper = row.upper.trim();
  const noLower = !lower || lower === "-";
  const noUpper = !upper || upper === "-";

  if (row.rangeType === "reference") return noLower ? "-" : lower;
  if (noLower && noUpper) return "-";
  if (noLower) return `\u2264 ${upper}`;
  if (noUpper) return /^[<>\u2265\u2264]/.test(lower) ? lower : `\u2265 ${lower}`;
  return `${lower} \u2013 ${upper}`;
}
function parseRangesFromNormalSection(note: DomainNote): LabImgRangeRow[] {
  const section = note.sections.find(item => /normal|정상|참고.*범위|대표.*참고/.test(cleanText(item.title).toLowerCase()));
  if (!section) return [];
  return section.content.filter(line => /\d/.test(line) && !line.trim().startsWith("|")).map(line => {
    const value = stripBulletPrefix(cleanText(line)).replace(/^•\s*/, "");
    const context = /^(여성|남성)/.exec(value)?.[1];
    const label = labDocumentMeta(note).kind === "panel" ? value.split(/\s+약\s+|:/)[0] : conciseLabel(note.title);
    return { slug: note.slug, title: context ? label + " · " + context : label, lower: value, upper: "-", rangeType: "reference" };
  });
}
function parseSingleRangeRow(note: DomainNote) {
  const rows = parseRangesFromNormalSection(note);
  return rows.length === 1 ? rows[0] : null;
}

function dedupeRows(rows: LabImgRangeRow[]) {
  const seen = new Set<string>();
  return rows.filter((row) => {
    const key = `${row.slug}:${row.title}:${row.lower}:${row.upper}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isBloodOverviewNote(note: DomainNote) {
  return note.relativePath === "01 혈액검사/혈액검사.md";
}
function isCbcOverviewNote(note: DomainNote) {
  return ["CBC overview", "Complete Blood Count (CBC)"].includes(note.title);
}
function extractRowsFromNote(note: DomainNote, lookup: Map<string, DomainNote>, _allNotes: DomainNote[]): LabImgRangeRow[] {
  const tableRows = parseTableRows(note, lookup);
  if (tableRows.length) return tableRows;
  const sections = parseRangesFromNormalSection(note);
  if (sections.length) return sections;
  const own = parseSingleRangeRow(note);
  if (own) return [own];
  // Only declared panel members can supply values. Related clinical links never do.
  return (labDocumentMeta(note).members ?? []).flatMap(title => {
    const member = _allNotes.find(item => item.title === title);
    if (!member) return [];
    const ranges = parseRangesFromNormalSection(member);
    const single = parseSingleRangeRow(member);
    return ranges.length ? ranges : single ? [single] : [];
  });
}

function groupRowsForSingleOverview(note: DomainNote, lookup: Map<string, DomainNote>, allNotes: DomainNote[]): LabImgOverviewGroup[] {
  const rows = dedupeRows(extractRowsFromNote(note, lookup, allNotes));
  if (rows.length === 0) return [];

  return [
    {
      title: isCbcOverviewNote(note) ? "CBC" : normalizeSpace(cleanText(note.title).replace(/\s*overview/i, "")),
      rows,
    },
  ];
}

function buildBloodOverviewGroups(note: DomainNote, lookup: Map<string, DomainNote>, allNotes: DomainNote[]): LabImgOverviewGroup[] {
  const sourceSection = note.sections.find((section) => section.content.some((line) => line.includes("[[")));
  if (!sourceSection) return [];

  const groups: LabImgOverviewGroup[] = [];

  for (const rawLine of sourceSection.content) {
    const line = stripBulletPrefix(cleanText(rawLine));
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const panelTitle = standardizePanelTitle(line.slice(0, colonIndex));
    const links = extractWikiLinks(line);
    if (links.length === 0) continue;

    const resolved = links
      .map((link) => resolveNote(link, lookup))
      .filter((item): item is DomainNote => Boolean(item));

    if (resolved.length === 0) continue;

    const rows = dedupeRows(resolved.flatMap(item => extractRowsFromNote(item, lookup, allNotes)));
    if (rows.length === 0) continue;

    groups.push({
      title: panelTitle,
      rows,
    });
  }

  const orderMap = new Map(PANEL_ORDER.map((title, index) => [title, index]));
  return groups.sort((a, b) => (orderMap.get(a.title) ?? 999) - (orderMap.get(b.title) ?? 999));
}

export function isLabImgOverviewNote(note: DomainNote) {
  return ["panel", "index"].includes(labDocumentMeta(note).kind);
}

export function buildLabImgOverviewGroups(note: DomainNote, allNotes: DomainNote[]) {
  const lookup = buildNoteLookup(allNotes);

  if (isBloodOverviewNote(note)) {
    const grouped = buildBloodOverviewGroups(note, lookup, allNotes);
    if (grouped.length > 0) return grouped;
  }

  return groupRowsForSingleOverview(note, lookup, allNotes);
}



