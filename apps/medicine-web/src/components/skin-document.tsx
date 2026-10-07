"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useAppTheme } from "@/components/theme-provider";
import { useChatSenderName } from "@/components/chat-contact";
import { SheetCellRow, SheetDocumentIntro, SheetSectionTabs, useInSheetCell, useSheetWorkbook, type SheetIntroRow } from "@/components/sheet-workbook";

export type SkinTextBlock = { kind: "text" | "heading" | "group" | "table" | "space"; label?: string; content: ReactNode };

export function SkinDocumentNotice({ title, children, className = "mt-3 flex flex-wrap items-center gap-2" }: { title: string; children: ReactNode; className?: string }) {
  const { theme } = useAppTheme();
  if (theme !== "chat") return <div className={className}>{children}</div>;
  return <details className="chat-pinned-notice">
    <summary><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m3 9 12-5v16L3 15V9ZM15 9h3a3 3 0 0 1 0 6h-3M5 16l2 5h3l-2-4" /></svg><span>{title}</span><span className="chat-notice-chevron" aria-hidden="true">⌄</span></summary>
    <div className="chat-pinned-notice-content">{children}</div>
  </details>;
}

/** The same parsed content and links get a different reading structure in each skin. */
export function SkinTextBlocks({ blocks, className }: { blocks: SkinTextBlock[]; className: string }) {
  const { theme } = useAppTheme();
  const inSheetCell = useInSheetCell();
  const senderName = useChatSenderName();
  if (theme !== "chat" && theme !== "sheet" && theme !== "terminal") return <div className={`min-w-0 ${className}`.trim()}>{blocks.map((block, index) => <div key={index}>{block.content}</div>)}</div>;
  const visible = blocks.filter(block => block.kind !== "space");
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
  const { theme } = useAppTheme();
  const resetSelection = useSheetWorkbook()?.reset;
  const [selectedId, setSelectedId] = useState(sections[0]?.id ?? "");
  const activeId = sections.some(section => section.id === selectedId) ? selectedId : sections[0]?.id;
  const sectionKey = JSON.stringify(sections.map(section => section.id));
  useEffect(() => {
    const ids = new Set<string>(JSON.parse(sectionKey));
    const selectFromHash = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      if (ids.has(id)) {
        setSelectedId(id);
        if (theme === "sheet") resetSelection?.();
        if (theme === "sheet") window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
      }
    };
    const selectFromToc = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (ids.has(id)) {
        setSelectedId(id);
        if (theme === "sheet") resetSelection?.();
        if (theme === "sheet") window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
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

  const choose = (id: string) => {
    setSelectedId(id);
    if (theme === "sheet") resetSelection?.();
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", url);
    if (theme === "sheet") window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
  };
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  return <div className={special ? `skin-document-sections skin-document-sections--${theme}` : className}>
    {theme === "sheet" ? <SheetSectionTabs>
      {sections.map(section => <button key={section.id} type="button" id={`${section.id}-tab`} role="tab" aria-selected={activeId === section.id} aria-controls={section.id} tabIndex={activeId === section.id ? 0 : -1} onClick={() => choose(section.id)} onKeyDown={event => {
        const index = sections.findIndex(item => item.id === section.id);
        let target: SkinDocumentSection | undefined;
        if (event.key === "ArrowRight") target = sections[(index + 1) % sections.length];
        if (event.key === "ArrowLeft") target = sections[(index + sections.length - 1) % sections.length];
        if (event.key === "Home") target = sections[0];
        if (event.key === "End") target = sections.at(-1);
        if (target) { event.preventDefault(); choose(target.id); document.getElementById(`${target.id}-tab`)?.focus(); }
      }} title={section.title}>{section.title.replace(/\s*[（(].*$/, "").trim()}</button>)}
    </SheetSectionTabs> : null}
    {sections.map((section, index) => <section key={section.id} id={section.id} tabIndex={-1} hidden={theme === "sheet" && activeId !== section.id} role={theme === "sheet" ? "tabpanel" : undefined} aria-labelledby={theme === "sheet" ? `${section.id}-tab` : `${section.id}-heading`} className={special ? "skin-doc-panel" : plainSectionClassName}>
      {theme === "sheet" ? <SheetCellRow label="목차" heading><h3 id={`${section.id}-heading`}>{section.title}</h3></SheetCellRow> : <div className={special ? "skin-section-heading" : "mb-3 flex items-center gap-2"}>
        {theme === "chat" ? <span className="skin-section-divider">{String(index + 1).padStart(2, "0")}</span> : theme === "terminal" ? <span aria-hidden="true">[{String(index + 1).padStart(2, "0")}]</span> : section.icon}
        <h3 id={`${section.id}-heading`} className={special ? "" : "font-semibold text-slate-900"}>{section.title}</h3>
      </div>}
      {section.content}
    </section>)}
  </div>;
}

export function SkinDocumentIntro({ title, category, children, sheetRows }: { title: string; category?: string; children: ReactNode; sheetRows?: SheetIntroRow[] }) {
  const { theme } = useAppTheme();
  if (theme === "sheet" && title) return <SheetDocumentIntro title={title} category={category} rows={sheetRows}>{children}</SheetDocumentIntro>;
  if (theme === "chat" && title) return <div className="skin-document-intro skin-document-intro--chat"><SkinDocumentNotice title={`${title} · 공지`}>{children}</SkinDocumentNotice></div>;
  return <div className={`skin-document-intro skin-document-intro--${theme}`}>
    {theme === "chat" && title ? <div className="skin-document-contact"><span className="skin-contact-avatar" aria-hidden="true">{title.slice(0, 1)}</span><span><strong>{title}</strong><small>{category || "자료 대화"}</small></span></div> : theme === "terminal" && title ? <div className="skin-command-line">C:\NOTES&gt; TYPE &quot;{title}&quot;</div> : null}
    <div className="skin-document-intro-content">{children}</div>
  </div>;
}
