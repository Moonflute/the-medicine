"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSkinTheme } from "@/components/theme-provider";
import { useChatSenderName } from "@/components/chat-contact";
import { SheetCellRow, SheetDocumentIntro, SheetSectionNavigation, useInSheetCell, useSheetWorkbook, type SheetIntroRow } from "@/components/sheet-workbook";
import { isConceptTheme, isSpecialTheme } from "@/lib/themes";
import { ConceptDocumentIntro, ConceptDocumentNotice, ConceptDocumentSummary } from "@/components/concept-document";
import { useConceptWorkspace } from "@/components/concept-workspace";
import { PixelDocumentOutline, PixelSprite } from "@/components/pixel-ui";

export type SkinTextBlock = { kind: "text" | "heading" | "group" | "table" | "space"; label?: string; content: ReactNode };

export function SkinQuickReference({ children, className }: { children: ReactNode; className: string }) {
  const { theme } = useSkinTheme();
  if (theme === "notebook") return <aside className="notebook-summary" aria-label="핵심 정리"><h3>여기만 먼저 체크!</h3><div>{children}</div></aside>;
  if (theme === "pixel") return <details className="pixel-codex-note" open><summary><PixelSprite name="bag" />핵심 정보</summary><div>{children}</div></details>;
  if (isConceptTheme(theme)) return <ConceptDocumentSummary theme={theme}>{children}</ConceptDocumentSummary>;
  return <div className={className}><div className="mb-3 text-sm font-semibold text-teal-900">Quick reference</div>{children}</div>;
}

export function SkinDocumentNotice({ title, children, className = "mt-3 flex flex-wrap items-center gap-2" }: { title: string; children: ReactNode; className?: string }) {
  const { theme } = useSkinTheme();
  if (theme === "notebook") return <details className="notebook-margin-note"><summary>{title}</summary><div>{children}</div></details>;
  if (theme === "pixel") return <details className="pixel-codex-note"><summary>{title}</summary><div>{children}</div></details>;
  if (isConceptTheme(theme)) return <ConceptDocumentNotice theme={theme} title={title}>{children}</ConceptDocumentNotice>;
  if (theme !== "chat") return <div className={className}>{children}</div>;
  return <details className="chat-pinned-notice">
    <summary><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m3 9 12-5v16L3 15V9ZM15 9h3a3 3 0 0 1 0 6h-3M5 16l2 5h3l-2-4" /></svg><span>{title}</span><span className="chat-notice-chevron" aria-hidden="true">⌄</span></summary>
    <div className="chat-pinned-notice-content">{children}</div>
  </details>;
}

