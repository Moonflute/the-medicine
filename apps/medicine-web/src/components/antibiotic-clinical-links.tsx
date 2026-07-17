import Link from "next/link";
import { ArrowUpRight, Stethoscope } from "lucide-react";
import type { InfectionPathway } from "@/lib/infection-types";

export function AntibioticClinicalLinks({ antibioticId, pathways, specialtySlug }: { antibioticId: string; pathways: InfectionPathway[]; specialtySlug: string }) {
  if (pathways.length === 0) return null;
  return (
    <section className="rounded-lg border border-teal-200 bg-teal-50/60 p-5 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-700"><Stethoscope className="h-4 w-4" />Infection pathways</div>
      <h2 className="mt-2 text-lg font-bold text-slate-950">이 항생제가 연결된 감염질환</h2>
      <div className="mt-4 flex flex-wrap gap-2">{pathways.map((item) => <Link key={item.id} href={`/specialty/${specialtySlug}/treatment-pathways?pathway=${item.id}&antibiotic=${antibioticId}`} className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-medium text-teal-900 hover:border-teal-500">{item.displayName}<ArrowUpRight className="h-3 w-3" /></Link>)}</div>
    </section>
  );
}
