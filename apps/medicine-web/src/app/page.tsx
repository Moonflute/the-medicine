import { HomeSettings } from "@/components/home-settings";
import { HomeHeart, HomeReviewCard } from "@/components/home-review-card";
import { ReviewCardsProvider } from "@/components/review-cards-provider";
import { SearchPanel } from "@/components/search-panel";
import { getDiseaseSearchIndex } from "@/lib/webdb";

export default function HomePage() {
  const searchIndex = getDiseaseSearchIndex();

  return (
    <div className="home-screen mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-3xl flex-col items-center justify-center gap-2 py-8">
      <ReviewCardsProvider home>
        <SearchPanel entries={searchIndex}><HomeReviewCard /></SearchPanel>
        <HomeHeart />
        <HomeSettings />
      </ReviewCardsProvider>
    </div>
  );
}
