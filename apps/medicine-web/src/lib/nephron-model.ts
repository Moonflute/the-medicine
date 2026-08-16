export type NephronInputs = {
  gfr: number;
  adh: number;
  aldosterone: number;
  loopBlock: number;
  thiazideBlock: number;
};

export type NephronSolute = "Na+" | "K+" | "HCO3-" | "Ca2+" | "Mg2+" | "H2O";

export type NephronSegment = {
  id: string;
  label: string;
  shortLabel: string;
  transporters: string[];
  note: string;
  reabsorbed: Record<NephronSolute, number>;
};

export type NephronState = {
  inputs: NephronInputs;
  segments: NephronSegment[];
  urineVolume: number;
  sodiumExcretion: number;
  potassiumExcretion: number;
  urineOsmolality: number;
  pattern: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const BASE: Array<Omit<NephronSegment, "reabsorbed"> & { reabsorbed: Record<NephronSolute, number> }> = [
  { id: "proximal", label: "근위세뇨관", shortLabel: "PCT", transporters: ["NHE3", "SGLT2", "AQP1", "carbonic anhydrase"], note: "등장성 대량 재흡수와 여과 HCO3- 회수가 일어납니다.", reabsorbed: { "Na+": 65, "K+": 65, "HCO3-": 80, "Ca2+": 65, "Mg2+": 15, H2O: 65 } },
  { id: "descending", label: "헨레고리 하행각", shortLabel: "Thin descending", transporters: ["AQP1"], note: "물 투과성이 높고 용질 수송은 적어 관강액이 농축됩니다.", reabsorbed: { "Na+": 0, "K+": 0, "HCO3-": 0, "Ca2+": 0, "Mg2+": 0, H2O: 15 } },
  { id: "thick-ascending", label: "굵은 상행각", shortLabel: "TAL", transporters: ["NKCC2", "ROMK", "ClC-Kb"], note: "물은 통과시키지 않고 Na-K-2Cl을 회수해 수질 농도기울기를 만듭니다.", reabsorbed: { "Na+": 25, "K+": 25, "HCO3-": 10, "Ca2+": 25, "Mg2+": 65, H2O: 0 } },
  { id: "distal", label: "원위세뇨관", shortLabel: "DCT", transporters: ["NCC", "TRPV5", "NCX1"], note: "NaCl과 Ca2+를 선택적으로 회수하며 물에는 거의 불투과성입니다.", reabsorbed: { "Na+": 5, "K+": 0, "HCO3-": 0, "Ca2+": 8, "Mg2+": 10, H2O: 0 } },
  { id: "collecting", label: "집합관", shortLabel: "Collecting duct", transporters: ["ENaC", "ROMK", "AQP2", "H+-ATPase"], note: "ADH와 aldosterone이 최종 물·Na·K·산 배설을 조정합니다.", reabsorbed: { "Na+": 3, "K+": -12, "HCO3-": 5, "Ca2+": 0, "Mg2+": 0, H2O: 12 } },
];

export function calculateNephronState(raw: NephronInputs): NephronState {
  const inputs = {
    gfr: clamp(raw.gfr, 40, 160),
    adh: clamp(raw.adh, 0, 100),
    aldosterone: clamp(raw.aldosterone, 0, 100),
    loopBlock: clamp(raw.loopBlock, 0, 100),
    thiazideBlock: clamp(raw.thiazideBlock, 0, 100),
  };
  const loopFraction = 1 - inputs.loopBlock / 100;
  const thiazideFraction = 1 - inputs.thiazideBlock / 100;
  const aldosteroneScale = 0.45 + inputs.aldosterone / 100 * 0.9;
  const adhScale = inputs.adh / 50;
  const segments = BASE.map((segment) => {
    const reabsorbed = { ...segment.reabsorbed };
    if (segment.id === "thick-ascending") {
      reabsorbed["Na+"] *= loopFraction;
      reabsorbed["K+"] *= loopFraction;
      reabsorbed["Ca2+"] *= loopFraction;
      reabsorbed["Mg2+"] *= loopFraction;
    }
    if (segment.id === "distal") reabsorbed["Na+"] *= thiazideFraction;
    if (segment.id === "collecting") {
      reabsorbed["Na+"] *= aldosteroneScale;
      reabsorbed["K+"] *= aldosteroneScale;
      reabsorbed.H2O *= adhScale;
    }
    return { ...segment, reabsorbed };
  });
  const sodiumReabsorbed = segments.reduce((sum, segment) => sum + segment.reabsorbed["Na+"], 0);
  const waterReabsorbed = segments.reduce((sum, segment) => sum + segment.reabsorbed.H2O, 0);
  const sodiumExcretion = clamp(100 - sodiumReabsorbed, 0.2, 35) * inputs.gfr / 100;
  const urineVolume = clamp((100 - waterReabsorbed) * 0.09 * inputs.gfr / 100, 0.35, 12);
  const potassiumExcretion = clamp(10 + inputs.aldosterone * 0.22 + inputs.loopBlock * 0.12 + inputs.thiazideBlock * 0.08, 4, 55);
  const urineOsmolality = clamp(90 + inputs.adh * 10 - inputs.loopBlock * 4.2, 60, 1200);
  let pattern = "보존된 분절별 재흡수";
  if (inputs.loopBlock > 35) pattern = "TAL 염류 수송 차단 · 농축능 저하";
  else if (inputs.thiazideBlock > 35) pattern = "DCT NaCl 재흡수 감소";
  else if (inputs.adh < 20) pattern = "집합관 수분 투과성 저하";
  else if (inputs.aldosterone > 75) pattern = "원위부 Na 재흡수·K 분비 증가";
  return { inputs, segments, urineVolume, sodiumExcretion, potassiumExcretion, urineOsmolality, pattern };
}
