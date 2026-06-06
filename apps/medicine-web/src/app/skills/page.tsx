import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills-data";

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Skills</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Clinical Skills</h1>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={`/skills/category/${category.id}`}
            className="rounded-[28px] border border-stone-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900">{category.name}</h2>
                  <p className="mt-1 text-sm text-stone-600">{category.items.length} skills</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-stone-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
