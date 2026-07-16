import Link from "next/link";
import { ArrowLeft, Microscope } from "lucide-react";
import { AntibioticExplorer } from "@/components/antibiotic-explorer";
import { getAntibioticSpectrum } from "@/lib/webdb";

export default function AntibioticsPage() {
  const dataset = getAntibioticSpectrum();

  return (
    <div className="space-y-7">
      <Link href="/drugs" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
        <ArrowLeft className="h-4 w-4" />
        약물 분류로 돌아가기
      </Link>

      <header className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-6 py-10 text-white shadow-xl sm:px-10">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[32px] border-teal-500/15" />
        <div className="absolute bottom-0 right-28 h-24 w-44 -skew-x-12 bg-amber-400/10" />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300"><Microscope className="h-4 w-4" />Antimicrobial spectrum</div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">항생제 임상 탐색기</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">항생제 {dataset.antibiotics.length}개와 주요 균·내성 phenotype {dataset.organisms.length}개를 spectrum, 투여 경로, 임신 관련 상태로 교차 탐색합니다.</p>
        </div>
      </header>

      <AntibioticExplorer dataset={dataset} />
    </div>
  );
}
