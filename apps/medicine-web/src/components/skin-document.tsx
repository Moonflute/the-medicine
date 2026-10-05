"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useAppTheme } from "@/components/theme-provider";

export type SkinTextBlock = { kind: "text" | "heading" | "group" | "table" | "space"; label?: string; content: ReactNode };

/** The same parsed content and links get a different reading structure in each skin. */
export function SkinTextBlocks({ blocks, className }: { blocks: SkinTextBlock[]; className: string }) {
  const { theme } = useAppTheme();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  if (theme !== "chat" && theme !== "sheet" && theme !== "terminal") return <div className={`min-w-0 ${className}`.trim()}>{blocks.map((block, index) => <div key={index}>{block.content}</div>)}</div>;
  const visible = blocks.filter(block => block.kind !== "space");
  if (theme === "chat") return <div className="skin-message-stream" data-skin-blocks="chat">
    {visible.map((block, index) => block.kind === "heading" ? <div key={index} className="skin-message-divider">{block.content}</div> : <div key={index} className="skin-note-message" data-message-kind={block.kind}>
      <span className="skin-message-avatar" aria-hidden="true">노트</span><div className="skin-note-message-body"><span className="skin-message-sender">{block.label || (block.kind === "table" ? "표 자료" : "자료")}</span><div className="skin-message-bubble">{block.content}</div></div>
    </div>)}
  </div>;
  if (theme === "sheet") return <div className="skin-note-sheet" data-skin-blocks="sheet">
    <div className="skin-sheet-selection"><output>{selectedRow === null ? "A:B" : `B${selectedRow}`}</output><span>내용</span></div>
    <table className="skin-note-grid"><thead><tr><th aria-label="행 번호" /><th>A</th><th>B</th></tr></thead><tbody>
      {visible.map((block, index) => <tr key={index} data-active={selectedRow === index + 1}>
        <th scope="row"><button type="button" aria-label={`${index + 1}행 선택`} aria-pressed={selectedRow === index + 1} onClick={() => setSelectedRow(index + 1)}>{index + 1}</button></th>
        <td className="skin-cell-kind">{block.kind === "heading" ? "제목" : block.kind === "table" ? "표" : block.kind === "group" ? "항목" : "내용"}</td>
        <td className="skin-cell-content">{block.content}</td>
      </tr>)}
    </tbody></table>
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
        if (theme === "sheet") window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
      }
    };
    const selectFromToc = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (ids.has(id)) {
        setSelectedId(id);
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
  }, [sectionKey, theme]);

  const choose = (id: string) => {
    setSelectedId(id);
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", url);
  };
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  return <div className={special ? `skin-document-sections skin-document-sections--${theme}` : className}>
    {theme === "sheet" ? <div className="skin-section-tabs" role="tablist" aria-label="문서 시트">
      {sections.map(section => <button key={section.id} type="button" id={`${section.id}-tab`} role="tab" aria-selected={activeId === section.id} aria-controls={section.id} tabIndex={activeId === section.id ? 0 : -1} onClick={() => choose(section.id)} onKeyDown={event => {
        const index = sections.findIndex(item => item.id === section.id);
        let target: SkinDocumentSection | undefined;
        if (event.key === "ArrowRight") target = sections[(index + 1) % sections.length];
        if (event.key === "ArrowLeft") target = sections[(index + sections.length - 1) % sections.length];
        if (event.key === "Home") target = sections[0];
        if (event.key === "End") target = sections.at(-1);
        if (target) { event.preventDefault(); choose(target.id); document.getElementById(`${target.id}-tab`)?.focus(); }
      }}>{section.title}</button>)}
    </div> : null}
    {sections.map((section, index) => <section key={section.id} id={section.id} tabIndex={-1} hidden={theme === "sheet" && activeId !== section.id} role={theme === "sheet" ? "tabpanel" : undefined} aria-labelledby={theme === "sheet" ? `${section.id}-tab` : `${section.id}-heading`} className={special ? "skin-doc-panel" : plainSectionClassName}>
      <div className={special ? "skin-section-heading" : "mb-3 flex items-center gap-2"}>
        {theme === "chat" ? <span className="skin-section-divider">{String(index + 1).padStart(2, "0")}</span> : theme === "terminal" ? <span aria-hidden="true">[{String(index + 1).padStart(2, "0")}]</span> : theme === "sheet" ? <span className="skin-section-address">A1</span> : section.icon}
        <h3 id={`${section.id}-heading`} className={special ? "" : "font-semibold text-slate-900"}>{section.title}</h3>
      </div>
      {section.content}
    </section>)}
  </div>;
}

export function SkinDocumentIntro({ title, category, children }: { title: string; category?: string; children: ReactNode }) {
  const { theme } = useAppTheme();
  return <div className={`skin-document-intro skin-document-intro--${theme}`}>
    {theme === "chat" && title ? <div className="skin-document-contact"><span className="skin-contact-avatar" aria-hidden="true">{title.slice(0, 1)}</span><span><strong>{title}</strong><small>{category || "자료 대화"}</small></span></div> : theme === "terminal" && title ? <div className="skin-command-line">C:\NOTES&gt; TYPE &quot;{title}&quot;</div> : null}
    <div className="skin-document-intro-content">{children}</div>
  </div>;
}
