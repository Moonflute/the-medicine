import { SkinEntry } from "@/components/skin-entry";
import { SkillCategoryIcon } from "@/components/skill-category-icon";
import { getSkillsCategories } from "@/lib/webdb";

export default function SkillsPage() {
  const categories = getSkillsCategories();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Procedures &amp; Care</div>
        <h1 className="page-title">술기 및 처치</h1>
      </header>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <SkinEntry key={category.id} title={category.name} meta={`${category.items.length}개 문서`}
            href={`/skills/category/${category.id}`}
            className="list-tile flex min-h-16 items-center gap-3 px-3 py-3 text-sm font-semibold text-slate-950">
            <SkillCategoryIcon iconName={category.iconName} className="h-5 w-5 shrink-0 text-teal-700" />
            <span className="min-w-0 flex-1 leading-snug">{category.name}</span>
            <span className="text-xs font-normal tabular-nums text-slate-500">{category.items.length}</span>
          </SkinEntry>
        ))}
      </div>
    </div>
  );
}
