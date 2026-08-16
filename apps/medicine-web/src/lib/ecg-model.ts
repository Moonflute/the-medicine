export type RhythmId = "sinus" | "brady" | "tachy" | "af" | "flutter" | "av1" | "mobitz1" | "mobitz2" | "complete" | "vt";
export type EcgEvent = { time: number; type: "atrial" | "ventricular"; conducted: boolean; width: number; amplitude: number };
export type EcgState = { rhythm: RhythmId; rate: number; atrialRate: number; ventricularRate: number; pr: string; qrs: string; regularity: string; conduction: string; perfusion: string; events: EcgEvent[]; windowSeconds: number };
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const pushPair = (events: EcgEvent[], atrialTime: number, pr: number, conducted = true, qrsWidth = 0.09) => { events.push({ time: atrialTime, type: "atrial", conducted, width: 0.07, amplitude: 1 }); if (conducted) events.push({ time: atrialTime + pr, type: "ventricular", conducted: true, width: qrsWidth, amplitude: 1 }); };

export function buildEcgEvents(rhythm: RhythmId, requestedRate: number, windowSeconds = 8): EcgEvent[] {
  const rate = clamp(requestedRate, 30, 190); const events: EcgEvent[] = [];
  if (rhythm === "af") {
    const intervals = [0.58, 0.76, 0.49, 0.68, 0.55, 0.82, 0.61, 0.47]; let time = 0.22; let index = 0;
    while (time < windowSeconds) { events.push({ time, type: "ventricular", conducted: true, width: 0.09, amplitude: 1 }); time += intervals[index++ % intervals.length] * 105 / rate; }
    for (let t = 0.05; t < windowSeconds; t += 0.14) events.push({ time: t, type: "atrial", conducted: false, width: 0.025, amplitude: 0.22 });
  } else if (rhythm === "flutter") {
    const atrialInterval = 0.2; const conductionRatio = rate >= 140 ? 2 : rate >= 90 ? 3 : 4;
    for (let t = 0.08, index = 0; t < windowSeconds; t += atrialInterval, index += 1) { const conducted = index % conductionRatio === conductionRatio - 1; events.push({ time: t, type: "atrial", conducted, width: 0.06, amplitude: 0.7 }); if (conducted) events.push({ time: t + 0.12, type: "ventricular", conducted: true, width: 0.09, amplitude: 1 }); }
  } else if (rhythm === "complete") {
    for (let t = 0.1; t < windowSeconds; t += 60 / 85) events.push({ time: t, type: "atrial", conducted: false, width: 0.07, amplitude: 1 });
    for (let t = 0.45; t < windowSeconds; t += 60 / Math.min(45, rate)) events.push({ time: t, type: "ventricular", conducted: true, width: 0.15, amplitude: 0.9 });
  } else if (rhythm === "vt") {
    for (let t = 0.18; t < windowSeconds; t += 60 / Math.max(140, rate)) events.push({ time: t, type: "ventricular", conducted: true, width: 0.18, amplitude: 1.15 });
  } else {
    const effectiveRate = rhythm === "brady" ? Math.min(rate, 55) : rhythm === "tachy" ? Math.max(rate, 110) : rate;
    const interval = 60 / effectiveRate; let index = 0;
    for (let t = 0.12; t < windowSeconds; t += interval, index += 1) {
      let pr = rhythm === "av1" ? 0.28 : 0.16; let conducted = true;
      if (rhythm === "mobitz1") { const sequence = index % 4; pr = 0.16 + sequence * 0.045; conducted = sequence !== 3; }
      if (rhythm === "mobitz2") conducted = index % 3 !== 2;
      pushPair(events, t, pr, conducted, rhythm === "mobitz2" ? 0.13 : 0.09);
    }
  }
  return events.sort((a, b) => a.time - b.time);
}

export function calculateEcgState(rhythm: RhythmId, requestedRate: number): EcgState {
  const rate = clamp(requestedRate, 30, 190); const windowSeconds = 8; const events = buildEcgEvents(rhythm, rate, windowSeconds);
  const atrialRate = rhythm === "af" ? 420 : rhythm === "flutter" ? 300 : rhythm === "complete" || rhythm === "vt" ? 85 : rhythm === "brady" ? Math.min(rate, 55) : rhythm === "tachy" ? Math.max(rate, 110) : rate;
  const ventricularCount = events.filter((event) => event.type === "ventricular").length; const ventricularRate = Math.round(ventricularCount / windowSeconds * 60);
  const base = { rhythm, rate, atrialRate, ventricularRate, pr: "120-200 ms", qrs: "<120 ms", regularity: "규칙적", conduction: "SA node → atria → AV node → His-Purkinje", perfusion: "각 QRS 뒤 심실 수축과 말초 맥박이 이어집니다.", events, windowSeconds };
  if (rhythm === "brady") return { ...base, perfusion: "느린 심박수로 분당 심박출량이 감소할 수 있습니다." };
  if (rhythm === "tachy") return { ...base, perfusion: "이완기 충만 시간이 짧아지고 산소 요구량이 증가합니다." };
  if (rhythm === "af") return { ...base, regularity: "불규칙-불규칙", pr: "측정 불가", conduction: "무질서한 심방 활성 → 가변적 AV 전도", perfusion: "심방 수축 소실과 불규칙한 심실 충만을 보입니다." };
  if (rhythm === "flutter") return { ...base, pr: "sawtooth F wave", conduction: "심방 macro-reentry → 고정 또는 가변 AV block", perfusion: "전도 비율에 따라 심실 반응과 충만이 달라집니다." };
  if (rhythm === "av1") return { ...base, pr: ">200 ms", conduction: "AV node 전도가 지연되지만 모든 P가 QRS로 전달", perfusion: "1:1 심실 수축은 유지됩니다." };
  if (rhythm === "mobitz1") return { ...base, regularity: "군집성 불규칙", pr: "점진 연장 후 탈락", conduction: "AV node 전도가 점차 지연된 뒤 QRS가 탈락", perfusion: "탈락 P파에는 심실 수축과 맥박이 없습니다." };
  if (rhythm === "mobitz2") return { ...base, regularity: "간헐적 탈락", pr: "일정, QRS 탈락", qrs: "흔히 ≥120 ms", conduction: "His-Purkinje 전도가 갑자기 차단", perfusion: "예고 없는 박동 탈락으로 관류가 불안정할 수 있습니다." };
  if (rhythm === "complete") return { ...base, regularity: "심방·심실 각각 규칙적, 서로 해리", pr: "AV dissociation", qrs: "escape에 따라 다양", conduction: "심방과 심실이 독립적으로 박동", perfusion: "느린 escape rhythm으로 심박출량이 감소합니다." };
  if (rhythm === "vt") return { ...base, atrialRate: 85, pr: "AV dissociation", qrs: ">120 ms", conduction: "심실 기원 회로가 빠르게 반복", perfusion: "빠른 심실 박동으로 충만과 유효 박출이 크게 감소할 수 있습니다." };
  return base;
}
