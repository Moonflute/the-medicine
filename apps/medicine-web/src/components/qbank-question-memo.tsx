"use client";

import { useEffect, useRef } from "react";
import { StickyNote, X } from "lucide-react";
import { MEMO_LIMIT } from "@/lib/qbank-memo-store";
import { practiceSourceQuestionId } from "@/lib/practice-selection";
import { MEMO_RETRY_EVENT, useQuestionMemo } from "@/components/qbank-memo-provider";

export function QbankMemoButton({ questionId, open, onToggle, panelId }: { questionId: string; open: boolean; onToggle: () => void; panelId: string }) {
  const { entry } = useQuestionMemo(practiceSourceQuestionId(questionId));
  const hasMemo = !!(entry?.draft?.body ?? entry?.remote?.body)?.trim();
  return <button type="button" className="secondary-action qbank-memo-toggle h-9 w-9 !px-0" title={hasMemo ? "내 메모 보기·수정" : "내 메모 추가"} aria-label={hasMemo ? "내 메모 있음 · 보기·수정" : "내 메모 추가"} aria-expanded={open} aria-controls={panelId} data-has-memo={hasMemo} onClick={onToggle}>
    <StickyNote className="h-4 w-4" aria-hidden="true" />{hasMemo && <span className="qbank-memo-dot" aria-hidden="true" />}
  </button>;
}

export function QbankMemoPanel({ questionId, panelId, onClose }: { questionId: string; panelId: string; onClose: () => void }) {
  const id = practiceSourceQuestionId(questionId);
  const { store, entry } = useQuestionMemo(id);
  const input = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { input.current?.focus({ preventScroll: true }); }, [store?.owner, id]);
  const body = entry?.draft?.body ?? entry?.remote?.body ?? "";
  const status = !store ? store === undefined ? "계정 확인 중…" : "로그인하면 개인 메모를 저장할 수 있어요."
    : !store.storageOK ? entry?.draft ? "기기 저장 실패 · 계정 저장 완료 전에는 창을 닫지 마세요." : "계정에 저장됨 · 이 기기 저장소 사용 불가"
    : entry?.conflict ? "다른 기기에서 수정된 메모가 있어요. 두 내용을 확인해 선택해 주세요."
    : entry?.draft ? store.error || !navigator.onLine ? "이 기기에 저장됨 · 연결되면 동기화" : "이 기기에 저장됨 · 계정 동기화 중…"
    : store.error ? "계정 메모를 불러오지 못했어요. 연결을 확인해 주세요."
    : !store.loaded ? "메모 불러오는 중…" : entry?.remote ? "계정에 저장됨" : "나만 볼 수 있는 문항 메모 · 자동 저장";
  return <section id={panelId} className="qbank-memo-panel" aria-label="내 문항 메모" data-highlight-ignore>
    <div className="qbank-memo-heading"><strong>내 메모</strong><button type="button" className="secondary-action h-8 w-8 !px-0" onClick={onClose} aria-label="메모 접기"><X size={15} /></button></div>
    {store && <><label className="sr-only" htmlFor={`${panelId}-input`}>문항별 개인 메모</label><textarea ref={input} id={`${panelId}-input`} value={body} onChange={event => store.edit(id, event.target.value)} maxLength={MEMO_LIMIT} rows={4} placeholder="헷갈린 보기, 틀린 이유, 다시 볼 내용을 적어두세요." />
      {entry?.conflict && <div className="qbank-memo-conflict"><p>다른 기기에 저장된 메모</p><pre>{entry.remote?.body || "(빈 메모)"}</pre><div className="flex flex-wrap gap-2"><button type="button" className="secondary-action" onClick={() => store.resolve(id, "local")}>현재 입력 내용으로 저장</button><button type="button" className="secondary-action" onClick={() => store.resolve(id, "remote")}>다른 기기 내용 사용</button></div></div>}
    </>}
    <div className="qbank-memo-footer"><span role="status">{status}</span>{store && <span>{body.length.toLocaleString()} / {MEMO_LIMIT.toLocaleString()}</span>}{store?.error && <button type="button" className="secondary-action" onClick={() => window.dispatchEvent(new Event(MEMO_RETRY_EVENT))}>다시 동기화</button>}</div>
  </section>;
}
