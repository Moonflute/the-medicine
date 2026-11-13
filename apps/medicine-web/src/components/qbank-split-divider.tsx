"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent, RefObject } from "react";
import { clampSplitRatio, keyboardSplitRatio, pointerSplitRatio, splitBounds } from "@/lib/qbank-split-size";

type Geometry = { stacked: boolean; start: number; length: number; width: number; height: number };
type Ratios = { desktop: number; mobile: number };

function readGeometry(workspace: HTMLElement, header: HTMLElement): Geometry {
  const bounds = workspace.getBoundingClientRect();
  const top = header.getBoundingClientRect().bottom;
  const stacked = window.matchMedia("(max-width: 1023px)").matches;
  const height = Math.max(0, (stacked ? bounds.bottom : window.innerHeight) - top);
  return { stacked, start: stacked ? top : bounds.left, length: stacked ? height : bounds.width, width: bounds.width, height };
}

function applyRatios(workspace: HTMLElement, ratios: Ratios) {
  workspace.style.setProperty("--qbank-primary-width", `${ratios.desktop * 100}%`);
  workspace.style.setProperty("--qbank-reference-width", `${(1 - ratios.desktop) * 100}%`);
  workspace.style.setProperty("--qbank-desktop-ratio", String(ratios.desktop));
  workspace.style.setProperty("--qbank-mobile-ratio", String(ratios.mobile));
  workspace.style.setProperty("--qbank-mobile-primary-track", `${ratios.mobile}fr`);
  workspace.style.setProperty("--qbank-mobile-reference-track", `${1 - ratios.mobile}fr`);
}

