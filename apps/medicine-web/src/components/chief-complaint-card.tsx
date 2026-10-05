import { SkinEntry } from "@/components/skin-entry";
import type { ChiefComplaintNote } from "@/lib/webdb";

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
    </article>
  );

  if (!href) return body;

  return (
    <SkinEntry href={href} title={note.title} meta={note.category} className="block transition hover:-translate-y-0.5">
      {body}
    </SkinEntry>
  );
}

