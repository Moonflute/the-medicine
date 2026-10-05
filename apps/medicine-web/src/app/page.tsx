import { HomeSettings } from "@/components/home-settings";
import { HomeAnatomy } from "@/components/home-anatomy";
import { SearchPanel } from "@/components/search-panel";
import { getDiseaseSearchIndex } from "@/lib/webdb";

export default function HomePage() {
  const searchIndex = getDiseaseSearchIndex();

  return (
    <div className="home-screen mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-3xl flex-col items-center justify-center gap-2 py-8">
      <SearchPanel entries={searchIndex} />
      <div className="home-anatomy-slot w-full"><HomeAnatomy /></div>
      <HomeSettings />
    </div>
  );
}