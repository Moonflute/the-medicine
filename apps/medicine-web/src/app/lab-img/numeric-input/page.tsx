import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NumericLabInput } from "@/components/numeric-lab-input";
import { getAllDiseases } from "@/lib/webdb";

export default function NumericInputPage() {
  return (
    <div className="space-y-6">
      <Link href="/lab-img" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"><ArrowLeft className="h-4 w-4" />Lab &amp; Img로 돌아가기</Link>
      <NumericLabInput diseases={getAllDiseases()} />
    </div>
  );
}
