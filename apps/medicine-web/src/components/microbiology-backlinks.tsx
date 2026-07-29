import Link from "next/link";
import { ArrowUpRight, Bug } from "lucide-react";
import { getMicrobiologyDataset, getMicrobiologyRelationDataset } from "@/lib/webdb";

export function MicrobiologyBacklinks({ targetType, targetId }: { targetType: "disease" | "drug" | "lab"; targetId: string }) {
  const dataset = getMicrobiologyDataset();
  const relations = getMicrobiologyRelationDataset().relations.filter((relation) => relation.targetType === targetType && relation.targetId === targetId);
  const entities = [...new Map(relations
    .map((relation) => dataset.entities.find((entity) => entity.id === relation.sourceId))
    .filter((entity): entity is NonNullable<typeof entity> => Boolean(entity))
    .map((entity) => [entity.id, entity])).values()]
    .sort((a, b) => {
      const kindOrder = { organism: 0, clinical_group: 1, resistance_phenotype: 2 };
      return kindOrder[a.entityKind] - kindOrder[b.entityKind] || a.title.localeCompare(b.title, "ko");
    })
    .slice(0, 18);

  if (!entities.length) return null;
  return (
    <section className="rounded-xl border border-teal-200 bg-teal-50/50 p-4 sm:p-5">
      <h2 className="flex items-center gap-2 text-sm font-bold text-slate-950">
        <Bug className="h-4 w-4 text-teal-700" />
        관련 병원체
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {entities.map((entity) => (
          <Link key={entity.id} href={`/microbiology/${entity.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-semibold text-teal-950 hover:border-teal-500">
            {entity.koreanName || entity.scientificName}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}
