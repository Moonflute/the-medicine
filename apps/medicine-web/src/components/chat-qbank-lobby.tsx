"use client";

import Link from "next/link";
import { useId, useRef, useState, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { BarChart3, Bookmark, ChevronLeft, Ellipsis, Plus, RotateCcw, X } from "lucide-react";
import { useChatRoom } from "@/components/chat-room";

type Bank = "theory" | "clinical" | "practice";
type Conversation = {
  id: string; title: string; current: number; total: number; answers: number; error?: ReactNode;
};
type DialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>; title: string; children: ReactNode; picker?: boolean;
};

function ChatQbankDialog({ dialogRef, title, children, picker = false }: DialogProps) {
  const titleId = useId();
  return <dialog ref={dialogRef} className={picker ? "chat-qbank-dialog chat-qbank-dialog--picker" : "chat-qbank-dialog"} aria-labelledby={titleId} onClick={(event) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
  }}>
    <div className="chat-qbank-dialog-content">
      <header className="chat-qbank-dialog-header">
        <button type="button" className="skin-icon-button" aria-label={`${title} 닫기`} autoFocus onClick={() => dialogRef.current?.close()}>{picker ? <ChevronLeft size={21} /> : <X size={20} />}</button>
        <h2 id={titleId}>{title}</h2>
      </header>
      {children}
    </div>
  </dialog>;
}

