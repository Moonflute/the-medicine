"use client";

import type { ReactNode } from "react";
import { useAppTheme } from "@/components/theme-provider";
import { isSpecialTheme } from "@/lib/themes";

/** Keep controls mounted while changing the surrounding presentation. */
export function SkinPanel({ title, children, className = "", ordinal, label, id }: {
  title: string; children: ReactNode; className?: string; ordinal?: number; label?: string; id?: string;
}) {
  const { theme } = useAppTheme();
  const special = isSpecialTheme(theme);
  return <section id={id} aria-label={label || title} className={special ? `skin-panel skin-panel--${theme}` : className}>
    {special ? <div className="skin-panel-heading" key="heading">
      <span className="skin-panel-mark" aria-hidden="true">{theme === "chat" ? title.slice(0, 2) : theme === "sheet" ? `A${ordinal ?? 1}` : theme === "mail" ? "✉" : theme === "social" ? title.slice(0, 1) : theme === "editor" ? "⌄" : `[${String(ordinal ?? 1).padStart(2, "0")}]`}</span>
      <span>{theme === "terminal" ? `> ${title}` : theme === "editor" ? `${title}.md` : title}</span>
    </div> : null}
    <div key="body" className={special ? "skin-panel-content" : "contents"}>{children}</div>
  </section>;
}
