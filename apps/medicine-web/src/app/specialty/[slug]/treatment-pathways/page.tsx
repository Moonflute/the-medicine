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

  return <div className="space-y-3">
    <div className="flex items-center justify-between gap-3">
      <Link href={`/specialty/${slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"><ArrowLeft className="h-4 w-4" />{"\uac10\uc5fc \ubd84\uacfc\ub85c \ub3cc\uc544\uac00\uae30"}</Link>
      <header className="flex min-w-0 items-baseline gap-2"><span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700 sm:inline">Infection pathways</span><h1 className="truncate text-xl font-bold text-slate-950 sm:text-2xl">{"\uc9c8\ud658\ubcc4 \ud56d\uade0\uce58\ub8cc"}</h1></header>
    </div>
    <Suspense fallback={<div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">감염 임상 경로를 불러오는 중입니다.</div>}><InfectionPathwayExplorer dataset={getInfectionPathways()} spectrum={getAntibioticSpectrum()} /></Suspense>
  </div>;
}
