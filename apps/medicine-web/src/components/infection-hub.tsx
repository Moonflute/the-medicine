"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Bug, GraduationCap, Microscope } from "lucide-react";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import { AntibioticQuiz } from "@/components/antibiotic-quiz";
import { ClinicalInfectionQuiz } from "@/components/clinical-infection-quiz";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";

type HubTab = "pathways" | "antibiotics" | "quiz";
type QuizFocus = "clinical" | "spectrum";

export function InfectionHub({ dataset, pathways }: { dataset: AntibioticSpectrumDataset; pathways: InfectionPathwayDataset }) {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<HubTab>(searchParams.get("tab") === "antibiotics" ? "antibiotics" : searchParams.get("tab") === "quiz" ? "quiz" : "pathways");
  const [quizFocus, setQuizFocus] = useState<QuizFocus>("clinical");
  const selectTab = (nextTab: HubTab) => { setTab(nextTab); const url = new URL(window.location.href); url.searchParams.set("tab", nextTab); window.history.replaceState(null, "", url); };

  return <div className="space-y-5">
    <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1" role="tablist" aria-label="Infection hub">
      <button type="button" role="tab" aria-selected={tab === "pathways"} onClick={() => selectTab("pathways")} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "pathways" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}><Bug className="h-4 w-4" />{"\uc9c8\ud658\ubcc4 \ud56d\uade0\uce58\ub8cc"}</button>
      <button type="button" role="tab" aria-selected={tab === "antibiotics"} onClick={() => selectTab("antibiotics")} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "antibiotics" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}><Microscope className="h-4 w-4" />{"\ud56d\uc0dd\uc81c overview"}</button>
      <button type="button" role="tab" aria-selected={tab === "quiz"} onClick={() => selectTab("quiz")} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "quiz" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}><GraduationCap className="h-4 w-4" />{"\ud034\uc988"}</button>
    </div>
    {tab === "pathways" ? <InfectionPathwayExplorer dataset={pathways} spectrum={dataset} /> : null}
    {tab === "antibiotics" ? <AntibioticOverview dataset={dataset} pathways={pathways} /> : null}
    {tab === "quiz" ? <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Quiz</div><h2 className="mt-2 text-2xl font-bold text-slate-950">{"\uac10\uc5fc \ud559\uc2b5 \ud034\uc988"}</h2><p className="mt-1 text-sm leading-6 text-slate-600">{"\ud558\ub098\uc758 \ud034\uc988 \ud654\uba74\uc5d0\uc11c \uc9c8\ud658 \uacbd\ub85c\uc640 \ud56d\uc0dd\uc81c spectrum \ubb38\uc81c\ub97c \uc120\ud0dd\ud574 \ud480 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}</p></div><div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1"><button type="button" onClick={() => setQuizFocus("clinical")} className={`rounded-lg px-3 py-2 text-sm font-semibold ${quizFocus === "clinical" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600"}`}>{"\uc9c8\ud658 \uacbd\ub85c"}</button><button type="button" onClick={() => setQuizFocus("spectrum")} className={`rounded-lg px-3 py-2 text-sm font-semibold ${quizFocus === "spectrum" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600"}`}>{"\ud56d\uc0dd\uc81c spectrum"}</button></div>{quizFocus === "clinical" ? <ClinicalInfectionQuiz pathways={pathways.pathways.filter((item) => item.reviewStatus === "verified")} spectrum={dataset} sources={pathways.sources} /> : <AntibioticQuiz dataset={dataset} />}</section> : null}
  </div>;
}