import type { DomainNote, DomainToc } from "@/lib/webdb";

export type LabImgLeafGroup = { rawTitle: string; title: string; overviewNote?: DomainNote; notes: DomainNote[] };
export type LabImgTopGroup = { rawTitle: string; title: string; slug: string; overviewNote?: DomainNote; directNotes: DomainNote[]; childGroups: LabImgLeafGroup[] };
export type LabImgBloodPanel = { title: string; overviewNote?: DomainNote; notes: DomainNote[] };

function toBase64Url(value: string) { return Buffer.from(value, "utf-8").toString("base64url"); }
function clean(value: string) { return value.replace(/^\d+\s*/, "").trim(); }
function sortLabels(a: string, b: string) { return a.localeCompare(b, "ko"); }
function noteSort(notes: DomainNote[]) { return notes.slice().sort((a, b) => sortLabels(a.title, b.title)); }
function noteKey(value: string) { return value.replace(/overview/gi, "").replace(/[^\p{L}\p{N}]+/gu, " ").trim().toLowerCase(); }
function wikiLinks(note: DomainNote) { return note.sections.flatMap((section) => section.content.flatMap((line) => [...line.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((match) => match[1].trim()))); }

/** Builds the clinical panels explicitly declared in the 혈액검사 index note. */
export function buildLabImgBloodPanels(notes: DomainNote[]): LabImgBloodPanel[] {
  const index = notes.find((note) => note.relativePath.endsWith("/혈액검사.md"));
  const section = index?.sections.find((item) => item.title.replace(/\s/g, "").includes("하위묶음"));
  if (!section) return [];
  const lookup = new Map<string, DomainNote>();
  for (const note of notes) {
    lookup.set(noteKey(note.title), note);
    lookup.set(noteKey(note.slug), note);
    note.aliases.forEach((alias) => lookup.set(noteKey(alias), note));
  }
  const resolve = (title: string) => lookup.get(noteKey(title));

  return section.content.flatMap((rawLine) => {
    const line = rawLine.replace(/^\s*[-*]\s*/, "").trim();
    const separator = line.indexOf(":");
    if (separator < 0) return [];
    const title = line.slice(0, separator).trim();
    const listed = [...line.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)]
      .map((match) => resolve(match[1].trim()))
      .filter((note): note is DomainNote => Boolean(note));
    let overviewNote = listed.find((note) => /overview/i.test(note.title));
    const included = new Map(listed.map((note) => [note.slug, note]));
    if (title.startsWith("CBC")) {
      overviewNote ??= notes.find((note) => note.pathSegments[0] === "01 혈액검사" && note.pathSegments[1] === "CBC" && /overview/i.test(note.title));
      notes.filter((note) => note.pathSegments[0] === "01 혈액검사" && note.pathSegments[1] === "CBC" && !/overview/i.test(note.title))
        .forEach((note) => included.set(note.slug, note));
    }
    for (const linkedTitle of overviewNote ? wikiLinks(overviewNote) : []) {
      const linked = resolve(linkedTitle);
      if (linked && linked.slug !== overviewNote?.slug && !/overview/i.test(linked.title)) included.set(linked.slug, linked);
    }
    return [{ title, overviewNote, notes: noteSort([...included.values()].filter((note) => note.slug !== overviewNote?.slug)) }];
  });
}

function tocOrder(toc: DomainToc | undefined, level: number) { const map = new Map<string, number>(); toc?.items.forEach((item, index) => { const key = item.path.slice(0, level + 1).join("\u0000"); if (key && !map.has(key)) map.set(key, index); }); return map; }
function ordered(a: string, b: string, map: Map<string, number>, fallbackA: string, fallbackB: string) { const first = map.get(a), second = map.get(b); if (first !== undefined && second !== undefined) return first - second; if (first !== undefined) return -1; if (second !== undefined) return 1; return sortLabels(fallbackA, fallbackB); }
function overview(note: DomainNote, label: string) { const title = clean(note.title).toLowerCase(), expected = clean(label).toLowerCase(); return title === expected || title === `${expected} overview`; }

export function buildLabImgGroups(notes: DomainNote[], toc?: DomainToc): LabImgTopGroup[] {
  const topOrder = tocOrder(toc, 0), childOrder = tocOrder(toc, 1), tops = new Map<string, DomainNote[]>();
  for (const note of notes) { const key = note.pathSegments[0] || note.folder || "Other"; const items = tops.get(key) || []; items.push(note); tops.set(key, items); }
  return [...tops.entries()].sort(([a], [b]) => ordered(a, b, topOrder, a, b)).map(([rawTitle, items]) => {
    const directNotes: DomainNote[] = [], children = new Map<string, DomainNote[]>(); let overviewNote: DomainNote | undefined;
    for (const note of items) { if (note.pathSegments.length <= 1) { if (!overviewNote && overview(note, rawTitle)) overviewNote = note; else directNotes.push(note); continue; } const key = note.pathSegments[1], child = children.get(key) || []; child.push(note); children.set(key, child); }
    const childGroups = [...children.entries()].sort(([a], [b]) => ordered(`${rawTitle}\u0000${a}`, `${rawTitle}\u0000${b}`, childOrder, a, b)).map(([childRawTitle, childNotes]) => {
      let childOverview: DomainNote | undefined; const leafNotes: DomainNote[] = [];
      for (const note of childNotes) { if (!childOverview && overview(note, childRawTitle)) childOverview = note; else leafNotes.push(note); }
      return { rawTitle: childRawTitle, title: clean(childRawTitle), overviewNote: childOverview, notes: noteSort(leafNotes) };
    });
    return { rawTitle, title: clean(rawTitle), slug: toBase64Url(rawTitle), overviewNote, directNotes: noteSort(directNotes), childGroups };
  });
}




