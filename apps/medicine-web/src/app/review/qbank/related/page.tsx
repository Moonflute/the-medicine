import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QbankDashboardClient } from "@/components/qbank-dashboard-client";
import { getQbankIndex } from "@/lib/webdb";

export default async function RelatedQbankPage({ searchParams }: { searchParams: Promise<{ targetType?: string; target?: string; label?: string }> }) {
  const params = await searchParams;
  const targetType = params.targetType === "cc" ? "cc" : "disease";
  const target = params.target ?? "";
  const label = params.label ?? "관련";
  return <div className="page-stack">
    <Link href="/review/qbank" className="secondary-action w-fit"><ArrowLeft className="h-4 w-4" />문제은행으로 돌아가기</Link>
    <header className="page-header"><div className="eyebrow">Review · Q-bank</div><h1 className="page-title">관련 문제 풀기</h1><p className="mt-3 text-sm leading-6 text-slate-600">{label}와 연결된 이론·임상 문제를 선택하세요.</p></header>
    {target ? <QbankDashboardClient questions={getQbankIndex()} relatedTarget={{ type: targetType, slug: target, label }} /> : <p className="surface p-6 text-slate-600">연결할 대상을 찾을 수 없습니다.</p>}
  </div>;
}
