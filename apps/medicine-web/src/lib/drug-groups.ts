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

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
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
  return notes
    .slice()
    .sort((a, b) => getPriorityRank(a) - getPriorityRank(b) || sortLabels(a.title, b.title));
}

export function buildDrugGroups(notes: DomainNote[]): DrugTopGroup[] {
  const topMap = new Map<string, DomainNote[]>();

  for (const note of notes) {
    const topKey = note.drugMeta?.topClass || note.folder || "기타";
    const bucket = topMap.get(topKey) ?? [];
    bucket.push(note);
    topMap.set(topKey, bucket);
  }

  return [...topMap.entries()]
    .sort(([a], [b]) => sortLabels(a, b))
    .map(([topTitle, topNotes]) => {
      const middleMap = new Map<string, DomainNote[]>();

      for (const note of topNotes) {
        const middleKey = note.drugMeta?.middleClass || note.drugMeta?.detailClass || topTitle;
        const bucket = middleMap.get(middleKey) ?? [];
        bucket.push(note);
        middleMap.set(middleKey, bucket);
      }

      const middleGroups = [...middleMap.entries()]
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
