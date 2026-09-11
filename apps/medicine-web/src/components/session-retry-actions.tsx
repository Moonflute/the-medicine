"use client";

import { useState } from "react";

export function SessionRetryActions({ ids }: { ids: string[] }) {
  const [error, setError] = useState("");
  const uniqueIds = [...new Set(ids)];
  function retry() {
    if (!uniqueIds.length) return;
    try {
      const key = `qbank-retry-${crypto.randomUUID()}`;
      window.sessionStorage.setItem(key, JSON.stringify(uniqueIds));
      // A full navigation starts a new session even when the route pathname is unchanged.
      window.location.assign(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/review/qbank/session?mode=retry&set=${encodeURIComponent(key)}&count=all`);
    } catch {
      setError("재풀이 목록을 저장하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.");
    }
  }
  return <div className="flex flex-wrap items-center justify-center gap-2">
    <button type="button" onClick={retry} disabled={!uniqueIds.length} className="secondary-action disabled:opacity-40">이번 회차 오답 {uniqueIds.length}문항 다시 풀기</button>
    <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/review/qbank/session?mode=wrong&count=all`} className="text-sm text-slate-600 underline underline-offset-2">누적 오답 전체 풀기</a>
    {error && <p role="alert" className="w-full text-sm text-rose-700">{error}</p>}
  </div>;
}
