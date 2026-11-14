"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Plus, Search } from "lucide-react";
import { reviewCardsErrorMessage, useReviewCards } from "@/components/review-cards-provider";
import { isReviewCardDue, REVIEW_CARD_LIMITS, type ReviewCard, type ReviewCardDraft } from "@/lib/review-cards";
import type { ReviewConfidence } from "@/lib/review-schedule";

const ratings: { value: ReviewConfidence; label: string }[] = [
  { value: "again", label: "다시" },
  { value: "hard", label: "어려움" },
  { value: "good", label: "기억남" },
];
const dueFormat = new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium", timeStyle: "short" });

export function ReviewCardsClient() {
  const { account, cards, loadError, refresh } = useReviewCards();
  if (account === null) return <p className="review-card-panel">로그인하면 복습카드를 만들고 다른 기기에서도 볼 수 있어요.</p>;
  if (!account || !cards) return (
    <div className="review-card-panel" role="status">
      <p>{loadError ? "복습카드를 불러오지 못했어요." : "복습카드를 불러오는 중이에요."}</p>
      {loadError ? <button className="secondary-action" type="button" onClick={() => void refresh()}>다시 시도</button> : null}
    </div>
  );
  return <CardWorkspace key={account} cards={cards} />;
}

function CardWorkspace({ cards }: { cards: ReviewCard[] }) {
  const { saving, loadError, saveCard, deleteCard, setHomeHidden, rateCard, refresh } = useReviewCards();
  const [now, setNow] = useState(Date.now);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState<ReviewCardDraft | null>(null);
  const [session, setSession] = useState<{ queue: string[]; graded: number } | null>(null);
  const [revealed, setRevealed] = useState<{ id: string; revision: number } | null>(null);
  const [message, setMessage] = useState("");
  const [draftMessage, setDraftMessage] = useState("");
  const frontInput = useRef<HTMLTextAreaElement>(null);
  const draftId = draft?.id;

  useEffect(() => {
    if (draftId) frontInput.current?.focus();
  }, [draftId]);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const interval = window.setInterval(tick, 30_000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", tick);
    };
  }, []);

  const due = cards.filter(card => isReviewCardDue(card, now));
  const dueById = new Map(due.map(card => [card.id, card]));
  const remaining = session?.queue.flatMap(id => {
    const card = dueById.get(id);
    return card ? [card] : [];
  }) ?? [];
  const active = remaining[0];
  const showAnswer = active && revealed?.id === active.id && revealed.revision === active.content_revision;
  const term = query.trim().toLocaleLowerCase();
  const matching = term ? cards.filter(card => card.front.toLocaleLowerCase().includes(term)) : cards;
  const editingCard = draft?.revision === undefined ? null : cards.find(card => card.id === draft.id);
  const draftAlreadySaved = draft && editingCard && draft.front.trim() === editingCard.front && draft.back.trim() === editingCard.back;
  const draftChangedElsewhere = draft?.revision !== undefined && draft.revision !== editingCard?.content_revision && !draftAlreadySaved;

  function openDraft(card?: ReviewCard) {
    setDraft(card ? { id: card.id, front: card.front, back: card.back, revision: card.content_revision }
      : { id: crypto.randomUUID(), front: "", back: "" });
    setDraftMessage("");
    setMessage("");
    if (card?.id === draftId) frontInput.current?.focus();
  }

  async function submitDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft || draftChangedElsewhere || saving) return;
    setDraftMessage("");
    try {
      await saveCard(draft);
      setDraft(null);
      setMessage("카드를 저장했어요.");
    } catch (error) {
      setDraftMessage(reviewCardsErrorMessage(error));
      void refresh();
    }
  }

  async function manageCard(action: () => Promise<void>, success: string) {
    setMessage("");
    try {
      await action();
      setMessage(success);
    } catch (error) {
      setMessage(reviewCardsErrorMessage(error));
      void refresh();
    }
  }

  function startReview() {
    const instant = Date.now();
    const queue = cards.filter(card => isReviewCardDue(card, instant))
      .sort((a, b) => Date.parse(a.due_at ?? a.created_at) - Date.parse(b.due_at ?? b.created_at))
      .map(card => card.id);
    if (!queue.length) return;
    setNow(instant);
    setRevealed(null);
    setMessage("");
    setSession({ queue, graded: 0 });
  }

  async function recordRating(card: ReviewCard, confidence: ReviewConfidence) {
    if (saving || !showAnswer) return;
    setMessage("");
    try {
      await rateCard(card, confidence);
      setSession(previous => previous && ({ queue: previous.queue.filter(id => id !== card.id), graded: previous.graded + 1 }));
      setRevealed(null);
    } catch (error) {
      setMessage(reviewCardsErrorMessage(error));
      void refresh();
    }
  }

  if (session) return (
    <section className="review-card-panel review-card-session" aria-label="복습 진행">
      <div className="review-card-heading">
        <p role="status">{active ? `남은 카드 ${remaining.length}장` : session.graded ? `${session.graded}장 복습했어요.` : "지금 복습할 카드가 없어요."}</p>
        <button className="secondary-action" type="button" disabled={saving} onClick={() => {
          setSession(null);
          setMessage("");
          setNow(Date.now());
        }}>목록으로</button>
      </div>
      {active ? <>
        <div className="review-card-face" aria-label="앞면">
          <p className="review-card-text">{active.front}</p>
        </div>
        {showAnswer ? <>
          <div className="review-card-face" aria-label="뒷면" aria-live="polite">
            <p className="review-card-text">{active.back}</p>
          </div>
          <div className="review-card-ratings" role="group" aria-label="복습 결과">
            {ratings.map(({ value, label }) => <button key={value} type="button"
              className={value === "good" ? "primary-action" : "secondary-action"} disabled={saving}
              onClick={() => void recordRating(active, value)}>{label}</button>)}
          </div>
        </> : <button type="button" className="primary-action" onClick={() => setRevealed({ id: active.id, revision: active.content_revision })}>답 보기</button>}
      </> : null}
      {message ? <p className="review-card-status" role="status">{message}</p> : null}
    </section>
  );

  return (
    <>
      <div className="review-card-panel review-card-toolbar">
        <p>전체 {cards.length}장 <span aria-hidden="true">·</span> 복습할 카드 {due.length}장</p>
        <div className="review-card-actions">
          <button className="primary-action" type="button" disabled={!due.length || saving} onClick={startReview}>복습 시작</button>
          <button className="secondary-action" type="button" disabled={Boolean(draft) || saving} onClick={() => openDraft()}>
            <Plus size={16} aria-hidden="true" />카드 추가
          </button>
        </div>
      </div>
      {loadError ? <div className="review-card-status" role="status">
        목록을 갱신하지 못했어요. <button type="button" className="review-card-link" onClick={() => void refresh()}>다시 시도</button>
      </div> : null}
      {message ? <p className="review-card-status" role="status">{message}</p> : null}
      <div className="review-card-layout" data-editing={Boolean(draft)}>
        {draft ? <form className="review-card-panel review-card-form" onSubmit={submitDraft}>
          <h2>{draft.revision === undefined ? "카드 추가" : "카드 수정"}</h2>
          <label>앞면<textarea ref={frontInput} required rows={3} value={draft.front} maxLength={REVIEW_CARD_LIMITS.front}
            onChange={event => setDraft({ ...draft, front: event.target.value })} disabled={saving} /></label>
          <label>뒷면<textarea required rows={5} value={draft.back} maxLength={REVIEW_CARD_LIMITS.back}
            onChange={event => setDraft({ ...draft, back: event.target.value })} disabled={saving} /></label>
          {draftChangedElsewhere ? <div className="review-card-status" role="status">
            {editingCard ? "다른 기기에서 이 카드가 수정됐어요." : "다른 기기에서 이 카드가 삭제됐어요."}{" "}
            {editingCard ? <button className="review-card-link" type="button" disabled={saving} onClick={() => openDraft(editingCard)}>최신본 불러오기</button>
              : <button className="review-card-link" type="button" disabled={saving} onClick={() => {
                setDraft({ id: crypto.randomUUID(), front: draft.front, back: draft.back });
                setDraftMessage("");
              }}>새 카드로 작성</button>}
          </div> : null}
          {draftMessage ? <p className="review-card-status" role="status">{draftMessage}</p> : null}
          <div className="review-card-actions">
            <button className="primary-action" type="submit" disabled={saving || draftChangedElsewhere || !draft.front.trim() || !draft.back.trim()}>저장</button>
            <button className="secondary-action" type="button" disabled={saving} onClick={() => setDraft(null)}>취소</button>
          </div>
        </form> : null}
        <section className="review-card-panel review-card-list" aria-label="카드 목록">
          <label className="review-card-search">
            <Search size={16} aria-hidden="true" />
            <input type="search" value={query} onChange={event => setQuery(event.target.value)} aria-label="카드 앞면 검색" placeholder="카드 앞면 검색" />
          </label>
          {matching.length ? <ul>{matching.map(card => <li key={card.id}>
            <div className="review-card-list-copy">
              <p className="review-card-text">{card.front}</p>
              <p className="review-card-meta">
                {isReviewCardDue(card, now) ? "복습 가능" : `다음 복습 ${dueFormat.format(new Date(card.due_at!))}`}
                {card.home_hidden ? " · 홈에서 제외됨" : null}
              </p>
            </div>
            <div className="review-card-actions">
              <button type="button" className="secondary-action" disabled={Boolean(draft) || saving} onClick={() => openDraft(card)}>수정</button>
              <button type="button" className="secondary-action" disabled={saving} onClick={() => void manageCard(
                () => setHomeHidden(card.id, !card.home_hidden), card.home_hidden ? "홈에 다시 표시할게요." : "홈에서 제외했어요.",
              )}>{card.home_hidden ? "홈에 다시 표시" : "홈에서 제외"}</button>
              <button type="button" className="secondary-action" disabled={saving || draftId === card.id} onClick={() => {
                if (window.confirm("이 카드를 삭제할까요?")) void manageCard(() => deleteCard(card), "카드를 삭제했어요.");
              }}>삭제</button>
            </div>
          </li>)}</ul> : <p className="review-card-status">{cards.length ? "검색 결과가 없어요." : "아직 복습카드가 없어요."}</p>}
        </section>
      </div>
    </>
  );
}
