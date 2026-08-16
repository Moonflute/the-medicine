import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AcidBaseBalanceLab } from "@/components/acid-base-balance-lab";
import { OxygenationGasExchangeLab } from "@/components/oxygenation-gas-exchange-lab";
import { ParentPageFab } from "@/components/parent-page-fab";
import { RelatedClinicalContent } from "@/components/related-clinical-content";
import { getInteractiveConcept, interactiveConcepts } from "@/lib/interactive-concepts";
import { getClinicalRelationsFor, getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return interactiveConcepts.map((concept) => ({ slug: concept.slug }));
}

export default async function InteractiveConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = getInteractiveConcept(slug);
  if (!concept) notFound();

  const relations = getClinicalRelationsFor("interactive", concept.slug);
  const specialtyLinks = getSpecialties().filter((specialty) => (
    concept.specialties.includes(specialty.name.replace(/^\d+\s*/, "").trim())
  ));

  return (
    <div className="space-y-6">
      <nav aria-label="관련 분과로 돌아가기" className="flex flex-wrap gap-2">
        {specialtyLinks.map((specialty) => (
          <Link key={specialty.slug} href={`/specialty/${specialty.slug}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-800">
            <ArrowLeft className="h-4 w-4" />
            {specialty.name.replace(/^\d+\s*/, "").trim()}로 돌아가기
          </Link>
        ))}
      </nav>

      {slug === "acid-base-balance" ? <AcidBaseBalanceLab /> : null}
      {slug === "oxygenation-gas-exchange" ? <OxygenationGasExchangeLab /> : null}

      <RelatedClinicalContent relations={relations} />
      <ParentPageFab href="/specialties" />
    </div>
  );
}
