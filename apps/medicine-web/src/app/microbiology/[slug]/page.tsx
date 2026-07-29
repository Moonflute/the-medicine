import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpenCheck, FlaskConical, Pill } from "lucide-react";
import { ParentPageFab } from "@/components/parent-page-fab";
import { RichTextLines } from "@/components/rich-text-lines";
import { getInfectionPathways } from "@/lib/infection-db";
import {
  getAntibioticSpectrum,
  getDiseaseBySlug,
  getDrugBySlug,
  getLabImgNoteBySlug,
  getMicrobiologyDataset,
  getMicrobiologyEntityBySlug,
  getMicrobiologyRelationsFor,
} from "@/lib/webdb";

const STATUS_LABELS: Record<string, string> = {
  draft: "초안",
  source_checked: "출처 확인",
  clinically_reviewed: "임상 검토",
  verified: "검증 완료",
  needs_update: "갱신 필요",
};

const KIND_LABELS: Record<string, string> = {
  organism: "병원체",
  clinical_group: "임상 병원체군",
  resistance_phenotype: "내성 phenotype",
};

function isSourceSection(title: string) {
  return /출처|reference|source/i.test(title);
}

export function generateStaticParams() {
  return getMicrobiologyDataset().entities.map((entity) => ({ slug: entity.slug }));
}

