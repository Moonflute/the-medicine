import Link from "next/link";
import { ArrowRight, Bug, Pill, ShieldCheck } from "lucide-react";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathway } from "@/lib/infection-types";

function unique<T>(items: T[]) { return [...new Set(items)]; }

export function DiseaseInfectionPanel({ pathways, spectrum, specialtySlug }: { pathways: InfectionPathway[]; spectrum: AntibioticSpectrumDataset; specialtySlug: string }) {
  if (pathways.length === 0) return null;
  const organismIds = unique(pathways.flatMap((item) => item.pathogenGroups.flatMap((group) => group.organisms.filter((organism) => organism.likelihood !== "uncommon").map((organism) => organism.organismId)))).slice(0, 5);
  const antibioticIds = unique(pathways.flatMap((item) => item.empiricRegimens.flatMap((regimen) => regimen.components.flatMap((component) => component.antibioticIds)))).slice(0, 6);

  return (
    <section className="rounded-xl border border-teal-200 bg-teal-50/50 p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-700"><ShieldCheck className="h-4 w-4" />Verified pathway</div><h2 className="mt-2 text-xl font-bold text-slate-950">감염 치료 연결</h2></div>
        <Link href={`/specialty/${specialtySlug}/hub?view=diseases&pathway=${pathways[0].id}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-800">전체 치료 경로 <ArrowRight className="h-3.5 w-3.5" /></Link>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div><div className="flex items-center gap-2 text-sm font-bold text-slate-800"><Bug className="h-4 w-4 text-teal-700" />주요 원인균</div><div className="mt-3 flex flex-wrap gap-2">{organismIds.map((id) => { const organism = spectrum.organisms.find((item) => item.id === id); return organism ? <Link key={id} href={organism.microbiologySlug ? `/microbiology/${organism.microbiologySlug}` : `/drugs/antibiotics?mode=organism&organism=${id}`} className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-medium text-teal-900 hover:border-teal-500">{organism.label}</Link> : null; })}</div></div>
        <div><div className="flex items-center gap-2 text-sm font-bold text-slate-800"><Pill className="h-4 w-4 text-teal-700" />경험적 요법에 포함된 약물</div><div className="mt-3 flex flex-wrap gap-2">{antibioticIds.map((id) => { const drug = spectrum.antibiotics.find((item) => item.id === id); return drug ? <Link key={id} href={`/specialty/${specialtySlug}/hub?view=antibiotics&mode=antibiotic&antibiotic=${id}`} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:border-teal-500">{drug.inn}</Link> : null; })}</div></div>
      </div>
      <p className="mt-4 border-t border-teal-200 pt-3 text-xs leading-5 text-slate-600">조건별 선택을 요약한 교육용 연결입니다. 용량과 최종 처방은 본문, 배양 결과, 환자 상태와 기관 지침을 함께 확인합니다.</p>
    </section>
  );
}
