"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Plus } from "lucide-react";
import { ReviewCardForm } from "@/components/review-card-form";
import { ReviewCardsProvider, reviewCardsErrorMessage, useReviewCards } from "@/components/review-cards-provider";
import type { ReviewCardRelations } from "@/lib/review-card-relations";
import type { ReviewCardDraft, ReviewCardSource } from "@/lib/review-cards";

type CardDefaults = { source?: ReviewCardSource; initialRelations?: ReviewCardRelations };

function ReviewCardCreateDialog({ source, initialRelations, onFinish }: CardDefaults & { onFinish: (saved: boolean) => void }) {
  const { account, cards, saving, loadError, refresh, saveCard } = useReviewCards();
  const dialog = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState<ReviewCardDraft>(() => ({ id: crypto.randomUUID(), front: "", back: "", source, relations: initialRelations }));
  const [message, setMessage] = useState("");

  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);

  function finish(saved: boolean) {
    dialog.current?.close();
    onFinish(saved);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    setMessage("");
    try {
      await saveCard(draft);
      finish(true);
    } catch (error) {
      setMessage(reviewCardsErrorMessage(error));
    }
  }

  return <dialog ref={dialog} className="review-card-create-dialog" aria-label="복습카드 추가" data-highlight-ignore
    onCancel={event => { event.preventDefault(); if (!saving) finish(false); }}>
    {account && cards ? <ReviewCardForm draft={draft} onChange={setDraft} onSubmit={submit} onCancel={() => finish(false)} saving={saving} message={message}
      notice={source ? <p className="review-card-meta">출처: {source.label}</p> : undefined} /> : <div className="review-card-panel">
      <p>{account === null ? "로그인하면 복습카드를 추가할 수 있어요." : loadError ? "카드 연결을 불러오지 못했어요." : "복습카드를 불러오는 중이에요."}</p>
      {loadError && <button type="button" className="secondary-action" onClick={() => void refresh()}>다시 시도</button>}
      <button type="button" className="secondary-action" onClick={() => finish(false)}>닫기</button>
    </div>}
  </dialog>;
}

export function ReviewCardCreateButton({ source, initialRelations }: CardDefaults) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  return <>
    <button type="button" className="secondary-action review-card-create-trigger" aria-haspopup="dialog"
      onClick={() => { setSaved(false); setOpen(true); }}><Plus size={14} aria-hidden="true" />복습카드 추가</button>
    {saved ? <span className="review-card-create-status" role="status">카드 저장됨</span> : null}
    {open ? <ReviewCardsProvider><ReviewCardCreateDialog source={source} initialRelations={initialRelations}
      onFinish={created => { setOpen(false); setSaved(created); }} /></ReviewCardsProvider> : null}
  </>;
}