export default async function MicrobiologyDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const entity = getMicrobiologyEntityBySlug(slug);
  if (!entity) notFound();

  const dataset = getMicrobiologyDataset();
  const spectrum = getAntibioticSpectrum();
  const pathways = getInfectionPathways().pathways.filter((pathway) => pathway.reviewStatus === "verified");
  const spectrumIds = new Set(entity.spectrumIds);
  const relatedPathways = pathways.filter((pathway) =>
    pathway.pathogenGroups.some((group) => group.organisms.some((organism) => spectrumIds.has(organism.organismId))),
  );
  const relatedAntibiotics = spectrum.antibiotics
    .map((antibiotic) => {
      const levels = entity.spectrumIds.map((id) => antibiotic.coverage[id] ?? "unknown");
      const preferred = levels.includes("preferred");
      const active = levels.includes("active");
      return { antibiotic, rank: preferred ? 2 : active ? 1 : 0 };
    })
    .filter((item) => item.rank > 0)
    .sort((a, b) => b.rank - a.rank || a.antibiotic.inn.localeCompare(b.antibiotic.inn))
    .slice(0, 12);
  const sources = dataset.sources.filter((source) => entity.sourceIds.includes(source.id));
  const microbiologyRelations = getMicrobiologyRelationsFor(entity.id);
  const relatedEntities = microbiologyRelations
    .filter((relation) => ["microorganism", "clinicalGroup", "resistancePhenotype"].includes(relation.targetType))
    .map((relation) => dataset.entities.find((candidate) => candidate.id === relation.targetId))
    .filter((candidate): candidate is NonNullable<typeof candidate> => Boolean(candidate));
  const relatedDiseases = [...new Map(microbiologyRelations
    .filter((relation) => relation.targetType === "disease")
    .map((relation) => getDiseaseBySlug(relation.targetId))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item) => [item.slug, item])).values()].slice(0, 12);
  const relatedDrugs = [...new Map(microbiologyRelations
    .filter((relation) => relation.targetType === "drug" && relation.relation === "treated_with")
    .map((relation) => getDrugBySlug(relation.targetId))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item) => [item.slug, item])).values()].slice(0, 12);
  const relatedLabs = [...new Map(microbiologyRelations
    .filter((relation) => relation.targetType === "lab")
    .map((relation) => getLabImgNoteBySlug(relation.targetId))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item) => [item.slug, item])).values()].slice(0, 8);
  const infectionSlug = "MDgg6rCQ7Je8";
  const hubHref = `/specialty/${infectionSlug}/hub?view=pathogens`;

  return (
    <div className="space-y-6">
      <Link href={hubHref} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-800">
        <ArrowLeft className="h-4 w-4" />
        병원체 목록으로 돌아가기
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900">{KIND_LABELS[entity.entityKind]}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{entity.category}</span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">{STATUS_LABELS[entity.reviewStatus] ?? entity.reviewStatus} · {entity.reviewedAt}</span>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">{entity.koreanName || entity.scientificName}</h1>
        {entity.koreanName !== entity.scientificName ? <p className="mt-1 text-base italic text-slate-500">{entity.scientificName}</p> : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {entity.classification.map((item) => <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{item}</span>)}
        </div>
        <RichTextLines lines={entity.summary} className="mt-5 space-y-2 text-sm leading-7 text-slate-700" />
      </header>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
        <main className="space-y-4">
          {entity.sections.filter((section) => !isSourceSection(section.title)).map((section) => (
            <section key={section.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-950">{section.title}</h2>
              <RichTextLines lines={section.content} className="mt-3 space-y-2 text-sm leading-7 text-slate-700" />
            </section>
          ))}
        </main>

        <aside className="space-y-4">
          {relatedPathways.length ? (
            <section className="rounded-xl border border-teal-200 bg-teal-50/60 p-4">
              <h2 className="flex items-center gap-2 text-sm font-bold text-slate-950"><BookOpenCheck className="h-4 w-4 text-teal-700" />관련 감염질환</h2>
              <div className="mt-3 space-y-2">
                {relatedPathways.map((pathway) => (
                  <Link key={pathway.id} href={`/specialty/${infectionSlug}/hub?view=diseases&pathway=${pathway.id}`} className="flex items-center justify-between rounded-lg border border-teal-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-teal-400">
                    {pathway.displayName}<ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {relatedAntibiotics.length ? (
            <section className="rounded-xl border border-amber-200 bg-amber-50/55 p-4">
              <h2 className="flex items-center gap-2 text-sm font-bold text-slate-950"><Pill className="h-4 w-4 text-amber-700" />활성 기대 항생제</h2>
              <p className="mt-2 text-[11px] leading-5 text-slate-500">일반적 spectrum 표시이며 실제 AST를 대체하지 않습니다.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedAntibiotics.map(({ antibiotic, rank }) => (
                  <Link key={antibiotic.id} href={`/drugs/${antibiotic.drugSlug}`} className={`rounded-full border bg-white px-3 py-1.5 text-xs font-semibold ${rank === 2 ? "border-emerald-300 text-emerald-800" : "border-amber-200 text-amber-900"}`}>
                    {antibiotic.inn}
                  </Link>
                ))}
              </div>
              {entity.spectrumIds[0] ? <Link href={`/specialty/${infectionSlug}/hub?view=antibiotics&mode=matrix&organism=${entity.spectrumIds[0]}`} className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal-800">Spectrum matrix에서 보기<ArrowUpRight className="h-3.5 w-3.5" /></Link> : null}
            </section>
          ) : null}

          {relatedDiseases.length ? (
            <section className="rounded-xl border border-teal-200 bg-teal-50/50 p-4">
              <h2 className="text-sm font-bold text-slate-950">연결된 질환 문서</h2>
              <div className="mt-3 space-y-2">
                {relatedDiseases.map((disease) => <Link key={disease.slug} href={`/disease/${disease.slug}`} className="flex items-center justify-between rounded-lg border border-teal-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-teal-400">{disease.title}<ArrowUpRight className="h-3.5 w-3.5" /></Link>)}
              </div>
            </section>
          ) : null}

          {relatedDrugs.length ? (
            <section className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
              <h2 className="text-sm font-bold text-slate-950">관련 치료 약물 문서</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedDrugs.map((drug) => <Link key={drug.slug} href={`/drugs/${drug.slug}`} className="rounded-full border border-amber-200 bg-white px-3 py-1.5 text-xs font-semibold text-amber-950 hover:border-amber-500">{drug.title}</Link>)}
              </div>
            </section>
          ) : null}

          {relatedLabs.length ? (
            <section className="rounded-xl border border-sky-200 bg-sky-50/50 p-4">
              <h2 className="text-sm font-bold text-slate-950">관련 미생물검사</h2>
              <div className="mt-3 space-y-2">
                {relatedLabs.map((lab) => <Link key={lab.slug} href={`/lab-img/${lab.slug}`} className="flex items-center justify-between rounded-lg border border-sky-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-sky-400">{lab.title}<ArrowUpRight className="h-3.5 w-3.5" /></Link>)}
              </div>
            </section>
          ) : null}

          {relatedEntities.length ? (
            <section className="rounded-xl border border-slate-200 bg-white p-4">
              <h2 className="text-sm font-bold text-slate-950">관련 병원체 항목</h2>
              <div className="mt-3 space-y-2">
                {relatedEntities.map((related) => <Link key={related.id} href={`/microbiology/${related.slug}`} className="block rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-900">{related.title}</Link>)}
              </div>
            </section>
          ) : null}

          <section className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="flex items-center gap-2 text-sm font-bold text-slate-950"><FlaskConical className="h-4 w-4 text-slate-500" />근거 출처</h2>
            <div className="mt-3 space-y-2">
              {sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="block text-xs font-medium leading-5 text-sky-700 hover:underline">{source.label} · Tier {source.tier}</a>)}
            </div>
          </section>
        </aside>
      </div>
      <ParentPageFab href={hubHref} />
    </div>
  );
}
