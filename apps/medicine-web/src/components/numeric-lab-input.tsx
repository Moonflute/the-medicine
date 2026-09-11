"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronRight, Info, RotateCcw } from "lucide-react";
import type { DiseaseNote } from "@/lib/webdb";

import { NUMERIC_PANELS, QUALITATIVE, AUTOIMMUNE_QUALITATIVE, CORE_FIELD_IDS, CORE_QUALITATIVE_IDS, VITAL_SIGNS, SOURCE_LINKS, numberAt, classify, buildFindings, resolveDiseases, type NumericField, type SliderRange } from "@/lib/lab-engine";

const SLIDER_RANGES: Record<string, SliderRange> = {
  wbc: { min: 0, max: 100, step: 0.5 }, hemoglobin: { min: 0, max: 25, step: 0.1 }, hemoglobinMale: { min: 0, max: 25, step: 0.1 }, mcv: { min: 40, max: 140, step: 1 }, platelet: { min: 0, max: 1500, step: 10 },
  na: { min: 110, max: 180, step: 1 }, k: { min: 1, max: 10, step: 0.1 }, cl: { min: 70, max: 140, step: 1 }, hco3: { min: 0, max: 50, step: 1 }, ca: { min: 4, max: 16, step: 0.1 }, mg: { min: 0.5, max: 6, step: 0.1 }, phos: { min: 0.5, max: 15, step: 0.1 }, bun: { min: 0, max: 150, step: 1 }, creatinine: { min: 0, max: 15, step: 0.1 }, egfr: { min: 0, max: 150, step: 1 },
  glucose: { min: 20, max: 700, step: 5 }, a1c: { min: 3, max: 16, step: 0.1 }, ast: { min: 0, max: 2000, step: 10 }, alt: { min: 0, max: 2000, step: 10 }, alp: { min: 0, max: 1500, step: 10 }, bilirubin: { min: 0, max: 30, step: 0.1 }, albumin: { min: 1, max: 6, step: 0.1 },
  crp: { min: 0, max: 300, step: 1 }, pct: { min: 0, max: 100, step: 0.1 }, lactate: { min: 0, max: 20, step: 0.1 }, inr: { min: 0.5, max: 10, step: 0.1 }, ddimer: { min: 0, max: 20, step: 0.1 }, tsh: { min: 0, max: 50, step: 0.1 }, freeT4: { min: 0.1, max: 5, step: 0.1 },
  ph: { min: 6.8, max: 7.8, step: 0.01 }, paco2: { min: 10, max: 120, step: 1 }, abgHco3: { min: 0, max: 50, step: 1 }, pao2: { min: 20, max: 500, step: 5 },
  cortisol8am: { min: 0, max: 60, step: 0.5 }, acth8am: { min: 0, max: 300, step: 1 }, pthIntact: { min: 0, max: 300, step: 1 }, prolactin: { min: 0, max: 300, step: 1 }, fsh: { min: 0, max: 200, step: 1 }, lh: { min: 0, max: 200, step: 1 }, estradiol: { min: 0, max: 1000, step: 10 }, testosterone: { min: 0, max: 1500, step: 10 }, betaHcg: { min: 0, max: 100000, step: 100 }, igf1Xuln: { min: 0, max: 5, step: 0.1 }, vitaminD25oh: { min: 0, max: 150, step: 1 }, totalIge: { min: 0, max: 2000, step: 10 }, aldosterone: { min: 0, max: 100, step: 1 }, reninPra: { min: 0, max: 30, step: 0.1 }, postDexCortisol: { min: 0, max: 20, step: 0.1 }, rheumatoidFactor: { min: 0, max: 1000, step: 5 }, antiCcp: { min: 0, max: 500, step: 5 }, anaTiter: { min: 0, max: 1280, step: 40 }, antiDsDnaXuln: { min: 0, max: 10, step: 0.1 }, c3: { min: 0, max: 250, step: 1 }, c4: { min: 0, max: 100, step: 1 }, pr3AncaXuln: { min: 0, max: 10, step: 0.1 }, mpoAncaXuln: { min: 0, max: 10, step: 0.1 },
  urineSg: { min: 1, max: 1.06, step: 0.001 }, urinePh: { min: 4, max: 10, step: 0.1 }, urineRbc: { min: 0, max: 100, step: 1 }, urineWbc: { min: 0, max: 100, step: 1 }, uacr: { min: 0, max: 3000, step: 10 },
  totalCholesterol: { min: 50, max: 500, step: 5 }, ldl: { min: 0, max: 400, step: 5 }, hdl: { min: 0, max: 150, step: 1 }, triglyceride: { min: 0, max: 1500, step: 10 }, lipaseXuln: { min: 0, max: 20, step: 0.1 }, afp: { min: 0, max: 1000, step: 5 }, uricAcid: { min: 0, max: 20, step: 0.1 },
  ferritin: { min: 0, max: 2000, step: 10 }, transferrinSat: { min: 0, max: 100, step: 1 }, vitaminB12: { min: 0, max: 2000, step: 10 }, folate: { min: 0, max: 50, step: 0.1 }, reticulocytePct: { min: 0, max: 20, step: 0.1 }, ldh: { min: 0, max: 3000, step: 10 }, haptoglobin: { min: 0, max: 400, step: 5 }, absoluteLymphocyteCount: { min: 0, max: 20000, step: 100 }, eosinophilPct: { min: 0, max: 100, step: 1 }, adamts13Activity: { min: 0, max: 100, step: 1 },
  troponinXuln: { min: 0, max: 100, step: 0.1 }, ckXuln: { min: 0, max: 100, step: 0.1 }, betaHydroxybutyrate: { min: 0, max: 15, step: 0.1 }, serumOsmolality: { min: 240, max: 400, step: 1 }, upcr: { min: 0, max: 15, step: 0.1 }, fena: { min: 0, max: 10, step: 0.1 }, urineOsmolality: { min: 0, max: 1200, step: 10 }, urineSodium: { min: 0, max: 250, step: 1 }, feUrea: { min: 0, max: 100, step: 1 },
  csfWbc: { min: 0, max: 10000, step: 10 }, csfNeutrophilPct: { min: 0, max: 100, step: 1 }, csfProtein: { min: 0, max: 1000, step: 5 }, csfGlucose: { min: 0, max: 300, step: 1 }, csfLactate: { min: 0, max: 20, step: 0.1 }, balEosinophilPct: { min: 0, max: 100, step: 1 }, balLymphocytePct: { min: 0, max: 100, step: 1 }, balCd4Cd8Ratio: { min: 0, max: 10, step: 0.1 }, sputumEosinophilPct: { min: 0, max: 100, step: 1 },
  saag: { min: 0, max: 3, step: 0.1 }, asciticPmn: { min: 0, max: 5000, step: 10 }, asciticTriglyceride: { min: 0, max: 1000, step: 10 }, pleuralTriglyceride: { min: 0, max: 1000, step: 10 }, pleuralPh: { min: 6.8, max: 7.8, step: 0.01 }, pleuralGlucose: { min: 0, max: 300, step: 1 }, pleuralAda: { min: 0, max: 150, step: 1 }, pleuralProteinRatio: { min: 0, max: 2, step: 0.01 }, pleuralLdhRatio: { min: 0, max: 3, step: 0.01 }, pleuralLdhUlnRatio: { min: 0, max: 5, step: 0.01 },
  ceruloplasmin: { min: 0, max: 100, step: 1 }, urineCopper24h: { min: 0, max: 500, step: 5 }, hepaticCopper: { min: 0, max: 1000, step: 10 }, alpBilirubinRatio: { min: 0, max: 20, step: 0.1 }, anc: { min: 0, max: 20000, step: 100 }, fibrinogen: { min: 0, max: 1000, step: 10 }, apttRatio: { min: 0, max: 5, step: 0.1 },
  sbp: { min: 50, max: 250, step: 1 }, dbp: { min: 30, max: 160, step: 1 }, heartRate: { min: 20, max: 240, step: 1 }, respiratoryRate: { min: 4, max: 60, step: 1 }, temperature: { min: 32, max: 43, step: 0.1 },
};
function sliderConfig(field: NumericField) {
  const configured = SLIDER_RANGES[field.id];
  if (configured) return configured;
  const low = field.low;
  const high = field.high;
  let min: number;
  let max: number;

  if (low !== undefined && high !== undefined) {
    const span = Math.max(high - low, 0.01);
    min = Math.max(0, low - span * 2);
    max = high + span * 2;
  } else if (high !== undefined) {
    min = 0;
    max = Math.max(high * 5, high + 10);
  } else if (low !== undefined) {
    min = Math.max(0, low * 0.2);
    max = low * 2.5;
  } else {
    min = 0;
    max = 100;
  }

  const magnitude = max - min;
  const step = magnitude <= 1 ? 0.01 : magnitude <= 10 ? 0.1 : magnitude <= 100 ? 1 : magnitude <= 500 ? 5 : 10;
  return { min, max, step };
}

