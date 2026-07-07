import Link from "next/link";
import type { ChiefComplaintCategorySummary, ChiefComplaintNote } from "@/lib/webdb";

export function ChiefComplaintCategoryCard({
  category,
  notes,
}: {
  category: ChiefComplaintCategorySummary;
  notes: ChiefComplaintNote[];
}) {
  return (
    <section className="list-tile p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="eyebrow">Chief Complaint</div>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">{category.name}</h2>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {category.count}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/cc/category/${category.slug}/${note.slug}`}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
          >
            {note.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
