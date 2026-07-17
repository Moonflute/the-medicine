"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Bug, GraduationCap, Grid3X3, Pill, Stethoscope } from "lucide-react";
import type { AntibioticSpectrumDataset } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import { UnifiedInfectionQuiz } from "@/components/unified-infection-quiz";

type ExplorerMode = "disease" | "organism" | "antibiotic" | "matrix" | "quiz";

const K = {
  disease: "\uc9c8\ud658\ubcc4", organism: "\uade0\ubcc4", antibiotic: "\ud56d\uc0dd\uc81c\ubcc4", quiz: "\ud034\uc988",
  aria: "\uac10\uc5fc \uce58\ub8cc \ud0d0\uc0c9 \ubc29\uc2dd",
};

const MODES = [
  { id: "disease", label: K.disease, icon: Stethoscope },
  { id: "organism", label: K.organism, icon: Bug },
  { id: "antibiotic", label: K.antibiotic, icon: Pill },
  { id: "matrix", label: "Spectrum matrix", shortLabel: "Matrix", icon: Grid3X3 },
  { id: "quiz", label: K.quiz, icon: GraduationCap },
] as const;

function normalizeMode(value: string | null | undefined, fallback: ExplorerMode): ExplorerMode {
  if (value === "explore") return "disease";
  return MODES.some((item) => item.id === value) ? value as ExplorerMode : fallback;
}

export function InfectionTreatmentExplorer({ spectrum, pathways, initialMode = "disease" }: { spectrum: AntibioticSpectrumDataset; pathways: InfectionPathwayDataset; initialMode?: ExplorerMode }) {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<ExplorerMode>(() => normalizeMode(searchParams.get("mode"), initialMode));
  const changeMode = (nextMode: ExplorerMode) => {
    setMode(nextMode);
    const url = new URL(window.location.href);
    url.searchParams.set("mode", nextMode);
    window.history.replaceState(null, "", url);
  };
  return <div className="space-y-3">
    <section className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm"><div className="grid grid-cols-5 gap-1" role="tablist" aria-label={K.aria}>
      {MODES.map((item) => { const Icon = item.icon; return <button key={item.id} type="button" role="tab" aria-selected={mode === item.id} onClick={() => changeMode(item.id)} className={`flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-semibold transition sm:flex-row sm:gap-1.5 sm:px-2.5 sm:py-2 sm:text-xs ${mode === item.id ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}><Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /><span className="truncate"><span className="sm:hidden">{"shortLabel" in item ? item.shortLabel : item.label}</span><span className="hidden sm:inline">{item.label}</span></span></button>; })}
    </div></section>
    {mode === "disease" ? <InfectionPathwayExplorer dataset={pathways} spectrum={spectrum} embedded /> : null}
    {mode === "matrix" || mode === "organism" || mode === "antibiotic" ? <AntibioticOverview key={mode} dataset={spectrum} pathways={pathways} initialMode={mode} embedded /> : null}
    {mode === "quiz" ? <UnifiedInfectionQuiz pathways={pathways.pathways.filter((item) => item.reviewStatus === "verified")} spectrum={spectrum} sources={pathways.sources} /> : null}
  </div>;
}