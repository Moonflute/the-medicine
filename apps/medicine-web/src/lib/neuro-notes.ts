import type { NeuroAtlas } from "@/lib/webdb";

export const neuroNoteKinds = ["structure", "pathway", "reflex", "topic"] as const;
export type NeuroNoteKind = (typeof neuroNoteKinds)[number];

export function isNeuroNoteKind(value: string): value is NeuroNoteKind {
  return neuroNoteKinds.includes(value as NeuroNoteKind);
}

export function neuroNoteHref(kind: NeuroNoteKind, id: string) {
  return `/nervous-system-hub/notes/${kind}/${encodeURIComponent(id)}`;
}

export function medicalTerm(label: string) {
  const match = label.match(/\(([^()]+)\)\s*$/);
  return match?.[1] ?? label;
}

export function getNeuroNoteItem(atlas: NeuroAtlas, kind: NeuroNoteKind, id: string) {
  if (kind === "structure") return atlas.structures.find((item) => item.id === id);
  if (kind === "pathway") return atlas.pathways.find((item) => item.id === id);
  if (kind === "reflex") return atlas.reflexes.find((item) => item.id === id);
  return atlas.theoryTopics.find((item) => item.id === id);
}

export function relatedStructures(atlas: NeuroAtlas, structureId: string) {
  const structure = atlas.structures.find((item) => item.id === structureId);
  if (!structure) return [];
  const related = new Set<string>();
  for (const pathway of atlas.pathways) {
    if (pathway.nodes?.includes(structureId)) pathway.nodes.forEach((id) => related.add(id));
  }
  for (const reflex of atlas.reflexes) {
    if (reflex.route?.includes(structureId)) reflex.route.forEach((id) => related.add(id));
  }
  for (const candidate of atlas.structures) {
    if (candidate.id !== structureId && candidate.viewIds?.some((viewId) => structure.viewIds?.includes(viewId))) related.add(candidate.id);
  }
  related.delete(structureId);
  return [...related]
    .map((id) => atlas.structures.find((item) => item.id === id))
    .filter((item): item is NeuroAtlas["structures"][number] => Boolean(item))
    .slice(0, 12);
}

export function diseasesForStructure(atlas: NeuroAtlas, structureId: string) {
  return atlas.structures.find((item) => item.id === structureId)?.links ?? [];
}

export function diseasesForReflex(atlas: NeuroAtlas, reflexId: string) {
  const reflex = atlas.reflexes.find((item) => item.id === reflexId);
  return [...new Set((reflex?.route ?? []).flatMap((structureId) => diseasesForStructure(atlas, structureId)))];
}
