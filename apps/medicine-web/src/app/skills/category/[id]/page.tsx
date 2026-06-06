import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills-data";

export function generateStaticParams() {
  return SKILL_CATEGORIES.map((category) => ({ id: category.id }));
}

export default async function SkillCategoryDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const category = SKILL_CATEGORIES.find((item) => item.id === params.id);

  if (!category) notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-stone-500">
        <Link href="/skills" className="transition hover:text-stone-900">
          Clinical Skills
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-stone-900">{category.name}</span>
      </div>

      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
            <category.icon className="h-7 w-7" />
          </div>
          <h1 className="font-serif text-4xl font-semibold tracking-tight">{category.name}</h1>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {category.items.map((skill, index) => (
          <Link
            key={skill.id}
            href={`/skills/${skill.id}`}
            className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white/85 px-4 py-4 shadow-sm transition hover:border-stone-300"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600">
                {index + 1}
              </span>
              <span className="truncate font-medium text-stone-900">{skill.name}</span>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-stone-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
