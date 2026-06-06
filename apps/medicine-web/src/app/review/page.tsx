import { ReviewPageClient } from "@/components/review-page-client";
import { getAllDiseases } from "@/lib/webdb";

export default function ReviewPage() {
  const notes = getAllDiseases();

  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Review</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Bookmark review</h1>
      </header>

      <ReviewPageClient notes={notes} />
    </div>
  );
}
