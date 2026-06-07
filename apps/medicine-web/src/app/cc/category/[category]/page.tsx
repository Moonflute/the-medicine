import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getChiefComplaintCategories, getChiefComplaintsByCategory } from "@/lib/webdb";

export function generateStaticParams() {
  return getChiefComplaintCategories().map((category) => ({ category: category.slug }));
}

export default async function ChiefComplaintCategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const notes = getChiefComplaintsByCategory(params.category);
  const title = notes[0]?.category;

  if (notes.length === 0 || !title) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-stone-500">
        <Link href="/cc" className="transition hover:text-stone-900">
          CC
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-stone-900">{title}</span>
      </div>

      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Chief Complaint Category</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">{title}</h1>
      </header>

      <div className="grid gap-3">
        {notes.map((note, index) => (
          <Link
            key={note.slug}
            href={`/cc/category/${params.category}/${note.slug}`}
            className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white/85 px-4 py-4 shadow-sm transition hover:border-stone-300"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600">
                {index + 1}
              </span>
              <span className="truncate font-medium text-stone-900">{note.title}</span>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-stone-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
