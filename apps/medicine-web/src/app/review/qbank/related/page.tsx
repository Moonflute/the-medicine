import { Suspense } from "react";
import { RelatedQbankPageClient } from "@/components/related-qbank-page-client";
import { getDiseaseHierarchy, getQbankIndex } from "@/lib/webdb";

export default function RelatedQbankPage() {
  return <Suspense fallback={<div className="page-stack"><p className="surface p-6 text-slate-600">문제 선택 화면을 불러오는 중입니다.</p></div>}><RelatedQbankPageClient questions={getQbankIndex()} hierarchy={getDiseaseHierarchy()} /></Suspense>;
}
