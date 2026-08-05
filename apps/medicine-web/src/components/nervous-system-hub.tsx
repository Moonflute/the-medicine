"use client";

import Link from "next/link";
import { BookOpen, BrainCircuit, ChevronRight, Expand, Focus, Info, Move, Route, Search, Stethoscope, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { NeuroAtlas } from "@/lib/webdb";
import { NativeNeuroAtlas, type NeuroAtlasLayer } from "@/components/native-neuro-atlas";
import { imageAtlasViewForPathway, imageAtlasViewForStructure } from "@/components/image-neuro-atlas";
import { neuroNoteHref, type NeuroNoteKind } from "@/lib/neuro-notes";

type Tab = "atlas" | "nex" | "notes";
type ViewItem = NeuroAtlas["views"][number];

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
  const [tab, setTab] = useState<Tab>("atlas");
  const [viewId, setViewId] = useState("whole-neuraxis");
  const [selectedId, setSelectedId] = useState("");
  const [pathwayId, setPathwayId] = useState("");
  const [pathwayStageIndex, setPathwayStageIndex] = useState<number>();
  const [hoveredId, setHoveredId] = useState<string>();
  const [query, setQuery] = useState("");
  const [noteQuery, setNoteQuery] = useState("");
  const [noteKind, setNoteKind] = useState<"all" | NeuroNoteKind>("all");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | undefined>(undefined);
  const atlasWheelRef = useRef<HTMLDivElement | null>(null);

  const views = atlas.views.filter((item) => item.published && item.hierarchy.length > 0);
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
  const filteredNotes = noteEntries.filter((item) => (noteKind === "all" || item.kind === noteKind) && (item.title + " " + item.subtitle + " " + item.group).toLowerCase().includes(noteQuery.toLowerCase()));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedTab = params.get("tab");
    if (requestedTab === "nex" || requestedTab === "notes" || requestedTab === "atlas") setTab(requestedTab);
    const requestedView = params.get("view");
    if (requestedView && views.some((item) => item.id === requestedView)) setViewId(requestedView);
    const requestedPathway = params.get("pathway");
    if (requestedPathway && atlas.pathways.some((item) => item.id === requestedPathway)) setPathwayId(requestedPathway);
    const requestedStructure = params.get("structure");
    if (requestedStructure && structures.some((item) => item.id === requestedStructure)) setSelectedId(requestedStructure);
  }, [atlas.pathways, structures, views]);

  useEffect(() => {
    const element = atlasWheelRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => { event.preventDefault(); setZoom((value) => Math.max(.75, Math.min(2.4, value + (event.deltaY < 0 ? .1 : -.1)))); };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [fullScreen]);

  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };
  const chooseView = (id: string) => { setViewId(id); setPathwayId(""); setPathwayStageIndex(undefined); reset(); setPickerOpen(false); };
  const chooseStructure = (id: string) => { setSelectedId(id); setPathwayId(""); setPathwayStageIndex(undefined); };
  const choosePathway = (id: string) => { const pathway = atlas.pathways.find((item) => item.id === id); setPathwayId(id); setPathwayStageIndex(undefined); if (pathway?.nodes?.[0]) setSelectedId(pathway.nodes[0]); const nextView = pathway ? imageAtlasViewForPathway(pathway.id) : undefined; if (nextView) setViewId(nextView); reset(); setPickerOpen(false); };
  const choosePathwayStage = (index: number) => { const segment = selectedPathway?.segments?.[index]; if (!segment) return; setPathwayStageIndex(index); setSelectedId(segment.structureId); const nextView = imageAtlasViewForStructure(segment.structureId, viewId); if (nextView) setViewId(nextView); };
  const onAtlasPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => { drag.current = { x: pan.x, y: pan.y, startX: event.clientX, startY: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); };
  const onAtlasPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => { if (drag.current) setPan({ x: drag.current.x + event.clientX - drag.current.startX, y: drag.current.y + event.clientY - drag.current.startY }); };
  const onAtlasPointerEnd = () => { drag.current = undefined; };
  const canvas = <NativeNeuroAtlas viewId={viewId} layer={layer} pathwayId={pathwayId} selectedId={selectedId} hoveredId={hoveredId} onSelect={chooseStructure} onHover={setHoveredId} />;

  return <main className="mx-auto w-full max-w-[1540px] space-y-5 px-3 pb-24 pt-4 sm:px-5 lg:px-7">
    <header className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 via-white to-cyan-50 px-4 py-4 shadow-sm sm:px-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-teal-700"><BrainCircuit className="h-4 w-4" />신경계 Hub</div><p className="mt-1 text-sm text-slate-600">Atlas에서 구조를 찾고, 자세한 내용은 독립 노트에서 확인합니다.</p></div><button type="button" onClick={() => setEducationOpen((value) => !value)} aria-label="교육용 도해 안내" className="rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-800"><Info className="h-4 w-4" /></button></div>{educationOpen ? <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-950">이 지도는 해부학과 신경진찰 복습을 위한 교육용 도해입니다. 실제 환자는 병력, 진찰, 영상·전기진단검사와 전문 지침을 함께 해석합니다.</p> : null}<div className="mt-4 flex flex-wrap gap-2" role="tablist">{([["atlas", "Atlas", BrainCircuit], ["nex", "NEx", Stethoscope], ["notes", "노트", BookOpen]] as const).map(([id, label, Icon]) => <button key={id} type="button" onClick={() => setTab(id)} className={"inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold " + (tab === id ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-teal-400")}><Icon className="h-4 w-4" />{label}</button>)}</div></header>

    {tab === "atlas" ? <section className="space-y-4"><section className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-[minmax(280px,1fr)_minmax(260px,.9fr)_auto] md:items-end"><div><p className="mb-1.5 text-xs font-bold tracking-[.13em] text-slate-500">지도 선택</p><button type="button" onClick={() => setPickerOpen(true)} className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 px-3 py-2.5 text-left text-sm font-semibold text-slate-800 hover:border-teal-500"><span className="truncate">{selectedPathway ? `경로 · ${selectedPathway.ko}` : `${view.hierarchy.join(" › ")} · ${view.label}`}</span><ChevronRight className="h-4 w-4 shrink-0" /></button></div><label className="relative block"><span className="mb-1.5 block text-xs font-bold tracking-[.13em] text-slate-500">구조 검색</span><Search className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="예: 시상, thalamus" className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-teal-600" />{query ? <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">{matches.map((item) => <button key={item.id} type="button" onClick={() => { chooseStructure(item.id); const targetView = imageAtlasViewForStructure(item.id, viewId); if (targetView) setViewId(targetView); setQuery(""); }} className="flex w-full items-center justify-between px-3 py-3 text-left hover:bg-teal-50"><span><b className="text-sm text-slate-950">{item.ko}</b><span className="ml-2 text-xs text-slate-500">{item.en}</span></span><ChevronRight className="h-4 w-4 text-slate-400" /></button>)}</div> : null}</label><button type="button" onClick={() => setFullScreen(true)} className="inline-flex h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 hover:border-teal-500"><Expand className="h-4 w-4" />전체 화면</button></section>
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]"><section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5"><div className="min-w-0"><Breadcrumb view={view} /><h1 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">{view.label}</h1><p className="mt-1 text-sm text-slate-600">{view.description}</p></div><div className="flex gap-1"><button type="button" aria-label="축소" onClick={() => setZoom((value) => Math.max(.75, value - .15))} className="rounded-lg border border-slate-200 p-2"><ZoomOut className="h-4 w-4" /></button><button type="button" aria-label="확대" onClick={() => setZoom((value) => Math.min(2.4, value + .15))} className="rounded-lg border border-slate-200 p-2"><ZoomIn className="h-4 w-4" /></button><button type="button" aria-label="초기화" onClick={reset} className="rounded-lg border border-slate-200 p-2"><RotateCcw className="h-4 w-4" /></button></div></div><div ref={atlasWheelRef} className="relative min-h-[500px] overflow-hidden bg-slate-50 sm:min-h-[660px]" onPointerDown={onAtlasPointerDown} onPointerMove={onAtlasPointerMove} onPointerUp={onAtlasPointerEnd} onPointerCancel={onAtlasPointerEnd}><div className="absolute inset-0 h-full w-full touch-none" style={{ transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`, transformOrigin: "center", transition: "transform 100ms ease-out" }}>{canvas}</div>{hoveredStructure ? <div className="pointer-events-none absolute left-3 top-3 rounded-xl border border-teal-200 bg-white/95 px-3 py-2 shadow-sm"><p className="text-sm font-bold text-slate-950">{hoveredStructure.ko}</p><p className="text-xs text-slate-600">{hoveredStructure.en}</p></div> : null}<div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-slate-200 bg-white/95 px-2.5 py-1.5 text-xs text-slate-600"><Move className="mr-1 inline h-3.5 w-3.5" />드래그로 이동 · 휠/핀치로 확대 · 구조 선택</div></div></section>
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-5 xl:self-start"><p className="flex items-center gap-2 text-xs font-bold tracking-[.14em] text-teal-700">{selectedPathway ? <Route className="h-4 w-4" /> : <Focus className="h-4 w-4" />}{selectedPathway ? "신경 경로" : "해부 구조"}</p><h2 className="mt-3 text-xl font-bold text-slate-950">{selectedPathway?.ko ?? selected.ko}</h2><p className="text-sm text-slate-500">{selectedPathway?.en ?? selected.en}</p><p className="mt-4 text-sm leading-6 text-slate-700">{selectedPathway?.route ?? selected.summary}</p>{selectedPathway?.segments?.length ? <div className="mt-4 grid gap-2">{selectedPathway.segments.map((segment, index) => <button key={segment.structureId + index} type="button" onClick={() => choosePathwayStage(index)} className={"rounded-xl border px-3 py-2.5 text-left text-sm " + (pathwayStageIndex === index ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-400")}><b>{structures.find((item) => item.id === segment.structureId)?.ko ?? segment.structureId}</b><span className="mt-0.5 block text-xs text-slate-500">{segment.label}</span></button>)}</div> : null}{selectedPathway ? <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-950"><b>병변 해석</b><br />{selectedPathway.pattern}</p> : null}<Link href={neuroNoteHref(selectedPathway ? "pathway" : "structure", selectedPathway?.id ?? selected.id)} className="mt-5 flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800">자세한 노트 열기<ChevronRight className="h-4 w-4" /></Link>{(selectedPathway ? selectedPathway.links : selected.links).filter((title) => diseaseHrefs[title]).slice(0, 3).map((title) => <Link key={title} href={diseaseHrefs[title]} className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-800 hover:border-teal-500">{title}<ChevronRight className="h-4 w-4" /></Link>)}</aside></div>
      {pickerOpen ? <div className="fixed inset-0 z-[70] bg-slate-950/35 p-3" role="dialog" aria-modal="true" aria-label="지도 또는 경로 선택"><div className="mx-auto mt-[5vh] max-h-[86vh] max-w-5xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold tracking-[.14em] text-teal-700">Atlas 탐색</p><h2 className="mt-1 text-2xl font-bold text-slate-950">보기 또는 경로 선택</h2></div><button type="button" onClick={() => setPickerOpen(false)} aria-label="닫기" className="rounded-lg border border-slate-200 p-2"><X className="h-4 w-4" /></button></div><section className="mt-6"><h3 className="font-bold text-slate-950">보기</h3><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{views.map((item) => <button key={item.id} type="button" onClick={() => chooseView(item.id)} className={"rounded-xl border p-3 text-left " + (viewId === item.id && !selectedPathway ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-400")}><span className="block text-xs font-bold text-teal-700">{item.hierarchy.join(" › ")}</span><span className="mt-1 block font-bold text-slate-950">{item.label}</span></button>)}</div></section><section className="mt-7 border-t border-slate-100 pt-6"><h3 className="font-bold text-slate-950">경로 보기</h3><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{atlas.pathways.map((item) => <button key={item.id} type="button" onClick={() => choosePathway(item.id)} className={"rounded-xl border p-3 text-left " + (pathwayId === item.id ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-teal-400")}><span className="block text-xs font-bold text-teal-700">{item.kind}</span><span className="mt-1 block font-bold text-slate-950">{item.ko}</span><span className="mt-1 block text-xs text-slate-500">{item.en}</span></button>)}</div></section></div></div> : null}</section> : null}

    {tab === "nex" ? <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="flex items-center gap-2 text-xs font-bold tracking-[.14em] text-teal-700"><Stethoscope className="h-4 w-4" />신경학적 진찰</p><h1 className="mt-2 text-2xl font-bold text-slate-950">NEx · 반사 노트</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">검사를 고르면 독립 노트에서 반사 회로, 검사 방법, 정상·이상 소견, 국소화와 관련 질환을 확인합니다.</p><div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{atlas.reflexes.filter((item) => item.reviewStatus !== "retired").map((item) => <Link key={item.id} href={neuroNoteHref("reflex", item.id)} className="rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:border-teal-500 hover:bg-teal-50"><p className="font-bold text-slate-950">{item.label}</p><p className="mt-2 text-sm leading-6 text-slate-600">{item.purpose ?? item.arc}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-700">노트 열기<ChevronRight className="h-4 w-4" /></span></Link>)}</div></section> : null}

    {tab === "notes" ? <section className="space-y-4"><section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="flex items-center gap-2 text-xs font-bold tracking-[.14em] text-teal-700"><BookOpen className="h-4 w-4" />신경계 노트</p><h1 className="mt-2 text-2xl font-bold text-slate-950">해부 구조 · 경로 · 반사</h1><p className="mt-2 text-sm leading-6 text-slate-600">각 항목은 별도 노트로 열리며 해부학 정보, 담당·관련 기능, 관련 질환, 연관 구조와 Atlas 연결을 제공합니다.</p><div className="mt-5 flex flex-wrap gap-2">{(["all", "structure", "pathway", "reflex", "topic"] as const).map((kind) => <button key={kind} type="button" onClick={() => setNoteKind(kind)} className={"rounded-full border px-3 py-1.5 text-sm font-semibold " + (noteKind === kind ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 text-slate-600 hover:border-teal-400")}>{kind === "all" ? "전체" : kind === "structure" ? `해부 구조 ${atlas.structures.length}` : kind === "pathway" ? `경로 ${atlas.pathways.length}` : kind === "reflex" ? `NEx · 반사 ${atlas.reflexes.length}` : `주제 ${atlas.theoryTopics.length}`}</button>)}</div><label className="relative mt-4 block max-w-xl"><Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" /><input value={noteQuery} onChange={(event) => setNoteQuery(event.target.value)} placeholder="노트 검색" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-teal-600" /></label></section><section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{filteredNotes.map((item) => <Link key={item.kind + item.id} href={neuroNoteHref(item.kind, item.id)} className="min-h-36 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-500 hover:bg-teal-50"><p className="text-xs font-bold tracking-[.13em] text-teal-700">{item.group}</p><h2 className="mt-3 font-bold text-slate-950">{item.title}</h2><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{item.subtitle}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-700">노트 열기<ChevronRight className="h-4 w-4" /></span></Link>)}</section></section> : null}

    {fullScreen ? <div className="fixed inset-0 z-[80] bg-slate-950 p-3 sm:p-6"><div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white"><div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3"><div><Breadcrumb view={view} /><h2 className="text-lg font-bold text-slate-950">{view.label}</h2></div><div className="flex gap-1"><button type="button" aria-label="축소" onClick={() => setZoom((value) => Math.max(.75, value - .15))} className="rounded-lg border border-slate-200 p-2"><ZoomOut className="h-4 w-4" /></button><button type="button" aria-label="확대" onClick={() => setZoom((value) => Math.min(2.4, value + .15))} className="rounded-lg border border-slate-200 p-2"><ZoomIn className="h-4 w-4" /></button><button type="button" onClick={() => setFullScreen(false)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold">닫기</button></div></div><div ref={atlasWheelRef} className="relative min-h-0 flex-1 overflow-hidden bg-slate-50" onPointerDown={onAtlasPointerDown} onPointerMove={onAtlasPointerMove} onPointerUp={onAtlasPointerEnd} onPointerCancel={onAtlasPointerEnd}><div className="absolute inset-0 h-full w-full touch-none" style={{ transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`, transformOrigin: "center" }}>{canvas}</div></div></div></div> : null}
  </main>;
}
