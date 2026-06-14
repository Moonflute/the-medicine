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
  ["Lactate", "Lactate"],
]);

function cleanText(value: string) {
  return value.replace(/`/g, "").replace(/\*\*/g, "").trim();
}

function cleanOverviewLabel(value: string) {
  return value
    .replace(/^[-*•]\s*/, "")
    .replace(/\s*overview$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(value: string) {
  return cleanOverviewLabel(value).toLowerCase();
}

function extractWikiLinks(line: string) {
  return [...line.matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => match[1].split("|")[0].trim());
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

  const shortParen = cleaned.match(/\(([A-Za-z0-9\-+/., ]{2,20})\)/);
  if (shortParen) return shortParen[1].replace(/,\s+/g, "/").trim();

  return cleaned;
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
        title: cells[0],
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

  const rawRange = match[1].replace(/\s+/g, " ").trim();
  const unit = (match[2] ?? "").trim();

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

function parseRangesFromSection(note: DomainNote) {
  const rangeSection = note.sections.find((section) => /normal|정상범위/i.test(section.title));
  if (!rangeSection) return [];

  return rangeSection.content
    .map((line) => cleanText(line))
    .filter((line) => /^[-*•]\s*/.test(line))
    .map((line) => line.replace(/^[-*•]\s*/, "").trim())
    .map((line) => {
      const match = line.match(/^([^:]+):\s*(.+)$/);
      if (!match) return null;

      const parsed = parseInlineRange(match[2]);
      if (!parsed) return null;

      return {
        label: conciseLabel(match[1]),
        lower: parsed.lower,
        upper: parsed.upper,
      };
    })
    .filter((row): row is { label: string; lower: string; upper: string } => Boolean(row));
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

  const sectionRanges = parseRangesFromSection(note);
  if (sectionRanges.length === 1) {
    return {
      slug: note.slug,
      title: sectionRanges[0].label,
      lower: sectionRanges[0].lower,
      upper: sectionRanges[0].upper,
    };
  }

  return null;
}

function rowGroupForCBC(label: string) {
  if (["WBC", "Neutrophil", "Lymphocyte", "Monocyte", "Eosinophil", "Basophil", "Diff"].includes(label)) {
    return "WBC / diff";
  }

  if (["Plt", "Platelet"].includes(label)) return "Platelet";
  return "RBC / indices";
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

function groupRows(title: string, rows: LabImgRangeRow[]): LabImgOverviewGroup[] {
  const deduped = dedupeRows(rows);
  if (!deduped.length) return [];

  const cleanedTitle = cleanOverviewLabel(title);
  if (normalizeKey(cleanedTitle) === "cbc") {
    const bucket = new Map<string, LabImgRangeRow[]>();

    for (const row of deduped) {
      const groupTitle = rowGroupForCBC(conciseLabel(row.title));
      const current = bucket.get(groupTitle) ?? [];
      current.push({ ...row, title: conciseLabel(row.title) });
      bucket.set(groupTitle, current);
    }

    return ["RBC / indices", "WBC / diff", "Platelet"]
      .map((groupTitle) => ({ title: groupTitle, rows: bucket.get(groupTitle) ?? [] }))
      .filter((group) => group.rows.length > 0);
  }

  return [
    {
      title: cleanedTitle,
      rows: deduped.map((row) => ({ ...row, title: conciseLabel(row.title) })),
    },
  ];
}

function noteRowsFromRelatedLinks(note: DomainNote, lookup: Map<string, DomainNote>, allNotes: DomainNote[]) {
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

  const rangeRows = parseRangesFromSection(note);
  if (rangeRows.length > 1) {
    return rangeRows.map((row) => ({
      slug: note.slug,
      title: row.label,
      lower: row.lower,
      upper: row.upper,
    }));
  }

  const relatedRows = noteRowsFromRelatedLinks(note, lookup, allNotes);
  if (relatedRows.length > 0) return relatedRows;

  const single = parseSingleRangeRow(note);
  return single ? [single] : [];
}

function overviewGroupsFromBulletLines(note: DomainNote, lookup: Map<string, DomainNote>, allNotes: DomainNote[]) {
  const groups: LabImgOverviewGroup[] = [];

  for (const section of note.sections) {
    for (const rawLine of section.content) {
      const line = cleanText(rawLine);
      if (!/^[-*•]\s*/.test(line) || !line.includes("[[")) continue;

      const withoutBullet = line.replace(/^[-*•]\s*/, "").trim();
      const colonIndex = withoutBullet.indexOf(":");
      if (colonIndex === -1) continue;

      const title = cleanOverviewLabel(withoutBullet.slice(0, colonIndex));
      const links = extractWikiLinks(withoutBullet);
      if (!links.length) continue;

      const resolved = links
        .map((link) => resolveNote(link, lookup))
        .filter((item): item is DomainNote => Boolean(item));

      if (!resolved.length) continue;

      const overviewCandidate = resolved.find((item) => isLabImgOverviewNote(item));
      const sourceNotes = overviewCandidate ? [overviewCandidate] : resolved;
      const rows = sourceNotes.flatMap((sourceNote) => extractRowsFromNote(sourceNote, lookup, allNotes));
      groups.push(...groupRows(title, rows));
    }
  }

  return groups;
}

export function isLabImgOverviewNote(note: DomainNote) {
  const title = normalizeKey(note.title);
  const lastSegment = normalizeKey(note.pathSegments.at(-1) ?? note.title);
  return title.endsWith("overview") || title === lastSegment;
}

export function buildLabImgOverviewGroups(note: DomainNote, allNotes: DomainNote[]) {
  const lookup = buildNoteLookup(allNotes);
  const groupedFromBullets = overviewGroupsFromBulletLines(note, lookup, allNotes);

  if (groupedFromBullets.length > 0) return groupedFromBullets;
  return groupRows(note.title, extractRowsFromNote(note, lookup, allNotes));
}