export function ChatQbankLobby({ banks, bank, onChooseBank, conversations, syncStatus, endingSessionId, onEndSession, stats, total, quickCount, children }: {
  banks: Array<{ id: Bank; label: string; selected: number }>; bank: Bank; onChooseBank: (bank: Bank) => void;
  conversations: Conversation[]; syncStatus: ReactNode; endingSessionId: string;
  onEndSession: (id: string) => void; stats: { attempted: number; wrong: number; bookmarks: number };
  total: number; quickCount: string; children: ReactNode;
}) {
  const room = useChatRoom();
  const picker = useRef<HTMLDialogElement>(null);
  const more = useRef<HTMLDialogElement>(null);
  const unattempted = useRef<HTMLDialogElement>(null);
  const [unattemptedCount, setUnattemptedCount] = useState("10");
  const validUnattemptedCount = /^\d+$/.test(unattemptedCount) && Number(unattemptedCount) >= 1 && Number(unattemptedCount) <= 100;
  const safeQuickCount = /^\d+$/.test(quickCount) && Number(quickCount) >= 1 && Number(quickCount) <= 100 ? quickCount : "10";
  const openPicker = (next: Bank = bank) => {
    picker.current?.showModal();
    onChooseBank(next);
  };
  const tools = <>
    <button type="button" className="skin-icon-button" aria-label="새 문제 대화" aria-haspopup="dialog" onClick={() => openPicker()}><Plus size={23} /></button>
    <button type="button" className="skin-icon-button" aria-label="문제 대화 더보기" aria-haspopup="dialog" onClick={() => more.current?.showModal()}><Ellipsis size={23} /></button>
  </>;
  return <div className="chat-qbank-lobby">
    {room?.lobbyToolsTarget ? createPortal(tools, room.lobbyToolsTarget) : <div className="chat-qbank-toolbar">{tools}</div>}
    <nav className="chat-qbank-bank-shortcuts" aria-label="새 대화 문제 종류">
      {banks.map((item) => <button key={item.id} type="button" aria-haspopup="dialog" onClick={() => openPicker(item.id)}>{item.label}{item.selected > 0 ? <small>{item.selected.toLocaleString()}</small> : null}</button>)}
    </nav>

    <section className="chat-qbank-conversations" aria-labelledby="chat-qbank-active-title">
      <div className="chat-qbank-list-heading"><h1 id="chat-qbank-active-title">진행 중인 대화</h1><span>{conversations.length}</span></div>
      {syncStatus}
      {conversations.length ? conversations.map((conversation) => <article key={conversation.id} className="chat-qbank-conversation">
        <div className="chat-qbank-conversation-row">
          <Link href={`/review/qbank/session?session=${encodeURIComponent(conversation.id)}`} className="chat-qbank-contact">
            <span className="skin-contact-avatar" aria-hidden="true" />
            <span className="chat-qbank-contact-copy"><strong>{conversation.title}</strong><span>{conversation.current}/{conversation.total}번 · 답변 {conversation.answers}개</span></span>
            <span className="chat-qbank-unread" aria-label={`남은 답변 ${Math.max(0, conversation.total - conversation.answers)}개`}>{Math.max(0, conversation.total - conversation.answers)}</span>
          </Link>
          <details className="chat-qbank-session-menu">
            <summary aria-label={`${conversation.title} 대화 관리`}><Ellipsis size={19} /></summary>
            <div><button type="button" disabled={Boolean(endingSessionId)} onClick={() => onEndSession(conversation.id)}>{endingSessionId === conversation.id ? "종료 중…" : "대화 종료"}</button></div>
          </details>
        </div>
        {conversation.error}
      </article>) : <div className="chat-qbank-empty"><p>아직 진행 중인 대화가 없어요.</p><button type="button" onClick={() => openPicker()}>새 문제 대화 시작하기</button></div>}
    </section>

    <section className="chat-qbank-conversations" aria-labelledby="chat-qbank-again-title">
      <div className="chat-qbank-list-heading"><h2 id="chat-qbank-again-title">다시 대화하기</h2></div>
      <button type="button" className="chat-qbank-contact" aria-haspopup="dialog" onClick={() => unattempted.current?.showModal()}>
        <span className="chat-qbank-utility-avatar" aria-hidden="true"><RotateCcw size={23} /></span>
        <span className="chat-qbank-contact-copy"><strong>미풀이 문제</strong><span>아직 답하지 않은 문제와 새 대화</span></span>
      </button>
      <Link href={`/review/qbank/session?mode=wrong&count=${safeQuickCount}`} className="chat-qbank-contact">
        <span className="chat-qbank-utility-avatar" aria-hidden="true"><RotateCcw size={23} /></span>
        <span className="chat-qbank-contact-copy"><strong>오답 노트</strong><span>틀린 문제 다시 살펴보기</span></span><span className="chat-qbank-unread">{stats.wrong.toLocaleString()}</span>
      </Link>
      <Link href={`/review/qbank/session?mode=bookmarks&count=${safeQuickCount}`} className="chat-qbank-contact">
        <span className="chat-qbank-utility-avatar" aria-hidden="true"><Bookmark size={22} /></span>
        <span className="chat-qbank-contact-copy"><strong>저장한 문제</strong><span>북마크한 문제 이어서 보기</span></span><span className="chat-qbank-unread">{stats.bookmarks.toLocaleString()}</span>
      </Link>
    </section>

    <ChatQbankDialog dialogRef={picker} title="새 문제 대화" picker>{children}</ChatQbankDialog>
    <ChatQbankDialog dialogRef={more} title="문제 대화 더보기">
      <dl className="chat-qbank-stats"><div><dt>전체 문제</dt><dd>{total.toLocaleString()}</dd></div><div><dt>풀이 완료</dt><dd>{stats.attempted.toLocaleString()}</dd></div><div><dt>오답</dt><dd>{stats.wrong.toLocaleString()}</dd></div></dl>
      <Link href="/review/qbank/stats" className="chat-qbank-menu-link"><BarChart3 size={20} />학습 통계</Link>
      <Link href="/review" className="chat-qbank-menu-link"><Bookmark size={20} />복습 목록</Link>
    </ChatQbankDialog>
    <ChatQbankDialog dialogRef={unattempted} title="미풀이 문제">
      <div className="chat-qbank-unattempted">
        <p>아직 답하지 않은 문제를 무작위로 골라요.</p>
        <label>문항 수<input type="number" min="1" max="100" step="1" inputMode="numeric" value={unattemptedCount} onChange={(event) => setUnattemptedCount(event.target.value)} aria-describedby="chat-unattempted-help" /></label>
        <p id="chat-unattempted-help">{validUnattemptedCount ? "한 번에 최대 100문항까지 시작할 수 있어요." : "1~100 사이의 정수를 입력하세요."}</p>
        {validUnattemptedCount ? <Link href={`/review/qbank/session?mode=unattempted&count=${encodeURIComponent(unattemptedCount)}`} className="chat-qbank-start">대화 시작</Link> : <button type="button" disabled className="chat-qbank-start">문항 수를 확인하세요</button>}
      </div>
    </ChatQbankDialog>
  </div>;
}
