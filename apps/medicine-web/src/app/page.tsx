import Link from "next/link";
import { SearchPanel } from "@/components/search-panel";
import { getDiseaseSearchIndex } from "@/lib/webdb";

export default function HomePage() {
  const searchIndex = getDiseaseSearchIndex();

  return (
    <div className="grid min-h-[calc(100vh-8rem)] content-start gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
      <SearchPanel entries={searchIndex} className="w-full" />
      <aside className="space-y-3">
        <div className="surface p-5">
          <div className="eyebrow">Fast paths</div>
          <div className="mt-4 grid gap-2">
            <Link href="/specialties" className="list-tile px-4 py-3 text-sm font-semibold text-slate-900">Specialty index</Link>
            <Link href="/drugs" className="list-tile px-4 py-3 text-sm font-semibold text-slate-900">Drug categories</Link>
            <Link href="/lab-img" className="list-tile px-4 py-3 text-sm font-semibold text-slate-900">Lab & imaging</Link>
            <Link href="/skills" className="list-tile px-4 py-3 text-sm font-semibold text-slate-900">Clinical skills</Link>
          </div>
        </div>
      </aside>
    </div>
  );
}