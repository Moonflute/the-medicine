import type { DomainNote } from "@/lib/webdb";

export type LabImgBloodPanel = {
  title: string;
  overviewNote?: DomainNote;
  notes: DomainNote[];
};

function normalizeLink(value: string) {
  return value.replace(/`/g, "").replace(/\*\*/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

function wikiLinks(lines: string[]) {
  return lines.flatMap((line) =>
    [...line.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((match) => match[1].trim()),
  );
}

function sortNotes(notes: DomainNote[]) {
  return notes.slice().sort((a, b) => a.title.localeCompare(b.title, "ko"));
}

/** Builds clinical panels from the maintained links in the blood index note. */
export function buildLabImgBloodPanels(bloodOverview: DomainNote, allNotes: DomainNote[]): LabImgBloodPanel[] {
  const lookup = new Map<string, DomainNote>();
  for (const note of allNotes) {
    lookup.set(normalizeLink(note.title), note);
    note.aliases.forEach((alias) => lookup.set(normalizeLink(alias), note));
  }

  const source = bloodOverview.sections.find((section) => section.content.some((line) => line.includes("[[")));
  if (!source) return [];

  const panels = source.content.flatMap((line) => {
    const match = line.replace(/^\s*-\s*/, "").match(/^([^:]+):\s*(.+)$/);
    if (!match) return [];
    const listed = wikiLinks([match[2]])
      .map((name) => lookup.get(normalizeLink(name)))
      .filter((note): note is DomainNote => Boolean(note));
    return listed.length ? [{ title: match[1].replace(/·/g, " · ").replace(/\s+/g, " ").trim(), listed }] : [];
  });

  const assigned = new Set(panels.flatMap((panel) => panel.listed.map((note) => note.slug)));
  const isBloodNote = (note: DomainNote) => note.pathSegments[0] === bloodOverview.pathSegments[0];
  const expanded = panels.map((panel) => {
    const notes = [...panel.listed];
    for (const note of panel.listed) {
      for (const name of wikiLinks(note.sections.flatMap((section) => section.content))) {
        const linked = lookup.get(normalizeLink(name));
        if (linked && isBloodNote(linked) && !assigned.has(linked.slug)) {
          assigned.add(linked.slug);
          notes.push(linked);
        }
      }
    }
    if (panel.title.startsWith("CBC")) {
      for (const note of allNotes) {
        if (isBloodNote(note) && note.pathSegments[1] === "CBC" && !assigned.has(note.slug)) {
          assigned.add(note.slug);
          notes.push(note);
        }
      }
    }
    return { title: panel.title, notes };
  });

  const unassigned = allNotes.filter((note) => isBloodNote(note) && note.slug !== bloodOverview.slug && !assigned.has(note.slug));
  if (unassigned.length) expanded.push({ title: "Other blood tests", notes: unassigned });

  return expanded.map((panel) => ({
    title: panel.title,
    overviewNote: panel.notes.find((note) => /overview/i.test(note.title)) ?? panel.notes[0],
    notes: sortNotes(panel.notes),
  }));
}
