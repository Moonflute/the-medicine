import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QbankDashboardClient } from "@/components/qbank-dashboard-client";
import { getQbankSpecialties } from "@/lib/webdb";

export default function QbankPage() {
  const specialties = getQbankSpecialties();
  return (
    <div className="page-stack">
      <Link href="/review" className="secondary-action w-fit"><ArrowLeft className="h-4 w-4" />REVIEW로 돌아가기</Link>
      <header className="page-header">
        <div className="eyebrow">Review · Q-bank</div>
        <h1 className="page-title">임상 문제 풀기</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">MedQA-US의 USMLE Step 2/3형 임상증례 문제를 분과별로 풀고 오답과 진행 상태를 관리합니다.</p>
      </header>
      <QbankDashboardClient specialties={specialties} />
    </div>
  );
}
