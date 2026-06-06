import type { ChiefComplaintNote } from "@/lib/webdb";
import { RichTextLines } from "@/components/rich-text-lines";

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
          <RichTextLines lines={note.concept.slice(0, 4)} />
        </section>
        <section>
          <div className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">Differentials</div>
          <RichTextLines lines={note.differentials.slice(0, 6)} />
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
