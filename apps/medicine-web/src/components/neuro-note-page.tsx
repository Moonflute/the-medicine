import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, Route, Stethoscope } from "lucide-react";
import { DocumentToolbar } from "@/components/document-toolbar";
import type { NeuroAtlas } from "@/lib/webdb";
import { diseasesForPathway, diseasesForReflex, diseasesForStructure, getNeuroNoteItem, medicalTerm, neuroNoteHref, relatedStructures, type NeuroNoteKind } from "@/lib/neuro-notes";

type Props = {
  atlas: NeuroAtlas;
  kind: NeuroNoteKind;
  id: string;
  diseaseHrefs: Record<string, string>;
  drugHrefs: Record<string, string>;
};

type NotePayload = NonNullable<NeuroAtlas["structures"][number]["note"]>;
type NoteItem = NotePayload["anatomy"][number];

function Section({ title, items, empty }: { title: string; items: NoteItem[]; empty?: string }) {
  if (!items.length && !empty) return null;
  return (
    <section className="border-t border-slate-200 pt-7">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      {items.length ? <dl className="mt-4 grid gap-3">{items.map((item, index) => (
        <div key={`${item.label ?? "item"}-${index}`} className="rounded-xl bg-slate-50 px-4 py-3">
          {item.label ? <dt className="text-sm font-bold text-slate-950">{item.label}</dt> : null}
          <dd className={`${item.label ? "mt-1 " : ""}text-[15px] leading-7 text-slate-700`}>{item.text}</dd>
        </div>
      ))}</dl> : <p className="mt-3 text-sm text-slate-500">{empty}</p>}
    </section>
  );
}

function TermLinks({ title, items, hrefs, empty }: { title: string; items: string[]; hrefs: Record<string, string>; empty: string }) {
  const unique = [...new Set(items)];
  return (
    <section className="border-t border-slate-200 pt-7">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      {unique.length ? <div className="mt-4 flex flex-wrap gap-2">{unique.map((item) => {
        const href = hrefs[item] ?? `/search?q=${encodeURIComponent(item)}`;
        return <Link key={item} href={href} className="inline-flex items-center rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-950 hover:border-teal-500 hover:bg-white">{medicalTerm(item)}<ChevronRight className="ml-1 h-3.5 w-3.5" /></Link>;
      })}</div> : <p className="mt-3 text-sm text-slate-500">{empty}</p>}
    </section>
  );
}

function RelatedLinks({ atlas, related, fallbackIds = [] }: { atlas: NeuroAtlas; related: NotePayload["related"]; fallbackIds?: string[] }) {
  const entries = related.length ? related : fallbackIds.map((id) => {
    const structure = atlas.structures.find((item) => item.id === id);
    return { id, label: structure?.en, text: structure?.summary ?? "연관된 해부 구조입니다." };
  });
  return (
    <section className="border-t border-slate-200 pt-7">
      <h2 className="text-xl font-bold text-slate-950">연관 구조</h2>
      {entries.length ? <div className="mt-4 grid gap-3 sm:grid-cols-2">{entries.map((entry) => {
        const structure = atlas.structures.find((item) => item.id === entry.id);
        const title = structure?.en ?? entry.label ?? entry.id;
        const subtitle = structure?.ko;
        return <Link key={entry.id} href={neuroNoteHref("structure", entry.id)} className="rounded-xl border border-slate-200 px-4 py-3 hover:border-teal-500 hover:bg-teal-50"><span className="block font-semibold text-slate-950">{title}</span>{subtitle ? <span className="mt-0.5 block text-xs font-medium text-slate-500">{subtitle}</span> : null}<span className="mt-2 block text-sm leading-6 text-slate-600">{entry.text}</span></Link>;
      })}</div> : <p className="mt-3 text-sm text-slate-500">연결된 구조 정보가 아직 없습니다.</p>}
    </section>
  );
}

