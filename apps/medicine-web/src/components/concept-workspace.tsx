"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { Bookmark, ChevronDown, ChevronLeft, Code2, Compass, Files, FileText, Folder, Home, Inbox, ListChecks, Mail, Menu, Search, Send, Star, X } from "lucide-react";
import { skinDestination, skinDestinations } from "@/lib/skin-navigation";
import { useAppTheme } from "@/components/theme-provider";
import { isConceptTheme, type ConceptTheme } from "@/lib/themes";

type OutlineItem = { id: string; title: string };
type DocumentIdentity = { title: string; category: string };
const WorkspaceContext = createContext<{
  document: DocumentIdentity | null;
  setDocument: React.Dispatch<React.SetStateAction<DocumentIdentity | null>>;
  outline: OutlineItem[];
  setOutline: React.Dispatch<React.SetStateAction<OutlineItem[]>>;
} | null>(null);

/** Stable across themes: the page and its learning state never move to another shell. */
export function ConceptWorkspaceProvider({ children }: { children: ReactNode }) {
  const [document, setDocument] = useState<DocumentIdentity | null>(null);
  const [outline, setOutline] = useState<OutlineItem[]>([]);
  const value = useMemo(() => ({ document, setDocument, outline, setOutline }), [document, outline]);
  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export const useConceptWorkspace = () => useContext(WorkspaceContext);

export function useConceptDocument(title: string, category: string) {
  const setDocument = useConceptWorkspace()?.setDocument;
  const { theme } = useAppTheme();
  useEffect(() => {
    if (!isConceptTheme(theme) || !title || !setDocument) return;
    const identity = { title, category };
    setDocument(identity);
    return () => setDocument(previous => previous === identity ? null : previous);
  }, [title, category, theme, setDocument]);
}

export function openConceptSection(id: string) {
  window.dispatchEvent(new CustomEvent("medicine:document-section", { detail: id }));
}

const destinationIcons = [Home, FileText, Folder, FileText, ListChecks, FileText, Star, Mail];
const mailNames = ["받은메일함", "증상 자료", "분과별 자료", "약물 자료", "검사 자료", "술기 자료", "중요 자료", "질문 메일함"];

export function ConceptNavigation({ theme, pathname, onNavigate }: { theme: ConceptTheme; pathname: string; onNavigate?: () => void }) {
  const current = skinDestination(pathname);
  const workspace = useConceptWorkspace();
  return <div className={`concept-navigation concept-navigation--${theme}`}>
    <div className="concept-navigation-caption">{theme === "mail" ? "내 메일함" : theme === "editor" ? "EXPLORER" : "둘러보기"}</div>
    {theme === "editor" ? <div className="concept-project-name"><ChevronDown size={14} /> THE MEDICINE</div> : null}
    <nav aria-label="자료 탐색">{skinDestinations.map((item, index) => {
      const Icon = theme === "mail" ? index === 0 ? Inbox : index === 6 ? Star : Folder : destinationIcons[index];
      return <Link key={item.href} href={item.href} onClick={onNavigate} aria-current={(item.href === "/" ? pathname === "/" : current.href === item.href) ? "page" : undefined}>
        <Icon size={18} aria-hidden="true" /><span>{theme === "mail" ? mailNames[index] : theme === "editor" ? item.code.toLowerCase() : item.title}</span>{theme === "editor" ? <small>/</small> : null}
      </Link>;
    })}<Link href="/atlas" onClick={onNavigate}><Files size={18} aria-hidden="true" /><span>{theme === "editor" ? "atlas" : "인체도감"}</span>{theme === "editor" ? <small>/</small> : null}</Link></nav>
    {theme === "editor" && workspace?.outline.length ? <nav className="concept-outline" aria-label="문서 개요"><div className="concept-navigation-caption">OUTLINE</div>{workspace.outline.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => { openConceptSection(item.id); onNavigate?.(); }}><Code2 size={13} /><span>{item.title}</span></a>)}</nav> : null}
  </div>;
}

