"use client";

import { useState, type ReactNode, type RefObject } from "react";
import Link from "next/link";
import { Bookmark, ChevronLeft, Ellipsis, Menu, MessageCircle, MessagesSquare, Search, UsersRound, X } from "lucide-react";
import { AuthStatus } from "@/components/auth-status";
import { ChatRoomComposer, useChatRoom } from "@/components/chat-room";
import { skinDestination, skinDestinations } from "@/lib/skin-navigation";
import type { AppTheme } from "@/lib/themes";
import { SheetWorkbookProvider, SheetDocumentCanvas, useSheetWorkbook } from "@/components/sheet-workbook";

const chatDockIcons = [MessageCircle, UsersRound, MessagesSquare, Bookmark];

type SkinFrameProps = {
  theme: AppTheme; pathname: string; headerRef: RefObject<HTMLElement | null>;
  version: string; children: ReactNode; conversation: boolean; immersive: boolean;
  normalRail: ReactNode; normalHeader: ReactNode; normalFooter: ReactNode; normalExtras: ReactNode;
};

export function SkinAppFrame(props: SkinFrameProps) {
  return <SheetWorkbookProvider><SkinFrameContent {...props} /></SheetWorkbookProvider>;
}

function SkinFrameContent({ theme, pathname, headerRef, version, children, conversation, immersive, normalRail, normalHeader, normalFooter, normalExtras }: SkinFrameProps) {
  const { title: workbookTitle, parentHref: sheetParentHref, selection: sheetSelection, setTabsTarget } = useSheetWorkbook() ?? {};
  const [menuOpen, setMenuOpen] = useState(false);
  const room = useChatRoom();
  const inChatRoom = theme === "chat" && Boolean(room?.title);
  const isQbankLobby = theme === "chat" && /^\/review\/qbank\/?$/.test(pathname);
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  const current = skinDestination(pathname);
  const isHome = pathname === "/";
  const active = (href: string) => href === "/" ? isHome : href === current.href;
  const menu = <nav className="skin-drawer-links" aria-label="전체 메뉴">
    {skinDestinations.map((item, index) => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} onClick={() => setMenuOpen(false)}>
      <span className="skin-nav-marker" aria-hidden="true">{theme === "terminal" ? String(index + 1).padStart(2, "0") : theme === "sheet" ? String.fromCharCode(65 + index) : item.initials}</span>
      <span>{theme === "terminal" ? item.code : item.title}</span>
      <small>{theme === "terminal" ? item.short : item.summary}</small>
    </Link>)}
  </nav>;

  return <div className={special ? `skin-frame skin-frame--${theme}` : "mx-auto flex min-h-screen max-w-[1680px]"} data-conversation={conversation || inChatRoom} data-chat-room={inChatRoom} data-immersive={immersive}>
    <aside className={special ? "skin-desktop-rail" : "app-sidebar sticky top-0 hidden h-screen w-64 shrink-0 self-start border-r border-slate-200 bg-slate-950 px-4 py-5 text-slate-100 xl:block"}>
      {special ? <>
      <Link href="/" className="skin-rail-title">{theme === "chat" ? "채팅" : theme === "sheet" ? "통합문서" : "NOTES.EXE"}</Link>
      {menu}
      <span className="skin-rail-version">v {version}</span>
      </> : normalRail}
    </aside>
    <div className={special ? "skin-frame-body" : "flex min-h-screen min-w-0 flex-1 flex-col"}>
      <header ref={headerRef} className={special ? "app-header skin-app-header" : "app-header sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur"}>
        {special ? <>
        <div className="skin-header-line">
          {theme === "chat" ? <>
            {isHome ? <MessageCircle className="skin-header-icon" aria-hidden="true" /> : <Link href={isQbankLobby ? "/review" : current.href} className="skin-icon-button" aria-label="목록으로"><ChevronLeft size={20} /></Link>}
            <div className="skin-header-heading"><strong>{isHome ? "채팅" : inChatRoom ? room?.title : current.title}</strong>{isQbankLobby ? null : <small>{isHome ? "자료를 여는 대화" : conversation || inChatRoom ? "자료 대화방" : "대화방 목록"}</small>}</div>
          </> : theme === "sheet" ? <>
            <Link href="/" className="skin-workbook-icon" aria-label="홈으로">X</Link>
            <div className="skin-header-heading"><strong>{workbookTitle ? `${workbookTitle}.xlsx` : "업무 노트.xlsx"}</strong><small>{current.title}</small></div>
          </> : <>
            <Link href="/" className="skin-console-mark" aria-label="홈으로">&gt;_</Link>
            <div className="skin-header-heading"><strong>NOTES.EXE</strong><small>{current.code} / {conversation ? "READ" : "DIRECTORY"}</small></div>
          </>}
          <div className="skin-header-actions">
            {theme !== "chat" ? <AuthStatus /> : null}
            <Link href="/search" className="skin-icon-button" aria-label="검색"><Search size={18} /></Link>
            {isQbankLobby ? <div ref={room?.setLobbyToolsTarget} className="chat-qbank-header-tools" /> : <button type="button" className="skin-icon-button" aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>}
          </div>
        </div>
        {theme === "sheet" ? <>
          <nav className="skin-ribbon" aria-label="통합문서 도구"><Link href="/">파일</Link><Link href={current.href} aria-current="page">{isHome ? "홈" : current.short}</Link><Link href="/search">찾기</Link><Link href="/review">보관함</Link><span>읽기</span></nav>
          <div className="skin-formula"><span aria-label="선택한 셀">{sheetSelection?.address ?? (workbookTitle ? "B1" : "A1")}</span><i aria-hidden="true">ƒx</i><output title={sheetSelection?.text ?? workbookTitle ?? current.title}>{sheetSelection?.text ?? workbookTitle ?? (isHome ? "자료 목록" : current.title)}</output></div>
        </> : theme === "terminal" ? <div className="skin-console-path"><span>C:\NOTES\{current.code}&gt;</span><span>v{version} · UTF-8</span></div> : null}
        {menuOpen ? <div id="skin-app-menu" className="skin-app-menu">{menu}{theme === "chat" ? <div className="chat-account-tools"><AuthStatus /></div> : null}</div> : null}
        </> : normalHeader}
      </header>
      {!special ? normalExtras : null}
      <main key="main-content" data-personal-highlight-root className={special ? "app-main skin-page" : "app-main flex-1 px-4 py-6 sm:px-6 xl:px-8"}><SheetDocumentCanvas className={special ? "skin-page-content" : "mx-auto max-w-7xl"}>{children}</SheetDocumentCanvas><ChatRoomComposer /></main>
      {special && theme === "chat" ? <nav className="skin-chat-dock app-bottom-nav" aria-label="주 메뉴" hidden={inChatRoom}>
        {[skinDestinations[0], skinDestinations[1], skinDestinations[2], skinDestinations[6]].map((item, index) => { const Icon = chatDockIcons[index]; return <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}><span className="skin-dock-glyph" aria-hidden="true"><Icon size={23} /></span><span>{item.short}</span></Link>; })}
        <button type="button" aria-label="전체 메뉴" aria-expanded={menuOpen} aria-controls="skin-app-menu" onClick={() => setMenuOpen(value => !value)}><span className="skin-dock-glyph" aria-hidden="true"><Ellipsis size={24} /></span><span>더보기</span></button>
      </nav> : special && theme === "sheet" ? workbookTitle ? <nav className="skin-workbook-tabs sheet-document-tabs app-bottom-nav" aria-label="문서 시트 탐색">
        <Link href={sheetParentHref ?? current.href} aria-label="자료 목록으로" title="자료 목록으로">‹</Link><div ref={setTabsTarget} className="sheet-document-tab-target" />
      </nav> : <nav className="skin-workbook-tabs app-bottom-nav" aria-label="자료 시트">
        {skinDestinations.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.href === "/" ? "목록" : item.short}</Link>)}
      </nav> : special ? <nav className="skin-console-dock app-bottom-nav" aria-label="주 메뉴">
        <Link href="/">[HOME]</Link><Link href="/search">[FIND]</Link><Link href="/review/qbank">[Q]</Link><button type="button" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>[MENU]</button>
      </nav> : <nav className="app-bottom-nav sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur xl:hidden" aria-label="주 메뉴">{normalFooter}</nav>}
    </div>
  </div>;
}
