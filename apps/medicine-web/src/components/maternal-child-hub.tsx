"use client";

import { useHubState, useHubScroll } from "@/lib/use-hub-state";

import Link from "next/link";
import { useDeferredValue, useEffect, type ReactNode } from "react";
import { Baby, BookOpen, ChevronRight, ExternalLink, HeartPulse, Route, ShieldAlert, Stethoscope } from "lucide-react";
import type { DiseaseNote, MaternalChildHubData } from "@/lib/webdb";
import { HubEmptyState, HubLayout, HubSearch, HubTabs, HubToolbar, type HubTab } from "@/components/hub-layout";

type MaternalTab = "timeline" | "milestones" | "sources";
const maternalTabs: HubTab<MaternalTab>[] = [
  { id: "timeline", label: "진료 타임라인", icon: Route },
  { id: "milestones", label: "발달 이정표", icon: Baby },
  { id: "sources", label: "출처", icon: BookOpen },
];

const normalized = (value: string) => value.replace(/\s*\([^)]*\)\s*$/, "").replace(/\s+/g, "").trim().toLowerCase();

function resolveRelated(diseases: DiseaseNote[], terms: string[]) {
  const synonyms: Record<string, string> = { "급성중이염": "중이염", "우울증": "주요우울장애" };
  return terms.map((term) => {
    const target = synonyms[normalized(term)] ?? normalized(term);
    const found = diseases.find((note) => normalized(note.title) === target || note.aliases.some((alias) => normalized(alias) === target));
    return { title: term, slug: found?.slug };
  });
}

