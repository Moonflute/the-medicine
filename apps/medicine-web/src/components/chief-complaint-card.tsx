import type { ChiefComplaintNote } from "@/lib/webdb";

export function ChiefComplaintCard({
  note,
  href,
}: {
  note: ChiefComplaintNote;
  href?: string;
}) {
  const body = (
    <article className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-stone-500">{note.category || "Chief Complaint"}</div>
      <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-stone-900">{note.title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <section>
          <div className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">Concept</div>
          <div className="space-y-2 text-sm leading-6 text-stone-700">
            {note.concept.slice(0, 4).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">Differentials</div>
          <div className="space-y-2 text-sm leading-6 text-stone-700">
            {note.differentials.slice(0, 6).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      </div>
    </article>
  );

  if (!href) return body;

  return (
    <a href={href} className="block transition hover:-translate-y-0.5">
      {body}
    </a>
  );
}
