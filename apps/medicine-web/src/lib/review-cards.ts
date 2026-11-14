export type HomeReviewDisplay = "heart" | "cards";

export type ReviewCard = {
  id: string;
  front: string;
  back: string;
  home_hidden: boolean;
  content_revision: number;
  review_count: number;
  due_at: string | null;
  created_at: string;
};

export type ReviewCardDraft = Pick<ReviewCard, "id" | "front" | "back"> & {
  revision?: number;
};

export const REVIEW_CARD_FIELDS = "id,front,back,home_hidden,content_revision,review_count,due_at,created_at";
export const REVIEW_CARD_LIMITS = { front: 2000, back: 8000 };

export function sortReviewCards(cards: ReviewCard[]) {
  return cards.sort((left, right) => Date.parse(right.created_at) - Date.parse(left.created_at) || left.id.localeCompare(right.id));
}

export function isReviewCardDue(card: ReviewCard, now: number) {
  return !card.due_at || Date.parse(card.due_at) <= now;
}

export function nextHomeCard<T extends Pick<ReviewCard, "id">>(cards: readonly T[], lastId: string | null) {
  const lastIndex = cards.findIndex(card => card.id === lastId);
  return cards[lastIndex + 1] ?? cards[0] ?? null;
}
