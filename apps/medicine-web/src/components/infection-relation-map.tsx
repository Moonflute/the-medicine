"use client";

import Link from "next/link";
import cytoscape, { type Core, type ElementDefinition } from "cytoscape";
import { Expand, Filter, RotateCcw, Search, ZoomIn, ZoomOut } from "lucide-react";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import type { InfectionPathwayDataset } from "@/lib/infection-types";
import type { AntibioticSpectrumDataset } from "@/lib/types";

type NodeKind = "disease" | "organism" | "antibiotic";
type NodeInfo = { id: string; kind: NodeKind; label: string; subtitle: string; href: string; description: string };

const SITE_LABELS: Record<string, string> = {
  "lower-respiratory-tract": "하기도", "lower-urinary-tract": "하부 요로", "upper-urinary-tract": "상부 요로", "skin-soft-tissue": "피부·연조직", systemic: "전신", endovascular: "심혈관·혈류", "central-nervous-system": "중추신경계", "bone-spine": "골·척추", "bloodstream-catheter": "도관·혈류", peritoneal: "복막", gastrointestinal: "위장관", "head-neck": "두경부",
};
const PATHOGEN_GROUP_LABELS: Record<string, string> = { "Gram-positive": "G(+)균", "Gram-negative": "G(-)균", Anaerobes: "혐기성균", Atypicals: "비정형균", "Resistance phenotype": "내성 phenotype" };
const PATHOGEN_GROUP_ORDER = ["Gram-positive", "Gram-negative", "Anaerobes", "Atypicals", "Resistance phenotype"];
const normalize = (value: string) => value.toLocaleLowerCase().replace(/[\s/_-]+/g, "");
const unique = <T,>(items: T[]) => [...new Set(items)];

function nodeId(kind: NodeKind, id: string) { return `${kind}:${id}`; }

