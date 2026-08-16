export type OxygenationInputs = {
  fio2: number;
  respiratoryRate: number;
  vqMismatch: number;
  shuntFraction: number;
  hemoglobin: number;
  pH: number;
};

export type OxygenationState = OxygenationInputs & {
  paCO2: number;
  alveolarPO2: number;
  endCapillaryPO2: number;
  paO2: number;
  saO2: number;
  aaGradient: number;
  caO2: number;
  p50: number;
  status: "adequate" | "impaired" | "critical";
  pattern: string;
  explanation: string;
  oxygenResponse: string;
};

const SEA_LEVEL_PRESSURE = 760;
const WATER_VAPOR_PRESSURE = 47;
const RESPIRATORY_QUOTIENT = 0.8;
const BASELINE_RR = 14;
const OXYGEN_BINDING_CAPACITY = 1.34;
const DISSOLVED_OXYGEN_COEFFICIENT = 0.003;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function saturationAtPO2(po2: number, p50: number) {
  const boundedPO2 = Math.max(0.1, po2);
  const hillCoefficient = 2.7;
  return boundedPO2 ** hillCoefficient / (boundedPO2 ** hillCoefficient + p50 ** hillCoefficient);
}

function oxygenContent(po2: number, hemoglobin: number, p50: number) {
  return OXYGEN_BINDING_CAPACITY * hemoglobin * saturationAtPO2(po2, p50)
    + DISSOLVED_OXYGEN_COEFFICIENT * po2;
}

function po2ForContent(targetContent: number, hemoglobin: number, p50: number) {
  let low = 1;
  let high = 650;
  for (let index = 0; index < 36; index += 1) {
    const midpoint = (low + high) / 2;
    if (oxygenContent(midpoint, hemoglobin, p50) < targetContent) low = midpoint;
    else high = midpoint;
  }
  return (low + high) / 2;
}

export function calculateOxygenationState(raw: OxygenationInputs): OxygenationState {
  const fio2 = clamp(raw.fio2, 0.21, 1);
  const respiratoryRate = clamp(raw.respiratoryRate, 6, 30);
  const vqMismatch = clamp(raw.vqMismatch, 0, 100);
  const shuntFraction = clamp(raw.shuntFraction, 0, 0.35);
  const hemoglobin = clamp(raw.hemoglobin, 5, 20);
  const pH = clamp(raw.pH, 7.1, 7.6);

  const paCO2 = clamp(40 * (BASELINE_RR / respiratoryRate), 18, 90);
  const alveolarPO2 = Math.max(25, fio2 * (SEA_LEVEL_PRESSURE - WATER_VAPOR_PRESSURE) - paCO2 / RESPIRATORY_QUOTIENT);
  const baselineGradient = 8;
  const vqPenalty = (vqMismatch / 100) * Math.min(180, alveolarPO2 * 0.62);
  const endCapillaryPO2 = Math.max(18, alveolarPO2 - baselineGradient - vqPenalty);

  // The Bohr shift is intentionally reduced to a single pH-dependent P50 term.
  const p50 = 26.8 * 10 ** (0.48 * (7.4 - pH));
  const endCapillaryContent = oxygenContent(endCapillaryPO2, hemoglobin, p50);
  const mixedVenousContent = oxygenContent(40, hemoglobin, p50);
  const arterialContentTarget = (1 - shuntFraction) * endCapillaryContent + shuntFraction * mixedVenousContent;
  const paO2 = clamp(po2ForContent(arterialContentTarget, hemoglobin, p50), 10, alveolarPO2);
  const saO2 = saturationAtPO2(paO2, p50) * 100;
  const aaGradient = Math.max(0, alveolarPO2 - paO2);
  const caO2 = oxygenContent(paO2, hemoglobin, p50);

  const status = saO2 < 90 || paO2 < 60 ? "critical" : paO2 < 80 || aaGradient > 20 || caO2 < 16 ? "impaired" : "adequate";
  let pattern = "보존된 산소화와 산소함량";
  let explanation = "폐포 산소가 폐모세혈관으로 전달되고 hemoglobin 농도도 충분한 범위입니다.";

  if (hemoglobin < 10 && saO2 >= 94) {
    pattern = "포화도는 유지되지만 산소함량 감소";
    explanation = "PaO2와 SaO2가 정상에 가까워도 hemoglobin이 낮으면 CaO2와 조직 산소 운반 능력은 감소합니다.";
  } else if (shuntFraction >= 0.15 && status !== "adequate") {
    pattern = "shunt 우세 저산소혈증";
    explanation = "환기되지 않은 혈류가 산소화된 혈액과 섞이면서 FiO2를 높여도 SaO2 개선이 제한될 수 있습니다.";
  } else if (vqMismatch >= 30 && status !== "adequate") {
    pattern = "V/Q 불균형 우세 저산소혈증";
    explanation = "폐포 산소는 존재하지만 환기와 관류의 공간적 불균형으로 A-a gradient가 증가했습니다.";
  } else if (respiratoryRate <= 9 && paCO2 > 45) {
    pattern = "저환기성 저산소혈증";
    explanation = "환기 저하로 PaCO2가 상승하면서 alveolar gas equation상 PAO2가 감소했습니다.";
  } else if (status === "critical") {
    pattern = "중증 산소화 저하 패턴";
    explanation = "PaO2 또는 SaO2가 낮습니다. 실제 임상에서는 측정 조건과 환자 상태를 즉시 함께 평가해야 합니다.";
  }

  const oxygenResponse = shuntFraction >= 0.15
    ? "높은 shunt에서는 FiO2를 올려도 이미 산소화된 혈액의 함량만 조금 증가해 반응이 제한됩니다."
    : vqMismatch >= 30
      ? "V/Q 불균형은 FiO2 증가로 낮은 V/Q 단위의 PAO2가 올라가 비교적 반응할 수 있습니다."
      : "FiO2 증가는 PAO2와 산소 확산 구동압을 높입니다. 산소 투여의 필요성과 목표는 임상 맥락으로 결정합니다.";

  return {
    fio2,
    respiratoryRate,
    vqMismatch,
    shuntFraction,
    hemoglobin,
    pH,
    paCO2,
    alveolarPO2,
    endCapillaryPO2,
    paO2,
    saO2,
    aaGradient,
    caO2,
    p50,
    status,
    pattern,
    explanation,
    oxygenResponse,
  };
}
