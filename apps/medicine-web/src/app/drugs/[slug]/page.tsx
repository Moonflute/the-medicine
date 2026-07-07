import { notFound } from "next/navigation";
import { RichTextLines } from "@/components/rich-text-lines";
import { getDrugBySlug, getDrugs } from "@/lib/webdb";

export function generateStaticParams() {
  return getDrugs().map((note) => ({ slug: note.slug }));
}

function getPriorityLabel(priority: string | undefined) {
  if (priority === "tier_1") return "Core";
  if (priority === "tier_2") return "Important";
  if (priority === "general") return "General";
  return "";
}

function dedupeSummaryLines(lines: string[], meta: NonNullable<ReturnType<typeof getDrugBySlug>>["drugMeta"]) {
  const brands = meta?.brands?.filter(Boolean) ?? [];
  const doses = meta?.doses?.filter(Boolean) ?? [];
  const categoryPath = meta?.categoryPath?.trim() ?? "";

  return lines.filter((line) => {
    const normalized = line.replace(/^\s*[-*]\s*/, "").trim();
    const lower = normalized.toLowerCase();

    if (/^(brand|brands|dose|doses|category|class|classification)\s*:/.test(lower)) {
      return false;
    }

    if (categoryPath && normalized === categoryPath) {
      return false;
    }

    if (brands.length > 0 && brands.some((brand) => normalized === brand || normalized.includes(brand))) {
      return false;
    }

    if (doses.length > 0 && doses.some((dose) => normalized === dose || normalized.includes(dose))) {
      return false;
    }

    return true;
  });
}
export default async function DrugDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getDrugBySlug(params.slug);

  if (!note) notFound();

  const priorityLabel = getPriorityLabel(note.drugMeta?.priority);
  const brands = note.drugMeta?.brands?.filter(Boolean) ?? [];
  const doses = note.drugMeta?.doses?.filter(Boolean) ?? [];
  const relatedDiseases = note.drugMeta?.relatedDiseases?.filter(Boolean) ?? [];
  const summaryLines = note.drugMeta ? dedupeSummaryLines(note.summary.slice(0, 5), note.drugMeta) : note.summary.slice(0, 5);

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-6">
        <div className="text-xs  text-slate-500">
          {note.drugMeta?.categoryPath || note.category}
          {note.drugMeta?.detailClass ? ` > ${note.drugMeta.detailClass}` : ""}
        </div>

        <h1 className="mt-3 text-4xl font-semibold  text-slate-950">{note.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {note.folder ? <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{note.folder}</span> : null}
          {note.drugMeta?.detailClass ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{note.drugMeta.detailClass}</span>
          ) : null}
          {note.drugMeta?.clinicalCore ? (
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">Clinical core</span>
          ) : null}
          {priorityLabel ? <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">{priorityLabel}</span> : null}
        </div>

        {brands.length > 0 || doses.length > 0 ? (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {brands.length > 0 ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs uppercase  text-slate-500">Brand</div>
                <div className="mt-2 text-sm font-medium text-slate-950">{brands.join(", ")}</div>
              </div>
            ) : null}

            {doses.length > 0 ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs uppercase  text-slate-500">Dose</div>
                <div className="mt-2 text-sm font-medium text-slate-950">{doses.join(", ")}</div>
              </div>
            ) : null}
          </div>
        ) : null}

        {summaryLines.length > 0 ? (
          <div className="mt-5">
            <RichTextLines lines={summaryLines} className="space-y-2 text-sm leading-6 text-slate-700" bulletStyle="plain" />
          </div>
        ) : null}

        {relatedDiseases.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {relatedDiseases.map((item) => (
              <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </section>

      <section className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm">
        <div className="space-y-4">
          {note.sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-medium text-slate-950">{section.title}</h3>
              <RichTextLines
                lines={section.content}
                className="mt-2 space-y-2 text-sm leading-6 text-slate-700"
                bulletStyle="plain"
              />
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}