export function MaternalChildHub({ diseases, hub }: { diseases: DiseaseNote[]; hub: MaternalChildHubData }) {
  const { stages, pediatricMilestones, sources } = hub;
  useHubScroll();
  const [tab, setTab] = useHubState<MaternalTab>("maternal-child-hub:tab", "timeline");
  const [filter, setFilter] = useHubState<"all" | "obstetrics" | "pediatrics">("maternal-child-hub:filter", "all");
  const [query, setQuery] = useHubState("maternal-child-hub:query", "");
  const [milestoneQuery, setMilestoneQuery] = useHubState("maternal-child-hub:milestoneQuery", "");
  const [sourceQuery, setSourceQuery] = useHubState("maternal-child-hub:sourceQuery", "");
  const [stageId, setStageId] = useHubState("maternal-child-hub:stage", "");
  const [milestoneAge, setMilestoneAge] = useHubState("maternal-child-hub:age", "");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const deferredMilestoneQuery = useDeferredValue(milestoneQuery.trim().toLowerCase());
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const visible = stages.filter((stage) =>
    (filter === "all" || stage.group === filter || stage.group === "shared")
    && [stage.time, stage.title, stage.subtitle, ...stage.development, ...stage.assessments, ...stage.clinicalFocus, ...stage.related].join(" ").toLowerCase().includes(deferredQuery));
  const visibleMilestones = pediatricMilestones.filter((item) =>
    [item.age, item.title, ...item.gross, ...item.fine, ...item.language, ...item.social, ...item.visit].join(" ").toLowerCase().includes(deferredMilestoneQuery));
  const selectedStage = visible.find(s=>s.id===stageId) ?? visible[0];
  const selectedMilestone = visibleMilestones.find(m=>m.age===milestoneAge) ?? visibleMilestones[0];
  const visibleSources = sources.filter((item) => item.label.toLowerCase().includes(sourceQuery.trim().toLowerCase()));

  useEffect(() => {
    queueMicrotask(() => {
      const params = new URLSearchParams(window.location.search);
      const scope = params.get("scope");
      if (scope === "all" || scope === "obstetrics" || scope === "pediatrics") setFilter(scope);
      const requestedTab = params.get("tab");
      if (requestedTab === "timeline" || requestedTab === "milestones" || requestedTab === "sources") setTab(requestedTab);
      else if (window.location.hash) setTab("timeline");
      if (window.location.hash) setStageId(decodeURIComponent(window.location.hash.slice(1)));
    });
  }, [setFilter, setTab, setStageId]);
  const updateUrl = (values: Record<string, string>) => {
    const url = new URL(window.location.href);
    Object.entries(values).forEach(([key, value]) => url.searchParams.set(key, value));
    url.hash = "";
    window.history.replaceState(null, "", url);
  };
  const selectTab = (value: MaternalTab) => { setTab(value); updateUrl({ tab: value }); };
  const selectFilter = (value: typeof filter) => { setFilter(value); updateUrl({ scope: value, tab: "timeline" }); };

  return (
    <HubLayout hub="maternal-child" title="산부소아 Hub"
      description="임신부터 소아청소년기까지 진료 흐름과 발달 이정표를 연령별로 살펴봅니다."
      date={hub.updatedAt} stats={[{ label: "진료 단계", value: stages.length }, { label: "발달 이정표", value: pediatricMilestones.length }, { label: "출처", value: sources.length }]}>
      <HubTabs label="산부소아 Hub 탐색" tabs={maternalTabs} value={tab} onChange={selectTab}>
        {tab === "timeline" ? <>
          <HubToolbar title="진료 타임라인" description="시기별 발달·생리, 진료·검사, 주의·의뢰 항목을 함께 확인합니다." count={`${visible.length} / ${stages.length}단계`}>
            <HubSearch label="진료 단계 검색" value={query} onChange={setQuery} placeholder="연령, 검사, 증상 또는 질환 검색" />
            <div className="hub-filters" role="group" aria-label="진료 범위">
              {([{ id: "all", label: "전체" }, { id: "obstetrics", label: "산과" }, { id: "pediatrics", label: "소아" }] as const).map((item) =>
                <button key={item.id} type="button" className="hub-filter" aria-pressed={filter === item.id} onClick={() => selectFilter(item.id)}>{item.label}</button>)}
            </div>
            <select className="hub-select" aria-label="진료 단계" value={selectedStage?.id ?? ""} onChange={e=>{setStageId(e.target.value); const url=new URL(window.location.href);url.hash=e.target.value;window.history.replaceState(null,"",url);}}>{visible.map(s=><option value={s.id} key={s.id}>{s.time} · {s.title}</option>)}</select>
          </HubToolbar>
          {visible.length ? <section className="hub-panel" aria-label="임신부터 소아청소년기까지의 타임라인">
            <div className="maternal-stage-detail">
              {(selectedStage ? [selectedStage] : []).map((stage) => {
                const links = resolveRelated(diseases, stage.related);
                const badge = stage.group === "obstetrics" ? "bg-rose-100 text-rose-800" : stage.group === "pediatrics" ? "bg-sky-100 text-sky-800" : "bg-violet-100 text-violet-800";
                return <article key={stage.id} id={stage.id} className="relative scroll-mt-24 pb-6 last:pb-0">
                  <span className="absolute -left-[31px] top-5 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--surface)] sm:-left-[43px]" aria-hidden="true" />
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-2"><span className={`rounded-md px-2 py-1 text-xs font-semibold ${badge}`}>{stage.group === "obstetrics" ? "산과" : stage.group === "pediatrics" ? "소아청소년과" : "산후·신생아"}</span><span className="text-sm font-semibold text-slate-700">{stage.time}</span></div>
                    <h3 className="mt-3 text-lg font-bold text-slate-950">{stage.title}</h3><p className="mt-1 text-sm text-slate-600">{stage.subtitle}</p>
                    <div className="mt-4 grid gap-3 lg:grid-cols-3"><TimelineBlock icon={<HeartPulse className="h-4 w-4" />} title="발달·생리" items={stage.development} /><TimelineBlock icon={<Stethoscope className="h-4 w-4" />} title="진료·검사" items={stage.assessments} /><TimelineBlock icon={<ShieldAlert className="h-4 w-4" />} title="주의·의뢰" items={stage.clinicalFocus} /></div>
                    <div className="mt-4 flex flex-wrap gap-2">{links.map((link) => <Link key={link.title} href={link.slug ? `/disease/${link.slug}` : `/search?q=${encodeURIComponent(link.title)}`} className="hub-filter">{link.title}<ChevronRight size={13} /></Link>)}</div>
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500"><span className="font-semibold">근거</span>{stage.sourceIds.map((id) => { const source = sourceById.get(id); return source ? <a key={id} href={source.url} target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-2 hover:text-[var(--primary)]">{source.label}</a> : null; })}<Link href={`?tab=timeline&scope=${filter}#${stage.id}`} className="ml-auto font-semibold text-[var(--primary)]">이 단계 링크</Link></div>
                  </div>
                </article>;
              })}
            </div>
          </section> : <HubEmptyState onReset={() => { setQuery(""); selectFilter("all"); }} />}
        </> : null}

        {tab === "milestones" ? <>
          <HubToolbar title="발달 이정표" description="연령과 발달 영역으로 이정표와 진료·선별 항목을 찾아봅니다." count={`${visibleMilestones.length} / ${pediatricMilestones.length}개`}>
            <HubSearch label="발달 이정표 검색" value={milestoneQuery} onChange={setMilestoneQuery} placeholder="연령, 운동, 언어 또는 발달 항목 검색" />
            <select className="hub-select" aria-label="발달 연령" value={selectedMilestone?.age ?? ""} onChange={e=>setMilestoneAge(e.target.value)}>{visibleMilestones.map(m=><option key={m.age} value={m.age}>{m.age} · {m.title}</option>)}</select>
          </HubToolbar>
          {visibleMilestones.length ? <PediatricMilestoneGuide milestones={selectedMilestone ? [selectedMilestone] : []} /> : <HubEmptyState onReset={() => setMilestoneQuery("")} />}
        </> : null}

        {tab === "sources" ? <>
          <HubToolbar title="핵심 출처" description="예방접종·검사·선별 권고는 국내 최신 지침과 기관 프로토콜을 함께 확인합니다." count={`${visibleSources.length} / ${sources.length}개`}>
            <HubSearch label="출처 검색" value={sourceQuery} onChange={setSourceQuery} placeholder="기관명 또는 출처 검색" />
          </HubToolbar>
          {visibleSources.length ? <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{visibleSources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="hub-card"><span className="hub-card-kicker">{new URL(source.url).hostname}</span><h3>{source.label}</h3><span className="hub-card-action">원문 보기<ExternalLink size={14} /></span></a>)}</div> : <HubEmptyState onReset={() => setSourceQuery("")} />}
        </> : null}
      </HubTabs>
    </HubLayout>
  );
}

