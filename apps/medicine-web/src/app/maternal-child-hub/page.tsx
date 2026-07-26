import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MaternalChildHub } from "@/components/maternal-child-hub";
import { getAllDiseases } from "@/lib/webdb";

export default function MaternalChildHubPage() {
  return (
    <div className="space-y-6">
      <Link href="/specialties" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"><ArrowLeft className="h-4 w-4" />분과 목록으로 돌아가기</Link>
      <MaternalChildHub diseases={getAllDiseases()} />
    </div>
  );
}