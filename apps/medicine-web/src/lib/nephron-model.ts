export type NephronInputs = {
  gfr: number;
  adh: number;
  aldosterone: number;
  loopBlock: number;
  thiazideBlock: number;
  enacBlock: number;
  carbonicAnhydraseBlock: number;
  rasBlock: number;
  mrBlock: number;
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
    id: "glomerulus", label: "Glomerulus", shortLabel: "Glomerulus", region: "cortex", permeability: "크기·전하 선택성 여과", note: "혈장 수분과 작은 용질이 Bowman 공간으로 함께 여과됩니다.", baseHandling: {},
    routes: SOLUTES.map((solute) => ({ id: `filter-${solute}`, solute, direction: "filter", path: "filtration", detail: "사구체 모세혈관에서 Bowman 공간으로 여과" })),
  },
  {
    id: "proximal", label: "Proximal tubule", shortLabel: "PCT", region: "cortex", permeability: "높은 물·용질 투과성", note: "등장성 대량 재흡수와 여과 HCO3- 회수가 일어납니다.",
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
    id: "descending", label: "Thin descending limb", shortLabel: "Thin descending", region: "inner-medulla", permeability: "물 투과성 높음 · 염류 낮음", note: "고삼투성 수질 간질로 물이 빠져나가 관강액이 농축됩니다.", baseHandling: { H2O: 15 },
    routes: [{ id: "desc-water", solute: "H2O", direction: "reabsorb", path: "water-channel", apical: "AQP1", basolateral: "AQP1", detail: "수질 삼투기울기를 따라 물이 간질·vasa recta로 이동" }],
  },
  {
    id: "thin-ascending", label: "Thin ascending limb", shortLabel: "Thin ascending", region: "inner-medulla", permeability: "물 불투과 · 수동 NaCl 이동", note: "물은 남고 NaCl이 수동적으로 빠져나가 희석이 시작됩니다.", baseHandling: { "Na+": 2, "Cl-": 2 },
    routes: [
      { id: "thin-na", solute: "Na+", direction: "reabsorb", path: "paracellular", detail: "농축된 관강액에서 수질 간질로 수동 이동" },
      { id: "thin-cl", solute: "Cl-", direction: "reabsorb", path: "transcellular", apical: "ClC-K1", basolateral: "ClC-K1", detail: "수동 Cl- 투과가 NaCl 회수를 돕음" },
    ],
  },
  {
    id: "thick-ascending", label: "Thick ascending limb", shortLabel: "TAL", region: "outer-medulla", permeability: "물 불투과 · 능동 염류 수송", note: "NKCC2가 Na-K-2Cl을 회수하고 ROMK 재순환이 양성 관강전위를 만듭니다.", baseHandling: { "Na+": 23, "K+": 25, "Cl-": 23, "HCO3-": 10, "Ca2+": 25, "Mg2+": 70 },
    routes: [
      { id: "tal-na", solute: "Na+", direction: "reabsorb", path: "transcellular", apical: "NKCC2", basolateral: "Na+/K+-ATPase", coupled: "K+ · 2Cl-", detail: "loop 이뇨제의 주 표적" },
      { id: "tal-k", solute: "K+", direction: "reabsorb", path: "paracellular", coupled: "lumen-positive voltage", detail: "ROMK 재순환으로 형성된 lumen-positive voltage가 K+의 paracellular 회수를 돕습니다. Na+/K+-ATPase는 K+를 혈측에서 세포 안으로 운반합니다." },
      { id: "tal-k-recycle", solute: "K+", direction: "recycle", path: "transcellular", apical: "ROMK", detail: "K+를 관강으로 되돌려 NKCC2와 양성 관강전위를 유지" },
      { id: "tal-cl", solute: "Cl-", direction: "reabsorb", path: "transcellular", apical: "NKCC2", basolateral: "ClC-Kb", coupled: "Na+ · K+", detail: "NKCC2로 유입 후 basolateral ClC-Kb로 유출" },
      { id: "tal-ca", solute: "Ca2+", direction: "reabsorb", path: "paracellular", coupled: "lumen-positive voltage", detail: "ROMK가 만든 양성 관강전위에 의해 세포 사이 이동" },
      { id: "tal-mg", solute: "Mg2+", direction: "reabsorb", path: "paracellular", coupled: "claudin-16/19", detail: "Mg2+ 재흡수의 주 분절" },
      { id: "tal-hco3", solute: "HCO3-", direction: "reabsorb", path: "transcellular", apical: "NHE3", basolateral: "AE2/NBC", detail: "남은 HCO3- 일부 회수" },
    ],
  },
  {
    id: "distal", label: "Distal convoluted tubule", shortLabel: "DCT", region: "cortex", permeability: "물 불투과 · 선택적 NaCl/Ca/Mg", note: "NCC가 NaCl을 회수하고 TRPV5와 TRPM6가 Ca2+·Mg2+를 선택적으로 조절합니다.", baseHandling: { "Na+": 5, "Cl-": 5, "Ca2+": 8, "Mg2+": 10 },
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

/** Separate upstream aldosterone suppression, MR antagonism, and direct ENaC block.
 * Coefficients describe teaching responses, not drug doses or pharmacokinetics.
 * GFR is an independent input: RAS blockade does not imply fixed renal damage.
 */
export function nephronRegulation(inputs: NephronInputs) {
  const aldosteroneSignal = inputs.aldosterone * (1 - inputs.rasBlock / 100 * .8);
  const receptorSignal = aldosteroneSignal * (1 - inputs.mrBlock / 100 * .9);
  return { aldosteroneSignal, receptorSignal, enacAvailable: 100 - inputs.enacBlock };
}

function segmentModifier(id: NephronSegmentId, solute: NephronSolute, inputs: NephronInputs) {
  const aldosterone = nephronRegulation(inputs).receptorSignal;
  if (id === "proximal" && (solute === "HCO3-" || solute === "Na+")) return 1 - inputs.carbonicAnhydraseBlock / 100 * (solute === "HCO3-" ? 0.82 : 0.12);
  if (id === "thick-ascending" && solute !== "H2O") return 1 - inputs.loopBlock / 100 * 0.94;
  if (id === "distal" && (solute === "Na+" || solute === "Cl-")) return 1 - inputs.thiazideBlock / 100 * 0.92;
  if (id === "distal" && solute === "Ca2+") return 1 + inputs.thiazideBlock / 100 * 0.35;
  if (id === "distal" && solute === "Mg2+") return 1 - inputs.thiazideBlock / 100 * 0.35;
  if (id === "collecting" && solute === "Na+") return (0.45 + aldosterone / 100 * 0.9) * (1 - inputs.enacBlock / 100 * 0.95);
  if (id === "collecting" && solute === "K+") {
    const distalFlow = 1 + (inputs.loopBlock + inputs.thiazideBlock) / 250;
    return (0.35 + aldosterone / 100 * 1.15) * distalFlow * (1 - inputs.enacBlock / 100 * 0.85);
  }
  if (id === "descending" && solute === "H2O") return 1 - inputs.loopBlock / 100 * 0.5;
  if (id === "proximal" && solute === "H2O") return 1 - inputs.carbonicAnhydraseBlock / 100 * 0.1;
  return 1;
}

export function calculateNephronState(raw: Omit<NephronInputs, "rasBlock" | "mrBlock"> & Partial<Pick<NephronInputs, "rasBlock" | "mrBlock">>): NephronState {
  const inputs: NephronInputs = {
    gfr: clamp(raw.gfr, 15, 160), adh: clamp(raw.adh, 0, 100), aldosterone: clamp(raw.aldosterone, 0, 100),
    loopBlock: clamp(raw.loopBlock, 0, 100), thiazideBlock: clamp(raw.thiazideBlock, 0, 100),
    enacBlock: clamp(raw.enacBlock, 0, 100), carbonicAnhydraseBlock: clamp(raw.carbonicAnhydraseBlock, 0, 100),
    rasBlock: clamp(raw.rasBlock ?? 0, 0, 100), mrBlock: clamp(raw.mrBlock ?? 0, 0, 100),
  };
  const remaining = Object.fromEntries(SOLUTES.map((solute) => [solute, 100])) as Record<NephronSolute, number>;
  const segments = DEFINITIONS.map((definition) => {
    const delivered = { ...remaining }; const handled = emptySolutes(); const activity = emptySolutes();
    for (const solute of SOLUTES) {
      const base = definition.baseHandling[solute] ?? 0; const modifier = segmentModifier(definition.id, solute, inputs);
      let requested = base * modifier;
      if (definition.id === "distal" && solute === "Ca2+") {
        // Leave a small residual calcium load for downstream handling instead of
        // allowing a thiazide response to imply literal zero calcium excretion.
        requested = Math.min(requested, Math.max(0, delivered[solute] - 1.3));
      }
      if (definition.id === "collecting" && solute === "K+") {
        // Distal sodium delivery supports ENaC-dependent secretion. A bounded,
        // qualitative response, not an estimate of serum potassium or CKD adaptation.
        requested *= clamp(Math.pow(delivered["Na+"] / 5, .2), .4, 1.6);
      }
      if (definition.id === "collecting" && solute === "H2O") {
        const gradient = 1 - inputs.loopBlock / 100 * 0.65;
        const osmoticRetention = Math.min(.12, Math.max(0, remaining["Na+"] - 1.4) * .002 + Math.max(0, remaining["HCO3-"] - 3) * .0005);
        const unrecoveredFraction = .45 * Math.exp(-inputs.adh / 22.756) / gradient + osmoticRetention;
        const fraction = 1 - unrecoveredFraction;
        requested = delivered.H2O * clamp(fraction, 0, 0.985);
      }
      // Every number is a percentage of the original filtered load, not of the previous segment.
      handled[solute] = requested >= 0 ? Math.min(delivered[solute], requested) : requested;
      activity[solute] = base === 0 ? 0 : clamp(Math.abs(handled[solute] / base) * 100, 0, 180);
      remaining[solute] = delivered[solute] - handled[solute];
    }
    return { ...definition, delivered, handled, remaining: { ...remaining }, activity };
  });
  const excreted = { ...remaining }; const filteredWaterLiters = 180 * inputs.gfr / 100;
  const urineVolume = filteredWaterLiters * excreted.H2O / 100; const sodiumExcretion = excreted["Na+"]; const potassiumExcretion = excreted["K+"];
  // Illustrative osmole load; this is not a prediction of a patient's urine chemistry.
  const osmoleLoad = 600 * inputs.gfr / 100 + Math.max(0, sodiumExcretion - 1.4) * 25 + Math.max(0, excreted["HCO3-"] - 3) * 10;
  const urineOsmolality = osmoleLoad / Math.max(0.01, urineVolume);
  let pattern = "정상 분절별 수송과 최종 미세조정";
  if (inputs.loopBlock > 35) pattern = "NKCC2 억제 · NaCl/Ca/Mg 회수와 수질 농축기울기 감소";
  else if (inputs.thiazideBlock > 35) pattern = "NCC 억제 · NaCl 배설 증가와 Ca2+ 회수 증가";
  else if (inputs.enacBlock > 35) pattern = "ENaC 억제 · Na+ 회수와 K+ 분비 감소";
  else if (inputs.rasBlock > 35 && inputs.mrBlock > 35) pattern = "RAS·MR 동시 억제 · 알도스테론 신호와 K+ 분비 감소";
  else if (inputs.mrBlock > 35) pattern = "MR 억제 · 알도스테론 수용체 작용 감소";
  else if (inputs.rasBlock > 35) pattern = "RAS 억제 · 알도스테론 유래 신호 감소";
  else if (inputs.carbonicAnhydraseBlock > 35) pattern = "근위 HCO3- 회수 억제 · bicarbonaturia";
  else if (inputs.adh < 20) pattern = "AQP2 활성 저하 · 묽은 다뇨";
  else if (inputs.aldosterone > 75) pattern = "ENaC 활성과 원위 K+ 분비 증가";
  return { inputs, segments, excreted, urineVolume, sodiumExcretion, potassiumExcretion, urineOsmolality, pattern };
}

export function getNephronSegment(state: NephronState, id: NephronSegmentId) {
  return state.segments.find((segment) => segment.id === id) ?? state.segments[0];
}

export const NORMAL_NEPHRON: NephronInputs = { gfr: 100, adh: 50, aldosterone: 50, loopBlock: 0, thiazideBlock: 0, enacBlock: 0, carbonicAnhydraseBlock: 0, rasBlock: 0, mrBlock: 0 };
const normalExcretion = calculateNephronState(NORMAL_NEPHRON).excreted;

/** Relative total excretion includes filtration; FE alone cannot show low GFR.
 * Plasma concentration is held fixed for this comparison. No serum level is inferred.
 */
export function nephronExcretionIndex(state: NephronState, solute: NephronSolute) {
  return state.excreted[solute] * state.inputs.gfr / Math.max(.01, normalExcretion[solute]);
}

export function nephronClinicalConnections(state: NephronState) {
  const i = state.inputs;
  const connections: Array<{ title: string; mechanism: string }> = [];
  if (i.gfr < 50) connections.push({ title: "배설 여력 감소", mechanism: "같은 분획 배설률이라도 GFR이 낮으면 총 배설량은 감소합니다. 장기 적응·섭취량은 별도로 고려합니다." });
  if (i.loopBlock > 35) connections.push({ title: "K⁺·Mg²⁺ 소실 / 알칼리증 연결", mechanism: "NKCC2 차단 → 원위 Na 전달 증가, Ca·Mg 회수와 수질 농축기울기 감소. 염소·체액 소실은 알칼리증을 유지할 수 있습니다." });
  if (i.thiazideBlock > 35) connections.push({ title: "K⁺·Mg²⁺ 소실 / 소변 Ca²⁺ 감소", mechanism: "NCC 차단으로 NaCl 배설은 늘지만 Ca 회수는 증가합니다. 혈중 Na는 ADH·섭취·수분 균형을 함께 봐야 합니다." });
  if (i.enacBlock > 35) connections.push({ title: "K⁺ 보존 · 신기능 저하에서 축적 주의", mechanism: "ENaC 차단 → 관강 음전위와 K 분비 감소. 신기능 저하와 겹칠 때 배설 여력이 더 낮아집니다." });
  if (i.rasBlock > 35) connections.push({ title: "RAS 억제 · 알도스테론 신호 감소", mechanism: "ACEi/ARB의 알도스테론 경로를 단순화했습니다. K 분비를 지지하는 신호가 줄지만, 약물의 신장·심장 보호 효과나 GFR 변화를 이 모델에서 판정하지 않습니다." });
  if (i.mrBlock > 35) connections.push({ title: "MR 차단 · 수용체 이후 작용 감소", mechanism: "Spironolactone 등의 MR 차단은 ENaC를 직접 막는 작용과 다릅니다. RAS 억제·신기능 저하와 함께 K 배설 여력을 비교합니다. 실제 알도스테론 농도와 피드백 상승은 계산하지 않습니다." });
  if (i.carbonicAnhydraseBlock > 35) connections.push({ title: "HCO₃⁻ 소실 · 대사성 산증 연결", mechanism: "근위 HCO₃⁻ 회수 억제 → bicarbonaturia. 혈중 HCO₃⁻ 감소의 크기는 체내 완충·적응에 따라 달라집니다." });
  if (i.adh > 80) connections.push({ title: "물 보존 · Na 농도는 수분 수지와 함께", mechanism: "ADH는 집합관 물 재흡수를 증가시킵니다. 소변 농축만으로 저나트륨혈증을 진단하지 않습니다." });
  if (i.adh < 20) connections.push({ title: "농축 저하 · 수분 소실", mechanism: "AQP2 작용 감소로 묽은 소변이 늘어납니다. 혈중 Na 변화는 물 섭취와 소실의 균형에 달려 있습니다." });
  if (!connections.length) connections.push({ title: "작용 부위 → 배설 → 임상 연결", mechanism: "약물 차단과 GFR을 따로 조절하고, 분획 배설률과 총 배설 지수의 차이를 비교하세요." });
  return connections;
}

export type NephronExperiment = {
  id: string; label: string; question: string; solute: NephronSolute; segment: NephronSegmentId;
  values: NephronInputs; actions: { id: string; label: string; values: Partial<NephronInputs> }[];
};
export const NEPHRON_EXPERIMENTS: NephronExperiment[] = [
  { id: "case-loop-combination", label: "개입 · Loop에 Thiazide 추가", question: "이뇨를 더 강화하면 K⁺·Mg²⁺ 배설은 어떻게 바뀔까?", solute: "K+", segment: "collecting",
    values: { ...NORMAL_NEPHRON, loopBlock: 75, aldosterone: 72 }, actions: [
      { id: "baseline", label: "Loop 단독", values: {} },
      { id: "add-thiazide", label: "Thiazide 추가", values: { thiazideBlock: 75 } },
    ] },
  { id: "case-ckd-potassium", label: "개입 · 신기능 저하와 K⁺ 보존", question: "같은 GFR에서 작용 경로가 다른 약물을 겹치면 K⁺ 배설 여력은?", solute: "K+", segment: "collecting",
    values: { ...NORMAL_NEPHRON, gfr: 25 }, actions: [
      { id: "baseline", label: "차단 없음", values: {} },
      { id: "mr", label: "MR 차단", values: { mrBlock: 80 } },
      { id: "ras-mr", label: "MR + RAS 차단", values: { mrBlock: 80, rasBlock: 80 } },
      { id: "enac", label: "ENaC 차단", values: { enacBlock: 80 } },
    ] },
  { id: "case-bicarbonate-loss", label: "개입 · CA 억제와 HCO₃⁻ 소실", question: "근위부 HCO₃⁻ 회수가 줄어들면 하류의 회수만으로 보충될까?", solute: "HCO3-", segment: "proximal",
    values: { ...NORMAL_NEPHRON }, actions: [
      { id: "baseline", label: "차단 없음", values: {} },
      { id: "ca", label: "CA 억제", values: { carbonicAnhydraseBlock: 80 } },
    ] },
];

/** Each intervention starts from the same case, so cycling options cannot stack stale drugs. */
export function nephronExperimentInputs(experiment: NephronExperiment, actionId: string): NephronInputs {
  const action = experiment.actions.find(item => item.id === actionId);
  return { ...experiment.values, ...action?.values };
}
