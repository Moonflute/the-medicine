import { ReviewPageClient } from "@/components/review-page-client";
import {
  getAllDiseases,
  getAllSkills,
  getChiefComplaints,
  getDrugs,
  getLabImgNotes,
  getPhysiologyNotes,
} from "@/lib/webdb";
import type { ReviewCatalogItem } from "@/lib/review-store";

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

export default function ReviewPage() {
  const catalog: ReviewCatalogItem[] = [
    ...getAllDiseases().map((note) => ({
      type: "disease" as const,
      id: note.slug,
      title: note.title,
      href: `/disease/${note.slug}`,
      category: note.specialty,
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
    ...getPhysiologyNotes().map((note) => ({
      type: "physiology" as const,
      id: note.id,
      title: note.title,
      href: `/physiology/${note.slug}`,
      category: note.category,
      summary: note.summary[0] || "",
    })),
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Review</div>
        <h1 className="page-title">통합 복습</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          저장한 질병·증상·약물·검사·술기·생리학을 오늘 복습하고, 이해도에 따라 다음 복습일을 조정합니다.
        </p>
      </header>
      <ReviewPageClient catalog={catalog} />
    </div>
  );
}