export function InfectionRelationMap({ pathways, spectrum }: { pathways: InfectionPathwayDataset; spectrum: AntibioticSpectrumDataset }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [site, setSite] = useState("");
  const [pathogenGroup, setPathogenGroup] = useState("");
  const [drugClass, setDrugClass] = useState("");
  const [showCoverage, setShowCoverage] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [fullScreen, setFullScreen] = useState(false);

  const clinicalPathways = useMemo(() => pathways.pathways.filter((item) => item.reviewStatus === "verified" || item.reviewStatus === "reviewed"), [pathways.pathways]);
  const sites = unique(clinicalPathways.map((item) => item.infectionSite)).sort();
  const classes = unique(spectrum.antibiotics.map((item) => item.class)).sort();
  const pathogenGroups = unique(spectrum.organisms.map((item) => item.group)).sort((left, right) => PATHOGEN_GROUP_ORDER.indexOf(left) - PATHOGEN_GROUP_ORDER.indexOf(right));

  const graph = useMemo(() => {
    const filteredPathways = clinicalPathways.filter((item) =>
      (!site || item.infectionSite === site)
      && (!pathogenGroup || item.pathogenGroups.some((group) => group.organisms.some((organism) => spectrum.organisms.find((item) => item.id === organism.organismId)?.group === pathogenGroup))),
    );
    const organismIds = new Set<string>();
    const antibioticIds = new Set<string>();
    for (const pathway of filteredPathways) {
      for (const group of pathway.pathogenGroups) for (const organism of group.organisms) if (!pathogenGroup || spectrum.organisms.find((item) => item.id === organism.organismId)?.group === pathogenGroup) organismIds.add(organism.organismId);
      for (const regimen of pathway.empiricRegimens) for (const component of regimen.components) for (const antibioticId of component.antibioticIds) antibioticIds.add(antibioticId);
      for (const therapy of pathway.targetedTherapies) for (const antibioticId of therapy.antibioticIds) antibioticIds.add(antibioticId);
    }
    const visibleAntibiotics = spectrum.antibiotics.filter((item) => antibioticIds.has(item.id) && (!drugClass || item.class === drugClass));
    const visibleAntibioticIds = new Set(visibleAntibiotics.map((item) => item.id));
    const visibleOrganisms = spectrum.organisms.filter((item) => organismIds.has(item.id));
    const nodes: NodeInfo[] = [
      ...filteredPathways.map((item) => ({ id: nodeId("disease", item.id), kind: "disease" as const, label: item.displayName, subtitle: SITE_LABELS[item.infectionSite] ?? item.infectionSite, href: `/disease/${item.diseaseSlug}`, description: item.diagnosticNotes[0] ?? "임상 경로" })),
      ...visibleOrganisms.map((item) => ({ id: nodeId("organism", item.id), kind: "organism" as const, label: item.label, subtitle: item.group, href: item.microbiologySlug ? `/microbiology/${item.microbiologySlug}` : "", description: item.aliases.join(" · ") })),
      ...visibleAntibiotics.map((item) => ({ id: nodeId("antibiotic", item.id), kind: "antibiotic" as const, label: item.inn, subtitle: item.class, href: `/drugs/${item.drugSlug}`, description: `${item.routes.join(" / ")} · ${item.displayName}` })),
    ];
    const rawEdges: Array<{ id: string; source: string; target: string; kind: string; label: string }> = [];
    for (const pathway of filteredPathways) {
      const diseaseId = nodeId("disease", pathway.id);
      for (const group of pathway.pathogenGroups) for (const organism of group.organisms) {
        if (organismIds.has(organism.organismId)) rawEdges.push({ id: `dp:${pathway.id}:${organism.organismId}`, source: diseaseId, target: nodeId("organism", organism.organismId), kind: "disease-pathogen", label: "원인 병원체" });
      }
      for (const regimen of pathway.empiricRegimens) for (const component of regimen.components) for (const antibioticId of component.antibioticIds) {
        if (visibleAntibioticIds.has(antibioticId)) rawEdges.push({ id: `da:${pathway.id}:${regimen.id}:${antibioticId}`, source: diseaseId, target: nodeId("antibiotic", antibioticId), kind: "disease-antibiotic", label: regimen.rank === "preferred" ? "우선 고려" : regimen.rank === "alternative" ? "대안" : "조건부" });
      }
      for (const therapy of pathway.targetedTherapies) for (const antibioticId of therapy.antibioticIds) {
        if (visibleAntibioticIds.has(antibioticId)) rawEdges.push({ id: `dt:${pathway.id}:${therapy.organismId}:${antibioticId}`, source: diseaseId, target: nodeId("antibiotic", antibioticId), kind: "disease-antibiotic", label: "표적 치료" });
      }
    }
    if (showCoverage) {
      for (const antibiotic of visibleAntibiotics) for (const organism of visibleOrganisms) {
        const level = antibiotic.coverage[organism.id];
        if (level === "preferred" || level === "active") rawEdges.push({ id: `oa:${organism.id}:${antibiotic.id}`, source: nodeId("organism", organism.id), target: nodeId("antibiotic", antibiotic.id), kind: "coverage", label: level === "preferred" ? "우선 활성" : "활성 기대" });
      }
    }
    const matchingIds = deferredQuery ? new Set(nodes.filter((item) => normalize([item.label, item.subtitle, item.description].join(" ")).includes(normalize(deferredQuery))).map((item) => item.id)) : null;
    const includedIds = matchingIds && matchingIds.size ? new Set([...matchingIds, ...rawEdges.filter((edge) => matchingIds.has(edge.source) || matchingIds.has(edge.target)).flatMap((edge) => [edge.source, edge.target])]) : null;
    const displayedNodes = includedIds ? nodes.filter((item) => includedIds.has(item.id)) : nodes;
    const displayedIds = new Set(displayedNodes.map((item) => item.id));
    const displayedEdges = rawEdges.filter((item) => displayedIds.has(item.source) && displayedIds.has(item.target));
    const elements: ElementDefinition[] = [
      ...displayedNodes.map((item) => ({ data: item, classes: item.kind })),
      ...displayedEdges.map((item) => ({ data: item, classes: item.kind })),
    ];
    return { elements, nodes: displayedNodes, edgeCount: displayedEdges.length, totalPathways: filteredPathways.length };
  }, [clinicalPathways, deferredQuery, drugClass, pathogenGroup, showCoverage, site, spectrum.antibiotics, spectrum.organisms]);

  useEffect(() => {
    if (!containerRef.current) return;
    const cy = cytoscape({
      container: containerRef.current,
      elements: graph.elements,
      pixelRatio: 1,
      wheelSensitivity: 0.22,
      minZoom: 0.18,
      maxZoom: 2.2,
      style: [
        { selector: "node", style: { label: "data(label)", color: "#0f172a", "font-size": "11px", "font-weight": "bold", "text-wrap": "wrap", "text-max-width": "92px", "text-valign": "center", "text-halign": "center", width: "76px", height: "42px", "border-width": "1.5px", "border-color": "#cbd5e1", "background-color": "#ffffff" } },
        { selector: ".disease", style: { shape: "round-rectangle", width: "96px", height: "48px", "background-color": "#e0f2fe", "border-color": "#0284c7" } },
        { selector: ".organism", style: { shape: "ellipse", width: "76px", height: "48px", "background-color": "#ecfdf5", "border-color": "#0f766e" } },
        { selector: ".antibiotic", style: { shape: "round-rectangle", width: "88px", height: "42px", "background-color": "#fef3c7", "border-color": "#d97706" } },
        { selector: "edge", style: { width: "1.4px", "line-color": "#94a3b8", "target-arrow-color": "#94a3b8", "target-arrow-shape": "triangle", "curve-style": "bezier", opacity: 0.76 } },
        { selector: ".disease-pathogen", style: { "line-color": "#0f766e", "target-arrow-color": "#0f766e" } },
        { selector: ".disease-antibiotic", style: { "line-color": "#d97706", "target-arrow-color": "#d97706" } },
        { selector: ".coverage", style: { width: "1px", "line-color": "#7c3aed", "target-arrow-color": "#7c3aed", "line-style": "dashed", opacity: 0.58 } },
        { selector: ".is-muted", style: { opacity: 0.12 } },
        { selector: ".is-selected", style: { "border-width": "4px", "border-color": "#0f172a", "z-index": 20 } },
      ],
      layout: { name: "cose", animate: false, fit: true, padding: 36, nodeRepulsion: () => 9000, idealEdgeLength: () => 130, gravity: 0.3, numIter: 900 },
    });
    cy.on("tap", "node", (event) => setSelectedId(event.target.id()));
    cy.on("tap", (event) => { if (event.target === cy) setSelectedId(""); });
    cyRef.current = cy;
    return () => { cy.destroy(); if (cyRef.current === cy) cyRef.current = null; };
  }, [graph.elements]);

  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.batch(() => {
      cy.elements().removeClass("is-muted is-selected");
      if (!selectedId || !cy.getElementById(selectedId).nonempty()) return;
      const selected = cy.getElementById(selectedId);
      const neighborhood = selected.closedNeighborhood();
      cy.elements().difference(neighborhood).addClass("is-muted");
      selected.addClass("is-selected");
    });
  }, [selectedId, graph.elements]);

  const selected = graph.nodes.find((item) => item.id === selectedId);
  const reset = () => { setQuery(""); setSite(""); setPathogenGroup(""); setDrugClass(""); setShowCoverage(false); setSelectedId(""); };
  const zoom = (factor: number) => { const cy = cyRef.current; if (!cy) return; cy.zoom({ level: cy.zoom() * factor, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } }); };
  const fit = () => cyRef.current?.fit(undefined, 36);

  return <div className={fullScreen ? "fixed inset-0 z-[80] overflow-auto bg-slate-950 p-3 sm:p-6" : "space-y-5"}>
    <section className={`rounded-2xl border p-4 shadow-sm ${fullScreen ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}>
      <div className="grid gap-3 lg:grid-cols-[minmax(220px,1.4fr)_repeat(3,minmax(150px,1fr))_auto]"><label className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="질환·병원체·항생제 검색" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-950 outline-none focus:border-teal-500" /></label><select value={pathogenGroup} onChange={(event) => setPathogenGroup(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">모든 병원체 분류</option>{pathogenGroups.map((item) => <option key={item} value={item}>{PATHOGEN_GROUP_LABELS[item] ?? item}</option>)}</select><select value={site} onChange={(event) => setSite(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">모든 감염 부위</option>{sites.map((item) => <option key={item} value={item}>{SITE_LABELS[item] ?? item}</option>)}</select><select value={drugClass} onChange={(event) => setDrugClass(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"><option value="">모든 항생제 계열</option>{classes.map((item) => <option key={item}>{item}</option>)}</select><button type="button" onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600"><Filter className="h-4 w-4" />초기화</button></div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><button type="button" onClick={() => setShowCoverage((value) => !value)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${showCoverage ? "border-violet-700 bg-violet-700 text-white" : "border-violet-200 bg-violet-50 text-violet-900"}`}>병원체 → 항생제 활성 관계 {showCoverage ? "표시 중" : "표시"}</button><div className="flex gap-2"><button type="button" onClick={() => zoom(1.2)} className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700" aria-label="확대"><ZoomIn className="h-4 w-4" /></button><button type="button" onClick={() => zoom(.82)} className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700" aria-label="축소"><ZoomOut className="h-4 w-4" /></button><button type="button" onClick={fit} className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700" aria-label="화면 맞춤"><RotateCcw className="h-4 w-4" /></button><button type="button" onClick={() => setFullScreen((value) => !value)} className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700" aria-label="전체 화면"><Expand className="h-4 w-4" /></button></div></div>
    </section>
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
      <section className="relative min-h-[540px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:min-h-[660px]"><div className="absolute inset-0"><div ref={containerRef} className="h-full w-full" aria-label="질환 병원체 항생제 관계도" /></div></section>
      <aside className={`rounded-2xl border p-4 shadow-sm ${fullScreen ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}><div className={`text-xs font-bold uppercase tracking-[0.14em] ${fullScreen ? "text-teal-300" : "text-teal-700"}`}>선택한 항목</div>{selected ? <div className="mt-3"><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${selected.kind === "disease" ? "bg-sky-100 text-sky-900" : selected.kind === "organism" ? "bg-teal-100 text-teal-900" : "bg-amber-100 text-amber-900"}`}>{selected.kind === "disease" ? "질환" : selected.kind === "organism" ? "병원체" : "항생제"}</span><h3 className={`mt-3 text-lg font-bold ${fullScreen ? "text-white" : "text-slate-950"}`}>{selected.label}</h3><p className={`mt-1 text-sm ${fullScreen ? "text-slate-300" : "text-slate-500"}`}>{selected.subtitle}</p><p className={`mt-4 text-sm leading-6 ${fullScreen ? "text-slate-200" : "text-slate-700"}`}>{selected.description}</p>{selected.href ? <Link href={selected.href} className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-bold text-white">상세 문서 보기</Link> : null}<button type="button" onClick={() => setSelectedId("")} className={`mt-3 block text-xs font-semibold ${fullScreen ? "text-slate-300" : "text-slate-500"}`}>선택 해제</button></div> : <p className={`mt-3 text-sm leading-6 ${fullScreen ? "text-slate-300" : "text-slate-500"}`}>질환, 병원체 또는 항생제 노드를 선택하면 관계를 강조하고 연결된 문서로 이동할 수 있습니다.</p>}<div className={`mt-6 rounded-xl p-3 text-xs leading-5 ${fullScreen ? "bg-slate-800 text-slate-300" : "bg-slate-50 text-slate-600"}`}><strong>해석:</strong> 청록선은 예상 원인 병원체, 주황선은 질환별 항균치료 경로입니다. 보라 점선은 활성 spectrum이며 개별 환자에서의 처방 권고가 아닙니다.</div></aside>
    </div>
  </div>;
}
