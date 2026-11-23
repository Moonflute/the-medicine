"use client";
import { ChatSenderProvider } from "@/components/chat-contact";
import atlasMappings from "@/generated/atlas-links.json";

import { Fragment, useMemo, type ReactNode } from "react";
import Link from "next/link";
import { SkinDocumentIntro, SkinDocumentSections, SkinQuickReference } from "@/components/skin-document";
import { DocumentToolbar } from "@/components/document-toolbar";
import { DocumentToc } from "@/components/document-toc";
import { DiseaseSectionIcon } from "@/components/disease-section-icon";
import type { DiseaseNote, TermLink } from "@/lib/webdb";
import { RichTextLines } from "@/components/rich-text-lines";
import { ReviewCardCreateButton } from "@/components/review-card-create-button";
import { ReviewSaveButton } from "@/components/review-save-button";
import type { ReviewCardSpecialty } from "@/lib/review-card-relations";
import { DocumentEditButton } from "@/components/document-edit-button";
import { ContentMetadata } from "@/components/content-metadata";
import { useSkinTheme } from "@/components/theme-provider";
import { SheetCellRow, type SheetIntroRow } from "@/components/sheet-workbook";

function referenceText(text: string) {
  return text.replace(/\\([\\[\]])/g, "$1").split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) =>
    part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part.startsWith("*") && part.endsWith("*") ? <em key={index}>{part.slice(1, -1)}</em>
        : <Fragment key={index}>{part}</Fragment>,
  );
}

function referenceContent(line: string) {
  const text = line.replace(/^\s*[-*]\s+/, "");
  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(/\[((?:\\.|[^\\\]])+)\]\((https?:\/\/(?:[^\s()]|\([^\s()]*\))+)\)/g)) {
    const index = match.index ?? 0;
    nodes.push(<Fragment key={`text-${index}`}>{referenceText(text.slice(cursor, index))}</Fragment>);
    nodes.push(<a key={`link-${index}`} href={match[2]} target="_blank" rel="noopener noreferrer" className="underline decoration-slate-300 underline-offset-4 hover:text-teal-700">{referenceText(match[1])}</a>);
    cursor = index + match[0].length;
  }
  nodes.push(<Fragment key="tail">{referenceText(text.slice(cursor))}</Fragment>);
  return nodes;
}