function Sources({ atlas, sourceIds }: { atlas: NeuroAtlas; sourceIds: string[] }) {
  const sourceById = new Map(atlas.sources.filter((source) => source.id).map((source) => [source.id!, source]));
  const sources = [...new Set(sourceIds)].flatMap((id) => {
    const source = sourceById.get(id);
    return source ? [source] : [];
  });
  return <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><p className="text-xs font-bold tracking-[.14em] text-slate-500">출처</p>{sources.length ? <div className="mt-3 grid gap-2">{sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium leading-5 text-slate-700 hover:border-teal-500">{source.title ?? source.label}</a>)}</div> : <p className="mt-3 text-sm text-slate-500">등록된 출처가 없습니다.</p>}</section>;
}

function NoteBody({ atlas, note, diseases, diseaseHrefs, drugs, drugHrefs, relatedIds, atlasHref }: { atlas: NeuroAtlas; note: NotePayload; diseases: string[]; diseaseHrefs: Record<string, string>; drugs: string[]; drugHrefs: Record<string, string>; relatedIds?: string[]; atlasHref: string }) {
  return <>
    <Section title="해부학 정보" items={note.anatomy} />
    <Section title="담당 혹은 관련 기능" items={note.function} />
    <Section title="문제 발생 시 나타날 수 있는 증상·징후" items={note.clinical} empty="임상 증상과 징후를 정리 중입니다." />
    <TermLinks title="관련 질환" items={[...new Set([...note.diseases, ...diseases])]} hrefs={diseaseHrefs} empty="연결된 질환 노트를 정리 중입니다." />
    {drugs.length ? <TermLinks title="관련 약물" items={drugs} hrefs={drugHrefs} empty="연결된 약물 노트가 없습니다." /> : null}
    <RelatedLinks atlas={atlas} related={note.related} fallbackIds={relatedIds} />
    <section className="border-t border-slate-200 pt-7"><h2 className="text-xl font-bold text-slate-950">Atlas에서 보기</h2><Link href={atlasHref} className="mt-4 inline-flex rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-800">해당 위치 확인</Link></section>
  </>;
}

export function NeuroNotePage({ atlas, kind, id, diseaseHrefs, drugHrefs }: Props) {
  const item = getNeuroNoteItem(atlas, kind, id);
  if (!item) return null;
  const Icon = kind === "pathway" ? Route : kind === "reflex" ? Stethoscope : BookOpen;

  if (kind === "structure") {
    const structure = item as NeuroAtlas["structures"][number];
    const note = structure.note;
    if (!note) return null;
    return <Frame icon={Icon} typeLabel="해부 구조 노트" title={structure.en} subtitle={structure.ko} backHref="/nervous-system-hub?tab=notes" source={<Sources atlas={atlas} sourceIds={note.sourceIds ?? structure.sourceIds ?? []} />}><NoteBody atlas={atlas} note={note} diseases={diseasesForStructure(atlas, structure.id)} diseaseHrefs={diseaseHrefs} drugs={structure.drugLinks ?? []} drugHrefs={drugHrefs} relatedIds={relatedStructures(atlas, structure.id).map((entry) => entry.id)} atlasHref={`/nervous-system-hub?view=${structure.viewIds?.[0] ?? "whole-neuraxis"}&structure=${structure.id}`} /></Frame>;
  }

  if (kind === "pathway") {
    const pathway = item as NeuroAtlas["pathways"][number];
    const note = pathway.note;
    if (!note) return null;
    return <Frame icon={Icon} typeLabel="신경 경로 노트" title={pathway.en} subtitle={pathway.ko} backHref="/nervous-system-hub?tab=notes" source={<Sources atlas={atlas} sourceIds={note.sourceIds ?? pathway.sourceIds ?? []} />}><NoteBody atlas={atlas} note={note} diseases={diseasesForPathway(atlas, pathway.id)} diseaseHrefs={diseaseHrefs} drugs={pathway.drugLinks ?? []} drugHrefs={drugHrefs} relatedIds={pathway.nodes} atlasHref={`/nervous-system-hub?pathway=${pathway.id}`} /></Frame>;
  }

  if (kind === "reflex") {
    const reflex = item as NeuroAtlas["reflexes"][number];
    const note = reflex.note;
    if (!note) return null;
    return <Frame icon={Icon} typeLabel="NEx · 반사 노트" title={reflex.label} subtitle="Neurological examination" backHref="/nervous-system-hub?tab=nex" source={<Sources atlas={atlas} sourceIds={note.sourceIds ?? reflex.sourceIds ?? []} />}><NoteBody atlas={atlas} note={note} diseases={diseasesForReflex(atlas, reflex.id)} diseaseHrefs={diseaseHrefs} drugs={[]} drugHrefs={drugHrefs} relatedIds={reflex.route} atlasHref={`/nervous-system-hub?view=${reflex.viewId ?? "whole-neuraxis"}&structure=${reflex.route?.[0] ?? ""}`} /></Frame>;
  }

  const topic = item as NeuroAtlas["theoryTopics"][number];
  const note = topic.note;
  if (!note) return null;
  let topicDiseases: string[] = [];
  if (topic.itemId) {
    if (atlas.structures.some((entry) => entry.id === topic.itemId)) topicDiseases = diseasesForStructure(atlas, topic.itemId);
    else if (atlas.pathways.some((entry) => entry.id === topic.itemId)) topicDiseases = diseasesForPathway(atlas, topic.itemId);
    else if (atlas.reflexes.some((entry) => entry.id === topic.itemId)) topicDiseases = diseasesForReflex(atlas, topic.itemId);
  }
  return <Frame icon={Icon} typeLabel="신경계 이론 노트" title={topic.title} subtitle={topic.category} backHref="/nervous-system-hub?tab=notes" source={<Sources atlas={atlas} sourceIds={note.sourceIds ?? topic.sourceIds} />}><NoteBody atlas={atlas} note={note} diseases={topicDiseases} diseaseHrefs={diseaseHrefs} drugs={topic.drugLinks ?? []} drugHrefs={drugHrefs} atlasHref={`/nervous-system-hub?view=${topic.viewId}${topic.itemId ? `&structure=${topic.itemId}` : ""}`} /></Frame>;
}

function Frame({ icon: Icon, typeLabel, title, subtitle, backHref, source, children }: { icon: typeof BookOpen; typeLabel: string; title: string; subtitle: string; backHref: string; source: React.ReactNode; children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8"><Link href={backHref} className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900"><ArrowLeft className="h-4 w-4" />신경계 Hub로 돌아가기</Link><DocumentToolbar title={title} className="mt-5" /><header className="mt-5 border-b border-slate-200 pb-8"><p className="flex items-center gap-2 text-xs font-bold tracking-[.15em] text-teal-700"><Icon className="h-4 w-4" />{typeLabel}</p><h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1><p className="mt-2 text-base text-slate-500">{subtitle}</p></header><div className="mt-8 grid gap-10 xl:grid-cols-[minmax(0,1fr)_290px]"><article className="space-y-8">{children}</article><aside className="xl:sticky xl:top-6 xl:self-start">{source}</aside></div></main>;
}
