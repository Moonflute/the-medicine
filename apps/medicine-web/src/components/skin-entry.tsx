"use client";

import type { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";

export function SkinEntry({ href, title, summary, meta, ordinal, children, className = "", id, onClick, onMouseEnter, active, tooltip }: {
  href: string; title: string; summary?: string; meta?: string; ordinal?: number; children: ReactNode; className?: string;
  id?: string; onClick?: MouseEventHandler<HTMLAnchorElement>; onMouseEnter?: MouseEventHandler<HTMLAnchorElement>; active?: boolean;
  tooltip?: string;
}) {
  const { theme } = useAppTheme();
  if (theme !== "chat" && theme !== "sheet" && theme !== "terminal") return <Link id={id} href={href} title={tooltip} className={className} onClick={onClick} onMouseEnter={onMouseEnter}>{children}</Link>;
  return <Link id={id} href={href} title={tooltip} className={`skin-entry skin-entry--${theme}`} onClick={onClick} onMouseEnter={onMouseEnter} data-active={active}>
    {theme === "chat" ? <><span className="skin-contact-avatar" aria-hidden="true">{title.replace(/^\d+\s*/, "").slice(0, 2)}</span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "자료 대화방 열기"}</span></span><ChevronRight size={16} aria-hidden="true" /></> : theme === "sheet" ? <><span className="skin-entry-row">{ordinal ?? "↗"}</span><strong>{title}</strong><span className="skin-entry-meta">{summary || meta || "자료"}</span><ChevronRight size={14} aria-hidden="true" /></> : <><span className="skin-entry-row" aria-hidden="true">[{ordinal === undefined ? "OPEN" : String(ordinal).padStart(2, "0")}]</span><span className="skin-entry-copy"><strong>{title}</strong><span>{summary || meta || "TYPE / READ"}</span></span><span aria-hidden="true">&gt;</span></>}
  </Link>;
}
