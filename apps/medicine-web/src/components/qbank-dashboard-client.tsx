"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Bookmark, CircleAlert, Download, Play, RotateCcw, Upload } from "lucide-react";
import { exportQbankData, importQbankData, loadQbankState, QBANK_CHANGE_EVENT } from "@/lib/qbank-store";
import type { QbankSpecialtySummary } from "@/lib/types";

export function QbankDashboardClient({ specialties }: { specialties: QbankSpecialtySummary[] }) {
  const [specialty, setSpecialty] = useState("all");
  const [count, setCount] = useState("10");
  const [stats, setStats] = useState({ attempted: 0, wrong: 0, bookmarks: 0, mastered: 0 });

  useEffect(() => {
    const refresh = () => {
      const state = loadQbankState();
      const progress = Object.values(state.progress);
      setStats({
        attempted: progress.length,
        wrong: state.wrongIds.length,
        bookmarks: state.bookmarkIds.length,
        mastered: progress.filter((item) => item.mastered).length,
      });
    };
    refresh();
    window.addEventListener(QBANK_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(QBANK_CHANGE_EVENT, refresh);
  }, []);

  const total = useMemo(() => specialties.reduce((sum, item) => sum + item.count, 0), [specialties]);
  const sessionHref = `/review/qbank/session?mode=${specialty === "all" ? "all" : "specialty"}&specialty=${encodeURIComponent(specialty)}&count=${count}`;

  function downloadProgress() {
    const blob = new Blob([JSON.stringify(exportQbankData(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `medicine-qbank-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function restoreProgress(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      importQbankData(JSON.parse(await file.text()) as unknown);
      window.alert("Q-bank 학습 기록을 복원했습니다.");
    } catch (reason) {
      window.alert(reason instanceof Error ? reason.message : "Q-bank 기록을 복원하지 못했습니다.");
    }
  }

  return (
    <div className="space-y-6">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="surface p-4"><div className="text-xs text-slate-500">전체 문제</div><div className="mt-1 text-2xl font-semibold">{total.toLocaleString()}</div></div>
        <div className="surface p-4"><div className="text-xs text-slate-500">풀이 완료</div><div className="mt-1 text-2xl font-semibold">{stats.attempted.toLocaleString()}</div></div>
        <div className="surface border-rose-200 bg-rose-50 p-4"><div className="text-xs text-rose-700">오답</div><div className="mt-1 text-2xl font-semibold text-rose-950">{stats.wrong.toLocaleString()}</div></div>
        <div className="surface border-teal-200 bg-teal-50 p-4"><div className="text-xs text-teal-700">숙달</div><div className="mt-1 text-2xl font-semibold text-teal-950">{stats.mastered.toLocaleString()}</div></div>
      </section>

      <section className="surface p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-950">새 문제 세션</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            분과
            <select value={specialty} onChange={(event) => setSpecialty(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5">
              <option value="all">전체 분과 ({total})</option>
              {specialties.map((item) => <option key={item.slug} value={item.slug}>{item.name} ({item.count})</option>)}
            </select>
          </label>
          <label className="text-sm font-medium text-slate-700">
            문제 수
            <input type="number" min={1} max={total} inputMode="numeric" value={count === "all" ? total : count} onChange={(event) => setCount(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5" />
          </label>
        </div>
        <Link href={sessionHref} className="primary-action mt-5"><Play className="h-4 w-4" />문제 풀기 시작</Link>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Link href={`/review/qbank/session?mode=unattempted&count=${count}`} className="list-tile p-5">
          <RotateCcw className="h-5 w-5 text-teal-700" /><h3 className="mt-3 font-semibold">미풀이 문제</h3><p className="mt-1 text-sm text-slate-600">아직 답하지 않은 문제만 무작위로 풉니다.</p>
        </Link>
        <Link href={`/review/qbank/session?mode=wrong&count=${count}`} className="list-tile p-5">
          <CircleAlert className="h-5 w-5 text-rose-700" /><h3 className="mt-3 font-semibold">오답 다시 풀기</h3><p className="mt-1 text-sm text-slate-600">저장된 오답 {stats.wrong}개 중에서 출제합니다.</p>
        </Link>
        <Link href={`/review/qbank/session?mode=bookmarks&count=${count}`} className="list-tile p-5">
          <Bookmark className="h-5 w-5 text-amber-700" /><h3 className="mt-3 font-semibold">북마크</h3><p className="mt-1 text-sm text-slate-600">표시한 문제 {stats.bookmarks}개를 다시 봅니다.</p>
        </Link>
      </section>

      <section className="surface flex flex-wrap items-center justify-between gap-4 p-5">
        <div><h2 className="font-semibold text-slate-950">학습 기록 백업</h2><p className="mt-1 text-sm text-slate-600">이 브라우저에 저장된 풀이·오답·북마크 기록을 JSON으로 옮길 수 있습니다.</p></div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={downloadProgress} className="secondary-action"><Download className="h-4 w-4" />내보내기</button>
          <label className="secondary-action cursor-pointer"><Upload className="h-4 w-4" />복원하기<input type="file" accept="application/json,.json" onChange={restoreProgress} className="sr-only" /></label>
        </div>
      </section>
    </div>
  );
}
