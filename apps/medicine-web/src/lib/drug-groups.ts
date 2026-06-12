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

const DRUG_TOP_ORDER = [
  "순환기",
  "호흡기",
  "소화기",
  "내분비",
  "비뇨 신장",
  "감염",
  "면역 염증 류마티스",
  "혈액 응고",
  "종양",
  "산부인과",
  "신경 정신",
  "안과",
  "이비인후과",
  "피부과",
  "마취 / 통증",
  "기타",
];

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

function sortLabels(a: string, b: string) {
  return a.localeCompare(b, "ko");
}

function getTopOrderRank(title: string) {
  const index = DRUG_TOP_ORDER.indexOf(title);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function formatTopTitle(title: string) {
  const rank = getTopOrderRank(title);
  if (rank === Number.MAX_SAFE_INTEGER) {
    return title;
  }
  return `${String(rank + 1).padStart(2, "0")} ${title}`;
}

function getMappedTopTitle(note: DomainNote) {
  const originalTop = note.drugMeta?.topClass || note.folder || "기타";
  const middle = note.drugMeta?.middleClass?.trim() || "";

  switch (originalTop) {
    case "심혈계":
      return "순환기";
    case "호흡기":
      return "호흡기";
    case "소화기":
    case "간담췌":
      return "소화기";
    case "내분비·대사":
      return "내분비";
    case "비뇨·신장":
      return "비뇨 신장";
    case "감염":
      return "감염";
    case "면역·염증·류마티스":
      return "면역 염증 류마티스";
    case "혈액·응고":
      return "혈액 응고";
    case "종양":
      return "종양";
    case "산부인과·소아":
      return "산부인과";
    case "신경·정신":
      return "신경 정신";
    case "안과·이비인후·피부":
      if (middle === "안과") return "안과";
      if (middle === "이비인후") return "이비인후과";
      if (middle === "피부") return "피부과";
      return "기타";
    case "근골격·통증·마취":
      return "마취 / 통증";
    case "전해질·영양·독성·기타":
      return "기타";
    default:
      return originalTop;
  }
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
    const topKey = getMappedTopTitle(note);
    const bucket = topMap.get(topKey) ?? [];
    bucket.push(note);
    topMap.set(topKey, bucket);
  }

  return [...topMap.entries()]
    .sort(([a], [b]) => getTopOrderRank(a) - getTopOrderRank(b) || sortLabels(a, b))
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
        title: formatTopTitle(topTitle),
        slug: toBase64Url(formatTopTitle(topTitle)),
        notes: sortDrugNotes(topNotes),
        middleGroups,
      };
    });
}
