"use client";

import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore, type ReactNode, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";

type Selection = { id: string; address: string; text: string };
type Workbook = {
  title: string | null; parentHref: string | null; selection: Selection | null;
  register: (title: string) => () => void; registerParent: (href: string) => () => void;
  select: (selection: Selection) => void; reset: () => void;
  tabsTarget: HTMLDivElement | null; setTabsTarget: (target: HTMLDivElement | null) => void;
};
const WorkbookContext = createContext<Workbook | null>(null);
const CellContentContext = createContext(false);
export const useSheetWorkbook = () => useContext(WorkbookContext);
export const useInSheetCell = () => useContext(CellContentContext);
export type SheetIntroRow = { label: string; content: ReactNode };

export function SheetWorkbookProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string | null>(null);
  const [parentHref, setParentHref] = useState<string | null>(null);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [tabsTarget, setTabsTarget] = useState<HTMLDivElement | null>(null);
  const register = useCallback((next: string) => {
    setTitle(next); setSelection(null);
    return () => setTitle(current => current === next ? null : current);
  }, []);
  const registerParent = useCallback((next: string) => {
    setParentHref(next);
    return () => setParentHref(current => current === next ? null : current);
  }, []);
  const select = useCallback((next: Selection) => setSelection(current => current?.id === next.id && current.text === next.text && current.address === next.address ? current : next), []);
  const reset = useCallback(() => setSelection(null), []);
  const value = useMemo(() => ({ title, parentHref, selection, register, registerParent, select, reset, tabsTarget, setTabsTarget }), [title, parentHref, selection, register, registerParent, select, reset, tabsTarget]);
  return <WorkbookContext.Provider value={value}>{children}</WorkbookContext.Provider>;
}

function visibleRows(root: HTMLElement) {
  return Array.from(root.querySelectorAll<HTMLElement>("[data-sheet-row]")).filter(row => row.getClientRects().length > 0);
}

