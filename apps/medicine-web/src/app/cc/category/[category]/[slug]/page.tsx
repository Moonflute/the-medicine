import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ChiefComplaintDetailTabs } from "@/components/chief-complaint-detail-tabs";
import { ParentPageFab } from "@/components/parent-page-fab";
import { ReviewSaveButton } from "@/components/review-save-button";
import { RelatedClinicalContent } from "@/components/related-clinical-content";
import { getChiefComplaintByCategoryAndSlug, getChiefComplaintCategories, getChiefComplaintsByCategory, getClinicalRelationsFor, getDiseaseLinks, getQbankCountForChiefComplaint } from "@/lib/webdb";

export function generateStaticParams() {
  return getChiefComplaintCategories().flatMap((category) =>
    getChiefComplaintsByCategory(category.slug).map((note) => ({
      category: category.slug,
      slug: note.slug,
    })),
  );
}

export default async function ChiefComplaintDetailByCategoryPage(props: { params: Promise<{ category: string; slug: string }> }) {
  const params = await props.params;
  const note = getChiefComplaintByCategoryAndSlug(params.category, params.slug);
  const diseaseLinks = getDiseaseLinks();

  if (!note) notFound();
  const relations = getClinicalRelationsFor("cc", note.id);
  const relatedQbankCount = getQbankCountForChiefComplaint(note.slug);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/cc" className="transition hover:text-slate-950">
          CC
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/cc/category/${params.category}`} className="transition hover:text-slate-950">
          {note.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{note.title}</span>
      </div>

      <div className="flex justify-end gap-2">
        {relatedQbankCount > 0 ? (
          <Link
            href={`/review/qbank/session?mode=cc&cc=${encodeURIComponent(note.slug)}`}
            className="inline-flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-sm font-bold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
            style={{ borderRadius: 8 }}
            aria-label="관련 문제 풀기"
            title="관련 문제 풀기"
          >
            Q
          </Link>
        ) : null}
        <ReviewSaveButton item={{ type: "cc", id: note.id, title: note.title, href: `/cc/category/${params.category}/${note.slug}`, category: note.category || "Chief Complaint", summary: note.concept[0] || note.differentials[0] || "" }} />
      </div>
      <ChiefComplaintDetailTabs note={note} diseaseLinks={diseaseLinks} />
      <RelatedClinicalContent relations={relations} />
      <ParentPageFab href={`/cc/category/${params.category}`} />
    </div>
  );
}
