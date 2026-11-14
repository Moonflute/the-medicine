export type ReviewConfidence = "again" | "hard" | "good";

export function nextReviewAt(confidence: ReviewConfidence, reviewCount: number, now: Date) {
  const days = Math.max(1, reviewCount);
  const minutes = confidence === "again" ? 10 : (confidence === "hard" ? 1 : 3) * 24 * 60 * days;
  return new Date(now.getTime() + minutes * 60_000).toISOString();
}
