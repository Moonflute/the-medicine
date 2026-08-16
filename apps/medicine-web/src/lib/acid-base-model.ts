export type AcidBaseInputs = {
  ventilation: number;
  co2Production: number;
  bicarbonate: number;
};

export type AcidBaseState = AcidBaseInputs & {
  pH: number;
  paCO2: number;
  ratio: number;
  acidemia: boolean;
  alkalemia: boolean;
  status: "acidemia" | "normal" | "alkalemia";
  pattern: string;
  explanation: string;
  compensation: string;
  compensationTone: "ok" | "mixed" | "neutral";
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function calculateAcidBaseState(inputs: AcidBaseInputs): AcidBaseState {
  const ventilation = clamp(inputs.ventilation, 40, 160);
  const co2Production = clamp(inputs.co2Production, 60, 160);
  const bicarbonate = clamp(inputs.bicarbonate, 8, 40);
  const paCO2 = clamp(40 * (co2Production / ventilation), 15, 100);
  const ratio = bicarbonate / (0.03 * paCO2);
  const pH = 6.1 + Math.log10(ratio);
  const acidemia = pH < 7.35;
  const alkalemia = pH > 7.45;
  const status = acidemia ? "acidemia" : alkalemia ? "alkalemia" : "normal";

  const respiratoryAcid = paCO2 > 45;
  const respiratoryAlkali = paCO2 < 35;
  const metabolicAcid = bicarbonate < 22;
  const metabolicAlkali = bicarbonate > 26;

  let pattern = "정상 범위의 산-염기 균형";
  let explanation = "CO2와 HCO3-의 비가 생리적 범위에 있습니다.";

  if (acidemia && respiratoryAcid && metabolicAcid) {
    pattern = "혼합성 산증 가능 패턴";
    explanation = "PaCO2 상승과 HCO3- 감소가 모두 pH를 낮추는 방향입니다.";
  } else if (alkalemia && respiratoryAlkali && metabolicAlkali) {
    pattern = "혼합성 알칼리증 가능 패턴";
    explanation = "PaCO2 감소와 HCO3- 증가가 모두 pH를 높이는 방향입니다.";
  } else if (acidemia && metabolicAcid) {
    pattern = "대사성 산증 우세 패턴";
    explanation = "HCO3- 감소가 pH 저하를 주도합니다. 환기가 증가하면 PaCO2가 낮아져 보상합니다.";
  } else if (acidemia && respiratoryAcid) {
    pattern = "호흡성 산증 우세 패턴";
    explanation = "폐포 환기보다 CO2 부하가 커져 PaCO2가 상승했습니다.";
  } else if (alkalemia && metabolicAlkali) {
    pattern = "대사성 알칼리증 우세 패턴";
    explanation = "HCO3- 증가가 pH 상승을 주도합니다. 저환기 보상에는 저산소증이라는 한계가 있습니다.";
  } else if (alkalemia && respiratoryAlkali) {
    pattern = "호흡성 알칼리증 우세 패턴";
    explanation = "폐포 환기가 CO2 부하보다 커져 PaCO2가 감소했습니다.";
  } else if (!acidemia && !alkalemia && (respiratoryAcid || respiratoryAlkali || metabolicAcid || metabolicAlkali)) {
    pattern = "보상된 산-염기 장애 가능 패턴";
    explanation = "pH는 정상 범위지만 PaCO2와 HCO3-가 모두 정상에서 벗어나 있습니다.";
  }

  let compensation = "정상 범위에서는 보상 공식을 적용하지 않습니다.";
  let compensationTone: AcidBaseState["compensationTone"] = "neutral";

  if (!acidemia && !alkalemia && respiratoryAcid && metabolicAlkali) {
    compensation = "PaCO2와 HCO3-가 함께 증가했습니다. 보상된 호흡성 산증과 호흡 보상을 동반한 대사성 알칼리증은 병력과 시간 경과로 구분해야 합니다.";
  } else if (!acidemia && !alkalemia && respiratoryAlkali && metabolicAcid) {
    compensation = "PaCO2와 HCO3-가 함께 감소했습니다. 보상된 호흡성 알칼리증과 호흡 보상을 동반한 대사성 산증은 병력과 시간 경과로 구분해야 합니다.";
  } else if (metabolicAcid) {
    const expected = 1.5 * bicarbonate + 8;
    const delta = paCO2 - expected;
    compensation = `Winter 예상 PaCO2 ${expected.toFixed(0)} ±2 mmHg; 현재 ${paCO2.toFixed(0)} mmHg`;
    compensationTone = Math.abs(delta) <= 2 ? "ok" : "mixed";
    if (delta > 2) compensation += " - 동반 호흡성 산증 가능";
    if (delta < -2) compensation += " - 동반 호흡성 알칼리증 가능";
  } else if (metabolicAlkali) {
    const expected = 40 + 0.7 * (bicarbonate - 24);
    const delta = paCO2 - expected;
    compensation = `예상 PaCO2 약 ${expected.toFixed(0)} ±5 mmHg; 현재 ${paCO2.toFixed(0)} mmHg`;
    compensationTone = Math.abs(delta) <= 5 ? "ok" : "mixed";
  } else if (respiratoryAcid) {
    const change = (paCO2 - 40) / 10;
    const acute = 24 + change;
    const chronic = 24 + 3.5 * change;
    compensation = `예상 HCO3-: 급성 ${acute.toFixed(1)}, 만성 ${chronic.toFixed(1)} mmol/L; 현재 ${bicarbonate.toFixed(1)}`;
    compensationTone = Math.min(Math.abs(bicarbonate - acute), Math.abs(bicarbonate - chronic)) <= 2 ? "ok" : "mixed";
  } else if (respiratoryAlkali) {
    const change = (40 - paCO2) / 10;
    const acute = 24 - 2 * change;
    const chronic = 24 - 4 * change;
    compensation = `예상 HCO3-: 급성 ${acute.toFixed(1)}, 만성 ${chronic.toFixed(1)} mmol/L; 현재 ${bicarbonate.toFixed(1)}`;
    compensationTone = Math.min(Math.abs(bicarbonate - acute), Math.abs(bicarbonate - chronic)) <= 2 ? "ok" : "mixed";
  }

  return {
    ventilation,
    co2Production,
    bicarbonate,
    pH,
    paCO2,
    ratio,
    acidemia,
    alkalemia,
    status,
    pattern,
    explanation,
    compensation,
    compensationTone,
  };
}

export function compensatedInputs(state: AcidBaseState): AcidBaseInputs {
  if (state.bicarbonate < 22) {
    const expectedPaCO2 = 1.5 * state.bicarbonate + 8;
    return {
      ventilation: clamp((40 * state.co2Production) / expectedPaCO2, 40, 160),
      co2Production: state.co2Production,
      bicarbonate: state.bicarbonate,
    };
  }
  if (state.bicarbonate > 26) {
    const expectedPaCO2 = 40 + 0.7 * (state.bicarbonate - 24);
    return {
      ventilation: clamp((40 * state.co2Production) / expectedPaCO2, 40, 160),
      co2Production: state.co2Production,
      bicarbonate: state.bicarbonate,
    };
  }
  if (state.paCO2 > 45) {
    const chronicHco3 = 24 + 3.5 * ((state.paCO2 - 40) / 10);
    return {
      ventilation: state.ventilation,
      co2Production: state.co2Production,
      bicarbonate: clamp(chronicHco3, 8, 40),
    };
  }
  if (state.paCO2 < 35) {
    const chronicHco3 = 24 - 4 * ((40 - state.paCO2) / 10);
    return {
      ventilation: state.ventilation,
      co2Production: state.co2Production,
      bicarbonate: clamp(chronicHco3, 8, 40),
    };
  }
  return {
    ventilation: state.ventilation,
    co2Production: state.co2Production,
    bicarbonate: state.bicarbonate,
  };
}
