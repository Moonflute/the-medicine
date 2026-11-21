"use client";

import type { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import { ChevronRight, FileText, Mail, Paperclip } from "lucide-react";
import { useSkinTheme } from "@/components/theme-provider";
import { isConceptTheme, isSpecialTheme } from "@/lib/themes";
import { PixelSprite } from "@/components/pixel-ui";
import { ReviewBookmarkMark, type ReviewBookmarkTarget } from "@/components/review-bookmark-mark";

export function SkinEntry({ href, title, summary, meta, ordinal, children, className = "", id, onClick, onMouseEnter, active, tooltip, bookmark }: {
  href: string; title: string; summary?: string; meta?: string; ordinal?: number; children: ReactNode; className?: string;
  id?: string; onClick?: MouseEventHandler<HTMLAnchorElement>; onMouseEnter?: MouseEventHandler<HTMLAnchorElement>; active?: boolean;
  tooltip?: string;
  bookmark?: ReviewBookmarkTarget;
}) {
  const { theme } = useSkinTheme();
  const end = (fallback: ReactNode) => bookmark ? <ReviewBookmarkMark item={bookmark}>{fallback}</ReviewBookmarkMark> : fallback;
  if (!isSpecialTheme(theme)) return <Link id={id} href={href} title={tooltip} className={className} onClick={onClick} onMouseEnter={onMouseEnter}>{children}{bookmark ? end(<ChevronRight size={16} className="shrink-0 text-slate-400" aria-hidden="true" />) : null}</Link>;
  if (theme === "notebook") return <Link id={id} href={href} title={tooltip} className="skin-entry skin-entry--notebook" onClick={onClick} onMouseEnter={onMouseEnter} data-active={active}><span className="notebook-entry-number" aria-hidden="true">{ordinal === undefined ? "↳" : String(ordinal).padStart(2, "0")}</span><span className="skin-entry-copy"><strong>{title}</strong>{summary || meta ? <span>{summary || meta}</span> : null}</span>{end(<ChevronRight size={15} aria-hidden="true" />)}</Link>;
  if (theme === "pixel") return <Link id={id} href={href} title={tooltip} className="skin-entry skin-entry--pixel" onClick={onClick} onMouseEnter={onMouseEnter} data-active={active}><span className="pixel-entry-cursor" aria-hidden="true">▶</span><PixelSprite name="book" /><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "도감 열기"}</span></span>{end(<span className="pixel-entry-number" aria-hidden="true">{ordinal === undefined ? "↗" : String(ordinal).padStart(2, "0")}</span>)}</Link>;
  if (isConceptTheme(theme)) return <Link id={id} href={href} title={tooltip} className={`skin-entry skin-entry--${theme}`} onClick={onClick} onMouseEnter={onMouseEnter} data-active={active}>
    {theme === "mail" ? <><span className="concept-mail-dot" aria-hidden="true" /><span className="skin-entry-copy"><span className="concept-entry-sender">{meta || "자료 보관함"}</span><strong>{title}</strong><span>{summary || "첨부 자료 열기"}</span></span><span className="concept-entry-side">{end(<Mail size={15} aria-hidden="true" />)}<Paperclip size={13} aria-hidden="true" /></span></> : theme === "social" ? <><span className="concept-story-ring concept-story-ring--small" aria-hidden="true"><span>{title.replace(/^\d+\s*/, "").slice(0, 2)}</span></span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "자료 게시물"}</span></span>{end(<ChevronRight size={17} aria-hidden="true" />)}</> : <><FileText size={16} className="concept-file-icon" aria-hidden="true" /><span className="skin-entry-copy"><strong>{title}<em>.md</em></strong><span>{summary || meta || "Markdown"}</span></span><span className="concept-entry-side">{end(ordinal === undefined ? "MD" : String(ordinal).padStart(2, "0"))}</span></>}
  </Link>;
  return <Link id={id} href={href} title={tooltip} className={`skin-entry skin-entry--${theme}`} onClick={onClick} onMouseEnter={onMouseEnter} data-active={active}>
    {theme === "chat" ? <><span className="skin-contact-avatar" aria-hidden="true">{title.replace(/^\d+\s*/, "").slice(0, 2)}</span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "자료 대화방 열기"}</span></span>{end(<ChevronRight size={16} aria-hidden="true" />)}</> : theme === "sheet" ? <><span className="skin-entry-row">{ordinal ?? "↗"}</span><strong>{title}</strong><span className="skin-entry-meta">{summary || meta || "자료"}</span>{end(<ChevronRight size={14} aria-hidden="true" />)}</> : <><span className="skin-entry-row" aria-hidden="true">[{ordinal === undefined ? "OPEN" : String(ordinal).padStart(2, "0")}]</span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "TYPE / READ"}</span></span>{end(<span aria-hidden="true">&gt;</span>)}</>}
  </Link>;
}
