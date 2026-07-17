import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { InfectionTreatmentExplorer } from "@/components/infection-treatment-explorer";
import { getInfectionPathways } from "@/lib/infection-db";
import { getAntibioticSpectrum } from "@/lib/webdb";

const K = { back: "\uc57d\ubb3c \ubd84\ub958\ub85c \ub3cc\uc544\uac00\uae30", title: "\uac10\uc5fc \uce58\ub8cc \ud0d0\uc0c9\uae30", loading: "\uac10\uc5fc \uce58\ub8cc \ud0d0\uc0c9\uae30\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4." };

export default function AntibioticsPage() {
  return <div className="space-y-3">
    <div className="flex items-center justify-between gap-3"><Link href="/drugs" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"><ArrowLeft className="h-4 w-4" />{K.back}</Link><h1 className="truncate text-xl font-bold text-slate-950 sm:text-2xl">{K.title}</h1></div>
    <Suspense fallback={<div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">{K.loading}</div>}><InfectionTreatmentExplorer spectrum={getAntibioticSpectrum()} pathways={getInfectionPathways()} initialMode="matrix" /></Suspense>
  </div>;
}
