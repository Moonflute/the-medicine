import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, Route, Stethoscope } from "lucide-react";
import type { NeuroAtlas } from "@/lib/webdb";
import { diseasesForReflex, diseasesForStructure, getNeuroNoteItem, neuroNoteHref, type NeuroNoteKind, relatedStructures } from "@/lib/neuro-notes";

type Props = {
  atlas: NeuroAtlas;
  kind: NeuroNoteKind;
  id: string;
  diseaseHrefs: Record<string, string>;
  drugHrefs: Record<string, string>;
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-t border-slate-200 pt-7"><h2 className="text-xl font-bold text-slate-950">{title}</h2><div className="mt-3 text-[15px] leading-7 text-slate-700">{children}</div></section>;
}

function LinkPills({ items, hrefs, empty }: { items: string[]; hrefs: Record<string, string>; empty: string }) {
  const linked = items.filter((item) => hrefs[item]);
  if (!linked.length) return <p className="text-sm text-slate-500">{empty}</p>;
  return <div className="flex flex-wrap gap-2">{linked.map((item) => <Link key={item} href={hrefs[item]} className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-900 hover:border-teal-500 hover:bg-white">{item}<ChevronRight className="ml-1 inline h-3.5 w-3.5" /></Link>)}</div>;
}

function StructureLinks({ structures }: { structures: NeuroAtlas["structures"] }) {
  if (!structures.length) return <p className="text-sm text-slate-500">연결된 구조 정보가 아직 없습니다.</p>;
  return <div className="grid gap-2 sm:grid-cols-2">{structures.map((item) => <Link key={item.id} href={neuroNoteHref("structure", item.id)} className="rounded-xl border border-slate-200 px-3 py-3 hover:border-teal-500 hover:bg-teal-50"><span className="block font-semibold text-slate-950">{item.ko}</span><span className="mt-0.5 block text-xs text-slate-500">{item.en}</span></Link>)}</div>;
}

function Sources({ atlas, sourceIds }: { atlas: NeuroAtlas; sourceIds: string[] }) {
  const sourceById = new Map(atlas.sources.filter((source) => source.id).map((source) => [source.id!, source]));
  return <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><p className="text-xs font-bold tracking-[.14em] text-slate-500">출처</p><div className="mt-3 flex flex-wrap gap-2">{sourceIds.map((id) => {
    const source = sourceById.get(id);
    return source ? <a key={id} href={source.url} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-teal-500">{source.title ?? source.label}</a> : null;
  })}</div></section>;
}

export function NeuroNotePage({ atlas, kind, id, diseaseHrefs, drugHrefs }: Props) {
  const item = getNeuroNoteItem(atlas, kind, id);
  if (!item) return null;

  const Icon = kind === "pathway" ? Route : kind === "reflex" ? Stethoscope : BookOpen;
  const typeLabel = kind === "structure" ? "해부 구조 노트" : kind === "pathway" ? "신경 경로 노트" : kind === "reflex" ? "NEx · 반사 노트" : "주제 노트";

  if (kind === "structure") {
    const structure = item as NeuroAtlas["structures"][number];
    const pathways = atlas.pathways.filter((pathway) => pathway.nodes?.includes(structure.id));
    const reflexes = atlas.reflexes.filter((reflex) => reflex.route?.includes(structure.id));
    const related = relatedStructures(atlas, structure.id);
    return <NoteFrame icon={Icon} typeLabel={typeLabel} title={structure.ko} subtitle={structure.en} backHref="/nervous-system-hub?tab=notes" source={<Sources atlas={atlas} sourceIds={structure.sourceIds ?? []} />}>
      <Section title="해부학 정보"><p>{structure.summary}</p><dl className="mt-4 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm sm:grid-cols-2"><div><dt className="font-bold text-slate-950">분류</dt><dd>{structure.group}</dd></div><div><dt className="font-bold text-slate-950">확인 가능한 지도</dt><dd>{(structure.viewIds ?? []).length}개 보기</dd></div></dl></Section>
      <Section title="담당 혹은 관련 기능"><p>{pathways.length ? `${pathways.map((pathway) => pathway.ko).join(" · ")}의 경로에서 이 구조를 함께 확인합니다.` : "선택한 Atlas 보기에서 이 구조의 위치와 인접 구조를 함께 확인합니다."}</p>{reflexes.length ? <p className="mt-3">관련 진찰·반사: {reflexes.map((reflex) => reflex.label).join(" · ")}</p> : null}</Section>
      <Section title="관련 질환"><LinkPills items={structure.links} hrefs={diseaseHrefs} empty="연결된 질환 노트를 정리 중입니다." /></Section>
      {structure.drugLinks?.length ? <Section title="관련 약물"><LinkPills items={structure.drugLinks} hrefs={drugHrefs} empty="연결된 약물 노트가 없습니다." /></Section> : null}
      <Section title="연관 구조"><StructureLinks structures={related} /></Section>
      <Section title="지도에서 보기"><div className="flex flex-wrap gap-2">{(structure.viewIds ?? []).map((viewId) => { const view = atlas.views.find((entry) => entry.id === viewId); return view ? <Link key={viewId} href={`/nervous-system-hub?view=${viewId}&structure=${structure.id}`} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-teal-500">{view.hierarchy.join(" › ")} · {view.label}</Link> : null; })}</div></Section>
    </NoteFrame>;
  }

  if (kind === "pathway") {
    const pathway = item as NeuroAtlas["pathways"][number];
    const structures = (pathway.nodes ?? []).flatMap((structureId) => atlas.structures.filter((structure) => structure.id === structureId));
    return <NoteFrame icon={Icon} typeLabel={typeLabel} title={pathway.ko} subtitle={pathway.en} backHref="/nervous-system-hub?tab=notes" source={<Sources atlas={atlas} sourceIds={pathway.sourceIds ?? []} />}>
      <Section title="해부학 정보"><p>{pathway.route}</p><dl className="mt-4 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm"><div><dt className="font-bold text-slate-950">시작</dt><dd>{pathway.origin ?? "정리 중"}</dd></div><div><dt className="font-bold text-slate-950">중계 구조</dt><dd>{pathway.relayNuclei?.join(" · ") ?? "정리 중"}</dd></div><div><dt className="font-bold text-slate-950">교차</dt><dd>{pathway.decussation ?? "정리 중"}</dd></div><div><dt className="font-bold text-slate-950">종결</dt><dd>{pathway.termination ?? "정리 중"}</dd></div></dl></Section>
      <Section title="담당 혹은 관련 기능"><p>{pathway.primaryFunction ?? pathway.route}</p></Section>
      <Section title="병변과 측성"><p>{pathway.lesionPattern ?? pathway.pattern}</p>{pathway.laterality ? <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950"><b>측성:</b> {pathway.laterality.description}</p> : null}</Section>
      <Section title="관련 질환"><LinkPills items={pathway.links} hrefs={diseaseHrefs} empty="연결된 질환 노트를 정리 중입니다." /></Section>
      {pathway.drugLinks?.length ? <Section title="관련 약물"><LinkPills items={pathway.drugLinks} hrefs={drugHrefs} empty="연결된 약물 노트가 없습니다." /></Section> : null}
      <Section title="연관 구조"><StructureLinks structures={structures} /></Section>
      <Section title="지도에서 보기"><Link href={`/nervous-system-hub?pathway=${pathway.id}`} className="inline-flex rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-800">경로를 Atlas에서 보기</Link></Section>
    </NoteFrame>;
  }

  if (kind === "reflex") {
    const reflex = item as NeuroAtlas["reflexes"][number];
    const structures = (reflex.route ?? []).flatMap((structureId) => atlas.structures.filter((structure) => structure.id === structureId));
    return <NoteFrame icon={Icon} typeLabel={typeLabel} title={reflex.label} subtitle="신경학적 진찰 · 반사 회로" backHref="/nervous-system-hub?tab=nex" source={<Sources atlas={atlas} sourceIds={reflex.sourceIds ?? []} />}>
      <Section title="해부학 정보"><p>{reflex.arc}</p>{reflex.route?.length ? <ol className="mt-4 grid gap-2 sm:grid-cols-2">{reflex.route.map((structureId, index) => <li key={structureId + index} className="rounded-xl border border-slate-200 p-3"><span className="text-xs font-bold uppercase tracking-[.12em] text-teal-700">{reflex.routeStages?.[index] ?? "경로"}</span><span className="mt-1 block font-semibold text-slate-950">{reflex.routeLabels?.[index] ?? atlas.structures.find((structure) => structure.id === structureId)?.ko ?? structureId}</span></li>)}</ol> : null}</Section>
      <Section title="담당 혹은 관련 기능"><p>{reflex.purpose ?? reflex.localization}</p>{reflex.technique?.length ? <ul className="mt-3 list-disc space-y-1 pl-5">{reflex.technique.map((line) => <li key={line}>{line}</li>)}</ul> : null}</Section>
      <Section title="정상 반응과 위치추정"><dl className="grid gap-4"><div><dt className="font-bold text-slate-950">정상 반응</dt><dd>{reflex.normal ?? "임상 맥락에서 양측 반응을 비교합니다."}</dd></div><div><dt className="font-bold text-slate-950">이상 소견 · 주의사항</dt><dd>{reflex.abnormal ?? "병력과 다른 신경학적 소견을 함께 해석합니다."}</dd></div><div><dt className="font-bold text-slate-950">국소화</dt><dd>{reflex.localization}</dd></div>{reflex.laterality ? <div><dt className="font-bold text-slate-950">측성</dt><dd>{reflex.laterality.description}</dd></div> : null}</dl></Section>
      <Section title="관련 질환"><LinkPills items={diseasesForReflex(atlas, reflex.id)} hrefs={diseaseHrefs} empty="연결된 질환 노트를 정리 중입니다." /></Section>
      <Section title="연관 구조"><StructureLinks structures={structures} /></Section>
      <Section title="지도에서 보기"><Link href={`/nervous-system-hub?view=${reflex.viewId ?? "whole-neuraxis"}&structure=${reflex.route?.[0] ?? ""}`} className="inline-flex rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-800">반사 회로를 Atlas에서 보기</Link></Section>
    </NoteFrame>;
  }

  const topic = item as NeuroAtlas["theoryTopics"][number];
  const targetStructure = atlas.structures.find((structure) => structure.id === topic.itemId);
  const targetPathway = atlas.pathways.find((pathway) => pathway.id === topic.itemId);
  const targetReflex = atlas.reflexes.find((reflex) => reflex.id === topic.itemId);
  const diseases = targetStructure ? diseasesForStructure(atlas, targetStructure.id) : targetPathway ? targetPathway.links : targetReflex ? diseasesForReflex(atlas, targetReflex.id) : [];
  return <NoteFrame icon={Icon} typeLabel={typeLabel} title={topic.title} subtitle={topic.category} backHref="/nervous-system-hub?tab=notes" source={<Sources atlas={atlas} sourceIds={topic.sourceIds} />}>
    <Section title="해부학 정보"><p>{topic.summary}</p></Section>
    {topic.sections?.map((section) => <Section key={section.heading} title={section.heading}><p>{section.body}</p></Section>)}
    <Section title="관련 질환"><LinkPills items={diseases} hrefs={diseaseHrefs} empty="연결된 질환 노트를 정리 중입니다." /></Section>
    <Section title="연관 구조">{targetStructure ? <StructureLinks structures={relatedStructures(atlas, targetStructure.id)} /> : targetPathway ? <StructureLinks structures={(targetPathway.nodes ?? []).flatMap((structureId) => atlas.structures.filter((structure) => structure.id === structureId))} /> : targetReflex ? <StructureLinks structures={(targetReflex.route ?? []).flatMap((structureId) => atlas.structures.filter((structure) => structure.id === structureId))} /> : <p className="text-sm text-slate-500">연관 구조를 정리 중입니다.</p>}</Section>
    <Section title="지도에서 보기"><Link href={`/nervous-system-hub?view=${topic.viewId}${targetPathway ? `&pathway=${targetPathway.id}` : targetStructure ? `&structure=${targetStructure.id}` : ""}`} className="inline-flex rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-800">Atlas에서 확인하기</Link></Section>
  </NoteFrame>;
}

function NoteFrame({ icon: Icon, typeLabel, title, subtitle, backHref, source, children }: { icon: typeof BookOpen; typeLabel: string; title: string; subtitle: string; backHref: string; source: React.ReactNode; children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8"><Link href={backHref} className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900"><ArrowLeft className="h-4 w-4" />신경계 Hub로 돌아가기</Link><header className="mt-5 border-b border-slate-200 pb-8"><p className="flex items-center gap-2 text-xs font-bold tracking-[.15em] text-teal-700"><Icon className="h-4 w-4" />{typeLabel}</p><h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1><p className="mt-2 text-base text-slate-500">{subtitle}</p></header><div className="mt-8 grid gap-10 xl:grid-cols-[minmax(0,1fr)_290px]"><article className="space-y-8">{children}</article><aside className="xl:sticky xl:top-6 xl:self-start">{source}</aside></div></main>;
}
