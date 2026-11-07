import { Suspense } from "react";
import { SkinStatus } from "@/components/skin-status";
import { QbankPageLoader } from "@/components/qbank-page-loader";
import { getDiseaseHierarchy } from "@/lib/webdb";

export default function RelatedQbankPage() {
  return <Suspense fallback={<div className="page-stack"><SkinStatus kind="questionsLoading" fallback="문제 선택 화면을 불러오는 중입니다." stage className="surface p-6 text-slate-600" /></div>}><QbankPageLoader mode="related" hierarchy={getDiseaseHierarchy()} /></Suspense>;
}
