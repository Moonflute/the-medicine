import type { DomainNote } from "@/lib/webdb";
import catalog from "./lab-document-catalog.json";
export type LabDocumentKind = "test" | "panel" | "index" | "imaging" | "tool";
export function labDocumentMeta(note: Pick<DomainNote, "relativePath">): { kind: LabDocumentKind; members?: string[] } {
  return (catalog as Record<string, { kind: LabDocumentKind; members?: string[] }>)[note.relativePath] ?? { kind: "test" };
}
