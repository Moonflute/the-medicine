export type AcidBaseInputs = { ventilation: number; co2Production: number; bicarbonate: number };
export type AcidBaseDisorder = "auto" | "respiratory-acidosis" | "respiratory-alkalosis" | "metabolic-acidosis" | "metabolic-alkalosis";
export type CompensationDuration = "acute" | "chronic";
export type AcidBaseState = AcidBaseInputs & {
  pH: number; paCO2: number; ratio: number; acidemia: boolean; alkalemia: boolean;
  status: "acidemia" | "normal" | "alkalemia"; pattern: string; explanation: string;
  compensation: string; compensationTone: "ok" | "mixed" | "neutral";
  primary: AcidBaseDisorder; duration: CompensationDuration; expected: number | null;
};
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
export const ACID_BASE_LABELS: Record<AcidBaseDisorder, string> = {
  auto: "자동 추정 · 원인 불명", "respiratory-acidosis": "Respiratory acidosis", "respiratory-alkalosis": "Respiratory alkalosis",
  "metabolic-acidosis": "Metabolic acidosis", "metabolic-alkalosis": "Metabolic alkalosis",
};
export function estimateRespiratoryRate(ventilation: number) { return 14 * clamp(ventilation, 40, 300) / 100; }
export function calculateAcidBaseState(raw: AcidBaseInputs, primary: AcidBaseDisorder = "auto", duration: CompensationDuration = "chronic"): AcidBaseState {
  const ventilation = clamp(raw.ventilation, 40, 300), co2Production = clamp(raw.co2Production, 60, 160), bicarbonate = clamp(raw.bicarbonate, 8, 40);
  const paCO2 = 40 * co2Production / ventilation, ratio = bicarbonate / (0.03 * paCO2), pH = 6.1 + Math.log10(ratio);
  const acidemia = pH < 7.35, alkalemia = pH > 7.45;
  const ra = paCO2 > 45, rk = paCO2 < 35, ma = bicarbonate < 22, mk = bicarbonate > 26;
  const mixed = (ra && ma) || (rk && mk);
  let resolved = primary;
  if (primary === "auto") {
    if (pH < 7.4) resolved = ma ? "metabolic-acidosis" : ra ? "respiratory-acidosis" : "auto";
    else resolved = mk ? "metabolic-alkalosis" : rk ? "respiratory-alkalosis" : "auto";
  }
  let expected: number | null = null, tolerance = 2, component = "HCO₃⁻", actual = bicarbonate;
  if (resolved === "metabolic-acidosis") { expected = 1.5 * bicarbonate + 8; component = "PaCO₂"; actual = paCO2; }
  if (resolved === "metabolic-alkalosis") { expected = Math.min(55, 40 + .7 * (bicarbonate - 24)); tolerance = 5; component = "PaCO₂"; actual = paCO2; }
  if (resolved === "respiratory-acidosis") expected = 24 + (duration === "acute" ? 1 : 3.5) * (paCO2 - 40) / 10;
  if (resolved === "respiratory-alkalosis") expected = 24 - (duration === "acute" ? 2 : 4) * (40 - paCO2) / 10;
  const compatible = primary === "auto" || (primary === "respiratory-acidosis" ? ra : primary === "respiratory-alkalosis" ? rk : primary === "metabolic-acidosis" ? ma : mk);
  if (!compatible) expected = null;
  const inRange = expected !== null && Math.abs(actual - expected) <= tolerance;
  const ambiguous = primary === "auto" && !acidemia && !alkalemia && (ra || rk || ma || mk);
  const pattern = !compatible ? "선택한 일차 장애와 입력값 불일치" : mixed ? "Mixed acid–base disorder 의심" : ambiguous ? "정상 pH만으로 단순 장애를 확정할 수 없음" : resolved === "auto" ? "정상 범위의 Acid–base balance" : ACID_BASE_LABELS[resolved];
  const explanation = !compatible ? `${ACID_BASE_LABELS[primary]}를 선택했지만 일차 변수의 현재 값은 해당 장애 범위가 아닙니다. 일차 장애 선택 또는 입력값을 조정하세요. 정상 수치를 선택한 질환으로 판정하지 않습니다.` : mixed ? "PaCO₂와 HCO₃⁻가 같은 산성 또는 알칼리성 방향으로 작용합니다. 각각의 원인을 구분해야 합니다."
    : resolved === "auto" ? "PaCO₂와 HCO₃⁻의 비율이 기준 범위입니다. 정상 pH가 모든 산·염기 장애의 부재를 뜻하지는 않습니다."
    : ACID_BASE_LABELS[resolved] + "를 일차 장애로 평가합니다. 보상으로 달라진 값은 새로운 일차 장애로 재분류하지 않습니다." + (primary === "auto" ? " 자동 추정이므로 병력에 맞는 일차 장애를 직접 선택해 비교하세요." : "");
  const formula = component === "PaCO₂" ? resolved === "metabolic-acidosis" ? "Winter's formula" : "예상 Respiratory compensation" : duration === "acute" ? "Acute compensation" : "Chronic compensation";
  const compensation = !compatible ? "입력과 일차 장애가 일치할 때 예상 보상을 적용할 수 있습니다." : expected === null ? "일차 장애를 선택하면 예상 보상 범위를 표시합니다."
    : formula + ": " + component + " " + expected.toFixed(1) + " ±" + tolerance + (component === "PaCO₂" ? " mmHg" : " mmol/L") + "; 현재 " + actual.toFixed(1) + ". " + (inRange ? "선택한 장애의 예상 범위 안입니다." : "예상 범위 밖입니다. 발생 시점·동반 장애·임상 조건을 함께 확인하세요.");
  return { ventilation, co2Production, bicarbonate, paCO2, ratio, pH, acidemia, alkalemia, status: acidemia ? "acidemia" : alkalemia ? "alkalemia" : "normal", primary: resolved, duration, expected, pattern, explanation, compensation, compensationTone: expected === null || ambiguous ? "neutral" : inRange && !mixed ? "ok" : "mixed" };
}
export function compensatedInputs(state: AcidBaseState): AcidBaseInputs {
  const result = { ventilation: state.ventilation, co2Production: state.co2Production, bicarbonate: state.bicarbonate };
  if (state.expected === null) return result;
  if (state.primary.startsWith("metabolic")) result.ventilation = clamp(40 * state.co2Production / state.expected, 40, 300);
  else result.bicarbonate = clamp(state.expected, 8, 40);
  return result;
}
export function calculateAnionGap(sodium: number, chloride: number, bicarbonate: number, albumin: number) {
  const gap = sodium - chloride - bicarbonate;
  const corrected = gap + 2.5 * (4 - albumin);
  return { gap, corrected, deltaRatio: bicarbonate < 24 && corrected > 12 ? (corrected - 12) / (24 - bicarbonate) : null };
}
