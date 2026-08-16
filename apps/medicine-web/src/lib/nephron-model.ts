export type NephronInputs = {
  gfr: number;
  adh: number;
  aldosterone: number;
  loopBlock: number;
  thiazideBlock: number;
  enacBlock: number;
  carbonicAnhydraseBlock: number;
};

export type NephronSolute = "Na+" | "K+" | "Cl-" | "HCO3-" | "Ca2+" | "Mg2+" | "H2O";
export type NephronSegmentId = "glomerulus" | "proximal" | "descending" | "thin-ascending" | "thick-ascending" | "distal" | "collecting";
export type TransportDirection = "filter" | "reabsorb" | "secrete" | "recycle";

export type NephronTransportRoute = {
  id: string;
  solute: NephronSolute;
  direction: TransportDirection;
  path: "transcellular" | "paracellular" | "water-channel" | "filtration";
  apical?: string;
  basolateral?: string;
  coupled?: string;
  detail: string;
};

export type NephronSegment = {
  id: NephronSegmentId;
  label: string;
  shortLabel: string;
  region: "cortex" | "outer-medulla" | "inner-medulla";
  permeability: string;
  note: string;
  delivered: Record<NephronSolute, number>;
  handled: Record<NephronSolute, number>;
  remaining: Record<NephronSolute, number>;
  activity: Record<NephronSolute, number>;
  routes: NephronTransportRoute[];
};

export type NephronState = {
  inputs: NephronInputs;
  segments: NephronSegment[];
  excreted: Record<NephronSolute, number>;
  urineVolume: number;
  sodiumExcretion: number;
  potassiumExcretion: number;
  urineOsmolality: number;
  pattern: string;
};

const SOLUTES: NephronSolute[] = ["Na+", "K+", "Cl-", "HCO3-", "Ca2+", "Mg2+", "H2O"];
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const emptySolutes = () => Object.fromEntries(SOLUTES.map((solute) => [solute, 0])) as Record<NephronSolute, number>;

type SegmentDefinition = Omit<NephronSegment, "delivered" | "handled" | "remaining" | "activity"> & {
  baseHandling: Partial<Record<NephronSolute, number>>;
};

