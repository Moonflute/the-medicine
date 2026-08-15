"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Bug, BookOpenCheck, GraduationCap, Network, Pill } from "lucide-react";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { InfectionHubQuiz } from "@/components/infection-hub-quiz";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import { MicrobiologyBrowser } from "@/components/microbiology-browser";
import { InfectionRelationMap } from "@/components/infection-relation-map";
import type { AntibioticSpectrumDataset, MicrobiologyDataset } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";

type HubTab = "map" | "pathogens" | "diseases" | "antibiotics" | "quiz";

export function InfectionHub({
  dataset,
  pathways,
  microbiology,
}: {
  dataset: AntibioticSpectrumDataset;
  pathways: InfectionPathwayDataset;
  microbiology: MicrobiologyDataset;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedView = searchParams.get("view") ?? searchParams.get("tab");
  const initialView: HubTab = requestedView === "pathways" || requestedView === "diseases"
    ? "diseases"
    : requestedView === "map" || requestedView === "antibiotics" || requestedView === "quiz" || requestedView === "pathogens"
      ? requestedView
      : "map";
  const tab = initialView;

  const selectTab = (nextTab: HubTab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", nextTab);
    params.delete("tab");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const tabs = [
    ["map", "관계도", Network],
    ["pathogens", "병원체", Bug],
    ["diseases", "질환", BookOpenCheck],
    ["antibiotics", "항생제", Pill],
    ["quiz", "퀴즈", GraduationCap],
  ] as const;

  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-1 shadow-sm sm:gap-5 sm:pl-5">
        <h1 className="shrink-0 px-3 py-2 text-xl font-bold text-slate-950 sm:px-0 sm:text-2xl">감염 Hub</h1>
        <div className="grid min-w-0 flex-1 grid-cols-5 gap-1" role="tablist" aria-label="감염 Hub">
        {tabs.map(([value, label, Icon]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => selectTab(value)}
            className={`inline-flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-xs font-semibold transition sm:flex-row sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
              tab === value ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span>{label}</span>
          </button>
        ))}
        </div>
      </header>

      {tab === "map" ? <InfectionRelationMap pathways={pathways} spectrum={dataset} /> : null}
      {tab === "pathogens" ? <MicrobiologyBrowser dataset={microbiology} pathways={pathways} spectrum={dataset} /> : null}
      {tab === "diseases" ? <InfectionPathwayExplorer dataset={pathways} spectrum={dataset} /> : null}
      {tab === "antibiotics" ? <AntibioticOverview dataset={dataset} pathways={pathways} /> : null}
      {tab === "quiz" ? (
        <InfectionHubQuiz
          pathways={pathways.pathways.filter((item) => item.reviewStatus !== "retired")}
          spectrum={dataset}
          sources={pathways.sources}
          microbiology={microbiology}
        />
      ) : null}
    </div>
  );
}
