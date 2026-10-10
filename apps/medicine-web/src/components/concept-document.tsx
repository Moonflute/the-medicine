"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, Code2, FileText, Mail, MoreHorizontal, Paperclip } from "lucide-react";
import type { ConceptTheme } from "@/lib/themes";
import { isConceptTheme } from "@/lib/themes";
import { useSkinTheme } from "@/components/theme-provider";

export function ConceptMetadata({ children }: { children: ReactNode }) {
  const { theme } = useSkinTheme();
  if (!isConceptTheme(theme)) return <>{children}</>;
  return <details className={`concept-metadata concept-metadata--${theme}`}><summary>{theme === "social" ? "게시물 정보" : theme === "editor" ? "document.meta" : "자료 정보"}<ChevronDown size={12} /></summary><div>{children}</div></details>;
}

export function ConceptDocumentSummary({ theme, children }: { theme: ConceptTheme; children: ReactNode }) {
  return <details className={`concept-document-summary concept-document-summary--${theme}`}><summary>{theme === "editor" ? <Code2 size={14} /> : theme === "mail" ? <Paperclip size={14} /> : <FileText size={14} />}<span>{theme === "editor" ? "quick_reference" : theme === "social" ? "게시물 요약" : "요약 보기"}</span><ChevronDown size={13} /></summary><div>{children}</div></details>;
}

export function ConceptProfile({ name, detail, children }: { name: string; detail: string; children?: ReactNode }) {
  return <div className="concept-post-profile"><span className="concept-profile-avatar" aria-hidden="true">{name.replace(/^\d+\s*/, "").slice(0, 2) || "M"}</span><span><strong>{name}</strong><small>{detail}</small></span>{children}</div>;
}

export function ConceptDocumentToolbar({ theme, title, children, className }: { theme: ConceptTheme; title: string; children: ReactNode; className: string }) {
  const [expanded, setExpanded] = useState(false);
  return <div data-document-toolbar data-highlight-ignore className={`document-toolbar concept-document-toolbar concept-document-toolbar--${theme} ${className}`} data-tools-open={expanded}>
    <div className="concept-document-toolbar-title">{theme === "mail" ? <Mail size={16} /> : theme === "social" ? <FileText size={15} /> : <Code2 size={15} />}<span>{theme === "mail" ? "메일 읽기" : theme === "social" ? "자료 게시물" : "Markdown"}</span><small title={title}>{title}</small></div>
    <button type="button" className="concept-document-tools-toggle" aria-label="문서 도구" aria-expanded={expanded} onClick={() => setExpanded(value => !value)}>{theme === "social" ? <MoreHorizontal size={23} /> : <><span>도구</span><ChevronDown size={15} /></>}</button>
    <div className="document-toolbar-actions concept-document-tools" role="group" aria-label="문서 도구" hidden={!expanded}><span data-highlighter-slot className="inline-flex shrink-0" />{children}</div>
  </div>;
}

export function ConceptDocumentIntro({ theme, title, category, children }: { theme: ConceptTheme; title: string; category?: string; children: ReactNode }) {
  return <div className={`skin-document-intro concept-document-intro concept-document-intro--${theme}`}>
    {title ? theme === "mail" ? <div className="concept-mail-sender"><span className="concept-mail-avatar" aria-hidden="true">{(category || "자료").replace(/^\d+\s*/, "").slice(0, 2)}</span><div><strong>{category || "자료 보관함"}</strong><small>받는 사람: 나 <ChevronDown size={12} /></small></div><span className="concept-mail-attachment"><Paperclip size={13} />자료</span></div> : theme === "social" ? <ConceptProfile name={category || "the.medicine"} detail="자료 게시물" /> : <div className="concept-editor-breadcrumb"><FileText size={13} /><span>{category || "references"}</span><span>›</span><span>{title}.md</span></div> : null}
    <div className="concept-document-intro-content" key="body">{children}</div>
  </div>;
}

export function ConceptDocumentNotice({ theme, title, children }: { theme: ConceptTheme; title: string; children: ReactNode }) {
  return <div className={`concept-document-notice concept-document-notice--${theme}`} aria-label={title}>{theme === "editor" ? <span className="concept-code-comment">{"// "}</span> : theme === "mail" ? <Paperclip size={13} aria-hidden="true" /> : <span className="concept-hashtag" aria-hidden="true">#</span>}<div>{children}</div></div>;
}
