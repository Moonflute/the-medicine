"use client";

import Link from "next/link";
import { BookOpen, BrainCircuit, ChevronRight, Expand, Focus, Info, Move, RotateCcw, Route, Search, Stethoscope, X, ZoomIn, ZoomOut } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import type { NeuroAtlas } from "@/lib/webdb";
import { NativeNeuroAtlas, nativeNeuroViewIds, type NeuroAtlasLayer } from "@/components/native-neuro-atlas";

type Tab = "structure" | "nex" | "theory";

type ViewItem = {
  id: string;
  hierarchy: string[];
  label: string;
  description: string;
  published: boolean;
};

const VIEWS: ViewItem[] = [
  { id: "whole-neuraxis", hierarchy: ["CNS", "Overview"], label: "Whole neuraxis", description: "Central and peripheral nervous systems through the motor unit.", published: true },
  { id: "cerebrum-lateral", hierarchy: ["CNS", "Brain", "Cerebrum"], label: "Lateral view", description: "Cerebral hemisphere lateral surface.", published: true },
  { id: "brain-midsagittal", hierarchy: ["CNS", "Brain", "Cerebrum"], label: "Midsagittal view", description: "Medial cerebrum, diencephalon, brainstem and cerebellum.", published: true },
  { id: "cerebrum-inferior", hierarchy: ["CNS", "Brain", "Cerebrum"], label: "Inferior view", description: "Basal surface and cranial nerve origins.", published: true },
  { id: "brain-coronal", hierarchy: ["CNS", "Brain", "Cerebrum"], label: "Coronal section", description: "Cerebral hemispheres and deep structures.", published: true },
  { id: "brain-axial", hierarchy: ["CNS", "Brain", "Cerebrum"], label: "Axial section", description: "Deep nuclei, internal capsule and ventricles.", published: true },
  { id: "brainstem-external", hierarchy: ["CNS", "Brain", "Brainstem"], label: "External view", description: "Midbrain, pons and medulla.", published: true },
  { id: "brainstem-section", hierarchy: ["CNS", "Brain", "Brainstem"], label: "Sectional views", description: "Midbrain, pons and medulla sections.", published: true },
  { id: "cerebellum", hierarchy: ["CNS", "Brain"], label: "Cerebellum", description: "Cerebellar cortex, vermis and peduncles.", published: true },
  { id: "spinal-levels", hierarchy: ["CNS", "Spinal cord"], label: "Spinal levels", description: "Cervical, thoracic, lumbar and sacral levels.", published: true },
  { id: "spinal-cross-section", hierarchy: ["CNS", "Spinal cord"], label: "Cross-sectional view", description: "Gray matter, white matter and major tracts.", published: true },
  { id: "brachial-plexus", hierarchy: ["PNS", "Plexus"], label: "Brachial plexus", description: "Roots, trunks, divisions, cords and terminal nerves.", published: true },
  { id: "lumbosacral-plexus", hierarchy: ["PNS", "Plexus"], label: "Lumbosacral plexus", description: "Lumbar and sacral plexus branches.", published: true },
  { id: "upper-limb-nerves", hierarchy: ["PNS", "Peripheral nerves"], label: "Upper limb nerves", description: "Major upper limb peripheral nerves.", published: true },
  { id: "lower-limb-nerves", hierarchy: ["PNS", "Peripheral nerves"], label: "Lower limb nerves", description: "Major lower limb peripheral nerves.", published: true },
  { id: "dermatome-anterior", hierarchy: ["Somatic maps", "Dermatome"], label: "Anterior view", description: "Dermatomal distribution and key landmarks.", published: true },
  { id: "dermatome-posterior", hierarchy: ["Somatic maps", "Dermatome"], label: "Posterior view", description: "Posterior dermatomal distribution and key landmarks.", published: true },
  { id: "nmj-muscle", hierarchy: ["Motor unit"], label: "Neuromuscular junction", description: "Motor axon, synapse and skeletal muscle.", published: true },
];

const LAYERS: Array<{ id: NeuroAtlasLayer; label: string }> = [
  { id: "anatomy", label: "Anatomy" },
  { id: "motor", label: "Motor pathways" },
  { id: "sensory", label: "Sensory pathways" },
  { id: "cranial", label: "Cranial nerves" },
  { id: "reflex", label: "Reflex arcs" },
  { id: "dermatome", label: "Dermatome" },
  { id: "myotome", label: "Myotome" },
  { id: "peripheral", label: "Peripheral nerves" },
  { id: "autonomic", label: "Autonomic pathways" },
];