function sliderDefault(field: NumericField, min: number, max: number) {
  if (field.low !== undefined && field.high !== undefined) return (field.low + field.high) / 2;
  if (field.high !== undefined) return field.high / 2;
  if (field.low !== undefined) return field.low;
  return (min + max) / 2;
}

function formatSliderValue(value: number, step: number) {
  const digits = step < 0.1 ? 2 : step < 1 ? 1 : 0;
  return value.toFixed(digits).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function SliderFieldControl({ field, rawValue, onChange }: { field: NumericField; rawValue?: string; onChange: (value: string) => void }) {
  const { min, max, step } = sliderConfig(field);
  const hasValue = rawValue !== undefined && rawValue !== "";
  const parsed = Number(rawValue);
  const value = Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : sliderDefault(field, min, max);
  const formatted = formatSliderValue(value, step);

  return (
    <span className="mt-2 block">
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(event.target.value)} className="h-2 w-full cursor-pointer accent-teal-600" aria-label={`${field.label} slider`} />
      <span className="mt-1 flex items-center justify-between gap-1 text-[11px] text-slate-500"><strong className="text-sm text-slate-800">{hasValue ? formatted : "\uC120\uD0DD \uC804"}</strong><span className="shrink-0">{formatSliderValue(min, step)}–{formatSliderValue(max, step)} {field.unit}</span></span>
    </span>
  );
}
function VitalSignCard({ vital, values, inputMode, onChange }: { vital: typeof VITAL_SIGNS[number]; values: Record<string, string>; inputMode: "direct" | "slider"; onChange: (key: string, value: string) => void }) {
  return <article className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"><div className="mb-2 flex items-baseline justify-between gap-2"><h2 className="font-bold text-slate-950">{vital.label}</h2><span className="text-[11px] text-slate-500">{vital.note}</span></div><div className={`grid gap-2 ${vital.fields.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>{vital.fields.map((field) => { const numericValue = numberAt(values, field.id); const status = numericValue === undefined ? undefined : classify(field, numericValue); return <label key={field.id} className="min-w-0 rounded-lg bg-slate-50 px-2.5 py-2"><span className="flex items-center justify-between gap-1 text-xs font-semibold text-slate-800"><span>{field.label}</span>{status ? <StatusPill status={status} /> : null}</span>{inputMode === "direct" ? <span className="mt-1 flex min-w-0 items-center gap-1"><input inputMode="decimal" type="number" step="any" value={values[field.id] ?? ""} onChange={(event) => onChange(field.id, event.target.value)} className="min-w-0 flex-1 rounded border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-950 outline-none focus:border-teal-500" placeholder="입력" /><span className="shrink-0 text-[11px] text-slate-500">{field.unit}</span></span> : <SliderFieldControl field={field} rawValue={values[field.id]} onChange={(value) => onChange(field.id, value)} />}<span className="mt-1 block text-[11px] text-slate-500">{field.low}–{field.high} {field.unit}</span></label>; })}</div></article>;
}
export function NumericLabInput({ diseases }: { diseases: DiseaseNote[] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [inputMode, setInputMode] = useState<"direct" | "slider">("direct");
  const [itemScope, setItemScope] = useState<"core" | "detail">("core");
  const [showResetNotice, setShowResetNotice] = useState(false);
  const findings = useMemo(() => buildFindings(values), [values]);
  const setValue = (key: string, value: string) => { setShowResetNotice(false); setValues((previous) => ({ ...previous, [key]: value })); };
  const resetValues = () => { setValues({}); setShowResetNotice(true); };

  return <div className="space-y-6">
    <header className="rounded-xl border border-teal-200 bg-gradient-to-br from-white via-teal-50/70 to-cyan-50 p-5 shadow-sm sm:p-7"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Clinical interpretation aid</div><h1 className="mt-2 text-3xl font-bold text-slate-950">수치입력</h1><p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">혈액·소변·ABGA 값을 함께 입력해 개별 참고범위와 조합 패턴을 빠르게 봅니다. 결과는 확정 진단이나 처방 지시가 아니며, 실제 검사실 참고범위·연령·성별·임신·검체 상태·시간 추세를 우선합니다.</p><div className="mt-4 flex flex-wrap gap-2"><button type="button" onClick={resetValues} className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"><RotateCcw className="h-4 w-4" />입력 초기화</button>{showResetNotice ? <span className="inline-flex items-center rounded-lg bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">입력값을 초기화했습니다.</span> : null}<span className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900"><Info className="h-4 w-4" />위험 소견·증상은 도구 결과와 무관하게 즉시 임상 평가</span></div><div className="mt-4 inline-flex rounded-lg border border-teal-200 bg-white p-1" aria-label="수치 입력 방식">
      <button type="button" onClick={() => setInputMode("direct")} className={`rounded-md px-3 py-2 text-sm font-semibold ${inputMode === "direct" ? "bg-teal-600 text-white" : "text-slate-600"}`}>직접 입력</button>
      <button type="button" onClick={() => setInputMode("slider")} className={`rounded-md px-3 py-2 text-sm font-semibold ${inputMode === "slider" ? "bg-teal-600 text-white" : "text-slate-600"}`}>슬라이더</button>
    </div></header><div className="mt-3 inline-flex rounded-lg border border-slate-200 bg-white p-1" role="tablist" aria-label="표시 항목 범위">
      <button type="button" role="tab" aria-selected={itemScope === "core"} onClick={() => setItemScope("core")} className={`rounded-md px-3 py-2 text-sm font-semibold ${itemScope === "core" ? "bg-slate-800 text-white" : "text-slate-600"}`}>핵심 항목</button>
      <button type="button" role="tab" aria-selected={itemScope === "detail"} onClick={() => setItemScope("detail")} className={`rounded-md px-3 py-2 text-sm font-semibold ${itemScope === "detail" ? "bg-slate-800 text-white" : "text-slate-600"}`}>세부 항목</button>
    </div>

    <section aria-label="성인 활력징후 입력" className="rounded-xl border border-teal-200 bg-teal-50/60 p-4 shadow-sm sm:p-5"><div className="flex flex-wrap items-baseline justify-between gap-2"><div><div className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Vital signs</div><h2 className="mt-1 text-xl font-bold text-slate-950">활력징후</h2></div><p className="text-xs text-slate-600">성인 안정 시 빠른 참고범위 · 연령·임신·기저 상태와 추세를 우선</p></div><div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{VITAL_SIGNS.map((vital) => <VitalSignCard key={vital.id} vital={vital} values={values} inputMode={inputMode} onChange={setValue} />)}</div></section>
<section className="grid gap-4 xl:grid-cols-2">{NUMERIC_PANELS.filter((panel) => itemScope === "detail" || panel.fields.some((field) => CORE_FIELD_IDS.has(field.id))).map((panel) => <article key={panel.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div className="mb-3"><h2 className="font-bold text-slate-950">{panel.title}</h2><p className="mt-1 text-xs text-slate-500">{panel.description}</p></div><div className="grid grid-cols-2 gap-2">{panel.fields.filter((field) => itemScope === "detail" || CORE_FIELD_IDS.has(field.id)).map((field) => { const value = numberAt(values, field.id); const status = value === undefined ? undefined : classify(field, value); return <label key={field.id} className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 sm:px-3"><span className="flex min-w-0 items-center justify-between gap-1.5 text-xs font-semibold text-slate-800 sm:text-sm"><span className="min-w-0 leading-4">{field.label}</span>{status ? <StatusPill status={status} /> : null}</span>{inputMode === "direct" ? <span className="mt-1 flex min-w-0 items-center gap-1.5"><input inputMode="decimal" type="number" step="any" value={values[field.id] ?? ""} onChange={(event) => setValue(field.id, event.target.value)} className="min-w-0 flex-1 rounded border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-950 outline-none focus:border-teal-500" placeholder="입력" /><span className="shrink-0 text-[11px] text-slate-500 sm:text-xs">{field.unit}</span></span> : <SliderFieldControl field={field} rawValue={values[field.id]} onChange={(value) => setValue(field.id, value)} />}<span className="mt-1 block text-[11px] text-slate-500">{field.low !== undefined || field.high !== undefined ? `${field.low ?? ""}${field.low !== undefined && field.high !== undefined ? "–" : ""}${field.high ?? ""} ${field.unit}` : field.note}</span></label>; })}</div></article>)}</section>

    {itemScope === "detail" ? <section className="rounded-xl border border-violet-200 bg-violet-50/40 p-4 shadow-sm"><h2 className="font-bold text-slate-950">자가항체 정성 결과</h2><p className="mt-1 text-xs text-slate-600">검사실의 양성/음성 판정을 입력합니다. 단독 양성은 진단이 아니며 역가·pattern·증상과 함께 해석합니다.</p><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{AUTOIMMUNE_QUALITATIVE.map((field) => <label key={field.id} className="rounded-lg border border-violet-100 bg-white px-3 py-2 text-sm font-semibold text-slate-800"><span className="min-w-0 leading-4">{field.label}</span><select value={values[field.id] ?? "negative"} onChange={(event) => setValue(field.id, event.target.value)} className="mt-2 w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-sm font-normal text-slate-800 outline-none focus:border-teal-500"><option value="negative">negative</option><option value="trace">indeterminate</option><option value="positive">positive</option></select></label>)}</div></section> : null}

    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><h2 className="font-bold text-slate-950">요 dipstick</h2><p className="mt-1 text-xs text-slate-500">음성/trace/양성은 검사실·strip 판정과 검체 조건을 우선합니다.</p><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{QUALITATIVE.filter((field) => itemScope === "detail" || CORE_QUALITATIVE_IDS.has(field.id)).map((field) => <label key={field.id} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800"><span className="min-w-0 leading-4">{field.label}</span><select value={values[field.id] ?? "negative"} onChange={(event) => setValue(field.id, event.target.value)} className="mt-2 w-full rounded border border-slate-300 bg-white px-2 py-1.5 text-sm font-normal text-slate-800 outline-none focus:border-teal-500"><option value="negative">negative</option><option value="trace">trace</option><option value="positive">positive</option></select></label>)}</div></section>

    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between gap-3"><div><h2 className="text-xl font-bold text-slate-950">통합 해석</h2><p className="mt-1 text-sm text-slate-600">입력된 조합에서 우선 확인할 패턴입니다. 여러 패턴이 함께 뜰 수 있습니다.</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">{findings.length}개</span></div>{findings.length === 0 ? <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">수치를 입력하면 이상값과 조합 패턴이 표시됩니다. ABGA는 pH·PaCO₂·HCO₃⁻를 함께 입력하면 산염기 해석을 시작합니다.</div> : <div className="mt-4 space-y-3">{findings.map((finding) => <article key={`${finding.title}-${finding.summary}`} className={`rounded-lg border p-4 ${finding.level === "urgent" ? "border-rose-200 bg-rose-50" : finding.level === "attention" ? "border-amber-200 bg-amber-50" : "border-teal-200 bg-teal-50"}`}><div className="flex items-start gap-2"><AlertTriangle className={`mt-0.5 h-4 w-4 shrink-0 ${finding.level === "urgent" ? "text-rose-700" : finding.level === "attention" ? "text-amber-700" : "text-teal-700"}`} /><div><h3 className="font-bold text-slate-950">{finding.title}</h3><p className="mt-1 text-sm leading-6 text-slate-700">{finding.summary}</p><p className="mt-2 text-sm font-medium text-slate-800">다음 확인: {finding.next}</p><div className="mt-3 flex flex-wrap gap-2">{resolveDiseases(diseases, finding.diseases).map((disease) => <Link key={disease.slug} href={`/disease/${disease.slug}`} className="inline-flex items-center gap-1 rounded-full border border-white bg-white/80 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-800">{disease.title}<ChevronRight className="h-3.5 w-3.5" /></Link>)}</div></div></div></article>)}</div>}</section>

    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">근거 · 적용 범위</h2><ul className="mt-3 space-y-2 text-sm text-slate-600">{SOURCE_LINKS.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer" className="font-medium text-teal-700 hover:underline">{label}</a></li>)}</ul></section>
  </div>;
}

function StatusPill({ status }: { status: "low" | "high" | "normal" | "unknown" }) { const styles = status === "unknown" ? "bg-slate-100 text-slate-600" : status === "low" ? "bg-sky-100 text-sky-800" : status === "high" ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"; return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${styles}`}>{status === "normal" ? <CheckCircle2 className="h-3 w-3" /> : null}{status === "unknown" ? "기준 없음" : status.toUpperCase()}</span>; }