/** A single canvas owns row numbering and cell selection for the visible worksheet. */
export function SheetDocumentCanvas({ children }: { children: ReactNode }) {
  const workbook = useSheetWorkbook();
  const selectCell = (target: EventTarget, root: HTMLElement) => {
    if (!(target instanceof HTMLElement)) return;
    const cell = target.closest<HTMLElement>("[data-sheet-cell]");
    const row = cell?.closest<HTMLElement>("[data-sheet-row]");
    if (!cell || !row) return;
    const index = visibleRows(root).indexOf(row);
    const column = cell.dataset.sheetCell ?? "B";
    const value = cell.classList.contains("sheet-row-number") ? row.querySelector<HTMLElement>('[data-sheet-cell="B"]:not(.sheet-row-number)') : cell;
    workbook?.select({ id: cell.dataset.sheetCellId ?? "", address: `${column}${index + 1}`, text: value?.textContent?.trim() ?? "" });
  };
  const navigate = (event: KeyboardEvent<HTMLDivElement>) => {
    const cell = event.target instanceof HTMLElement ? event.target : null;
    if (!cell?.matches("[data-sheet-cell]:not(.sheet-row-number)") || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const row = cell.closest<HTMLElement>("[data-sheet-row]");
    if (!row) return;
    const rows = visibleRows(event.currentTarget);
    const index = rows.indexOf(row);
    const column = cell.dataset.sheetCell;
    let target: HTMLElement | null | undefined;
    if (event.key === "ArrowUp" || event.key === "ArrowDown") target = rows[index + (event.key === "ArrowUp" ? -1 : 1)]?.querySelector<HTMLElement>(`[data-sheet-cell="${column}"]:not(.sheet-row-number)`);
    else if (event.key === "ArrowLeft" && column === "B") target = row.querySelector<HTMLElement>('[data-sheet-cell="A"]');
    else if (event.key === "ArrowRight" && column === "A") target = row.querySelector<HTMLElement>('[data-sheet-cell="B"]:not(.sheet-row-number)');
    if (target) { event.preventDefault(); target.focus(); }
  };
  return <div className="sheet-document" data-sheet-document={Boolean(workbook?.title)} onClick={event => selectCell(event.target, event.currentTarget)} onFocusCapture={event => selectCell(event.target, event.currentTarget)} onKeyDown={navigate}>{children}</div>;
}

export function SheetCellRow({ label, children, heading = false, initial = false }: {
  label: ReactNode; children: ReactNode; heading?: boolean; initial?: boolean;
}) {
  const id = useId();
  const workbook = useSheetWorkbook();
  const selected = workbook?.selection?.id;
  const active = selected === `${id}-A` || selected === `${id}-B` || (!selected && initial);
  return <div className="sheet-grid-row" data-sheet-row data-heading={heading} data-selected={active}>
    <button type="button" className="sheet-row-number" data-sheet-cell="B" data-sheet-cell-id={`${id}-B`} aria-label="행 선택" tabIndex={-1} />
    <div className="sheet-cell-label" tabIndex={0} data-sheet-cell="A" data-sheet-cell-id={`${id}-A`} data-selected={selected === `${id}-A`}>{label}</div>
    <div className="sheet-cell-value" tabIndex={0} data-sheet-cell="B" data-sheet-cell-id={`${id}-B`} data-selected={selected === `${id}-B` || (!selected && initial)}>
      <CellContentContext.Provider value={true}>{children}</CellContentContext.Provider>
    </div>
  </div>;
}

export function SheetColumnHeadings() {
  const workbook = useSheetWorkbook();
  const column = workbook?.selection?.address[0] ?? "B";
  return <div className="sheet-grid-columns" aria-label="워크시트 열"><span aria-hidden="true">◢</span><span data-selected={column === "A"}>A</span><span data-selected={column === "B"}>B</span></div>;
}

export function SheetDocumentIntro({ title, category, rows, children }: {
  title: string; category?: string; rows?: SheetIntroRow[]; children?: ReactNode;
}) {
  const register = useSheetWorkbook()?.register;
  useEffect(() => register?.(title), [register, title]);
  return <div className="skin-document-intro skin-document-intro--sheet">
    <SheetColumnHeadings />
    <SheetCellRow label="문서" initial><h1 className="sheet-document-title">{title}</h1></SheetCellRow>
    {category && <SheetCellRow label="분류">{category}</SheetCellRow>}
    {rows ? rows.map((row, index) => <SheetCellRow key={`${row.label}-${index}`} label={row.label}>{row.content}</SheetCellRow>) : children ? <SheetCellRow label="안내"><div className="sheet-intro-details">{children}</div></SheetCellRow> : null}
  </div>;
}

function subscribeCompact(callback: () => void) {
  const media = window.matchMedia("(max-width:639px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const compactSnapshot = () => window.matchMedia("(max-width:639px)").matches;
const serverSnapshot = () => false;

export function SheetDocumentToolbar({ children, className }: { children: ReactNode; className: string }) {
  const bar = useRef<HTMLDivElement>(null);
  const id = useId();
  const compact = useSyncExternalStore(subscribeCompact, compactSnapshot, serverSnapshot);
  const [expandedOverride, setExpandedOverride] = useState<boolean | null>(null);
  const expanded = expandedOverride ?? !compact;
  useEffect(() => {
    const element = bar.current;
    const root = element?.closest<HTMLElement>(".sheet-document");
    if (!element || !root) return;
    const resize = new ResizeObserver(() => {
      const height = `${element.getBoundingClientRect().height}px`;
      root.style.setProperty("--sheet-ribbon-height", height);
      document.documentElement.style.setProperty("--sheet-ribbon-height", height);
    });
    resize.observe(element);
    return () => { resize.disconnect(); root.style.removeProperty("--sheet-ribbon-height"); document.documentElement.style.removeProperty("--sheet-ribbon-height"); };
  }, []);
  return <div ref={bar} data-document-toolbar data-highlight-ignore className={`sheet-document-ribbon ${className}`}>
    <button type="button" className="sheet-ribbon-toggle" aria-label="문서 도구" aria-expanded={expanded} aria-controls={id} onClick={() => setExpandedOverride(!expanded)}>검토<span aria-hidden="true">{expanded ? "⌃" : "⌄"}</span></button>
    <div id={id} className="document-toolbar-actions sheet-ribbon-actions" role="group" aria-label="문서 도구" hidden={!expanded}>{children}</div>
    <span className="sheet-ribbon-mode">읽기</span>
  </div>;
}

export function SheetSectionTabs({ children }: { children: ReactNode }) {
  const workbook = useSheetWorkbook();
  const tabs = <div className="sheet-section-tabs" role="tablist" aria-label="문서 시트">{children}</div>;
  return workbook?.tabsTarget ? createPortal(tabs, workbook.tabsTarget) : <div className="sheet-section-tabs-fallback">{tabs}</div>;
}

export function SheetParentDestination({ href }: { href: string }) {
  const workbook = useSheetWorkbook();
  const registerParent = workbook?.registerParent;
  useEffect(() => registerParent?.(href), [registerParent, href]);
  return null;
}
