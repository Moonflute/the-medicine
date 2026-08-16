export type EndocrineAxisId = "thyroid" | "adrenal" | "gonadal" | "growth" | "adh" | "pancreatic";
export type EndocrinePreset = "normal" | "primary-failure" | "primary-excess" | "pituitary-failure" | "exogenous";
export type EndocrineOrganId = "brain" | "thyroid" | "adrenal-kidney" | "liver" | "ovaries" | "pancreas" | "blood";
export type EndocrineStage = { id: string; order: number; organ: EndocrineOrganId; organLabel: string; hormone: string; value: number; unit: string; level: number; status: "low" | "normal" | "high"; role: string };
export type EndocrineEdge = { from: string; to: string; label: string; kind: "stimulate" | "inhibit"; strength: number };
export type EndocrineState = { axis: EndocrineAxisId; preset: EndocrinePreset; stimulus: number; feedback: number; exogenous: number; stages: EndocrineStage[]; edges: EndocrineEdge[]; pattern: string; explanation: string };

type StageDefinition = Omit<EndocrineStage, "value" | "level" | "status"> & { normalValue: number };
type AxisDefinition = { title: string; stages: StageDefinition[]; forward: Array<[string, string, string]>; feedback: Array<[string, string, string]>; presetLabels: Record<EndocrinePreset, string> };