const DEFINITIONS: SegmentDefinition[] = [
  {
    id: "glomerulus", label: "사구체", shortLabel: "Glomerulus", region: "cortex", permeability: "크기·전하 선택성 여과", note: "혈장 수분과 작은 용질이 Bowman 공간으로 함께 여과됩니다.", baseHandling: {},
    routes: SOLUTES.map((solute) => ({ id: `filter-${solute}`, solute, direction: "filter", path: "filtration", detail: "사구체 모세혈관에서 Bowman 공간으로 여과" })),
  },
  {
    id: "proximal", label: "근위세뇨관", shortLabel: "PCT", region: "cortex", permeability: "높은 물·용질 투과성", note: "등장성 대량 재흡수와 여과 HCO3- 회수가 일어납니다.",
    baseHandling: { "Na+": 65, "K+": 65, "Cl-": 65, "HCO3-": 80, "Ca2+": 65, "Mg2+": 15, H2O: 65 },
    routes: [
      { id: "pct-na", solute: "Na+", direction: "reabsorb", path: "transcellular", apical: "NHE3 · SGLT2", basolateral: "Na+/K+-ATPase", detail: "Na+ 유입이 glucose와 H+ 수송을 구동" },
      { id: "pct-k", solute: "K+", direction: "reabsorb", path: "paracellular", coupled: "solvent drag", detail: "물 흐름과 농도기울기를 따라 세포 사이로 이동" },
      { id: "pct-cl", solute: "Cl-", direction: "reabsorb", path: "paracellular", coupled: "Cl-/anion exchange", detail: "후반부 관강 농축과 전기화학 기울기로 회수" },
      { id: "pct-hco3", solute: "HCO3-", direction: "reabsorb", path: "transcellular", apical: "NHE3 · CA IV/II", basolateral: "NBCe1", coupled: "CO2 diffusion", detail: "H+ 재순환을 이용해 여과 HCO3-를 CO2로 바꿔 회수" },
      { id: "pct-ca", solute: "Ca2+", direction: "reabsorb", path: "paracellular", coupled: "solvent drag", detail: "Na+와 물의 대량 재흡수에 동반" },
      { id: "pct-mg", solute: "Mg2+", direction: "reabsorb", path: "paracellular", detail: "근위부에서 소량의 수동 재흡수" },
      { id: "pct-water", solute: "H2O", direction: "reabsorb", path: "water-channel", apical: "AQP1", basolateral: "AQP1", detail: "높은 물 투과성으로 용질과 등장성 재흡수" },
    ],
  },
  {
    id: "descending", label: "얇은 하행각", shortLabel: "Thin descending", region: "inner-medulla", permeability: "물 투과성 높음 · 염류 낮음", note: "고삼투성 수질 간질로 물이 빠져나가 관강액이 농축됩니다.", baseHandling: { H2O: 15 },
    routes: [{ id: "desc-water", solute: "H2O", direction: "reabsorb", path: "water-channel", apical: "AQP1", basolateral: "AQP1", detail: "수질 삼투기울기를 따라 물이 간질·vasa recta로 이동" }],
  },
  {
    id: "thin-ascending", label: "얇은 상행각", shortLabel: "Thin ascending", region: "inner-medulla", permeability: "물 불투과 · 수동 NaCl 이동", note: "물은 남고 NaCl이 수동적으로 빠져나가 희석이 시작됩니다.", baseHandling: { "Na+": 2, "Cl-": 2 },
    routes: [
      { id: "thin-na", solute: "Na+", direction: "reabsorb", path: "paracellular", detail: "농축된 관강액에서 수질 간질로 수동 이동" },
      { id: "thin-cl", solute: "Cl-", direction: "reabsorb", path: "transcellular", apical: "ClC-K1", basolateral: "ClC-K1", detail: "수동 Cl- 투과가 NaCl 회수를 돕음" },
    ],
  },
  {
    id: "thick-ascending", label: "굵은 상행각", shortLabel: "TAL", region: "outer-medulla", permeability: "물 불투과 · 능동 염류 수송", note: "NKCC2가 Na-K-2Cl을 회수하고 ROMK 재순환이 양성 관강전위를 만듭니다.", baseHandling: { "Na+": 23, "K+": 25, "Cl-": 23, "HCO3-": 10, "Ca2+": 25, "Mg2+": 70 },
    routes: [
      { id: "tal-na", solute: "Na+", direction: "reabsorb", path: "transcellular", apical: "NKCC2", basolateral: "Na+/K+-ATPase", coupled: "K+ · 2Cl-", detail: "loop 이뇨제의 주 표적" },
      { id: "tal-k", solute: "K+", direction: "reabsorb", path: "transcellular", apical: "NKCC2", basolateral: "Na+/K+-ATPase", detail: "NKCC2로 유입된 K+ 일부가 혈측으로 이동" },
      { id: "tal-k-recycle", solute: "K+", direction: "recycle", path: "transcellular", apical: "ROMK", detail: "K+를 관강으로 되돌려 NKCC2와 양성 관강전위를 유지" },
      { id: "tal-cl", solute: "Cl-", direction: "reabsorb", path: "transcellular", apical: "NKCC2", basolateral: "ClC-Kb", coupled: "Na+ · K+", detail: "NKCC2로 유입 후 basolateral ClC-Kb로 유출" },
      { id: "tal-ca", solute: "Ca2+", direction: "reabsorb", path: "paracellular", coupled: "lumen-positive voltage", detail: "ROMK가 만든 양성 관강전위에 의해 세포 사이 이동" },
      { id: "tal-mg", solute: "Mg2+", direction: "reabsorb", path: "paracellular", coupled: "claudin-16/19", detail: "Mg2+ 재흡수의 주 분절" },
      { id: "tal-hco3", solute: "HCO3-", direction: "reabsorb", path: "transcellular", apical: "NHE3", basolateral: "AE2/NBC", detail: "남은 HCO3- 일부 회수" },
    ],
  },
  {
    id: "distal", label: "원위곡세뇨관", shortLabel: "DCT", region: "cortex", permeability: "물 불투과 · 선택적 NaCl/Ca/Mg", note: "NCC가 NaCl을 회수하고 TRPV5와 TRPM6가 Ca2+·Mg2+를 선택적으로 조절합니다.", baseHandling: { "Na+": 5, "Cl-": 5, "Ca2+": 8, "Mg2+": 10 },
    routes: [
      { id: "dct-na", solute: "Na+", direction: "reabsorb", path: "transcellular", apical: "NCC", basolateral: "Na+/K+-ATPase", coupled: "Cl-", detail: "thiazide의 주 표적" },
      { id: "dct-cl", solute: "Cl-", direction: "reabsorb", path: "transcellular", apical: "NCC", basolateral: "ClC-Kb", coupled: "Na+", detail: "NCC와 함께 전기중성 NaCl 회수" },
      { id: "dct-ca", solute: "Ca2+", direction: "reabsorb", path: "transcellular", apical: "TRPV5", basolateral: "NCX1 · PMCA", detail: "PTH와 thiazide에서 Ca2+ 회수가 증가" },
      { id: "dct-mg", solute: "Mg2+", direction: "reabsorb", path: "transcellular", apical: "TRPM6", basolateral: "CNNM2", detail: "최종 Mg2+ 조절의 핵심 분절" },
    ],
  },
  {
    id: "collecting", label: "연결세뇨관·집합관", shortLabel: "CNT/CD", region: "cortex", permeability: "호르몬 조절 최종 미세조정", note: "ENaC, ROMK, AQP2와 intercalated cell이 최종 Na-K-물-산염기 배설을 결정합니다.", baseHandling: { "Na+": 4, "K+": -8, "Cl-": 3, "HCO3-": 7, "Ca2+": 1, H2O: 19 },
    routes: [
      { id: "cd-na", solute: "Na+", direction: "reabsorb", path: "transcellular", apical: "ENaC", basolateral: "Na+/K+-ATPase", coupled: "aldosterone", detail: "aldosterone가 ENaC와 pump 발현을 증가" },
      { id: "cd-k", solute: "K+", direction: "secrete", path: "transcellular", apical: "ROMK · BK", basolateral: "Na+/K+-ATPase", coupled: "aldosterone · distal flow", detail: "혈측 K+가 principal cell을 거쳐 관강으로 분비" },
      { id: "cd-cl", solute: "Cl-", direction: "reabsorb", path: "transcellular", apical: "Pendrin", basolateral: "ClC-K", coupled: "HCO3- exchange", detail: "β-intercalated cell에서 Cl-/HCO3- 교환" },
      { id: "cd-hco3", solute: "HCO3-", direction: "reabsorb", path: "transcellular", apical: "H+-ATPase", basolateral: "AE1", coupled: "α-intercalated cell", detail: "H+ 분비와 새 HCO3-의 혈측 이동" },
      { id: "cd-ca", solute: "Ca2+", direction: "reabsorb", path: "paracellular", detail: "원위부에서 소량의 최종 회수" },
      { id: "cd-water", solute: "H2O", direction: "reabsorb", path: "water-channel", apical: "AQP2", basolateral: "AQP3/4", coupled: "ADH · V2 receptor", detail: "ADH가 AQP2를 apical membrane에 삽입" },
    ],
  },
];

