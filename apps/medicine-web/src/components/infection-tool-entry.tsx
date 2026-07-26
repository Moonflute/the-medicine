import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";

export function InfectionToolEntry({ specialtySlug }: { specialtySlug: string }) {
  return (
    <section aria-labelledby="infection-hub-title" className="rounded-xl border border-teal-200 bg-gradient-to-br from-white via-teal-50/70 to-cyan-50 p-4 shadow-sm sm:p-5">
      <Link href={`/specialty/${specialtySlug}/hub`} className="group flex items-center justify-between gap-4 rounded-xl border border-white/90 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md sm:p-5">
        <span className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white group-hover:bg-teal-700"><Network className="h-5 w-5" /></span><span><span id="infection-hub-title" className="block text-base font-bold text-slate-950">{"\uac10\uc5fc Hub"}</span><span className="mt-1 block text-sm text-slate-500">{"\uc9c8\ud658\ubcc4 \ud56d\uade0\uce58\ub8cc\uc640 \ud56d\uc0dd\uc81c overview"}</span></span></span>
        <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700" />
      </Link>
    </section>
  );
}