import type { DomainNote } from "@/lib/webdb";

export type LabImgRangeRow = {
  slug: string;
  title: string;
  lower: string;
  upper: string;
};

function cleanLabel(value: string) {
  return value.replace(/^\d+\s*/, "").replace(/\s+overview$/i, "").trim();
}

function isOverviewTitle(note: DomainNote) {
  const title = cleanLabel(note.title).toLowerCase();
  const lastSegment = cleanLabel(note.pathSegments[note.pathSegments.length - 1] ?? "").toLowerCase();

  if (note.title.toLowerCase().endsWith(" overview")) {
    return true;
  }

  return Boolean(lastSegment) && title === lastSegment;
}

function splitRangeToken(token: string) {
  const trimmed = token.trim();
  const match = trimmed.match(/^(.+?)\s*-\s*(.+)$/);

  if (!match) {
    return { lower: "", upper: trimmed };
  }

  return {
    lower: match[1].trim(),
    upper: match[2].trim(),
  };
}

function parseStructuredRanges(raw: string) {
  const entries = [...raw.matchAll(/([가-힣A-Za-z]+)?\s*`([^`]+)`/g)];

  if (entries.length === 0) {
    const fallbackToken = raw.match(/`([^`]+)`/)?.[1];
    return fallbackToken ? splitRangeToken(fallbackToken) : { lower: "", upper: raw.trim() };
  }

  if (entries.length === 1) {
    return splitRangeToken(entries[0][2]);
  }

  const lowers: string[] = [];
  const uppers: string[] = [];

  for (const entry of entries) {
    const label = (entry[1] ?? "").trim();
    const range = splitRangeToken(entry[2]);

    lowers.push(label ? `${label} ${range.lower}` : range.lower);
    uppers.push(label ? `${label} ${range.upper}` : range.upper);
  }

  return {
    lower: lowers.filter(Boolean).join(" / "),
    upper: uppers.filter(Boolean).join(" / "),
  };
}

function extractRangeText(note: DomainNote) {
  const summaryLine = note.summary.find((line) => /정상범위|reference range|normal range/i.test(line));
  if (summaryLine) {
    return summaryLine.replace(/^>\s?/, "").replace(/^.*?:\s*/, "").trim();
  }

  const rangeSection = note.sections.find((section) => /정상범위|reference range|normal range/i.test(section.title));
  if (!rangeSection || rangeSection.content.length === 0) {
    return "";
  }

  return rangeSection.content
    .map((line) => line.replace(/^[?•-]+\s*/, "").trim())
    .filter(Boolean)
    .join(" / ");
}

export function isLabImgOverviewNote(note: DomainNote) {
  return isOverviewTitle(note);
}

export function buildLabImgOverviewRows(note: DomainNote, allNotes: DomainNote[]): LabImgRangeRow[] {
  if (!isLabImgOverviewNote(note)) {
    return [];
  }

  const scope = note.pathSegments;
  const rows = allNotes
    .filter((candidate) => candidate.slug !== note.slug)
    .filter((candidate) => scope.every((segment, index) => candidate.pathSegments[index] === segment))
    .filter((candidate) => !isOverviewTitle(candidate))
    .map((candidate) => {
      const rawRange = extractRangeText(candidate);
      const parsed = rawRange ? parseStructuredRanges(rawRange) : { lower: "", upper: "" };

      return {
        slug: candidate.slug,
        title: candidate.title,
        lower: parsed.lower,
        upper: parsed.upper,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title, "ko"));

  return rows;
}
