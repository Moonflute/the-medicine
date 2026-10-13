"use client";

import dynamic from "next/dynamic";
import { useEffect, useSyncExternalStore } from "react";
import { ListTree } from "lucide-react";
import { StudyFlowSyncProvider } from "@/components/study-flow-sync-provider";
import { getStudyServerSnapshot, getStudySnapshot, setStudyUI, subscribeStudyFlow } from "@/lib/study-flow-store";
import { getStudyFlowButtonServerSnapshot, getStudyFlowButtonVisible, subscribeStudyFlowButton } from "@/lib/study-flow-preferences";

const StudyFlowPanel = dynamic(() => import("./study-flow-panel").then(module => module.StudyFlowPanel), {
  ssr: false,
  loading: () => <aside className="study-flow-panel"><p className="study-flow-loading">학습 Flow를 불러오는 중…</p></aside>,
});

export function StudyFlowHost() {
  const state = useSyncExternalStore(subscribeStudyFlow, getStudySnapshot, getStudyServerSnapshot);
  const buttonVisible = useSyncExternalStore(subscribeStudyFlowButton, getStudyFlowButtonVisible, getStudyFlowButtonServerSnapshot);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.isComposing) return;
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        setStudyUI({ open: !getStudySnapshot().ui.open });
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
    {buttonVisible ? <button id="study-flow-toggle" type="button" className={"study-flow-toggle" + (state.ui.open ? " is-open" : "")}
      aria-label="학습 Flow 열기" aria-expanded={state.ui.open} aria-controls="study-flow-panel"
      title="학습 Flow · Ctrl/⌘ Shift L" onClick={() => setStudyUI({ open: !state.ui.open })}>
      <ListTree size={19} /><span>Flow</span>
    </button> : null}
    {state.ui.open ? <StudyFlowPanel /> : null}
  </div>;
}
