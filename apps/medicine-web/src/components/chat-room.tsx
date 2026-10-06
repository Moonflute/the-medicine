"use client";

import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Plus, Search, X } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";

const ChatRoomContext = createContext<{
  title: string | null; register: (title: string) => () => void;
  lobbyToolsTarget: HTMLDivElement | null; setLobbyToolsTarget: (target: HTMLDivElement | null) => void;
  toolsTarget: HTMLDivElement | null; setToolsTarget: (target: HTMLDivElement | null) => void;
  draftTarget: HTMLDivElement | null; setDraftTarget: (target: HTMLDivElement | null) => void;
  actionTarget: HTMLDivElement | null; setActionTarget: (target: HTMLDivElement | null) => void;
} | null>(null);

/** Slots move the existing controls; their handlers and component state stay intact. */
export function ChatRoomProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string | null>(null);
  const [lobbyToolsTarget, setLobbyToolsTarget] = useState<HTMLDivElement | null>(null);
  const [toolsTarget, setToolsTarget] = useState<HTMLDivElement | null>(null);
  const [draftTarget, setDraftTarget] = useState<HTMLDivElement | null>(null);
  const [actionTarget, setActionTarget] = useState<HTMLDivElement | null>(null);
  const register = useCallback((nextTitle: string) => {
    setTitle(nextTitle);
    return () => setTitle(current => current === nextTitle ? null : current);
  }, []);
  const value = useMemo(() => ({ title, register, lobbyToolsTarget, setLobbyToolsTarget, toolsTarget, setToolsTarget, draftTarget, setDraftTarget, actionTarget, setActionTarget }), [title, register, lobbyToolsTarget, toolsTarget, draftTarget, actionTarget]);
  return <ChatRoomContext.Provider value={value}>{children}</ChatRoomContext.Provider>;
}

export const useChatRoom = () => useContext(ChatRoomContext);

export function ChatDocumentTools({ title, children }: { title: string; children: ReactNode }) {
  const room = useChatRoom();
  const register = room?.register;
  useEffect(() => register?.(title), [register, title]);
  const content = <div className="document-toolbar-actions chat-attachment-actions" role="group" aria-label="문서 도구">{children}</div>;
  return <div data-document-toolbar data-highlight-ignore className="chat-document-anchor">
    {room?.toolsTarget ? createPortal(content, room.toolsTarget) : content}
  </div>;
}

export function ChatComposerContent({ area, children }: { area: "tools" | "draft" | "action"; children: ReactNode }) {
  const room = useChatRoom();
  const target = area === "tools" ? room?.toolsTarget : area === "draft" ? room?.draftTarget : room?.actionTarget;
  return target ? createPortal(children, target) : <div className={`chat-slot-fallback chat-slot-fallback--${area}`}>{children}</div>;
}

export function ChatOptionalTools({ children, className }: { children: ReactNode; className?: string }) {
  const { theme } = useAppTheme();
  if (theme === "chat") return <ChatComposerContent area="tools"><div className="document-toolbar-actions chat-attachment-actions">{children}</div></ChatComposerContent>;
  return className ? <div className={className}>{children}</div> : <>{children}</>;
}

export function ChatRoomComposer() {
  const { theme } = useAppTheme();
  const room = useChatRoom();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const dock = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => { if (!dock.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", escape); };
  }, [open]);
  if (theme !== "chat" || !room?.title) return null;
  const { setToolsTarget, setDraftTarget, setActionTarget } = room;
  return <div ref={dock} className="chat-room-composer" data-highlight-ignore>
    <div id={panelId} className="chat-tools-panel" hidden={!open} aria-label="대화방 도구" role="region" data-document-toolbar>
      <div className="chat-tools-panel-heading"><span>대화방 도구</span><button type="button" aria-label="대화방 도구 닫기" onClick={() => { setOpen(false); trigger.current?.focus(); }}><X size={18} /></button></div>
      <div ref={setToolsTarget} className="chat-tools-grid" />
    </div>
    <div className="chat-room-input-row">
      <button ref={trigger} type="button" className="chat-plus-button" aria-label="대화방 도구 열기" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)}><Plus size={25} /></button>
      <div ref={setDraftTarget} className="chat-compose-draft"><Link className="chat-compose-search" href="/search">대화 내용 찾기</Link></div>
      <div ref={setActionTarget} className="chat-compose-action"><Link className="chat-compose-search-icon" href="/search" aria-label="자료 검색"><Search size={19} /></Link></div>
    </div>
  </div>;
}
