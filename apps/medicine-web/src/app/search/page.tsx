import { SearchPanel } from "@/components/search-panel";
import { getDiseaseSearchIndex } from "@/lib/webdb";

export default function SearchPage() {
  const searchIndex = getDiseaseSearchIndex();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Search</div>
        <h1 className="page-title">Search</h1>
      </header>

      <div className="max-w-3xl">
        <SearchPanel entries={searchIndex} />
      </div>
    </div>
  );
}
