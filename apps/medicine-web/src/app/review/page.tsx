import { ReviewPageClient } from "@/components/review-page-client";
import Link from "next/link";
import { ArrowRight, ListChecks } from "lucide-react";
import {
  getAllDiseases,
  getAllSkills,
  getChiefComplaints,
  getDrugs,
  getLabImgNotes,
  getQbankSpecialties,
} from "@/lib/webdb";
import type { ReviewCatalogItem } from "@/lib/review-store";

function toBase64Url(value: string) {
  return Buffer.from(value, "utf-8").toString("base64url");
}

export default function ReviewPage() {
  const qbankCount = getQbankSpecialties().reduce((sum, item) => sum + item.count, 0);
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
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Review</div>
        <h1 className="page-title">통합 복습</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Review saved disease, symptom, drug, lab, and skill notes today and adjust the next review date by confidence.
        </p>
      </header>
      <Link href="/review/qbank" className="block rounded-xl border border-teal-200 bg-teal-50 p-5 transition hover:border-teal-500 hover:bg-teal-100/70 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-teal-800"><ListChecks className="h-5 w-5" />Q-bank</div>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">임상 문제 풀기</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">MedQA-US 임상증례 {qbankCount.toLocaleString()}문제 · 분과별 출제 · 오답 복습 · 북마크</p>
          </div>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
        </div>
      </Link>
      <ReviewPageClient catalog={catalog} />
    </div>
  );
}
