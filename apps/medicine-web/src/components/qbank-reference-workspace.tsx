"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, PanelRight, Search, X } from "lucide-react";
import { isQuestionReferenceRoute, moveReference, QBANK_REFERENCE_FRAME, QBANK_REFERENCE_SEARCH_EVENT, referenceLocation, referenceNavigationMatches, referenceTarget, visitReference } from "@/lib/qbank-reference";
import type { ReferenceHistory } from "@/lib/qbank-reference";
import { QbankSplitDivider } from "./qbank-split-divider";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const searchHref = `${basePath}/search/`;
const subscribeFrame = () => () => {};
const readFrame = () => window.parent !== window && window.name === QBANK_REFERENCE_FRAME;
const serverFalse = () => false;

export function useQbankReferenceFrame() {
  return useSyncExternalStore(subscribeFrame, readFrame, serverFalse);
}

const ReferenceContext = createContext<{
  enabled: boolean; open: boolean; toggle: () => void;
} | null>(null);

/** The question subtree never changes identity when opening, closing or navigating the reference. */
export function QbankReferenceWorkspace({ enabled, children }: { enabled: boolean; children: ReactNode }) {
  const embedded = useQbankReferenceFrame();
  const available = enabled && !embedded;
  const [opened, setOpened] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [history, setHistory] = useState<ReferenceHistory>({ entries: [searchHref], index: 0 });
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("자료 검색");
  const [externalHref, setExternalHref] = useState<string | null>(null);
  const externalRef = useRef<string | null>(null);
  const workspace = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const historyRef = useRef(history);
  const ready = useRef(false);
  const pending = useRef<string | null>(searchHref);
  const open = available && opened;

  const updateHistory = useCallback((next: ReferenceHistory) => {
    historyRef.current = next;
    setHistory(next);
  }, []);

  const sendNavigation = useCallback((href: string) => {
    const target = referenceTarget(href, window.location.origin, basePath);
    if (!target) return;
    externalRef.current = target.external ? target.href : null;
    setExternalHref(externalRef.current);
    if (target.external) {
      pending.current = null;
      setLoading(false);
      setTitle(new URL(target.href).hostname);
      return;
    }
    pending.current = href;
    setLoading(true);
    if (ready.current) frame.current?.contentWindow?.postMessage({ type: "qbank-reference:navigate", href }, window.location.origin);
  }, []);

  const navigate = useCallback((href: string) => {
    const location = referenceTarget(href, window.location.origin, basePath);
    if (!location) return;
    updateHistory(visitReference(historyRef.current, location.href));
    sendNavigation(location.href);
    setInitialized(true);
    setOpened(true);
  }, [sendNavigation, updateHistory]);

  const showReference = useCallback(() => {
    setInitialized(true);
    setOpened(true);
  }, []);
  const close = useCallback(() => {
    setOpened(false);
    requestAnimationFrame(() => document.getElementById("qbank-reference-toggle")?.focus({ preventScroll: true }));
  }, []);
  const toggle = useCallback(() => { if (open) close(); else showReference(); }, [open, close, showReference]);
  const search = useCallback(() => {
    // Return to the last search, including its query, rather than discard it.
    const previous = historyRef.current.entries.slice(0, historyRef.current.index + 1).findLast(href => referenceLocation(href, window.location.origin, basePath)?.route.startsWith("/search/"));
    navigate(previous ?? searchHref);
  }, [navigate]);

  useEffect(() => {
    if (!available) return;
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow || !event.data || typeof event.data !== "object") return;
      if (event.data.type === "qbank-reference:ready") {
        ready.current = true;
        if (!externalRef.current) sendNavigation(pending.current ?? historyRef.current.entries[historyRef.current.index]);
        return;
      }
      if (event.data.type !== "qbank-reference:location" || externalRef.current) return;
      const location = referenceLocation(event.data.href, window.location.origin, basePath);
      if (!location || (pending.current && !referenceNavigationMatches(pending.current, location.href, window.location.origin, basePath))) return;
      const replace = Boolean(pending.current) || event.data.replace === true || referenceNavigationMatches(historyRef.current.entries[historyRef.current.index], location.href, window.location.origin, basePath);
      pending.current = null;
      updateHistory(visitReference(historyRef.current, location.href, replace));
      setTitle(typeof event.data.title === "string" ? event.data.title.slice(0, 160) : "참고 자료");
      setLoading(false);
    };
    window.addEventListener("message", onMessage);
    window.addEventListener(QBANK_REFERENCE_SEARCH_EVENT, search);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener(QBANK_REFERENCE_SEARCH_EVENT, search);
      ready.current = false;
    };
  }, [available, search, sendNavigation, updateHistory]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.dataset.qbankSplit = "true";
    return () => { delete document.documentElement.dataset.qbankSplit; };
  }, [open]);

  useEffect(() => {
    if (open && !loading && !externalHref) frame.current?.contentWindow?.focus();
  }, [open, loading, externalHref]);

  const captureReferenceLink = (event: MouseEvent<HTMLDivElement>) => {
    if (!open || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
    if (!anchor || anchor.hasAttribute("download")) return;
    const location = referenceTarget(anchor.href, window.location.origin, basePath);
    const resourceLink = Boolean(anchor.closest("[data-qbank-reference-links]"));
    if (!location || (!resourceLink && (location.external || !isQuestionReferenceRoute(location.route)))) return;
    event.preventDefault();
    // Let a link's own onClick close its picker; preventDefault keeps Next from leaving this session.
    navigate(location.href);
  };

  const travel = (delta: number) => {
    const next = moveReference(historyRef.current, delta);
    updateHistory(next);
    sendNavigation(next.entries[next.index]);
  };

  const context = useMemo(() => ({ enabled: available, open, toggle }), [available, open, toggle]);

  return <ReferenceContext.Provider value={context}>
    <div ref={workspace} className="qbank-workspace" data-split={open}>
      {open ? <header className="qbank-reference-header qbank-shared-header" ref={header} aria-label="문제와 참고 자료 공통 도구">
        <div className="qbank-shared-question">
          <Link href="/review/qbank" aria-label="문제 목록으로 돌아가기"><ArrowLeft size={16} aria-hidden="true" /><span>문제 풀기</span></Link>
        </div>
        <div className="qbank-reference-controls">
          <div className="qbank-reference-history">
            <button type="button" onClick={() => travel(-1)} disabled={history.index === 0 || loading} aria-label="이전 자료" title="이전 자료"><ArrowLeft size={16} /></button>
            <button type="button" onClick={() => travel(1)} disabled={history.index === history.entries.length - 1 || loading} aria-label="다음 자료" title="다음 자료"><ArrowRight size={16} /></button>
          </div>
          <button type="button" onClick={search} className="qbank-reference-search" aria-label="참고 자료 검색" title="참고 자료 검색"><Search size={15} aria-hidden="true" /><span>검색</span></button>
          <span className="qbank-reference-title" title={title}>{loading ? "불러오는 중…" : title === "자료 검색" ? "" : title}</span>
          <a href={history.entries[history.index]} target="_blank" rel="noopener noreferrer" aria-label="현재 자료를 새 탭에서 열기" title="새 탭에서 열기"><ExternalLink size={15} /></a>
          <button type="button" onClick={close} aria-label="분할 보기 닫기" title="닫기"><X size={17} /></button>
        </div>
      </header> : null}
      <div id="qbank-primary-pane" className="qbank-primary-pane" role={open ? "region" : undefined} aria-label={open ? "문제 풀이" : undefined} tabIndex={open ? 0 : undefined} onClickCapture={captureReferenceLink}>{children}</div>
      <QbankSplitDivider open={open} workspaceRef={workspace} headerRef={header} />
      {available && initialized ? <aside id="qbank-reference-pane" className="qbank-reference-pane" aria-label="검색 및 참고 자료" hidden={!open}>
        <iframe ref={frame} name={QBANK_REFERENCE_FRAME} src={searchHref} title="문제 풀이 참고 자료" className="qbank-reference-frame" hidden={Boolean(externalHref)} />
        {externalHref ? <>
          <p className="qbank-reference-external-notice">외부 자료 · 표시되지 않으면 <a href={externalHref} target="_blank" rel="noopener noreferrer">새 탭에서 열기</a></p>
          <iframe key={externalHref} src={externalHref} title="외부 참고 자료" className="qbank-reference-frame" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox" referrerPolicy="no-referrer" />
        </> : null}
      </aside> : null}
    </div>
  </ReferenceContext.Provider>;
}

export function QbankReferenceToolbar() {
  const reference = useContext(ReferenceContext);
  if (!reference?.enabled) return null;
  return <div className="qbank-reference-toolbar" aria-label="문제 및 자료 보기">
    <button id="qbank-reference-toggle" type="button" onClick={reference.toggle} aria-expanded={reference.open} aria-controls="qbank-reference-pane" title="문제를 유지하면서 자료 검색">
      <PanelRight size={15} aria-hidden="true" /><span>{reference.open ? "분할 닫기" : "분할 보기"}</span>
    </button>
  </div>;
}
