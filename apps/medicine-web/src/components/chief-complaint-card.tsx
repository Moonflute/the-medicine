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
    <article className="surface p-5 sm:p-6">
      <div className="eyebrow">{note.category || "Chief Complaint"}</div>
      <h2 className="mt-2 text-xl font-semibold text-slate-950">{note.title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <section>
          <div className="mb-2 text-xs font-semibold uppercase text-slate-500">Concept</div>
          <RichTextLines lines={note.concept.slice(0, 4)} />
        </section>
        <section>
          <div className="mb-2 text-xs font-semibold uppercase text-slate-500">Differentials</div>
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

