"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Bug, BookOpenCheck, GraduationCap, Pill } from "lucide-react";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { InfectionHubQuiz } from "@/components/infection-hub-quiz";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import { MicrobiologyBrowser } from "@/components/microbiology-browser";
import type { AntibioticSpectrumDataset, MicrobiologyDataset } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";

type HubTab = "pathogens" | "diseases" | "antibiotics" | "quiz";

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
    : requestedView === "antibiotics" || requestedView === "quiz" || requestedView === "pathogens"
      ? requestedView
      : "pathogens";
  const tab = initialView;

  const selectTab = (nextTab: HubTab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", nextTab);
    params.delete("tab");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const tabs = [
    ["pathogens", "병원체", Bug],
    ["diseases", "질환", BookOpenCheck],
    ["antibiotics", "항생제", Pill],
    ["quiz", "퀴즈", GraduationCap],
  ] as const;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm" role="tablist" aria-label="감염 Hub">
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
