import Link from "next/link";
import type { ChiefComplaintCategorySummary, ChiefComplaintGroupSummary, ChiefComplaintNote } from "@/lib/webdb";
function NaturalTitleBreaks({ title }: { title: string }) {
  return title.split(/(\s*\/\s*|\s*\()/).map((part, index) => {
    const token = part.trim();
    if (token === "/") {
      return <span key={index}>{"\u00a0/"}<wbr /></span>;
    }
    if (token === "(") {
      return <span key={index}><wbr />{"\u00a0("}</span>;
    }
    return <span key={index}>{part}</span>;
  });
}

export function ChiefComplaintCategoryCard({
  category,
  notes,
  groups,
}: {
  category: ChiefComplaintCategorySummary;
  notes: ChiefComplaintNote[];
  groups?: ChiefComplaintGroupSummary[];
}) {
  return (
    <section className="list-tile p-4 sm:p-5">
      <h2 className="text-lg font-semibold text-slate-950">
        {groups ? <Link href={`/cc/category/${category.slug}`} className="hover:text-teal-800">{category.name}</Link> : category.name}
      </h2>

      {groups ? <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {groups.map((group) => (
          <Link key={group.slug} href={`/cc/category/${category.slug}/group/${group.slug}`} className="relative flex min-h-12 min-w-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-1.5 py-1.5 text-center text-[13px] font-semibold leading-snug text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 sm:min-h-14 sm:px-2 sm:text-sm xl:min-h-16 xl:text-base">
            <span className="min-w-0 whitespace-normal break-keep">{group.name}</span>
            {group.count > 0 && <span className="absolute right-2 text-xs font-medium text-slate-500">{group.count}</span>}
          </Link>
        ))}
      </div> : <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/cc/category/${category.slug}/${note.slug}`}
            className="flex min-h-12 min-w-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-1.5 py-1.5 text-center text-[13px] font-semibold leading-snug text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 sm:min-h-14 sm:px-2 sm:text-sm xl:min-h-16 xl:text-base"
          >
            <span className="min-w-0 whitespace-normal break-keep"><NaturalTitleBreaks title={note.title} /></span>
          </Link>
        ))}
      </div>}
    </section>
  );
}
