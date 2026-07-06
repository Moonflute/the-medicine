import type { DomainNote } from "@/lib/webdb";

export type DrugLeafGroup = {
  title: string;
  notes: DomainNote[];
};

export type DrugMiddleGroup = {
  title: string;
  notes: DomainNote[];
  detailGroups: DrugLeafGroup[];
};

export type DrugTopGroup = {
  title: string;
  slug: string;
  notes: DomainNote[];
  middleGroups: DrugMiddleGroup[];
};

const DEFAULT_GROUP = "General";

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

function normalizeLabel(value?: string | null) {
  return value?.trim() || DEFAULT_GROUP;
}

function sortLabels(a: string, b: string) {
  return a.localeCompare(b, "ko");
}

function getPriorityRank(note: DomainNote) {
  if (note.drugMeta?.clinicalCore) return 0;
  if (note.drugMeta?.priority === "tier_1") return 1;
  if (note.drugMeta?.priority === "tier_2") return 2;
  if (note.drugMeta?.priority === "general") return 3;
  return 4;
}

function sortDrugNotes(notes: DomainNote[]) {
  return notes.slice().sort((a, b) => getPriorityRank(a) - getPriorityRank(b) || sortLabels(a.title, b.title));
}

function groupBy<T>(items: T[], getKey: (item: T) => string) {
  const groups = new Map<string, T[]>();

  for (const item of items) {
    const key = getKey(item);
    const bucket = groups.get(key) ?? [];
    bucket.push(item);
    groups.set(key, bucket);
  }

  return groups;
}

function getTopTitle(note: DomainNote) {
  return normalizeLabel(note.drugMeta?.topClass || note.folder);
}

function getMiddleTitle(note: DomainNote, fallback: string) {
  return normalizeLabel(note.drugMeta?.middleClass || note.drugMeta?.detailClass || fallback);
}

export function buildDrugGroups(notes: DomainNote[]): DrugTopGroup[] {
  return [...groupBy(notes, getTopTitle).entries()]
    .sort(([a], [b]) => sortLabels(a, b))
    .map(([topTitle, topNotes]) => {
      const middleGroups = [...groupBy(topNotes, (note) => getMiddleTitle(note, topTitle)).entries()]
        .sort(([a], [b]) => sortLabels(a, b))
        .map(([middleTitle, middleNotes]) => {
          const directNotes: DomainNote[] = [];
          const detailMap = new Map<string, DomainNote[]>();

          for (const note of middleNotes) {
            const detailKey = note.drugMeta?.detailClass?.trim();

            if (!detailKey || detailKey === middleTitle) {
              directNotes.push(note);
              continue;
            }

            const bucket = detailMap.get(detailKey) ?? [];
            bucket.push(note);
            detailMap.set(detailKey, bucket);
          }

          return {
            title: middleTitle,
            notes: sortDrugNotes(directNotes),
            detailGroups: [...detailMap.entries()]
              .sort(([a], [b]) => sortLabels(a, b))
              .map(([detailTitle, detailNotes]) => ({
                title: detailTitle,
                notes: sortDrugNotes(detailNotes),
              })),
          };
        });

      return {
        title: topTitle,
        slug: toBase64Url(topTitle),
        notes: sortDrugNotes(topNotes),
        middleGroups,
      };
    });
}