export function ConceptHeader({ theme, pathname, menuOpen, onMenu }: { theme: ConceptTheme; pathname: string; menuOpen: boolean; onMenu: () => void }) {
  const current = skinDestination(pathname);
  const document = useConceptWorkspace()?.document;
  const isHome = pathname === "/";
  return <>
    <div className="concept-header-line">
      {theme === "mail" ? <><button type="button" className="skin-icon-button" onClick={onMenu} aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button><Link className="concept-mail-brand" href="/" aria-label="홈으로"><b aria-hidden="true">N</b><span>메일</span></Link><span className="concept-header-location">{isHome ? "받은메일함" : document ? "메일 읽기" : current.title}</span></> : theme === "social" ? <><Link className="concept-social-brand" href="/" aria-label="홈으로">medstagram</Link><span className="concept-header-location">{isHome ? "" : current.short}</span></> : <><button type="button" className="skin-icon-button" onClick={onMenu} aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Files size={20} />}</button><Code2 size={19} className="concept-editor-logo" aria-hidden="true" /><div className="concept-command-search"><Link href="/search"><Search size={13} /><span>파일 및 자료 검색</span><kbd>⌘ K</kbd></Link></div></>}
      <div className="concept-header-actions"><Link href="/search" className="skin-icon-button" aria-label="검색"><Search size={theme === "social" ? 23 : 21} /></Link>{theme === "social" ? <><Link href="/review/qbank" className="skin-icon-button" aria-label="문제 피드"><Send size={23} /></Link><button type="button" className="skin-icon-button" onClick={onMenu} aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></> : null}</div>
    </div>
    {theme === "mail" ? <nav className="concept-mail-folders" aria-label="즐겨찾는 메일함"><Link href="/" aria-current={isHome ? "page" : undefined}>전체 자료</Link><Link href="/specialties" aria-current={current.href === "/specialties" ? "page" : undefined}>분과별</Link><Link href="/review">중요</Link><Link href="/review/qbank">질문</Link></nav> : theme === "editor" ? <div className="concept-editor-tabs"><Link href={document ? current.href : "/"} aria-label={document ? "자료 목록으로" : "홈으로"}><ChevronLeft size={14} /></Link><span className="concept-editor-file"><FileText size={15} /><span>{document?.title ?? (isHome ? "README" : current.title)}.md</span></span><span className="concept-editor-file-state" title="읽기 모드">RO</span></div> : null}
  </>;
}

export function ConceptFooter({ theme, pathname, menuOpen, onMenu, version }: { theme: ConceptTheme; pathname: string; menuOpen: boolean; onMenu: () => void; version: string }) {
  const current = skinDestination(pathname);
  const items = theme === "social" ? [
    { href: "/", label: "홈", icon: Home }, { href: "/search", label: "탐색", icon: Compass }, { href: "/review/qbank", label: "문제", icon: ListChecks }, { href: "/review", label: "저장", icon: Bookmark },
  ] : theme === "mail" ? [
    { href: "/", label: "메일함", icon: Inbox }, { href: "/search", label: "검색", icon: Search }, { href: "/review", label: "중요", icon: Star }, { href: "/review/qbank", label: "질문", icon: Mail },
  ] : [
    { href: "/", label: "Files", icon: Files }, { href: "/search", label: "Search", icon: Search }, { href: "/review/qbank", label: "Run", icon: Code2 }, { href: "/review", label: "Saved", icon: Bookmark },
  ];
  return <nav className={`concept-dock concept-dock--${theme} app-bottom-nav`} aria-label="주 메뉴">
    {items.map(item => { const Icon = item.icon; const active = item.href === "/" ? pathname === "/" : item.href === "/search" ? pathname.startsWith("/search") : current.href === item.href; return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} aria-label={item.label}><Icon size={theme === "social" ? 25 : 19} /><span>{item.label}</span></Link>; })}
    <button type="button" aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={onMenu}><Menu size={21} /><span>{theme === "editor" ? "More" : "더보기"}</span></button>
    {theme === "editor" ? <div className="concept-editor-status"><span>✓ {current.code.toLowerCase()} · 읽기</span><span>UTF-8 · Markdown · v{version}</span></div> : null}
  </nav>;
}
