export type EndocrineAxisId = "thyroid" | "adrenal" | "gonadal" | "growth" | "adh";
export type EndocrinePreset = "normal" | "primary-failure" | "primary-excess" | "pituitary-failure" | "exogenous";
export type EndocrineState = { axis: EndocrineAxisId; preset: EndocrinePreset; stimulus: number; feedback: number; exogenous: number; stages: Array<{ organ: string; hormone: string; level: number }>; pattern: string; explanation: string };

const axisMap: Record<EndocrineAxisId, { stages: Array<[string, string]>; stimulus: string }> = {
  thyroid: { stages: [["시상하부", "TRH"], ["뇌하수체", "TSH"], ["갑상선", "T4/T3"]], stimulus: "대사 요구" },
  adrenal: { stages: [["시상하부", "CRH"], ["뇌하수체", "ACTH"], ["부신", "Cortisol"]], stimulus: "스트레스" },
  gonadal: { stages: [["시상하부", "GnRH"], ["뇌하수체", "LH/FSH"], ["생식샘", "Sex steroids"]], stimulus: "생식 축 신호" },
  growth: { stages: [["시상하부", "GHRH"], ["뇌하수체", "GH"], ["간", "IGF-1"]], stimulus: "성장·영양 신호" },
  adh: { stages: [["혈장", "Osmolality"], ["시상하부·후엽", "ADH"], ["신장", "Water retention"]], stimulus: "삼투 자극" },
};

export function calculateEndocrineState(axis: EndocrineAxisId, preset: EndocrinePreset, stimulus = 100, feedback = 100, exogenous = 0): EndocrineState {
  const definition = axisMap[axis];
  let upstream = stimulus;
  let pituitary = stimulus;
  let target = stimulus;
  let pattern = "정상 음성 피드백";
  let explanation = `${definition.stimulus}가 상위 신호를 만들고 표적 호르몬이 상위 단계를 억제해 항상성을 유지합니다.`;
  if (preset === "primary-failure") { target = 25; upstream = 155; pituitary = 155; pattern = "일차 표적기관 기능저하"; explanation = "최종 호르몬 감소로 음성 피드백이 풀려 상위 호르몬이 상승합니다."; }
  if (preset === "primary-excess") { target = 165; upstream = 30; pituitary = 30; pattern = "일차 표적기관 과다"; explanation = "최종 호르몬이 증가해 시상하부와 뇌하수체 신호를 억제합니다."; }
  if (preset === "pituitary-failure") { pituitary = 25; target = 30; upstream = 150; pattern = "이차성 기능저하"; explanation = "시상하부 자극은 높지만 뇌하수체 신호가 부족해 표적기관 반응이 감소합니다."; }
  if (preset === "exogenous") { target = Math.max(135, exogenous); upstream = 20; pituitary = 20; pattern = "외인성 최종 호르몬"; explanation = "외부 최종 호르몬이 상위 축을 억제하므로 내인성 자극과 표적기관 활동이 감소합니다."; }
  const feedbackStrength = Math.max(0.3, feedback / 100);
  upstream = Math.max(5, upstream / feedbackStrength);
  const levels = [upstream, pituitary, target];
  return { axis, preset, stimulus, feedback, exogenous, stages: definition.stages.map(([organ, hormone], index) => ({ organ, hormone, level: Math.min(180, levels[index]) })), pattern, explanation };
}
