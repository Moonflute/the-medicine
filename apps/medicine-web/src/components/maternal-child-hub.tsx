"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Check, ChevronRight, ExternalLink, HeartPulse, ShieldAlert, Stethoscope } from "lucide-react";
import type { DiseaseNote, MaternalChildHubData } from "@/lib/webdb";

const normalized = (value: string) => value.replace(/\s*\([^)]*\)\s*$/, "").replace(/\s+/g, "").trim().toLowerCase();

function resolveRelated(diseases: DiseaseNote[], terms: string[]) {
  return terms.flatMap((term) => {
    const found = diseases.find((note) => normalized(note.title) === term || note.aliases.some((alias) => normalized(alias) === term));
    return found ? [{ title: term, slug: found.slug }] : [];
  });
}

export function MaternalChildHub({ diseases, hub }: { diseases: DiseaseNote[]; hub: MaternalChildHubData }) {
  const { stages, pediatricMilestones, sources: sourceLinks } = hub;
  const [filter, setFilter] = useState<"all" | "obstetrics" | "pediatrics">("all");
  const visible = stages.filter((stage) => filter === "all" || stage.group === filter || stage.group === "shared");

  return (
    <div className="space-y-5">
      <section className="rounded-xl border border-rose-200 bg-gradient-to-br from-white via-rose-50/70 to-amber-50 p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">Longitudinal care</div>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">산부소아 Hub</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">임신 시작부터 출생·소아청소년기까지 이어지는 핵심 예방진료와 위험 신호를 한 흐름으로 정리합니다. 실제 검사·접종·의뢰는 국내 최신 지침과 기관 프로토콜을 우선합니다.</p>
          </div>
          <div className="rounded-xl border border-rose-100 bg-white/90 p-1.5 shadow-sm" aria-label="표시 범위">
            {[{ key: "all", label: "전체" }, { key: "obstetrics", label: "산과" }, { key: "pediatrics", label: "소아" }].map((item) => (
              <button key={item.key} type="button" onClick={() => setFilter(item.key as typeof filter)} className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${filter === item.key ? "bg-rose-700 text-white shadow-sm" : "text-slate-600 hover:bg-rose-50"}`}>
                {filter === item.key ? <Check className="h-4 w-4" /> : null}{item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600"><span className="rounded-full bg-rose-100 px-3 py-1.5 font-semibold text-rose-800">산과</span><span className="rounded-full bg-sky-100 px-3 py-1.5 font-semibold text-sky-800">소아청소년과</span><span className="rounded-full bg-violet-100 px-3 py-1.5 font-semibold text-violet-800">공통 전환기</span></div>
      </section>

      <section aria-label="임신부터 소아청소년기까지의 타임라인" className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="relative ml-2 border-l-2 border-slate-200 pl-6 sm:ml-4 sm:pl-9">
          {visible.map((stage) => {
            const links = resolveRelated(diseases, stage.related);
            const color = stage.group === "obstetrics" ? "rose" : stage.group === "pediatrics" ? "sky" : "violet";
            const badge = color === "rose" ? "bg-rose-100 text-rose-800" : color === "sky" ? "bg-sky-100 text-sky-800" : "bg-violet-100 text-violet-800";
            const dot = color === "rose" ? "bg-rose-600 ring-rose-100" : color === "sky" ? "bg-sky-600 ring-sky-100" : "bg-violet-600 ring-violet-100";
            return <article key={stage.time} className="relative pb-7 last:pb-0"><span className={`absolute -left-[35px] top-5 h-4 w-4 rounded-full ring-4 sm:-left-[47px] ${dot}`} aria-hidden="true" />
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${badge}`}>{stage.group === "obstetrics" ? "산과" : stage.group === "pediatrics" ? "소아청소년과" : "산후·신생아"}</span><span className="text-sm font-bold text-slate-700">{stage.time}</span></div>
                <h2 className="mt-3 text-xl font-bold text-slate-950">{stage.title}</h2><p className="mt-1 text-sm font-medium text-slate-600">{stage.subtitle}</p>
                <div className="mt-4 grid gap-4 lg:grid-cols-3"><TimelineBlock icon={<HeartPulse className="h-4 w-4" />} title="발달·생리" items={stage.development} /><TimelineBlock icon={<Stethoscope className="h-4 w-4" />} title="진료·검사" items={stage.assessments} /><TimelineBlock icon={<ShieldAlert className="h-4 w-4" />} title="주의·의뢰" items={stage.clinicalFocus} /></div>
                <div className="mt-4 flex flex-wrap gap-2">{links.map((link) => <Link key={link.slug} href={`/disease/${link.slug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:border-rose-300 hover:text-rose-800">{link.title}<ChevronRight className="h-3.5 w-3.5" /></Link>)}</div>
                <p className="mt-3 text-xs text-slate-500">근거: {stage.sources.join(" · ")}</p>
              </div>
            </article>;
          })}
        </div>
      </section>

      {filter !== "obstetrics" ? <PediatricMilestoneGuide milestones={pediatricMilestones} /> : null}

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="text-lg font-bold text-slate-950">핵심 출처</h2><p className="mt-1 text-sm text-slate-600">이 Hub는 빠른 복습용 요약입니다. 예방접종, 산전·산후 검사, 선별 권고는 지역 지침의 최신판을 확인합니다.</p><div className="mt-4 flex flex-wrap gap-2">{sourceLinks.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-rose-300 hover:bg-rose-50"><ExternalLink className="h-3.5 w-3.5" />{source.label}</a>)}</div></section>
    </div>
  );
}

function PediatricMilestoneGuide({ milestones }: { milestones: MaternalChildHubData["pediatricMilestones"] }) {
  return (
    <section className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Pediatric development</div><h2 className="mt-2 text-2xl font-bold text-slate-950">연령별 발달 이정표 · 진료 포인트</h2><p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">CDC 이정표는 해당 연령까지 대다수(약 75% 이상)의 아이가 보이는 행동을 정리한 감시 도구입니다. 진단 기준이나 평균 연령표가 아니며, 미숙아는 교정연령을 적용하고 개별 경과·기능·퇴행을 함께 판단합니다.</p></div>
        <span className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-sky-800">매 예방진료: 발달 감시</span>
      </div>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900"><strong>선별·의뢰:</strong> 표준화 발달선별은 9·18·30개월, ASD 특이 선별은 18·24개월에 시행합니다. 기술 소실(regression), 보호자 우려, 다영역 지연은 시점을 기다리지 말고 청력·시력·신경학적 평가와 조기중재 의뢰를 병행합니다.</div>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">{milestones.map((milestone) => <PediatricMilestoneCard key={milestone.age} milestone={milestone} />)}</div>
    </section>
  );
}

function PediatricMilestoneCard({ milestone }: { milestone: MaternalChildHubData["pediatricMilestones"][number] }) {
  const areas = [
    ["대근육", milestone.gross],
    ["소근육·인지", milestone.fine],
    ["언어·의사소통", milestone.language],
    ["사회성·적응", milestone.social],
  ] as const;
  return <article className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-bold text-sky-800">{milestone.age}</span><h3 className="font-bold text-slate-950">{milestone.title}</h3></div><div className="mt-4 grid gap-3 sm:grid-cols-2">{areas.map(([title, items]) => <div key={title} className="rounded-lg bg-slate-50 p-3"><h4 className="text-xs font-bold text-slate-800">{title}</h4><ul className="mt-1.5 space-y-1 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500" />{item}</li>)}</ul></div>)}</div><div className="mt-3 rounded-lg border border-rose-100 bg-rose-50/50 p-3"><h4 className="text-xs font-bold text-rose-900">진료·선별 포인트</h4><ul className="mt-1.5 space-y-1 text-xs leading-5 text-rose-900">{milestone.visit.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-500" />{item}</li>)}</ul></div></article>;
}
function TimelineBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return <div className="rounded-lg border border-white bg-white p-3"><div className="flex items-center gap-2 text-xs font-bold text-slate-800">{icon}{title}</div><ul className="mt-2 space-y-1.5 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />{item}</li>)}</ul></div>;
}
