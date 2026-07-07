import Link from "next/link";
import type { ChiefComplaintCategorySummary } from "@/lib/webdb";

export function ChiefComplaintCategoryCard({ category }: { category: ChiefComplaintCategorySummary }) {
  return (
    <Link href={`/cc/category/${category.slug}`} className="list-tile block p-5">
      <div className="eyebrow">Chief Complaint</div>
      <h2 className="mt-2 text-xl font-semibold text-slate-950">{category.name}</h2>
      <p className="mt-2 text-sm text-slate-600">{category.count} items</p>
    </Link>
  );
}

