import type { DomainNote } from "@/lib/webdb";

export type LabImgRangeRow = {
  slug: string;
  title: string;
  lower: string;
  upper: string;
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
      .replace(/[·•]/g, " ")
      .replace(/[()/]/g, " ")
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

function parseTableRows(note: DomainNote, lookup: Map<string, DomainNote>): LabImgRangeRow[] {
  const lines = findTableLines(note);
  if (lines.length < 3) return [];

  return lines
    .slice(2)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const cells = line
        .split("|")
        .map((cell) => cleanText(cell))
        .filter(Boolean);

      if (cells.length < 3) return null;

      const linked = resolveNote(cells[0], lookup);
      return {
        slug: linked?.slug ?? note.slug,
        title: conciseLabel(cells[0]),
        lower: cells[1] || "-",
        upper: cells[2] || "-",
      };
    })
    .filter((row): row is LabImgRangeRow => Boolean(row));
}

function parseInlineRange(text: string) {
  const compact = cleanText(text);
  const match = compact.match(/([<>]?\s*[\d.]+(?:\s*\/\s*[\d.]+)?(?:\s*-\s*[\d.]+(?:\s*\/\s*[\d.]+)?)?)\s*([A-Za-z%/^.0-9µμmEqL\- ]+)?$/);
  if (!match) return null;

  const rawRange = normalizeSpace(match[1]);
  const unit = normalizeSpace(match[2] ?? "");

  if (rawRange.includes("-")) {
    const [lower, upper] = rawRange.split("-").map((part) => part.trim());
    return {
      lower: `${lower}${unit ? ` ${unit}` : ""}`.trim(),
      upper: `${upper}${unit ? ` ${unit}` : ""}`.trim(),
    };
  }

  if (/^>/.test(rawRange)) return { lower: rawRange.replace(/^>\s*/, "> "), upper: "-" };
  if (/^</.test(rawRange)) return { lower: "-", upper: rawRange.replace(/^<\s*/, "< ") };
  return null;
}

function parseRangesFromNormalSection(note: DomainNote): LabImgRangeRow[] {
  const rangeSection = note.sections.find((section) => {
    const title = cleanText(section.title).toLowerCase();
    return title.includes("normal") || title.includes("정상");
  });
  if (!rangeSection) return [];

  return rangeSection.content
    .map((line) => stripBulletPrefix(cleanText(line)))
    .filter((line) => line.includes(":"))
    .map((line) => {
      const [rawLabel, ...rest] = line.split(":");
      const parsed = parseInlineRange(rest.join(":"));
      if (!parsed) return null;

      return {
        slug: note.slug,
        title: conciseLabel(rawLabel),
        lower: parsed.lower,
        upper: parsed.upper,
      };
    })
    .filter((row): row is LabImgRangeRow => Boolean(row));
}

function parseSingleRangeRow(note: DomainNote) {
  const summaryRange = parseInlineRange(note.summary.join(" "));
  if (summaryRange) {
    return {
      slug: note.slug,
      title: conciseLabel(note.title),
      lower: summaryRange.lower,
      upper: summaryRange.upper,
    };
  }

  const sectionRanges = parseRangesFromNormalSection(note);
  if (sectionRanges.length === 1) {
    return sectionRanges[0];
  }

  return null;
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
  const title = cleanText(note.title);
  return title === "혈액검사" || note.sourcePath.endsWith("/01 혈액검사/혈액검사.md") || note.relativePath.endsWith("01 혈액검사/혈액검사.md");
}

function isCbcOverviewNote(note: DomainNote) {
  return normalizeKey(note.title) === "cbc" || normalizeKey(note.title) === "cbc overview";
}

function isLabImgOverviewByTitle(note: DomainNote) {
  return cleanText(note.title).toLowerCase().includes("overview");
}

function rowsFromRelatedLinks(note: DomainNote, lookup: Map<string, DomainNote>, allNotes: DomainNote[]) {
  const links = note.sections.flatMap((section) => section.content.flatMap((line) => extractWikiLinks(line)));
  const rows: LabImgRangeRow[] = [];

  for (const link of links) {
    const linked = resolveNote(link, lookup);
    if (!linked || linked.slug === note.slug) continue;
    rows.push(...extractRowsFromNote(linked, lookup, allNotes));
  }

  return dedupeRows(rows);
}

function extractRowsFromNote(note: DomainNote, lookup: Map<string, DomainNote>, allNotes: DomainNote[]): LabImgRangeRow[] {
  const tableRows = parseTableRows(note, lookup);
  if (tableRows.length > 0) return tableRows;

  const sectionRanges = parseRangesFromNormalSection(note);
  if (sectionRanges.length > 1) return sectionRanges;

  const relatedRows = rowsFromRelatedLinks(note, lookup, allNotes);
  if (relatedRows.length > 0) return relatedRows;

  const single = parseSingleRangeRow(note);
  return single ? [single] : [];
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

    const preferredOverview =
      resolved.find((item) => isCbcOverviewNote(item)) ??
      resolved.find((item) => isLabImgOverviewByTitle(item)) ??
      resolved[0];

    const rows = dedupeRows(extractRowsFromNote(preferredOverview, lookup, allNotes));
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
  if (isBloodOverviewNote(note)) return true;
  const title = cleanText(note.title).toLowerCase();
  return title.includes("overview");
}

export function buildLabImgOverviewGroups(note: DomainNote, allNotes: DomainNote[]) {
  const lookup = buildNoteLookup(allNotes);

  if (isBloodOverviewNote(note)) {
    const grouped = buildBloodOverviewGroups(note, lookup, allNotes);
    if (grouped.length > 0) return grouped;
  }

  return groupRowsForSingleOverview(note, lookup, allNotes);
}
