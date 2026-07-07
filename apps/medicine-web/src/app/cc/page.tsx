import { ChiefComplaintCategoryCard } from "@/components/chief-complaint-category-card";
import { getChiefComplaintCategories } from "@/lib/webdb";

export default function ChiefComplaintPage() {
  const categories = getChiefComplaintCategories();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Chief Complaint</div>
        <h1 className="page-title">CC</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <ChiefComplaintCategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}

