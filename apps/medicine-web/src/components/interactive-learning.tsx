"use client";
import { createContext, useContext, type ReactNode } from "react";
import Link from "next/link";
import type { InteractiveLearning, LearningTopic } from "@/lib/interactive-learning-parser";
import type { LearningExperiment } from "@/components/simulation-workbench";

const LearningContext=createContext<InteractiveLearning|null>(null);
export function InteractiveLearningProvider({data,children}:{data:InteractiveLearning;children:ReactNode}) {
  return <LearningContext.Provider value={data}>{children}</LearningContext.Provider>;
}
export function useInteractiveLearning() { const value=useContext(LearningContext); if(!value)throw new Error("Missing learning source");return value; }
export function useLearningExperiments(prefix=""):LearningExperiment[] {
  const data=useInteractiveLearning();
  return data.topics.filter(t=>t.question&&t.id.startsWith(prefix)).map(t=>({
    id:t.id.slice(prefix.length),title:t.title,situation:t.sections.find(s=>s.title==="기전")?.bullets[0]??t.title,
    question:t.question!.prompt,choices:t.question!.choices,answer:t.question!.answer,
    mechanism:t.sections.find(s=>s.title==="기전")?.bullets.join(" ")??"",
    clinical:t.sections.find(s=>s.title==="증상·검사 소견")?.bullets.join(" ")??"",
    observe:t.sections.find(s=>s.title==="관찰과 해석")?.bullets.join(" ")??"",
  }));
}
export function LearningTopicBody({topic}:{topic:LearningTopic}) {
  return <><div className="physiology-learning-grid">{topic.sections.filter(s=>s.bullets.length>0).map(section=><section key={section.title}><h3 className="text-sm font-bold">{section.title}</h3><ul className="text-sm leading-6">{section.bullets.map((text,i)=><li key={i}>{text}</li>)}</ul></section>)}</div>
    {topic.links.length>0&&<nav aria-label={`${topic.title} 관련 자료`} className="physiology-related">{topic.links.map(link=><Link key={link.href} href={link.href}>{link.label} →</Link>)}</nav>}</>;
}
export function ClinicalScenarioPanel({id,modified=false}:{id:string;modified?:boolean}) {
  const data=useInteractiveLearning(),topic=data.topics.find(t=>t.id===id);
  if(!topic)return <p className="scenario-notice">직접 조절한 상태입니다. 아래 비교 수치와 해설 노트를 함께 확인하세요. 프리셋 해설은 기준 조건에 대한 설명입니다.</p>;
  return <section className="physiology-card space-y-4" aria-label={`${topic.title} 해설`}>
    <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-lg font-bold">{topic.title}</h2><Link className="text-sm underline" href={`/interactive/${data.slug}/notes#${id}`}>상세 노트 열기 →</Link></div>
    {modified&&<p className="scenario-notice">입력을 변경했습니다. 아래는 선택한 질환의 기전 설명이며, 현재 수치의 진단 판정이 아닙니다.</p>}
    <LearningTopicBody topic={topic}/>
  </section>;
}
export function LearningSources({data}:{data:InteractiveLearning}) {
  return <section className="physiology-card space-y-3" aria-label="출처와 모델 한계"><div className="flex flex-wrap justify-between gap-3"><h2 className="font-bold">출처와 모델 한계</h2><Link href={`/interactive/${data.slug}/notes`} className="underline">전체 해설 노트 →</Link></div>
    <p className="text-xs text-[var(--muted)]">자료 대조일 {data.reviewed} · 교육용 모델 · 임상 검증 미완료</p>
    {data.introduction.map((line,i)=><p key={i} className="text-sm leading-6">{line}</p>)}
    <ul className="space-y-2 text-sm">{data.sources.map(source=><li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="underline">{source.label} ↗</a></li>)}</ul>
  </section>;
}
