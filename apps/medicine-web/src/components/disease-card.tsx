"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Bookmark, BookmarkCheck, ChevronDown, ChevronUp } from "lucide-react";
import { DiseaseSectionIcon } from "@/components/disease-section-icon";
import type { DiseaseNote, TermLink } from "@/lib/webdb";
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

function getSectionTone(title: string) {
  const normalized = title.toLowerCase();

  if (/evaluation|workup|lab|test|image|exam/.test(normalized)) {
    return "border-l-sky-500";
  }

  if (/diagn|assessment|criteria/.test(normalized)) {
    return "border-l-indigo-500";
  }

  if (/management|treatment|therapy|plan|procedure/.test(normalized)) {
    return "border-l-emerald-500";
  }

  if (/warning|complication|risk|red flag|emergency/.test(normalized)) {
    return "border-l-rose-500";
  }

  if (/presentation|history|symptom|clinical/.test(normalized)) {
    return "border-l-amber-500";
  }

  return "border-l-slate-300";
}

export function DiseaseCard({
  note,
  compact = false,
  ccLinks = [],
  diseaseLinks = [],
  hideOverview = false,
}: {
  note: DiseaseNote;
  compact?: boolean;
  ccLinks?: TermLink[];
  diseaseLinks?: TermLink[];
  hideOverview?: boolean;
}) {
  const [expanded, setExpanded] = useState(!compact);
  const bookmarks = useBookmarks();
  const overview = note.overview?.slice(0, compact ? 3 : 6) ?? [];
  const lastUpdated = formatKoreanDate(note.updatedAt);
  const hrefByTerm = useMemo(() => new Map(ccLinks.map((item) => [item.term, item.href])), [ccLinks]);

  return (
    <article className="surface overflow-hidden">
      <div className="border-b border-slate-200 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="eyebrow">{note.specialty}</div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">{note.title}</h2>
            {note.definition ? <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">{note.definition}</p> : null}
            {!compact ? <p className="mt-3 text-xs text-slate-500">Last updated {lastUpdated}</p> : null}
          </div>
          <button
            type="button"
            onClick={() => bookmarks.toggle(note.slug)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-slate-300 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700"
            style={{ borderRadius: 8 }}
            aria-label="Toggle review bookmark"
          >
            {bookmarks.has(note.slug) ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
          </button>
        </div>

        {note.chiefComplaints.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {note.chiefComplaints.slice(0, 6).map((item) =>
              hrefByTerm.get(item) ? (
                <Link key={item} href={hrefByTerm.get(item)!} className="pill hover:border-teal-500 hover:text-teal-700">
                  {item}
                </Link>
              ) : (
                <span key={item} className="pill">
                  {item}
                </span>
              ),
            )}
          </div>
        ) : null}
      </div>

      {!hideOverview && overview.length > 0 ? (
        <div className="border-b border-slate-200 bg-teal-50/60 p-5 sm:p-6">
          <div className="mb-3 text-sm font-semibold text-teal-900">Overview</div>
          <RichTextLines lines={overview} className="space-y-2.5" termLinks={ccLinks} wikiLinks={diseaseLinks} />
        </div>
      ) : null}

      {expanded ? (
        <div className="grid gap-3 bg-slate-50/70 p-4 sm:p-5">
          {note.sections.slice(0, compact ? 2 : note.sections.length).map((section) => (
            <section key={section.title} className={`border border-l-4 border-slate-200 bg-white p-4 ${getSectionTone(section.title)}`} style={{ borderRadius: 8 }}>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
                <DiseaseSectionIcon title={section.title} className="h-4 w-4 text-slate-500" />
                {section.title}
              </div>
              <RichTextLines
                lines={stripEditorialLines(section.content).slice(0, compact ? 6 : section.content.length)}
                className="space-y-2.5"
                bulletStyle="plain"
                termLinks={ccLinks}
                wikiLinks={diseaseLinks}
              />
            </section>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 bg-white p-4 sm:p-5">
        <Link href={`/disease/${note.slug}`} className="primary-action">
          Open detail
        </Link>
        <button type="button" onClick={() => setExpanded((value) => !value)} className="secondary-action">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {expanded ? "Hide sections" : "Show sections"}
        </button>
      </div>
    </article>
  );
}

