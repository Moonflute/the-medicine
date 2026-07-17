import Link from "next/link";
import { notFound } from "next/navigation";
import { ParentPageFab } from "@/components/parent-page-fab";
import { AntibioticClinicalLinks } from "@/components/antibiotic-clinical-links";
import { ReviewSaveButton } from "@/components/review-save-button";
import { RelatedClinicalContent } from "@/components/related-clinical-content";
import { RichTextLines } from "@/components/rich-text-lines";
import { buildDrugGroups } from "@/lib/drug-groups";
import { getAntibioticSpectrum, getClinicalRelationsFor, getDiseaseLinks, getDrugBySlug, getDrugToc, getDrugs, getSpecialties } from "@/lib/webdb";
import { getInfectionPathwaysForAntibiotic } from "@/lib/infection-db";

export function generateStaticParams() {
  return getDrugs().map((note) => ({ slug: note.slug }));
}

function getPriorityLabel(priority: string | undefined) {
  if (priority === "tier_1") return "Core";
  if (priority === "tier_2") return "Important";
  if (priority === "general") return "General";
  return "";
}

function normalizeDiseaseTerm(value: string) {
  return value.toLocaleLowerCase("ko").replace(/[\s\p{P}\p{S}]+/gu, "");
}

function getReviewStatusLabel(status: string | undefined) {
  if (status === "verified") return "직접 검증";
  if (status === "reviewed") return "검토 완료";
  if (status === "draft") return "검토 초안";
  return status || "미검토";
}

