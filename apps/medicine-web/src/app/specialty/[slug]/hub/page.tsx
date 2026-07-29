import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { InfectionHub } from "@/components/infection-hub";
import { getInfectionPathways } from "@/lib/infection-db";
import { getAntibioticSpectrum, getMicrobiologyDataset, getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return getSpecialties().filter((item) => item.name.replace(/^\d+\s*/, "").trim() === "감염").map((item) => ({ slug: item.slug }));
}

export default async function InfectionHubPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const specialty = getSpecialties().find((item) => item.slug === slug);
  if (!specialty || specialty.name.replace(/^\d+\s*/, "").trim() !== "감염") notFound();

  return (
    <div className="space-y-5">
      <Link href={`/specialty/${slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
        <ArrowLeft className="h-4 w-4" />
        감염 분과로 돌아가기
      </Link>
      <header className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-950">감염 Hub</h1>
      </header>
      <Suspense fallback={<div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">감염 Hub를 불러오는 중입니다.</div>}>
        <InfectionHub
          dataset={getAntibioticSpectrum()}
          pathways={getInfectionPathways()}
          microbiology={getMicrobiologyDataset()}
        />
      </Suspense>
    </div>
  );
}
