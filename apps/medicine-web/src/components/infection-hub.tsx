"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Bug, Microscope } from "lucide-react";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";

type HubTab = "pathways" | "antibiotics";

export function InfectionHub({ dataset, pathways }: { dataset: AntibioticSpectrumDataset; pathways: InfectionPathwayDataset }) {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<HubTab>(searchParams.get("tab") === "antibiotics" ? "antibiotics" : "pathways");

  const selectTab = (nextTab: HubTab) => {
    setTab(nextTab);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", nextTab);
    window.history.replaceState(null, "", url);
  };

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1" role="tablist" aria-label="Infection hub">
        <button type="button" role="tab" aria-selected={tab === "pathways"} onClick={() => selectTab("pathways")} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "pathways" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}>
          <Bug className="h-4 w-4" />{"\uc9c8\ud658\ubcc4 \ud56d\uade0\uce58\ub8cc"}
        </button>
        <button type="button" role="tab" aria-selected={tab === "antibiotics"} onClick={() => selectTab("antibiotics")} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition sm:px-4 ${tab === "antibiotics" ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-950"}`}>
          <Microscope className="h-4 w-4" />{"\ud56d\uc0dd\uc81c overview"}
        </button>
      </div>

      {tab === "pathways" ? <InfectionPathwayExplorer dataset={pathways} spectrum={dataset} /> : null}
      {tab === "antibiotics" ? <AntibioticOverview dataset={dataset} pathways={pathways} /> : null}
    </div>
  );
}