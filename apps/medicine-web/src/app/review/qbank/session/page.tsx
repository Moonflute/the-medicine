import { Suspense } from "react";
import { QbankSessionClient } from "@/components/qbank-session-client";
import { getQbankSpecialties } from "@/lib/webdb";

export default function QbankSessionPage() {
  return (
    <Suspense fallback={<div className="surface p-8 text-center text-slate-600">문제를 불러오는 중입니다.</div>}>
      <QbankSessionClient specialties={getQbankSpecialties()} />
    </Suspense>
  );
}
