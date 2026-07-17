import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Table2 } from "lucide-react";
import { buildDrugGroups } from "@/lib/drug-groups";
import { ParentPageFab } from "@/components/parent-page-fab";
import { getDrugs, getDrugToc } from "@/lib/webdb";

export function generateStaticParams() {
  return buildDrugGroups(getDrugs(), getDrugToc()).map((group) => ({ slug: group.slug }));
}

function DrugLinks({ notes }: { notes: ReturnType<typeof getDrugs> }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <Link
          key={note.slug}
          href={`/drugs/${note.slug}`}
          className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-slate-300 hover:bg-white"
        >
          <span className="pr-3 text-sm font-medium text-slate-950">{note.title}</span>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
        </Link>
      ))}
    </div>
  );
}

export default async function DrugCategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const group = buildDrugGroups(getDrugs(), getDrugToc()).find((item) => item.slug === params.slug);

  if (!group) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/drugs"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to drug categories
      </Link>

      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase  text-slate-500">Drug category</div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold ">{group.title}</h1>
          {group.title.includes("감염") ? (
            <Link href="/drugs/antibiotics" className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800">
              <Table2 className="h-4 w-4" />
              항생제 overview
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </header>

      <div className="space-y-5">
        {group.middleGroups.map((middleGroup) => (
          <section key={`${group.title}-${middleGroup.title}`} className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
            {!(middleGroup.title === group.title && middleGroup.detailGroups.length === 0) ? (
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-stone-200" />
                <h2 className="shrink-0 text-xl font-semibold text-slate-950">{middleGroup.title}</h2>
                <div className="h-px flex-1 bg-stone-200" />
              </div>
            ) : null}

            <div className="space-y-5">
              {middleGroup.notes.length > 0 ? <DrugLinks notes={middleGroup.notes} /> : null}

              {middleGroup.detailGroups.map((detailGroup) => (
                <div key={`${group.title}-${middleGroup.title}-${detailGroup.title}`} className="space-y-3">
                  <div className="border-l-4 border-teal-600 py-1 pl-3">
                    <h3 className="text-sm font-semibold text-slate-700">{detailGroup.title}</h3>
                  </div>

                  <DrugLinks notes={detailGroup.notes} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <ParentPageFab href="/drugs" />
    </div>
  );
}
