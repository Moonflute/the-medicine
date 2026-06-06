"use client";

import { useMemo, useState } from "react";
import { DiseaseCard } from "@/components/disease-card";
import type { DiseaseNote } from "@/lib/webdb";

const STORAGE_KEY = "medicine-web-review";

export function ReviewPageClient({ notes }: { notes: DiseaseNote[] }) {
  const [bookmarks] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as string[];
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return [];
    }
  });

  const savedNotes = useMemo(() => {
    const saved = new Set(bookmarks);
    return notes.filter((note) => saved.has(note.slug));
  }, [bookmarks, notes]);

  if (savedNotes.length === 0) {
    return (
      <div className="rounded-[32px] border border-dashed border-stone-300 bg-white/70 p-10 text-center text-stone-600">
        북마크한 질병이 아직 없습니다. 질병 카드에서 북마크를 누르면 여기로 모입니다.
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {savedNotes.map((note) => (
        <DiseaseCard key={note.slug} note={note} compact />
      ))}
    </div>
  );
}
