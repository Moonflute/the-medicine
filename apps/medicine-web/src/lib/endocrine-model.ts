export type EndocrineAxisId = "thyroid" | "adrenal" | "gonadal" | "growth" | "adh" | "pancreatic";
export type EndocrinePreset = "normal" | "primary-failure" | "primary-excess" | "pituitary-failure" | "exogenous";
export type EndocrineOrganId = "brain" | "thyroid" | "adrenal-kidney" | "liver" | "ovaries" | "pancreas" | "blood";
export type EndocrineStage = { id: string; order: number; organ: EndocrineOrganId; organLabel: string; hormone: string; value: number; unit: string; level: number; status: "low" | "normal" | "high"; role: string };
export type EndocrineEdge = { from: string; to: string; label: string; kind: "stimulate" | "inhibit"; strength: number };
export type EndocrineState = { axis: EndocrineAxisId; preset: EndocrinePreset; stimulus: number; feedback: number; exogenous: number; stages: EndocrineStage[]; edges: EndocrineEdge[]; pattern: string; explanation: string; effects: Array<{ label: string; value: number; unit: string }> };

type StageDefinition = Omit<EndocrineStage, "value" | "level" | "status"> & { normalValue: number };
type AxisDefinition = { title: string; stages: StageDefinition[]; forward: Array<[string, string, string]>; feedback: Array<[string, string, string]>; presetLabels: Record<EndocrinePreset, string> };

