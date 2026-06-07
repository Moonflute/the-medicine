"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Bookmark, BookmarkCheck, ChevronDown, ChevronUp } from "lucide-react";
import { DiseaseSectionIcon } from "@/components/disease-section-icon";
import type { DiseaseNote } from "@/lib/webdb";
import { RichTextLines } from "@/components/rich-text-lines";
import { formatKoreanDate } from "@/lib/format";

const STORAGE_KEY = "medicine-web-review";

function stripEditorialLines(lines: string[]) {
  const cleaned: string[] = [];
  let skippingUpdateBlock = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^last updated\b/i.test(trimmed)) {
      skippingUpdateBlock = true;
      continue;
    }

    if (skippingUpdateBlock) {
      if (/^\d{4}[-./]/.test(trimmed)) {
        continue;
      }

      skippingUpdateBlock = false;
    }

    cleaned.push(line);
  }

  return cleaned;
}

function useBookmarks() {
  const [ids, setIds] = useState<string[]>(() => {
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

  const api = useMemo(
    () => ({
      ids,
      has(id: string) {
        return ids.includes(id);
      },
      toggle(id: string) {
        const next = ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id];
        setIds(next);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      },
    }),
    [ids],
  );

  return api;
}

export function DiseaseCard({ note, compact = false }: { note: DiseaseNote; compact?: boolean }) {
  const [expanded, setExpanded] = useState(!compact);
  const bookmarks = useBookmarks();
  const overview = note.overview?.slice(0, compact ? 3 : 6) ?? [];
  const lastUpdated = formatKoreanDate(note.updatedAt);

  return (
    <article className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm backdrop-blur sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-[0.22em] text-stone-500">{note.specialty}</div>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-stone-900">{note.title}</h2>
          {note.definition ? <p className="mt-3 text-sm leading-6 text-stone-700">{note.definition}</p> : null}
          {!compact ? <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone-500">Last updated {lastUpdated}</p> : null}
        </div>
        <button
          type="button"
          onClick={() => bookmarks.toggle(note.slug)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 text-stone-700"
        >
          {bookmarks.has(note.slug) ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
        </button>
      </div>

      {note.chiefComplaints.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {note.chiefComplaints.slice(0, 6).map((item) => (
            <span key={item} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {overview.length > 0 ? (
        <div className="mt-5 overflow-hidden rounded-[24px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-4 shadow-sm">
          <div className="mb-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-800">
            Overview
          </div>
          <RichTextLines
            lines={overview}
            className="space-y-2 text-sm leading-6 text-stone-800"
          />
        </div>
      ) : null}

      {expanded ? (
        <div className="mt-5 space-y-4">
          {note.sections.slice(0, compact ? 2 : note.sections.length).map((section) => (
            <section key={section.title} className="rounded-2xl border border-stone-200 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-stone-900">
                <DiseaseSectionIcon title={section.title} className="h-4 w-4 text-stone-500" />
                {section.title}
              </div>
              <RichTextLines lines={stripEditorialLines(section.content).slice(0, compact ? 6 : section.content.length)} />
            </section>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href={`/disease/${note.slug}`}
          style={{ color: "#fafaf9" }}
          className="inline-flex items-center rounded-full bg-stone-900 px-4 py-2 text-sm font-medium shadow-sm shadow-stone-900/20"
        >
          <span className="text-stone-50">Open detail</span>
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
        >
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {expanded ? "Hide sections" : "Show sections"}
        </button>
      </div>
    </article>
  );
}
