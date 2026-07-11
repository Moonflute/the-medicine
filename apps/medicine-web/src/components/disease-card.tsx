"use client";

import { useMemo } from "react";
import Link from "next/link";
import { DiseaseSectionIcon } from "@/components/disease-section-icon";
import type { DiseaseNote, TermLink } from "@/lib/webdb";
import { RichTextLines } from "@/components/rich-text-lines";
import { ReviewSaveButton } from "@/components/review-save-button";
import { formatKoreanDate } from "@/lib/format";

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
      if (/^\d{4}[-./]/.test(trimmed)) continue;
      skippingUpdateBlock = false;
    }
    cleaned.push(line);
  }
  return cleaned;
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
  const expanded = !compact;
  const overview = note.overview?.slice(0, compact ? 3 : 6) ?? [];
  const lastUpdated = formatKoreanDate(note.updatedAt);
  const hrefByTerm = useMemo(() => new Map(ccLinks.map((item) => [item.term, item.href])), [ccLinks]);
  const reviewItem = useMemo(
    () => ({
      type: "disease" as const,
      id: note.slug,
      title: note.title,
      href: `/disease/${note.slug}`,
      category: note.specialty,
      summary: note.definition || note.overview?.[0] || "",
    }),
    [note],
  );

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
          <ReviewSaveButton item={reviewItem} trackView={!compact} compact />
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
          <div className="mb-3 text-sm font-semibold text-teal-900">Quick reference</div>
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

    </article>
  );
}

