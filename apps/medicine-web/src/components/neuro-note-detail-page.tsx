import Link from "next/link";
import { ArrowLeft, BookOpen, Route, Stethoscope } from "lucide-react";
import type { NeuroAtlas } from "@/lib/webdb";
import { diseasesForReflex, getNeuroNoteItem, medicalTerm, neuroNoteHref, type NeuroNoteKind, relatedStructures } from "@/lib/neuro-notes";
import { pathwayNoteSections, reflexNoteSections, structureNoteSections, type NeuroNoteSection } from "@/lib/neuro-note-content";

type Props = {
  atlas: NeuroAtlas;
  kind: NeuroNoteKind;
  id: string;
  diseaseHrefs: Record<string, string>;
};

function Section({ section }: { section: NeuroNoteSection }) {
  if (!section.items.length) return null;
  return <section className="border-t border-slate-200 pt-7"><h2 className="text-xl font-bold text-slate-950">{section.heading}</h2><dl className="mt-4 space-y-3">{section.items.map((item, index) => <div key={`${item.label ?? "item"}-${index}`} className="rounded-xl bg-slate-50 px-4 py-3"><dt className="text-sm font-bold text-slate-950">{item.label}</dt><dd className={item.label ? "mt-1 text-[15px] leading-7 text-slate-700" : "text-[15px] leading-7 text-slate-700"}>{item.text}</dd></div>)}</dl></section>;
}

function DiseaseLinks({ items, hrefs }: { items: string[]; hrefs: Record<string, string> }) {
  const linked = items.filter((item) => hrefs[item]);
  if (!linked.length) return null;
  return <section className="border-t border-slate-200 pt-7"><h2 className="text-xl font-bold text-slate-950">관련 질환</h2><div className="mt-4 flex flex-wrap gap-2">{linked.map((item) => <Link key={item} href={hrefs[item]} className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-900 hover:border-teal-500 hover:bg-white">{medicalTerm(item)}</Link>)}</div></section>;
}

function RelatedStructureLinks({ structures }: { structures: NeuroAtlas["structures"] }) {
  if (!structures.length) return null;
  return <section className="border-t border-slate-200 pt-7"><h2 className="text-xl font-bold text-slate-950">관련 구조</h2><div className="mt-4 grid gap-2 sm:grid-cols-2">{structures.map((structure) => <Link key={structure.id} href={neuroNoteHref("structure", structure.id)} className="rounded-xl border border-slate-200 px-4 py-3 hover:border-teal-500 hover:bg-teal-50"><span className="block font-semibold text-slate-950">{structure.en}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{structure.summary}</span></Link>)}</div></section>;
}

export function NeuroNoteDetailPage({ atlas, kind, id, diseaseHrefs }: Props) {
  const item = getNeuroNoteItem(atlas, kind, id);
  if (!item) return null;
  const icon = kind === "pathway" ? Route : kind === "reflex" ? Stethoscope : BookOpen;

  if (kind === "structure") {
    const structure = item as NeuroAtlas["structures"][number];
    return <Frame icon={icon} label="해부학 구조 노트" title={structure.en} subtitle={structure.ko} backHref="/nervous-system-hub?tab=notes"><NoteBody sections={structureNoteSections(atlas, structure)} diseases={structure.links} diseaseHrefs={diseaseHrefs} related={relatedStructures(atlas, structure.id)} atlasHref={`/nervous-system-hub?structure=${structure.id}`} /></Frame>;
  }
  if (kind === "pathway") {
    const pathway = item as NeuroAtlas["pathways"][number];
    const structures = (pathway.nodes ?? []).flatMap((node) => atlas.structures.filter((structure) => structure.id === node));
    return <Frame icon={icon} label="신경 경로 노트" title={pathway.en} subtitle={pathway.ko} backHref="/nervous-system-hub?tab=notes"><NoteBody sections={pathwayNoteSections(pathway)} diseases={pathway.links} diseaseHrefs={diseaseHrefs} related={structures} atlasHref={`/nervous-system-hub?pathway=${pathway.id}`} /></Frame>;
  }
  if (kind === "reflex") {
    const reflex = item as NeuroAtlas["reflexes"][number];
    const structures = (reflex.route ?? []).flatMap((node) => atlas.structures.filter((structure) => structure.id === node));
    return <Frame icon={icon} label="NEx · 반사 노트" title={reflex.label} subtitle="Neurological examination" backHref="/nervous-system-hub?tab=nex"><NoteBody sections={reflexNoteSections(reflex)} diseases={diseasesForReflex(atlas, reflex.id)} diseaseHrefs={diseaseHrefs} related={structures} atlasHref={`/nervous-system-hub?view=${reflex.viewId ?? "whole-neuraxis"}`} /></Frame>;
  }

  const topic = item as NeuroAtlas["theoryTopics"][number];
  return <Frame icon={icon} label="이론 노트" title={topic.title} subtitle={topic.category} backHref="/nervous-system-hub?tab=notes"><article className="space-y-8"><Section section={{ heading: "핵심 개념", items: [{ text: topic.summary }] }} />{topic.sections?.map((section) => <Section key={section.heading} section={{ heading: section.heading, items: [{ text: section.body }] }} />)}</article></Frame>;
}

function NoteBody({ sections, diseases, diseaseHrefs, related, atlasHref }: { sections: NeuroNoteSection[]; diseases: string[]; diseaseHrefs: Record<string, string>; related: NeuroAtlas["structures"]; atlasHref: string }) {
  return <article className="space-y-8">{sections.map((section) => <Section key={section.heading} section={section} />)}<DiseaseLinks items={diseases} hrefs={diseaseHrefs} /><RelatedStructureLinks structures={related} /><section className="border-t border-slate-200 pt-7"><h2 className="text-xl font-bold text-slate-950">Atlas</h2><Link href={atlasHref} className="mt-4 inline-flex rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-teal-800">Atlas에서 보기</Link></section></article>;
}

function Frame({ icon: Icon, label, title, subtitle, backHref, children }: { icon: typeof BookOpen; label: string; title: string; subtitle: string; backHref: string; children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-6 sm:px-6 lg:px-8"><Link href={backHref} className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900"><ArrowLeft className="h-4 w-4" />신경계 Hub로 돌아가기</Link><header className="mt-5 border-b border-slate-200 pb-8"><p className="flex items-center gap-2 text-xs font-bold tracking-[.15em] text-teal-700"><Icon className="h-4 w-4" />{label}</p><h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1><p className="mt-2 text-base text-slate-500">{subtitle}</p></header><div className="mt-8">{children}</div></main>;
}
