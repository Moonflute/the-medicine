"use client";

import Link from "next/link";
import { BookOpen, BrainCircuit, ChevronRight, Expand, Focus, Info, Move, RotateCcw, Route, Search, Stethoscope, X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { NeuroAtlas } from "@/lib/webdb";
import { NativeNeuroAtlas, type NeuroAtlasLayer } from "@/components/native-neuro-atlas";
import { imageAtlasViewForPathway, imageAtlasViewForStructure, imageAtlasViewIds } from "@/components/image-neuro-atlas";

type Tab = "structure" | "nex" | "theory";

type ViewItem = NeuroAtlas["views"][number];

const LAYERS: Array<{ id: NeuroAtlasLayer; label: string }> = [
  { id: "anatomy", label: "해부" },
  { id: "motor", label: "운동 경로" },
  { id: "sensory", label: "감각 경로" },
  { id: "cranial", label: "뇌신경" },
  { id: "reflex", label: "반사 회로" },
  { id: "dermatome", label: "Dermatome" },
  { id: "myotome", label: "Myotome" },
  { id: "peripheral", label: "말초신경" },
  { id: "autonomic", label: "자율신경 경로" },
];

const THEORY_SCOPES = ["\uC804\uCCB4", "중추신경계", "척수", "말초신경계", "뇌신경"] as const;

/** Each examination stage keeps its clinical label, while this map selects the matching atlas structure or the closest visible anatomical anchor. */
const NEX_STAGE_ANCHORS: Record<string, string[]> = {
  pupillary: ["optic-nerve", "optic-nerve", "midbrain", "midbrain", "cranial-nerve-roots", "cranial-nerve-roots", "cranial-nerve-roots"],
  corneal: ["cranial-nerve-roots", "cranial-nerve-roots", "pons", "pons", "cranial-nerve-roots", "cranial-nerve-roots"],
  "vestibulo-ocular": ["vestibular-nucleus", "cranial-nerve-roots", "vestibular-nucleus", "pons", "cranial-nerve-roots", "cranial-nerve-roots"],
  biceps: ["musculocutaneous-nerve", "nerve-root", "spinal-cord", "musculocutaneous-nerve", "musculocutaneous-nerve"],
  triceps: ["radial-nerve", "nerve-root", "spinal-cord", "radial-nerve", "radial-nerve"],
  brachioradialis: ["radial-nerve", "nerve-root", "spinal-cord", "radial-nerve", "radial-nerve"],
  patellar: ["femoral-nerve", "nerve-root", "spinal-cord", "femoral-nerve", "femoral-nerve"],
  achilles: ["tibial-nerve", "nerve-root", "spinal-cord", "tibial-nerve", "tibial-nerve"],
  plantar: ["tibial-nerve", "spinal-cord", "lateral-corticospinal", "tibial-nerve", "tibial-nerve"],
  pinprick: ["peripheral-nerve", "nerve-root", "spinal-cord", "spinothalamic", "spinothalamic", "thalamus", "postcentral-gyrus"],
  vibration: ["peripheral-nerve", "nerve-root", "dorsal-column", "medulla", "medulla", "thalamus", "postcentral-gyrus"],
  "visual-field-confrontation": ["optic-nerve", "optic-chiasm", "optic-tract", "optic-tract", "optic-tract", "occipital-lobe", "occipital-lobe"],
  "extraocular-movements": ["frontal-eye-field", "midbrain", "pons", "cranial-nerve-roots", "cranial-nerve-roots", "cranial-nerve-roots"],
  "facial-motor-exam": ["precentral-gyrus", "internal-capsule", "pons", "cranial-nerve-roots", "cranial-nerve-roots", "cranial-nerve-roots"],
  gag: ["cranial-nerve-roots", "cranial-nerve-roots", "medulla", "medulla", "cranial-nerve-roots", "cranial-nerve-roots"],
  "jaw-jerk": ["cranial-nerve-roots", "pons", "pons", "cranial-nerve-roots", "cranial-nerve-roots"],
  near: ["retina", "optic-nerve", "midbrain", "midbrain", "cranial-nerve-roots", "cranial-nerve-roots", "cranial-nerve-roots"],
  abdominal: ["peripheral-nerve", "spinal-cord", "spinal-cord", "peripheral-nerve"],
  cremasteric: ["peripheral-nerve", "spinal-cord", "spinal-cord", "peripheral-nerve"],
  cough: ["cranial-nerve-roots", "cranial-nerve-roots", "medulla", "medulla", "spinal-cord", "skeletal-muscle"],
  oculocephalic: ["vestibular-nucleus", "vestibular-nucleus", "pons", "pons", "cranial-nerve-roots"],
  "anal-wink": ["peripheral-nerve", "spinal-cord", "nerve-root", "skeletal-muscle"],
  bulbocavernosus: ["peripheral-nerve", "nerve-root", "spinal-cord", "skeletal-muscle"],
  "finger-nose-test": ["frontal-lobe", "pons", "cerebellar-hemisphere", "cerebellum", "skeletal-muscle"],
  "heel-shin-test": ["frontal-lobe", "pons", "cerebellar-hemisphere", "cerebellum", "skeletal-muscle"],
  "rapid-alternating-movements": ["frontal-lobe", "precentral-gyrus", "cerebellum", "skeletal-muscle"],
};

function pathwayLayer(kind: string): NeuroAtlasLayer {
  const normalized = kind.toLowerCase();
  if (normalized.includes("autonomic")) return "autonomic";
  if (normalized.includes("reflex")) return "reflex";
  if (normalized.includes("special")) return "cranial";
  if (normalized.includes("sensory")) return "sensory";
  if (normalized.includes("motor")) return "motor";
  return "anatomy";
}

function theoryScopeFor(viewId: string) {
  if (viewId.includes("plexus") || viewId.includes("limb") || viewId.includes("dermatome") || viewId.includes("nmj")) return "말초신경계";
  if (viewId.includes("spinal")) return "척수";
  if (viewId.includes("brainstem") || viewId.includes("inferior")) return "뇌신경";
  return "중추신경계";
}

const FALLBACK: Record<string, { en: string; ko: string; group: string; summary: string }> = {
  "frontal-lobe": { en: "Cerebrum", ko: "대뇌", group: "중추신경계", summary: "대뇌반구는 운동·감각·인지·언어 기능을 통합합니다." },
  "medial-frontal-cortex": { en: "Medial frontal cortex", ko: "내측 전두피질", group: "중추신경계", summary: "내측 전두피질은 자발운동과 실행 기능에 관여합니다." },
  "spinal-cord": { en: "Spinal cord", ko: "척수", group: "중추신경계", summary: "척수는 상위 중추 경로를 신경근·말초신경·분절 반사 회로와 연결합니다." },
  "dorsal-column": { en: "Dorsal columns", ko: "뒤기둥", group: "감각 경로", summary: "뒤기둥은 진동·고유감각·정교촉각을 전달하며 연수에서 교차합니다." },
  "lateral-corticospinal": { en: "Lateral corticospinal tract", ko: "가쪽피질척수로", group: "운동 경로", summary: "가쪽피질척수로는 수의운동 명령을 척수 운동 회로로 전달합니다." },
  spinothalamic: { en: "Anterolateral system", ko: "앞가쪽계", group: "감각 경로", summary: "앞가쪽계는 척수 분절에서 교차한 통각과 온각을 전달합니다." },
  thalamus: { en: "Thalamus", ko: "시상", group: "중추신경계", summary: "시상은 감각 및 운동 관련 정보를 대뇌피질로 중계하는 핵심 구조입니다." },
  cerebellum: { en: "Cerebellum", ko: "소뇌", group: "중추신경계", summary: "소뇌는 운동·자세·시간 조절과 운동학습을 조정합니다." },
  "brachial-plexus": { en: "Brachial plexus", ko: "상완신경총", group: "말초신경계", summary: "상완신경총은 C5–T1 섬유를 상지로 분배합니다." },
  "peripheral-nerve": { en: "Peripheral nerve", ko: "말초신경", group: "말초신경계", summary: "말초신경은 운동·감각·자율신경 섬유를 신경근과 표적 조직 사이로 전달합니다." },
  "neuromuscular-junction": { en: "Neuromuscular junction", ko: "신경근접합부", group: "운동단위", summary: "신경근접합부는 운동신경의 활동을 골격근 수축으로 전환합니다." },
  "skeletal-muscle": { en: "Skeletal muscle", ko: "골격근", group: "운동단위", summary: "골격근은 수의운동과 반사 반응의 최종 효과기입니다." },
};

function Breadcrumb({ view }: { view: ViewItem }) {
  return <p className="text-xs font-bold uppercase tracking-[.14em] text-teal-700">{view.hierarchy.join(" › ")}</p>;
}

function Title({ icon: Icon, eyebrow, title, text }: { icon: typeof BrainCircuit; eyebrow: string; title: string; text?: string }) {
  return <div>
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-teal-700"><Icon className="h-4 w-4" />{eyebrow}</div>
    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
    {text ? <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p> : null}
  </div>;
}

export function NervousSystemHub({ atlas, diseaseHrefs = {}, drugHrefs = {} }: { atlas: NeuroAtlas; diseaseHrefs?: Record<string, string>; drugHrefs?: Record<string, string> }) {
  const [tab, setTab] = useState<Tab>("structure");
  const [viewId, setViewId] = useState("whole-neuraxis");
  const [viewGroup, setViewGroup] = useState("중추신경계 › 전체 지도");
  const [layer, setLayer] = useState<NeuroAtlasLayer>("anatomy");
  const [pathwayId, setPathwayId] = useState("");
  const [pathwayStageIndex, setPathwayStageIndex] = useState<number | undefined>();
  const [selectedId, setSelectedId] = useState("");
  const [hoveredId, setHoveredId] = useState<string>();
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [fullScreen, setFullScreen] = useState(false);
  const [query, setQuery] = useState("");
  const [theoryQuery, setTheoryQuery] = useState("");
  const [desktopInfoOpen, setDesktopInfoOpen] = useState(true);
  const [theoryCategory, setTheoryCategory] = useState("\uC804\uCCB4");
  const [theoryScope, setTheoryScope] = useState<(typeof THEORY_SCOPES)[number]>("\uC804\uCCB4");
  const [theoryId, setTheoryId] = useState(atlas.theoryTopics[0]?.id ?? "");
  const [reflexId, setReflexId] = useState(atlas.reflexes.find((item) => item.reviewStatus !== "retired")?.id ?? "");
  const [nexStage, setNexStage] = useState(0);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [desktopViewPickerOpen, setDesktopViewPickerOpen] = useState(false);
  const [educationNoteOpen, setEducationNoteOpen] = useState(false);
  const [viewPickerOpen, setViewPickerOpen] = useState(false);
  const [urlHydrated, setUrlHydrated] = useState(false);
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | undefined>(undefined);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ distance: number; zoom: number } | undefined>(undefined);

  const views = atlas.views.filter((item) => item.published && item.hierarchy.length > 0);
  const view = views.find((item) => item.id === viewId) ?? views[0]!;
  const viewGroups = [...new Set(views.map((item) => item.hierarchy.join(" › ")))];
  const viewsInGroup = views.filter((item) => item.hierarchy.join(" › ") === viewGroup);
  const viewMeta = atlas.views.find((item) => item.id === view.id);
  const structures = atlas.structures;
  const selected = structures.find((item) => item.id === selectedId) ?? FALLBACK[selectedId] ?? FALLBACK["frontal-lobe"];
  const hoveredStructure = hoveredId ? structures.find((item) => item.id === hoveredId) ?? FALLBACK[hoveredId] : undefined;
  const pathways = atlas.pathways;
  const selectedPathway = pathways.find((item) => item.id === pathwayId);
  const reflexes = atlas.reflexes.filter((item) => item.reviewStatus !== "retired");
  const reflex = reflexes.find((item) => item.id === reflexId) ?? reflexes[0];
  const theoryCategories = ["\uC804\uCCB4", ...new Set(atlas.theoryTopics.map((item) => item.category))];
  const sourceById = new Map(atlas.sources.filter((source) => source.id).map((source) => [source.id!, source]));
  const nexRoute = reflex?.route ?? [];
  const nexNodeId = nexRoute[nexStage];
  const nexNode = structures.find((item) => item.id === nexNodeId);
  const nexAtlasTarget = NEX_STAGE_ANCHORS[reflex?.id ?? ""]?.[nexStage] ?? (structures.some((item) => item.id === nexNodeId) ? nexNodeId : undefined);
  const nexAtlasView = nexAtlasTarget ? imageAtlasViewForStructure(nexAtlasTarget, reflex?.viewId) : undefined;
  const theory = atlas.theoryTopics.find((item) => item.id === theoryId) ?? atlas.theoryTopics[0];
  const theoryCards = atlas.theoryTopics.filter((item) => (theoryCategory === "\uC804\uCCB4" || item.category === theoryCategory) && (theoryScope === "\uC804\uCCB4" || theoryScopeFor(item.viewId) === theoryScope) && (item.title + " " + item.summary).toLowerCase().includes(theoryQuery.toLowerCase()));
  const pathwayOptions = pathways.filter((item) => layer === "anatomy" || pathwayLayer(item.kind ?? "") === layer);
  const matches = useMemo(() => structures.filter((item) => (item.en + " " + item.ko).toLowerCase().includes(query.toLowerCase())).slice(0, 8), [structures, query]);
  const selectedLinks: string[] = selectedPathway?.links ?? ("links" in selected && Array.isArray(selected.links) ? selected.links : []);
  const selectedDrugLinks: string[] = selectedPathway?.drugLinks ?? ("drugLinks" in selected && Array.isArray(selected.drugLinks) ? selected.drugLinks : []);

  useEffect(() => {
    queueMicrotask(() => {
      const params = new URLSearchParams(window.location.search);
      const candidateView = params.get("view"); const candidateLayer = params.get("layer") as NeuroAtlasLayer | null;
      if (params.get("tab") === "nex" || params.get("tab") === "theory" || params.get("tab") === "structure") setTab(params.get("tab") as Tab);
      const requestedView = candidateView ? atlas.views.find((item) => item.id === candidateView && item.published) : undefined;
      if (requestedView) { setViewId(requestedView.id); setViewGroup(requestedView.hierarchy.join(" › ")); }
      if (candidateLayer && LAYERS.some((item) => item.id === candidateLayer)) setLayer(candidateLayer);
      if (params.get("structure") && atlas.structures.some((item) => item.id === params.get("structure"))) setSelectedId(params.get("structure")!);
      if (params.get("pathway") && atlas.pathways.some((item) => item.id === params.get("pathway"))) setPathwayId(params.get("pathway")!);
      if (params.get("reflex") && atlas.reflexes.some((item) => item.id === params.get("reflex"))) setReflexId(params.get("reflex")!);
      if (params.get("theory") && atlas.theoryTopics.some((item) => item.id === params.get("theory"))) setTheoryId(params.get("theory")!);
      setUrlHydrated(true);
    });
  }, [atlas]);

  useEffect(() => {
    if (!urlHydrated) return;
    const params = new URLSearchParams(); params.set("tab", tab); params.set("view", viewId); params.set("layer", layer);
    if (selectedId) params.set("structure", selectedId); if (pathwayId) params.set("pathway", pathwayId); if (reflexId) params.set("reflex", reflexId); if (theoryId) params.set("theory", theoryId);
    window.history.replaceState(null, "", window.location.pathname + "?" + params.toString());
  }, [tab, viewId, layer, selectedId, pathwayId, reflexId, theoryId, urlHydrated]);

  const choosePathwayStage = (index: number) => {
    const pathway = pathways.find((item) => item.id === pathwayId);
    const segment = pathway?.segments?.[index];
    if (!segment) return;
    setPathwayStageIndex(index);
    setSelectedId(segment.structureId);
    const nextView = imageAtlasViewForStructure(segment.structureId, viewId);
    if (nextView) chooseView(nextView);
  };
  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };
  const chooseView = (id: string) => { const next = views.find((item) => item.id === id); if (next) setViewGroup(next.hierarchy.join(" › ")); setViewId(id); reset(); };
  const chooseViewGroup = (group: string) => { setViewGroup(group); const first = views.find((item) => item.published && item.hierarchy.join(" › ") === group); if (first) chooseView(first.id); };
  const choosePathway = (id: string) => {
    const item = pathways.find((pathway) => pathway.id === id);
    setPathwayId(id);
    const kind = item?.kind?.toLowerCase() ?? "";
    if (!id) setLayer("anatomy");
    else if (kind.includes("autonomic")) setLayer("autonomic");
    else if (kind.includes("reflex")) setLayer("reflex");
    else if (kind.includes("special")) setLayer("cranial");
    else if (kind.includes("sensory")) setLayer("sensory");
    else if (kind.includes("motor")) setLayer("motor");
    else setLayer("anatomy");
    const pathwayView = id ? imageAtlasViewForPathway(id) : undefined;
    if (pathwayView) chooseView(pathwayView);
    if (item?.nodes?.[0]) setSelectedId(item.nodes[0]);
  };
  const chooseStructure = (id: string) => { setSelectedId(id); setHoveredId(undefined); setMobileInfoOpen(true); };
  const onAtlasPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    event.currentTarget.setPointerCapture(event.pointerId);
    if (pointers.current.size === 2) {
      const [first, second] = [...pointers.current.values()];
      pinch.current = { distance: Math.hypot(first.x - second.x, first.y - second.y), zoom };
      drag.current = undefined;
    } else {
      drag.current = { x: pan.x, y: pan.y, startX: event.clientX, startY: event.clientY };
    }
  };
  const onAtlasPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2 && pinch.current) {
      const [first, second] = [...pointers.current.values()];
      const distance = Math.hypot(first.x - second.x, first.y - second.y);
      setZoom(Math.max(.75, Math.min(2.4, pinch.current.zoom * distance / Math.max(1, pinch.current.distance))));
    } else if (drag.current) {
      setPan({ x: drag.current.x + event.clientX - drag.current.startX, y: drag.current.y + event.clientY - drag.current.startY });
    }
  };
  const onAtlasPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinch.current = undefined;
    drag.current = undefined;
  };
  const canvas = <NativeNeuroAtlas viewId={viewId} layer={layer} pathwayId={pathwayId} selectedId={selectedId} hoveredId={hoveredId} onSelect={chooseStructure} onHover={setHoveredId} />;

  return <main className="mx-auto w-full max-w-[1540px] space-y-5 px-3 pb-24 pt-4 sm:px-5 lg:px-7">
    <header className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 via-white to-cyan-50 px-4 py-4 shadow-sm sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-teal-700"><BrainCircuit className="h-4 w-4" />신경계 Hub</div><p className="mt-1 text-sm text-slate-600">해부 구조·경로·신경진찰을 한 화면에서 연결해 복습합니다.</p></div>
        <button type="button" onClick={() => setEducationNoteOpen((value) => !value)} aria-expanded={educationNoteOpen} aria-label="교육용 도해 안내" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-400"><Info className="h-4 w-4" /></button>
      </div>
      {educationNoteOpen ? <p className="mt-3 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-950">이 지도는 신경해부학 구조와 경로를 복습하기 위한 교육용 도해입니다. 실제 환자에서는 병력, 신경학적 진찰, 영상·전기진단검사와 해당 전문 지침을 함께 해석합니다.</p> : null}
      <div className="mt-4 flex flex-wrap gap-2" role="tablist">
        {([["structure", "구조", BrainCircuit], ["nex", "NEx", Stethoscope], ["theory", "이론 정리", BookOpen]] as const).map(([id, label, Icon]) => <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={"inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition " + (tab === id ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-teal-400")}><Icon className="h-4 w-4" />{label}</button>)}
      </div>
    </header>

    {tab === "structure" ? <section className="space-y-4">
      <section className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-[minmax(260px,1.2fr)_minmax(170px,.7fr)_minmax(190px,.9fr)_auto] md:items-end">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-2 md:hidden">
          <button type="button" onClick={() => setViewPickerOpen(true)} className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-sm font-semibold text-slate-800"><span className="block text-[11px] font-bold tracking-[.12em] text-slate-500">보기</span><span className="mt-1 block truncate">{view.hierarchy.join(" › ")} › {view.label}</span></button>
          <label className="grid min-w-0 gap-1 text-[11px] font-bold tracking-[.12em] text-slate-500">레이어<select value={layer} onChange={(event) => { setLayer(event.target.value as NeuroAtlasLayer); setPathwayId(""); setPathwayStageIndex(undefined); }} className="block w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600">{LAYERS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
          <button type="button" onClick={() => setFullScreen(true)} aria-label="신경계 지도 전체 화면" className="self-end rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700"><Expand className="h-5 w-5" /></button>
        </div>
        <div className="relative hidden min-w-0 md:block">
          <p className="mb-1.5 text-xs font-bold tracking-[.13em] text-slate-500">보기</p>
          <button type="button" onClick={() => setDesktopViewPickerOpen((value) => !value)} aria-expanded={desktopViewPickerOpen} className="flex w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-sm font-semibold text-slate-800 outline-none hover:border-teal-500 focus:border-teal-600"><span className="truncate">{view.hierarchy.join(" › ")} › {view.label}</span><ChevronRight className={"h-4 w-4 shrink-0 transition " + (desktopViewPickerOpen ? "rotate-90" : "")} /></button>
          {desktopViewPickerOpen ? <div className="absolute left-0 top-[76px] z-50 grid w-[min(760px,calc(100vw-3rem))] grid-cols-[220px_minmax(0,1fr)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"><div className="max-h-[58vh] overflow-y-auto border-r border-slate-100 bg-slate-50 p-2">{viewGroups.map((group) => <button key={group} type="button" onClick={() => chooseViewGroup(group)} className={"block w-full rounded-xl px-3 py-2.5 text-left text-sm font-bold " + (viewGroup === group ? "bg-teal-700 text-white" : "text-slate-700 hover:bg-white")}>{group}</button>)}</div><div className="max-h-[58vh] overflow-y-auto p-3"><p className="px-2 pb-2 text-xs font-bold tracking-[.12em] text-slate-500">세부 보기</p>{viewsInGroup.map((item) => <button key={item.id} type="button" onClick={() => { chooseView(item.id); setDesktopViewPickerOpen(false); }} className={"mb-1 block w-full rounded-xl border px-3 py-3 text-left text-sm font-bold " + (viewId === item.id ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 text-slate-700 hover:border-teal-400")}>{item.label}</button>)}</div></div> : null}
        </div>
        <label className="hidden min-w-0 gap-1.5 text-xs font-bold tracking-[.13em] text-slate-500 md:grid">레이어<select value={layer} onChange={(event) => { setLayer(event.target.value as NeuroAtlasLayer); setPathwayId(""); setPathwayStageIndex(undefined); }} className="block w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600">{LAYERS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
        <label className="hidden min-w-0 gap-1.5 text-xs font-bold tracking-[.13em] text-slate-500 md:grid">경로<select value={pathwayId} onChange={(event) => choosePathway(event.target.value)} className="block w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600"><option value="">선택한 경로 없음</option>{pathwayOptions.map((item) => <option key={item.id} value={item.id}>{item.en}</option>)}</select></label>
        <button type="button" onClick={() => setFullScreen(true)} className="hidden h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 hover:border-teal-500 md:inline-flex"><Expand className="h-4 w-4" />전체 화면</button>
      </section>
      {viewPickerOpen ? <div className="fixed inset-0 z-[70] bg-slate-950/30 p-3 md:hidden" role="dialog" aria-modal="true" aria-label="신경계 지도 보기 선택"><div className="absolute inset-x-3 bottom-[76px] max-h-[72vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl"><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold tracking-[.13em] text-teal-700">신경계 지도</p><h2 className="mt-1 text-lg font-bold text-slate-950">보기 선택</h2></div><button type="button" onClick={() => setViewPickerOpen(false)} aria-label="닫기" className="rounded-lg border border-slate-200 p-2"><X className="h-4 w-4" /></button></div><p className="mt-3 text-xs font-semibold text-slate-500">{view.hierarchy.join(" › ")} › {view.label}</p><div className="mt-4 grid gap-2">{viewGroups.map((group) => <button key={group} type="button" onClick={() => chooseViewGroup(group)} className={"rounded-xl border px-3 py-3 text-left text-sm font-bold " + (viewGroup === group ? "border-teal-600 bg-teal-50 text-teal-800" : "border-slate-200 text-slate-700")}>{group}</button>)}</div><div className="mt-4 border-t border-slate-100 pt-4"><p className="text-xs font-bold tracking-[.13em] text-slate-500">세부 보기</p><div className="mt-2 grid gap-2">{viewsInGroup.map((item) => <button key={item.id} type="button" onClick={() => { chooseView(item.id); setViewPickerOpen(false); }} className={"rounded-xl border px-3 py-3 text-left text-sm font-bold " + (viewId === item.id ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 text-slate-700")}>{item.label}</button>)}</div></div></div></div> : null}

      <div className={"grid gap-4 " + (desktopInfoOpen ? "xl:grid-cols-[minmax(0,1fr)_330px]" : "xl:grid-cols-1")}>
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5">
            <div className="min-w-0"><Breadcrumb view={view} /><h1 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">{view.label}</h1><p className="mt-1 text-sm text-slate-600">{view.description}</p>{viewMeta?.illustrationAsset ? <p className="mt-2 text-xs font-medium text-slate-500">프로젝트 해부 도식과 선택 오버레이</p> : null}</div>
            <div className="flex items-center gap-1"><button type="button" onClick={() => setDesktopInfoOpen((value) => !value)} className="hidden rounded-lg border border-slate-200 px-2 py-2 text-xs font-bold text-slate-700 hover:border-teal-500 xl:inline-flex">{desktopInfoOpen ? "정보 숨김" : "정보 보기"}</button><button type="button" aria-label="축소" onClick={() => setZoom((value) => Math.max(.75, value - .15))} className="rounded-lg border border-slate-200 p-2 hover:border-teal-500"><ZoomOut className="h-4 w-4" /></button><button type="button" aria-label="확대" onClick={() => setZoom((value) => Math.min(2.4, value + .15))} className="rounded-lg border border-slate-200 p-2 hover:border-teal-500"><ZoomIn className="h-4 w-4" /></button><button type="button" aria-label="보기 초기화" onClick={reset} className="rounded-lg border border-slate-200 p-2 hover:border-teal-500"><RotateCcw className="h-4 w-4" /></button></div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden bg-slate-50 sm:min-h-[600px]" onWheel={(event) => { event.preventDefault(); setZoom((value) => Math.max(.75, Math.min(2.4, value + (event.deltaY < 0 ? .1 : -.1)))); }} onPointerDown={onAtlasPointerDown} onPointerMove={onAtlasPointerMove} onPointerUp={onAtlasPointerEnd} onPointerCancel={onAtlasPointerEnd}>
            <div className="absolute inset-0 h-full w-full touch-none" style={{ transform: "translate(" + pan.x + "px," + pan.y + "px) scale(" + zoom + ")", transformOrigin: "center", transition: "transform 100ms ease-out" }}>{canvas}</div>{hoveredStructure ? <div className="pointer-events-none absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-xl border border-teal-200 bg-white/95 px-3 py-2 shadow-sm"><p className="text-sm font-bold text-slate-950">{hoveredStructure.en}</p><p className="mt-0.5 text-xs text-slate-600">{hoveredStructure.ko}</p></div> : null}
            <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-slate-200 bg-white/95 px-2.5 py-1.5 text-xs text-slate-600 shadow-sm"><Move className="mr-1 inline h-3.5 w-3.5" />드래그로 이동 · 휠/핀치로 확대 · 구조물 선택</div>

          </div>
        </section>

        {desktopInfoOpen ? <aside className="hidden space-y-4 xl:sticky xl:top-5 xl:self-start xl:block">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[.14em] text-teal-700">{selectedPathway ? <Route className="h-4 w-4" /> : <Focus className="h-4 w-4" />}{selectedPathway ? "경로" : "구조물"}</div>
            {selectedPathway ? <><h2 className="mt-3 text-xl font-bold text-slate-950">{selectedPathway.en}</h2><p className="text-sm text-slate-500">{selectedPathway.ko}</p><p className="mt-4 text-sm leading-6 text-slate-700">{selectedPathway.route}</p>{selectedPathway.segments?.length ? <section className="mt-4"><p className="text-xs font-bold tracking-[.13em] text-slate-500">경로 단계</p><div className="mt-2 grid gap-2 sm:grid-cols-2">{selectedPathway.segments.map((segment, index) => <button key={segment.structureId + index} type="button" onClick={() => choosePathwayStage(index)} className={"rounded-xl border px-3 py-2.5 text-left text-sm " + (pathwayStageIndex === index ? "border-teal-600 bg-teal-50 text-teal-900" : "border-slate-200 text-slate-700 hover:border-teal-400")}><span className="block font-bold">{structures.find((item) => item.id === segment.structureId)?.en ?? segment.structureId}</span><span className="mt-0.5 block text-xs text-slate-500">{segment.label}</span></button>)}</div></section> : null}<div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-950"><b>병변 해석</b><br />{selectedPathway.pattern}</div><button type="button" onClick={() => setPathwayId("")} className="mt-4 text-sm font-semibold text-teal-700">경로 해제</button></> : <><p className="mt-3 text-xs font-bold uppercase tracking-[.13em] text-teal-700">{selected.group}</p><h2 className="mt-1 text-xl font-bold text-slate-950">{selected.en}</h2><p className="text-sm text-slate-500">{selected.ko}</p><p className="mt-4 text-sm leading-6 text-slate-700">{selected.summary}</p></>}{selectedLinks.filter((title) => diseaseHrefs[title]).slice(0, 3).map((title) => <Link key={title} href={diseaseHrefs[title]} className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold text-slate-800 hover:border-teal-500 hover:text-teal-700">{title}<ChevronRight className="h-4 w-4" /></Link>)}{selectedDrugLinks.filter((title) => drugHrefs[title]).slice(0, 3).map((title) => <Link key={"drug-" + title} href={drugHrefs[title]} className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold text-slate-800 hover:border-teal-500 hover:text-teal-700"><span><span className="mr-2 text-xs font-semibold text-slate-500">관련 약물</span>{title}</span><ChevronRight className="h-4 w-4" /></Link>)}
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-center gap-2 text-xs font-bold tracking-[.14em] text-slate-500"><Search className="h-4 w-4" />구조 검색</div><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="구조 검색" className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-teal-500" />{query ? <div className="mt-2 grid gap-1">{matches.map((item) => <button key={item.id} type="button" onClick={() => chooseStructure(item.id)} className="flex items-center justify-between rounded-lg px-2 py-2 text-left text-sm hover:bg-teal-50"><span><b>{item.en}</b><span className="ml-2 text-slate-500">{item.ko}</span></span><ChevronRight className="h-4 w-4" /></button>)}</div> : null}</section>

        </aside> : null}
        <div className="xl:hidden">
          <button type="button" onClick={() => setMobileInfoOpen(true)} className="fixed bottom-[78px] right-4 z-40 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg"><Info className="h-4 w-4" />정보 보기</button>
          {mobileInfoOpen ? <section role="dialog" aria-label="선택 구조 정보" className="fixed inset-x-3 bottom-[76px] z-50 max-h-[56vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold tracking-[.14em] text-teal-700">{selectedPathway ? "경로" : "구조물"}</p><h2 className="mt-1 text-xl font-bold text-slate-950">{selectedPathway?.en ?? selected.en}</h2><p className="text-sm text-slate-500">{selectedPathway?.ko ?? selected.ko}</p></div><button type="button" onClick={() => setMobileInfoOpen(false)} aria-label="상세 정보 닫기" className="rounded-lg border border-slate-200 p-2"><X className="h-4 w-4" /></button></div><p className="mt-4 text-sm leading-6 text-slate-700">{selectedPathway?.route ?? selected.summary}</p>{selectedPathway?.segments?.length ? <section className="mt-4"><p className="text-xs font-bold tracking-[.13em] text-slate-500">경로 단계</p><div className="mt-2 grid gap-2">{selectedPathway.segments.map((segment, index) => <button key={segment.structureId + index} type="button" onClick={() => { choosePathwayStage(index); setMobileInfoOpen(false); }} className={"rounded-xl border px-3 py-2.5 text-left text-sm " + (pathwayStageIndex === index ? "border-teal-600 bg-teal-50 text-teal-900" : "border-slate-200 text-slate-700")}><span className="block font-bold">{structures.find((item) => item.id === segment.structureId)?.en ?? segment.structureId}</span><span className="mt-0.5 block text-xs text-slate-500">{segment.label}</span></button>)}</div></section> : null}{selectedPathway ? <div className="mt-3 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-950"><b>병변 해석</b><br />{selectedPathway.pattern}</div> : null}{selectedLinks.filter((title) => diseaseHrefs[title]).slice(0, 3).map((title) => <Link key={title} href={diseaseHrefs[title]} className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold text-slate-800">{title}<ChevronRight className="h-4 w-4" /></Link>)}{selectedDrugLinks.filter((title) => drugHrefs[title]).slice(0, 3).map((title) => <Link key={"drug-" + title} href={drugHrefs[title]} className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold text-slate-800"><span><span className="mr-2 text-xs font-semibold text-slate-500">관련 약물</span>{title}</span><ChevronRight className="h-4 w-4" /></Link>)}</section> : null}
        </div>
      </div>
    </section> : null}

    {tab === "nex" ? <section className="space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Title icon={Stethoscope} eyebrow="신경학적 진찰" title="NEx 경로" text="검사 또는 반사를 선택한 뒤 자극·구심성·중추 연결·원심성·효과기 단계를 따라갑니다. 진단 퀴즈가 아니라 해부 경로를 확인하는 학습 기능입니다." /><div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{reflexes.map((item) => <button key={item.id} type="button" onClick={() => { setReflexId(item.id); setNexStage(0); }} className={"rounded-xl border p-4 text-left transition " + (item.id === reflex?.id ? "border-teal-600 bg-teal-50" : "border-slate-200 bg-white hover:border-teal-300")}><p className="font-bold text-slate-950">{item.label}</p><p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600">{item.purpose ?? item.arc}</p></button>)}</div></section>
      {reflex ? <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]"><section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-bold tracking-[.14em] text-teal-700">경로 지도</p><h2 className="mt-2 text-2xl font-bold text-slate-950">{reflex.label}</h2><p className="mt-3 text-sm leading-6 text-slate-700">{reflex.purpose ?? reflex.arc}</p><div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{nexRoute.map((nodeId, index) => <button key={nodeId + index} type="button" onClick={() => setNexStage(index)} className={"rounded-xl border p-3 text-left transition " + (index === nexStage ? "border-amber-500 bg-amber-50 ring-1 ring-amber-200" : "border-slate-200 bg-white hover:border-teal-300")}><p className="text-[11px] font-bold uppercase tracking-[.12em] text-slate-500">{reflex.routeStages?.[index] ?? "경로 단계"}</p><p className="mt-1 text-sm font-bold text-slate-950">{reflex.routeLabels?.[index] ?? structures.find((item) => item.id === nodeId)?.en ?? nodeId}</p></button>)}</div><section className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-bold tracking-[.14em] text-teal-700">{reflex.routeStages?.[nexStage] ?? "경로 단계"}</p><h3 className="mt-2 text-lg font-bold text-slate-950">{reflex.routeLabels?.[nexStage] ?? nexNode?.en ?? nexNodeId}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{nexNode?.summary ?? "이 단계는 선택한 진찰 경로의 일부입니다. 지도에서 전체 회로 속 위치를 확인합니다."}</p></section></section>
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-5 xl:self-start"><p className="text-xs font-bold uppercase tracking-[.14em] text-teal-700">검사 참고</p><p className="mt-3 text-sm leading-6 text-slate-700"><b>경로:</b> {reflex.arc}</p>{reflex.technique?.length ? <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">{reflex.technique.map((item) => <li key={item}>{item}</li>)}</ul> : null}<dl className="mt-4 grid gap-3 border-t border-slate-100 pt-4 text-sm leading-6"><div><dt className="font-bold text-slate-950">정상 반응</dt><dd className="mt-1 text-slate-700">{reflex.normal ?? "임상 맥락과 함께 해석합니다."}</dd></div><div><dt className="font-bold text-slate-950">이상 소견 / 주의사항</dt><dd className="mt-1 text-slate-700">{reflex.abnormal ?? "양측을 비교하고 다른 진찰 소견과 함께 해석합니다."}</dd></div><div><dt className="font-bold text-slate-950">국소화 의미</dt><dd className="mt-1 text-slate-700">{reflex.localization}</dd></div>{reflex.laterality ? <div><dt className="font-bold text-slate-950">측성</dt><dd className="mt-1 text-slate-700">{reflex.laterality.description}</dd></div> : null}</dl><button type="button" onClick={() => { setTab("structure"); setLayer("reflex"); setPathwayId(""); setPathwayStageIndex(undefined); setViewId(nexAtlasView ?? (reflex.viewId && imageAtlasViewIds.has(reflex.viewId) ? reflex.viewId : "whole-neuraxis")); if (nexAtlasTarget) setSelectedId(nexAtlasTarget); reset(); }} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white"><Focus className="h-4 w-4" />이 단계를 지도에서 보기</button></aside></section> : null}
    </section> : null}

    {tab === "theory" ? <section className="space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Title icon={BookOpen} eyebrow="이론 라이브러리" title="구조·경로·반사와 신경진찰" text="신경해부학 문서를 탐색한 뒤 연결된 구조 또는 경로를 지도에서 확인합니다." /><div className="mt-5 flex flex-wrap gap-2">{theoryCategories.map((category) => <button key={category} type="button" onClick={() => setTheoryCategory(category)} className={"rounded-full border px-3 py-1.5 text-sm font-semibold " + (theoryCategory === category ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-teal-400")}>{category}</button>)}<span className="mx-1 hidden h-7 w-px bg-slate-200 sm:inline" />{THEORY_SCOPES.map((scope) => <button key={scope} type="button" onClick={() => setTheoryScope(scope)} className={"rounded-full border px-3 py-1.5 text-sm font-semibold " + (theoryScope === scope ? "border-teal-700 bg-teal-700 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-teal-400")}>{scope}</button>)}</div><label className="mt-4 flex max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"><Search className="h-4 w-4 text-slate-500" /><input value={theoryQuery} onChange={(event) => setTheoryQuery(event.target.value)} placeholder="이론 검색" className="w-full bg-transparent text-sm outline-none" /></label></section>
      <div className="space-y-4">
        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{theoryCards.map((item) => <button key={item.id} type="button" onClick={() => { setTheoryId(item.id); requestAnimationFrame(() => document.getElementById("neuro-theory-detail")?.scrollIntoView({ behavior: "smooth", block: "start" })); }} className={"min-h-36 rounded-2xl border p-5 text-left shadow-sm transition " + (item.id === theory?.id ? "border-teal-600 bg-teal-50" : "border-slate-200 bg-white hover:border-teal-300")}><p className="text-xs font-bold tracking-[.13em] text-teal-700">{item.category}</p><h2 className="mt-3 text-lg font-bold text-slate-950">{item.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-700">문서 열기 <ChevronRight className="h-4 w-4" /></span></button>)}</section>
        {theory ? <article id="neuro-theory-detail" className="scroll-mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5"><div><p className="text-xs font-bold tracking-[.14em] text-teal-700">{theory.category}</p><h2 className="mt-2 text-2xl font-bold text-slate-950">{theory.title}</h2></div><button type="button" onClick={() => { const theoryReflex = theory.itemId ? reflexes.find((item) => item.id === theory.itemId) : undefined; if (theoryReflex) { setReflexId(theoryReflex.id); setNexStage(0); setTab("nex"); return; } setTab("structure"); if (theory.viewId && imageAtlasViewIds.has(theory.viewId)) setViewId(theory.viewId); if (theory.itemId && structures.some((item) => item.id === theory.itemId)) setSelectedId(theory.itemId); if (theory.itemId && pathways.some((item) => item.id === theory.itemId)) choosePathway(theory.itemId); reset(); }} className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white"><Focus className="h-4 w-4" />지도에서 보기</button></div><div className="mt-6 grid gap-7 xl:grid-cols-[minmax(0,1fr)_320px]"><div><p className="text-base leading-8 text-slate-700">{theory.summary}</p>{theory.sections?.map((section) => <section key={section.heading} className="mt-6 border-t border-slate-100 pt-5"><h3 className="text-lg font-bold text-slate-950">{section.heading}</h3><p className="mt-2 text-sm leading-7 text-slate-700">{section.body}</p></section>)}</div><aside className="space-y-4"><section className="rounded-xl bg-slate-50 p-4"><h3 className="font-bold text-slate-950">핵심 정리</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">{theory.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul></section><section className="rounded-xl border border-slate-200 p-4"><h3 className="font-bold text-slate-950">관련 약물</h3><div className="mt-3 flex flex-wrap gap-2">{(theory.drugLinks ?? []).filter((title) => drugHrefs[title]).map((title) => <Link key={title} href={drugHrefs[title]} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-700">{title}</Link>)}</div></section><section className="rounded-xl border border-slate-200 p-4"><p className="text-xs font-bold tracking-[.13em] text-slate-500">출처</p><div className="mt-3 flex flex-wrap gap-2">{theory.sourceIds.map((id) => { const source = sourceById.get(id); return source ? <a key={id} href={source.url} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:border-teal-500 hover:text-teal-700">{source.title ?? source.label}</a> : <span key={id} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-500">{id}</span>; })}</div></section></aside></div></article> : null}
      </div>
    </section> : null}

    {fullScreen ? <div className="fixed inset-0 z-[80] bg-slate-950 p-3 sm:p-6"><div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white"><div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3"><div className="min-w-0"><Breadcrumb view={view} /><h2 className="truncate text-lg font-bold text-slate-950">{view.label}</h2></div><div className="flex shrink-0 items-center gap-1"><button type="button" aria-label="축소" onClick={() => setZoom((value) => Math.max(.75, value - .15))} className="rounded-lg border border-slate-200 p-2"><ZoomOut className="h-4 w-4" /></button><button type="button" aria-label="확대" onClick={() => setZoom((value) => Math.min(2.4, value + .15))} className="rounded-lg border border-slate-200 p-2"><ZoomIn className="h-4 w-4" /></button><button type="button" aria-label="보기 초기화" onClick={reset} className="rounded-lg border border-slate-200 p-2"><RotateCcw className="h-4 w-4" /></button><button type="button" onClick={() => setFullScreen(false)} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold"><X className="h-4 w-4" />닫기</button></div></div><div className="relative min-h-0 flex-1 overflow-hidden bg-slate-50" onPointerDown={onAtlasPointerDown} onPointerMove={onAtlasPointerMove} onPointerUp={onAtlasPointerEnd} onPointerCancel={onAtlasPointerEnd}><div className="absolute inset-0 h-full w-full touch-none" style={{ transform: "translate(" + pan.x + "px," + pan.y + "px) scale(" + zoom + ")", transformOrigin: "center", transition: "transform 100ms ease-out" }}>{canvas}</div>{hoveredStructure ? <div className="pointer-events-none absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-xl border border-teal-200 bg-white/95 px-3 py-2 shadow-sm"><p className="text-sm font-bold text-slate-950">{hoveredStructure.en}</p><p className="mt-0.5 text-xs text-slate-600">{hoveredStructure.ko}</p></div> : null}<div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-slate-200 bg-white/95 px-2.5 py-1.5 text-xs text-slate-600"><Move className="mr-1 inline h-3.5 w-3.5" />드래그로 이동 · 핀치로 확대</div></div></div></div> : null}
  </main>;
}
