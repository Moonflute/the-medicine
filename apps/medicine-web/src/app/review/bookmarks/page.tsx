import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReviewBookmarksClient } from "@/components/review-page-client";
import type { ReviewCatalogItem } from "@/lib/review-store";
import { getAllDiseases, getAllSkills, getChiefComplaints, getDrugs, getLabImgNotes, isCompatibilityDisease } from "@/lib/webdb";

export default function ReviewBookmarksPage() {
  const catalog: ReviewCatalogItem[] = [
    ...getAllDiseases().filter(note => !isCompatibilityDisease(note)).map(note => ({
      type: "disease" as const,
      id: note.slug,
      title: note.displayTitle || note.title,
      href: `/disease/${note.slug}`,
      category: note.specialty,
      summary: note.definition || note.overview?.[0] || "",
    })),
    ...getChiefComplaints().map(note => ({
      type: "cc" as const,
      id: note.id,
      title: note.title,
      href: `/cc/category/${Buffer.from(note.category || "기타", "utf8").toString("base64url")}/${note.slug}`,
      category: note.category || "Chief Complaint",
      summary: note.concept[0] || note.differentials[0] || "",
    })),
    ...getDrugs().map(note => ({
      type: "drug" as const,
      id: note.id,
      title: note.title,
      href: `/drugs/${note.slug}`,
      category: note.category,
      summary: note.summary[0] || "",
    })),
    ...getLabImgNotes().map(note => ({
      type: "lab" as const,
      id: note.id,
      title: note.title,
      href: `/lab-img/${note.slug}`,
      category: note.category,
      summary: note.summary[0] || "",
    })),
    ...getAllSkills().map(skill => ({
      type: "skill" as const,
      id: `skill:${skill.id}`,
      title: skill.name,
      href: `/skills/${skill.id}`,
      category: skill.categoryName,
      summary: skill.summary[0] || skill.indications[0] || "",
    })),
  ];

  return <div className="page-stack review-bookmarks-page">
    <header className="page-header">
      <Link href="/review" className="review-card-link review-card-back"><ArrowLeft size={16} aria-hidden="true" /> Review</Link>
      <h1 className="page-title">북마크</h1>
    </header>
    <Suspense fallback={<p className="review-bookmarks-message" role="status">북마크를 불러오는 중이에요.</p>}>
      <ReviewBookmarksClient catalog={catalog} />
    </Suspense>
  </div>;
}
