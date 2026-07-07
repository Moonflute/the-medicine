import Link from "next/link";
import { Calculator, ChevronRight } from "lucide-react";
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
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Lab & Img</div>
        <h1 className="page-title">Lab & Imaging</h1>
      </header>

      <section>
        <div className="mb-3 text-sm font-semibold text-slate-700">Top-level categories</div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <Link href="/lab-img/medcalc" className="list-tile flex items-center justify-between gap-4 border-teal-200 bg-teal-50 px-4 py-4">
            <div className="min-w-0">
              <div className="inline-flex h-9 w-9 items-center justify-center bg-teal-700 text-white" style={{ borderRadius: 8 }}>
                <Calculator className="h-4 w-4" />
              </div>
              <div className="mt-3 text-lg font-semibold text-slate-950">MedCalc</div>
              <div className="mt-1 text-xs font-semibold uppercase text-slate-500">quick calculators</div>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
          </Link>
          {groups.map((group) => (
            <Link key={group.slug} href={`/lab-img/category/${group.slug}`} className="list-tile flex items-center justify-between gap-4 px-4 py-4">
              <div className="min-w-0">
                <div className="truncate text-lg font-semibold text-slate-950">{group.title}</div>
                <div className="mt-1 text-xs font-semibold uppercase text-slate-500">{countNotes(group)} notes</div>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

