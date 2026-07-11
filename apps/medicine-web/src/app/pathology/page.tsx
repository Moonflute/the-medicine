import { DomainNoteCard } from "@/components/domain-note-card";
import { getPathologyNotes } from "@/lib/webdb";

export default function PathologyPage() {
  const notes = getPathologyNotes();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Pathology</div>
        <h1 className="page-title">Pathology / Radiology</h1>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {notes.length > 0 ? notes.map((note) => <DomainNoteCard key={note.slug} note={note} />) : <div className="surface border-dashed p-8 text-slate-600">No pathology/radiology notes have been generated yet.</div>}
      </div>
    </div>
  );
}

