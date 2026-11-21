"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isQbankProgressedInCurrentView, loadQbankState } from "@/lib/qbank-store";
import { isUnresolvedQbankWrong } from "@/lib/qbank-wrong";

export type StatsSetRequest = { ids: string[]; title: string; kind: "wrong" | "unattempted" | "snapshot" };
export type StatsSetLauncher = (request: StatsSetRequest) => void;

export function QbankStatsSetDialog({ request, onClose, questions }: { request: StatsSetRequest; onClose: () => void; questions: Array<{ id: string; revisionIds?: string[]; sourceIds?: string[] }> }) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const [count, setCount] = useState(String(Math.min(20, request.ids.length)));
  const [error, setError] = useState("");
  useEffect(() => { dialog.current?.showModal(); }, []);
  function start() {
    const requestedCount = Number(count);
    if (!Number.isInteger(requestedCount) || requestedCount < 1) return;
    try {
      const state = loadQbankState();
      const versions = new Map(questions.map(q => [q.id, [q.id, ...(q.revisionIds ?? []), ...(q.sourceIds ?? [])]]));
      const ids = [...new Set(request.ids)].filter(id => request.kind === "wrong" ? isUnresolvedQbankWrong(state, versions.get(id) ?? [id]) : request.kind === "unattempted" ? !isQbankProgressedInCurrentView(state.progress[id]) : true);
      if (!ids.length) { setError("현재 이 범위에 남은 문항이 없습니다."); return; }
      const key = `qbank-retry-${crypto.randomUUID()}`;
      sessionStorage.setItem(key, JSON.stringify(ids));
      router.push(`/review/qbank/session?mode=retry&set=${encodeURIComponent(key)}&count=${Math.min(requestedCount, ids.length)}&sessionTitle=${encodeURIComponent(request.title)}&sessionSummary=${encodeURIComponent(request.title)}`);
      onClose();
    } catch { setError("풀이 목록을 저장하지 못했습니다. 브라우저 저장 공간을 확인해 주세요."); }
  }
  return <dialog ref={dialog} className="qbank-compact-dialog" aria-label={request.title} onCancel={event => { event.preventDefault(); onClose(); }}>
    <form className="review-card-panel space-y-4" onSubmit={event => { event.preventDefault(); start(); }}>
      <h2 className="font-semibold">{request.title}</h2>
      <p className="text-sm text-slate-500">대상 {request.ids.length}문항{request.kind === "unattempted" ? " · 현재 회독 기준" : request.kind === "snapshot" ? " · 해당 모의고사 제출 당시 기준" : " · 미해결 오답"}</p>
      <label className="flex items-center gap-2 text-sm">문항 수<input aria-label="풀 문항 수" type="number" min={1} max={request.ids.length} required value={count} onChange={event => setCount(event.target.value)} className="w-24 rounded-md border border-slate-200 bg-transparent px-3 py-2" /><button type="button" className="secondary-action" onClick={() => setCount(String(request.ids.length))}>전체</button></label>
      <div className="flex gap-2"><button type="submit" className="primary-action">시작</button><button type="button" className="secondary-action" onClick={onClose}>취소</button></div>
      {error && <p role="alert" className="text-sm text-rose-700">{error}</p>}
    </form>
  </dialog>;
}
