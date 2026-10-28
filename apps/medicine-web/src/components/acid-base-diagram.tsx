"use client";
import { useId } from "react";
import { assessCompensation, calculateAnionGap, type AcidBaseState } from "@/lib/acid-base-model";

export function AcidBaseDiagram({ state, sodium, chloride, albumin }: { state: AcidBaseState; sodium: number; chloride: number; albumin: number }) {
  const x = (hco3: number) => 60 + (hco3 - 8) / 32 * 485;
  const clipId = useId().replace(/:/g, "");
  const y = (co2: number) => 395 - Math.log(Math.max(.1, co2) / 10) / Math.log(16) * 310;
  const gap = calculateAnionGap(sodium, chloride, state.bicarbonate, albumin);
  const compensation = assessCompensation(state);
  const metabolic = state.primary.startsWith("metabolic");
  const expectedX = metabolic ? x(state.bicarbonate) : x(state.expected ?? state.bicarbonate);
  const expectedY = metabolic ? y(state.expected ?? state.paCO2) : y(state.paCO2);
  return <svg viewBox="0 0 900 480" className="clinical-svg" role="img" aria-label={`산염기 지도: pH ${state.pH.toFixed(2)}, PaCO2 ${state.paCO2.toFixed(1)}, HCO3 ${state.bicarbonate.toFixed(1)}. ${compensation.label}`}>
    <defs><clipPath id={clipId}><rect x="60" y="85" width="485" height="310" /></clipPath></defs>
    <text x="30" y="32" className="diagram-title">ABG · 일차 변화와 보상</text><text x="60" y="62" className="axis-label">PaCO₂ (mmHg · 로그 눈금)</text>
    <rect x="60" y="85" width="485" height="310" rx="4" fill="white" stroke="#cbd5e1"/>
    {[10,20,40,60,80,120,160].map(v => <g key={v}><path d={`M60 ${y(v)}H545`} stroke="#e2e8f0"/><text x="50" y={y(v)+4} textAnchor="end" className="axis-label">{v}</text></g>)}
    {[8,16,24,32,40].map(v => <g key={v}><path d={`M${x(v)} 85V395`} stroke="#e2e8f0"/><text x={x(v)} y="416" textAnchor="middle" className="axis-label">{v}</text></g>)}
    {[7.1,7.2,7.3,7.4,7.5,7.6].map(ph => {
      const points = Array.from({length:65},(_,i)=>{const h=8+i*.5;return `${x(h)},${y(h/(.03*10**(ph-6.1)))}`;}).join(" ");
      return <g key={ph}><polyline clipPath={`url(#${clipId})`} points={points} fill="none" stroke={ph===7.4?"#0f766e":ph<7.4?"#e6a2a2":"#b6abdf"} strokeWidth={ph===7.4?2:1}/><text x="550" y={y(40/(.03*10**(ph-6.1)))+4} fontSize="11">{ph.toFixed(1)}</text></g>;
    })}
    <text x="550" y="75" fontSize="11">pH</text><text x="300" y="449" textAnchor="middle" className="axis-label">HCO₃⁻ (mEq/L)</text>
    <circle cx={x(24)} cy={y(40)} r="5" fill="white" stroke="#64748b" strokeWidth="2"/><text x={x(24)+10} y={y(40)-12} fontSize="12">정상</text>
    {state.expected !== null && compensation.low !== null && compensation.high !== null ? <g clipPath={`url(#${clipId})`}>
      <path d={`M${x(state.bicarbonate)} ${y(state.paCO2)}L${expectedX} ${expectedY}`} stroke="#0f766e" strokeDasharray="5 4" strokeWidth="2"/>
      {metabolic ? <rect x={expectedX-8} y={y(compensation.high)} width="16" height={y(compensation.low)-y(compensation.high)} fill="#0f766e35"/> : <rect x={x(compensation.low)} y={expectedY-8} width={x(compensation.high)-x(compensation.low)} height="16" fill="#0f766e35"/>}
      <circle cx={expectedX} cy={expectedY} r="6" fill="white" stroke="#0f766e" strokeWidth="2"/>
    </g> : null}
    <circle cx={x(state.bicarbonate)} cy={y(state.paCO2)} r="8" fill="#c24154" stroke="white" strokeWidth="3"/>
    {!metabolic && state.expected !== null && (state.expected < 8 || state.expected > 40) ? <text x="65" y="102" fontSize="11">예상 HCO₃⁻는 그래프 범위 밖</text> : null}
    <text x={x(state.bicarbonate)+12} y={y(state.paCO2)+19} fontSize="12" fontWeight="700">현재</text>
    <rect x="625" y="55" width="245" height="102" rx="10" fill="#e0f2fe"/><text x="643" y="82" fontSize="13">폐 · CO₂ 배출</text><text x="643" y="118" className="diagram-value">{state.paCO2.toFixed(1)} <tspan fontSize="13">mmHg</tspan></text><text x="643" y="141" fontSize="12">폐포 환기 {state.ventilation.toFixed(0)}%</text>
    <path d="M748 157V180" stroke="#94a3b8" strokeWidth="2"/><rect x="625" y="180" width="245" height="102" rx="10" fill="#fef3c7"/><text x="643" y="206" fontSize="13">대사 · HCO₃⁻</text><text x="643" y="242" className="diagram-value">{state.bicarbonate.toFixed(1)} <tspan fontSize="13">mEq/L</tspan></text><text x="643" y="265" fontSize="12">완충 · 소실 · 신장 적응</text>
    <rect x="625" y="307" width="245" height="123" rx="10" fill="#f1f5f9"/><text x="643" y="334" fontSize="13">음이온차 · Na − Cl − HCO₃</text><text x="643" y="370" className="diagram-value">{gap.gap.toFixed(1)} <tspan fontSize="13">mEq/L</tspan></text><text x="643" y="396" fontSize="12">Albumin 보정 {gap.corrected.toFixed(1)}</text><text x="643" y="417" fontSize="12">{gap.corrected>16?"비측정 음이온 증가 단서":"Cl⁻와 HCO₃⁻ 관계를 비교"}</text>
    <text x="60" y="473" fontSize="11">● 현재 입력　○ 정상 / 예상 보상　청록 띠: 예상 범위 · 시간 경과를 재현하지 않음</text>
  </svg>;
}
