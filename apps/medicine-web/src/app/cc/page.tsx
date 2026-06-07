import { ChiefComplaintCategoryCard } from "@/components/chief-complaint-category-card";
import { getChiefComplaintCategories } from "@/lib/webdb";

export default function ChiefComplaintPage() {
  const categories = getChiefComplaintCategories();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Chief Complaint</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">CC</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <ChiefComplaintCategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
