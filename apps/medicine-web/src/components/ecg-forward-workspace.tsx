"use client";

import Link from "next/link";
import { Pause, Play, RotateCcw, Save, ArrowLeftRight, X, Info } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { EcgForwardScene } from "@/components/ecg-forward-scene";
import { EcgForwardTrace } from "@/components/ecg-forward-trace";
import { HEART_PARTS, partSnapshot, recordingFrame, type HeartPart } from "@/lib/ecg-forward-display";
import { DEFAULT_PLACEMENT, dot3, electrodePosition, FORWARD_CONDITIONS, leadFieldAtCenter, leadPreset, measureForwardTrace, type Electrode, type ForwardInputs, type ForwardRecording, type LeadPlacement } from "@/lib/ecg-forward-model";

type Props = { recording: ForwardRecording; inputs: ForwardInputs; onInputs: (inputs: ForwardInputs) => void; busy: boolean };
type Comparison = { inputs: ForwardInputs; placement: LeadPlacement; values: Float32Array; label: string };
const STEPS: HeartPart[] = ["SA node", "RA", "AV node", "His", "RV Purkinje", "LV Purkinje"];

export function EcgForwardWorkspace({ recording, inputs, onInputs, busy }: Props) {
  const [placement, setPlacement] = useState<LeadPlacement>(DEFAULT_PLACEMENT), [selected, setSelected] = useState<"positive" | "negative">("positive"), [preset, setPreset] = useState("II");
  const [part, setPart] = useState<HeartPart>("His"), [panel, setPanel] = useState<"structure" | "electrodes" | "model">("structure");
  const [mobileView, setMobileView] = useState<"heart" | "torso">("heart");
  const initialTime = Math.round(((recording.activation.ventricularStart ?? 200) + 10) / recording.sampleMs) * recording.sampleMs;
  const [timeMs, setTimeMs] = useState(initialTime), [playing, setPlaying] = useState(false), [speed, setSpeed] = useState(.25);
  const [yaw, setYaw] = useState(0), [showCurrents, setShowCurrents] = useState(true), [showApproximation, setShowApproximation] = useState(false), [gain, setGain] = useState(1);
  const [comparison, setComparison] = useState<Comparison | null>(null);
  const clock = useRef(initialTime), guide = useRef<HTMLDialogElement>(null);
  const trace = useMemo(() => measureForwardTrace(recording, placement), [recording, placement]);
  const frame = recordingFrame(recording, timeMs), snapshot = partSnapshot(recording, part, frame), definition = HEART_PARTS.find(item => item.id === part)!;
  const field = leadFieldAtCenter(placement), p = recording.dipole.subarray(frame * 3, frame * 3 + 3), length = Math.hypot(...p) * Math.hypot(...field);
  const angle = length > 1e-8 ? Math.acos(Math.max(-1, Math.min(1, dot3([p[0], p[1], p[2]], field) / length))) * 180 / Math.PI : null;
  const position = electrodePosition(placement[selected]);
  useEffect(() => {
    if (!playing) return;
    let animation = 0, previous = 0, lastDraw = 0;
    const step = (now: number) => {
      if (previous && !document.hidden) clock.current = (clock.current + Math.min(now - previous, 100) * speed) % recording.durationMs;
      previous = now;
      if (now - lastDraw >= 33) { setTimeMs(clock.current); lastDraw = now; }
      animation = requestAnimationFrame(step);
    };
    animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [playing, speed, recording.durationMs]);
  const seek = (time: number) => { setPlaying(false); clock.current = time; setTimeMs(time); };
  const move = (electrode: Electrode) => { setPlacement(value => ({ ...value, [selected]: electrode })); setPreset(""); };
  const selectPart = (value: HeartPart) => { setPart(value); setPanel("structure"); };
  const jump = (value: HeartPart) => { selectPart(value); const onset = partSnapshot(recording, value, frame).onset; if (onset !== null) seek(Math.round(onset / recording.sampleMs) * recording.sampleMs); };
  const save = () => setComparison({ inputs: { ...inputs }, placement: structuredClone(placement), values: trace.values.slice(), label: `${FORWARD_CONDITIONS.find(item => item.id === inputs.condition)?.label} · ${inputs.rate}/min · ${preset || "사용자 전극"}` });

  return <div className="ecg-workspace" data-mobile-view={mobileView}>
    <div className="ecg-workspace-main" inert={busy}>
      <section className="ecg-scene-card">
        <div className="ecg-scene-toolbar">
          <div className="ecg-mobile-view" role="group" aria-label="모델 화면 선택"><button type="button" aria-pressed={mobileView === "heart"} onClick={() => setMobileView("heart")}>심장</button><button type="button" aria-pressed={mobileView === "torso"} onClick={() => setMobileView("torso")}>전극</button></div>
          <label><input type="checkbox" checked={showCurrents} onChange={event => setShowCurrents(event.target.checked)}/>전류 화살표</label>
          <label className="ecg-view-control">전극 지도 <select aria-label="흉곽 보기" value={yaw} onChange={event => setYaw(Number(event.target.value))}><option value={0}>Anterior</option><option value={45}>Oblique</option><option value={90}>Lateral</option><option value={180}>Posterior</option></select></label>
          <button type="button" className="ecg-icon-button" aria-label="도해와 계산 설명" onClick={() => guide.current?.showModal()}><Info size={17}/><span>설명</span></button>
        </div>
        <EcgForwardScene recording={recording} placement={placement} timeMs={timeMs} yaw={yaw} selected={selected} showCurrents={showCurrents} onMove={move} onSelect={value => { setSelected(value); setPanel("electrodes"); }} part={part} onPart={selectPart}/>
        <div className="ecg-forward-playback">
          <button className="simulation-primary" type="button" aria-label={playing ? "전기활동 일시정지" : "전기활동 재생"} onClick={() => setPlaying(value => !value)}>{playing ? <Pause size={15}/> : <Play size={15}/>}<span>{playing ? "정지" : "재생"}</span></button>
          <button className="simulation-button ecg-reset-time" type="button" onClick={() => seek(0)} aria-label="계산 기록 처음으로"><RotateCcw size={15}/></button>
          <select aria-label="전기활동 재생 속도" value={speed} onChange={event => setSpeed(Number(event.target.value))}>{[.1, .25, .5, 1].map(value => <option key={value} value={value}>{value}×</option>)}</select>
          <input aria-label="관찰 시각" type="range" min={0} max={recording.durationMs} step={recording.sampleMs} value={timeMs} onChange={event => seek(Number(event.target.value))}/>
          <output>{Math.round(timeMs)} <small>ms</small></output>
        </div>
      </section>
      <section className="ecg-signal-card" aria-label="계산된 ECG">
        <header className="ecg-signal-header"><h2>측정 ECG <small>{preset ? `Lead ${preset}` : "사용자 전극"} · a.u.</small></h2><label>감도 <select aria-label="ECG 화면 감도" value={gain} onChange={event => setGain(Number(event.target.value))}>{[.1, .25, .5, 1, 2].map(value => <option key={value} value={value}>{value}×</option>)}</select></label><button type="button" className="ecg-icon-button" onClick={save} title="현재 조건과 파형 저장"><Save size={15}/><span>비교 저장</span></button></header>
        <EcgForwardTrace recording={recording} trace={trace} timeMs={timeMs} gain={gain} showApproximation={showApproximation} baseline={comparison?.values} onSeek={seek}/>
        <div className="ecg-signal-values"><span>φ(+) <b>{trace.positive[frame].toFixed(3)}</b></span><span>φ(ref) <b>{trace.reference[frame].toFixed(3)}</b></span><span>Δφ <b>{trace.values[frame].toFixed(3)}</b></span><span>벡터 각도 <b>{angle === null ? "—" : angle.toFixed(0) + "°"}</b></span><small>상대 전압 · mV 아님</small></div>
      </section>
    </div>

    <aside className="ecg-inspector" aria-label="심장 모델 조작과 설명">
      <div className="ecg-inspector-tabs" role="group" aria-label="조작 패널 선택">{([['structure', '부위'], ['electrodes', '전극'], ['model', '모델']] as const).map(([value, label]) => <button type="button" key={value} aria-pressed={panel === value} onClick={() => setPanel(value)}>{label}</button>)}</div>
      <div className="ecg-inspector-content">
        {panel === "structure" ? <>
          <label className="ecg-field">선택한 구조<select aria-label="심장 구조 선택" value={part} onChange={event => selectPart(event.target.value as HeartPart)}>{HEART_PARTS.map(item => <option key={item.id} value={item.id}>{item.id} · {item.name}</option>)}</select></label>
          <section className="ecg-part-detail"><span className="ecg-part-code">{part}</span><h3>{definition.name}</h3><p>{definition.description}</p></section>
          <div className="ecg-part-values"><div><span>현재 최대 Vm</span><b>{snapshot.peak.toFixed(2)}</b></div><div><span>활성 구역 / 전체</span><b>{snapshot.active} / {snapshot.total}</b></div></div>
          <button className="ecg-onset-button" type="button" disabled={snapshot.onset === null} onClick={() => jump(part)}>첫 활성 시점으로 <b>{snapshot.onset === null ? "미활성" : Math.round(snapshot.onset) + " ms"} →</b></button>
          <section className="ecg-sequence"><h3>흥분 전달 따라가기</h3><select className="ecg-sequence-select" aria-label="흥분 전달 단계로 이동" value={STEPS.includes(part) ? part : ""} onChange={event => jump(event.target.value as HeartPart)}><option value="" disabled>활성 시점 선택</option>{STEPS.map((step, index) => <option key={step} value={step} disabled={partSnapshot(recording, step, frame).onset === null}>{index + 1}. {step === "RA" ? "Atrial myocardium" : step}</option>)}</select><div>{STEPS.map((step, index) => <button type="button" key={step} aria-pressed={part === step} disabled={partSnapshot(recording, step, frame).onset === null} onClick={() => jump(step)}><span>{index + 1}</span>{step === "RA" ? "Atrial myocardium" : step}</button>)}</div><p>누르면 계산된 첫 활성 시각으로 이동합니다. 차단·RV 자극에서는 순서가 달라질 수 있습니다.</p></section>
        </> : panel === "electrodes" ? <>
          <label className="ecg-field">전극 배치<select aria-label="전극 위치 예시" value={preset} onChange={event => { setPlacement(leadPreset(event.target.value)); setPreset(event.target.value); setSelected("positive"); }}><option value="" disabled>사용자 위치</option>{["I", "II", "III", "V1", "V2", "V3", "V4", "V5", "V6"].map(value => <option key={value} value={value}>Lead {value}</option>)}</select></label>
          <label className="ecg-field">기준 전위<select aria-label="기준 전위" value={placement.reference} onChange={event => { setPlacement(value => ({ ...value, reference: event.target.value as LeadPlacement["reference"] })); setSelected("positive"); setPreset(""); }}><option value="bipolar">이동 가능한 − 전극</option><option value="wilson">Wilson central terminal</option></select></label>
          <div className="ecg-electrode-buttons"><button type="button" aria-pressed={selected === "positive"} onClick={() => setSelected("positive")}>＋ 전극</button>{placement.reference === "bipolar" ? <><button type="button" aria-pressed={selected === "negative"} onClick={() => setSelected("negative")}>− 전극</button><button type="button" aria-label="전극 극성 교환" onClick={() => { setPlacement(value => ({ ...value, positive: value.negative, negative: value.positive })); setPreset(""); }}><ArrowLeftRight size={17}/></button></> : null}</div>
          <p className="ecg-control-hint">지도의 전극을 끌거나 표면을 누르세요. 지도에 초점을 둔 뒤 방향키로도 옮길 수 있습니다.</p>
          <label className="ecg-range-label"><span>둘레 각도 <b>{placement[selected].longitude.toFixed(0)}°</b></span><input aria-label="전극 둘레 각도" type="range" min={-180} max={180} step={1} value={placement[selected].longitude} onChange={event => move({ ...placement[selected], longitude: Number(event.target.value) })}/></label>
          <label className="ecg-range-label"><span>위아래 각도 <b>{placement[selected].latitude.toFixed(0)}°</b></span><input aria-label="전극 위아래 각도" type="range" min={-80} max={80} step={1} value={placement[selected].latitude} onChange={event => move({ ...placement[selected], latitude: Number(event.target.value) })}/></label>
          <p className="ecg-control-hint">0°: 앞 · ±180°: 뒤<br/>모델 좌표(cm): {position.map(value => value.toFixed(1)).join(" / ")}</p>
          {placement.reference === "wilson" ? <p className="ecg-control-hint">회색 RA·LA·LL 전위의 평균을 뺍니다. Wilson reference는 무전위 지점이 아닙니다.</p> : null}
          <button className="ecg-onset-button" type="button" onClick={() => { setPlacement(DEFAULT_PLACEMENT); setSelected("positive"); setPreset("II"); }}>전극 배치 초기화</button>
        </> : <>
          <label className="ecg-range-label"><span>{inputs.condition === "rv-pacing" ? "RV 자극" : "SA 자극"} 빈도 <b>{inputs.rate}/min</b></span><input aria-label="심장 자극 빈도" type="range" min={50} max={110} step={1} value={inputs.rate} onChange={event => onInputs({ ...inputs, rate: Number(event.target.value) })}/></label>
          <label className="ecg-range-label"><span>Ventricular 회복 <b>{inputs.recovery}%</b></span><input aria-label="Ventricular 회복 시상수" type="range" min={70} max={135} step={5} value={inputs.recovery} onChange={event => onInputs({ ...inputs, recovery: Number(event.target.value) })}/></label>
          <p className="ecg-control-hint">{FORWARD_CONDITIONS.find(item => item.id === inputs.condition)?.explanation}</p>
          <label className="ecg-check"><input type="checkbox" checked={showApproximation} onChange={event => setShowApproximation(event.target.checked)}/>단일 dipole 내적 근사 겹치기</label>
          <p className="ecg-control-hint">초록 실선은 분포 전류원으로 계산합니다. 주황 점선은 단일 dipole 근사입니다.</p>
          <section className="ecg-comparison"><h3>파형 비교</h3>{comparison ? <><p>{comparison.label}</p><div><button type="button" onClick={() => { setPlacement(structuredClone(comparison.placement)); onInputs({ ...comparison.inputs }); setPreset(""); }}>조건 복원</button><button type="button" onClick={() => setComparison(null)}>비교 해제</button></div><p>회색 점선 · 같은 배율 · 현재 화면에서만 보관</p></> : <p>ECG 위의 ‘비교 저장’을 누른 뒤 전극이나 전도 조건을 바꿔 보세요.</p>}</section>
          <p className="ecg-control-hint">{recording.mesh.cells.length}개 구역 · {recording.mesh.edges.length}개 연결<br/>활성된 Ventricular 구역 {(recording.activation.ventricularCoverage * 100).toFixed(0)}%</p>
        </>}
      </div>
      <footer className="ecg-inspector-footer"><button type="button" onClick={() => guide.current?.showModal()}>표시 원리 · 모델 한계</button><Link href="/interactive/ecg-arrhythmia/notes#forward-model">이론 노트 ↗</Link></footer>
    </aside>

    <dialog ref={guide} className="ecg-guide-dialog" aria-labelledby="ecg-guide-title"><header><h2 id="ecg-guide-title">이 화면을 읽는 방법</h2><button type="button" aria-label="설명 닫기" onClick={() => guide.current?.close()}><X size={20}/></button></header><div>
      <section><h3>구조와 흥분</h3><p>RA·LA·RV·LV, Septum, Apex를 구분한 전면 개념 절개도입니다. LA처럼 뒤쪽에 있는 구조도 펼쳐 보여 줍니다. 실제 CT나 조직 경계가 아니며, 전극 지도를 회전해도 절개도는 고정됩니다.</p><p>벽의 색은 같은 3D 좌표를 전면에 투영한 구역들의 최대 Vm입니다. 주황은 흥분, 보라는 막전위가 내려가는 회복, 옅은 벽색은 낮은 Vm입니다. 색은 산소포화도가 아닙니다.</p></section>
      <section><h3>연결과 전류는 다릅니다</h3><p>갈색 선은 계산에 실제 쓰는 전도 연결입니다. Atrial myocardium 안에서는 별도의 한 줄짜리 통로가 아니라 주변 구역 간 연결을 통해 흥분이 퍼집니다. 붉은 점선과 ×는 끊어진 연결입니다.</p><p>초록 화살표는 I = g × (Vmₐ − Vmᵦ)로 계산한 구역 간 결합 전류입니다. 부호가 바뀌면 방향이 바뀌고, 굵기는 크기를 나타냅니다. 깊이가 겹치거나 가까운 심근 연결은 큰 실제 전류를 대표로 골라 최대 40개를 표시합니다. 0 전류나 차단 연결에는 화살표를 그리지 않습니다.</p><p>화살표는 혈류, 입자가 움직이는 속도, 흉곽 전체의 전류 유선이 아닙니다. 화살표를 숨겨도 계산은 바뀌지 않습니다.</p></section>
      <section><h3>전극과 ECG</h3><p>흉곽 타원체는 전극 좌표를 정하기 위한 축약 표면입니다. 전극을 옮겨도 심장 상태는 유지되고, 여러 전류원이 만드는 전위차만 다시 계산합니다. Lead 예시는 실제 늑간 부착 위치를 가르치는 해부 도해가 아닙니다.</p><p>전압은 고정 배율의 a.u.이며 mV가 아닙니다. 2.4초 기록의 끝과 처음은 연속 파형이 아닙니다. 임상적으로 검증된 파형이나 진단용 모델이 아닙니다.</p></section>
      <p className="ecg-guide-sources">근거: <a href="https://www.nhlbi.nih.gov/health/heart/heart-beats" target="_blank" rel="noreferrer">NHLBI · 전도계</a> · <a href="https://www.bem.fi/book/06/06.htm" target="_blank" rel="noreferrer">Bioelectromagnetism · 활성과 전류</a></p>
    </div></dialog>
  </div>;
}
