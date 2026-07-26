import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { InfectionHub } from "@/components/infection-hub";
import { getInfectionPathways } from "@/lib/infection-db";
import { getAntibioticSpectrum, getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return getSpecialties().filter((item) => item.name.replace(/^\d+\s*/, "").trim() === "\uac10\uc5fc").map((item) => ({ slug: item.slug }));
}

export default async function InfectionHubPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const specialty = getSpecialties().find((item) => item.slug === slug);
  if (!specialty || specialty.name.replace(/^\d+\s*/, "").trim() !== "\uac10\uc5fc") notFound();

  return (
    <div className="space-y-6">
      <Link href={`/specialty/${slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"><ArrowLeft className="h-4 w-4" />{"\uac10\uc5fc \ubd84\uacfc\ub85c \ub3cc\uc544\uac00\uae30"}</Link>
      <header className="rounded-xl border border-teal-200 bg-gradient-to-br from-white via-teal-50/70 to-cyan-50 p-5 shadow-sm sm:p-7">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Clinical tools</div>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">{"\uac10\uc5fc Hub"}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{"\uc9c8\ud658\ubcc4 \ud56d\uade0\uce58\ub8cc\uc640 \ud56d\uc0dd\uc81c spectrum\uc744 \ud558\ub098\uc758 \ud654\uba74\uc5d0\uc11c \ubc14\ub85c \ucc3e\uc544\ubd05\ub2c8\ub2e4."}</p>
      </header>
      <Suspense fallback={<div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">{"\uac10\uc5fc Hub\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4."}</div>}>
        <InfectionHub dataset={getAntibioticSpectrum()} pathways={getInfectionPathways()} />
      </Suspense>
    </div>
  );
}