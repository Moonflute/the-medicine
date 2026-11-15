import Link from "next/link";
import type { ReviewCardSource } from "@/lib/review-cards";

export function ReviewCardSourceLink({ source }: { source: ReviewCardSource }) {
  return <p className="review-card-meta">출처: {source.label} · <Link className="review-card-link" href={`/review/qbank/session?mode=study-flow&ids=${encodeURIComponent(source.questionId)}&count=1`}>원문 문제 보기</Link></p>;
}
