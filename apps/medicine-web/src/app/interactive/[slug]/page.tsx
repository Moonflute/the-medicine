import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FlaskConical, Pill, Stethoscope } from "lucide-react";
import { AcidBaseBalanceLab } from "@/components/acid-base-balance-lab";
import { ParentPageFab } from "@/components/parent-page-fab";
import { getInteractiveConcept, interactiveConcepts } from "@/lib/interactive-concepts";
import { getAllDiseases, getDrugs, getLabImgNotes, getSpecialties } from "@/lib/webdb";

export function generateStaticParams() {
  return interactiveConcepts.map((concept) => ({ slug: concept.slug }));
}

function targetIcon(type: "disease" | "lab" | "drug") {
  if (type === "lab") return FlaskConical;
  if (type === "drug") return Pill;
  return Stethoscope;
}

export default async function InteractiveConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const concept = getInteractiveConcept(slug);
  if (!concept) notFound();

  const diseases = getAllDiseases();
  const drugs = getDrugs();
  const labs = getLabImgNotes();
  const specialtyLinks = getSpecialties().filter((specialty) => (
    concept.specialties.includes(specialty.name.replace(/^\d+\s*/, "").trim())
  ));
  const links = concept.targets.flatMap((target) => {
    const note = target.type === "disease"
      ? diseases.find((item) => item.title === target.title)
      : target.type === "lab"
        ? labs.find((item) => item.title === target.title)
        : drugs.find((item) => item.title === target.title);
    if (!note) return [];
    return [{
      ...target,
      href: target.type === "disease"
        ? `/disease/${note.slug}`
        : target.type === "lab"
          ? `/lab-img/${note.slug}`
          : `/drugs/${note.slug}`,
    }];
  });

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

      {links.length > 0 ? (
        <section aria-labelledby="related-clinical-pages" className="border-t border-slate-200 pt-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Clinical links</div>
              <h2 id="related-clinical-pages" className="mt-1 text-2xl font-bold text-slate-950">관련 임상 페이지</h2>
            </div>
            <span className="text-sm text-slate-500">{links.length}개 연결</span>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => {
              const Icon = targetIcon(link.type);
              return (
                <Link key={`${link.type}-${link.title}`} href={link.href} className="flex min-h-16 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-400 hover:bg-teal-50">
                  <Icon className="h-4 w-4 shrink-0 text-teal-700" />
                  <span>{link.label || link.title}</span>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}
      <ParentPageFab href="/specialties" />
    </div>
  );
}
