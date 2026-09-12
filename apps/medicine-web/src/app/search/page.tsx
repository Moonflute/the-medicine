import { Suspense } from "react";
import { SearchRoutePanel } from "@/components/search-route-panel";
import { getDiseaseSearchIndex } from "@/lib/webdb";

export default function SearchPage() {
  const searchIndex = getDiseaseSearchIndex();

  return (
    <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-3xl items-center justify-center py-8">
      <Suspense fallback={<p role="status">검색 준비 중…</p>}><SearchRoutePanel entries={searchIndex} /></Suspense>
    </div>
  );
}
