import { Suspense } from "react";
import { SkinStatus } from "@/components/skin-status";
import { notFound } from "next/navigation";
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
      <Suspense fallback={<SkinStatus kind="documentLoading" fallback="감염 Hub를 불러오는 중입니다." stage className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500" />}>
        <InfectionHub
          dataset={getAntibioticSpectrum()}
          pathways={getInfectionPathways()}
          microbiology={getMicrobiologyDataset()}
        />
      </Suspense>
  );
}
