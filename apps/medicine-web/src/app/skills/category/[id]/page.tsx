import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { SkinEntry } from "@/components/skin-entry";
import { SkillCategoryIcon } from "@/components/skill-category-icon";
import { ParentPageFab } from "@/components/parent-page-fab";
import { getSkillCategoryById, getSkillsCategories } from "@/lib/webdb";

export const dynamicParams = false;

export function generateStaticParams() {
  const ids = getSkillsCategories().flatMap(category => [category.id, ...(category.legacyIds || [])]);
  return ids.length ? [...new Set(ids)].map(id => ({ id })) : [{ id: "__empty__" }];
}

export default async function SkillCategoryDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  if (id === "__empty__") return null;
  const category = getSkillCategoryById(id);
  if (!category) notFound();
  const groups = category.groups?.length ? category.groups : [{ name: "", items: category.items }];

  return (
    <div className="page-stack">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/skills" className="transition hover:text-slate-950">술기 및 처치</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{category.name}</span>
      </div>
      <header className="page-header">
        <h1 className="page-title flex items-center gap-3">
          <SkillCategoryIcon iconName={category.iconName} className="h-7 w-7 shrink-0 text-teal-700" />
          {category.name}
        </h1>
      </header>
      {groups.map(group => (
        <section key={group.name} className="rounded-lg border border-slate-200 bg-white/85 p-4 shadow-sm sm:p-5">
          {group.name ? <h2 className="mb-4 text-base font-semibold text-slate-950">{group.name}</h2> : null}
          <div className="grid gap-2 sm:grid-cols-2">
            {group.items.map(skill => (
              <SkinEntry key={skill.id} title={skill.name} meta={group.name || category.name}
                href={`/skills/${skill.id}`}
                className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-3 text-sm transition hover:border-teal-300 hover:bg-teal-50/50">
                <span className="min-w-0 font-medium leading-snug text-slate-950">{skill.name}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
              </SkinEntry>
            ))}
          </div>
        </section>
      ))}
      <ParentPageFab href="/skills" />
    </div>
  );
}
