import Link from "next/link";
import { ChevronRight } from "lucide-react";
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/skills/category/${category.id}`} className="list-tile p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="shrink-0 bg-teal-50 p-3 text-teal-700" style={{ borderRadius: 8 }}>
                  <SkillCategoryIcon iconName={category.iconName} className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-xl font-semibold text-slate-950">{category.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{category.items.length} skills</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

