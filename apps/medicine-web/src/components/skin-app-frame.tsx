"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import Link from "next/link";
import { Bookmark, ChevronLeft, Ellipsis, Menu, MessageCircle, MessagesSquare, Search, UsersRound, X } from "lucide-react";
import { AuthStatus } from "@/components/auth-status";
import { ChatRoomComposer, useChatRoom } from "@/components/chat-room";
import { skinDestination, skinDestinations } from "@/lib/skin-navigation";
import { isConceptTheme, isSpecialTheme, type ThemeLayout } from "@/lib/themes";
import { ConceptWorkspaceProvider, ConceptDesktopRail, ConceptHeader, ConceptNavigation, ConceptFooter } from "@/components/concept-workspace";
import { SheetWorkbookProvider, SheetDocumentCanvas, useSheetWorkbook } from "@/components/sheet-workbook";

const chatDockIcons = [MessageCircle, UsersRound, MessagesSquare, Bookmark];

type SkinFrameProps = {
  theme: ThemeLayout; pathname: string; headerRef: RefObject<HTMLElement | null>;
  version: string; children: ReactNode; conversation: boolean; immersive: boolean;
  normalRail: ReactNode; normalHeader: ReactNode; normalFooter: ReactNode; normalExtras: ReactNode;
};

export function SkinAppFrame(props: SkinFrameProps) {
  return <ConceptWorkspaceProvider><SheetWorkbookProvider><SkinFrameContent {...props} /></SheetWorkbookProvider></ConceptWorkspaceProvider>;
}

