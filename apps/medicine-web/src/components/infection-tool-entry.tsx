import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";

const K = { eyebrow: "Clinical tool", title: "\uac10\uc5fc \uce58\ub8cc \ud0d0\uc0c9\uae30", description: "\uc9c8\ud658\u00b7\uc6d0\uc778\uade0\u00b7\ud56d\uc0dd\uc81c\u00b7spectrum\u00b7\ud034\uc988\ub97c \ud55c \uacf3\uc5d0\uc11c \ud0d0\uc0c9\ud569\ub2c8\ub2e4.", action: "\ud0d0\uc0c9\uae30 \uc5f4\uae30" };

export function InfectionToolEntry({ specialtySlug }: { specialtySlug: string }) {
  return <section aria-labelledby="infection-tools-title" className="rounded-xl border border-teal-200 bg-gradient-to-r from-white via-teal-50/70 to-cyan-50 p-4 shadow-sm sm:p-5">
    <Link href={`/specialty/${specialtySlug}/treatment-pathways`} className="group flex items-center justify-between gap-4 rounded-xl border border-white/90 bg-white p-4 shadow-sm transition hover:border-teal-300 hover:shadow-md">
      <div className="flex min-w-0 items-center gap-4"><span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white group-hover:bg-teal-700"><Microscope className="h-5 w-5" /></span><div className="min-w-0"><div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700">{K.eyebrow}</div><h2 id="infection-tools-title" className="mt-0.5 text-lg font-bold text-slate-950">{K.title}</h2><p className="mt-1 text-xs leading-5 text-slate-500">{K.description}</p></div></div>
      <span className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-teal-800 sm:inline-flex">{K.action}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  </section>;
}