function segmentModifier(id: NephronSegmentId, solute: NephronSolute, inputs: NephronInputs) {
  if (id === "proximal" && (solute === "HCO3-" || solute === "Na+")) return 1 - inputs.carbonicAnhydraseBlock / 100 * (solute === "HCO3-" ? 0.82 : 0.12);
  if (id === "thick-ascending" && solute !== "H2O") return 1 - inputs.loopBlock / 100 * 0.94;
  if (id === "distal" && (solute === "Na+" || solute === "Cl-")) return 1 - inputs.thiazideBlock / 100 * 0.92;
  if (id === "distal" && solute === "Ca2+") return 1 + inputs.thiazideBlock / 100 * 0.35;
  if (id === "collecting" && solute === "Na+") return (0.45 + inputs.aldosterone / 100 * 0.9) * (1 - inputs.enacBlock / 100 * 0.95);
  if (id === "collecting" && solute === "K+") {
    const distalFlow = 1 + (inputs.loopBlock + inputs.thiazideBlock) / 250;
    return (0.35 + inputs.aldosterone / 100 * 1.15) * distalFlow * (1 - inputs.enacBlock / 100 * 0.85);
  }
  if (id === "collecting" && solute === "H2O") return 0.55 + inputs.adh / 100 * 0.9;
  return 1;
}

