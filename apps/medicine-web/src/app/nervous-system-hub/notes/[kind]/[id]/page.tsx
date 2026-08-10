import { notFound } from "next/navigation";
import { NeuroNotePage } from "@/components/neuro-note-page";
import { getAllDiseases, getDrugs, getNervousSystemAtlas } from "@/lib/webdb";
import { getNeuroNoteItem, isNeuroNoteKind, neuroNoteKinds } from "@/lib/neuro-notes";

export function generateStaticParams() {
  const atlas = getNervousSystemAtlas();
  return neuroNoteKinds.flatMap((kind) => {
    const items = kind === "structure" ? atlas.structures : kind === "pathway" ? atlas.pathways : kind === "reflex" ? atlas.reflexes : atlas.theoryTopics;
    return items.map((item) => ({ kind, id: item.id }));
  });
}

export default async function NervousSystemNotePage(props: { params: Promise<{ kind: string; id: string }> }) {
  const { kind, id } = await props.params;
  if (!isNeuroNoteKind(kind)) notFound();
  const atlas = getNervousSystemAtlas();
  if (!getNeuroNoteItem(atlas, kind, id)) notFound();
  const diseaseHrefs = Object.fromEntries(getAllDiseases().map((disease) => [disease.title, `/disease/${disease.slug}`]));
  const drugHrefs = Object.fromEntries(getDrugs().map((drug) => [drug.title, `/drugs/${drug.slug}`]));
  return <NeuroNotePage atlas={atlas} kind={kind} id={id} diseaseHrefs={diseaseHrefs} drugHrefs={drugHrefs} />;
}
