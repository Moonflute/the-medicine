"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Plus } from "lucide-react";
import { ReviewCardsProvider, reviewCardsErrorMessage, useReviewCards } from "@/components/review-cards-provider";
import { ReviewCardForm } from "@/components/review-card-form";
import type { ReviewCardDraft, ReviewCardSource } from "@/lib/review-cards";
import type { QbankQuestion } from "@/lib/types";
import { mockSubject } from "@/lib/mock-exam";

function Editor({ source, onClose, onSaved }: { source: ReviewCardSource; onClose: () => void; onSaved: () => void }) {
  const { account, cards, saving, loadError, refresh, saveCard } = useReviewCards();
  const dialog = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState<ReviewCardDraft>(() => ({ id: crypto.randomUUID(), front: "", back: "", source }));
  const [message, setMessage] = useState("");
  useEffect(() => { dialog.current?.showModal(); }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    setMessage("");
    try { await saveCard(draft); onSaved(); } catch (error) { setMessage(reviewCardsErrorMessage(error)); }
  }
  return <dialog ref={dialog} className="qbank-compact-dialog qbank-card-dialog" aria-label="복습카드 추가" onCancel={event => { event.preventDefault(); if (!saving) onClose(); }}>
    {account && cards ? <ReviewCardForm draft={draft} onChange={setDraft} onSubmit={submit} onCancel={onClose} saving={saving} message={message}
      notice={<p className="review-card-meta">출처: {source.label}</p>} /> : <div className="review-card-panel">
      <p>{account === null ? "로그인하면 복습카드를 추가할 수 있어요." : loadError ? "카드 연결을 불러오지 못했어요." : "복습카드를 불러오는 중이에요."}</p>
      {loadError && <button type="button" className="secondary-action" onClick={() => void refresh()}>다시 시도</button>}
      <button type="button" className="secondary-action" onClick={onClose}>닫기</button>
    </div>}
  </dialog>;
}

export function QbankReviewCardButton({ question }: { question: QbankQuestion }) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const year = question.id.match(/(?:19|20)\d{2}/)?.[0];
  const label = question.questionBank === "practice" ? `${year ? `${year}년 · ` : ""}${mockSubject(question.id)} · ${Number(question.id.split("-").at(-1)) || question.id}번`
    : `${question.questionBank === "theory" ? "이론" : "임상"} · ${question.targetTitle || question.specialty}`;
  return <>
    <button type="button" className="secondary-action qbank-add-review-card" onClick={() => { setSaved(false); setOpen(true); }}><Plus size={14} aria-hidden="true" />복습카드 추가</button>
    {saved && <span className="text-xs text-teal-700" role="status">카드 저장됨</span>}
    {open && <ReviewCardsProvider><Editor source={{ questionId: question.id, bank: question.questionBank, label: label.slice(0, 240) }} onClose={() => setOpen(false)} onSaved={() => { setOpen(false); setSaved(true); }} /></ReviewCardsProvider>}
  </>;
}
