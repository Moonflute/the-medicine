import type { DomainNote } from "@/lib/webdb";

export type LabImgLeafGroup = {
  rawTitle: string;
  title: string;
  overviewNote?: DomainNote;
  notes: DomainNote[];
};

export type LabImgTopGroup = {
  rawTitle: string;
  title: string;
  slug: string;
  overviewNote?: DomainNote;
  directNotes: DomainNote[];
  childGroups: LabImgLeafGroup[];
};

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

function cleanLabel(value: string) {
  return value.replace(/^\d+\s*/, "").trim();
}

function sortLabels(a: string, b: string) {
  return a.localeCompare(b, "ko");
}

function sortNotes(notes: DomainNote[]) {
  return notes.slice().sort((a, b) => sortLabels(a.title, b.title));
}

function isOverviewForLabel(note: DomainNote, label: string) {
  const noteLabel = cleanLabel(note.title).toLowerCase();
  const targetLabel = cleanLabel(label).toLowerCase();
  return noteLabel === targetLabel || noteLabel === `${targetLabel} overview`;
}

export function buildLabImgGroups(notes: DomainNote[]): LabImgTopGroup[] {
  const topMap = new Map<string, DomainNote[]>();

  for (const note of notes) {
    const topKey = note.pathSegments[0] || note.folder || "기타";
    const bucket = topMap.get(topKey) ?? [];
    bucket.push(note);
    topMap.set(topKey, bucket);
  }

  return [...topMap.entries()]
    .sort(([a], [b]) => sortLabels(a, b))
    .map(([rawTitle, topNotes]) => {
      const directNotes: DomainNote[] = [];
      const childMap = new Map<string, DomainNote[]>();
      let overviewNote: DomainNote | undefined;

      for (const note of topNotes) {
        if (note.pathSegments.length <= 1) {
          if (!overviewNote && isOverviewForLabel(note, rawTitle)) {
            overviewNote = note;
          } else {
            directNotes.push(note);
          }
          continue;
        }

        const childKey = note.pathSegments[1];
        const bucket = childMap.get(childKey) ?? [];
        bucket.push(note);
        childMap.set(childKey, bucket);
      }

      const childGroups = [...childMap.entries()]
        .sort(([a], [b]) => sortLabels(a, b))
        .map(([childRawTitle, childNotes]) => {
          let childOverviewNote: DomainNote | undefined;
          const notesOnly: DomainNote[] = [];

          for (const note of childNotes) {
            if (!childOverviewNote && isOverviewForLabel(note, childRawTitle)) {
              childOverviewNote = note;
            } else {
              notesOnly.push(note);
            }
          }

          return {
            rawTitle: childRawTitle,
            title: cleanLabel(childRawTitle),
            overviewNote: childOverviewNote,
            notes: sortNotes(notesOnly),
          };
        });

      return {
        rawTitle,
        title: cleanLabel(rawTitle),
        slug: toBase64Url(rawTitle),
        overviewNote,
        directNotes: sortNotes(directNotes),
        childGroups,
      };
    });
}