export function calculateNephronState(raw: NephronInputs): NephronState {
  const inputs: NephronInputs = {
    gfr: clamp(raw.gfr, 40, 160), adh: clamp(raw.adh, 0, 100), aldosterone: clamp(raw.aldosterone, 0, 100),
    loopBlock: clamp(raw.loopBlock, 0, 100), thiazideBlock: clamp(raw.thiazideBlock, 0, 100),
    enacBlock: clamp(raw.enacBlock, 0, 100), carbonicAnhydraseBlock: clamp(raw.carbonicAnhydraseBlock, 0, 100),
  };
  const remaining = Object.fromEntries(SOLUTES.map((solute) => [solute, 100])) as Record<NephronSolute, number>;
  const segments = DEFINITIONS.map((definition) => {
    const delivered = { ...remaining }; const handled = emptySolutes(); const activity = emptySolutes();
    for (const solute of SOLUTES) {
      const base = definition.baseHandling[solute] ?? 0; const modifier = segmentModifier(definition.id, solute, inputs);
      handled[solute] = base * modifier; activity[solute] = base === 0 ? 0 : clamp(Math.abs(modifier) * 100, 0, 180);
      remaining[solute] = clamp(remaining[solute] - handled[solute], 0.05, 160);
    }
    return { ...definition, delivered, handled, remaining: { ...remaining }, activity };
  });
  const excreted = { ...remaining }; const filteredWaterLiters = 180 * inputs.gfr / 100;
  const urineVolume = clamp(filteredWaterLiters * excreted.H2O / 100, 0.35, 30); const sodiumExcretion = excreted["Na+"]; const potassiumExcretion = excreted["K+"];
  const concentratingIntegrity = 1 - inputs.loopBlock / 100 * 0.65; const urineOsmolality = clamp(70 + inputs.adh * 10.5 * concentratingIntegrity, 50, 1200);
  let pattern = "정상 분절별 수송과 최종 미세조정";
  if (inputs.loopBlock > 35) pattern = "NKCC2 억제 · NaCl/Ca/Mg 회수와 수질 농축기울기 감소";
  else if (inputs.thiazideBlock > 35) pattern = "NCC 억제 · NaCl 배설 증가와 Ca2+ 회수 증가";
  else if (inputs.enacBlock > 35) pattern = "ENaC 억제 · Na+ 회수와 K+ 분비 감소";
  else if (inputs.carbonicAnhydraseBlock > 35) pattern = "근위 HCO3- 회수 억제 · bicarbonaturia";
  else if (inputs.adh < 20) pattern = "AQP2 활성 저하 · 묽은 다뇨";
  else if (inputs.aldosterone > 75) pattern = "ENaC 활성과 원위 K+ 분비 증가";
  return { inputs, segments, excreted, urineVolume, sodiumExcretion, potassiumExcretion, urineOsmolality, pattern };
}

export function getNephronSegment(state: NephronState, id: NephronSegmentId) {
  return state.segments.find((segment) => segment.id === id) ?? state.segments[0];
}
