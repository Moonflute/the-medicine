import Link from "next/link";
import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { ChiefComplaintDetailTabs } from "@/components/chief-complaint-detail-tabs";
import { ParentPageFab } from "@/components/parent-page-fab";
import { ReviewSaveButton } from "@/components/review-save-button";
import { DocumentEditButton } from "@/components/document-edit-button";
import { RelatedClinicalContent } from "@/components/related-clinical-content";
import { getChiefComplaintByCategoryAndSlug, getChiefComplaints, getClinicalRelationsFor, getDiseaseLinks, getQbankCountForTarget, getWardGroups, WARD_CATEGORY } from "@/lib/webdb";

export function generateStaticParams() {
  return getChiefComplaints().flatMap((note) => [
    { category: Buffer.from(note.category, "utf-8").toString("base64url"), slug: note.slug },
    ...(note.legacyCategory ? [{ category: Buffer.from(note.legacyCategory, "utf-8").toString("base64url"), slug: note.slug }] : []),
  ]);
}

export default async function ChiefComplaintDetailByCategoryPage(props: { params: Promise<{ category: string; slug: string }> }) {
  const params = await props.params;
  const note = getChiefComplaintByCategoryAndSlug(params.category, params.slug);
  if (!note) notFound();
  const canonicalCategorySlug = Buffer.from(note.category, "utf-8").toString("base64url");
  if (params.category !== canonicalCategorySlug) redirect(`/cc/category/${canonicalCategorySlug}/${note.slug}`);
  const diseaseLinks = getDiseaseLinks();
  const relations = getClinicalRelationsFor("cc", note.id);
  const relatedQbankCount = getQbankCountForTarget("cc", note.slug);
  const group = note.category === WARD_CATEGORY ? getWardGroups().find((item) => item.name === note.subCategory) : undefined;
  const parentHref = group ? `/cc/category/${canonicalCategorySlug}/group/${group.slug}` : `/cc/category/${canonicalCategorySlug}`;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/cc" className="transition hover:text-slate-950">
          CC
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/cc/category/${canonicalCategorySlug}`} className="transition hover:text-slate-950">
          {note.category}
        </Link>
        {group && <>
          <ChevronRight className="h-4 w-4" />
          <Link href={parentHref} className="transition hover:text-slate-950">{group.name}</Link>
        </>}
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-slate-950">{note.title}</span>
      </div>

      <div className="flex justify-end gap-2">
        <DocumentEditButton sourcePath={note.sourcePath} title={note.title} />
        {relatedQbankCount > 0 ? <Link href={`/review/qbank/related?targetType=cc&target=${encodeURIComponent(note.slug)}&label=${encodeURIComponent(note.title)}`} className="inline-flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-sm font-bold text-slate-700 transition hover:border-teal-500 hover:text-teal-700" style={{ borderRadius: 8 }} aria-label="관련 문제 풀기" title="관련 문제 풀기">Q</Link> : null}
        <ReviewSaveButton item={{ type: "cc", id: note.id, title: note.title, href: `/cc/category/${canonicalCategorySlug}/${note.slug}`, category: note.category || "Chief Complaint", summary: note.concept[0] || note.differentials[0] || "" }} />
      </div>
      <Suspense fallback={<div className="surface p-5 text-sm text-slate-500">문서를 불러오는 중입니다.</div>}>
        <ChiefComplaintDetailTabs note={note} diseaseLinks={diseaseLinks} />
      </Suspense>
      <RelatedClinicalContent relations={relations} />
      <ParentPageFab href={parentHref} />
    </div>
  );
}
