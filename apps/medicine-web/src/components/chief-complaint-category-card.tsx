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
            className="flex min-h-12 min-w-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-1.5 py-1.5 text-center text-[13px] font-semibold leading-snug text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 sm:min-h-14 sm:px-2 sm:text-sm xl:min-h-16 xl:text-base"
          >
            <span className="min-w-0 whitespace-normal break-words">{note.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}