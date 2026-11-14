import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReviewCardsClient } from "@/components/review-cards-client";
import { ReviewCardsProvider } from "@/components/review-cards-provider";

export default function ReviewCardsPage() {
  return (
    <div className="page-stack review-cards-page">
      <header className="page-header">
        <Link href="/review" className="review-card-link review-card-back"><ArrowLeft size={16} aria-hidden="true" /> Review</Link>
        <h1 className="page-title">복습카드</h1>
      </header>
      <ReviewCardsProvider><ReviewCardsClient /></ReviewCardsProvider>
    </div>
  );
}