function PediatricMilestoneGuide({ milestones }: { milestones: MaternalChildHubData["pediatricMilestones"] }) {
  return (
    <section className="hub-panel">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">CDC 이정표는 해당 연령까지 대다수(약 75% 이상)의 아이가 보이는 행동을 정리한 감시 도구입니다. 진단 기준이나 평균 연령표가 아니며, 미숙아는 교정연령을 적용하고 개별 경과·기능·퇴행을 함께 판단합니다.</p></div>
        <span className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-sky-800">매 예방진료: 발달 감시</span>
      </div>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900"><strong>선별·의뢰:</strong> 표준화 발달선별은 9·18·30개월, ASD 특이 선별은 18·24개월에 시행합니다. 기술 소실(regression), 보호자 우려, 다영역 지연은 시점을 기다리지 말고 청력·시력·신경학적 평가와 조기중재 의뢰를 병행합니다.</div>
      <div className="mt-3 grid gap-4">{milestones.map((milestone) => <PediatricMilestoneCard key={milestone.age} milestone={milestone} />)}</div>
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
  return <article className="rounded-xl border border-slate-200 bg-[var(--surface)] p-4"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-bold text-sky-800">{milestone.age}</span><h3 className="font-bold text-slate-950">{milestone.title}</h3></div><div className="mt-4 grid gap-3 sm:grid-cols-2">{areas.map(([title, items]) => <div key={title} className="rounded-lg bg-slate-50 p-3"><h4 className="text-xs font-bold text-slate-800">{title}</h4><ul className="mt-1.5 space-y-1 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500" />{item}</li>)}</ul></div>)}</div><div className="mt-3 rounded-lg border border-rose-100 bg-rose-50/50 p-3"><h4 className="text-xs font-bold text-rose-900">진료·선별 포인트</h4><ul className="mt-1.5 space-y-1 text-xs leading-5 text-rose-900">{milestone.visit.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-500" />{item}</li>)}</ul></div></article>;
}
function TimelineBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return <div className="rounded-lg border border-white bg-white p-3"><div className="flex items-center gap-2 text-xs font-bold text-slate-800">{icon}{title}</div><ul className="mt-2 space-y-1.5 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item} className="flex gap-1.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />{item}</li>)}</ul></div>;
}