export function QbankSplitDivider({ open, workspaceRef, headerRef }: {
  open: boolean;
  workspaceRef: RefObject<HTMLDivElement | null>;
  headerRef: RefObject<HTMLElement | null>;
}) {
  // Keep each orientation's ratio when closing/reopening or rotating the viewport.
  const ratios = useRef<Ratios>({ desktop: 0.5, mobile: 0.5 });
  const handle = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointerId: number; geometry: Geometry; grabOffset: number } | null>(null);
  const [status, setStatus] = useState({ stacked: false, value: 50, min: 20, max: 80 });

  const announceRatio = useCallback((geometry: Geometry, ratio: number, commit = true) => {
    const limits = splitBounds(geometry.length, geometry.stacked);
    const value = Math.round(ratio * 100);
    // Drag frames update only the layout variables and separator, never the question player.
    handle.current?.setAttribute("aria-valuenow", String(value));
    handle.current?.setAttribute("aria-valuetext", `문제 ${value}%, 자료 ${100 - value}%`);
    if (commit) setStatus({ stacked: geometry.stacked, value, min: Math.round(limits.min * 100), max: Math.round(limits.max * 100) });
  }, []);

  const resizeTo = (geometry: Geometry, value: number, commit = false) => {
    const ratio = clampSplitRatio(value, geometry.length, geometry.stacked);
    ratios.current[geometry.stacked ? "mobile" : "desktop"] = ratio;
    if (workspaceRef.current) applyRatios(workspaceRef.current, ratios.current);
    announceRatio(geometry, ratio, commit);
  };

  const stopResize = () => {
    const active = drag.current;
    if (!active) return;
    drag.current = null;
    if (workspaceRef.current) delete workspaceRef.current.dataset.resizing;
    if (handle.current?.hasPointerCapture(active.pointerId)) handle.current.releasePointerCapture(active.pointerId);
    announceRatio(active.geometry, ratios.current[active.geometry.stacked ? "mobile" : "desktop"]);
  };

  useEffect(() => {
    const workspace = workspaceRef.current;
    const header = headerRef.current;
    if (!open || !workspace || !header) return;
    let previous = "";
    const measure = () => {
      const geometry = readGeometry(workspace, header);
      const signature = `${geometry.stacked}:${geometry.width}:${geometry.height}:${geometry.start}`;
      if (signature === previous) return;
      previous = signature;
      // A rotation/viewport resize ends the old-axis gesture cleanly.
      const active = drag.current;
      drag.current = null;
      if (active && handle.current?.hasPointerCapture(active.pointerId)) handle.current.releasePointerCapture(active.pointerId);
      delete workspace.dataset.resizing;
      const axis = geometry.stacked ? "mobile" : "desktop";
      ratios.current[axis] = clampSplitRatio(ratios.current[axis], geometry.length, geometry.stacked);
      applyRatios(workspace, ratios.current);
      announceRatio(geometry, ratios.current[geometry.stacked ? "mobile" : "desktop"]);
    };
    const observer = new ResizeObserver(measure);
    const cancelGesture = () => {
      const active = drag.current;
      if (!active) return;
      drag.current = null;
      delete workspace.dataset.resizing;
      if (handle.current?.hasPointerCapture(active.pointerId)) handle.current.releasePointerCapture(active.pointerId);
      announceRatio(active.geometry, ratios.current[active.geometry.stacked ? "mobile" : "desktop"]);
    };
    observer.observe(workspace);
    observer.observe(header);
    window.addEventListener("resize", measure);
    window.addEventListener("blur", cancelGesture);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("blur", cancelGesture);
      drag.current = null;
      delete workspace.dataset.resizing;
    };
  }, [open, workspaceRef, headerRef, announceRatio]);

  const startResize = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0 || !workspaceRef.current || !headerRef.current) return;
    event.preventDefault();
    const geometry = readGeometry(workspaceRef.current, headerRef.current);
    const ratio = ratios.current[geometry.stacked ? "mobile" : "desktop"];
    const position = geometry.stacked ? event.clientY : event.clientX;
    drag.current = { pointerId: event.pointerId, geometry, grabOffset: position - geometry.start - geometry.length * ratio };
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    workspaceRef.current.dataset.resizing = "true";
  };

  const moveResize = (event: PointerEvent<HTMLDivElement>) => {
    const active = drag.current;
    if (!active || active.pointerId !== event.pointerId) return;
    const { geometry, grabOffset } = active;
    resizeTo(geometry, pointerSplitRatio(geometry.stacked ? event.clientY : event.clientX, geometry.start, geometry.length, geometry.stacked, grabOffset));
  };

  if (!open) return null;
  return <>
    <div ref={handle} className="qbank-split-divider" role="separator" tabIndex={0}
      aria-label="문제와 자료 영역 크기 조절" aria-controls="qbank-primary-pane qbank-reference-pane"
      aria-orientation={status.stacked ? "horizontal" : "vertical"}
      aria-valuemin={status.min} aria-valuemax={status.max} aria-valuenow={status.value}
      aria-valuetext={`문제 ${status.value}%, 자료 ${100 - status.value}%`}
      title="드래그로 크기 조절 · 더블클릭 또는 Enter로 반씩 나누기"
      onPointerDown={startResize} onPointerMove={moveResize}
      onPointerUp={event => { if (drag.current?.pointerId === event.pointerId) { moveResize(event); stopResize(); } }}
      onPointerCancel={stopResize} onLostPointerCapture={stopResize}
      onDoubleClick={() => { if (workspaceRef.current && headerRef.current) resizeTo(readGeometry(workspaceRef.current, headerRef.current), 0.5, true); }}
      onKeyDown={event => {
        if (!workspaceRef.current || !headerRef.current) return;
        const geometry = readGeometry(workspaceRef.current, headerRef.current);
        const ratio = keyboardSplitRatio(event.key, ratios.current[geometry.stacked ? "mobile" : "desktop"], geometry.length, geometry.stacked, event.shiftKey);
        if (ratio === null) return;
        event.preventDefault();
        resizeTo(geometry, ratio, true);
      }} />
    <div className="qbank-resize-shield" aria-hidden="true" />
  </>;
}
