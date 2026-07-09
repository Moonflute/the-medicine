import Link from "next/link";
import { Calculator, FlaskConical } from "lucide-react";
import { buildLabImgGroups } from "@/lib/lab-img-groups";
import { getLabImgNotes } from "@/lib/webdb";

export default function LabImgPage() {
  const groups = buildLabImgGroups(getLabImgNotes());

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Lab & Img</div>
        <h1 className="page-title">Lab & Imaging</h1>
      </header>

      <section>
        <div className="mb-2 text-base font-semibold text-slate-950">Categories</div>
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-6">
          <Link
            href="/lab-img/medcalc"
            className="list-tile flex min-h-10 items-center gap-1.5 border-teal-200 bg-teal-50 px-2 py-2 text-xs font-semibold text-slate-950 sm:gap-2 sm:px-3 sm:text-sm"
          >
            <Calculator className="h-4 w-4 shrink-0 text-teal-700" />
            <span className="truncate">01 MedCalc</span>
          </Link>

          {groups.map((group, index) => (
            <Link
              key={group.slug}
              href={`/lab-img/category/${group.slug}`}
              className="list-tile flex min-h-10 items-center gap-1.5 px-2 py-2 text-xs font-semibold text-slate-950 sm:gap-2 sm:px-3 sm:text-sm"
            >
              <FlaskConical className="h-4 w-4 shrink-0 text-teal-700" />
              <span className="truncate">{String(index + 2).padStart(2, "0")} {group.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
