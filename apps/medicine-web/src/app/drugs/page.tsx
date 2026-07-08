import Link from "next/link";
import { Pill } from "lucide-react";
import { buildDrugGroups } from "@/lib/drug-groups";
import { getDrugs } from "@/lib/webdb";

export default function DrugsPage() {
  const groups = buildDrugGroups(getDrugs());

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Drugs</div>
        <h1 className="page-title">Pharmacology</h1>
      </header>

      <section>
        <div className="mb-2 text-base font-semibold text-slate-950">Categories</div>
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-6">
          {groups.map((group) => (
            <Link
              key={group.slug}
              href={`/drugs/category/${group.slug}`}
              className="list-tile flex min-h-10 items-center gap-1.5 px-2 py-2 text-xs font-semibold text-slate-950 sm:gap-2 sm:px-3 sm:text-sm"
            >
              <Pill className="h-4 w-4 shrink-0 text-teal-700" />
              <span className="truncate">{group.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
