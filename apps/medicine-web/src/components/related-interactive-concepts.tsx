import Link from "next/link";
import { Activity, ArrowRight } from "lucide-react";
import {
  getInteractiveConceptsForEntity,
  getInteractiveConceptsForSpecialty,
  type InteractiveEntityType,
} from "@/lib/interactive-concepts";

export function RelatedInteractiveConcepts({
  specialty,
  entity,
}: {
  specialty?: string;
  entity?: { type: InteractiveEntityType; title: string };
}) {
  const concepts = new Map<string, ReturnType<typeof getInteractiveConceptsForSpecialty>[number]>();

  if (specialty) {
    for (const concept of getInteractiveConceptsForSpecialty(specialty)) concepts.set(concept.slug, concept);
  }
  if (entity) {
    for (const concept of getInteractiveConceptsForEntity(entity.type, entity.title)) concepts.set(concept.slug, concept);
  }

  if (concepts.size === 0) return null;

  return (
    <section aria-labelledby="interactive-concepts-title" className="border-y border-slate-200 bg-white/70 py-5 sm:py-6">
      <div className="mb-4 flex items-center gap-3 px-1">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 text-white">
          <Activity className="h-5 w-5" />
        </span>
        <div>
          <h2 id="interactive-concepts-title" className="text-lg font-bold text-slate-950">인터랙티브 개념</h2>
          <p className="text-sm text-slate-600">변수를 조절하며 임상 기전을 확인합니다.</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {[...concepts.values()].map((concept) => (
          <Link
            key={concept.slug}
            href={`/interactive/${concept.slug}`}
            className="group flex min-h-24 items-center justify-between gap-4 rounded-lg border border-teal-200 bg-teal-50/70 px-4 py-4 transition hover:border-teal-500 hover:bg-white"
          >
            <span className="min-w-0">
              <span className="block text-base font-bold text-slate-950">{concept.shortTitle}</span>
              <span className="mt-1 block text-sm leading-5 text-slate-600">{concept.summary}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-teal-700 transition group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}
