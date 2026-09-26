"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ChiefComplaintDocumentHeader({ title, actions, children }: { title: string; actions: ReactNode; children: ReactNode }) {
  const sentinel = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);
  const highlighterSlot = useRef<HTMLSpanElement>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    // Register the external portal only after this header has hydrated.
    highlighterSlot.current?.setAttribute("data-highlighter-slot", "");
    const marker = sentinel.current;
    const bar = header.current;
    if (!marker || !bar) return;
    let frame = 0;
    const measure = () => {
      const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--app-header-height")) || 65;
      setCompact(marker.getBoundingClientRect().top < offset);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; measure(); });
    };
    const resize = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--cc-header-height", `${bar.getBoundingClientRect().height}px`);
      measure();
    });
    resize.observe(bar);
    const appHeader = document.querySelector("[data-personal-highlight-root]")?.previousElementSibling;
    if (appHeader) resize.observe(appHeader);
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect();
      window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll);
      document.documentElement.style.removeProperty("--cc-header-height");
    };
  }, []);

  return <>
    <div ref={sentinel} aria-hidden="true" className="h-0" />
    <header ref={header} data-document-toolbar data-compact={compact} className="cc-document-header !mt-0">
      <h1 className="cc-document-title" title={title}>{title}</h1>
      <div data-highlight-ignore className="document-toolbar-actions cc-document-actions" role="group" aria-label="문서 도구">
        <span ref={highlighterSlot} className="inline-flex shrink-0" />
        {actions}
      </div>
      <div data-highlight-ignore className="cc-document-views" role="group" aria-label="진료 관점">{children}</div>
    </header>
  </>;
}
