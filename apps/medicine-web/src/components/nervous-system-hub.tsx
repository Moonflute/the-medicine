"use client";

import { useHubState, useHubScroll } from "@/lib/use-hub-state";

import Link from "next/link";
import { BookOpen, BrainCircuit, ChevronRight, Expand, Focus, Info, Move, Route, Stethoscope, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { NeuroAtlas } from "@/lib/webdb";
import { NativeNeuroAtlas, type NeuroAtlasLayer } from "@/components/native-neuro-atlas";
import { imageAtlasViewForPathway, imageAtlasViewForStructure } from "@/components/image-neuro-atlas";
import { neuroNoteHref, type NeuroNoteKind } from "@/lib/neuro-notes";
import { HubEmptyState, HubLayout, HubSearch, HubTabs, HubToolbar, type HubTab } from "@/components/hub-layout";

type Tab = "atlas" | "nex" | "notes";
type ViewItem = NeuroAtlas["views"][number];
const neuroTabs: HubTab<Tab>[] = [
  { id: "atlas", label: "Atlas", icon: BrainCircuit },
  { id: "nex", label: "NEx · 반사", icon: Stethoscope },
  { id: "notes", label: "이론 노트", icon: BookOpen },
];

function pathwayLayer(kind: string): NeuroAtlasLayer {
  const value = kind.toLowerCase();
  if (value.includes("autonomic")) return "autonomic";
  if (value.includes("reflex")) return "reflex";
  if (value.includes("special")) return "cranial";
  if (value.includes("sensory")) return "sensory";
  if (value.includes("motor")) return "motor";
  return "anatomy";
}

function Breadcrumb({ view }: { view: ViewItem }) {
  return <p className="text-xs font-bold uppercase tracking-[.14em] text-teal-700">{view.hierarchy.join(" › ")}</p>;
}

export function NervousSystemHub({ atlas, diseaseHrefs = {} }: { atlas: NeuroAtlas; diseaseHrefs?: Record<string, string>; drugHrefs?: Record<string, string> }) {
  useHubScroll();
  const [tab, setTab] = useHubState<Tab>("nervous-system-hub:tab", "atlas");
  const [viewId, setViewId] = useHubState("nervous-system-hub:viewId", "whole-neuraxis");
  const [selectedId, setSelectedId] = useHubState("nervous-system-hub:selectedId", "");
  const [pathwayId, setPathwayId] = useHubState("nervous-system-hub:pathwayId", "");
  const [pathPlaying, setPathPlaying] = useState(false);
  const [pathSpeed, setPathSpeed] = useState(1);
  const [lesionOpen, setLesionOpen] = useState(false);
  const [pathwayStageIndex, setPathwayStageIndex] = useState<number>();
  const [hoveredId, setHoveredId] = useState<string>();
  const [query, setQuery] = useHubState("nervous-system-hub:query", "");
  const [nexQuery, setNexQuery] = useHubState("nervous-system-hub:nexQuery", "");
  const [noteQuery, setNoteQuery] = useHubState("nervous-system-hub:noteQuery", "");
  const [noteKind, setNoteKind] = useHubState<"all" | NeuroNoteKind>("nervous-system-hub:noteKind", "all");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [zoom, setZoom] = useHubState("nervous-system-hub:zoom", 1);
  const [pan, setPan] = useHubState("nervous-system-hub:pan", { x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | undefined>(undefined);
  const atlasWheelRef = useRef<HTMLDivElement | null>(null);

  const views = useMemo(() => atlas.views.filter((item) => item.published && item.hierarchy.length > 0), [atlas.views]);
  const view = views.find((item) => item.id === viewId) ?? views[0]!;
  const structures = atlas.structures;
  const selectedPathway = atlas.pathways.find((item) => item.id === pathwayId);
  const selected = structures.find((item) => item.id === selectedId) ?? structures[0]!;
  const hoveredStructure = hoveredId ? structures.find((item) => item.id === hoveredId) : undefined;
  const layer = selectedPathway ? pathwayLayer(selectedPathway.kind) : "anatomy";
  const matches = useMemo(() => structures.filter((item) => (item.ko + " " + item.en).toLowerCase().includes(query.toLowerCase())).slice(0, 8), [structures, query]);
  const noteEntries = useMemo(() => [
    ...atlas.structures.map((item) => ({ kind: "structure" as const, id: item.id, title: item.ko, subtitle: item.en, group: item.group })),
    ...atlas.pathways.map((item) => ({ kind: "pathway" as const, id: item.id, title: item.ko, subtitle: item.en, group: "신경 경로" })),
    ...atlas.reflexes.filter((item) => item.reviewStatus !== "retired").map((item) => ({ kind: "reflex" as const, id: item.id, title: item.label, subtitle: item.purpose ?? item.arc, group: "NEx · 반사" })),
    ...atlas.theoryTopics.map((item) => ({ kind: "topic" as const, id: item.id, title: item.title, subtitle: item.summary, group: item.category })),
  ], [atlas]);
  const activeReflexes = atlas.reflexes.filter((item) => item.reviewStatus !== "retired");
  const filteredReflexes = activeReflexes.filter((item) => [item.label, item.purpose, item.arc].join(" ").toLowerCase().includes(nexQuery.trim().toLowerCase()));
  const filteredNotes = noteEntries.filter((item) => (noteKind === "all" || item.kind === noteKind) && (item.title + " " + item.subtitle + " " + item.group).toLowerCase().includes(noteQuery.toLowerCase()));

  useEffect(() => {
    queueMicrotask(() => {
      const params = new URLSearchParams(window.location.search);
      const requestedTab = params.get("tab");
      if (requestedTab === "nex" || requestedTab === "notes" || requestedTab === "atlas") setTab(requestedTab);
      const requestedView = params.get("view");
      if (requestedView && views.some((item) => item.id === requestedView)) setViewId(requestedView);
      const requestedPathway = params.get("pathway");
      if (requestedPathway && atlas.pathways.some((item) => item.id === requestedPathway)) setPathwayId(requestedPathway);
      const requestedStructure = params.get("structure");
      if (requestedStructure && structures.some((item) => item.id === requestedStructure)) setSelectedId(requestedStructure);
    });
  }, [atlas.pathways, structures, views, setTab, setViewId, setPathwayId, setSelectedId]);

  useEffect(() => {
    const element = atlasWheelRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => { event.preventDefault(); setZoom((value) => Math.max(.75, Math.min(2.4, value + (event.deltaY < 0 ? .1 : -.1)))); };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [tab, fullScreen, setZoom]);

  const updateUrl = (updates: Record<string, string | undefined>) => { const params = new URLSearchParams(window.location.search); Object.entries(updates).forEach(([key, value]) => value ? params.set(key, value) : params.delete(key)); window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`); };
  const selectTab = (next: Tab) => { setTab(next); updateUrl({ tab: next }); };
  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };
  const chooseView = (id: string) => { setPathPlaying(false); setLesionOpen(false); setViewId(id); setPathwayId(""); setPathwayStageIndex(undefined); updateUrl({ tab: "atlas", view: id, pathway: undefined }); reset(); setPickerOpen(false); };
  const chooseStructure = (id: string) => { setPathPlaying(false); setLesionOpen(false); setSelectedId(id); setPathwayId(""); setPathwayStageIndex(undefined); updateUrl({ tab: "atlas", structure: id, pathway: undefined }); };
  const choosePathway = (id: string) => { setPathPlaying(false); setLesionOpen(false); const pathway = atlas.pathways.find((item) => item.id === id); setPathwayId(id); setPathwayStageIndex(undefined); if (pathway?.nodes?.[0]) setSelectedId(pathway.nodes[0]); const nextView = pathway ? imageAtlasViewForPathway(pathway.id) : undefined; if (nextView) setViewId(nextView); updateUrl({ tab: "atlas", pathway: id || undefined, view: nextView }); reset(); setPickerOpen(false); };
  const choosePathwayStage = (index: number) => { setPathPlaying(false); const segment = selectedPathway?.segments?.[index]; if (!segment) return; setPathwayStageIndex(index); setSelectedId(segment.structureId); const nextView = imageAtlasViewForStructure(segment.structureId, viewId); if (nextView) setViewId(nextView); };
  useEffect(() => {
    if (!pathPlaying || !selectedPathway?.segments?.length) return;
    const segments = selectedPathway.segments;
    const timer = window.setInterval(() => {
      setPathwayStageIndex((previous) => {
        const next = previous === undefined ? 0 : Math.min(previous + 1, segments.length - 1);
        return next;
      });
    }, 2200 / pathSpeed);
    return () => clearInterval(timer);
  }, [pathPlaying, pathSpeed, selectedPathway]);
  useEffect(() => {
    if (!pathPlaying || pathwayStageIndex === undefined) return;
    const segment = selectedPathway?.segments?.[pathwayStageIndex];
    if (!segment) return;
    const nextView = imageAtlasViewForStructure(segment.structureId);
    queueMicrotask(() => { setSelectedId(segment.structureId); if(nextView) setViewId(nextView); if(pathwayStageIndex === selectedPathway!.segments!.length-1) setPathPlaying(false); });
  }, [pathPlaying, pathwayStageIndex, selectedPathway, setSelectedId, setViewId]);
  const onAtlasPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => { if ((event.target as Element).closest("[role=button],button")) return; drag.current = { x: pan.x, y: pan.y, startX: event.clientX, startY: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); };
  const onAtlasPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => { if (drag.current) setPan({ x: drag.current.x + event.clientX - drag.current.startX, y: drag.current.y + event.clientY - drag.current.startY }); };
  const onAtlasPointerEnd = () => { drag.current = undefined; };
  const canvas = <NativeNeuroAtlas viewId={viewId} layer={layer} pathwayId={pathwayStageIndex === undefined ? pathwayId : ""} selectedId={selectedId} hoveredId={hoveredId} onSelect={chooseStructure} onHover={setHoveredId} />;

  return <HubLayout hub="nervous-system" title="신경계 Hub"
    description="Atlas에서 해부 구조와 신경 경로를 찾고, NEx와 개별 이론 노트로 이어서 학습합니다."
    date={atlas.updatedAt}
    stats={[{ label: "해부 구조", value: atlas.structures.length }, { label: "신경 경로", value: atlas.pathways.length }, { label: "NEx · 반사", value: activeReflexes.length }, { label: "노트", value: noteEntries.length }]}>
    <HubTabs label="신경계 Hub 탐색" tabs={neuroTabs} value={tab} onChange={selectTab}>
    {tab === "atlas" ? <section className="space-y-5">
      <HubToolbar title="Atlas 탐색" description="구조를 검색하거나 보기를 선택해 위치와 연결 경로를 확인합니다.">
        <div className="relative min-w-0 flex-[1_1_260px]">
          <HubSearch label="해부 구조 검색" value={query} onChange={setQuery} placeholder="구조명 검색 · 예: Thalamus, 시상" />
          {query ? <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-[var(--surface)] shadow-lg">
            {matches.length ? matches.map((item) => <button key={item.id} type="button" onClick={() => { chooseStructure(item.id); const targetView = imageAtlasViewForStructure(item.id, viewId); if (targetView) { setViewId(targetView); updateUrl({ view: targetView }); } setQuery(""); }} className="flex w-full items-center justify-between px-3 py-3 text-left hover:bg-slate-50"><span><b className="text-sm">{item.en}</b><span className="ml-2 text-xs text-slate-500">{item.ko}</span></span><ChevronRight className="h-4 w-4" /></button>) : <p className="p-4 text-sm text-slate-500" role="status">일치하는 구조가 없습니다.</p>}
          </div> : null}
        </div>
        <button type="button" onClick={() => setPickerOpen(true)} className="hub-button max-w-full"><span className="truncate">보기 · {view.label}</span><ChevronRight size={15} /></button>
        <button type="button" onClick={() => setFullScreen(true)} className="hub-button"><Expand size={15} />전체 화면</button>
        <button type="button" onClick={() => setEducationOpen((value) => !value)} aria-expanded={educationOpen} aria-label="교육용 도해 안내" className="hub-button"><Info size={15} /><span className="sr-only">도해 안내</span></button>
      </HubToolbar>
      {educationOpen ? <p className="hub-notice">이 지도는 해부학과 신경진찰 복습을 위한 교육용 도해입니다. 실제 환자는 병력, 진찰, 영상·전기진단검사와 전문 지침을 함께 해석합니다.</p> : null}
      <section className="hub-panel" aria-label="신경 경로 단계별 학습"><div className="flex flex-wrap items-center gap-3"><label className="flex min-w-0 flex-1 flex-col gap-1 text-xs font-bold text-teal-800">따라갈 경로<select aria-label="따라갈 신경 경로" value={pathwayId} onChange={e=>choosePathway(e.target.value)} className="hub-select"><option value="">경로 선택</option>{atlas.pathways.filter(p=>p.segments?.length).map(p=><option key={p.id} value={p.id}>{p.ko}</option>)}</select></label>{selectedPathway?.segments?.length ? <><button type="button" className="simulation-primary" onClick={()=>{if(pathPlaying){setPathPlaying(false);return;}if(pathwayStageIndex===undefined||pathwayStageIndex===selectedPathway.segments!.length-1)setPathwayStageIndex(0);setPathPlaying(true);}}>{pathPlaying?"경로 일시정지":"경로 따라가기"}</button><button type="button" className="simulation-button" onClick={()=>choosePathwayStage(Math.max(0,(pathwayStageIndex??0)-1))}>이전 단계</button><button type="button" className="simulation-button" onClick={()=>choosePathwayStage(Math.min(selectedPathway.segments!.length-1,(pathwayStageIndex??-1)+1))}>다음 단계</button><select aria-label="경로 재생 속도" value={pathSpeed} onChange={e=>setPathSpeed(Number(e.target.value))} className="rounded-lg border bg-white p-2">{[.5,1,2].map(n=><option value={n} key={n}>{n}×</option>)}</select></>:null}</div><p className="mt-3 text-xs leading-5 text-slate-600">출발 → 중계 → 교차 → 도착을 차례로 따라갑니다. 단계 전환 속도는 신경 전도 속도가 아니며, 표식은 구조의 위치를 가리킵니다.</p>{selectedPathway && <div className="mt-4 grid gap-3 md:grid-cols-2"><div className="rounded-xl bg-white p-4"><p className="text-xs font-bold text-teal-700">현재 단계 {pathwayStageIndex===undefined?"전체":`${pathwayStageIndex+1} / ${selectedPathway.segments?.length}`}</p><h2 className="mt-1 font-bold">{pathwayStageIndex===undefined?selectedPathway.ko:selected.ko}</h2><p className="mt-2 text-sm leading-6">{pathwayStageIndex===undefined?selectedPathway.ko:selectedPathway.segments?.[pathwayStageIndex]?.label}</p><p className="mt-2 text-sm leading-6 text-slate-600">{pathwayStageIndex===undefined?selectedPathway.route:selected.summary}</p></div><div className="rounded-xl border border-amber-200 bg-amber-50 p-4"><h3 className="font-bold">이 경로가 손상되면?</h3><p className="mt-2 text-sm leading-6">교차 위치를 먼저 찾고, 손상된 쪽과 증상이 나타날 쪽의 관계를 예상해 보세요.</p><button type="button" className="simulation-button mt-3" onClick={()=>{setPathPlaying(false);setLesionOpen(v=>!v);}}>{lesionOpen?"해석 접기":"교차 · 병변 해석 확인"}</button>{lesionOpen&&<div className="mt-3 space-y-2 text-sm leading-6"><p><b>교차:</b> {selectedPathway.decussation??"경로 노트에서 확인"}</p><p>{selectedPathway.laterality?.description}</p><p>{selectedPathway.pattern}</p></div>}</div></div>}</section>
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]"><section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5"><div className="min-w-0"><Breadcrumb view={view} /><h2 className="mt-1 text-xl font-bold text-slate-950">{view.label}</h2><p className="mt-1 text-sm text-slate-600">{view.description}</p></div><div className="flex gap-1"><button type="button" aria-label="축소" onClick={() => setZoom((value) => Math.max(.75, value - .15))} className="rounded-lg border border-slate-200 p-2"><ZoomOut className="h-4 w-4" /></button><button type="button" aria-label="확대" onClick={() => setZoom((value) => Math.min(2.4, value + .15))} className="rounded-lg border border-slate-200 p-2"><ZoomIn className="h-4 w-4" /></button><button type="button" aria-label="초기화" onClick={reset} className="rounded-lg border border-slate-200 p-2"><RotateCcw className="h-4 w-4" /></button></div></div><div ref={atlasWheelRef} className="relative min-h-[500px] overflow-hidden bg-slate-50 sm:min-h-[660px]" onPointerDown={onAtlasPointerDown} onPointerMove={onAtlasPointerMove} onPointerUp={onAtlasPointerEnd} onPointerCancel={onAtlasPointerEnd}><div className="absolute inset-0 h-full w-full touch-none" style={{ transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`, transformOrigin: "center", transition: "transform 100ms ease-out" }}>{canvas}</div>{hoveredStructure ? <div className="pointer-events-none absolute left-3 top-3 rounded-xl border border-teal-200 bg-white/95 px-3 py-2 shadow-sm"><p className="text-sm font-bold text-slate-950">{hoveredStructure.ko}</p><p className="text-xs text-slate-600">{hoveredStructure.en}</p></div> : null}<div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-slate-200 bg-white/95 px-2.5 py-1.5 text-xs text-slate-600"><Move className="mr-1 inline h-3.5 w-3.5" />드래그로 이동 · 휠/핀치로 확대 · 구조 선택</div></div></section>
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-5 xl:self-start"><p className="flex items-center gap-2 text-xs font-bold tracking-[.14em] text-teal-700">{selectedPathway ? <Route className="h-4 w-4" /> : <Focus className="h-4 w-4" />}{selectedPathway ? "신경 경로" : "해부 구조"}</p><h2 className="mt-3 text-xl font-bold text-slate-950">{selectedPathway?.ko ?? selected.ko}</h2><p className="text-sm text-slate-500">{selectedPathway?.en ?? selected.en}</p><p className="mt-4 text-sm leading-6 text-slate-700">{selectedPathway?.route ?? selected.summary}</p>{selectedPathway?.segments?.length ? <div className="mt-4 grid gap-2">{selectedPathway.segments.map((segment, index) => <button key={segment.structureId + index} type="button" onClick={() => choosePathwayStage(index)} className={"rounded-xl border px-3 py-2.5 text-left text-sm " + (pathwayStageIndex === index ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-400")}><b>{structures.find((item) => item.id === segment.structureId)?.ko ?? segment.structureId}</b><span className="mt-0.5 block text-xs text-slate-500">{segment.label}</span></button>)}</div> : null}{selectedPathway ? <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-950"><b>병변 해석</b><br />{selectedPathway.pattern}</p> : null}<Link href={neuroNoteHref(selectedPathway ? "pathway" : "structure", selectedPathway?.id ?? selected.id)} className="mt-5 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800">자세한 노트 열기<ChevronRight className="h-4 w-4" /></Link>{(selectedPathway ? selectedPathway.links : selected.links).filter((title) => diseaseHrefs[title]).slice(0, 3).map((title) => <Link key={title} href={diseaseHrefs[title]} className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-800 hover:border-teal-500">{title}<ChevronRight className="h-4 w-4" /></Link>)}</aside></div>
      {pickerOpen ? <div className="fixed inset-0 z-[70] bg-slate-950/35 p-3" role="dialog" aria-modal="true" aria-label="지도 또는 경로 선택"><div className="mx-auto mt-[5vh] max-h-[86vh] max-w-5xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold tracking-[.14em] text-teal-700">Atlas 탐색</p><h2 className="mt-1 text-2xl font-bold text-slate-950">보기 또는 경로 선택</h2></div><button type="button" onClick={() => setPickerOpen(false)} aria-label="닫기" className="rounded-lg border border-slate-200 p-2"><X className="h-4 w-4" /></button></div><section className="mt-6"><h3 className="font-bold text-slate-950">보기</h3><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{views.map((item) => <button key={item.id} type="button" onClick={() => chooseView(item.id)} className={"rounded-xl border p-3 text-left " + (viewId === item.id && !selectedPathway ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-400")}><span className="block text-xs font-bold text-teal-700">{item.hierarchy.join(" › ")}</span><span className="mt-1 block font-bold text-slate-950">{item.label}</span></button>)}</div></section><section className="mt-7 border-t border-slate-100 pt-6"><h3 className="font-bold text-slate-950">경로 보기</h3><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{atlas.pathways.map((item) => <button key={item.id} type="button" onClick={() => choosePathway(item.id)} className={"rounded-xl border p-3 text-left " + (pathwayId === item.id ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-400")}><span className="block text-xs font-bold text-teal-700">{item.kind}</span><span className="mt-1 block font-bold text-slate-950">{item.ko}</span><span className="mt-1 block text-xs text-slate-500">{item.en}</span></button>)}</div></section></div></div> : null}</section> : null}

    {tab === "nex" ? <>
      <HubToolbar title="NEx · 반사 노트" description="검사 방법, 반사 회로, 정상·이상 소견을 독립 노트에서 확인합니다." count={`${filteredReflexes.length} / ${activeReflexes.length}개`}>
        <HubSearch label="NEx 검색" value={nexQuery} onChange={setNexQuery} placeholder="검사명, 반사 또는 관련 구조 검색" />
      </HubToolbar>
      {filteredReflexes.length ? <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{filteredReflexes.map((item) => <Link key={item.id} href={neuroNoteHref("reflex", item.id)} className="hub-card">
        <span className="hub-card-kicker">NEx · 반사</span><h3>{item.label}</h3><p className="hub-card-description">{item.purpose ?? item.arc}</p><span className="hub-card-action">노트 열기<ChevronRight size={14} /></span>
      </Link>)}</div> : <HubEmptyState onReset={() => setNexQuery("")} />}
    </> : null}

    {tab === "notes" ? <>
      <HubToolbar title="해부 구조 · 경로 · 반사" description="해부학 정보, 기능, 증상·징후와 관련 질환을 개별 노트로 읽습니다." count={`${filteredNotes.length} / ${noteEntries.length}개`}>
        <HubSearch label="신경계 노트 검색" value={noteQuery} onChange={setNoteQuery} placeholder="구조명, 경로 또는 주제 검색" />
        <select className="hub-select" aria-label="노트 분류" value={noteKind} onChange={(event) => setNoteKind(event.target.value as typeof noteKind)}>
          <option value="all">모든 노트</option><option value="structure">해부 구조</option><option value="pathway">신경 경로</option><option value="reflex">NEx · 반사</option><option value="topic">주제</option>
        </select>
      </HubToolbar>
      {filteredNotes.length ? <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{filteredNotes.map((item) => <Link key={item.kind + item.id} href={neuroNoteHref(item.kind, item.id)} className="hub-card">
        <span className="hub-card-kicker">{item.group}</span><h3>{item.title}</h3><p className="hub-card-description line-clamp-2">{item.subtitle}</p><span className="hub-card-action">노트 열기<ChevronRight size={14} /></span>
      </Link>)}</div> : <HubEmptyState onReset={() => { setNoteQuery(""); setNoteKind("all"); }} />}
    </> : null}
    </HubTabs>

    {fullScreen ? <div className="fixed inset-0 z-[80] bg-slate-950 p-3 sm:p-6"><div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white"><div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3"><div><Breadcrumb view={view} /><h2 className="text-lg font-bold text-slate-950">{view.label}</h2></div><div className="flex gap-1"><button type="button" aria-label="축소" onClick={() => setZoom((value) => Math.max(.75, value - .15))} className="rounded-lg border border-slate-200 p-2"><ZoomOut className="h-4 w-4" /></button><button type="button" aria-label="확대" onClick={() => setZoom((value) => Math.min(2.4, value + .15))} className="rounded-lg border border-slate-200 p-2"><ZoomIn className="h-4 w-4" /></button><button type="button" onClick={() => setFullScreen(false)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold">닫기</button></div></div><div ref={atlasWheelRef} className="relative min-h-0 flex-1 overflow-hidden bg-slate-50" onPointerDown={onAtlasPointerDown} onPointerMove={onAtlasPointerMove} onPointerUp={onAtlasPointerEnd} onPointerCancel={onAtlasPointerEnd}><div className="absolute inset-0 h-full w-full touch-none" style={{ transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`, transformOrigin: "center" }}>{canvas}</div></div></div></div> : null}
  </HubLayout>;
}
