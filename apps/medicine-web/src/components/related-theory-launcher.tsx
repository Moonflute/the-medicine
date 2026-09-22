"use client";

import Link from "next/link";
import { BookOpenCheck, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  buildRelatedTheoryTopicStats,
  relatedTheoryTopicKey,
  serializeRelatedTheoryTopicKeys,
  type RelatedTheoryTopic,
} from "@/lib/qbank-related-theory";
import type { QbankQuestion, QbankQuestionIndex, RelatedTheoryDocument } from "@/lib/types";

type CatalogDocument = RelatedTheoryDocument & { scopeSlugs?: string[] };

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`);
  if (!response.ok) throw new Error(`관련 이론 문제를 불러오지 못했습니다 (${response.status}).`);
  return response.json() as Promise<T>;
}

function questionTopicRefs(question: QbankQuestion): RelatedTheoryDocument[] {
  if (Array.isArray(question.relatedDocuments)) {
    return question.relatedDocuments.filter((item): item is RelatedTheoryDocument => item.type === "disease" || item.type === "cc");
  }
  return [
    ...question.relatedDiseaseSlugs.map((slug) => ({ type: "disease" as const, slug, title: slug })),
    ...question.relatedCcSlugs.map((slug) => ({ type: "cc" as const, slug, title: slug })),
  ];
}

function compactTopicLabel(topics: readonly RelatedTheoryTopic[]): string {
  const titles = topics.map((topic) => topic.title);
  if (titles.length <= 3) return titles.join(" · ");
  return `${titles.slice(0, 3).join(" · ")} 외 ${titles.length - 3}개`;
}

export function RelatedTheoryLauncher({ question }: { question: QbankQuestion }) {
  const topicRefs = useMemo(() => questionTopicRefs(question), [question]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [index, setIndex] = useState<QbankQuestionIndex[]>([]);
  const [topics, setTopics] = useState<RelatedTheoryTopic[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [count, setCount] = useState("10");
  const [loadedTopicSignature, setLoadedTopicSignature] = useState("");
  const topicSignature = useMemo(() => topicRefs.map(relatedTheoryTopicKey).join("|"), [topicRefs]);

  const allStats = useMemo(() => buildRelatedTheoryTopicStats(index, topics), [index, topics]);
  const selectedTopics = useMemo(() => topics.filter((topic) => selectedKeys.includes(relatedTheoryTopicKey(topic))), [selectedKeys, topics]);
  const selectedStats = useMemo(() => buildRelatedTheoryTopicStats(index, selectedTopics), [index, selectedTopics]);
  const validCount = /^\d+$/.test(count) && Number(count) >= 1 && Number(count) <= 100;
  const drawCount = validCount ? Math.min(Number(count), selectedStats.questionIds.length) : 0;

  async function showPicker() {
    setOpen(true);
    if (loading || (index.length && loadedTopicSignature === topicSignature)) return;
    setLoading(true);
    setError("");
    try {
      const [questionIndex, catalog] = await Promise.all([
        fetchJson<QbankQuestionIndex[]>("/generated/qbank/index.json"),
        fetchJson<CatalogDocument[]>("/generated/theory-documents.json"),
      ]);
      const catalogByKey = new Map(catalog.map((item) => [relatedTheoryTopicKey(item), item]));
      const resolved = topicRefs
        .map((item) => {
          const known = catalogByKey.get(relatedTheoryTopicKey(item));
          return known ? { ...known, title: item.title || known.title } : { ...item, scopeSlugs: [item.slug] };
        })
        .filter((item, position, items) => items.findIndex((candidate) => relatedTheoryTopicKey(candidate) === relatedTheoryTopicKey(item)) === position);
      const stats = buildRelatedTheoryTopicStats(questionIndex, resolved);
      const selectable = stats.topics.filter((topic) => topic.count > 0).map(relatedTheoryTopicKey);
      setIndex(questionIndex);
      setTopics(resolved);
      setSelectedKeys(selectable);
      setCount(String(Math.min(10, stats.questionIds.length || 1)));
      setLoadedTopicSignature(topicSignature);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "관련 이론 문제를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  }

  // Only private practice questions can be reloaded by stable ID after the
  // picker starts a dynamically linked theory session.
  if (question.questionBank !== "practice" || topicRefs.length === 0) return null;

  const params = new URLSearchParams({
    mode: "theory-linked",
    practiceId: question.id,
    relatedTopics: serializeRelatedTheoryTopicKeys(selectedTopics),
    count: String(drawCount),
    sessionKind: "related-theory",
    sessionTitle: "관련 이론문제 풀이",
    sessionSummary: `${compactTopicLabel(selectedTopics)} · ${drawCount}문항`,
    topicMeta: JSON.stringify(selectedStats.topics.map(({ type, slug, title, count: topicCount }) => ({ type, slug, title, count: topicCount }))),
  });

  return <>
    <button type="button" className="secondary-action mt-3" onClick={() => void showPicker()}><BookOpenCheck className="h-4 w-4" />관련 이론문제 풀기</button>
    {open ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4" role="dialog" aria-modal="true" aria-labelledby="related-theory-title">
      <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl">
        <header className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-slate-200 bg-white p-5">
          <div><p className="text-xs font-semibold text-teal-700">관련 문제풀이</p><h2 id="related-theory-title" className="mt-1 text-xl font-semibold text-slate-950">관련 이론문제 설정</h2><p className="mt-1 text-sm leading-6 text-slate-600">연결된 이론 페이지별 문항 수를 확인하고 출제 범위를 선택하세요.</p></div>
          <button type="button" onClick={() => setOpen(false)} className="secondary-action h-9 w-9 shrink-0 !px-0" aria-label="닫기"><X className="h-4 w-4" /></button>
        </header>
        <div className="p-5">
          {loading ? <p className="py-8 text-center text-sm text-slate-600">관련 문항을 계산하는 중입니다…</p> : null}
          {error ? <div role="alert" className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"><p>{error}</p><button type="button" className="secondary-action mt-3" onClick={() => { setIndex([]); void showPicker(); }}>다시 시도</button></div> : null}
          {!loading && !error ? <>
            <div className="space-y-2">{allStats.topics.map((topic) => {
              const key = relatedTheoryTopicKey(topic);
              const checked = selectedKeys.includes(key);
              return <label key={key} className={`flex items-center gap-3 rounded-lg border px-3.5 py-3 ${topic.count > 0 ? "cursor-pointer" : "cursor-not-allowed bg-slate-50 text-slate-400"} ${checked ? "border-teal-400 bg-teal-50" : "border-slate-200"}`}>
                <input type="checkbox" disabled={topic.count === 0} checked={checked} onChange={() => setSelectedKeys((items) => checked ? items.filter((item) => item !== key) : [...items, key])} className="h-4 w-4 shrink-0 accent-teal-600" />
                <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">{topic.title}</span><span className="text-xs text-slate-500">{topic.type === "disease" ? "질병" : "CC"}</span></span>
                <span className="shrink-0 text-sm tabular-nums text-slate-600">{topic.count.toLocaleString()}문항</span>
              </label>;
            })}</div>
            <section className="mt-5 rounded-xl border border-teal-200 bg-teal-50/50 p-4">
              <p className="text-sm text-slate-700">선택 범위 <strong className="text-teal-900">{selectedStats.questionIds.length.toLocaleString()}문항</strong>{selectedStats.topics.length > 1 ? " · 여러 주제에 겹치는 문항은 한 번만 출제" : ""}</p>
              <div className="mt-4 flex flex-wrap items-end gap-3"><label className="block text-sm font-medium text-slate-700">이번에 풀 문항 수<input type="number" min="1" max={Math.min(100, Math.max(1, selectedStats.questionIds.length))} step="1" inputMode="numeric" value={count} onChange={(event) => setCount(event.target.value)} disabled={selectedStats.questionIds.length === 0} className="mt-1.5 block w-28 rounded-lg border border-slate-300 bg-white px-3 py-2.5" /></label>
              {drawCount > 0 ? <Link href={`/review/qbank/session?${params.toString()}`} className="primary-action" onClick={() => setOpen(false)}>관련 문제 {drawCount}개 풀기</Link> : <button type="button" disabled className="primary-action opacity-40">출제할 주제를 선택하세요</button>}</div>
              {!validCount ? <p className="mt-2 text-xs text-rose-700">문항 수는 1~100 사이의 정수로 입력하세요.</p> : Number(count) > selectedStats.questionIds.length && selectedStats.questionIds.length > 0 ? <p className="mt-2 text-xs text-slate-500">선택 범위의 {selectedStats.questionIds.length}문항을 모두 출제합니다.</p> : null}
            </section>
          </> : null}
        </div>
      </div>
    </div> : null}
  </>;
}
