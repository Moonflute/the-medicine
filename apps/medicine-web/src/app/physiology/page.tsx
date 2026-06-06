import { DomainNoteCard } from "@/components/domain-note-card";
import { getPhysiologyNotes } from "@/lib/webdb";

export default function PhysiologyPage() {
  const notes = getPhysiologyNotes();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Physiology</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Physiology</h1>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {notes.map((note) => (
          <DomainNoteCard key={note.slug} note={note} href={`/physiology/${note.slug}`} />
        ))}
      </div>
    </div>
  );
}
