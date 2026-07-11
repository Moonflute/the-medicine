import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DiseaseCard } from "@/components/disease-card";
import { ParentPageFab } from "@/components/parent-page-fab";
import { RelatedClinicalContent } from "@/components/related-clinical-content";
import { getAllDiseases, getChiefComplaintLinksForTerms, getClinicalRelationsFor, getDiseaseBySlug, getDiseaseLinks, isSpecialtyIndexDisease } from "@/lib/webdb";

export function generateStaticParams() {
  return getAllDiseases().map((note) => ({ slug: note.slug }));
}

export default async function DiseaseDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const note = getDiseaseBySlug(params.slug);

  if (!note) {
    notFound();
  }

  const ccLinks = getChiefComplaintLinksForTerms(note.chiefComplaints);
  const diseaseLinks = isSpecialtyIndexDisease(note) ? getDiseaseLinks() : [];
  const parentHref = `/specialty/${Buffer.from(note.specialty, "utf-8").toString("base64url")}`;
  const relations = getClinicalRelationsFor("disease", note.id);

  return (
    <div className="space-y-6">
      <Link
        href={parentHref}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {note.specialty}
      </Link>

      <DiseaseCard note={note} ccLinks={ccLinks} diseaseLinks={diseaseLinks} hideOverview={isSpecialtyIndexDisease(note)} />
      <RelatedClinicalContent relations={relations} />
      <ParentPageFab href={parentHref} />
    </div>
  );
}
