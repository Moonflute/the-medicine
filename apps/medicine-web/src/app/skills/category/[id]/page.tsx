import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { SkillCategoryIcon } from "@/components/skill-category-icon";
import { ParentPageFab } from "@/components/parent-page-fab";
import { getSkillCategoryById, getSkillsCategories } from "@/lib/webdb";

export const dynamicParams = false;

export function generateStaticParams() {
  const categories = getSkillsCategories();
  return categories.length > 0 ? categories.map((category) => ({ id: category.id })) : [{ id: "__empty__" }];
}

export default async function SkillCategoryDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  if (params.id === "__empty__") return null;

  const category = getSkillCategoryById(params.id);

  if (!category) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/skills" className="transition hover:text-slate-950">
          Clinical Skills
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{category.name}</span>
      </div>

      <header className="rounded-lg border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-teal-50 p-3 text-teal-700">
            <SkillCategoryIcon iconName={category.iconName} className="h-7 w-7" />
          </div>
          <h1 className="text-4xl font-semibold ">{category.name}</h1>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {category.items.map((skill, index) => (
          <Link
            key={skill.id}
            href={`/skills/${skill.id}`}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/85 px-4 py-4 shadow-sm transition hover:border-slate-300"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                {index + 1}
              </span>
              <span className="truncate font-medium text-slate-950">{skill.name}</span>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
          </Link>
        ))}
      </div>
      <ParentPageFab href="/skills" />
    </div>
  );
}