export const ENDOCRINE_AXES: Record<EndocrineAxisId, AxisDefinition> = {
  thyroid: { title: "갑상선 HPT 축", stages: [
    { id: "trh", order: 1, organ: "brain", organLabel: "시상하부", hormone: "TRH", normalValue: 100, unit: "relative", role: "대사·체온 요구를 통합" },
    { id: "tsh", order: 2, organ: "brain", organLabel: "뇌하수체 전엽", hormone: "TSH", normalValue: 2.0, unit: "mIU/L", role: "갑상선 합성과 성장을 자극" },
    { id: "t4", order: 3, organ: "thyroid", organLabel: "갑상선", hormone: "free T4", normalValue: 1.2, unit: "ng/dL", role: "조직 대사율을 조절" },
  ], forward: [["trh", "tsh", "TRH"], ["tsh", "t4", "TSH"]], feedback: [["t4", "trh", "T3/T4"], ["t4", "tsh", "T3/T4"]], presetLabels: { normal: "정상", "primary-failure": "일차 갑상선저하", "primary-excess": "일차 갑상선항진", "pituitary-failure": "뇌하수체 저하", exogenous: "외인성 T4" } },
  adrenal: { title: "부신 HPA 축", stages: [
    { id: "crh", order: 1, organ: "brain", organLabel: "시상하부", hormone: "CRH", normalValue: 100, unit: "relative", role: "스트레스·일주기 신호" },
    { id: "acth", order: 2, organ: "brain", organLabel: "뇌하수체 전엽", hormone: "ACTH", normalValue: 30, unit: "pg/mL", role: "부신피질 cortisol 합성 자극" },
    { id: "cortisol", order: 3, organ: "adrenal-kidney", organLabel: "부신피질", hormone: "Cortisol", normalValue: 14, unit: "µg/dL", role: "대사·혈압·면역 반응 조절" },
  ], forward: [["crh", "acth", "CRH"], ["acth", "cortisol", "ACTH"]], feedback: [["cortisol", "crh", "Cortisol"], ["cortisol", "acth", "Cortisol"]], presetLabels: { normal: "정상", "primary-failure": "일차 부신저하", "primary-excess": "부신성 cortisol 과다", "pituitary-failure": "뇌하수체 ACTH 저하", exogenous: "외인성 steroid" } },
  gonadal: { title: "난소 HPG 축", stages: [
    { id: "gnrh", order: 1, organ: "brain", organLabel: "시상하부", hormone: "GnRH pulse", normalValue: 1, unit: "/90 min", role: "맥동성 생식축 자극" },
    { id: "lhfsh", order: 2, organ: "brain", organLabel: "뇌하수체 전엽", hormone: "LH/FSH", normalValue: 6, unit: "IU/L", role: "난포 성장과 steroid 생성" },
    { id: "estradiol", order: 3, organ: "ovaries", organLabel: "난소", hormone: "Estradiol", normalValue: 100, unit: "pg/mL", role: "생식기관·골·피드백 조절" },
  ], forward: [["gnrh", "lhfsh", "GnRH"], ["lhfsh", "estradiol", "LH/FSH"]], feedback: [["estradiol", "gnrh", "Estradiol"], ["estradiol", "lhfsh", "Estradiol/Inhibin"]], presetLabels: { normal: "정상", "primary-failure": "일차 난소부전", "primary-excess": "난소 hormone 과다", "pituitary-failure": "저성선자극성 저하", exogenous: "외인성 estrogen" } },
  growth: { title: "GH–IGF-1 축", stages: [
    { id: "ghrh", order: 1, organ: "brain", organLabel: "시상하부", hormone: "GHRH", normalValue: 100, unit: "relative", role: "수면·운동·영양 신호" },
    { id: "gh", order: 2, organ: "brain", organLabel: "뇌하수체 전엽", hormone: "GH", normalValue: 1.0, unit: "ng/mL", role: "간과 조직 성장 신호" },
    { id: "igf1", order: 3, organ: "liver", organLabel: "간", hormone: "IGF-1", normalValue: 180, unit: "ng/mL", role: "성장판·단백동화 반응" },
  ], forward: [["ghrh", "gh", "GHRH"], ["gh", "igf1", "GH"]], feedback: [["igf1", "ghrh", "IGF-1"], ["igf1", "gh", "IGF-1"]], presetLabels: { normal: "정상", "primary-failure": "간 IGF-1 저하", "primary-excess": "IGF-1 과다", "pituitary-failure": "GH 결핍", exogenous: "외인성 GH" } },
  adh: { title: "삼투–ADH 축", stages: [
    { id: "osm", order: 1, organ: "blood", organLabel: "혈장", hormone: "Osmolality", normalValue: 285, unit: "mOsm/kg", role: "시상하부 삼투수용체 자극" },
    { id: "adh", order: 2, organ: "brain", organLabel: "시상하부·후엽", hormone: "ADH", normalValue: 2, unit: "pg/mL", role: "집합관 V2 receptor 자극" },
    { id: "urine", order: 3, organ: "adrenal-kidney", organLabel: "신장 집합관", hormone: "Urine Osm", normalValue: 500, unit: "mOsm/kg", role: "AQP2를 통한 수분 보존" },
  ], forward: [["osm", "adh", "Osmotic stimulus"], ["adh", "urine", "ADH"]], feedback: [["urine", "osm", "Water retention"]], presetLabels: { normal: "정상", "primary-failure": "중추성 DI", "primary-excess": "SIADH", "pituitary-failure": "후엽 ADH 저하", exogenous: "Desmopressin" } },
  pancreatic: { title: "Glucose–Insulin 축", stages: [
    { id: "glucose", order: 1, organ: "blood", organLabel: "혈장", hormone: "Glucose", normalValue: 90, unit: "mg/dL", role: "β-cell glucose sensing" },
    { id: "insulin", order: 2, organ: "pancreas", organLabel: "췌장 β-cell", hormone: "Insulin", normalValue: 8, unit: "µIU/mL", role: "간·근육·지방의 저장 신호" },
    { id: "uptake", order: 3, organ: "liver", organLabel: "간·말초조직", hormone: "Glucose uptake", normalValue: 100, unit: "relative", role: "혈당을 기준점으로 회복" },
  ], forward: [["glucose", "insulin", "Glucose"], ["insulin", "uptake", "Insulin"]], feedback: [["uptake", "glucose", "Glucose disposal"]], presetLabels: { normal: "공복 정상", "primary-failure": "Insulin 결핍", "primary-excess": "Insulin 과다", "pituitary-failure": "Insulin 저항성", exogenous: "외인성 insulin" } },
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
function statusFor(level: number): EndocrineStage["status"] { return level < 85 ? "low" : level > 115 ? "high" : "normal"; }

function genericLevels(preset: EndocrinePreset, stimulus: number, feedback: number, exogenous: number) {
  const drive = stimulus / 100; const feedbackGain = clamp(feedback / 100, 0.3, 1.7); let first = drive; let second = drive; let third = drive;
  if (preset === "primary-failure") { third = 0.25; second = 1.65; first = 1.6; }
  if (preset === "primary-excess") { third = 1.7; second = 0.28; first = 0.32; }
  if (preset === "pituitary-failure") { first = 1.5; second = 0.25; third = 0.3; }
  if (preset === "exogenous") { first = 0.2; second = 0.2; third = Math.max(1.35, exogenous / 100); }
  first /= feedbackGain; second = preset === "normal" ? second / Math.sqrt(feedbackGain) : second;
  return [first, second, third].map((level) => clamp(level, 0.05, 1.9));
}

function specialLevels(axis: EndocrineAxisId, preset: EndocrinePreset, stimulus: number, exogenous: number) {
  if (axis === "adh") {
    const osmDrive = 0.75 + stimulus / 400;
    if (preset === "primary-failure" || preset === "pituitary-failure") return [1.22, 0.2, 0.18];
    if (preset === "primary-excess") return [0.92, 1.75, 1.65];
    if (preset === "exogenous") return [0.94, 1.5, Math.max(1.35, exogenous / 100)];
    return [osmDrive, osmDrive, osmDrive];
  }
  if (axis === "pancreatic") {
    const glucoseLoad = 0.65 + stimulus / 285;
    if (preset === "primary-failure") return [1.8, 0.18, 0.28];
    if (preset === "primary-excess") return [0.55, 1.8, 1.55];
    if (preset === "pituitary-failure") return [1.55, 1.65, 0.55];
    if (preset === "exogenous") return [0.72, Math.max(1.35, exogenous / 100), 1.45];
    return [glucoseLoad, glucoseLoad, glucoseLoad];
  }
  return null;
}

export function calculateEndocrineState(axis: EndocrineAxisId, preset: EndocrinePreset, stimulus = 100, feedback = 100, exogenous = 0): EndocrineState {
  const definition = ENDOCRINE_AXES[axis]; const factors = specialLevels(axis, preset, stimulus, exogenous) ?? genericLevels(preset, stimulus, feedback, exogenous);
  const stages = definition.stages.map((stage, index) => { const level = factors[index] * 100; return { ...stage, value: stage.normalValue * factors[index], level, status: statusFor(level) }; });
  const byId = new Map(stages.map((stage) => [stage.id, stage]));
  const edges: EndocrineEdge[] = [
    ...definition.forward.map(([from, to, label]) => ({ from, to, label, kind: "stimulate" as const, strength: Math.min(byId.get(from)?.level ?? 100, byId.get(to)?.level ?? 100) })),
    ...definition.feedback.map(([from, to, label]) => ({ from, to, label, kind: "inhibit" as const, strength: (byId.get(from)?.level ?? 100) * feedback / 100 })),
  ];
  let pattern = "정상 다단계 피드백"; let explanation = "상위 자극이 중간 호르몬을 거쳐 표적기관 반응을 만들고, 최종 산물이 상위 단계를 억제해 기준점을 유지합니다.";
  if (preset === "primary-failure") { pattern = definition.presetLabels[preset]; explanation = "표적기관 반응이 감소해 최종 산물이 낮고, 음성 피드백이 풀려 상위 호르몬이 상승합니다."; }
  if (preset === "primary-excess") { pattern = definition.presetLabels[preset]; explanation = "표적기관의 과도한 최종 산물이 시상하부·뇌하수체 또는 입력 자극을 억제합니다."; }
  if (preset === "pituitary-failure") { pattern = definition.presetLabels[preset]; explanation = axis === "pancreatic" ? "insulin은 증가하지만 표적조직 반응이 부족해 혈당이 높게 유지됩니다." : "중간 단계 신호가 부족해 상위 자극이 높아도 표적기관 반응이 감소합니다."; }
  if (preset === "exogenous") { pattern = definition.presetLabels[preset]; explanation = "외부 호르몬 또는 작용제가 최종 효과를 높이면서 내인성 상위 축을 억제합니다."; }
  if (axis === "adh" && preset === "primary-failure") explanation = "혈장 삼투질농도는 높지만 ADH와 집합관 수분 보존 반응이 부족해 묽은 다뇨가 지속됩니다.";
  return { axis, preset, stimulus, feedback, exogenous, stages, edges, pattern, explanation };
}