export function DiseaseReferences({ lines }: { lines: string[] }) {
  if (!lines.length) return null;
  return <details aria-label="출처" className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600 sm:px-6">
    <summary className="cursor-pointer font-medium text-slate-700">출처</summary>
    <ul className="mt-3 list-disc space-y-2 pl-5">
      {lines.map((line, index) => <li key={index} className="break-words leading-6">{referenceContent(line)}</li>)}
    </ul>
  </details>;
}

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
export function DiseaseCard({
  note,
  compact = false,
  ccLinks = [],
  diseaseLinks = [],
  hideOverview = false,
  relatedQbankHref,
  reviewSpecialty,
}: {
  note: DiseaseNote;
  compact?: boolean;
  ccLinks?: TermLink[];
  diseaseLinks?: TermLink[];
  hideOverview?: boolean;
  relatedQbankHref?: string;
  reviewSpecialty?: ReviewCardSpecialty;
}) {
  const { theme } = useSkinTheme();
  const sheet = theme === "sheet" && !compact;
  const expanded = !compact;
  const atlasMapping = !compact ? atlasMappings.find(mapping => mapping.diseaseId === note.id) : undefined;
  const tocId = `disease-${note.slug}-toc`;
  const sections = note.sections.filter((section) =>
    section.content.some((line) => line.trim()) || !/^(출처|참고(?:\s*(?:자료|지침|가이드라인))?)$/.test(section.title.trim()),
  );
  const sectionItems = sections.map((section, index) => ({ id: `disease-${note.slug}-section-${index + 1}`, title: section.title }));
  const overview = note.overview?.slice(0, compact ? 3 : 6) ?? [];
  const contentMeta = note.contentMeta;
  const displayTitle = note.displayTitle || note.title;
  const references = note.references ?? (contentMeta?.sources ?? [])
    .filter((source) => source.label)
    .map((source) => source.url ? `- [${source.label.replace(/[\\[\]]/g, "\\$&")}](${source.url})` : `- ${source.label}`);
  const familyLinks = [
    { label: "상위 질환", value: note.familyMeta?.parentDisease },
    { label: "기준 문서", value: note.familyMeta?.canonicalDisease },
  ].filter((item) => item.value && item.value !== note.title);
  const hrefByTerm = useMemo(() => new Map(ccLinks.map((item) => [item.term, item.href])), [ccLinks]);
  const reviewItem = useMemo(
    () => ({
      type: "disease" as const,
      id: note.slug,
      title: displayTitle,
      href: `/disease/${note.slug}`,
      category: note.specialty,
      summary: note.definition || note.overview?.[0] || "",
    }),
    [note, displayTitle],
  );

  const sheetRows: SheetIntroRow[] = [
    ...(note.definition ? [{ label: "정의", content: <p>{note.definition}</p> }] : []),
    ...(contentMeta ? [{ label: "검토 정보", content: <ContentMetadata meta={contentMeta} /> }] : []),
    ...(note.clinicalPriority ? [{ label: "우선순위", content: note.clinicalPriority.replace("tier_", "Tier ") }] : []),
    ...(note.chiefComplaints.length ? [{ label: "증상", content: <div className="flex flex-wrap gap-x-3 gap-y-1">{note.chiefComplaints.slice(0, 6).map(item => hrefByTerm.get(item) ? <Link key={item} href={hrefByTerm.get(item)!}>{item}</Link> : <span key={item}>{item}</span>)}</div> }] : []),
  ];
  const familyReferences = (
        <div className="border-b border-slate-200 bg-white p-5 sm:p-6">
          {familyLinks.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {familyLinks.map((item) => {
                const href = diseaseLinks.find((link) => link.term === item.value)?.href;
                return href ? (
                  <Link key={item.label} href={href} className="pill hover:border-teal-500 hover:text-teal-700">
                    {item.label}: {item.value}
                  </Link>
                ) : (
                  <span key={item.label} className="pill">{item.label}: {item.value}</span>
                );
              })}
            </div>
          ) : null}
        </div>
  );

  return (
    <ChatSenderProvider name={note.specialty}><article className="clinical-document surface">
      {!compact && <DocumentToolbar title={displayTitle}>
            <DocumentEditButton sourcePath={note.sourcePath} title={displayTitle} />
            {relatedQbankHref ? (
              <Link
                href={relatedQbankHref}
                className="inline-flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-sm font-bold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
                style={{ borderRadius: 8 }}
                aria-label="관련 문제 풀기"
                title="관련 문제 풀기"
              >
                Q
              </Link>
            ) : null}
            {atlasMapping ? <Link href={"/atlas/?" + new URLSearchParams({organ:atlasMapping.organId,disease:note.slug}).toString()} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-sm font-semibold text-teal-800 hover:bg-teal-100" aria-label={displayTitle+" 3D로 보기"} title="3D로 보기">3D</Link> : null}
            <ReviewSaveButton item={reviewItem} compact />
      </DocumentToolbar>}
      <SkinDocumentIntro title={compact ? "" : displayTitle} category={note.specialty} sheetRows={sheet ? sheetRows : undefined}><div className="border-b border-slate-200 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="eyebrow">{note.specialty}</div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">{displayTitle}</h2>
            {note.definition ? <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-700">{note.definition}</p> : null}
            {!compact ? <ContentMetadata meta={contentMeta} /> : null}
            {!compact ? (
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                {note.clinicalPriority ? <span className="pill">{note.clinicalPriority.replace("tier_", "Tier ")}</span> : null}
              </div>
            ) : null}
          </div>
          {compact && <div className="flex shrink-0 items-center gap-2">{relatedQbankHref && <Link href={relatedQbankHref} className="secondary-action" aria-label="관련 문제 풀기">Q</Link>}<ReviewSaveButton item={reviewItem} trackView={false} compact /></div>}
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
      </div></SkinDocumentIntro>

      {expanded && sectionItems.length > 1 && <DocumentToc key={tocId} id={tocId} items={sectionItems} />}

      {!compact && familyLinks.length > 0 ? (
        sheet ? <SheetCellRow label="관련 자료">{familyReferences}</SheetCellRow> : familyReferences
      ) : null}

      {!hideOverview && overview.length > 0 ? (sheet ? <><SheetCellRow label="요약" heading>Quick reference</SheetCellRow><RichTextLines lines={overview} className="space-y-2.5" termLinks={ccLinks} wikiLinks={diseaseLinks} /></> :
        <SkinQuickReference className="border-b border-slate-200 bg-teal-50/60 p-5 sm:p-6">
          <RichTextLines lines={overview} className="space-y-2.5" termLinks={ccLinks} wikiLinks={diseaseLinks} />
        </SkinQuickReference>
      ) : null}

      {expanded ? (
        <SkinDocumentSections className="clinical-sections grid gap-3 bg-slate-50/70 p-4 sm:p-5" plainSectionClassName="clinical-section scroll-mt-20 focus-visible:outline-teal-600 border border-l-4 border-l-slate-300 border-slate-200 bg-white p-4 rounded-lg" sections={sections.map((section, index) => ({
          id: sectionItems[index].id,
          title: section.title,
          icon: <DiseaseSectionIcon title={section.title} />,
          content: <RichTextLines lines={stripEditorialLines(section.content)} className="space-y-2.5" bulletStyle="plain" termLinks={ccLinks} wikiLinks={diseaseLinks} />,
        }))} />
      ) : null}

      {expanded ? <>
        <footer className="flex flex-wrap items-center gap-y-2 px-5 py-3 sm:px-6" data-highlight-ignore>
          <ReviewCardCreateButton key={note.slug} initialRelations={{
            specialties: reviewSpecialty ? [reviewSpecialty] : [],
            documents: [{ href: reviewItem.href, title: reviewItem.title.slice(0, 300) }],
          }} />
        </footer>
        <DiseaseReferences lines={references} />
      </> : null}

    </article></ChatSenderProvider>
  );
}
