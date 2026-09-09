import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QbankDashboardClient } from "@/components/qbank-dashboard-client";
import { getQbankIndex } from "@/lib/webdb";

export default function QbankPage() {
  return <div className="page-stack">
    <div className="flex flex-wrap items-center justify-between gap-3"><Link href="/review" className="secondary-action w-fit"><ArrowLeft className="h-4 w-4" />REVIEW로 돌아가기</Link><Link href="/review/qbank/stats" className="primary-action">학습 통계</Link></div>
    <header className="page-header"><div className="eyebrow">Review · Q-bank</div><h1 className="page-title">문제 풀기</h1><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">이론·임상·실전문제를 탭별로 선택하고 함께 풀 수 있습니다.</p></header>
    <QbankDashboardClient questions={getQbankIndex()} />
  </div>;
}
