"use client";

import { useState } from "react";
import type { buildQbankAnalytics } from "@/lib/qbank-analytics";

type Stats = ReturnType<typeof buildQbankAnalytics>;
const rate = (n: number, d: number) => d ? Math.round(n / d * 100) : 0;
const colors = ["#0d9488", "#6366f1", "#e11d48", "#cbd5e1"];
const short = (s: string) => s.replace("소아청소년과", "소아청소년").replace("신경과-신경외과", "신경·신경외과");
const caption = "mt-2 text-xs leading-5 text-slate-500";
const card = "surface min-w-0 p-5 sm:p-6";

export function AnalyticsCharts({ stats, onDepartment, onRetry }: { stats: Stats; onDepartment: (key: string) => void; onRetry: (ids: string[]) => void }) {
  const [radarPage, setRadarPage] = useState(0);
  const [selectedBubble, setSelectedBubble] = useState<string | null>(null);
  const studied = stats.groups.filter(g => g.attempted > 0);
  const pages = Math.max(1, Math.ceil(studied.length / 8));
  const page = Math.min(radarPage, pages - 1);
  const axes = studied.slice(page * 8, (page + 1) * 8);
  const point = (i: number, value: number) => {
    const a = i / axes.length * 2 * Math.PI - Math.PI / 2;
    return [190 + Math.cos(a) * 112 * value / 100, 160 + Math.sin(a) * 112 * value / 100];
  };
  const polygon = (value: (i: number) => number) => axes.map((_, i) => point(i, value(i)).join(",")).join(" ");
  const sessions = [...stats.sessions].reverse();
  const trendPoint = (i: number, value: number) => [42 + (sessions.length > 1 ? i / (sessions.length - 1) : 0.5) * 480, 174 - value * 1.4];
  const trend = sessions.map((s, i) => trendPoint(i, rate(s.correct, s.total)).join(",")).join(" ");
  const status = [
    { label: "최근 정답", count: Math.max(0, stats.latestCorrect - stats.recovered), color: colors[0] },
    { label: "오답 후 회복", count: stats.recovered, color: colors[1] },
    { label: "미해결 오답", count: stats.wrong.length, color: colors[2] },
    { label: "미풀이", count: stats.selected.length - stats.attempted, color: colors[3] },
  ];
  const bubble = studied.find(g => g.key === selectedBubble);
  let offset = 0;
  return <div className="space-y-5">
    <div className="grid gap-5 xl:grid-cols-[1.05fr_1fr]">
      <section className={card}>
        <div className="flex flex-wrap items-center justify-between gap-2"><h2 className="font-semibold">분과별 학습 균형</h2><span className="text-xs font-medium text-teal-700">정답률 × 학습 범위</span></div>
        <p className={caption}>풀어본 분과를 기존 분과 순서로 표시합니다. 정답률은 반복 풀이 포함, 학습 범위는 해당 분과의 전체 문항 대비입니다.</p>
        {axes.length >= 3 ? <svg viewBox="0 0 380 325" className="mx-auto mt-3 w-full max-w-md" role="img" aria-label="분과별 정답률과 학습 범위 방사형 차트. 정확한 값은 아래 목록에서 확인할 수 있습니다.">
          {[100, 75, 50, 25].map(v => <g key={v}><polygon points={polygon(() => v)} fill={v === 100 ? "#f8fafc" : "none"} stroke="#e2e8f0" /><text x="194" y={160 - v * 1.12} fontSize="9" fill="#94a3b8">{v}</text></g>)}
          {axes.map((g, i) => { const [x, y] = point(i, 123); return <g key={g.key}><line x1="190" y1="160" x2={point(i, 100)[0]} y2={point(i, 100)[1]} stroke="#e2e8f0" /><text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#475569">{short(g.key)}</text></g>; })}
          <polygon points={polygon(i => rate(axes[i].attempted, axes[i].total))} fill="#6366f120" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 3" />
          <polygon points={polygon(i => rate(axes[i].correct, axes[i].attempts))} fill="#0d948825" stroke="#0d9488" strokeWidth="2" />
          {axes.map((g, i) => <circle key={g.key} cx={point(i, rate(g.correct, g.attempts))[0]} cy={point(i, rate(g.correct, g.attempts))[1]} r="3" fill="#0d9488"><title>{g.key}: 정답률 {rate(g.correct, g.attempts)}%, 학습 범위 {rate(g.attempted, g.total)}%, 학습 {g.attempted}문항</title></circle>)}
        </svg> : <div className="my-5 rounded-xl bg-slate-50 p-6 text-sm leading-6 text-slate-500">방사형 비교는 3개 이상 분과를 풀면 표시됩니다. 현재 {studied.length}개 분과를 학습했습니다.</div>}
        <div className="flex justify-center gap-4 text-xs"><span className="text-teal-700">● 누적 정답률</span><span className="text-indigo-600">┄ 학습 범위</span></div>
        <div className="mt-4 grid grid-cols-2 gap-2">{axes.map(g => <button key={g.key} type="button" onClick={() => onDepartment(g.key)} className="rounded-lg border border-slate-100 p-2 text-left text-xs hover:bg-slate-50"><span className="block truncate font-medium">{g.key}</span><span className="mt-1 block text-slate-500">정답 {rate(g.correct, g.attempts)}% · 범위 {rate(g.attempted, g.total)}%{g.attempted < 5 ? " · 소표본" : ""}</span></button>)}</div>
        {pages > 1 && <div className="mt-4 flex items-center justify-center gap-4 text-xs"><button className="secondary-action disabled:opacity-40" disabled={!page} onClick={() => setRadarPage(page - 1)}>이전 분과</button><span>{page + 1} / {pages}</span><button className="secondary-action disabled:opacity-40" disabled={page + 1 === pages} onClick={() => setRadarPage(page + 1)}>다음 분과</button></div>}
      </section>
      <section className={card}>
        <h2 className="font-semibold">문제 상태 분포</h2><p className={caption}>문항마다 마지막 결과로 분류합니다. 오답 후 회복은 과거에 틀렸지만 마지막에 맞힌 문항입니다.</p>
        <div className="relative mx-auto mt-5 w-56">
          <svg viewBox="0 0 220 220" role="img" aria-label={status.map(s => `${s.label} ${s.count}문항`).join(', ')}><circle cx="110" cy="110" r="82" fill="none" stroke="#f1f5f9" strokeWidth="24" />{status.map(s => { const fraction = stats.selected.length ? s.count / stats.selected.length : 0; const start = offset; offset += fraction; return <circle key={s.label} cx="110" cy="110" r="82" fill="none" stroke={s.color} strokeWidth="24" pathLength="100" strokeDasharray={`${fraction * 100} ${100 - fraction * 100}`} strokeDashoffset={-start * 100} transform="rotate(-90 110 110)"><title>{s.label}: {s.count}문항</title></circle>; })}</svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"><span className="text-xs text-slate-500">학습 범위</span><strong className="mt-1 text-4xl tracking-tight">{stats.selected.length ? rate(stats.attempted, stats.selected.length) + '%' : '—'}</strong><span className="mt-1 text-xs text-slate-400">{stats.attempted.toLocaleString()} / {stats.selected.length.toLocaleString()}</span></div>
        </div>
        <dl className="mt-4 space-y-3">{status.map(s => <div key={s.label} className="flex items-center justify-between text-sm"><dt className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />{s.label}</dt><dd className="tabular-nums"><b>{s.count.toLocaleString()}</b><span className="ml-3 text-xs text-slate-400">{rate(s.count, stats.selected.length)}%</span></dd></div>)}</dl>
        <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-500">오답 경험 문항 중 최근 정답으로 전환</p><p className="mt-1 text-xl font-semibold text-indigo-700">{stats.recovered + stats.wrong.length ? rate(stats.recovered, stats.recovered + stats.wrong.length) + '%' : '—'} <span className="text-xs font-normal text-slate-500">회복 {stats.recovered} / {stats.recovered + stats.wrong.length}문항</span></p></div>
      </section>
    </div>
    <section className={card}>
      <div className="flex flex-wrap justify-between gap-2"><h2 className="font-semibold">최근 성적 추이</h2><span className="text-sm font-semibold text-teal-700">최근 5회 {stats.currentRate === null ? '—' : stats.currentRate + '%'}{stats.change !== null ? ` · ${stats.change >= 0 ? '+' : ''}${stats.change}%p` : ''}</span></div>
      <p className={caption}>선택 범위로만 구성된 완료 세션 최대 10개 · 각 점은 한 세션의 점수입니다. 간격은 시간 간격이 아닌 풀이 순서입니다.</p>
      {sessions.length ? <svg viewBox="0 0 560 220" className="mt-5 w-full" role="img" aria-label="완료 세션별 정답률 추이. 아래 최근 완료 세션에서 상세 점수를 확인할 수 있습니다.">{[0,25,50,75,100].map(v => <g key={v}><line x1="42" x2="522" y1={174-v*1.4} y2={174-v*1.4} stroke="#e2e8f0" strokeDasharray="3 4" /><text x="30" y={178-v*1.4} textAnchor="end" fontSize="10" fill="#94a3b8">{v}%</text></g>)}{sessions.length > 1 && <polygon points={`42,174 ${trend} 522,174`} fill="#0d948810" />}<polyline points={trend} fill="none" stroke="#0d9488" strokeWidth="2.5" />{sessions.map((s,i) => { const [x,y]=trendPoint(i,rate(s.correct,s.total)); return <g key={s.id}><circle cx={x} cy={y} r="4" fill="white" stroke="#0d9488" strokeWidth="2"><title>{new Date(s.completedAt).toLocaleDateString('ko-KR')}: {s.correct}/{s.total} ({rate(s.correct,s.total)}%)</title></circle><text x={x} y="198" textAnchor="middle" fontSize="10" fill="#64748b">{i+1}회</text></g>; })}</svg> : <p className="py-12 text-center text-sm text-slate-500">완료한 세션이 쌓이면 성적 변화를 표시합니다.</p>}
    </section>
    <section className={card}>
      <h2 className="font-semibold">학습 범위와 정답률로 보는 분과</h2><p className={caption}>가로는 학습 범위, 세로는 누적 정답률입니다. 원이 클수록 풀어본 문항이 많습니다. 50%·70% 선은 비교를 위한 참고선이며 합격 기준이 아닙니다. 분과를 눌러 상세 수치를 확인하세요.</p>
      {studied.length ? <><svg viewBox="0 0 560 285" className="mt-5 w-full" role="group" aria-label="분과별 학습 범위와 정답률 분포">
        <rect x="50" y="25" width="465" height="205" fill="#f8fafc" rx="6" /><rect x="282.5" y="25" width="232.5" height="61.5" fill="#f0fdfa" />
        {[0,25,50,75,100].map(v=><g key={v}><line x1={50+v*4.65} x2={50+v*4.65} y1="25" y2="230" stroke="#e2e8f0" /><line x1="50" x2="515" y1={230-v*2.05} y2={230-v*2.05} stroke="#e2e8f0" /><text x={50+v*4.65} y="247" textAnchor="middle" fontSize="10" fill="#94a3b8">{v}%</text><text x="40" y={234-v*2.05} textAnchor="end" fontSize="10" fill="#94a3b8">{v}</text></g>)}
        <line x1="50" x2="515" y1="86.5" y2="86.5" stroke="#94a3b8" strokeDasharray="4 4" /><text x="50" y="16" fontSize="10" fill="#64748b">정답률</text><text x="280" y="272" textAnchor="middle" fontSize="10" fill="#64748b">학습 범위</text>
        {studied.map(g=><circle key={g.key} cx={50+rate(g.attempted,g.total)*4.65} cy={230-rate(g.correct,g.attempts)*2.05} r={Math.min(18,5+Math.sqrt(g.attempted))} fill={g.attempted < 5 ? '#94a3b8' : rate(g.correct,g.attempts) < 70 ? '#f59e0b' : '#0d9488'} fillOpacity="0.65" stroke={selectedBubble===g.key ? '#0f172a' : 'white'} strokeWidth="2" role="button" tabIndex={0} aria-label={`${g.key}: 정답률 ${rate(g.correct,g.attempts)}%, 학습 범위 ${rate(g.attempted,g.total)}%, ${g.attempted}문항`} onClick={()=>setSelectedBubble(g.key)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelectedBubble(g.key);}}}><title>{g.key} · {g.attempted}문항 · 정답률 {rate(g.correct,g.attempts)}%</title></circle>)}
      </svg><div className="mt-2 flex flex-wrap gap-2">{studied.map(g=><button key={g.key} aria-pressed={selectedBubble===g.key} onClick={()=>setSelectedBubble(g.key)} className={`rounded-full border px-3 py-1.5 text-xs ${selectedBubble===g.key?'border-teal-500 bg-teal-50 text-teal-800':'border-slate-200 text-slate-600'}`}>{g.key}</button>)}</div>
      {bubble && <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 p-4"><div><p className="font-semibold">{bubble.key}</p><p className={caption}>정답률 {rate(bubble.correct,bubble.attempts)}% · {bubble.attempted}/{bubble.total}문항 · 미해결 {bubble.wrong}문항{bubble.attempted<5?' · 5문항 미만: 해석에 주의':''}</p></div><div className="flex gap-2"><button className="secondary-action" onClick={()=>onDepartment(bubble.key)}>분과 상세</button><button disabled={!bubble.wrong} className="primary-action disabled:opacity-40" onClick={()=>onRetry(bubble.retryIds)}>오답 풀기</button></div></div>}</> : <p className="py-12 text-center text-sm text-slate-500">분과별 풀이 기록이 아직 없습니다.</p>}
    </section>
  </div>;
}
