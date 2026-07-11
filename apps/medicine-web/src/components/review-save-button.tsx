"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import {
  loadReviewItems,
  REVIEW_CHANGE_EVENT,
  toggleReviewItem,
  trackRecentItem,
  type ReviewCatalogItem,
} from "@/lib/review-store";

export function ReviewSaveButton({
  item,
  trackView = true,
  compact = false,
}: {
  item: ReviewCatalogItem;
  trackView?: boolean;
  compact?: boolean;
}) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setSaved(loadReviewItems().some((savedItem) => savedItem.type === item.type && savedItem.id === item.id));
    };
    refresh();
    if (trackView) trackRecentItem(item);
    window.addEventListener(REVIEW_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(REVIEW_CHANGE_EVENT, refresh);
  }, [item, trackView]);

  return (
    <button
      type="button"
      onClick={() => setSaved(toggleReviewItem(item))}
      className={
        compact
          ? "inline-flex h-10 w-10 shrink-0 items-center justify-center border border-slate-300 bg-white text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
          : "inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
      }
      style={{ borderRadius: 8 }}
      aria-label={saved ? "복습 목록에서 제거" : "복습 목록에 저장"}
      title={saved ? "복습 목록에서 제거" : "복습 목록에 저장"}
    >
      {saved ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
      {!compact ? <span>{saved ? "저장됨" : "복습 저장"}</span> : null}
    </button>
  );
}
