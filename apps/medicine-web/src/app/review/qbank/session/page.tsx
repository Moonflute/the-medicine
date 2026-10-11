import { Suspense } from "react";
import { QbankSessionRoute } from "@/components/qbank-session-route";
import { getQbankSpecialties } from "@/lib/webdb";

export default function QbankSessionPage() {
  return <Suspense fallback={<p role="status">문제 준비 중…</p>}><QbankSessionRoute specialties={getQbankSpecialties()} /></Suspense>;
}
