"use client";

import { useEffect, useState } from "react";
import { useAppTheme } from "@/components/theme-provider";
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
  const { theme } = useAppTheme();
  const [saved, setSaved] = useState(false);
  const label = theme === "chat" ? saved ? "보관함에서 꺼내기" : "보관함에 저장" : theme === "terminal" ? saved ? "REMOVE SAVE" : "SAVE" : saved ? "복습 목록에서 제거" : "복습 목록에 저장";

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
      title={label}
    >
      {saved ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
      {!compact ? <span>{theme === "terminal" ? saved ? "SAVED" : "SAVE" : theme === "chat" ? saved ? "저장됨" : "보관함에 저장" : saved ? "저장됨" : "복습 저장"}</span> : null}
    </button>
  );
}
