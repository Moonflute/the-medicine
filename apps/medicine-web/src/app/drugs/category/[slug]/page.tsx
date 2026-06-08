import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DomainNoteCard } from "@/components/domain-note-card";
import { buildDrugGroups } from "@/lib/drug-groups";
import { getDrugs } from "@/lib/webdb";

export function generateStaticParams() {
  return buildDrugGroups(getDrugs()).map((group) => ({ slug: group.slug }));
}

export default async function DrugCategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const group = buildDrugGroups(getDrugs()).find((item) => item.slug === params.slug);

  if (!group) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/drugs"
        className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to drug categories
      </Link>

      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Drug category</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">{group.title}</h1>
      </header>

      <div className="space-y-5">
        {group.middleGroups.map((middleGroup) => (
          <section key={`${group.title}-${middleGroup.title}`} className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
            {!(middleGroup.title === group.title && middleGroup.detailGroups.length === 0) ? (
              <div className="mb-4 rounded-2xl border border-stone-200/80 bg-stone-50/70 px-4 py-3">
                <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900">{middleGroup.title}</h2>
              </div>
            ) : null}

            <div className="space-y-5">
              {middleGroup.notes.length > 0 ? (
                <div className="grid gap-4 lg:grid-cols-2">
                  {middleGroup.notes.map((note) => (
                    <DomainNoteCard key={note.slug} note={note} href={`/drugs/${note.slug}`} />
                  ))}
                </div>
              ) : null}

              {middleGroup.detailGroups.map((detailGroup) => (
                <div key={`${group.title}-${middleGroup.title}-${detailGroup.title}`} className="space-y-3">
                  <div className="flex items-center gap-3 px-1">
                    <div className="h-px flex-1 bg-stone-200" />
                    <h3 className="shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                      {detailGroup.title}
                    </h3>
                    <div className="h-px flex-1 bg-stone-200" />
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    {detailGroup.notes.map((note) => (
                      <DomainNoteCard key={note.slug} note={note} href={`/drugs/${note.slug}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
