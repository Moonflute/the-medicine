import Link from "next/link";
import type { ChiefComplaintCategorySummary } from "@/lib/webdb";

export function ChiefComplaintCategoryCard({ category }: { category: ChiefComplaintCategorySummary }) {
  return (
    <Link
      href={`/cc/category/${category.slug}`}
      className="rounded-[28px] border border-stone-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300"
    >
      <div className="text-xs uppercase tracking-[0.22em] text-stone-500">Chief Complaint</div>
      <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-stone-900">{category.name}</h2>
      <p className="mt-2 text-sm text-stone-600">{category.count} items</p>
    </Link>
  );
}
