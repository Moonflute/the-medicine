import { SearchPanel } from "@/components/search-panel";
import { getDiseaseSearchIndex } from "@/lib/webdb";

export default function SearchPage() {
  const searchIndex = getDiseaseSearchIndex();

  return (
    <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-3xl items-center justify-center py-8">
      <SearchPanel entries={searchIndex} />
    </div>
  );
}
