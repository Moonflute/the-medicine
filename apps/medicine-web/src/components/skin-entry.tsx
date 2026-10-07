"use client";

import type { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import { ChevronRight, FileText, Mail, Paperclip } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";
import { isConceptTheme, isSpecialTheme } from "@/lib/themes";

export function SkinEntry({ href, title, summary, meta, ordinal, children, className = "", id, onClick, onMouseEnter, active, tooltip }: {
  href: string; title: string; summary?: string; meta?: string; ordinal?: number; children: ReactNode; className?: string;
  id?: string; onClick?: MouseEventHandler<HTMLAnchorElement>; onMouseEnter?: MouseEventHandler<HTMLAnchorElement>; active?: boolean;
  tooltip?: string;
}) {
  const { theme } = useAppTheme();
  if (!isSpecialTheme(theme)) return <Link id={id} href={href} title={tooltip} className={className} onClick={onClick} onMouseEnter={onMouseEnter}>{children}</Link>;
  if (isConceptTheme(theme)) return <Link id={id} href={href} title={tooltip} className={`skin-entry skin-entry--${theme}`} onClick={onClick} onMouseEnter={onMouseEnter} data-active={active}>
    {theme === "mail" ? <><span className="concept-mail-dot" aria-hidden="true" /><span className="skin-entry-copy"><span className="concept-entry-sender">{meta || "자료 보관함"}</span><strong>{title}</strong><span>{summary || "첨부 자료 열기"}</span></span><span className="concept-entry-side" aria-hidden="true"><Mail size={15} /><Paperclip size={13} /></span></> : theme === "social" ? <><span className="concept-story-ring concept-story-ring--small" aria-hidden="true"><span>{title.replace(/^\d+\s*/, "").slice(0, 2)}</span></span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "자료 게시물"}</span></span><ChevronRight size={17} aria-hidden="true" /></> : <><FileText size={16} className="concept-file-icon" aria-hidden="true" /><span className="skin-entry-copy"><strong>{title}<em>.md</em></strong><span>{summary || meta || "Markdown"}</span></span><span className="concept-entry-side">{ordinal === undefined ? "MD" : String(ordinal).padStart(2, "0")}</span></>}
  </Link>;
  return <Link id={id} href={href} title={tooltip} className={`skin-entry skin-entry--${theme}`} onClick={onClick} onMouseEnter={onMouseEnter} data-active={active}>
    {theme === "chat" ? <><span className="skin-contact-avatar" aria-hidden="true">{title.replace(/^\d+\s*/, "").slice(0, 2)}</span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "자료 대화방 열기"}</span></span><ChevronRight size={16} aria-hidden="true" /></> : theme === "sheet" ? <><span className="skin-entry-row">{ordinal ?? "↗"}</span><strong>{title}</strong><span className="skin-entry-meta">{summary || meta || "자료"}</span><ChevronRight size={14} aria-hidden="true" /></> : <><span className="skin-entry-row" aria-hidden="true">[{ordinal === undefined ? "OPEN" : String(ordinal).padStart(2, "0")}]</span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "TYPE / READ"}</span></span><span aria-hidden="true">&gt;</span></>}
  </Link>;
}
