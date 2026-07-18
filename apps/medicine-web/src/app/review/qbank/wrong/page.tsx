import Link from "next/link";
import { ArrowLeft, CircleAlert } from "lucide-react";

export default function QbankWrongPage() {
  return (
    <div className="page-stack">
      <Link href="/review/qbank" className="secondary-action w-fit"><ArrowLeft className="h-4 w-4" />문제은행</Link>
      <section className="surface p-8 text-center">
        <CircleAlert className="mx-auto h-8 w-8 text-rose-700" />
        <h1 className="mt-4 text-2xl font-semibold">오답 노트</h1>
        <p className="mt-2 text-sm text-slate-600">틀린 문제는 자동으로 저장됩니다. 오답 세션에서 무작위로 다시 풀 수 있습니다.</p>
        <Link href="/review/qbank/session?mode=wrong&count=20" className="primary-action mt-5">오답 풀기</Link>
      </section>
    </div>
  );
}
