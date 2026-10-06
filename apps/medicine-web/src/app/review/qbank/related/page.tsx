import { Suspense } from "react";
import { SkinStatus } from "@/components/skin-status";
import { RelatedQbankPageClient } from "@/components/related-qbank-page-client";
import { getDiseaseHierarchy, getQbankIndex } from "@/lib/webdb";

export default function RelatedQbankPage() {
  return <Suspense fallback={<div className="page-stack"><SkinStatus kind="questionsLoading" fallback="문제 선택 화면을 불러오는 중입니다." stage className="surface p-6 text-slate-600" /></div>}><RelatedQbankPageClient questions={getQbankIndex()} hierarchy={getDiseaseHierarchy()} /></Suspense>;
}
