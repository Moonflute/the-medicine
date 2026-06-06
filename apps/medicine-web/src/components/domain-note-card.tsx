import type { DomainNote } from "@/lib/webdb";

export function DomainNoteCard({
  note,
  href,
}: {
  note: DomainNote;
  href?: string;
}) {
  const body = (
    <article className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-stone-500">{note.category}</div>
      <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-stone-900">{note.title}</h2>
      {note.folder ? <p className="mt-2 text-sm text-stone-500">{note.folder}</p> : null}
      <div className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
        {note.summary.slice(0, 6).map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-4 text-xs text-stone-400">{note.sourcePath}</div>
    </article>
  );

  if (!href) return body;

  return (
    <a href={href} className="block transition hover:-translate-y-0.5">
      {body}
    </a>
  );
}
