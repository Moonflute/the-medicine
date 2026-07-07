import { ReviewPageClient } from "@/components/review-page-client";
import { getAllDiseases } from "@/lib/webdb";

export default function ReviewPage() {
  const notes = getAllDiseases();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div className="eyebrow">Review</div>
        <h1 className="page-title">Bookmark review</h1>
      </header>

      <ReviewPageClient notes={notes} />
    </div>
  );
}

