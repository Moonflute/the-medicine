"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { MouseEvent, ReactNode } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, PanelRight, Search, X } from "lucide-react";
import { isQuestionReferenceRoute, moveReference, QBANK_REFERENCE_FRAME, QBANK_REFERENCE_SEARCH_EVENT, referenceLocation, visitReference } from "@/lib/qbank-reference";
import type { ReferenceHistory } from "@/lib/qbank-reference";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const searchHref = `${basePath}/search/`;
const narrowQuery = "(max-width: 1023px)";
const subscribeFrame = () => () => {};
const readFrame = () => window.parent !== window && window.name === QBANK_REFERENCE_FRAME;
const readNarrow = () => window.matchMedia(narrowQuery).matches;
const serverFalse = () => false;
function subscribeNarrow(callback: () => void) {
  const query = window.matchMedia(narrowQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function useQbankReferenceFrame() {
  return useSyncExternalStore(subscribeFrame, readFrame, serverFalse);
}

const ReferenceContext = createContext<{
  enabled: boolean; open: boolean; mobileTab: "question" | "reference";
  toggle: () => void; showQuestion: () => void; showReference: () => void;
} | null>(null);

/** The question subtree never changes identity when opening, closing or navigating the reference. */
export function QbankReferenceWorkspace({ enabled, children }: { enabled: boolean; children: ReactNode }) {
  const embedded = useQbankReferenceFrame();
  const narrow = useSyncExternalStore(subscribeNarrow, readNarrow, serverFalse);
  const available = enabled && !embedded;
  const [opened, setOpened] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [mobileTab, setMobileTab] = useState<"question" | "reference">("question");
  const [history, setHistory] = useState<ReferenceHistory>({ entries: [searchHref], index: 0 });
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("자료 검색");
  const frame = useRef<HTMLIFrameElement>(null);
  const historyRef = useRef(history);
  const ready = useRef(false);
  const pending = useRef<string | null>(searchHref);
  const open = available && opened;
  const referenceVisible = open && (!narrow || mobileTab === "reference");

  const updateHistory = useCallback((next: ReferenceHistory) => {
    historyRef.current = next;
    setHistory(next);
  }, []);

  const sendNavigation = useCallback((href: string) => {
    pending.current = href;
    setLoading(true);
    if (ready.current) frame.current?.contentWindow?.postMessage({ type: "qbank-reference:navigate", href }, window.location.origin);
  }, []);

  const navigate = useCallback((href: string) => {
    const location = referenceLocation(href, window.location.origin, basePath);
    if (!location) return;
    updateHistory(visitReference(historyRef.current, location.href));
    sendNavigation(location.href);
    setInitialized(true);
    setOpened(true);
    setMobileTab("reference");
  }, [sendNavigation, updateHistory]);

  const showReference = useCallback(() => {
    setInitialized(true);
    setOpened(true);
    setMobileTab("reference");
  }, []);
  const showQuestion = useCallback(() => {
    setMobileTab("question");
    requestAnimationFrame(() => document.getElementById("qbank-reference-toggle")?.focus());
  }, []);
  const close = useCallback(() => {
    setOpened(false);
    setMobileTab("question");
    requestAnimationFrame(() => document.getElementById("qbank-reference-toggle")?.focus());
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
        sendNavigation(pending.current ?? historyRef.current.entries[historyRef.current.index]);
        return;
      }
      if (event.data.type !== "qbank-reference:location") return;
      const location = referenceLocation(event.data.href, window.location.origin, basePath);
      if (!location || (pending.current && pending.current !== location.href)) return;
      pending.current = null;
      updateHistory(visitReference(historyRef.current, location.href, event.data.replace === true));
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
    if (!referenceVisible || !narrow) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [referenceVisible, narrow]);

  useEffect(() => {
    if (referenceVisible && !loading) frame.current?.contentWindow?.focus();
  }, [referenceVisible, loading]);

  const captureReferenceLink = (event: MouseEvent<HTMLDivElement>) => {
    if (!open || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
    if (!anchor || anchor.hasAttribute("download")) return;
    const location = referenceLocation(anchor.href, window.location.origin, basePath);
    if (!location || !isQuestionReferenceRoute(location.route)) return;
    event.preventDefault();
    event.stopPropagation();
    navigate(location.href);
  };

  const travel = (delta: number) => {
    const next = moveReference(historyRef.current, delta);
    updateHistory(next);
    sendNavigation(next.entries[next.index]);
  };

  const context = useMemo(() => ({ enabled: available, open, mobileTab, toggle, showQuestion, showReference }), [available, open, mobileTab, toggle, showQuestion, showReference]);

  return <ReferenceContext.Provider value={context}>
    <div className="qbank-workspace" data-split={open}>
      <div className="qbank-primary-pane" inert={referenceVisible && narrow} onClickCapture={captureReferenceLink}>{children}</div>
      {available && initialized ? <aside id="qbank-reference-pane" className="qbank-reference-pane" aria-label="검색 및 참고 자료" hidden={!referenceVisible}>
        <div className="qbank-reference-header">
          <button type="button" className="qbank-reference-mobile-back" onClick={showQuestion}><ArrowLeft size={16} aria-hidden="true" />문제</button>
          <div className="qbank-reference-history">
            <button type="button" onClick={() => travel(-1)} disabled={history.index === 0 || loading} aria-label="이전 자료" title="이전 자료"><ArrowLeft size={16} /></button>
            <button type="button" onClick={() => travel(1)} disabled={history.index === history.entries.length - 1 || loading} aria-label="다음 자료" title="다음 자료"><ArrowRight size={16} /></button>
          </div>
          <button type="button" onClick={search} className="qbank-reference-search"><Search size={15} aria-hidden="true" /><span>검색</span></button>
          <span className="qbank-reference-title" title={title}>{loading ? "불러오는 중…" : title}</span>
          <a href={history.entries[history.index]} target="_blank" rel="noopener noreferrer" aria-label="현재 자료를 새 탭에서 열기" title="새 탭에서 열기"><ExternalLink size={15} /></a>
          <button type="button" onClick={close} aria-label="분할 보기 닫기" title="닫기"><X size={17} /></button>
        </div>
        <iframe ref={frame} name={QBANK_REFERENCE_FRAME} src={searchHref} title="문제 풀이 참고 자료" className="qbank-reference-frame" />
      </aside> : null}
    </div>
  </ReferenceContext.Provider>;
}

export function QbankReferenceToolbar() {
  const reference = useContext(ReferenceContext);
  if (!reference?.enabled) return null;
  return <div className="qbank-reference-toolbar" aria-label="문제 및 자료 보기">
    {reference.open ? <div className="qbank-reference-mobile-tabs" aria-label="화면 선택">
      <button type="button" aria-pressed={reference.mobileTab === "question"} onClick={reference.showQuestion}>문제</button>
      <button type="button" aria-pressed={reference.mobileTab === "reference"} onClick={reference.showReference}>자료</button>
    </div> : null}
    <button id="qbank-reference-toggle" type="button" onClick={reference.toggle} aria-expanded={reference.open} aria-controls="qbank-reference-pane" title="문제를 유지하면서 자료 검색">
      <PanelRight size={15} aria-hidden="true" /><span>{reference.open ? "분할 닫기" : "분할 보기"}</span>
    </button>
  </div>;
}
