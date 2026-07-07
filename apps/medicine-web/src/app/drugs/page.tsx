import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
        <div className="mb-3 text-sm font-semibold text-slate-700">Top-level categories</div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <Link key={group.slug} href={`/drugs/category/${group.slug}`} className="list-tile flex items-center justify-between gap-4 px-4 py-4">
              <div className="min-w-0">
                <div className="truncate text-lg font-semibold text-slate-950">{group.title}</div>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

