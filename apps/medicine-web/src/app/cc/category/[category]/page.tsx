import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ParentPageFab } from "@/components/parent-page-fab";
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
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/cc" className="transition hover:text-slate-950">
          CC
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{title}</span>
      </div>

      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase  text-slate-500">Chief Complaint Category</div>
        <h1 className="mt-3 text-4xl font-semibold ">{title}</h1>
      </header>

      <div className="grid gap-3">
        {notes.map((note, index) => (
          <Link
            key={note.slug}
            href={`/cc/category/${params.category}/${note.slug}`}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/85 px-4 py-4 shadow-sm transition hover:border-slate-300"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                {index + 1}
              </span>
              <span className="truncate font-medium text-slate-950">{note.title}</span>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
          </Link>
        ))}
      </div>
      <ParentPageFab href="/cc" />
    </div>
  );
}
