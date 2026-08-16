export type RhythmId = "sinus" | "brady" | "tachy" | "af" | "flutter" | "av1" | "mobitz1" | "mobitz2" | "complete" | "vt";
export type EcgState = { rhythm: RhythmId; rate: number; atrialRate: number; ventricularRate: number; pr: string; qrs: string; regularity: string; conduction: string; perfusion: string };

export function calculateEcgState(rhythm: RhythmId, requestedRate: number): EcgState {
  const rate = Math.max(30, Math.min(190, requestedRate));
  const base = { rhythm, rate, atrialRate: rate, ventricularRate: rate, pr: "120-200 ms", qrs: "<120 ms", regularity: "규칙적", conduction: "SA node → AV node → His-Purkinje", perfusion: "전기 활성 뒤에 심실 수축과 맥박이 이어집니다." };
  if (rhythm === "brady") return { ...base, rate: Math.min(rate, 55), atrialRate: Math.min(rate, 55), ventricularRate: Math.min(rate, 55), perfusion: "느린 심박수로 분당 심박출량이 감소할 수 있습니다." };
  if (rhythm === "tachy") return { ...base, rate: Math.max(rate, 110), atrialRate: Math.max(rate, 110), ventricularRate: Math.max(rate, 110), perfusion: "이완기 충만 시간이 짧아집니다." };
  if (rhythm === "af") return { ...base, atrialRate: 420, regularity: "불규칙-불규칙", pr: "측정 불가", conduction: "무질서한 심방 활성 → 가변적 AV 전도", perfusion: "심방 수축 소실과 불규칙한 심실 충만을 보입니다." };
  if (rhythm === "flutter") return { ...base, atrialRate: 300, ventricularRate: Math.round(rate / 10) * 10, pr: "sawtooth F wave", conduction: "심방 macro-reentry → 주기적 AV block", perfusion: "전도 비율에 따라 심실 반응과 충만이 달라집니다." };
  if (rhythm === "av1") return { ...base, pr: ">200 ms", conduction: "AV node 전도가 지연되지만 모든 P가 QRS로 전달", perfusion: "대개 1:1 심실 수축은 유지됩니다." };
  if (rhythm === "mobitz1") return { ...base, ventricularRate: Math.round(rate * 0.75), regularity: "군집성 불규칙", pr: "점진 연장 후 탈락", conduction: "AV node 피로 → 주기적 QRS 탈락", perfusion: "탈락 박동에서 맥박이 생성되지 않습니다." };
  if (rhythm === "mobitz2") return { ...base, ventricularRate: Math.round(rate * 0.67), regularity: "간헐적 탈락", pr: "일정, QRS 탈락", qrs: "흔히 ≥120 ms", conduction: "His-Purkinje 전도가 갑자기 차단", perfusion: "예고 없는 박동 탈락으로 관류가 불안정할 수 있습니다." };
  if (rhythm === "complete") return { ...base, atrialRate: 85, ventricularRate: Math.min(45, rate), regularity: "각각 규칙적, 서로 해리", pr: "AV dissociation", qrs: "escape에 따라 다양", conduction: "심방과 심실이 독립적으로 박동", perfusion: "느린 escape rhythm으로 심박출량이 감소합니다." };
  if (rhythm === "vt") return { ...base, rate: Math.max(140, rate), atrialRate: 85, ventricularRate: Math.max(140, rate), pr: "해리", qrs: ">120 ms", conduction: "심실 기원 회로가 빠르게 반복", perfusion: "빠른 심실 박동으로 충만과 유효 박출이 크게 감소할 수 있습니다." };
  return base;
}
