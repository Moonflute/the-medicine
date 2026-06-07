import { notFound } from "next/navigation";
import { DomainNoteCard } from "@/components/domain-note-card";
import { RichTextLines } from "@/components/rich-text-lines";
import { getDrugBySlug, getDrugs } from "@/lib/webdb";

export function generateStaticParams() {
  return getDrugs().map((note) => ({ slug: note.slug }));
}

export default async function DrugDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getDrugBySlug(params.slug);

  if (!note) notFound();

  const priorityLabel =
    note.drugMeta?.priority === "tier_1"
      ? "최우선"
      : note.drugMeta?.priority === "tier_2"
        ? "중요"
        : note.drugMeta?.priority === "general"
          ? "일반"
          : "";

  return (
    <div className="space-y-6">
      <DomainNoteCard note={note} />
      {note.drugMeta ? (
        <section className="rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-sm">
          <div className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">Drug profile</div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {note.drugMeta.categoryPath ? (
              <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-stone-500">계통</div>
                <div className="mt-2 text-sm font-medium text-stone-900">{note.drugMeta.categoryPath}</div>
              </div>
            ) : null}
            {note.drugMeta.detailClass ? (
              <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-stone-500">세부 분류</div>
                <div className="mt-2 text-sm font-medium text-stone-900">{note.drugMeta.detailClass}</div>
              </div>
            ) : null}
            {note.drugMeta.brands.length > 0 ? (
              <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-stone-500">대표 상품명</div>
                <div className="mt-2 text-sm font-medium text-stone-900">{note.drugMeta.brands.join(", ")}</div>
              </div>
            ) : null}
            {note.drugMeta.doses.length > 0 ? (
              <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-stone-500">용량</div>
                <div className="mt-2 text-sm font-medium text-stone-900">{note.drugMeta.doses.join(", ")}</div>
              </div>
            ) : null}
          </div>

          {note.drugMeta.clinicalCore || priorityLabel || note.drugMeta.relatedDiseases.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {note.drugMeta.clinicalCore ? (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">핵심 약물</span>
              ) : null}
              {priorityLabel ? (
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">{priorityLabel}</span>
              ) : null}
              {note.drugMeta.relatedDiseases.map((item) => (
                <span key={item} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
      <section className="rounded-[28px] border border-stone-200 bg-white/80 p-5 shadow-sm">
        <div className="space-y-4">
          {note.sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-stone-200 p-4">
              <h3 className="font-medium text-stone-900">{section.title}</h3>
              <RichTextLines lines={section.content} className="mt-2 space-y-2 text-sm leading-6 text-stone-700" />
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
