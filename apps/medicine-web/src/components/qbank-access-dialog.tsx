"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, LoaderCircle, RefreshCw, Search, ShieldCheck, X } from "lucide-react";
import { listQbankAccess, setQbankAccess, type QbankAccessPage, type QbankAccessUser } from "@/lib/qbank-access-admin";

type Query = { page: number; search: string };
type Result = { query: Query; data?: QbankAccessPage; error?: string };

export function QbankAccessDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const active = useRef(false);
  const mutating = useRef(false);
  const titleId = useId();
  const searchId = useId();
  const [input, setInput] = useState("");
  const [query, setQuery] = useState<Query>({ page: 1, search: "" });
  const [result, setResult] = useState<Result | null>(null);
  const [saving, setSaving] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const current = result?.query === query ? result : null;
  const loading = !current;
  const data = current?.data;
  const busy = loading || Boolean(saving);

  useEffect(() => {
    active.current = true;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => { active.current = false; element?.close(); document.body.style.overflow = previousOverflow; };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void listQbankAccess(query.page, query.search, controller.signal).then(data => {
      if (!controller.signal.aborted) setResult({ query, data });
    }).catch(value => {
      if (!controller.signal.aborted) setResult({ query, error: value instanceof Error ? value.message : "계정 목록을 불러오지 못했습니다." });
    });
    return () => controller.abort();
  }, [query]);

  const reload = (next: Query) => {
    if (mutating.current) return;
    setError("");
    setNotice("");
    setQuery(next);
  };

  const changeAccess = async (user: QbankAccessUser, enabled: boolean) => {
    if (busy || mutating.current) return;
    if (!enabled && !window.confirm(`${user.email || user.name} 계정의 실전문제 접근 권한을 해제할까요?`)) return;
    mutating.current = true;
    setSaving(user.id);
    setError("");
    setNotice("");
    try {
      const saved = await setQbankAccess(user.id, enabled);
      if (!active.current) return;
      setResult(previous => previous?.data ? {
        ...previous,
        data: { ...previous.data, users: previous.data.users.map(item => item.id === saved.userId ? { ...item, enabled: saved.enabled } : item) },
      } : previous);
      setNotice(`${user.email || user.name}: ${enabled ? "승인했습니다." : "접근 권한을 해제했습니다."}`);
    } catch (value) {
      if (active.current) setError(value instanceof Error ? value.message : "저장 결과를 확인하지 못했습니다. 목록을 새로고침해 주세요.");
    } finally {
      mutating.current = false;
      if (active.current) setSaving("");
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(<dialog ref={dialog} aria-labelledby={titleId}
    onCancel={event => { event.preventDefault(); if (!mutating.current) onClose(); }}
    onClick={event => {
      if (mutating.current || event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    }}
    className="m-auto max-h-[calc(100dvh_-_2rem)] w-[calc(100vw_-_2rem)] max-w-xl overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 text-slate-800 shadow-xl backdrop:bg-slate-950/40 sm:p-5">
    <div className="flex items-center justify-between gap-3">
      <h2 id={titleId} className="flex min-w-0 items-center gap-2 text-base font-semibold"><ShieldCheck className="h-5 w-5 shrink-0 text-teal-700" />실전문제 권한 관리</h2>
      <button type="button" onClick={onClose} disabled={Boolean(saving)} title="닫기" aria-label="닫기" className="secondary-action shrink-0 p-2 disabled:opacity-40"><X className="h-4 w-4" /></button>
    </div>
    <form className="mt-4 flex gap-2" onSubmit={event => { event.preventDefault(); reload({ page: 1, search: input.trim() }); }}>
      <label htmlFor={searchId} className="sr-only">이름 또는 이메일 검색</label>
      <input id={searchId} type="search" value={input} onChange={event => setInput(event.target.value)} maxLength={200} disabled={Boolean(saving)} autoFocus autoComplete="off" placeholder="이름 또는 이메일 검색"
        className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 disabled:opacity-50" />
      <button type="submit" disabled={busy} title="계정 검색" aria-label="계정 검색" className="secondary-action shrink-0 p-2.5 disabled:opacity-40"><Search className="h-4 w-4" /></button>
      <button type="button" onClick={() => reload({ ...query })} disabled={busy} title="목록 새로고침" aria-label="목록 새로고침" className="secondary-action shrink-0 p-2.5 disabled:opacity-40"><RefreshCw className="h-4 w-4" /></button>
    </form>
    <div className="mt-4 flex justify-between gap-3 border-b border-slate-200 pb-2 text-xs text-slate-500">
      <span>{data?.total != null ? `계정 ${data.total}개` : "계정"}</span><span>실전문제 접근</span>
    </div>
    <div aria-busy={busy} className="min-h-28">
      {loading ? <p role="status" className="flex items-center justify-center gap-2 py-10 text-sm text-slate-500"><LoaderCircle className="h-4 w-4 animate-spin" />불러오는 중</p>
        : data?.users.length ? <ul className="divide-y divide-slate-100">{data.users.map(user => {
          const locked = (user.isOwner && user.enabled) || (!user.enabled && !user.canApprove);
          return <li key={user.id} className="flex items-center justify-between gap-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="break-all text-sm font-medium text-slate-800">{user.email || "이메일 없음"}</p>
              <p className="mt-0.5 break-words text-xs text-slate-500">{[user.name, user.isOwner ? "마스터" : null].filter(Boolean).join(" · ")}</p>
            </div>
            <label className={`flex shrink-0 items-center gap-2 text-xs ${user.enabled ? "text-teal-700" : "text-slate-500"} ${locked ? "cursor-default" : "cursor-pointer"}`}>
              {saving === user.id ? <LoaderCircle aria-hidden="true" className="h-3.5 w-3.5 animate-spin" /> : null}
              <span className="min-w-12 text-right">{user.enabled ? "승인됨" : user.canApprove ? "미승인" : "승인 불가"}</span>
              <input type="checkbox" checked={user.enabled} disabled={busy || locked} onChange={event => void changeAccess(user, event.target.checked)}
                aria-label={`${user.email || user.name} 실전문제 접근 승인`} title={user.isOwner ? "마스터 계정의 접근은 유지됩니다." : undefined}
                className="h-4 w-4 shrink-0 accent-teal-700 disabled:cursor-default disabled:opacity-50" />
            </label>
          </li>;
        })}</ul> : data ? <p className="py-10 text-center text-sm text-slate-500">검색된 계정이 없습니다.</p> : null}
    </div>
    {query.page > 1 || data?.hasMore ? <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-3">
      <button type="button" disabled={busy || query.page === 1} onClick={() => reload({ ...query, page: query.page - 1 })} title="이전 페이지" aria-label="이전 페이지" className="secondary-action p-2 disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>
      <span className="text-xs tabular-nums text-slate-500">{query.page} 페이지</span>
      <button type="button" disabled={busy || !data?.hasMore} onClick={() => reload({ ...query, page: query.page + 1 })} title="다음 페이지" aria-label="다음 페이지" className="secondary-action p-2 disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button>
    </div> : null}
    {error || current?.error ? <p role="alert" className="mt-3 break-words text-sm text-red-700">{error || current?.error}</p> : null}
    {notice ? <p role="status" className="mt-3 break-all text-xs text-teal-700">{notice}</p> : null}
  </dialog>, document.body);
}
