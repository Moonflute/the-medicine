import { DomainNoteCard } from "@/components/domain-note-card";
import { getPathologyNotes } from "@/lib/webdb";

export default function PathologyPage() {
  const notes = getPathologyNotes();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Pathology</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Pathology / Radiology</h1>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {notes.length > 0 ? notes.map((note) => <DomainNoteCard key={note.slug} note={note} />) : <div className="rounded-[28px] border border-dashed border-stone-300 bg-white/70 p-8 text-stone-600">No pathology/radiology notes have been generated yet.</div>}
      </div>
    </div>
  );
}
