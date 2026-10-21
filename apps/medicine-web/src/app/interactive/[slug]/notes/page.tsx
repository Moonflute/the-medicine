import Link from "next/link";
import { notFound } from "next/navigation";
import { interactiveConcepts, getInteractiveConcept } from "@/lib/interactive-concepts";
import { getInteractiveLearning } from "@/lib/interactive-learning";
import { LearningSources, LearningTopicBody } from "@/components/interactive-learning";

export function generateStaticParams(){return interactiveConcepts.map(({slug})=>({slug}));}
export default async function InteractiveNote({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;if(!getInteractiveConcept(slug))notFound();const data=getInteractiveLearning(slug);
  return <article className="physiology-workbench mx-auto max-w-6xl space-y-7">
    <Link href={`/interactive/${slug}`} className="inline-block underline">← 인터랙티브로 돌아가기</Link>
    <header><p className="text-sm text-[var(--muted)]">생리학 해설 노트</p><h1 className="mt-2 text-3xl font-bold">{data.title}</h1></header>
    <nav className="physiology-card flex flex-wrap gap-3" aria-label="노트 목차">{data.topics.map(t=><a key={t.id} href={`#${t.id}`} className="text-sm underline">{t.title}</a>)}</nav>
    {data.topics.map(topic=><section key={topic.id} id={topic.id} className="physiology-card scroll-mt-24 space-y-5"><h2 className="text-xl font-bold">{topic.title}</h2><LearningTopicBody topic={topic}/></section>)}
    <LearningSources data={data}/>
  </article>;
}
