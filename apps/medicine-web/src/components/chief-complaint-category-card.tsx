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
    <section className="list-tile p-4 sm:p-5">
      <h2 className="text-lg font-semibold text-slate-950">{category.name}</h2>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/cc/category/${category.slug}/${note.slug}`}
            className="flex min-h-14 items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-2 text-center text-sm font-semibold leading-snug text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 sm:min-h-16 sm:px-3 xl:min-h-20 xl:text-base"
          >
            {note.title}
          </Link>
        ))}
      </div>
    </section>
  );
}