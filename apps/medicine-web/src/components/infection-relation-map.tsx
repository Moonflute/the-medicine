"use client";

import Link from "next/link";
import cytoscape, { type Core, type ElementDefinition } from "cytoscape";
import {
  ChevronDown,
  Expand,
  Filter,
  RotateCcw,
  Search,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import type {
  InfectionPathwayDataset,
  InfectionPopulation,
} from "@/lib/infection-types";
import type { AntibioticSpectrumDataset } from "@/lib/types";

type NodeKind = "disease" | "organism" | "antibiotic";
type NodeInfo = {
  id: string;
  kind: NodeKind;
  label: string;
  subtitle: string;
  href: string;
  description: string;
  group: string;
  fill: string;
  border: string;
  isGroup?: boolean;
};
type EdgeInfo = {
  id: string;
  source: string;
  target: string;
  kind: "disease-pathogen" | "disease-antibiotic";
};

const SITE_LABELS: Record<string, string> = {
  "lower-respiratory-tract": "하기도",
  "lower-urinary-tract": "하부 요로",
  "upper-urinary-tract": "상부 요로",
  "skin-soft-tissue": "피부·연조직",
  systemic: "전신",
  endovascular: "심혈관·혈류",
  "central-nervous-system": "중추신경계",
  "bone-spine": "골·척추",
  "bloodstream-catheter": "도관·혈류",
  peritoneal: "복막",
  gastrointestinal: "위장관",
  "head-neck": "두경부",
};
const PATHOGEN_LABELS: Record<string, string> = {
  "Gram-positive": "G(+)균",
  "Gram-negative": "G(-)균",
  Anaerobes: "혐기성균",
  Atypicals: "비정형균",
  "Resistance phenotype": "내성 phenotype",
};
const PATHOGEN_ORDER = [
  "Gram-positive",
  "Gram-negative",
  "Anaerobes",
  "Atypicals",
  "Resistance phenotype",
];
const PATHOGEN_TONES: Record<string, [string, string]> = {
  "Gram-positive": ["#ede9fe", "#7c3aed"],
  "Gram-negative": ["#fce7f3", "#db2777"],
  Anaerobes: ["#fef3c7", "#d97706"],
  Atypicals: ["#e0e7ff", "#4f46e5"],
  "Resistance phenotype": ["#e2e8f0", "#475569"],
};
const DISEASE_TONES = [
  ["#dbeafe", "#2563eb"],
  ["#ccfbf1", "#0f766e"],
  ["#ffe4e6", "#e11d48"],
  ["#fef3c7", "#b45309"],
  ["#e0e7ff", "#4f46e5"],
  ["#dcfce7", "#15803d"],
] as const;
const POPULATION_LABELS: Record<
  Exclude<InfectionPopulation, "adult">,
  string
> = {
  pediatric: "소아",
  neonate: "신생아",
  pregnant: "임신",
  immunocompromised: "면역저하",
  neutropenic: "호중구감소",
};
const unique = <T,>(items: T[]) => [...new Set(items)];
const nodeId = (kind: NodeKind, id: string) => `${kind}:${id}`;
const normalize = (value: string) =>
  value.toLocaleLowerCase().replace(/[\s/_-]+/g, "");
const toneFor = (key: string, tones: readonly (readonly [string, string])[]) =>
  tones[
    [...key].reduce((sum, char) => sum + char.charCodeAt(0), 0) % tones.length
  ];
const pathwayLabel = (displayName: string) =>
  displayName.replace(/^성인\s+/, "");
const pathwayPopulationLabel = (population: InfectionPopulation[]) =>
  population
    .filter(
      (item): item is Exclude<InfectionPopulation, "adult"> => item !== "adult",
    )
    .map((item) => POPULATION_LABELS[item])
    .join(" · ");

function antibioticFamily(value: string) {
  const normalized = value.toLowerCase();
  if (normalized.includes("penicillin"))
    return {
      key: "penicillins",
      label: "Penicillins / BLI",
      fill: "#e0f2fe",
      border: "#0369a1",
    };
  if (normalized.includes("cephalosporin") || normalized.includes("cephamycin"))
    return {
      key: "cephalosporins",
      label: "Cephalosporins",
      fill: "#e0e7ff",
      border: "#4338ca",
    };
  if (normalized.includes("carbapenem"))
    return {
      key: "carbapenems",
      label: "Carbapenems / BLI",
      fill: "#ffedd5",
      border: "#c2410c",
    };
  if (normalized.includes("monobactam"))
    return {
      key: "monobactams",
      label: "Monobactams",
      fill: "#ecfccb",
      border: "#4d7c0f",
    };
  if (normalized.includes("aminoglycoside"))
    return {
      key: "aminoglycosides",
      label: "Aminoglycosides",
      fill: "#fef9c3",
      border: "#a16207",
    };
  if (normalized.includes("fluoroquinolone"))
    return {
      key: "fluoroquinolones",
      label: "Fluoroquinolones",
      fill: "#fae8ff",
      border: "#a21caf",
    };
  if (normalized.includes("macrolide") || normalized.includes("lincosamide"))
    return {
      key: "macrolides",
      label: "Macrolides / Lincosamides",
      fill: "#fce7f3",
      border: "#be185d",
    };
  if (
    normalized.includes("tetracycline") ||
    normalized.includes("glycylcycline")
  )
    return {
      key: "tetracyclines",
      label: "Tetracyclines",
      fill: "#d1fae5",
      border: "#047857",
    };
  if (
    normalized.includes("glycopeptide") ||
    normalized.includes("lipopeptide") ||
    normalized.includes("oxazolidinone")
  )
    return {
      key: "gram-positive",
      label: "Gram-positive agents",
      fill: "#ede9fe",
      border: "#6d28d9",
    };
  return {
    key: "other",
    label: "Other antibacterial agents",
    fill: "#f5f5f4",
    border: "#57534e",
  };
}

function columnPositions(nodes: NodeInfo[], selectedId = "", stacked = false) {
  if (stacked) {
    const positions = new Map<string, { x: number; y: number }>();
    let y = 0;
    for (const kind of ["disease", "organism", "antibiotic"] as NodeKind[]) {
      const kindNodes = nodes
        .filter((node) => node.kind === kind)
        .sort(
          (left, right) =>
            Number(right.id === selectedId) - Number(left.id === selectedId) ||
            left.group.localeCompare(right.group) ||
            left.label.localeCompare(right.label),
        );
      kindNodes.forEach((node, index) => {
        positions.set(node.id, {
          x: ((index % 3) - 1) * 145,
          y: y + Math.floor(index / 3) * 92,
        });
      });
      y += Math.ceil(kindNodes.length / 3) * 92 + 156;
    }
    const all = [...positions.values()];
    const middle = all.length
      ? (Math.min(...all.map((position) => position.y)) +
          Math.max(...all.map((position) => position.y))) /
        2
      : 0;
    positions.forEach((position, id) =>
      positions.set(id, { ...position, y: position.y - middle }),
    );
    return positions;
  }
  const anchors: Record<NodeKind, number> = {
    disease: -580,
    organism: 0,
    antibiotic: 580,
  };
  const positions = new Map<string, { x: number; y: number }>();
  for (const kind of ["disease", "organism", "antibiotic"] as NodeKind[]) {
    const kindNodes = nodes.filter((node) => node.kind === kind);
    if (selectedId) {
      const ordered = kindNodes
        .slice()
        .sort(
          (left, right) =>
            Number(right.id === selectedId) - Number(left.id === selectedId) ||
            left.label.localeCompare(right.label),
        );
      ordered.forEach((node, index) => {
        const rank =
          node.id === selectedId
            ? 0
            : Math.ceil(index / 2) * (index % 2 ? 1 : -1);
        positions.set(node.id, { x: anchors[kind], y: rank * 112 });
      });
      continue;
    }
    const groups = [...new Set(kindNodes.map((node) => node.group))].sort();
    let y = 0;
    for (const group of groups) {
      const members = kindNodes
        .filter((node) => node.group === group)
        .sort((left, right) => left.label.localeCompare(right.label));
      members.forEach((node, index) =>
        positions.set(node.id, {
          x: anchors[kind] + ((index % 3) - 1) * 145,
          y: y + Math.floor(index / 3) * 92,
        }),
      );
      y += Math.ceil(members.length / 3) * 92 + 28;
    }
    const kindPositions = kindNodes
      .map((node) => positions.get(node.id))
      .filter((position): position is { x: number; y: number } =>
        Boolean(position),
      );
    const middle = kindPositions.length
      ? (Math.min(...kindPositions.map((position) => position.y)) +
          Math.max(...kindPositions.map((position) => position.y))) /
        2
      : 0;
    kindNodes.forEach((node) => {
      const position = positions.get(node.id);
      if (position)
        positions.set(node.id, { x: position.x, y: position.y - middle });
    });
  }
  return positions;
}

export function InfectionRelationMap({
  pathways,
  spectrum,
}: {
  pathways: InfectionPathwayDataset;
  spectrum: AntibioticSpectrumDataset;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [site, setSite] = useState("");
  const [pathogenGroup, setPathogenGroup] = useState("");
  const [drugClass, setDrugClass] = useState("");
  const [hideDiseaseAntibiotic, setHideDiseaseAntibiotic] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    () => new Set(),
  );
  const [selectedId, setSelectedId] = useState("");
  const [viewMode, setViewMode] = useState<"all" | "focus">("all");
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const clinicalPathways = useMemo(
    () =>
      pathways.pathways.filter(
        (item) =>
          item.reviewStatus === "verified" || item.reviewStatus === "reviewed",
      ),
    [pathways.pathways],
  );
  const sites = unique(
    clinicalPathways.map((item) => item.infectionSite),
  ).sort();
  const classes = unique(spectrum.antibiotics.map((item) => item.class)).sort();
  const pathogenGroups = unique(
    spectrum.organisms.map((item) => item.group),
  ).sort((a, b) => PATHOGEN_ORDER.indexOf(a) - PATHOGEN_ORDER.indexOf(b));
  const organismById = useMemo(
    () => new Map(spectrum.organisms.map((item) => [item.id, item])),
    [spectrum.organisms],
  );

  const graph = useMemo(() => {
    const filtered = clinicalPathways.filter(
      (item) =>
        (!site || item.infectionSite === site) &&
        (!pathogenGroup ||
          item.pathogenGroups.some((group) =>
            group.organisms.some(
              (organism) =>
                organismById.get(organism.organismId)?.group === pathogenGroup,
            ),
          )),
    );
    const organismIds = new Set<string>();
    const antibioticIds = new Set<string>();
    for (const pathway of filtered) {
      for (const group of pathway.pathogenGroups)
        for (const organism of group.organisms)
          if (
            !pathogenGroup ||
            organismById.get(organism.organismId)?.group === pathogenGroup
          )
            organismIds.add(organism.organismId);
      for (const regimen of pathway.empiricRegimens)
        for (const component of regimen.components)
          for (const id of component.antibioticIds) antibioticIds.add(id);
      for (const therapy of pathway.targetedTherapies)
        for (const id of therapy.antibioticIds) antibioticIds.add(id);
    }
    const antibiotics = spectrum.antibiotics.filter(
      (item) =>
        antibioticIds.has(item.id) && (!drugClass || item.class === drugClass),
    );
    const antibioticIdsVisible = new Set(antibiotics.map((item) => item.id));
    const organisms = spectrum.organisms.filter((item) =>
      organismIds.has(item.id),
    );
    const baseNodes: NodeInfo[] = [
      ...filtered.map((item) => {
        const [fill, border] = toneFor(item.infectionSite, DISEASE_TONES);
        const population = pathwayPopulationLabel(item.population);
        return {
          id: nodeId("disease", item.id),
          kind: "disease" as const,
          label: pathwayLabel(item.displayName),
          subtitle: [
            SITE_LABELS[item.infectionSite] ?? item.infectionSite,
            population,
          ]
            .filter(Boolean)
            .join(" · "),
          href: `/disease/${item.diseaseSlug}`,
          description: item.diagnosticNotes[0] ?? "임상 경로",
          group: item.infectionSite,
          fill,
          border,
        };
      }),
      ...organisms.map((item) => {
        const [fill, border] = PATHOGEN_TONES[item.group] ?? [
          "#f1f5f9",
          "#475569",
        ];
        return {
          id: nodeId("organism", item.id),
          kind: "organism" as const,
          label: item.label,
          subtitle: PATHOGEN_LABELS[item.group] ?? item.group,
          href: item.microbiologySlug
            ? `/microbiology/${item.microbiologySlug}`
            : "",
          description: item.aliases.join(" · "),
          group: item.group,
          fill,
          border,
        };
      }),
      ...antibiotics.map((item) => {
        const family = antibioticFamily(item.class);
        return {
          id: nodeId("antibiotic", item.id),
          kind: "antibiotic" as const,
          label: item.inn,
          subtitle: family.label,
          href: `/drugs/${item.drugSlug}`,
          description: `${item.routes.join(" / ")} · ${item.displayName}`,
          group: family.key,
          fill: family.fill,
          border: family.border,
        };
      }),
    ];
    const rawEdges: EdgeInfo[] = [];
    for (const pathway of filtered) {
      const disease = nodeId("disease", pathway.id);
      for (const group of pathway.pathogenGroups)
        for (const organism of group.organisms)
          if (organismIds.has(organism.organismId))
            rawEdges.push({
              id: `dp:${pathway.id}:${organism.organismId}`,
              source: disease,
              target: nodeId("organism", organism.organismId),
              kind: "disease-pathogen",
            });
      if (!hideDiseaseAntibiotic) {
        for (const regimen of pathway.empiricRegimens)
          for (const component of regimen.components)
            for (const id of component.antibioticIds)
              if (antibioticIdsVisible.has(id))
                rawEdges.push({
                  id: `da:${pathway.id}:${regimen.id}:${id}`,
                  source: disease,
                  target: nodeId("antibiotic", id),
                  kind: "disease-antibiotic",
                });
        for (const therapy of pathway.targetedTherapies)
          for (const id of therapy.antibioticIds)
            if (antibioticIdsVisible.has(id))
              rawEdges.push({
                id: `dt:${pathway.id}:${therapy.organismId}:${id}`,
                source: disease,
                target: nodeId("antibiotic", id),
                kind: "disease-antibiotic",
              });
      }
    }
    const displayed = new Map<string, NodeInfo>();
    const remap = new Map<string, string>();
    for (const node of baseNodes) {
      const groupId = `${node.kind}:${node.group}`;
      if (
        !collapsed ||
        node.kind === "disease" ||
        expandedGroups.has(groupId)
      ) {
        remap.set(node.id, node.id);
        displayed.set(node.id, node);
      } else {
        const representative = `group:${groupId}`;
        remap.set(node.id, representative);
        if (!displayed.has(representative))
          displayed.set(representative, {
            ...node,
            id: representative,
            label: node.subtitle,
            description: "대표 그룹을 선택하면 개별 항목을 펼칩니다.",
            href: "",
            isGroup: true,
          });
      }
    }
    const edges = new Map<string, EdgeInfo>();
    for (const edge of rawEdges) {
      const source = remap.get(edge.source);
      const target = remap.get(edge.target);
      if (!source || !target || source === target) continue;
      const key = `${source}:${target}:${edge.kind}`;
      if (!edges.has(key)) edges.set(key, { ...edge, id: key, source, target });
    }
    const nodes = [...displayed.values()];
    const matching = deferredQuery
      ? new Set(
          nodes
            .filter((item) =>
              normalize(
                [item.label, item.subtitle, item.description].join(" "),
              ).includes(normalize(deferredQuery)),
            )
            .map((item) => item.id),
        )
      : null;
    const related = matching?.size
      ? new Set([
          ...matching,
          ...[...edges.values()]
            .filter(
              (edge) => matching.has(edge.source) || matching.has(edge.target),
            )
            .flatMap((edge) => [edge.source, edge.target]),
        ])
      : null;
    const visibleNodes = related
      ? nodes.filter((item) => related.has(item.id))
      : nodes;
    const visibleIds = new Set(visibleNodes.map((item) => item.id));
    const visibleEdges = [...edges.values()].filter(
      (item) => visibleIds.has(item.source) && visibleIds.has(item.target),
    );
    const positions = columnPositions(visibleNodes, "", isMobile);
    return {
      nodes: visibleNodes,
      elements: [
        ...visibleNodes.map((item) => ({
          data: item,
          position: positions.get(item.id),
          classes: `${item.kind}${item.isGroup ? " group-node" : ""}`,
        })),
        ...visibleEdges.map((item) => ({ data: item, classes: item.kind })),
      ] as ElementDefinition[],
    };
  }, [
    clinicalPathways,
    collapsed,
    deferredQuery,
    drugClass,
    expandedGroups,
    hideDiseaseAntibiotic,
    isMobile,
    organismById,
    pathogenGroup,
    site,
    spectrum.antibiotics,
    spectrum.organisms,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;
    const cy = cytoscape({
      container: containerRef.current,
      elements: graph.elements,
      pixelRatio: 1,
      wheelSensitivity: 1,
      minZoom: 0.25,
      maxZoom: 3.2,
      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            color: "#0f172a",
            "font-size": "13px",
            "font-weight": "bold",
            "text-wrap": "wrap",
            "text-max-width": "112px",
            "text-valign": "center",
            "text-halign": "center",
            width: "108px",
            height: "58px",
            "border-width": "2px",
            "background-color": "data(fill)",
            "border-color": "data(border)",
            "overlay-opacity": 0,
            "transition-property": "opacity, border-width, width, height",
            "transition-duration": 220,
          },
        },
        {
          selector: ".disease",
          style: { shape: "round-rectangle", width: "126px", height: "64px" },
        },
        {
          selector: ".organism",
          style: { shape: "ellipse", width: "112px", height: "66px" },
        },
        {
          selector: ".antibiotic",
          style: { shape: "hexagon", width: "122px", height: "66px" },
        },
        {
          selector: ".group-node",
          style: {
            "font-size": "14px",
            "border-width": "3px",
            "border-style": "dashed",
          },
        },
        {
          selector: "edge",
          style: {
            width: "2px",
            "line-color": "#94a3b8",
            "curve-style": "bezier",
            opacity: 0.62,
            "transition-property": "opacity, width",
            "transition-duration": 220,
          },
        },
        { selector: ".disease-pathogen", style: { "line-color": "#0f766e" } },
        { selector: ".disease-antibiotic", style: { "line-color": "#d97706" } },
        { selector: ".is-muted", style: { opacity: 0.055 } },
        {
          selector: ".is-selected",
          style: {
            width: "150px",
            height: "82px",
            "border-width": "5px",
            "border-color": "#0f172a",
            "z-index": 30,
          },
        },
      ],
      layout: { name: "preset", animate: false, fit: false },
    });
    cy.fit(undefined, 72);
    cy.zoom(Math.min(cy.maxZoom(), cy.zoom() * 1.35));
    cy.on("tap", "node", (event) => {
      const node = event.target;
      if (node.data("isGroup")) {
        const groupId = node.id().replace("group:", "");
        setExpandedGroups((current) => {
          const next = new Set(current);
          if (next.has(groupId)) next.delete(groupId);
          else next.add(groupId);
          return next;
        });
        return;
      }
      setSelectedId(node.id());
      setViewMode("focus");
    });
    cy.on("tap", (event) => {
      if (event.target === cy) {
        setSelectedId("");
        setViewMode("all");
      }
    });
    cyRef.current = cy;
    return () => {
      cy.destroy();
      if (cyRef.current === cy) cyRef.current = null;
    };
  }, [graph.elements]);
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.resize();
    cy.fit(undefined, 64);
  }, [fullScreen]);
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.elements()
      .style("display", "element")
      .removeClass("is-muted is-selected");
    const restorePositions = columnPositions(graph.nodes, "", isMobile);
    if (!selectedId || !cy.getElementById(selectedId).nonempty()) {
      cy.nodes().forEach((node) => {
        const position = restorePositions.get(node.id());
        if (position)
          node.animate({ position, duration: 360, easing: "ease-out-cubic" });
      });
      cy.animate({
        fit: { eles: cy.elements(), padding: 72 },
        duration: 420,
        easing: "ease-out-cubic",
      });
      return;
    }
    const selected = cy.getElementById(selectedId);
    let focus = selected.closedNeighborhood();
    if (selected.data("kind") !== "disease") focus = focus.closedNeighborhood();
    selected.addClass("is-selected");
    if (viewMode === "focus") {
      cy.elements().difference(focus).style("display", "none");
      const focusNodes = focus
        .nodes()
        .map((node) => graph.nodes.find((item) => item.id === node.id()))
        .filter((item): item is NodeInfo => Boolean(item));
      const focusPositions = columnPositions(focusNodes, selectedId, isMobile);
      focus.nodes().forEach((node) => {
        const position = focusPositions.get(node.id());
        if (position)
          node.animate({ position, duration: 360, easing: "ease-out-cubic" });
      });
    } else {
      cy.elements().difference(focus).addClass("is-muted");
      cy.nodes().forEach((node) => {
        const position = restorePositions.get(node.id());
        if (position)
          node.animate({ position, duration: 360, easing: "ease-out-cubic" });
      });
    }
    const fitTimer = window.setTimeout(
      () =>
        cy.animate({
          fit: {
            eles: viewMode === "focus" ? focus : cy.elements(),
            padding: 96,
          },
          duration: 360,
          easing: "ease-out-cubic",
        }),
      340,
    );
    return () => window.clearTimeout(fitTimer);
  }, [isMobile, selectedId, viewMode, graph.elements, graph.nodes]);
  const selected = graph.nodes.find((item) => item.id === selectedId);
  const reset = () => {
    setQuery("");
    setSite("");
    setPathogenGroup("");
    setDrugClass("");
    setHideDiseaseAntibiotic(false);
    setCollapsed(false);
    setExpandedGroups(new Set());
    setSelectedId("");
    setViewMode("all");
  };
  const zoom = (factor: number) => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.animate({
      zoom: {
        level: cy.zoom() * factor,
        renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 },
      },
      duration: 180,
      easing: "ease-out-cubic",
    });
  };
  const fit = () =>
    cyRef.current?.animate({
      fit: { eles: cyRef.current.elements(), padding: 64 },
      duration: 280,
      easing: "ease-out-cubic",
    });
  return (
    <div
      className={
        fullScreen
          ? "fixed inset-0 z-[80] overflow-auto bg-slate-950 p-3 sm:p-6"
          : "space-y-5"
      }
    >
      <section
        className={`rounded-2xl border p-4 shadow-sm ${fullScreen ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}
      >
        <div className="grid gap-3 lg:grid-cols-[minmax(220px,1.4fr)_repeat(3,minmax(150px,1fr))_auto]">
          <label className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="질환·병원체·항생제 검색"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-950 outline-none focus:border-teal-500"
            />
          </label>
          <select
            value={pathogenGroup}
            onChange={(event) => setPathogenGroup(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            <option value="">모든 병원체 분류</option>
            {pathogenGroups.map((item) => (
              <option key={item} value={item}>
                {PATHOGEN_LABELS[item] ?? item}
              </option>
            ))}
          </select>
          <select
            value={site}
            onChange={(event) => setSite(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            <option value="">모든 감염 부위</option>
            {sites.map((item) => (
              <option key={item} value={item}>
                {SITE_LABELS[item] ?? item}
              </option>
            ))}
          </select>
          <select
            value={drugClass}
            onChange={(event) => setDrugClass(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            <option value="">모든 항생제 계열</option>
            {classes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600"
          >
            <Filter className="h-4 w-4" />
            초기화
          </button>
        </div>
        <label className="mt-3 inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-slate-600">
          <input
            type="checkbox"
            checked={hideDiseaseAntibiotic}
            onChange={(event) => setHideDiseaseAntibiotic(event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600"
          />
          질병-항생제 직접 연결 숨기기
        </label>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setViewMode("focus")}
              disabled={!selectedId}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${viewMode === "focus" ? "border-teal-700 bg-teal-700 text-white" : "border-teal-200 bg-teal-50 text-teal-900"}`}
            >
              Focus
            </button>
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${viewMode === "all" ? "border-slate-800 bg-slate-800 text-white" : "border-slate-200 bg-white text-slate-700"}`}
            >
              전체 관계도
            </button>
            <button
              type="button"
              onClick={() => setCollapsed((value) => !value)}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold ${collapsed ? "border-slate-800 bg-slate-800 text-white" : "border-slate-200 bg-white text-slate-700"}`}
            >
              <ChevronDown
                className={`h-3.5 w-3.5 ${collapsed ? "" : "rotate-180"}`}
              />
              {collapsed ? "그룹 펼치기" : "병원체·항생제 접기"}
            </button>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => zoom(1.22)}
              className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700"
              aria-label="확대"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => zoom(0.8)}
              className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700"
              aria-label="축소"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={fit}
              className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700"
              aria-label="화면 맞춤"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setFullScreen((value) => !value)}
              className="rounded-lg border border-slate-300 bg-white p-2 text-slate-700"
              aria-label="전체 화면"
            >
              <Expand className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
        <section className="relative min-h-[540px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:min-h-[660px]">
          <div className="absolute inset-0">
            <div
              ref={containerRef}
              className="h-full w-full"
              aria-label="질환 병원체 항생제 관계도"
            />
          </div>
        </section>
        <aside
          className={`rounded-2xl border p-4 shadow-sm ${fullScreen ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}
        >
          <div
            className={`text-xs font-bold uppercase tracking-[0.14em] ${fullScreen ? "text-teal-300" : "text-teal-700"}`}
          >
            선택한 항목
          </div>
          {selected ? (
            <div className="mt-3">
              <span
                className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                style={{
                  backgroundColor: selected.fill,
                  color: selected.border,
                }}
              >
                {selected.kind === "disease"
                  ? "질환"
                  : selected.kind === "organism"
                    ? "병원체"
                    : "항생제"}
              </span>
              <h3
                className={`mt-3 text-lg font-bold ${fullScreen ? "text-white" : "text-slate-950"}`}
              >
                {selected.label}
              </h3>
              <p
                className={`mt-1 text-sm ${fullScreen ? "text-slate-300" : "text-slate-500"}`}
              >
                {selected.subtitle}
              </p>
              <p
                className={`mt-4 text-sm leading-6 ${fullScreen ? "text-slate-200" : "text-slate-700"}`}
              >
                {selected.description}
              </p>
              {selected.href ? (
                <Link
                  href={selected.href}
                  className="mt-5 inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-bold text-white"
                >
                  상세 문서 보기
                </Link>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  setSelectedId("");
                  setViewMode("all");
                }}
                className={`mt-3 block text-xs font-semibold ${fullScreen ? "text-slate-300" : "text-slate-500"}`}
              >
                선택 해제
              </button>
            </div>
          ) : (
            <p
              className={`mt-3 text-sm leading-6 ${fullScreen ? "text-slate-300" : "text-slate-500"}`}
            >
              노드를 선택하면 연결 관계에 자동으로 초점을 맞춥니다. 접힌 대표
              그룹을 선택하면 개별 항목을 펼칩니다.
            </p>
          )}
          <div
            className={`mt-6 rounded-xl p-3 text-xs leading-5 ${fullScreen ? "bg-slate-800 text-slate-300" : "bg-slate-50 text-slate-600"}`}
          >
            <strong>해석:</strong> 청록선은 원인 병원체, 주황선은 질환별
            항균치료 경로입니다.
          </div>
        </aside>
      </div>
    </div>
  );
}
