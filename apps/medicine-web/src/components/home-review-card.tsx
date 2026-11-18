"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { HomeAnatomy } from "@/components/home-anatomy";
import { reviewCardsErrorMessage, useReviewCards } from "@/components/review-cards-provider";
import { adjacentHomeCard, type HomeReviewAnswerMode, type ReviewCard } from "@/lib/review-cards";

const answerModes = [
  { value: "flip", label: "뒷면으로 전환" },
  { value: "expand", label: "아래에 펼치기" },
] as const;

function HomeCardsSettings() {
  const { homeAnswerMode, saving, setHomeAnswerMode } = useReviewCards();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const [saveError, setSaveError] = useState("");

  async function choose(mode: HomeReviewAnswerMode) {
    if (saving || mode === homeAnswerMode) return;
    setSaveError("");
    try {
      await setHomeAnswerMode(mode);
    } catch (error) {
      setSaveError(reviewCardsErrorMessage(error));
    }
  }

  return (
    <>
      <button type="button" className="review-card-icon" aria-haspopup="dialog" aria-controls={dialogId}
        aria-label="복습카드 설정" title="복습카드 설정" onClick={() => {
          setSaveError("");
          dialogRef.current?.showModal();
        }}>
        <Settings size={17} aria-hidden="true" />
      </button>
      <dialog ref={dialogRef} id={dialogId} className="home-settings-dialog home-review-settings"
        aria-labelledby={`${dialogId}-title`} onClick={event => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}>
        <div className="home-settings-header">
          <h2 id={`${dialogId}-title`}>복습카드 설정</h2>
          <button type="button" className="home-settings-close" aria-label="설정 닫기" autoFocus
            onClick={() => dialogRef.current?.close()}><span aria-hidden="true">✕</span></button>
        </div>
        <div className="home-settings-content">
          <h3 id={`${dialogId}-answer-mode`}>답 표시 방식</h3>
          <div className="review-card-display-options" role="group" aria-labelledby={`${dialogId}-answer-mode`}>
            {answerModes.map(({ value, label }) => (
              <button key={value} type="button" aria-pressed={homeAnswerMode === value} disabled={saving}
                onClick={() => void choose(value)}>{label}</button>
            ))}
          </div>
          <p className="home-settings-intro" role="status">
            {saving ? "저장 중…" : saveError || "이 설정은 계정에 저장돼요."}
          </p>
          <Link className="review-card-link" href="/review/cards" onClick={() => dialogRef.current?.close()}>
            카드 관리 <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </dialog>
    </>
  );
}

export function HomeHeart() {
  const { display } = useReviewCards();
  if (display === "cards") return null;
  return <div className="home-anatomy-slot w-full"><HomeAnatomy /></div>;
}

export function HomeReviewCard() {
  const { account, cards, display, homeAnswerMode, loadError, refresh } = useReviewCards();
  if (display !== "cards" || !account) return null;

  const eligible = cards?.filter(card => !card.home_hidden) ?? [];
  if (eligible.length) return <HomeCardPreview key={account} account={account} cards={eligible} answerMode={homeAnswerMode} />;
  if (!cards) return (
    <div className="home-review-card review-card-panel" role="status">
      <p>{loadError ? "복습카드를 불러오지 못했어요." : "복습카드를 불러오는 중이에요."}</p>
      {loadError ? <button className="secondary-action" type="button" onClick={() => void refresh()}>다시 시도</button> : null}
    </div>
  );
  return (
    <div className="home-review-card review-card-panel">
      <div className="review-card-heading">
        <p>{cards.length ? "홈에 표시할 카드가 없어요." : "복습카드를 추가해 보세요."}</p>
        <HomeCardsSettings key={account} />
      </div>
    </div>
  );
}

function HomeCardPreview({ account, cards, answerMode }: { account: string; cards: ReviewCard[]; answerMode: HomeReviewAnswerMode }) {
  const storageKey = `medicine.home-review-card.v1.${account}`;
  const [selectedId, setSelectedId] = useState(() => {
    let lastId = null;
    try { lastId = sessionStorage.getItem(storageKey); } catch { /* Rotation still works in this visit. */ }
    return adjacentHomeCard(cards, lastId, 1)?.id;
  });
  const [revealedId, setRevealedId] = useState<string | null>(null);
  const card = cards.find(item => item.id === selectedId) ?? cards[0];
  const revealed = revealedId === card.id;
  const expandAnswer = answerMode === "expand";
  const hasNavigation = cards.length > 1;

  useEffect(() => {
    try { sessionStorage.setItem(storageKey, card.id); } catch { /* Rotation still works in this visit. */ }
  }, [card.id, storageKey]);

  function move(direction: -1 | 1) {
    setSelectedId(adjacentHomeCard(cards, card.id, direction)?.id);
    setRevealedId(null);
  }

  return (
    <section className="home-review-card review-card-panel" aria-label="복습카드">
      <div className="review-card-heading">
        <h2>복습카드</h2>
        <HomeCardsSettings />
      </div>
      <div className="home-review-carousel" data-navigation={hasNavigation}>
        {hasNavigation ? <button type="button" className="review-card-icon" aria-label="이전 카드" title="이전 카드" onClick={() => move(-1)}>
          <ChevronLeft size={20} aria-hidden="true" />
        </button> : null}
        <button type="button" className="review-card-preview" aria-expanded={expandAnswer ? revealed : undefined}
          onClick={() => setRevealedId(revealed ? null : card.id)}>
          <span className="review-card-text" aria-live="polite">
            {revealed && !expandAnswer ? card.back : card.front}
            {revealed && expandAnswer ? <span className="home-review-expanded-answer">{card.back}</span> : null}
          </span>
          <span className="review-card-flip-label">{revealed ? (expandAnswer ? "답 접기" : "앞면 보기") : "답 보기"}</span>
        </button>
        {hasNavigation ? <button type="button" className="review-card-icon" aria-label="다음 카드" title="다음 카드" onClick={() => move(1)}>
          <ChevronRight size={20} aria-hidden="true" />
        </button> : null}
      </div>
    </section>
  );
}
