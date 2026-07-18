import Link from "next/link";
import { ArrowRight, Bug, Microscope, Network, Pill } from "lucide-react";

const tools = [
  { label: "질환별 항균치료", description: "질환 → 원인균 → 항생제", icon: Network, href: "pathways" },
  { label: "균 → 항생제", description: "병원체별 spectrum", icon: Bug, href: "/drugs/antibiotics?mode=organism" },
  { label: "항생제 → 균", description: "약물별 coverage", icon: Pill, href: "/drugs/antibiotics?mode=antibiotic" },
  { label: "항생제 overview", description: "matrix와 임상 퀴즈", icon: Microscope, href: "/drugs/antibiotics" },
] as const;

export function InfectionToolEntry({ specialtySlug }: { specialtySlug: string }) {
  return (
    <section aria-labelledby="infection-tools-title" className="rounded-xl border border-teal-200 bg-gradient-to-br from-white via-teal-50/70 to-cyan-50 p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Clinical tools</div>
          <h2 id="infection-tools-title" className="mt-1 text-lg font-bold text-slate-950">감염 임상 도구</h2>
        </div>
        <span className="hidden text-xs text-slate-500 sm:inline">기존 원인균 분류와 연결</span>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {tools.map((tool) => {
          const href = tool.href === "pathways" ? `/specialty/${specialtySlug}/treatment-pathways` : tool.href;
          const Icon = tool.icon;
          return (
            <Link key={tool.label} href={href} className="group flex min-h-24 flex-col justify-between rounded-xl border border-white/90 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md sm:p-4">
              <div className="flex items-start justify-between gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white group-hover:bg-teal-700"><Icon className="h-4 w-4" /></span>
                <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-teal-700" />
              </div>
              <div className="mt-3"><strong className="block text-sm text-slate-950">{tool.label}</strong><span className="mt-1 hidden text-xs text-slate-500 sm:block">{tool.description}</span></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
