import Link from "next/link";
import type { ClinicalRelation } from "@/lib/webdb";

const GROUPS = [
  { type: "disease", label: "질환·패밀리" },
  { type: "cc", label: "증상 / CC" },
  { type: "lab", label: "검사" },
  { type: "drug", label: "약물" },
  { type: "skill", label: "술기" },
  { type: "interactive", label: "인터랙티브 개념" },
];

function uniqueTargets(relations: ClinicalRelation[]) {
  const sorted = relations.slice().sort((a, b) => {
    const provenanceRank = (value: string) => (value === "generated" ? 1 : 0);
    return provenanceRank(a.provenance) - provenanceRank(b.provenance) || a.targetTitle.localeCompare(b.targetTitle, "ko");
  });
  const seen = new Set<string>();
  return sorted.filter((relation) => {
    const key = `${relation.targetType}|${relation.targetId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function relationLabel(relation: ClinicalRelation) {
  if (relation.relation === "child_of") return "하위";
  if (relation.relation === "parent_of") return "상위";
  if (relation.relation === "canonical_reference" || relation.relation === "canonical_for") return "기준";
  return relation.provenance === "generated" ? "자동" : "명시";
}

export function RelatedClinicalContent({ relations, limitPerGroup = 12 }: { relations: ClinicalRelation[]; limitPerGroup?: number }) {
  const groups = GROUPS.map((group) => ({
    ...group,
    items: uniqueTargets(relations.filter((relation) => relation.targetType === group.type)).slice(0, limitPerGroup),
  })).filter((group) => group.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <div className="eyebrow">Clinical graph</div>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">관련 임상 콘텐츠</h2>
        </div>
        <div className="text-xs text-slate-500">명시 관계 우선 · 자동 연결 별도 표시</div>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group.type} className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
            <h3 className="text-sm font-semibold text-slate-800">{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((relation) => (
                <Link key={`${relation.targetType}-${relation.targetId}`} href={relation.targetHref} title={relation.evidence || relation.relation} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-800">
                  <span>{relation.targetTitle}</span>
                  <span className={relation.provenance === "generated" ? "text-amber-700" : "text-teal-700"}>{relationLabel(relation)}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
