export type HemodynamicsInputs = { preload: number; afterload: number; contractility: number; heartRate: number };
export type HemodynamicsState = HemodynamicsInputs & { edv: number; esv: number; strokeVolume: number; ejectionFraction: number; cardiacOutput: number; systolicPressure: number; pattern: string };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function calculateHemodynamics(raw: HemodynamicsInputs): HemodynamicsState {
  const preload = clamp(raw.preload, 40, 160);
  const afterload = clamp(raw.afterload, 50, 180);
  const contractility = clamp(raw.contractility, 35, 170);
  const heartRate = clamp(raw.heartRate, 35, 180);
  const fillingPenalty = heartRate > 120 ? (heartRate - 120) * 0.18 : 0;
  const edv = clamp(120 * preload / 100 - fillingPenalty, 45, 190);
  const baseEsv = 50 * (afterload / 100) / Math.max(0.42, contractility / 100);
  const esv = clamp(baseEsv, 15, edv - 8);
  const strokeVolume = edv - esv;
  const ejectionFraction = strokeVolume / edv * 100;
  const cardiacOutput = strokeVolume * heartRate / 1000;
  const systolicPressure = clamp(105 + (afterload - 100) * 0.55 + (contractility - 100) * 0.22, 70, 210);
  let pattern = "정상 압력-용적 관계";
  if (preload < 70) pattern = "전부하 감소 · 일회박출량 감소";
  else if (afterload > 130) pattern = "후부하 증가 · 잔류 용적 증가";
  else if (contractility < 70) pattern = "수축력 저하 · 박출률 감소";
  else if (heartRate > 120) pattern = "빈맥 · 충만 시간 단축";
  else if (contractility > 125 && preload > 110) pattern = "운동성 고박출 상태";
  return { preload, afterload, contractility, heartRate, edv, esv, strokeVolume, ejectionFraction, cardiacOutput, systolicPressure, pattern };
}
