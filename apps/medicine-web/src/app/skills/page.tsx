import Link from "next/link";
import { SkillCategoryIcon } from "@/components/skill-category-icon";
import { getSkillsCategories } from "@/lib/webdb";

export default function SkillsPage() {
  const categories = getSkillsCategories();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Skills</div>
        <h1 className="page-title">Clinical Skills</h1>
      </header>

      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/skills/category/${category.id}`}
            className="list-tile flex min-h-10 items-center gap-1.5 px-2 py-2 text-xs font-semibold text-slate-950 sm:gap-2 sm:px-3 sm:text-sm"
          >
            <SkillCategoryIcon iconName={category.iconName} className="h-4 w-4 shrink-0 text-teal-700" />
            <span className="truncate">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
