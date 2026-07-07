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
    <section className="list-tile p-4">
      <h2 className="text-lg font-semibold text-slate-950">{category.name}</h2>

      <div className="mt-3 flex flex-wrap gap-2">
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