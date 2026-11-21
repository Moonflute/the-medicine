"use client";

import { Bookmark, Star } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useSkinTheme } from "@/components/theme-provider";
import { loadReviewBookmarkKeys, reviewItemKey, subscribeReviewBookmarks, type ReviewCatalogItem } from "@/lib/review-store";

export type ReviewBookmarkTarget = Pick<ReviewCatalogItem, "type" | "id">;

const emptyBookmarks: ReadonlySet<string> = new Set();
const ReviewBookmarksContext = createContext(emptyBookmarks);

export function ReviewBookmarkScope({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState(emptyBookmarks);

  useEffect(() => {
    function refresh() {
      const next = loadReviewBookmarkKeys();
      setBookmarks(previous => previous.size === next.size && Array.from(next).every(key => previous.has(key)) ? previous : next);
    }
    refresh();
    return subscribeReviewBookmarks(refresh);
  }, []);

  return <ReviewBookmarksContext.Provider value={bookmarks}>{children}</ReviewBookmarksContext.Provider>;
}

function SavedIcon() {
  const { theme } = useSkinTheme();
  const Icon = theme === "mail" ? Star : Bookmark;
  return <Icon size={15} fill="currentColor" className="review-bookmark-mark" role="img" aria-label="북마크됨" focusable="false">
    <title>북마크됨</title>
  </Icon>;
}

export function ReviewBookmarkMark({ item, children }: { item: ReviewBookmarkTarget; children?: ReactNode }) {
  const bookmarks = useContext(ReviewBookmarksContext);
  return bookmarks.has(reviewItemKey(item.type, item.id)) ? <SavedIcon /> : children;
}