function SkinFrameContent({ theme, pathname, headerRef, version, children, conversation, immersive, normalRail, normalHeader, normalFooter, normalExtras }: SkinFrameProps) {
  const { title: workbookTitle, parentHref: sheetParentHref, selection: sheetSelection, setTabsTarget } = useSheetWorkbook() ?? {};
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTrigger = useRef<HTMLElement | null>(null);
  const room = useChatRoom();
  const inChatRoom = theme === "chat" && Boolean(room?.title);
  const isQbankLobby = theme === "chat" && /^\/review\/qbank\/?$/.test(pathname);
  const special = isSpecialTheme(theme);
  const concept = isConceptTheme(theme);
  const current = skinDestination(pathname);
  const isHome = pathname === "/";
  const active = (href: string) => href === "/" ? isHome : href === current.href;
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => {
    if (!menuOpen && document.activeElement instanceof HTMLElement) menuTrigger.current = document.activeElement;
    setMenuOpen(value => !value);
  };
  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || event.target.closest('[aria-controls="skin-app-menu"]')) return;
      if (!menuRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuTrigger.current?.focus();
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", escape); };
  }, [menuOpen]);
  const menuTitle = theme === "sheet" ? "파일 · 자료 시트" : theme === "terminal" ? "DIRECTORY" : theme === "mail" ? "메일함" : theme === "editor" ? "Go to File" : "더보기";
  const menu = <nav className="skin-drawer-links" aria-label="전체 메뉴">
    {skinDestinations.map((item, index) => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} onClick={() => setMenuOpen(false)}>
      <span className="skin-nav-marker" aria-hidden="true">{theme === "terminal" ? String(index + 1).padStart(2, "0") : theme === "sheet" ? String.fromCharCode(65 + index) : item.initials}</span>
      <span>{theme === "terminal" ? item.code : item.title}</span>
      <small>{theme === "terminal" ? item.short : item.summary}</small>
    </Link>)}
  </nav>;

  return <div className={special ? `skin-frame skin-frame--${theme}` : "mx-auto flex min-h-screen max-w-[1680px]"} data-conversation={conversation || inChatRoom} data-chat-room={inChatRoom} data-immersive={immersive}>
    {!special || theme === "chat" || concept ? <aside className={special ? `skin-desktop-rail skin-desktop-rail--${theme}` : "app-sidebar sticky top-0 hidden h-screen w-64 shrink-0 self-start border-r border-slate-200 bg-slate-950 px-4 py-5 text-slate-100 xl:block"} aria-label={special ? theme === "editor" ? "파일 탐색기" : theme === "mail" ? "메일 폴더" : "앱 탐색" : undefined}>
      {concept ? <ConceptDesktopRail theme={theme} pathname={pathname} menuOpen={menuOpen} onMenu={toggleMenu} onNavigate={closeMenu} /> : theme === "chat" ? <>
        <Link href="/" className="chat-desktop-brand" aria-label="홈으로" onClick={closeMenu}><MessageCircle size={27} aria-hidden="true" /></Link>
        <nav className="chat-desktop-navigation" aria-label="카톡 메뉴">
          {[skinDestinations[1], skinDestinations[0], skinDestinations[2], skinDestinations[6]].map((item, index) => { const Icon = [UsersRound, MessageCircle, MessagesSquare, Bookmark][index]; return <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} aria-label={item.short} title={item.title} onClick={closeMenu}><Icon size={25} aria-hidden="true" /></Link>; })}
          <Link href="/search" aria-label="검색" title="검색" onClick={closeMenu}><Search size={24} aria-hidden="true" /></Link>
        </nav>
        <button type="button" className="chat-desktop-more" aria-label="전체 메뉴" title="더보기" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={toggleMenu}><Ellipsis size={26} aria-hidden="true" /></button>
      </> : normalRail}
    </aside> : null}
    <div className={special ? "skin-frame-body" : "flex min-h-screen min-w-0 flex-1 flex-col"}>
      <header ref={headerRef} className={special ? "app-header skin-app-header" : "app-header sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur"}>
        {special ? <>
        {concept ? <ConceptHeader theme={theme} pathname={pathname} menuOpen={menuOpen} onMenu={toggleMenu} /> : <>
        <div className="skin-header-line">
          {theme === "chat" ? <>
            {isHome ? <MessageCircle className="skin-header-icon" aria-hidden="true" /> : <Link href={isQbankLobby ? "/review" : current.href} className="skin-icon-button" aria-label="목록으로"><ChevronLeft size={20} /></Link>}
            <div className="skin-header-heading"><strong>{isHome ? "채팅" : inChatRoom ? room?.title : current.title}</strong>{isQbankLobby ? null : <small>{isHome ? "자료를 여는 대화" : conversation || inChatRoom ? "자료 대화방" : "대화방 목록"}</small>}</div>
          </> : theme === "sheet" ? <>
            <Link href="/" className="skin-workbook-icon" aria-label="홈으로">X</Link>
            <div className="skin-header-heading"><strong>{workbookTitle ? `${workbookTitle}.xlsx` : "업무 노트.xlsx"}</strong><small>{current.title}</small></div>
            <Link href="/search" className="sheet-command-search"><Search size={15} aria-hidden="true" /><span>시트 및 자료 검색</span></Link>
          </> : <>
            <Link href="/" className="skin-console-mark" aria-label="홈으로">&gt;_</Link>
            <div className="skin-header-heading"><strong>NOTES.EXE</strong><small>{current.code} / {conversation ? "READ" : "DIRECTORY"}</small></div>
          </>}
          <div className="skin-header-actions">
            {theme !== "chat" ? <AuthStatus /> : null}
            <Link href="/search" className="skin-icon-button" aria-label="검색"><Search size={18} /></Link>
            {isQbankLobby ? <div ref={room?.setLobbyToolsTarget} className="chat-qbank-header-tools" /> : <button type="button" className={theme === "terminal" ? "skin-console-menu-toggle" : "skin-icon-button"} aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={toggleMenu}>{theme === "terminal" ? "[MENU]" : menuOpen ? <X size={20} /> : <Menu size={20} />}</button>}
          </div>
        </div>
        {theme === "sheet" ? <>
          <nav className="skin-ribbon" aria-label="통합문서 도구"><button type="button" aria-label="파일 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={toggleMenu}>파일</button><Link href={current.href} aria-current="page">{isHome ? "홈" : current.short}</Link><Link href="/search">찾기</Link><Link href="/review">보관함</Link><span>읽기</span></nav>
          <div className="skin-formula"><span aria-label="선택한 셀">{sheetSelection?.address ?? (workbookTitle ? "B1" : "A1")}</span><i aria-hidden="true">ƒx</i><output title={sheetSelection?.text ?? workbookTitle ?? current.title}>{sheetSelection?.text ?? workbookTitle ?? (isHome ? "자료 목록" : current.title)}</output></div>
        </> : theme === "terminal" ? <><nav className="skin-console-menubar" aria-label="콘솔 명령"><button type="button" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={toggleMenu}>Directory</button><Link href="/search">Find</Link><Link href="/review">Bookmarks</Link><Link href="/review/qbank">Questions</Link></nav><div className="skin-console-path"><span>C:\NOTES\{current.code}&gt;</span><span>v{version} · UTF-8</span></div></> : null}
        </>}
        {menuOpen ? <div ref={menuRef} id="skin-app-menu" className={`skin-app-menu skin-app-menu--${theme}`}><div className="skin-menu-heading"><strong>{menuTitle}</strong><button type="button" className="skin-icon-button" aria-label="전체 메뉴 닫기" onClick={() => { closeMenu(); menuTrigger.current?.focus(); }}><X size={18} aria-hidden="true" /></button></div>{concept ? <ConceptNavigation theme={theme} pathname={pathname} onNavigate={closeMenu} /> : menu}{theme === "chat" || concept ? <div className="chat-account-tools"><AuthStatus /></div> : null}</div> : null}
        </> : normalHeader}
      </header>
      {!special ? normalExtras : null}
      <main key="main-content" data-personal-highlight-root className={special ? "app-main skin-page" : "app-main flex-1 px-4 py-6 sm:px-6 xl:px-8"}><SheetDocumentCanvas className={special ? "skin-page-content" : "mx-auto max-w-7xl"}>{children}</SheetDocumentCanvas><ChatRoomComposer /></main>
      {concept ? <ConceptFooter theme={theme} pathname={pathname} menuOpen={menuOpen} onMenu={toggleMenu} version={version} /> : special && theme === "chat" ? <nav className="skin-chat-dock app-bottom-nav" aria-label="주 메뉴" hidden={inChatRoom}>
        {[skinDestinations[0], skinDestinations[1], skinDestinations[2], skinDestinations[6]].map((item, index) => { const Icon = chatDockIcons[index]; return <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}><span className="skin-dock-glyph" aria-hidden="true"><Icon size={23} /></span><span>{item.short}</span></Link>; })}
        <button type="button" aria-label="전체 메뉴" aria-expanded={menuOpen} aria-controls="skin-app-menu" onClick={toggleMenu}><span className="skin-dock-glyph" aria-hidden="true"><Ellipsis size={24} /></span><span>더보기</span></button>
      </nav> : special && theme === "sheet" ? workbookTitle ? <nav className="skin-workbook-tabs sheet-document-tabs app-bottom-nav" aria-label="문서 시트 탐색">
        <Link href={sheetParentHref ?? current.href} aria-label="자료 목록으로" title="자료 목록으로">‹</Link><button type="button" className="sheet-tabs-menu" aria-label="시트 목록" title="시트 목록" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={toggleMenu}><Menu size={16} aria-hidden="true" /></button><div ref={setTabsTarget} className="sheet-document-tab-target" /><span className="sheet-workbook-status">읽기 모드</span>
      </nav> : <nav className="skin-workbook-tabs app-bottom-nav" aria-label="자료 시트">
        <button type="button" className="sheet-tabs-menu" aria-label="시트 목록" title="시트 목록" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={toggleMenu}><Menu size={16} aria-hidden="true" /></button>{skinDestinations.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.href === "/" ? "목록" : item.short}</Link>)}<span className="sheet-workbook-status">읽기 모드</span>
      </nav> : special ? <nav className="skin-console-dock app-bottom-nav" aria-label="주 메뉴">
        <Link href="/">[DIR]</Link><Link href="/search">[FIND]</Link><Link href="/review/qbank">[QBANK]</Link><button type="button" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={toggleMenu}>[MENU]</button>
      </nav> : <nav className="app-bottom-nav sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur xl:hidden" aria-label="주 메뉴">{normalFooter}</nav>}
    </div>
  </div>;
}
