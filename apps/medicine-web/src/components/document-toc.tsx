"use client";

import { useEffect, useRef, useState } from "react";
import { useSkinTheme } from "@/components/theme-provider";
import { ArrowUp } from "lucide-react";
import { SkinDocumentNotice } from "@/components/skin-document";
import { ChatComposerContent } from "@/components/chat-room";
import { isConceptTheme } from "@/lib/themes";
import { openConceptSection } from "@/components/concept-workspace";
import { ChevronDown, Code2, Paperclip } from "lucide-react";

export function DocumentToc({ id, items }: { id: string; items: { id: string; title: string }[] }) {
  const { theme } = useSkinTheme();
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  const navRef = useRef<HTMLElement>(null);
  const [pastToc, setPastToc] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPastToc(!entry.isIntersecting && entry.boundingClientRect.bottom <= 64);
    }, { rootMargin: "-64px 0px 0px 0px" });
    observer.observe(nav);
    return () => observer.disconnect();
  }, [id, theme]);

  if (theme === "sheet") return null;
  if (isConceptTheme(theme)) return <details className={`concept-document-toc concept-document-toc--${theme}`}><summary>{theme === "mail" ? <Paperclip size={14} /> : theme === "editor" ? <Code2 size={14} /> : <ChevronDown size={14} />}<span>{theme === "mail" ? "본문 목차" : theme === "social" ? "게시물 문단" : "OUTLINE"} · {items.length}</span></summary><nav ref={navRef} id={id} tabIndex={-1} aria-label="문서 목차">{items.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => openConceptSection(item.id)}>{item.title}</a>)}</nav></details>;
  if (theme === "chat") return <>
    <SkinDocumentNotice title="대화방 목차"><nav ref={navRef} id={id} tabIndex={-1} aria-label="문서 목차" className="chat-notice-toc">{items.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => window.dispatchEvent(new CustomEvent("medicine:document-section", { detail: item.id }))}>{item.title}</a>)}</nav></SkinDocumentNotice>
    <ChatComposerContent area="tools"><div className="document-toolbar-actions chat-attachment-actions"><a href={`#${id}`} aria-label="목차로 돌아가기" title="목차"><ArrowUp size={22} /></a></div></ChatComposerContent>
  </>;

  return <>
    <nav ref={navRef} id={id} tabIndex={-1} aria-label="문서 목차" className={special ? `skin-document-toc skin-document-toc--${theme}` : "scroll-mt-20 border-b border-slate-200 px-5 py-3 focus-visible:outline-teal-600 sm:px-6"}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs leading-6">
        <span className="font-semibold text-slate-500">목차</span>
        {items.map((item, index) => <a key={item.id} href={`#${item.id}`} onClick={() => window.dispatchEvent(new CustomEvent("medicine:document-section", { detail: item.id }))} className="rounded-sm text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-600">{theme === "terminal" ? `[${index + 1}] ` : ""}{item.title}</a>)}
      </div>
    </nav>
    {pastToc && <a href={`#${id}`} aria-label="목차로 돌아가기" title="목차로 돌아가기" className="fixed bottom-32 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-teal-600 xl:bottom-[4.5rem] xl:right-6"><ArrowUp className="h-4 w-4" /></a>}
  </>;
}
