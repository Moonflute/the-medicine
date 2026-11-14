"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HomeAnatomy } from "@/components/home-anatomy";
import { useReviewCards } from "@/components/review-cards-provider";
import { nextHomeCard, type ReviewCard } from "@/lib/review-cards";

export function HomeHeart() {
  const { display } = useReviewCards();
  if (display === "cards") return null;
  return <div className="home-anatomy-slot w-full"><HomeAnatomy /></div>;
}

export function HomeReviewCard() {
  const { account, cards, display, loadError, refresh } = useReviewCards();
  if (display !== "cards" || !account) return null;

  const eligible = cards?.filter(card => !card.home_hidden) ?? [];
  if (eligible.length) return <HomeCardPreview key={account} account={account} cards={eligible} />;
  if (!cards) return (
    <div className="home-review-card review-card-panel" role="status">
      <p>{loadError ? "복습카드를 불러오지 못했어요." : "복습카드를 불러오는 중이에요."}</p>
      {loadError ? <button className="secondary-action" type="button" onClick={() => void refresh()}>다시 시도</button> : null}
    </div>
  );
  return (
    <div className="home-review-card review-card-panel">
      <p>{cards.length ? "홈에 표시할 카드가 없어요." : "복습카드를 추가해 보세요."}</p>
      <Link className="review-card-link" href="/review/cards">복습카드 관리</Link>
    </div>
  );
}

function HomeCardPreview({ account, cards }: { account: string; cards: ReviewCard[] }) {
  const storageKey = `medicine.home-review-card.v1.${account}`;
  const [selectedId, setSelectedId] = useState(() => {
    let lastId = null;
    try { lastId = sessionStorage.getItem(storageKey); } catch { /* Rotation still works in this visit. */ }
    return nextHomeCard(cards, lastId)?.id;
  });
  const [revealedId, setRevealedId] = useState<string | null>(null);
  const card = cards.find(item => item.id === selectedId) ?? cards[0];
  const revealed = revealedId === card.id;

  useEffect(() => {
    try { sessionStorage.setItem(storageKey, card.id); } catch { /* Rotation still works in this visit. */ }
  }, [card.id, storageKey]);

  return (
    <section className="home-review-card review-card-panel" aria-label="복습카드">
      <div className="review-card-heading">
        <h2>복습카드</h2>
        <Link className="review-card-link" href="/review/cards">관리</Link>
      </div>
      <button type="button" className="review-card-preview"
        onClick={() => setRevealedId(revealed ? null : card.id)}>
        <span className="review-card-text" aria-live="polite">{revealed ? card.back : card.front}</span>
        <span className="review-card-flip-label">{revealed ? "앞면 보기" : "답 보기"}</span>
      </button>
      {cards.length > 1 ? <div className="review-card-actions">
        <button type="button" className="secondary-action" onClick={() => {
          setSelectedId(nextHomeCard(cards, card.id)?.id);
          setRevealedId(null);
        }}>다음 카드</button>
      </div> : null}
    </section>
  );
}
