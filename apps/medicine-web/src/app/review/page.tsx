import { ReviewPageClient } from "@/components/review-page-client";
import { RandomPageLearningCard } from "@/components/random-page-learning-card";
import { ReviewLaunchAction, ReviewLaunchActions } from "@/components/review-launch-actions";
import {
  getAllDiseases,
  getAllSkills,
  getChiefComplaints,
  getDrugs,
  getLabImgNotes,
  getQbankIndex,
  isCompatibilityDisease,
} from "@/lib/webdb";
import type { ReviewCatalogItem } from "@/lib/review-store";

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

export default function ReviewPage() {
  const catalog: ReviewCatalogItem[] = [
    ...getAllDiseases().filter((note) => !isCompatibilityDisease(note)).map((note) => ({
      type: "disease" as const,
      id: note.slug,
      title: note.displayTitle || note.title,
      href: `/disease/${note.slug}`,
      category: note.specialty,
      categories: [...new Set([note.specialty, ...note.relatedSpecialties].filter(Boolean))],
      summary: note.definition || note.overview?.[0] || "",
    })),
    ...getChiefComplaints().map((note) => ({
      type: "cc" as const,
      id: note.id,
      title: note.title,
      href: `/cc/category/${toBase64Url(note.category || "기타")}/${note.slug}`,
      category: note.category || "Chief Complaint",
      summary: note.concept[0] || note.differentials[0] || "",
    })),
    ...getDrugs().map((note) => ({
      type: "drug" as const,
      id: note.id,
      title: note.title,
      href: `/drugs/${note.slug}`,
      category: note.category,
      summary: note.summary[0] || "",
    })),
    ...getLabImgNotes().map((note) => ({
      type: "lab" as const,
      id: note.id,
      title: note.title,
      href: `/lab-img/${note.slug}`,
      category: note.category,
      summary: note.summary[0] || "",
    })),
    ...getAllSkills().map((skill) => ({
      type: "skill" as const,
      id: `skill:${skill.id}`,
      title: skill.name,
      href: `/skills/${skill.id}`,
      category: skill.categoryName,
      summary: skill.summary[0] || skill.indications[0] || "",
    })),
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Review</div>
        <h1 className="page-title">통합 복습</h1>
      </header>
      <ReviewLaunchActions>
        <ReviewLaunchAction kind="qbank" href="/review/qbank" />
        <RandomPageLearningCard catalog={catalog} />
        <ReviewLaunchAction kind="audio" href="/review/audio" />
      </ReviewLaunchActions>
      <ReviewPageClient catalog={catalog} questions={getQbankIndex()} />
    </div>
  );
}
