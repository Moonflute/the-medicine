import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { getInfectionPathways } from "@/lib/infection-db";
import { getAntibioticSpectrum } from "@/lib/webdb";

export default function AntibioticsPage() {
  const dataset = getAntibioticSpectrum();

  return (
    <div className="space-y-7">
      <Link href="/drugs" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
        <ArrowLeft className="h-4 w-4" />
        약물 분류로 돌아가기
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm sm:px-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">항생제 overview</h1>
      </header>

      <Suspense fallback={<div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">항생제 overview를 불러오는 중입니다.</div>}><AntibioticOverview dataset={dataset} pathways={getInfectionPathways()} /></Suspense>
    </div>
  );
}
