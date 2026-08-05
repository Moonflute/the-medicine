"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { LearningActivityDashboard } from "@/components/learning-activity-dashboard";
import type { QbankQuestionIndex } from "@/lib/types";
import {
  loadRecentItems,
  loadReviewItems,
  rateReviewItem,
  REVIEW_CHANGE_EVENT,
  toggleReviewItem,
  type RecentReviewItem,
  type ReviewCatalogItem,
  type ReviewConfidence,
  type ReviewItem,
} from "@/lib/review-store";

type Tab = "saved" | "recent" | "activity";

const TYPE_LABELS: Record<string, string> = {
  disease: "질병",
  cc: "CC",
  drug: "약물",
  lab: "검사",
  skill: "술기",
};

function formatDate(value?: string) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("ko-KR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export function ReviewPageClient({ catalog, questions }: { catalog: ReviewCatalogItem[]; questions: QbankQuestionIndex[] }) {
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [recent, setRecent] = useState<RecentReviewItem[]>([]);
  const [tab, setTab] = useState<Tab>("activity");
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState("");

  useEffect(() => {
    const refresh = () => {
      setItems(loadReviewItems(catalog));
      setRecent(loadRecentItems(catalog));
    };
    refresh();
    window.addEventListener(REVIEW_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(REVIEW_CHANGE_EVENT, refresh);
  }, [catalog]);
  const current: Array<ReviewItem | RecentReviewItem> = tab === "activity" ? [] : tab === "saved" ? items : recent;
  const savedKeys = useMemo(() => new Set(items.map((item) => `${item.type}|${item.id}`)), [items]);

  function toggleReveal(item: ReviewCatalogItem) {
    const key = `${item.type}|${item.id}`;
    setRevealed((currentSet) => {
      const next = new Set(currentSet);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function rate(item: ReviewItem, confidence: ReviewConfidence) {
    rateReviewItem(item.type, item.id, confidence);
    setMessage(`${item.title}: ${confidence}로 기록했습니다.`);
  }

  function toggleSaved(item: ReviewCatalogItem) {
    const nowSaved = toggleReviewItem(item);
    setItems(loadReviewItems(catalog));
    setMessage(nowSaved ? `${item.title}: 복습 목록에 저장했습니다.` : `${item.title}: 복습 목록에서 제거했습니다.`);
  }


  return (
    <div className="space-y-5">
      <section className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
          {([
            ["activity", "진도"],
            ["saved", "저장"],
            ["recent", "최근"],
          ] as Array<[Tab, string]>).map(([key, label]) => (
            <button key={key} type="button" onClick={() => setTab(key)} className={`rounded-md px-3 py-2 text-sm font-medium ${tab === key ? "bg-teal-600 text-white" : "text-slate-600"}`}>
              {label}
            </button>
          ))}
        </div>
      </section>

      {message ? <div role="status" className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900">{message}</div> : null}

      {tab === "activity" ? (
        <LearningActivityDashboard catalog={catalog} questions={questions} />
      ) : current.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white/70 p-10 text-center text-slate-600">
          {tab === "recent" ? "최근 본 항목이 없습니다." : "복습할 항목이 없습니다. 상세 페이지의 복습 저장 버튼을 사용하세요."}
        </div>
      ) : (
        <div className="grid gap-4">
          {current.map((item) => {
            const key = `${item.type}|${item.id}`;
            const isSaved = savedKeys.has(key);
            const isRevealed = revealed.has(key);
            const reviewItem = "savedAt" in item ? item : null;
            return (
              <article key={key} className="rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                      <span className="pill">{TYPE_LABELS[item.type] ?? item.type}</span>
                      <span className="pill">{item.category}</span>
                    </div>
                    <Link href={item.href} className="mt-3 block text-xl font-semibold text-slate-950 hover:text-teal-700">{item.title}</Link>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => toggleReveal(item)} className="secondary-action">
                      {isRevealed ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      {isRevealed ? "핵심 가리기" : "핵심 보기"}
                    </button>
                    <button type="button" onClick={() => toggleSaved(item)} className="secondary-action">{isSaved ? "저장 해제" : "저장"}</button>
                  </div>
                </div>

                <div className={`mt-4 rounded-lg border px-4 py-3 text-sm leading-6 ${isRevealed ? "border-slate-200 bg-slate-50 text-slate-700" : "border-dashed border-slate-300 bg-slate-100 text-slate-400"}`}>
                  {isRevealed ? item.summary || "정리된 핵심 요약이 없습니다." : "핵심 내용을 먼저 떠올린 뒤 ‘핵심 보기’를 누르세요."}
                </div>

                {reviewItem ? (
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                    <div className="text-xs text-slate-500">
                      복습 {reviewItem.reviewCount}회 · 최근 {formatDate(reviewItem.lastReviewedAt)} · 다음 {formatDate(reviewItem.nextReviewAt)}
                    </div>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => rate(reviewItem, "again")} className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-800">Again</button>
                      <button type="button" onClick={() => rate(reviewItem, "hard")} className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800">Hard</button>
                      <button type="button" onClick={() => rate(reviewItem, "good")} className="rounded-md border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-medium text-teal-800">Good</button>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
