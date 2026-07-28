import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DiseaseCard } from "@/components/disease-card";
import { DiseaseInfectionPanel } from "@/components/disease-infection-panel";
import { ParentPageFab } from "@/components/parent-page-fab";
import { RelatedClinicalContent } from "@/components/related-clinical-content";
import { getAllDiseases, getAntibioticSpectrum, getChiefComplaintLinksForTerms, getClinicalRelationsFor, getDiseaseBySlug, getDiseaseLinks, getSpecialties, getSpecialtyToc, isSpecialtyIndexDisease } from "@/lib/webdb";
import { getInfectionPathwaysForDisease } from "@/lib/infection-db";
function getDiseaseSequence(note: NonNullable<ReturnType<typeof getDiseaseBySlug>>) {
  const specialty = getSpecialties().find((item) => item.name === note.specialty);
  const toc = specialty ? getSpecialtyToc(specialty.slug) : undefined;
  const orderForPath = new Map<string, number>();

  toc?.items.forEach((item, index) => {
    orderForPath.set(item.path.join("\u0000"), index);
  });

  const orderFor = (item: typeof note) => {
    const path = item.classification.filter(Boolean);
    for (let length = path.length; length > 0; length -= 1) {
      const order = orderForPath.get(path.slice(0, length).join("\u0000"));
      if (order !== undefined) return order;
    }
    return Number.MAX_SAFE_INTEGER;
  };

  return getAllDiseases()
    .filter((item) => item.specialty === note.specialty && !isSpecialtyIndexDisease(item))
    .sort((a, b) => orderFor(a) - orderFor(b) || a.title.localeCompare(b.title, "ko"));
}

export function generateStaticParams() {
  return getAllDiseases().map((note) => ({ slug: note.slug }));
}

export default async function DiseaseDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getDiseaseBySlug(params.slug);

  if (!note) {
    notFound();
  }

  const ccLinks = getChiefComplaintLinksForTerms(note.chiefComplaints);
  const diseaseLinks = getDiseaseLinks();
  const parentHref = `/specialty/${Buffer.from(note.specialty, "utf-8").toString("base64url")}`;
  const relations = getClinicalRelationsFor("disease", note.id);
  const infectionPathways = getInfectionPathwaysForDisease(note.slug);
  const infectionSpecialty = getSpecialties().find((item) => item.name.replace(/^\d+\s*/, "").trim() === "감염");
  const diseaseSequence = getDiseaseSequence(note);
  const currentIndex = diseaseSequence.findIndex((item) => item.slug === note.slug);
  const previousDisease = currentIndex > 0 ? diseaseSequence[currentIndex - 1] : undefined;
  const nextDisease = currentIndex >= 0 && currentIndex < diseaseSequence.length - 1 ? diseaseSequence[currentIndex + 1] : undefined;

  return (
    <div className="space-y-6">
      <Link
        href={parentHref}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {note.specialty}
      </Link>

      <DiseaseCard note={note} ccLinks={ccLinks} diseaseLinks={diseaseLinks} hideOverview={isSpecialtyIndexDisease(note)} />
      {infectionSpecialty && infectionPathways.length > 0 ? <DiseaseInfectionPanel pathways={infectionPathways} spectrum={getAntibioticSpectrum()} specialtySlug={infectionSpecialty.slug} /> : null}
      <RelatedClinicalContent relations={relations} />
      {(previousDisease || nextDisease) ? <nav aria-label="질환 페이지 이동" className="grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
        {previousDisease ? <Link href={`/disease/${previousDisease.slug}`} className="group flex min-h-20 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-teal-300 hover:bg-teal-50">
          <ArrowLeft className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:-translate-x-0.5 group-hover:text-teal-700" />
          <span className="min-w-0"><span className="block text-xs font-semibold text-slate-500">이전 질환</span><span className="mt-1 block truncate text-sm font-semibold text-slate-950">{previousDisease.title}</span></span>
        </Link> : <div className="hidden sm:block" />}
        {nextDisease ? <Link href={`/disease/${nextDisease.slug}`} className="group flex min-h-20 items-center justify-end gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-right transition hover:border-teal-300 hover:bg-teal-50">
          <span className="min-w-0"><span className="block text-xs font-semibold text-slate-500">다음 질환</span><span className="mt-1 block truncate text-sm font-semibold text-slate-950">{nextDisease.title}</span></span>
          <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700" />
        </Link> : null}
      </nav> : null}
      <ParentPageFab href={parentHref} />
    </div>
  );
}
