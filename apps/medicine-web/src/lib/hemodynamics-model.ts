export type HemodynamicsInputs = { preload: number; afterload: number; contractility: number; heartRate: number };
export type CardiacPhaseId = "atrial-systole" | "isovolumetric-contraction" | "rapid-ejection" | "reduced-ejection" | "isovolumetric-relaxation" | "rapid-filling" | "diastasis";
export type CardiacPhase = { id: CardiacPhaseId; label: string; progress: number; mitralOpen: boolean; aorticOpen: boolean; tricuspidOpen: boolean; pulmonaryOpen: boolean; atrialContraction: number; ventricularContraction: number; flow: "atrial" | "ejection" | "filling" | "none" };
export type HemodynamicsState = HemodynamicsInputs & {
  edv: number; esv: number; strokeVolume: number; ejectionFraction: number; cardiacOutput: number;
  systolicPressure: number; diastolicPressure: number; meanArterialPressure: number; lvEndDiastolicPressure: number;
  fillingTimeMs: number; peakAorticFlow: number; pattern: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const smoothPulse = (value: number) => Math.sin(clamp(value, 0, 1) * Math.PI);

export function calculateHemodynamics(raw: HemodynamicsInputs): HemodynamicsState {
  const preload = clamp(raw.preload, 40, 160); const afterload = clamp(raw.afterload, 50, 180);
  const contractility = clamp(raw.contractility, 35, 170); const heartRate = clamp(raw.heartRate, 35, 180);
  const cycleMs = 60000 / heartRate; const diastolicFraction = clamp(0.68 - Math.max(0, heartRate - 70) * 0.0028, 0.34, 0.72);
  const fillingTimeMs = cycleMs * diastolicFraction; const fillingPenalty = clamp(fillingTimeMs / 570, 0.58, 1.12);
  const edv = clamp(120 * preload / 100 * fillingPenalty, 45, 195); const effectiveContractility = Math.max(0.34, contractility / 100);
  const esv = clamp(48 * (afterload / 100) ** 0.82 / effectiveContractility, 14, edv - 8);
  const strokeVolume = edv - esv; const ejectionFraction = strokeVolume / edv * 100; const cardiacOutput = strokeVolume * heartRate / 1000;
  const systolicPressure = clamp(112 + (afterload - 100) * 0.62 + (contractility - 100) * 0.18, 70, 220);
  const diastolicPressure = clamp(70 + (afterload - 100) * 0.42 + (heartRate - 70) * 0.08, 40, 140);
  const meanArterialPressure = diastolicPressure + (systolicPressure - diastolicPressure) / 3;
  const lvEndDiastolicPressure = clamp(7 + (preload - 100) * 0.11 + Math.max(0, 75 - contractility) * 0.13, 2, 30);
  const peakAorticFlow = clamp(strokeVolume / 70 * contractility / 100 * 420 / Math.sqrt(afterload / 100), 70, 780);
  let pattern = "정상 압력-용적 관계";
  if (preload < 70) pattern = "전부하 감소 · EDV와 일회박출량 감소";
  else if (afterload > 130) pattern = "후부하 증가 · 수축기압과 ESV 증가";
  else if (contractility < 70) pattern = "수축력 저하 · ESV 증가와 박출률 감소";
  else if (heartRate > 120) pattern = "빈맥 · 이완기 충만 시간 단축";
  else if (contractility > 125 && preload > 110) pattern = "운동성 고박출 상태";
  return { preload, afterload, contractility, heartRate, edv, esv, strokeVolume, ejectionFraction, cardiacOutput, systolicPressure, diastolicPressure, meanArterialPressure, lvEndDiastolicPressure, fillingTimeMs, peakAorticFlow, pattern };
}
export function getCardiacPhase(cycle: number): CardiacPhase {
  const t = ((cycle % 1) + 1) % 1;
  if (t < 0.12) return { id: "atrial-systole", label: "심방 수축", progress: t / 0.12, mitralOpen: true, aorticOpen: false, tricuspidOpen: true, pulmonaryOpen: false, atrialContraction: smoothPulse(t / 0.12), ventricularContraction: 0, flow: "atrial" };
  if (t < 0.18) return { id: "isovolumetric-contraction", label: "등용적 수축", progress: (t - 0.12) / 0.06, mitralOpen: false, aorticOpen: false, tricuspidOpen: false, pulmonaryOpen: false, atrialContraction: 0, ventricularContraction: (t - 0.12) / 0.06, flow: "none" };
  if (t < 0.40) return { id: "rapid-ejection", label: "빠른 박출", progress: (t - 0.18) / 0.22, mitralOpen: false, aorticOpen: true, tricuspidOpen: false, pulmonaryOpen: true, atrialContraction: 0, ventricularContraction: 1, flow: "ejection" };
  if (t < 0.52) return { id: "reduced-ejection", label: "감속 박출", progress: (t - 0.40) / 0.12, mitralOpen: false, aorticOpen: true, tricuspidOpen: false, pulmonaryOpen: true, atrialContraction: 0, ventricularContraction: 1 - (t - 0.40) / 0.12 * 0.25, flow: "ejection" };
  if (t < 0.60) return { id: "isovolumetric-relaxation", label: "등용적 이완", progress: (t - 0.52) / 0.08, mitralOpen: false, aorticOpen: false, tricuspidOpen: false, pulmonaryOpen: false, atrialContraction: 0, ventricularContraction: 0.75 * (1 - (t - 0.52) / 0.08), flow: "none" };
  if (t < 0.78) return { id: "rapid-filling", label: "빠른 충만", progress: (t - 0.60) / 0.18, mitralOpen: true, aorticOpen: false, tricuspidOpen: true, pulmonaryOpen: false, atrialContraction: 0, ventricularContraction: 0, flow: "filling" };
  return { id: "diastasis", label: "완만한 충만", progress: (t - 0.78) / 0.22, mitralOpen: true, aorticOpen: false, tricuspidOpen: true, pulmonaryOpen: false, atrialContraction: 0, ventricularContraction: 0, flow: "filling" };
}