export const ENDOCRINE_AXES: Record<EndocrineAxisId, AxisDefinition> = {
  thyroid: { title: "갑상선 HPT 축", stages: [
    { id: "trh", order: 1, organ: "brain", organLabel: "Hypothalamus", hormone: "TRH", normalValue: 100, unit: "relative", role: "대사·체온 요구를 통합" },
    { id: "tsh", order: 2, organ: "brain", organLabel: "Anterior pituitary", hormone: "TSH", normalValue: 2.0, unit: "mIU/L", role: "갑상선 합성과 성장을 자극" },
    { id: "t4", order: 3, organ: "thyroid", organLabel: "Thyroid", hormone: "free T4", normalValue: 1.2, unit: "ng/dL", role: "조직 대사율을 조절" },
  ], forward: [["trh", "tsh", "TRH"], ["tsh", "t4", "TSH"]], feedback: [["t4", "trh", "T3/T4"], ["t4", "tsh", "T3/T4"]], presetLabels: { normal: "정상", "primary-failure": "일차 갑상선저하", "primary-excess": "일차 갑상선항진", "pituitary-failure": "뇌하수체 저하", exogenous: "외인성 T4" } },
  adrenal: { title: "부신 HPA 축", stages: [
    { id: "crh", order: 1, organ: "brain", organLabel: "Hypothalamus", hormone: "CRH", normalValue: 100, unit: "relative", role: "스트레스·일주기 신호" },
    { id: "acth", order: 2, organ: "brain", organLabel: "Anterior pituitary", hormone: "ACTH", normalValue: 30, unit: "pg/mL", role: "부신피질 cortisol 합성 자극" },
    { id: "cortisol", order: 3, organ: "adrenal-kidney", organLabel: "Adrenal cortex", hormone: "Cortisol", normalValue: 14, unit: "µg/dL", role: "대사·혈압·면역 반응 조절" },
  ], forward: [["crh", "acth", "CRH"], ["acth", "cortisol", "ACTH"]], feedback: [["cortisol", "crh", "Cortisol"], ["cortisol", "acth", "Cortisol"]], presetLabels: { normal: "정상", "primary-failure": "일차 부신저하", "primary-excess": "부신성 cortisol 과다", "pituitary-failure": "뇌하수체 ACTH 저하", exogenous: "외인성 steroid" } },
  gonadal: { title: "난소 HPG 축", stages: [
    { id: "gnrh", order: 1, organ: "brain", organLabel: "Hypothalamus", hormone: "GnRH pulse", normalValue: 1, unit: "/90 min", role: "맥동성 생식축 자극" },
    { id: "lhfsh", order: 2, organ: "brain", organLabel: "Anterior pituitary", hormone: "LH/FSH", normalValue: 6, unit: "IU/L", role: "난포 성장과 steroid 생성" },
    { id: "estradiol", order: 3, organ: "ovaries", organLabel: "Ovary", hormone: "Estradiol", normalValue: 100, unit: "pg/mL", role: "생식기관·골·피드백 조절" },
  ], forward: [["gnrh", "lhfsh", "GnRH"], ["lhfsh", "estradiol", "LH/FSH"]], feedback: [["estradiol", "gnrh", "Estradiol"], ["estradiol", "lhfsh", "Estradiol/Inhibin"]], presetLabels: { normal: "정상", "primary-failure": "일차 난소부전", "primary-excess": "난소 hormone 과다", "pituitary-failure": "저성선자극성 저하", exogenous: "외인성 estrogen" } },
  growth: { title: "GH–IGF-1 축", stages: [
    { id: "ghrh", order: 1, organ: "brain", organLabel: "Hypothalamus", hormone: "GHRH", normalValue: 100, unit: "relative", role: "수면·운동·영양 신호" },
    { id: "gh", order: 2, organ: "brain", organLabel: "Anterior pituitary", hormone: "GH", normalValue: 1.0, unit: "ng/mL", role: "간과 조직 성장 신호" },
    { id: "igf1", order: 3, organ: "liver", organLabel: "Liver", hormone: "IGF-1", normalValue: 180, unit: "ng/mL", role: "성장판·단백동화 반응" },
  ], forward: [["ghrh", "gh", "GHRH"], ["gh", "igf1", "GH"]], feedback: [["igf1", "ghrh", "IGF-1"], ["igf1", "gh", "IGF-1"]], presetLabels: { normal: "정상", "primary-failure": "간 IGF-1 저하", "primary-excess": "GH 과다 · Acromegaly", "pituitary-failure": "GH 결핍", exogenous: "외인성 GH" } },
  adh: { title: "삼투–ADH 축", stages: [
    { id: "osm", order: 1, organ: "blood", organLabel: "Plasma", hormone: "Osmolality", normalValue: 285, unit: "mOsm/kg", role: "시상하부 삼투수용체 자극" },
    { id: "adh", order: 2, organ: "brain", organLabel: "Hypothalamus · Posterior pituitary", hormone: "ADH", normalValue: 2, unit: "pg/mL", role: "집합관 V2 receptor 자극" },
    { id: "urine", order: 3, organ: "adrenal-kidney", organLabel: "Collecting duct", hormone: "Urine Osm", normalValue: 500, unit: "mOsm/kg", role: "AQP2를 통한 수분 보존" },
  ], forward: [["osm", "adh", "Osmotic stimulus"], ["adh", "urine", "ADH"]], feedback: [["urine", "osm", "Water retention"]], presetLabels: { normal: "정상", "primary-failure": "중추성 DI", "primary-excess": "SIADH", "pituitary-failure": "Nephrogenic DI", exogenous: "Desmopressin" } },
  pancreatic: { title: "Glucose–Insulin 축", stages: [
    { id: "glucose", order: 1, organ: "blood", organLabel: "Plasma", hormone: "Glucose", normalValue: 90, unit: "mg/dL", role: "β-cell glucose sensing" },
    { id: "insulin", order: 2, organ: "pancreas", organLabel: "Pancreatic β-cell", hormone: "Insulin", normalValue: 8, unit: "µIU/mL", role: "간·근육·지방의 저장 신호" },
    { id: "uptake", order: 3, organ: "liver", organLabel: "Liver · Peripheral tissues", hormone: "Glucose uptake", normalValue: 100, unit: "relative", role: "혈당을 기준점으로 회복" },
  ], forward: [["glucose", "insulin", "Glucose"], ["insulin", "uptake", "Insulin"]], feedback: [["uptake", "glucose", "Glucose disposal"]], presetLabels: { normal: "공복 정상", "primary-failure": "Insulin 결핍", "primary-excess": "Insulin 과다", "pituitary-failure": "Insulin 저항성", exogenous: "외인성 insulin" } },
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
function statusFor(level: number): EndocrineStage["status"] { return level < 99 ? "low" : level > 101 ? "high" : "normal"; }

/** Directional steady-state feedback, not an endocrine diagnostic calculator.
 * Exogenous exposure is a separate input; 0 means no administered agent.
 * Numerical anchors and limitations are documented in source_notes/05 Physiology/Interactive.
 */
export function calculateEndocrineState(axis: EndocrineAxisId, preset: EndocrinePreset, stimulus = 100, feedback = 100, exogenous = 0): EndocrineState {
  stimulus = clamp(stimulus, 30, 170); feedback = clamp(feedback, 30, 170); exogenous = clamp(exogenous, 0, 180);
  const drive = stimulus / 100, gain = feedback / 100, external = preset === "exogenous" || axis === "adh" ? exogenous / 100 : 0;
  let first = 1, second = 1, third = 1;
  const effects: EndocrineState["effects"] = [];
  if (axis === "adh") {
    const secretion = preset === "primary-failure" ? .12 : 1;
    const kidneyResponse = preset === "pituitary-failure" ? .12 : 1;
    const autonomous = preset === "primary-excess" ? 1.2 : 0;
    // Solve osmotic drive ↔ water conservation; endogenous ADH is distinct from Desmopressin.
    first = drive;
    for (let n = 0; n < 100; n++) {
      second = secretion * Math.exp(clamp((first - 1) * 5 * gain, -3, 2)) + autonomous;
      third = clamp((second + external) * kidneyResponse, .12, 2.2);
      first = .65 * first + .35 * clamp(1 + .18 * (drive - 1) + .08 * gain * (1 - third), .85, 1.2);
    }
    effects.push({label: "Desmopressin 입력", value: external * 100, unit: "%"});
  } else if (axis === "pancreatic") {
    const beta = preset === "primary-failure" ? .12 : 1;
    const sensitivity = (preset === "pituitary-failure" ? .3 : 1) * gain;
    const autonomous = preset === "primary-excess" ? 1.4 : 0;
    first = drive;
    for (let n = 0; n < 100; n++) {
      second = beta * Math.max(.05, 1 + 2.5 * (first - 1)) + autonomous;
      third = Math.max(.05, (second + external) * sensitivity);
      first = .7 * first + .3 * clamp(1 + .65 * (drive - 1) + .55 * (1 - third), .35, 2.5);
    }
    effects.push({label: "외인성 Insulin 입력", value: external * 100, unit: "%"});
  } else {
    const target = preset === "primary-failure" ? .15 : 1;
    const pituitary = preset === "pituitary-failure" ? .15 : 1;
    const autonomousTarget = preset === "primary-excess" && axis !== "growth" ? 1.5 : 0;
    const autonomousPituitary = preset === "primary-excess" && axis === "growth" ? 2 : 0;
    let action = 1;
    for (let n = 0; n < 150; n++) {
      const inhibition = Math.exp(clamp(-gain * (action - 1), -4, 2));
      first = drive * inhibition;
      second = first * pituitary + autonomousPituitary;
      // Administered GH acts at stage 2; thyroid/ovarian agents act at stage 3.
      third = target * (second + (axis === "growth" ? external : 0)) + autonomousTarget;
      const nextAction = third + (axis === "growth" ? 0 : external);
      action = .8 * action + .2 * nextAction;
    }
    if (axis === "adrenal") {
      effects.push({label: "Glucocorticoid 총 작용", value: (third + external) * 100, unit: "%"});
      effects.push({label: "외인성 Glucocorticoid 입력", value: external * 100, unit: "%"});
    } else if (axis !== "growth") third += external;
    if (axis === "growth") effects.push({label: "GH 총 노출 · 내인성 + 외인성", value: (second + external) * 100, unit: "%"});
  }
  const definition = ENDOCRINE_AXES[axis], factors = [first, second, third];
  const stages = definition.stages.map((stage, index) => {
    const level = factors[index] * 100;
    return {...stage, hormone: axis === "adrenal" && index === 2 ? "Cortisol · 내인성" : external > 0 && index === 1 && ["growth","pancreatic","adh"].includes(axis) ? stage.hormone + " · 내인성" : stage.hormone, value: stage.normalValue * factors[index], level, status: statusFor(level)};
  });
  const byId = new Map(stages.map(stage => [stage.id, stage]));
  const edges: EndocrineEdge[] = [
    ...definition.forward.map(([from,to,label])=>({from,to,label,kind:"stimulate" as const,strength:byId.get(from)?.level ?? 100})),
    ...definition.feedback.map(([from,to,label])=>({from,to,label,kind:"inhibit" as const,strength:((byId.get(from)?.level ?? 100)+(axis==="adrenal"?external*100:0))*gain})),
  ];
  const explanation = axis === "adh" ? "Plasma osmolality → 내인성 ADH → Collecting duct 반응을 연결합니다. Central DI는 분비 부족, Nephrogenic DI는 반응 저하입니다. Desmopressin은 내인성 ADH 수치가 아니라 V2 작용에 더해집니다."
    : axis === "pancreatic" ? "Glucose 부하 → β-cell의 내인성 Insulin → 말초 반응을 연결합니다. Insulin sensitivity와 외인성 Insulin을 따로 계산하므로 혈중 Insulin과 작용은 동일하지 않습니다."
    : axis === "adrenal" ? "CRH·ACTH가 내인성 Cortisol 생산을 조절합니다. 외인성 Glucocorticoid는 총 작용을 늘리지만 내인성 축을 억제할 수 있으며, 투여 약제의 검사 교차반응은 계산하지 않습니다."
    : axis === "growth" ? "내인성 GH, 외인성 GH, IGF-1 반응을 구분합니다. 이 값은 평균 방향성을 표현하며 pulsatility와 실제 GH 검사 판정은 재현하지 않습니다."
    : axis === "gonadal" ? "기본 도해는 negative feedback 상태입니다. 배란 직전 Estradiol의 positive feedback, LH surge와 월경주기별 기준범위는 별도 이론에서 구분합니다."
    : "TRH·TSH·free T4가 연결된 negative feedback 평형입니다. TSH의 실제 log-linear 관계와 검사실 진단 기준을 재현하는 모델은 아닙니다.";
  return {axis,preset,stimulus,feedback,exogenous,stages,edges,effects,pattern:definition.presetLabels[preset],explanation};
}
