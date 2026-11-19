"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import { ListTree } from "lucide-react";
import { StudyFlowSyncProvider } from "@/components/study-flow-sync-provider";
import { getStudyServerSnapshot, getStudySnapshot, setStudyUI, subscribeStudyFlow } from "@/lib/study-flow-store";
import { getStudyFlowButtonServerSnapshot, getStudyFlowButtonVisible, setStudyFlowButtonPosition, STUDY_FLOW_BUTTON_POSITION_PROPERTY, subscribeStudyFlowButton } from "@/lib/study-flow-preferences";

const StudyFlowPanel = dynamic(() => import("./study-flow-panel").then(module => module.StudyFlowPanel), {
  ssr: false,
  loading: () => <aside className="study-flow-panel"><p className="study-flow-loading">학습 Flow를 불러오는 중…</p></aside>,
});

type ToggleDrag = { pointerId: number; startX: number; startY: number; offset: number; travel: number; position: number | null };

function toggleBounds(button: HTMLButtonElement) {
  const track = button.parentElement?.getBoundingClientRect();
  const rect = button.getBoundingClientRect();
  if (!track || track.height <= rect.height) return null;
  return { offset: rect.top - track.top, travel: track.height - rect.height };
}

function clampPosition(position: number) {
  return Math.min(1, Math.max(0, position));
}

function StudyFlowToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const drag = useRef<ToggleDrag | null>(null);
  const suppressClick = useRef(false);

  function startDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    suppressClick.current = false;
    const bounds = toggleBounds(event.currentTarget);
    if (!bounds) return;
    drag.current = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, ...bounds, position: null };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    const gesture = drag.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const delta = event.clientY - gesture.startY;
    if (gesture.position === null && Math.hypot(event.clientX - gesture.startX, delta) < 6) return;
    gesture.position = clampPosition((gesture.offset + delta) / gesture.travel);
    event.currentTarget.dataset.dragging = "true";
    event.currentTarget.style.setProperty(STUDY_FLOW_BUTTON_POSITION_PROPERTY, `${gesture.position * 100}%`);
  }

  function finishDrag(event: ReactPointerEvent<HTMLButtonElement>, save: boolean) {
    const gesture = drag.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    if (save) moveDrag(event);
    drag.current = null;
    if (gesture.position !== null) {
      suppressClick.current = true;
      if (save) setStudyFlowButtonPosition(gesture.position);
    }
    delete event.currentTarget.dataset.dragging;
    event.currentTarget.style.removeProperty(STUDY_FLOW_BUTTON_POSITION_PROPERTY);
  }

  function moveWithKeys(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if ((event.key !== "ArrowUp" && event.key !== "ArrowDown") || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || drag.current) return;
    const bounds = toggleBounds(event.currentTarget);
    if (!bounds) return;
    event.preventDefault();
    const step = event.key === "ArrowUp" ? -24 : 24;
    setStudyFlowButtonPosition(clampPosition((bounds.offset + step) / bounds.travel));
  }

  return <div className="study-flow-toggle-track">
    <button id="study-flow-toggle" type="button" className={"study-flow-toggle" + (open ? " is-open" : "")}
      aria-label="학습 Flow 열기" aria-expanded={open} aria-controls="study-flow-panel"
      title="학습 Flow · 드래그나 ↑/↓로 이동 · ] 단축키"
      onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={event => finishDrag(event, true)}
      onPointerCancel={event => finishDrag(event, false)} onLostPointerCapture={event => finishDrag(event, false)}
      onKeyDown={moveWithKeys} onClick={event => {
        const moved = suppressClick.current;
        suppressClick.current = false;
        if (!moved || event.detail === 0) onToggle();
      }}>
      <ListTree size={19} /><span>Flow</span>
    </button>
  </div>;
}

export function StudyFlowHost() {
  const state = useSyncExternalStore(subscribeStudyFlow, getStudySnapshot, getStudyServerSnapshot);
  const buttonVisible = useSyncExternalStore(subscribeStudyFlowButton, getStudyFlowButtonVisible, getStudyFlowButtonServerSnapshot);
  const [hasOpened, setHasOpened] = useState(false);
  useEffect(() => {
    if (!state.ui.open) return;
    const frame = requestAnimationFrame(() => setHasOpened(true));
    return () => cancelAnimationFrame(frame);
  }, [state.ui.open]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.isComposing) return;
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        setStudyUI({ open: !getStudySnapshot().ui.open });
      } else if (event.key === "]" && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.repeat) {
        const target = event.target;
        if (target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.closest('[role="textbox"]'))) return;
        if (document.querySelector('dialog[open], [role="dialog"][aria-modal="true"]')) return;
        event.preventDefault();
        const wasOpen = getStudySnapshot().ui.open;
        setStudyUI({ open: !wasOpen });
        if (wasOpen) requestAnimationFrame(() => document.getElementById("study-flow-toggle")?.focus());
      } else if (event.key === "Escape" && getStudySnapshot().ui.open) {
        event.preventDefault();
        setStudyUI({ open: false });
        document.getElementById("study-flow-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <div className="study-flow-host" data-highlight-ignore>
    <StudyFlowSyncProvider />
    {buttonVisible ? <StudyFlowToggle open={state.ui.open} onToggle={() => setStudyUI({ open: !state.ui.open })} /> : null}
    <div className={"study-flow-drawer" + (state.ui.open ? " is-open" : "")} aria-hidden={!state.ui.open} inert={!state.ui.open}>
      {state.ui.open || hasOpened ? <StudyFlowPanel /> : null}
    </div>
  </div>;
}