function resolveDiseaseHref(value: string, links: Array<{ term: string; href: string }>) {
  const normalized = normalizeDiseaseTerm(value);
  const exactHref = links.find(({ term }) => normalizeDiseaseTerm(term) === normalized)?.href;

  if (exactHref || normalized.length < 2) return exactHref;

  const partialHrefs = new Set(
    links
      .filter(({ term }) => {
        const normalizedTerm = normalizeDiseaseTerm(term);
        return normalizedTerm.includes(normalized) || normalized.includes(normalizedTerm);
      })
      .map(({ href }) => href),
  );

  return partialHrefs.size === 1 ? partialHrefs.values().next().value : undefined;
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
  const contentMeta = note.contentMeta;
  const contentSources = contentMeta?.sources?.filter(({ label, url }) => label && url) ?? [];
  const brands = note.drugMeta?.brands?.filter(Boolean) ?? [];
  const doses = note.drugMeta?.doses?.filter(Boolean) ?? [];
  const relatedDiseases = note.drugMeta?.relatedDiseases?.filter(Boolean) ?? [];
  const indications = note.drugMeta?.indications?.filter(Boolean) ?? [];
  const contraindications = note.drugMeta?.contraindications?.filter(Boolean) ?? [];
  const adverseEffects = note.drugMeta?.adverseEffects?.filter(Boolean) ?? [];
  const monitoring = note.drugMeta?.monitoring?.filter(Boolean) ?? [];
  const diseaseLinks = getDiseaseLinks();
  const summaryLines = note.drugMeta ? dedupeSummaryLines(note.summary.slice(0, 5), note.drugMeta) : note.summary.slice(0, 5);
  const parentGroup = buildDrugGroups(getDrugs(), getDrugToc()).find((group) => group.notes.some((item) => item.slug === note.slug));
  const parentHref = parentGroup ? "/drugs/category/" + parentGroup.slug : "/drugs";
  const relations = getClinicalRelationsFor("drug", note.id);
  const antibioticEntry = getAntibioticSpectrum().antibiotics.find((entry) => entry.drugSlug === note.slug);
  const infectionSpecialty = getSpecialties().find((item) => item.name.replace(/^\d+\s*/, "").trim() === "감염");
  const infectionPathways = antibioticEntry ? getInfectionPathwaysForAntibiotic(antibioticEntry.id) : [];

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <ReviewSaveButton item={{ type: "drug", id: note.id, title: note.title, href: `/drugs/${note.slug}`, category: note.category, summary: note.summary[0] || "" }} />
      </div>
      <section className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-6">
        <div className="text-xs  text-slate-500">
          {note.drugMeta?.categoryPath || note.category}
          {note.drugMeta?.detailClass ? ` > ${note.drugMeta.detailClass}` : ""}
        </div>

        <h1 className="mt-3 text-4xl font-semibold  text-slate-950">{note.title}</h1>

        {antibioticEntry ? (
          <Link href={`/drugs/antibiotics?antibiotic=${antibioticEntry.id}`} className="mt-4 inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">
            항생제 스펙트럼에서 보기
          </Link>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {note.folder ? <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{note.folder}</span> : null}
          {note.drugMeta?.detailClass ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{note.drugMeta.detailClass}</span>
          ) : null}
          {note.drugMeta?.clinicalCore ? (
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">Clinical core</span>
          ) : null}
          {priorityLabel ? <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">{priorityLabel}</span> : null}
          {contentMeta?.reviewStatus ? (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
              {getReviewStatusLabel(contentMeta.reviewStatus)}
              {contentMeta.reviewedAt ? ` · ${contentMeta.reviewedAt}` : ""}
            </span>
          ) : null}
        </div>

        {brands.length > 0 || doses.length > 0 || indications.length > 0 ? (
          <div className="mt-5 grid gap-3 md:grid-cols-3">
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

            {indications.length > 0 ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs uppercase text-slate-500">Indications</div>
                <RichTextLines lines={indications} className="mt-2 space-y-1.5 text-sm leading-6 text-slate-950" bulletStyle="plain" />
              </div>
            ) : null}
          </div>
        ) : null}

        {contraindications.length > 0 || adverseEffects.length > 0 || monitoring.length > 0 ? (
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {contraindications.length > 0 ? (
              <div className="rounded-lg border border-rose-200 bg-rose-50/70 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-rose-800">Contraindications</div>
                <RichTextLines lines={contraindications} className="mt-2 space-y-1.5 text-sm leading-6 text-rose-950" bulletStyle="plain" />
              </div>
            ) : null}

            {adverseEffects.length > 0 ? (
              <div className="rounded-lg border border-amber-200 bg-amber-50/70 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-800">Key adverse effects</div>
                <RichTextLines lines={adverseEffects} className="mt-2 space-y-1.5 text-sm leading-6 text-amber-950" bulletStyle="plain" />
              </div>
            ) : null}

            {monitoring.length > 0 ? (
              <div className="rounded-lg border border-sky-200 bg-sky-50/70 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-800">Monitoring</div>
                <RichTextLines lines={monitoring} className="mt-2 space-y-1.5 text-sm leading-6 text-sky-950" bulletStyle="plain" />
              </div>
            ) : null}
          </div>
        ) : null}

        {summaryLines.length > 0 ? (
          <div className="mt-5">
            <div className="mb-2 text-sm font-semibold text-teal-900">Quick reference</div>
            <RichTextLines lines={summaryLines} className="space-y-2 text-sm leading-6 text-slate-700" bulletStyle="plain" />
          </div>
        ) : null}

        {relatedDiseases.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {relatedDiseases.map((item) => {
              const href = resolveDiseaseHref(item, diseaseLinks);

              return href ? (
                <Link
                  key={item}
                  href={href}
                  className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800 transition hover:bg-teal-100 hover:text-teal-950"
                >
                  {item}
                </Link>
              ) : (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {item}
                </span>
              );
            })}
          </div>
        ) : null}

        {contentSources.length > 0 ? (
          <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sources</div>
            <ul className="mt-2 space-y-1.5">
              {contentSources.map((source) => (
                <li key={`${source.label}|${source.url}`}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
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
      {antibioticEntry && infectionSpecialty ? <AntibioticClinicalLinks antibioticId={antibioticEntry.id} pathways={infectionPathways} specialtySlug={infectionSpecialty.slug} /> : null}
      <RelatedClinicalContent relations={relations} />
      <ParentPageFab href={parentHref} />
    </div>
  );
}


