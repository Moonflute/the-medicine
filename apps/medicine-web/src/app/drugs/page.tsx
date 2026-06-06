import { DomainNoteCard } from "@/components/domain-note-card";
import { getDrugs } from "@/lib/webdb";

export default function DrugsPage() {
  const notes = getDrugs();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Drugs</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Pharmacology</h1>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {notes.slice(0, 80).map((note) => (
          <DomainNoteCard key={note.slug} note={note} href={`/drugs/${note.slug}`} />
        ))}
      </div>
    </div>
  );
}
