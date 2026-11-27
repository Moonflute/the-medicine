"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { loadPracticeIndex } from "@/lib/practice-bank";
import type { PracticeIndex } from "@/lib/practice-selection";
import { loadPublicQuestionBookmarkTitles, QUESTION_BOOKMARKS_HREF, questionBookmarkRows } from "@/lib/qbank-bookmarks";
import { loadQbankState, removeQbankBookmarks, subscribeQbankBookmarks } from "@/lib/qbank-store";
import {
  loadReviewItems,
  removeReviewItem,
  reviewItemKey,
  subscribeReviewBookmarks,
  type ReviewCatalogItem,
  type ReviewItem,
} from "@/lib/review-store";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";

function BookmarkRow({ title, href, onRemove }: { title: string; href?: string; onRemove: () => void }) {
  return <li className="review-bookmark-row">
    {href ? <Link className="review-bookmark-title" href={href} prefetch={false}>{title}</Link>
      : <span className="review-bookmark-title">{title}</span>}
    <button type="button" aria-label={`${title} 저장 해제`} onClick={onRemove}>저장 해제</button>
  </li>;
}

function DocumentBookmarks({ catalog }: { catalog: ReviewCatalogItem[] }) {
  const [items, setItems] = useState<ReviewItem[]>();
  useEffect(() => {
    const refresh = () => setItems(loadReviewItems(catalog));
    const unsubscribe = subscribeReviewBookmarks(refresh);
    refresh();
    return unsubscribe;
  }, [catalog]);
  if (!items?.length) return <p className="review-bookmarks-message" role="status">{items ? "북마크한 문서가 없어요." : "북마크를 불러오는 중이에요."}</p>;
  return <ul className="review-bookmarks-list" aria-label="북마크한 문서">
    {items.map(item => <BookmarkRow key={reviewItemKey(item.type, item.id)} title={item.title} href={item.href}
      onRemove={() => removeReviewItem(item.type, item.id)} />)}
  </ul>;
}

type TitleResult<T> = { data: T; failed?: false } | { data?: undefined; failed: true };

function QuestionBookmarks() {
  const [ids, setIds] = useState<string[]>();
  const [publicTitles, setPublicTitles] = useState<TitleResult<ReadonlyMap<string, string>>>();
  const [owner, setOwner] = useState<string | null | undefined>(() => isSupabaseConfigured() ? undefined : null);
  const [practiceResult, setPracticeResult] = useState<{ owner: string | null; result: TitleResult<PracticeIndex[]> }>();
  const [retry, setRetry] = useState(0);
  const needsPublic = Boolean(ids?.some(id => !id.startsWith("QB-")));
  const needsPractice = Boolean(ids?.some(id => id.startsWith("QB-")));
  const practiceTitles = practiceResult?.owner === owner ? practiceResult?.result : undefined;

  useEffect(() => {
    const refresh = () => {
      const next = loadQbankState().bookmarkIds;
      setIds(previous => previous?.length === next.length && next.every((id, index) => id === previous[index]) ? previous : next);
    };
    const unsubscribe = subscribeQbankBookmarks(refresh);
    refresh();
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!needsPublic) return;
    let active = true;
    void loadPublicQuestionBookmarkTitles().then(data => { if (active) setPublicTitles({ data }); },
      () => { if (active) setPublicTitles({ failed: true }); });
    return () => { active = false; };
  }, [needsPublic, retry]);

  useEffect(() => {
    const listener = getSupabaseBrowserClient()?.auth.onAuthStateChange((_event, session) => setOwner(session?.user.id ?? null));
    return () => listener?.data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!needsPractice || owner === undefined) return;
    let active = true;
    void loadPracticeIndex().then(({ questions }) => {
      if (active) setPracticeResult({ owner, result: { data: questions } });
    }, () => {
      if (active) setPracticeResult({ owner, result: { failed: true } });
    });
    return () => { active = false; };
  }, [needsPractice, owner, retry]);

  const rows = useMemo(() => ids ? questionBookmarkRows(ids, publicTitles?.data, practiceTitles?.data) : [], [ids, publicTitles, practiceTitles]);
  if (!ids?.length) return <p className="review-bookmarks-message" role="status">{ids ? "북마크한 문항이 없어요." : "북마크를 불러오는 중이에요."}</p>;
  const loading = (needsPublic && !publicTitles) || (needsPractice && !practiceTitles);
  const failed = (needsPublic && publicTitles?.failed) || (needsPractice && practiceTitles?.failed);
  return <>
    {loading ? <p className="review-bookmarks-message" role="status">문항 이름을 불러오는 중이에요.</p> : null}
    {!loading && failed ? <p className="review-bookmarks-message" role="status">일부 문항 이름을 불러오지 못했어요.{" "}
      <button type="button" className="review-card-link" onClick={() => {
        setPublicTitles(undefined);
        setPracticeResult(undefined);
        setRetry(value => value + 1);
      }}>다시 시도</button>
    </p> : null}
    <ul className="review-bookmarks-list" aria-label="북마크한 문항">
      {rows.map(row => <BookmarkRow key={row.id} title={row.title} href={row.href} onRemove={() => removeQbankBookmarks(row.bookmarkIds)} />)}
    </ul>
  </>;
}

export function ReviewBookmarksClient({ catalog }: { catalog: ReviewCatalogItem[] }) {
  const questionTab = useSearchParams().get("tab") === "questions";
  return <div className="review-bookmarks-content">
    <nav className="review-bookmarks-tabs" aria-label="북마크 종류">
      <Link href="/review/bookmarks" scroll={false} aria-current={!questionTab ? "page" : undefined}>문서</Link>
      <Link href={QUESTION_BOOKMARKS_HREF} scroll={false} aria-current={questionTab ? "page" : undefined}>문항</Link>
    </nav>
    {questionTab ? <QuestionBookmarks /> : <DocumentBookmarks catalog={catalog} />}
  </div>;
}
