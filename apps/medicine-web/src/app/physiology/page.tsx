import { DomainNoteCard } from "@/components/domain-note-card";
import { getPhysiologyNotes } from "@/lib/webdb";

export default function PhysiologyPage() {
  const notes = getPhysiologyNotes();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Physiology</div>
        <h1 className="page-title">Physiology</h1>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {notes.map((note) => (
          <DomainNoteCard key={note.slug} note={note} href={`/physiology/${note.slug}`} />
        ))}
      </div>
    </div>
  );
}

