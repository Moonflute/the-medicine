"use client";

import { useHubScroll, useHubState } from "@/lib/use-hub-state";
import { SkinStatus } from "@/components/skin-status";

import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Bug, BookOpenCheck, GraduationCap, Network, Pill } from "lucide-react";
import { AntibioticOverview } from "@/components/antibiotic-overview";
import { InfectionHubQuiz } from "@/components/infection-hub-quiz";
import { InfectionPathwayExplorer } from "@/components/infection-pathway-explorer";
import { MicrobiologyBrowser } from "@/components/microbiology-browser";
import { HubLayout, HubTabs, type HubTab } from "@/components/hub-layout";
import type { AntibioticSpectrumDataset, MicrobiologyDataset } from "@/lib/types";
import type { InfectionPathwayDataset } from "@/lib/infection-types";

type Tab = "map" | "pathogens" | "diseases" | "antibiotics" | "quiz";

const InfectionRelationMap = dynamic(
  () => import("@/components/infection-relation-map").then((module) => module.InfectionRelationMap),
  { loading: () => <SkinStatus kind="documentLoading" fallback="관계도를 불러오는 중입니다." stage className="rounded-xl border border-slate-200 bg-white p-8 text-sm text-slate-500" /> },
);

export function InfectionHub({
  dataset,
  pathways,
  microbiology,
}: {
  dataset: AntibioticSpectrumDataset;
  pathways: InfectionPathwayDataset;
  microbiology: MicrobiologyDataset;
}) {
  useHubScroll();
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedView = searchParams.get("view") ?? searchParams.get("tab");
  const initialView: Tab = requestedView === "pathways" || requestedView === "diseases"
    ? "diseases"
    : requestedView === "map" || requestedView === "antibiotics" || requestedView === "quiz" || requestedView === "pathogens"
      ? requestedView
      : "diseases";
  const [savedTab, setSavedTab] = useHubState<Tab>("infection-hub:tab", "diseases");
  const tab = requestedView ? initialView : savedTab;

  const selectTab = (nextTab: Tab) => {
    setSavedTab(nextTab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", nextTab);
    params.delete("tab");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const tabs: HubTab<Tab>[] = [
    { id: "diseases", label: "질환", icon: BookOpenCheck },
    { id: "pathogens", label: "병원체", icon: Bug },
    { id: "antibiotics", label: "항생제", icon: Pill },
    { id: "map", label: "관계도", icon: Network },
    { id: "quiz", label: "퀴즈", icon: GraduationCap },
  ];

  return (
    <HubLayout hub="infection" title="감염 Hub"
      description="질환 · 병원체 · 항생제를 연결해 탐색하고, 관계도와 퀴즈로 복습합니다."
      date={tab === "pathogens" ? microbiology.reviewedAt : tab === "antibiotics" ? dataset.reviewedAt : pathways.reviewedAt}
      dateLabel="선택 자료 검토일"
      stats={[
        { label: "질환 경로", value: pathways.pathways.filter((item) => item.reviewStatus !== "retired").length },
        { label: "병원체", value: microbiology.entities.length },
        { label: "항생제", value: dataset.antibiotics.length },
        { label: "출처", value: new Set([...pathways.sources, ...microbiology.sources, ...dataset.sources].map((item) => item.url)).size },
      ]}>
      <HubTabs label="감염 Hub 탐색" tabs={tabs} value={tab} onChange={selectTab}>
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
      </HubTabs>
    </HubLayout>
  );
}
