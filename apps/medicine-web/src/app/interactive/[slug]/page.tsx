import { getInteractiveLearning } from "@/lib/interactive-learning";
import { InteractiveLearningProvider, LearningSources } from "@/components/interactive-learning";
import { SimulationWorkbench } from "@/components/simulation-workbench";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AcidBaseBalanceLab } from "@/components/acid-base-balance-lab";
import { OxygenationGasExchangeLab } from "@/components/oxygenation-gas-exchange-lab";
import { NephronElectrolyteLab } from "@/components/nephron-electrolyte-lab";
import { CardiacHemodynamicsLab } from "@/components/cardiac-hemodynamics-lab";
import { EcgInteractiveLab } from "@/components/ecg-interactive-lab";
import { EndocrineFeedbackLab } from "@/components/endocrine-feedback-lab";
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

  const learning = getInteractiveLearning(slug);
  const relations = getClinicalRelationsFor("interactive", concept.slug);
  const specialtyLinks = getSpecialties().filter((specialty) => (
    concept.specialties.includes(specialty.name.replace(/^\d+\s*/, "").trim())
  ));

  return (
    <SimulationWorkbench key={slug}><InteractiveLearningProvider data={learning}><div className={slug === "ecg-arrhythmia" ? "ecg-route" : "space-y-6"}>
      <div className={slug === "ecg-arrhythmia" ? "ecg-route-header" : undefined}>
      {slug === "ecg-arrhythmia" ? <h1>ECG 전기생리 모델</h1> : null}
      <nav aria-label="관련 분과로 돌아가기" className="flex flex-wrap gap-2">
        {specialtyLinks.map((specialty) => (
          <Link key={specialty.slug} href={`/specialty/${specialty.slug}`} aria-label={`${specialty.name.replace(/^\d+\s*/, "").trim()}로 돌아가기`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-teal-300 hover:text-teal-800">
            <ArrowLeft className="h-4 w-4" />
            {specialty.name.replace(/^\d+\s*/, "").trim()}{slug === "ecg-arrhythmia" ? "" : "로 돌아가기"}
          </Link>
        ))}
      </nav>
      </div>

      {slug === "acid-base-balance" ? <AcidBaseBalanceLab /> : null}
      {slug === "oxygenation-gas-exchange" ? <OxygenationGasExchangeLab /> : null}
      {slug === "nephron-electrolyte-handling" ? <NephronElectrolyteLab /> : null}
      {slug === "cardiac-hemodynamics" ? <CardiacHemodynamicsLab /> : null}
      {slug === "ecg-arrhythmia" ? <EcgInteractiveLab /> : null}
      {slug === "endocrine-feedback-axes" ? <EndocrineFeedbackLab /> : null}

      {slug !== "ecg-arrhythmia" ? <><LearningSources data={learning}/>{relations.length>0&&<details className="physiology-card"><summary className="cursor-pointer font-semibold">분과 전체 관련 자료 · 자동 연결 포함</summary><div className="mt-4"><RelatedClinicalContent relations={relations} /></div></details>}<ParentPageFab href="/specialties" /></> : null}
    </div></InteractiveLearningProvider></SimulationWorkbench>
  );
}