/** The same parsed content and links get a different reading structure in each skin. */
export function SkinTextBlocks({ blocks, className }: { blocks: SkinTextBlock[]; className: string }) {
  const { theme } = useSkinTheme();
  const inSheetCell = useInSheetCell();
  const senderName = useChatSenderName();
  if (!isSpecialTheme(theme)) return <div className={`min-w-0 ${className}`.trim()}>{blocks.map((block, index) => <div key={index}>{block.content}</div>)}</div>;
  const visible = blocks.filter(block => block.kind !== "space");
  if (theme === "notebook") return <div className="notebook-text-blocks" data-skin-blocks="notebook">{visible.map((block, index) => <div key={index} className={`notebook-text-block notebook-text-block--${block.kind}`}>{block.content}</div>)}</div>;
  if (theme === "pixel") return <div className="pixel-text-blocks" data-skin-blocks="pixel">{visible.map((block, index) => <div key={index} className={`pixel-text-block pixel-text-block--${block.kind}`}>{block.content}</div>)}</div>;
  if (isConceptTheme(theme)) return <div className={`concept-text-blocks concept-text-blocks--${theme}`} data-skin-blocks={theme}>{visible.map((block, index) => <div key={index} className={`concept-text-block concept-text-block--${block.kind}`}>{theme === "editor" ? <span className="concept-code-gutter" aria-hidden="true">{index + 1}</span> : null}<div className="concept-text-block-content">{block.content}</div></div>)}</div>;
  if (theme === "chat") return <div className="skin-message-stream" data-skin-blocks="chat">
    {visible.map((block, index) => block.kind === "heading" ? <div key={index} className="skin-message-divider">{block.content}</div> : <div key={index} className="skin-note-message" data-message-kind={block.kind}>
      <span className="skin-message-avatar" aria-hidden="true">노트</span><div className="skin-note-message-body"><span className="skin-message-sender">{senderName}</span><div className="skin-message-bubble">{block.content}</div></div>
    </div>)}
  </div>;
  if (theme === "sheet") return inSheetCell ? <div className="sheet-cell-richtext">{visible.map((block, index) => <div key={index}>{block.content}</div>)}</div> : <div className="sheet-block-rows" data-skin-blocks="sheet">
    {visible.map((block, index) => <SheetCellRow key={index} label={block.label || (block.kind === "heading" ? "제목" : block.kind === "table" ? "표" : block.kind === "group" ? "항목" : "내용")} heading={block.kind === "heading"}>{block.content}</SheetCellRow>)}
  </div>;
  return <div className="skin-console-output" data-skin-blocks="terminal">
    {visible.map((block, index) => <div key={index} className={`skin-console-line skin-console-line--${block.kind}`}><span className="skin-line-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div>{block.content}</div></div>)}
  </div>;
}

export type SkinDocumentSection = { id: string; title: string; content: ReactNode; icon?: ReactNode };

export function SkinDocumentSections({ sections, className = "", plainSectionClassName = "" }: {
  sections: SkinDocumentSection[]; className?: string; plainSectionClassName?: string;
}) {
  const { theme } = useSkinTheme();
  const resetSelection = useSheetWorkbook()?.reset;
  const setOutline = useConceptWorkspace()?.setOutline;
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const sectionKey = JSON.stringify(sections.map(section => section.id));
  const outlineKey = JSON.stringify(sections.map(({ id, title }) => ({ id, title })));
  useEffect(() => {
    if (theme !== "editor" || !setOutline) return;
    const outline = JSON.parse(outlineKey);
    setOutline(outline);
    return () => setOutline(previous => previous === outline ? [] : previous);
  }, [outlineKey, theme, setOutline]);
  useEffect(() => {
    const ids = new Set<string>(JSON.parse(sectionKey));
    const selectFromHash = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      if (ids.has(id)) {
        setCollapsed(previous => { if (!previous.has(id)) return previous; const next = new Set(previous); next.delete(id); return next; });
        if (theme === "sheet") resetSelection?.();
        if (theme === "sheet" || theme === "social" || theme === "editor" || theme === "pixel") window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
      }
    };
    const selectFromToc = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (ids.has(id)) {
        setCollapsed(previous => { if (!previous.has(id)) return previous; const next = new Set(previous); next.delete(id); return next; });
        if (theme === "sheet") resetSelection?.();
        if (theme === "sheet" || theme === "social" || theme === "editor" || theme === "pixel") window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
      }
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    window.addEventListener("medicine:document-section", selectFromToc);
    return () => {
      window.removeEventListener("hashchange", selectFromHash);
      window.removeEventListener("medicine:document-section", selectFromToc);
    };
  }, [sectionKey, theme, resetSelection]);

  const special = isSpecialTheme(theme);
  return <div className={special ? `skin-document-sections skin-document-sections--${theme}` : className}>
    {theme === "pixel" ? <PixelDocumentOutline sections={sections} /> : null}
    {theme === "sheet" ? <SheetSectionNavigation>
      {sections.map(section => <a key={section.id} href={`#${section.id}`} title={section.title}>{section.title.replace(/\s*[（(].*$/, "").trim()}</a>)}
    </SheetSectionNavigation> : null}
    {sections.map((section, index) => <section key={section.id} id={section.id} tabIndex={-1} aria-labelledby={`${section.id}-heading`} className={special ? "skin-doc-panel" : plainSectionClassName}>
      {theme === "editor" ? <details className="concept-code-section" open={!collapsed.has(section.id)} onToggle={event => { const open = event.currentTarget.open; setCollapsed(previous => { if (previous.has(section.id) === !open) return previous; const next = new Set(previous); if (open) next.delete(section.id); else next.add(section.id); return next; }); }}><summary><span aria-hidden="true">⌄</span><h3 id={`${section.id}-heading`}><span className="concept-code-keyword">region</span> {section.title}</h3></summary><div className="concept-code-section-body">{section.content}</div><div className="concept-code-comment concept-code-end">{"// endregion"}</div></details> : <>
      {theme === "sheet" ? <SheetCellRow label="목차" heading><h3 id={`${section.id}-heading`}>{section.title}</h3></SheetCellRow> : <div className={special ? "skin-section-heading" : "mb-3 flex items-center gap-2"}>
        {theme === "notebook" ? <span className="notebook-section-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span> : theme === "chat" ? <span className="skin-section-divider">{String(index + 1).padStart(2, "0")}</span> : theme === "terminal" ? <span aria-hidden="true">[{String(index + 1).padStart(2, "0")}]</span> : section.icon}
        <h3 id={`${section.id}-heading`} className={special ? "" : "font-semibold text-slate-900"}>{section.title}</h3>
      </div>}
      {section.content}
      </>}
    </section>)}
  </div>;
}

export function SkinDocumentIntro({ title, category, children, sheetRows }: { title: string; category?: string; children: ReactNode; sheetRows?: SheetIntroRow[] }) {
  const { theme } = useSkinTheme();
  if (theme === "notebook") return <div className="notebook-document-intro"><div className="notebook-subject-tab">{category || "정리 노트"}</div><div className="skin-document-intro-content">{children}</div></div>;
  if (theme === "pixel") return <div className="pixel-codex-intro"><div className="pixel-codex-stamp"><PixelSprite name="book" /><span>FIELD CODEX<small>{category || "자료 도감"}</small></span></div><div className="skin-document-intro-content">{children}</div></div>;
  if (isConceptTheme(theme)) return <ConceptDocumentIntro theme={theme} title={title} category={category}>{children}</ConceptDocumentIntro>;
  if (theme === "sheet" && title) return <SheetDocumentIntro title={title} category={category} rows={sheetRows}>{children}</SheetDocumentIntro>;
  if (theme === "chat" && title) return <div className="skin-document-intro skin-document-intro--chat"><SkinDocumentNotice title={`${title} · 공지`}>{children}</SkinDocumentNotice></div>;
  return <div className={`skin-document-intro skin-document-intro--${theme}`}>
    {theme === "chat" && title ? <div className="skin-document-contact"><span className="skin-contact-avatar" aria-hidden="true">{title.slice(0, 1)}</span><span><strong>{title}</strong><small>{category || "자료 대화"}</small></span></div> : theme === "terminal" && title ? <div className="skin-command-line">C:\NOTES&gt; TYPE &quot;{title}&quot;</div> : null}
    <div className="skin-document-intro-content">{children}</div>
  </div>;
}
