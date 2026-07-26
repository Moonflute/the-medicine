import Link from "next/link";
import { ArrowRight, Baby } from "lucide-react";

export function MaternalChildToolEntry() {
  return (
    <section aria-labelledby="maternal-child-hub-title" className="rounded-xl border border-rose-200 bg-gradient-to-br from-white via-rose-50/70 to-amber-50 p-4 shadow-sm sm:p-5">
      <Link href="/maternal-child-hub" className="group flex items-center justify-between gap-4 rounded-xl border border-white/90 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-md sm:p-5">
        <span className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white group-hover:bg-rose-700"><Baby className="h-5 w-5" /></span><span><span id="maternal-child-hub-title" className="block text-base font-bold text-slate-950">모자보건 Hub</span><span className="mt-1 block text-sm text-slate-500">임신부터 출생·소아청소년기까지의 연속 진료</span></span></span>
        <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-rose-700" />
      </Link>
    </section>
  );
}