const FALLBACK: Record<string, { en: string; ko: string; group: string; summary: string }> = {
  "frontal-lobe": { en: "Cerebrum", ko: "대뇌", group: "CNS", summary: "The cerebral hemispheres integrate motor, sensory, cognitive and language functions." },
  "medial-frontal-cortex": { en: "Medial frontal cortex", ko: "내측 전두피질", group: "CNS", summary: "Medial frontal cortical regions contribute to voluntary movement and executive control." },
  "spinal-cord": { en: "Spinal cord", ko: "척수", group: "CNS", summary: "The spinal cord connects supraspinal pathways with roots, peripheral nerves and segmental reflex circuits." },
  "dorsal-column": { en: "Dorsal columns", ko: "뒤기둥", group: "Sensory pathway", summary: "Dorsal columns carry vibration, proprioception and discriminative touch before crossing in the medulla." },
  "lateral-corticospinal": { en: "Lateral corticospinal tract", ko: "가쪽피질척수로", group: "Motor pathway", summary: "The lateral corticospinal tract conveys voluntary motor commands to spinal motor circuits." },
  spinothalamic: { en: "Anterolateral system", ko: "앞가쪽계", group: "Sensory pathway", summary: "The anterolateral system conveys pain and temperature after segmental spinal crossing." },
  thalamus: { en: "Thalamus", ko: "시상", group: "CNS", summary: "The thalamus is a major relay for sensory and motor-related information to cerebral cortex." },
  cerebellum: { en: "Cerebellum", ko: "소뇌", group: "CNS", summary: "The cerebellum coordinates movement, posture, timing and motor learning." },
  "brachial-plexus": { en: "Brachial plexus", ko: "상완신경총", group: "PNS", summary: "The brachial plexus distributes C5–T1 fibers to the upper limb." },
  "peripheral-nerve": { en: "Peripheral nerves", ko: "말초신경", group: "PNS", summary: "Peripheral nerves carry motor, sensory and autonomic fibers between roots and target tissues." },
  "neuromuscular-junction": { en: "Neuromuscular junction", ko: "신경근접합부", group: "Motor unit", summary: "The neuromuscular junction converts motor nerve activity into skeletal muscle contraction." },
  "skeletal-muscle": { en: "Skeletal muscle", ko: "골격근", group: "Motor unit", summary: "Skeletal muscle is the final effector for voluntary motor output and reflex responses." },
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

export function NervousSystemHub({ atlas, diseaseHrefs = {} }: { atlas: NeuroAtlas; diseaseHrefs?: Record<string, string> }) {
  const [tab, setTab] = useState<Tab>("structure");
  const [viewId, setViewId] = useState("whole-neuraxis");
  const [layer, setLayer] = useState<NeuroAtlasLayer>("anatomy");
  const [pathwayId, setPathwayId] = useState("");
  const [selectedId, setSelectedId] = useState("frontal-lobe");
  const [hoveredId, setHoveredId] = useState<string>();
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [fullScreen, setFullScreen] = useState(false);
  const [query, setQuery] = useState("");
  const [theoryCategory, setTheoryCategory] = useState("All");
  const [theoryId, setTheoryId] = useState(atlas.theoryTopics[0]?.id ?? "");
  const [reflexId, setReflexId] = useState(atlas.reflexes.find((item) => item.reviewStatus !== "retired")?.id ?? "");
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | undefined>(undefined);

  const view = VIEWS.find((item) => item.id === viewId) ?? VIEWS[0];
  const structures = atlas.structures;
  const selected = structures.find((item) => item.id === selectedId) ?? FALLBACK[selectedId] ?? FALLBACK["frontal-lobe"];
  const pathways = atlas.pathways;
  const selectedPathway = pathways.find((item) => item.id === pathwayId);
  const reflexes = atlas.reflexes.filter((item) => item.reviewStatus !== "retired");
  const reflex = reflexes.find((item) => item.id === reflexId) ?? reflexes[0];
  const theoryCategories = ["All", ...new Set(atlas.theoryTopics.map((item) => item.category))];
  const theory = atlas.theoryTopics.find((item) => item.id === theoryId) ?? atlas.theoryTopics[0];
  const theoryCards = atlas.theoryTopics.filter((item) => theoryCategory === "All" || item.category === theoryCategory);
  const matches = useMemo(() => structures.filter((item) => (item.en + " " + item.ko).toLowerCase().includes(query.toLowerCase())).slice(0, 8), [structures, query]);
  const selectedLinks: string[] = selectedPathway?.links ?? ("links" in selected && Array.isArray(selected.links) ? selected.links : []);

  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };
  const chooseView = (id: string) => { setViewId(id); setPathwayId(""); reset(); };
  const choosePathway = (id: string) => {
    const item = pathways.find((pathway) => pathway.id === id);
    setPathwayId(id);
    if (item?.kind?.toLowerCase().includes("sensory")) setLayer("sensory");
    else if (id) setLayer("motor");
    if (item?.nodes?.[0]) setSelectedId(item.nodes[0]);
  };
  const chooseStructure = (id: string) => { setSelectedId(id); setHoveredId(undefined); };
  const canvas = <NativeNeuroAtlas viewId={viewId} layer={layer} pathwayId={pathwayId} selectedId={selectedId} hoveredId={hoveredId} onSelect={chooseStructure} onHover={setHoveredId} />;

  return <main className="mx-auto w-full max-w-[1540px] space-y-5 px-3 pb-24 pt-4 sm:px-5 lg:px-7">
    <header className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 via-white to-cyan-50 px-4 py-4 shadow-sm sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.17em] text-teal-700"><BrainCircuit className="h-4 w-4" />Neuro Hub</div><p className="mt-1 text-sm text-slate-600">Structure, pathways and neurological examination in one atlas.</p></div>
        <button type="button" title="Educational neuroanatomy atlas" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-amber-800"><Info className="h-4 w-4" /></button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="tablist">
        {([["structure", "Structure", BrainCircuit], ["nex", "NEx", Stethoscope], ["theory", "Theory", BookOpen]] as const).map(([id, label, Icon]) => <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={"inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition " + (tab === id ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-teal-400")}><Icon className="h-4 w-4" />{label}</button>)}
      </div>
    </header>

    {tab === "structure" ? <section className="space-y-4">
      <section className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-[minmax(0,1.4fr)_minmax(180px,.8fr)_minmax(180px,.8fr)_auto] md:items-end">
        <label className="grid min-w-0 gap-1.5 text-xs font-bold uppercase tracking-[.13em] text-slate-500">View<select value={viewId} onChange={(event) => chooseView(event.target.value)} className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold normal-case tracking-normal text-slate-800 outline-none focus:border-teal-600">{Object.entries(VIEWS.reduce<Record<string, ViewItem[]>>((groups, item) => { const key = item.hierarchy.join(" › "); (groups[key] ??= []).push(item); return groups; }, {})).map(([group, items]) => <optgroup key={group} label={group}>{items.map((item) => <option key={item.id} value={item.id} disabled={!item.published}>{item.label + (!item.published ? " — redrawing" : "")}</option>)}</optgroup>)}</select></label>
        <label className="grid min-w-0 gap-1.5 text-xs font-bold uppercase tracking-[.13em] text-slate-500">Layer<select value={layer} onChange={(event) => { setLayer(event.target.value as NeuroAtlasLayer); setPathwayId(""); }} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold normal-case tracking-normal text-slate-800 outline-none focus:border-teal-600">{LAYERS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
        <label className="grid min-w-0 gap-1.5 text-xs font-bold uppercase tracking-[.13em] text-slate-500">Pathway<select value={pathwayId} onChange={(event) => choosePathway(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold normal-case tracking-normal text-slate-800 outline-none focus:border-teal-600"><option value="">No pathway selected</option>{pathways.map((item) => <option key={item.id} value={item.id}>{item.en}</option>)}</select></label>
        <button type="button" onClick={() => setFullScreen(true)} className="inline-flex h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-700 hover:border-teal-500"><Expand className="h-4 w-4" />Atlas</button>
      </section>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5">
            <div className="min-w-0"><Breadcrumb view={view} /><h1 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">{view.label}</h1><p className="mt-1 text-sm text-slate-600">{view.description}</p></div>
            <div className="flex items-center gap-1"><button type="button" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(.75, value - .15))} className="rounded-lg border border-slate-200 p-2 hover:border-teal-500"><ZoomOut className="h-4 w-4" /></button><button type="button" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(2.4, value + .15))} className="rounded-lg border border-slate-200 p-2 hover:border-teal-500"><ZoomIn className="h-4 w-4" /></button><button type="button" aria-label="Reset view" onClick={reset} className="rounded-lg border border-slate-200 p-2 hover:border-teal-500"><RotateCcw className="h-4 w-4" /></button></div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden bg-slate-50 sm:min-h-[600px]" onWheel={(event) => { event.preventDefault(); setZoom((value) => Math.max(.75, Math.min(2.4, value + (event.deltaY < 0 ? .1 : -.1)))); }} onPointerDown={(event) => { drag.current = { x: pan.x, y: pan.y, startX: event.clientX, startY: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerMove={(event) => { if (drag.current) setPan({ x: drag.current.x + event.clientX - drag.current.startX, y: drag.current.y + event.clientY - drag.current.startY }); }} onPointerUp={() => { drag.current = undefined; }}>
            <div className="h-full w-full touch-none" style={{ transform: "translate(" + pan.x + "px," + pan.y + "px) scale(" + zoom + ")", transformOrigin: "center", transition: "transform 100ms ease-out" }}>{canvas}</div>
            <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-slate-200 bg-white/95 px-2.5 py-1.5 text-xs text-slate-600 shadow-sm"><Move className="mr-1 inline h-3.5 w-3.5" />Drag to pan · wheel/pinch to zoom · select a structure</div>
            {hoveredId ? <div className="pointer-events-none absolute left-3 top-3 rounded-lg border border-teal-200 bg-white/95 px-3 py-2 shadow-sm"><p className="text-sm font-bold text-slate-950">{structures.find((item) => item.id === hoveredId)?.en ?? FALLBACK[hoveredId]?.en ?? hoveredId}</p><p className="text-xs text-slate-500">{structures.find((item) => item.id === hoveredId)?.ko ?? FALLBACK[hoveredId]?.ko}</p></div> : null}
          </div>
        </section>

        <aside className="space-y-4 xl:sticky xl:top-5 xl:self-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-teal-700">{selectedPathway ? <Route className="h-4 w-4" /> : <Focus className="h-4 w-4" />}{selectedPathway ? "Pathway" : "Structure"}</div>
            {selectedPathway ? <><h2 className="mt-3 text-xl font-bold text-slate-950">{selectedPathway.en}</h2><p className="text-sm text-slate-500">{selectedPathway.ko}</p><p className="mt-4 text-sm leading-6 text-slate-700">{selectedPathway.route}</p><div className="mt-4 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-950"><b>Lesion pattern</b><br />{selectedPathway.pattern}</div><button type="button" onClick={() => setPathwayId("")} className="mt-4 text-sm font-semibold text-teal-700">Clear pathway</button></> : <><p className="mt-3 text-xs font-bold uppercase tracking-[.13em] text-teal-700">{selected.group}</p><h2 className="mt-1 text-xl font-bold text-slate-950">{selected.en}</h2><p className="text-sm text-slate-500">{selected.ko}</p><p className="mt-4 text-sm leading-6 text-slate-700">{selected.summary}</p></>}{selectedLinks.filter((title) => diseaseHrefs[title]).slice(0, 3).map((title) => <Link key={title} href={diseaseHrefs[title]} className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold text-slate-800 hover:border-teal-500 hover:text-teal-700">{title}<ChevronRight className="h-4 w-4" /></Link>)}
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-slate-500"><Search className="h-4 w-4" />Structure search</div><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search structure" className="mt-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-teal-500" />{query ? <div className="mt-2 grid gap-1">{matches.map((item) => <button key={item.id} type="button" onClick={() => chooseStructure(item.id)} className="flex items-center justify-between rounded-lg px-2 py-2 text-left text-sm hover:bg-teal-50"><span><b>{item.en}</b><span className="ml-2 text-slate-500">{item.ko}</span></span><ChevronRight className="h-4 w-4" /></button>)}</div> : null}</section>
        </aside>
      </div>
    </section> : null}

    {tab === "nex" ? <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Title icon={Stethoscope} eyebrow="Neurological examination" title="NEx routes" text="Select an examination to follow its stimulus, afferent limb, central connection, efferent limb and effector. This is a route atlas, not a diagnostic quiz." /><div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{reflexes.map((item) => <button key={item.id} type="button" onClick={() => setReflexId(item.id)} className={"rounded-xl border p-4 text-left transition " + (item.id === reflex?.id ? "border-teal-600 bg-teal-50" : "border-slate-200 bg-white hover:border-teal-300")}><p className="font-bold text-slate-950">{item.label}</p><p className="mt-2 text-xs leading-5 text-slate-600">{item.arc}</p></button>)}</div></section>
      {reflex ? <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-5 xl:self-start"><p className="text-xs font-bold uppercase tracking-[.14em] text-teal-700">Selected examination</p><h2 className="mt-2 text-xl font-bold text-slate-950">{reflex.label}</h2><p className="mt-3 text-sm leading-6 text-slate-700"><b>Purpose:</b> {reflex.purpose ?? reflex.arc}</p><p className="mt-3 text-sm leading-6 text-slate-700"><b>Route:</b> {reflex.arc}</p>{reflex.technique?.length ? <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">{reflex.technique.map((item) => <li key={item}>{item}</li>)}</ul> : null}<button type="button" onClick={() => { setTab("structure"); setLayer("reflex"); setViewId(reflex.viewId && nativeNeuroViewIds.has(reflex.viewId) ? reflex.viewId : "whole-neuraxis"); setSelectedId(reflex.route?.find((id) => structures.some((structure) => structure.id === id)) ?? "frontal-lobe"); reset(); }} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white"><Focus className="h-4 w-4" />Show in Atlas</button></aside> : null}
    </section> : null}

    {tab === "theory" ? <section className="space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Title icon={BookOpen} eyebrow="Theory library" title="Structures, pathways and reflexes" text="Browse neuroanatomy as a document library, then open the linked structure or route in the Atlas." /><div className="mt-5 flex flex-wrap gap-2">{theoryCategories.map((category) => <button key={category} type="button" onClick={() => setTheoryCategory(category)} className={"rounded-full border px-3 py-1.5 text-sm font-semibold " + (theoryCategory === category ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-teal-400")}>{category}</button>)}</div></section>
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_390px]"><section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{theoryCards.map((item) => <button key={item.id} type="button" onClick={() => setTheoryId(item.id)} className={"min-h-40 rounded-2xl border p-5 text-left shadow-sm transition " + (item.id === theory?.id ? "border-teal-600 bg-teal-50" : "border-slate-200 bg-white hover:border-teal-300")}><p className="text-xs font-bold uppercase tracking-[.13em] text-teal-700">{item.category}</p><h2 className="mt-3 text-lg font-bold text-slate-950">{item.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p></button>)}</section>
      {theory ? <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:sticky xl:top-5 xl:self-start"><p className="text-xs font-bold uppercase tracking-[.14em] text-teal-700">{theory.category}</p><h2 className="mt-2 text-2xl font-bold text-slate-950">{theory.title}</h2><p className="mt-4 text-sm leading-7 text-slate-700">{theory.summary}</p><section className="mt-5 rounded-xl bg-slate-50 p-4"><h3 className="font-bold text-slate-950">Key points</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">{theory.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul></section><button type="button" onClick={() => { setTab("structure"); if (theory.viewId && nativeNeuroViewIds.has(theory.viewId)) setViewId(theory.viewId); if (theory.itemId && structures.some((item) => item.id === theory.itemId)) setSelectedId(theory.itemId); if (theory.itemId && pathways.some((item) => item.id === theory.itemId)) choosePathway(theory.itemId); reset(); }} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white"><Focus className="h-4 w-4" />Show in Atlas</button></aside> : null}</div>
    </section> : null}

    {fullScreen ? <div className="fixed inset-0 z-[80] bg-slate-950 p-3 sm:p-6"><div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white"><div className="flex items-center justify-between border-b border-slate-200 px-4 py-3"><div><Breadcrumb view={view} /><h2 className="text-lg font-bold text-slate-950">{view.label}</h2></div><button type="button" onClick={() => setFullScreen(false)} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold"><X className="h-4 w-4" />Close</button></div><div className="min-h-0 flex-1 overflow-hidden bg-slate-50">{canvas}</div></div></div> : null}
  </main>;
}
