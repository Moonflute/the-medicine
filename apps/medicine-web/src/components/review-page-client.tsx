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
      <div className="rounded-lg border border-dashed border-slate-300 bg-white/70 p-10 text-center text-slate-600">
        遺곷쭏?ы븳 吏덈퀝???꾩쭅 ?놁뒿?덈떎. 吏덈퀝 移대뱶?먯꽌 遺곷쭏?щ? ?꾨Ⅴ硫??ш린濡?紐⑥엯?덈떎.
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

