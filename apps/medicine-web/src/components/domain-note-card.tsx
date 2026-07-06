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
    <article className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-stone-500">{note.category}</div>
      <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-stone-900">{note.title}</h2>

      {note.drugMeta ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {note.folder ? <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">{note.folder}</span> : null}
          {note.drugMeta.detailClass ? (
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">{note.drugMeta.detailClass}</span>
          ) : null}
          {note.drugMeta.clinicalCore ? (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">Clinical core</span>
          ) : null}
          {priorityLabel ? <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">{priorityLabel}</span> : null}
        </div>
      ) : null}

      {brands.length > 0 ? (
        <p className="mt-3 text-sm leading-6 text-stone-600">
          Brands <span className="font-medium text-stone-800">{brands.slice(0, 2).join(", ")}</span>
        </p>
      ) : null}

      <RichTextLines lines={note.summary.slice(0, 5)} className="mt-4 space-y-2 text-sm leading-6 text-stone-700" />
    </article>
  );

  if (!href) return body;

  return (
    <Link href={href} className="block transition hover:-translate-y-0.5">
      {body}
    </Link>
  );
}
