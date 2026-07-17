import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import { getInfectionPathways } from "@/lib/infection-db";
import { getAntibioticSpectrum, getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return getSpecialties().filter((item) => item.name.replace(/^\d+\s*/, "").trim() === "감염").map((item) => ({ slug: item.slug }));
}

export default async function InfectionTreatmentPathwaysPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const specialty = getSpecialties().find((item) => item.slug === slug);
  if (!specialty || specialty.name.replace(/^\d+\s*/, "").trim() !== "감염") notFound();

  return <div className="space-y-6">
    <Link href={`/specialty/${slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"><ArrowLeft className="h-4 w-4" />감염 분과로 돌아가기</Link>
    <header className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Infection pathways</div><h1 className="mt-2 text-3xl font-bold text-slate-950">질환별 항균치료</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">기존 원인균 중심 감염 자료와 항생제 spectrum을 질환·중증도·감염 환경별로 연결합니다.</p></header>
    <Suspense fallback={<div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">감염 임상 경로를 불러오는 중입니다.</div>}><InfectionPathwayExplorer dataset={getInfectionPathways()} spectrum={getAntibioticSpectrum()} /></Suspense>
  </div>;
}
