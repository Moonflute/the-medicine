"use client";

import { useEffect, useRef, type FormEvent, type ReactNode } from "react";
import { ReviewCardRelationPicker } from "@/components/review-card-relation-picker";
import { REVIEW_CARD_LIMITS, type ReviewCardDraft } from "@/lib/review-cards";

/** One editor for the card library and the in-question shortcut. */
export function ReviewCardForm({ draft, onChange, onSubmit, onCancel, saving, blocked = false, notice, message }: {
  draft: ReviewCardDraft; onChange: (draft: ReviewCardDraft) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void; onCancel: () => void;
  saving: boolean; blocked?: boolean; notice?: ReactNode; message?: string;
}) {
  const frontInput = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { frontInput.current?.focus(); }, [draft.id]);
  return <form className="review-card-panel review-card-form" onSubmit={onSubmit}>
    <h2>{draft.revision === undefined ? "복습카드 추가" : "복습카드 수정"}</h2>
    <label>앞면<textarea ref={frontInput} required rows={3} value={draft.front} maxLength={REVIEW_CARD_LIMITS.front}
      onChange={event => onChange({ ...draft, front: event.target.value })} disabled={saving} /></label>
    <label>뒷면<textarea required rows={5} value={draft.back} maxLength={REVIEW_CARD_LIMITS.back}
      onChange={event => onChange({ ...draft, back: event.target.value })} disabled={saving} /></label>
    <ReviewCardRelationPicker key={draft.id} front={draft.front} back={draft.back} value={draft.relations} disabled={saving}
      onChange={relations => onChange({ ...draft, relations })} />
    {notice}
    {message && <p className="review-card-status" role="status">{message}</p>}
    <div className="review-card-actions">
      <button className="primary-action" type="submit" disabled={saving || blocked || !draft.front.trim() || !draft.back.trim()}>저장</button>
      <button className="secondary-action" type="button" disabled={saving} onClick={onCancel}>취소</button>
    </div>
  </form>;
}
