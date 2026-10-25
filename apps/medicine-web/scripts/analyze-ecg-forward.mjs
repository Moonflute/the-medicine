import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { DEFAULT_FORWARD_INPUTS, STANDARD_LEADS, simulateForwardEcg, measureStandardTraces } from "../src/lib/ecg-forward-model.ts";

/** Numerical/visual review of the actual forward solution, not a waveform template. */
export function analyzeForwardRecording(recording) {
  const traces = measureStandardTraces(recording), a = recording.activation;
  const ventricular = recording.mesh.cells.flatMap((cell, i) => ["RV", "LV"].includes(cell.chamber) ? [i] : []);
  const recoveryEnd = Math.max(...ventricular.map(i => recording.recoveryMs[i]));
  const window = (values, start, end) => [...values].map((v, i) => ({ v, t: i * recording.sampleMs })).filter(p => p.t >= start && p.t <= end);
  const extrema = points => ({ max: Math.max(...points.map(p => p.v)), min: Math.min(...points.map(p => p.v)) });
  const leads = Object.fromEntries(STANDARD_LEADS.map(lead => {
    const values = traces[lead].values;
    const p = window(values, a.atrialStart - 10, a.ventricularStart - 20);
    const qrs = window(values, a.ventricularStart - 10, a.ventricularEnd + 25);
    const t = window(values, a.ventricularEnd + 60, recoveryEnd + 60);
    const peak = Math.max(...qrs.map(p => Math.abs(p.v))), active = qrs.filter(p => Math.abs(p.v) >= peak * .05);
    const maxima = qrs.filter((p, i) => i > 0 && i < qrs.length - 1 && p.v > qrs[i - 1].v && p.v >= qrs[i + 1].v && p.v > peak * .08);
    return [lead, { p: extrema(p), qrs: extrema(qrs), t: extrema(t), qrsSpan: active.at(-1).t - active[0].t, peaks: maxima.map(p => ({ t: p.t, v: p.v })) }];
  }));
  const regions = [...new Set(recording.mesh.cells.filter(c => c.chamber !== "node").map(c => c.region))].map(region => {
    const indices = recording.mesh.cells.flatMap((cell, i) => cell.region === region ? [i] : []);
    const times = indices.map(i => recording.activationMs[i]), recovery = indices.map(i => recording.recoveryMs[i]);
    return { region, start: Math.min(...times), end: Math.max(...times), recoveryStart: Math.min(...recovery), recoveryEnd: Math.max(...recovery) };
  });
  return { activation: a, recoveryEnd, leads, regions };
}

export function reviewHtml(recording, report, label) {
  const traces = measureStandardTraces(recording), span = 60000 / recording.inputs.rate;
  const w = 480, h = 190, x = t => 32 + t / span * 430, y = v => 102 - v * 48;
  const tiles = STANDARD_LEADS.map(lead => {
    const d = [...traces[lead].values].flatMap((v, i) => i * recording.sampleMs <= span ? [`${i ? "L" : "M"}${x(i * recording.sampleMs).toFixed(2)},${y(v).toFixed(2)}`] : []).join(" ");
    const grid = Array.from({ length: Math.ceil(span / 40) }, (_, i) => `<line x1="${x(i * 40)}" x2="${x(i * 40)}" y1="25" y2="175" stroke="${i % 5 ? "#f5dddd" : "#e2b8b8"}"/>`).join("");
    const horizontal = [-1.5, -1, -.5, 0, .5, 1, 1.5].map(v => `<line x1="32" x2="462" y1="${y(v)}" y2="${y(v)}" stroke="${v ? "#f3dede" : "#bbb"}"/><text x="26" y="${y(v) + 3}" text-anchor="end" font-size="10">${v}</text>`).join("");
    return `<section><svg viewBox="0 0 ${w} ${h}"><text x="12" y="18" font-weight="bold">${lead}</text>${grid}${horizontal}<path d="${d}" fill="none" stroke="#124e4b" stroke-width="1.7"/></svg></section>`;
  }).join("");
  return `<!doctype html><html lang="ko"><meta charset="utf-8"><title>${label}</title><style>body{font-family:system-ui;margin:20px;background:#f7f9fa;color:#182c36}h1{font-size:20px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}section{background:white;border:1px solid #cfd9dd;border-radius:8px}svg{width:100%;display:block}pre{font-size:12px}</style><h1>${label} · ${recording.inputs.condition} · ${recording.inputs.rate}/min</h1><p>원 계산값 · 모든 유도 공통 scale · 40 ms grid · a.u. (mV 아님)</p><div class="grid">${tiles}</div><details><summary>계산 지표</summary><pre>${JSON.stringify(report, null, 2)}</pre></details></html>`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2), value = (flag, fallback) => args.includes(flag) ? args[args.indexOf(flag) + 1] : fallback;
  const inputs = { ...DEFAULT_FORWARD_INPUTS, condition: value("--condition", "normal"), rate: Number(value("--rate", "70")), recovery: Number(value("--recovery", "100")) };
  const recording = simulateForwardEcg(inputs), report = analyzeForwardRecording(recording);
  console.log(JSON.stringify(report, (_, v) => typeof v === "number" ? Math.round(v * 1000) / 1000 : v, 2));
  if (args.includes("--out")) {
    const directory = resolve(value("--out")), label = value("--label", "ECG forward review");
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, "report.json"), JSON.stringify(report, null, 2));
    await writeFile(resolve(directory, "index.html"), reviewHtml(recording, report, label));
  }
}
