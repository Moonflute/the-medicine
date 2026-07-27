"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Bug, GraduationCap, Microscope } from "lucide-react";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import { ClinicalInfectionQuiz } from "@/components/clinical-infection-quiz";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";

type HubTab = "pathways" | "antibiotics" | "quiz";

export function InfectionHub({ dataset, pathways }: { dataset: AntibioticSpectrumDataset; pathways: InfectionPathwayDataset }) {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<HubTab>(searchParams.get("tab") === "antibiotics" ? "antibiotics" : searchParams.get("tab") === "quiz" ? "quiz" : "pathways");
  const selectTab = (nextTab: HubTab) => { setTab(nextTab); const url = new URL(window.location.href); url.searchParams.set("tab", nextTab); window.history.replaceState(null, "", url); };

  return <div className="space-y-5">
    <div className="inline-flex max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-1" role="tablist" aria-label="Infection hub">
      <button type="button" role="tab" aria-selected={tab === "pathways"} onClick={() => selectTab("pathways")} className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "pathways" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}><Bug className="h-4 w-4" />질환별 항균치료</button>
      <button type="button" role="tab" aria-selected={tab === "antibiotics"} onClick={() => selectTab("antibiotics")} className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "antibiotics" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}><Microscope className="h-4 w-4" />항생제 overview</button>
      <button type="button" role="tab" aria-selected={tab === "quiz"} onClick={() => selectTab("quiz")} className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "quiz" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}><GraduationCap className="h-4 w-4" />퀴즈</button>
    </div>
    {tab === "pathways" ? <InfectionPathwayExplorer dataset={pathways} spectrum={dataset} /> : null}
    {tab === "antibiotics" ? <AntibioticOverview dataset={dataset} pathways={pathways} /> : null}
    {tab === "quiz" ? <ClinicalInfectionQuiz pathways={pathways.pathways.filter((item) => item.reviewStatus !== "retired")} spectrum={dataset} sources={pathways.sources} /> : null}
  </div>;
}