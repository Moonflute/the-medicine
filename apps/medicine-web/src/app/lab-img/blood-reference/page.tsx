import Link from "next/link";
import { ArrowLeft, ChevronRight, TableProperties } from "lucide-react";
import { buildLabImgOverviewGroups, formatLabImgReference } from "@/lib/lab-img-overview";
import { getLabImgNotes } from "@/lib/webdb";

export default function BloodReferencePage() {
  const notes = getLabImgNotes();
  const index = notes.find((note) => note.relativePath.endsWith("/혈액검사.md"));
  const groups = index ? buildLabImgOverviewGroups(index, notes) : [];

  return (
    <div className="space-y-6">
      <Link href="/lab-img/category/MDEg7ZiI7JWh6rKA7IKs" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"><ArrowLeft className="h-4 w-4" />혈액검사로 돌아가기</Link>
      <header className="rounded-lg border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700"><TableProperties className="h-4 w-4" />Lab &amp; Img / 혈액검사</div>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">혈액검사 통합 참고범위</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">세부 항목의 참고범위를 한 화면에 모았습니다. 임상 의미·감별은 섞지 않고 각 항목 상세 페이지에서 확인합니다. 참고범위는 검사실, 연령, 성별, 임신 여부와 임상 상황에 따라 달라질 수 있으므로 실제 결과지와 기관 기준을 우선합니다.</p>
      </header>
      <div className="space-y-5">
        {groups.map((group) => (
          <section key={group.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <h2 className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-lg font-semibold text-slate-950">{group.title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-white"><tr className="text-left text-slate-500"><th className="px-4 py-3 font-medium">Item</th><th className="px-4 py-3 font-medium text-teal-800">참고범위</th></tr></thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {group.rows.map((row) => <tr key={`${group.title}-${row.slug}-${row.title}`}><td className="px-4 py-3 font-medium text-slate-950"><Link href={`/lab-img/${row.slug}`} className="inline-flex items-center gap-1 transition hover:text-teal-700">{row.title}<ChevronRight className="h-3.5 w-3.5" /></Link></td><td className="px-4 py-3 font-medium text-slate-700">{formatLabImgReference(row)}</td></tr>)}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}