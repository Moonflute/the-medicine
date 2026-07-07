import Link from "next/link";
import type { DomainNote } from "@/lib/webdb";
import { RichTextLines } from "@/components/rich-text-lines";

const PRIORITY_LABELS: Record<string, string> = {
  tier_1: "Core",
  tier_2: "Important",
  general: "General",
};

export function DomainNoteCard({
  note,
  href,
}: {
  note: DomainNote;
  href?: string;
}) {
  const priorityLabel = note.drugMeta?.priority ? (PRIORITY_LABELS[note.drugMeta.priority] ?? note.drugMeta.priority) : "";
  const brands = note.drugMeta?.brands?.filter(Boolean) ?? [];

  const body = (
    <article className="surface p-5 sm:p-6">
      <div className="eyebrow">{note.category}</div>
      <h2 className="mt-2 text-xl font-semibold text-slate-950">{note.title}</h2>

      {note.drugMeta ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {note.folder ? <span className="pill">{note.folder}</span> : null}
          {note.drugMeta.detailClass ? <span className="pill">{note.drugMeta.detailClass}</span> : null}
          {note.drugMeta.clinicalCore ? <span className="pill border-teal-200 bg-teal-50 text-teal-800">Clinical core</span> : null}
          {priorityLabel ? <span className="pill border-sky-200 bg-sky-50 text-sky-800">{priorityLabel}</span> : null}
        </div>
      ) : null}

      {brands.length > 0 ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Brands <span className="font-medium text-slate-900">{brands.slice(0, 2).join(", ")}</span>
        </p>
      ) : null}

      <RichTextLines lines={note.summary.slice(0, 5)} className="mt-4 space-y-2 text-sm leading-6 text-slate-700" />
    </article>
  );

  if (!href) return body;

  return (
    <Link href={href} className="block transition hover:-translate-y-0.5">
      {body}
    </Link>
  );
}

