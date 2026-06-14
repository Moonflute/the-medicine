import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildLabImgGroups } from "@/lib/lab-img-groups";
import { getLabImgNotes } from "@/lib/webdb";

function countNotes(group: ReturnType<typeof buildLabImgGroups>[number]) {
  return (
    group.directNotes.length +
    group.childGroups.reduce((sum, child) => sum + child.notes.length + (child.overviewNote ? 1 : 0), 0) +
    (group.overviewNote ? 1 : 0)
  );
}

export default function LabImgPage() {
  const groups = buildLabImgGroups(getLabImgNotes());

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Lab & Img</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Lab & Imaging</h1>
      </header>

      <section className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm sm:p-6">
        <div className="mb-4 text-xs uppercase tracking-[0.22em] text-stone-500">Top-level categories</div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <Link
              key={group.slug}
              href={`/lab-img/category/${group.slug}`}
              className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/80 px-4 py-4 transition hover:border-stone-300 hover:bg-white"
            >
              <div>
                <div className="font-serif text-lg font-semibold tracking-tight text-stone-900">{group.title}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">{countNotes(group)} notes</div>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-stone-400" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
