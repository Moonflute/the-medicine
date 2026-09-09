import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QbankAnalyticsClient } from "@/components/qbank-analytics-client";

export default function QbankStatsPage() {
  return <div className="page-stack">
    <Link href="/review/qbank" className="secondary-action w-fit"><ArrowLeft className="h-4 w-4" />문제 풀기로</Link>
    <header className="page-header"><div className="eyebrow">Review · Learning insights</div><h1 className="page-title">학습 통계</h1><p className="mt-3 text-sm leading-6 text-slate-600">자주 틀리는 부분을 찾고, 다음에 복습할 문제를 골라보세요.</p></header>
    <QbankAnalyticsClient />
  </div>;
}
